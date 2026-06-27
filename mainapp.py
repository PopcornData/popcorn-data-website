from flask import Flask, render_template, request, redirect
import datetime as datetime
from datetime import date, timedelta, datetime
from bokeh.plotting import figure
from bokeh.models import Range1d
from bokeh.embed import components
import pandas as pd
import json
import os
from urllib.parse import unquote


app=Flask(__name__)


class DecodePathMiddleware:
    """Vercel's Python runtime passes a percent-encoded PATH_INFO to the WSGI
    app, so Werkzeug never decodes ``%20`` etc. into the real characters. Decode
    it here before routing so URL segments with spaces/colons resolve correctly.
    """

    def __init__(self, wsgi_app):
        self.wsgi_app = wsgi_app

    def __call__(self, environ, start_response):
        environ['PATH_INFO'] = unquote(environ.get('PATH_INFO', ''))
        return self.wsgi_app(environ, start_response)


app.wsgi_app = DecodePathMiddleware(app.wsgi_app)

# Resolve paths relative to this file so data loads correctly regardless of the
# current working directory (e.g. on Vercel serverless functions).
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE_DIR, 'static/json/Button Mapping.json')) as file:
    buttonDict = json.load(file)

df= pd.read_excel(os.path.join(BASE_DIR, "Movie Seat Data.xlsx"))

def query_df(theatre, hall, date, time):
    """Function to query a dataframe with the given pararmeters"""
    return df.query("Theatre == @theatre and Hall == @hall and Date == @date and Time == @time")


def timeData(name):
    """Function to get the 2D array of the times bought"""
    with open(os.path.join(BASE_DIR, 'static/json/overallDictTime-2.json')) as file:
        dictTime = json.load(file)
    return dictTime[name]

def tixData(name):
    """Function to get the 2D array of the accumulated tickets bought"""
    with open(os.path.join(BASE_DIR, 'static/json/overallDictTix-2.json')) as file:
        dictTix = json.load(file)
    return dictTix[name]

def creategraph(name):
    """Function to create bokeh graph"""
    ls = timeData(name)[0] + timeData(name)[1] + timeData(name)[2]
    maximum = min([max(ls), 20])
    mygraph = figure(width=1000, height=750, title=name, sizing_mode="scale_width")
    mygraph.background_fill_color = "black"
    mygraph.xgrid.grid_line_color = None
    mygraph.ygrid.grid_line_color = None
    mygraph.line(timeData(name)[0],tixData(name)[0], color='#479f78',legend_label="1st-5th day of movie showing", line_width=2)
    mygraph.line(timeData(name)[1],tixData(name)[1], color='#46c34c',legend_label="6th-10th day of movie showing", line_width=2)
    mygraph.line(timeData(name)[2],tixData(name)[2], color='#7eff00', legend_label="11th-15th day of movie showing", line_width=2)
    mygraph.line(timeData(name)[3],tixData(name)[3], color='#AF4BCE', legend_label="Overall Sales", line_width=2)
    mygraph.x_range.flipped= True
    mygraph.xaxis.axis_label="Days Left To Movie Showings"
    mygraph.yaxis.axis_label="Cummulated Tickets Bought for " + name
    mygraph.xaxis.major_label_text_font_size = "10pt"
    mygraph.yaxis.major_label_text_font_size = "12pt"
    mygraph.x_range = Range1d(maximum, 0, bounds=(0, maximum))
    return mygraph


def make_plot(name):
    plot = creategraph(name)
    script, div = components(plot)
    return script, div

def seat_frequency(hall):
    """Function to get the frequency of seats bought for each hall"""
    with open(os.path.join(BASE_DIR, 'static/json/Seat Frequency.json')) as sf:
        seat_freq = json.load(sf)
    return seat_freq[hall]


#Routes for the website
@app.route('/')
def home():
    return render_template("home.html")

@app.route('/seat-buy-order')
def seat_buy_order_home():
    return render_template('/seat_buy_order_home.html')


@app.route('/seat-buy-order/<movie>')
def seat_buy_order_movie(movie):
    return render_template('/seat_buy_order_movie.html', movie=movie, data=buttonDict)


@app.route('/seat-buy-order/<movie>/<theatre>/<hall>/<date>/<time>')
def seat_buy_order(movie,theatre, hall, date, time):
    order = json.loads(query_df(theatre, hall, date, time)['Buy Order'].values[0].replace("'","\""))
    #/Jcube/JCube Hall 1/23 Jan 2020/16:00
    return render_template('/seat_buy_order.html', title = "Seat Buy Order",order = order, hall=hall.lower().replace(' ','_'),data= buttonDict,movie=movie, theatre=theatre,hall_name = hall, date=date,time=time)


@app.route('/frequencycharts/<name>')
def hall_seat_frequency(name):
    freq_data=seat_frequency(name)
    mini=0
    maxi=0
    for k,v in freq_data.items():
      if(v<mini):
        mini=v
      if(v>maxi):
        maxi=v
    return render_template('/frequencycharts.html',name=name.lower().replace(' ','_'),test=freq_data,maxi=maxi,mini=mini, hall=name)

@app.route('/frequencycharts')
def hall_seat_options():
    """Landing page."""
    freq_data=seat_frequency("Lido Hall 1")
    mini=0
    maxi=0
    for k,v in freq_data.items():
      if(v<mini):
        mini=v
      if(v>maxi):
        maxi=v
    return render_template('/frequencycharts.html',name="Lido Hall 1".lower().replace(' ','_'),test=freq_data,maxi=maxi,mini=mini, hall="Lido Hall 1")


@app.route('/rateofbuying/')
def options_page():
    return render_template('rateofbuying.html')

# ONCE USER HAS SELECTED A MOVIE - RATE OF BUYING
@app.route('/rateofbuying/<name>/')
def show_dashboard(name):
    plots = []
    plots.append(make_plot(name))
    return render_template('rateofbuying.html', plots=plots, name=name)



if __name__=="__main__":
    app.run(debug=True)
