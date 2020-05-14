from flask import Flask, render_template, request, redirect
import datetime as datetime
from datetime import date, timedelta, datetime
from bokeh.plotting import figure
from bokeh.plotting import gridplot
from bokeh.models import Range1d
from bokeh.embed import components
import pandas as pd
import json


app=Flask(__name__)

with open('static/json/Button Mapping.json') as file:
    buttonDict = json.load(file)

df= pd.read_excel("Movie Seat Data.xlsx")

def query_df(theatre, hall, date, time):
    """Function to query a dataframe with the given pararmeters"""
    return df.query("Theatre == @theatre and Hall == @hall and Date == @date and Time == @time")


def timeData(name):
    """Function to get the 2D array of the times bought"""
    with open('static/json/overallDictTime-2.json') as file:
        dictTime = json.load(file)
    return dictTime[name]

def tixData(name):
    """Function to get the 2D array of the accumulated tickets bought"""
    with open('static/json/overallDictTix-2.json') as file:
        dictTix = json.load(file)
    return dictTix[name]

def creategraph(name):
    """Function to create bokeh graph"""
    ls = timeData(name)[0] + timeData(name)[1] + timeData(name)[2]
    maximum = min([max(ls), 20])
    mygraph = figure(plot_width=1000, plot_height=750, title=name, responsive=True)
    mygraph.background_fill_color = "black"
    mygraph.xgrid.grid_line_color = None
    mygraph.ygrid.grid_line_color = None
    mygraph.line(timeData(name)[0],tixData(name)[0], color='#479f78',legend="1st-5th day of movie showing", line_width=2)
    mygraph.line(timeData(name)[1],tixData(name)[1], color='#46c34c',legend="6th-10th day of movie showing", line_width=2)
    mygraph.line(timeData(name)[2],tixData(name)[2], color='#7eff00', legend="11th-15th day of movie showing", line_width=2)
    mygraph.line(timeData(name)[3],tixData(name)[3], color='#AF4BCE', legend="Overall Sales", line_width=2)
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
    with open('static/json/Seat Frequency.json') as sf:
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
    return render_template('/frequencycharts.html',name="Lido Hall 1",test=freq_data,maxi=maxi,mini=mini)


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
