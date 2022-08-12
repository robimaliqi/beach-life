Beach Finder
==========
*The beach finds a way...*

***By Aisha, Hafiz, Joe, Robi & Sophie***

Fancy a quick dip in the sea or a nice romantic walk on the beach? Not sure where your nearest beach actually is? Fear no more for Beach Finder is here. Your one-stop-shop for locating all beaches in England (other countries possibly coming soon), along with a forecast for your chosen beach for the next 7 days, as well as tide information so you'll never miss high or low tide again!

The project was built using the MERN tech stack. The database is connected to MongoDB Atlas via Mongoose. The frontend was built using React, the backend server uses Express and Node. 

We used Jest as the test framework as well as React Testing Library. 

# How to use

````console
cd client
npm install
cd ../server
npm install
````

To run the server
````console
cd server
nodemon
````

To run the app
````console
cd client
npm start
````

# Testing
To run the unit tests on the backend:
```terminal
cd server
jest
```

To run the unit tests on the frontend:
```terminal
cd client
npm test
```

# Dependencies and APIs
The map is rendered using [TomTom's Map API](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction). 

To get the information regarding high/low tides, we used the [Stormglass API](https://stormglass.io/). The free key that we used is limited to 10 calls a day, which was problematic for testing however the API was much easier to work with than the Admiralty Tidal API which we also came across. 

The weather information uses [Visual Crossing's Weather API](https://www.visualcrossing.com/weather-api) to get the 7 day forecast.

[Mapbox](https://www.mapbox.com/) was used to get the address of the beach using the latitude and longitude from the beach itself. 

We created a JavaScript object locally for the beaches; we found the information on [Environment Agency's Bathing Water website](https://environment.data.gov.uk/bwq/profiles/) and they are also stored on the MongoDB Atlas database.

# Approaching the task
Coming up with a solid idea of what we wanted to achieve was quite the challenge itself. We bounced ideas back and forth only knowing we were building something related to holidays. We settled on the idea of Beach Finder, decided what tech stack we wanted to use and why we thought it was appropriate, then looked at features and functionality we would like to implement. 

We came up with the mockup (see below) to initially help guide our journey throughout the project, however we ultimately decided that the number of pages didn't fit within the spirit of React web applications. 

![alt our mockup](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C67eed4c333cf41939ff2690a971adc19/projects/MsOxqHTlBh/pages/d97f3b133bd64695b87f11948a674509/image/d97f3b133bd64695b87f11948a674509.png?1659371621637)

The task was then broken down into user stories using GitHub Projects, and then broken further down into tasks for the team to get started on. 

We knew we wanted to work with React as we believed it would not only be a good experience to try out one of the most popular frameworks when it comes to frontend web development, but also thought the dynamic features of React would create a more engaging website. 

We also knew we wanted a map to show the locations of beaches. Ideally we wanted this to be UK-wide, but finding that data proved difficult in the time restraints we had, so we settled with England to begin with. 

The map API was a trickier challenge than anticipated. We wanted to use Google Maps, but upon looking into it we found that the JavaScript API required a fee and was no longer free. After digging around, we settled on TomTom's API due to the documentation that was readily available. 

The weather and tide APIs were also challenging. Understanding how to access them and get the required information whilst avoiding either call limits, or even just understanding where to place the calls inside React.

The next biggest hurdle was adding pins for each beach location that we found from the Environment Agency's website. Our first plan was to to have our backend connect to our MongoDB Atlas cluster, where we uploaded the CSV file to Atlas and then have our frontend get the pins from the database and place them on the map. We did get this working, however it was very inconsistent and we could not find a way to reliably and consistently get the pins to load. To get around this, we stored the beach information locally in a JavaScript object.

We did also end up using the beaches collection that we created in Atlas in order for us to create user reviews for the beaches.

Understanding how the front and backend connect and how to get React to submit or fetch the data from the server was confusing, especially for user information when it came to logging in and reflecting that change of state on the website. This took some getting used to, but between pairing and researching we got more comfortable with it. 

Initially we did want to stage the website on Heroku, but due to time constraints we did not get round to successfully doing this. 
