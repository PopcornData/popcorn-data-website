<br />
<p align="center">
  <a href="https://popcorn-data.herokuapp.com/">
    <img src="static/images/popcornDataLogo.png" alt="Logo" width="150" height="150">
  </a>

  <h1 align="center">PopcornData</h1>

  <p align="center">
  <a href="https://travis-ci.com/PopcornData/popcorn-data-website">
    <img src="https://travis-ci.com/PopcornData/popcorn-data-website.svg?branch=master">
  </a>
  <br />
    A project to analyse and visualise cinema seating patterns
    <br />
    <br />
    <b>
      <a href="https://popcorn-data.herokuapp.com/">Website</a>
    </b>
    .
    <b>
    <a href="https://medium.com/analytics-vidhya/popcorn-data-analysing-cinema-seating-patterns-part-ii-987fbde9d363">Medium Article</a>
    </b>
  </p>
</p>


## About
PopcornData is a website made to analyse movie trends in Singapore — from which seats people prefer to the way they like to watch different movies. 
The data used was scraped from the website of Shaw Theatres, one of the biggest cinema chains in Singapore, using a webscraper we built with Python and Selenium ([shaw-scraper](https://github.com/PopcornData/shaw-scraper))

The data scraped was for January 2020 and using it we were able to build interesting visualisations about how people watched different movies, at different halls, theatres and timings! 

Some unique visualisations include:

* [**Heat maps**](https://popcorn-data.herokuapp.com/frequencycharts/JCube%20Hall%205) to show the most popular seats
<img src="https://github.com/PopcornData/popcorn-data-website/blob/master/static/images/frequencyChart.png"/>

* [**Animations**](https://popcorn-data.herokuapp.com/seat-buy-order/Jumanji:%20The%20Next%20Level/Nex/nex%20Hall%206/27%20Jan%202020/16:10) to show the order in which seats were bought
<img src="https://github.com/PopcornData/popcorn-data-website/blob/master/static/images/seat_buy_order_gif.gif"/>


## Medium Articles
We documented our project journey in these articles:

**Obtaining the Data**<br>
https://towardsdatascience.com/popcorn-data-analysing-cinema-seating-patterns-part-1-a0b2a5c2c19a

**Analysing and Visualising the Data**<br>
https://medium.com/analytics-vidhya/popcorn-data-analysing-cinema-seating-patterns-part-ii-987fbde9d363

## Deployment
Deployed on [Heroku](https://www.heroku.com)

## Built With
* [Bootstrap](https://getbootstrap.com)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Google Data Studio](https://datastudio.google.com/)
* [jQuery](https://jquery.com)
* [jQuery Seat Charts](https://github.com/mateuszmarkowski/jQuery-Seat-Charts)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)


## Team
* [Noel Mathew Isaac](https://github.com/noelmathewisaac)
* [Vanshiqa Agrawal](https://github.com/vanshiqa)

## Acknowledgements 
* [BokehJS](https://github.com/bokeh/bokeh/tree/master/bokehjs)
* [DevFolio](https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/)
* [Font Awesome](https://fontawesome.com)
* [Google Fonts](https://fonts.google.com/)
* [Pandas](https://pandas.pydata.org/)


