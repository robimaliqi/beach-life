Beach Finder
==========
*The beach finds a way...*

By Aisha, Hafiz, Joe, Robi & Sophie

Fancy a quick dip in the sea or a nice romantic walk on the beach? Not sure where your nearest beach actually is? Fear no more for Beach Finder is here. Your one-stop-shop for locating all beaches in England (other countries possibly coming soon), along with a forecast for your chosen beach for the next 7 days, as well as tide information so you'll never miss high or low tide again!

The project was built using the MERN tech stack. The database is connected to MongoDB Atlas via Mongoose. The front-end was built using React, the backend server uses Express and Node. 

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
To run the unit tests on the back-end:
```terminal
cd server
npm test
```

To run the unit tests on the front-end:
```terminal
cd client
npm test
```

# Dependencies and APIs
The map is rendered using [TomTom's Map API](https://developer.tomtom.com/map-display-api/documentation/product-information/introduction). 

To get the information regarding high/low tides, we used the [Stormglass API](https://stormglass.io/). The free key that we used is limited to 10 calls a day, which was problematic for testing however the API was much easier to work with than the Admiralty Tidal API which we also came across. 

The weather information uses [Visual Crossing's Weather API](https://www.visualcrossing.com/weather-api).

The beaches is a CSV file we have loaded locally, which we found on [Environment Agency's Bathing Water website](https://environment.data.gov.uk/bwq/profiles/).

# Approaching the task
Coming up with a solid idea of what we wanted to achieve was quite the challenge itself. We bounced ideas back and forth only knowing we were building something related to holidays. We settled on the idea of Beach Finder, decided what tech stack we wanted to use and why we thought it was appropriate, then looked at features and functionality we would like to implement. 

The task was then broken down into user stories using GitHub Projects, and then broken further down into tasks for the team to get started on. 

We knew we wanted to work with React, as we believed it would not only be a good experience to try out one of the most popular frameworks when it comes to frontend web development, and we also thought the dynamic features of React would create a more engaging website. 

We also knew we wanted a map to show the locations of beaches. Ideally we wanted this to be UK-wide, but finding that data proved difficult in the time restraints we had, so we settled with England to begin with. 

The map API was a trickier challenge than anticipated too. At first we all wanted to use Google Maps, but upon looking into it, we found that the JavaScript API required a fee and was no longer free. After digging around, we settled on TomTom's API due to the better documentation that was readily available. 

With the map solved, the next biggest hurdle was adding pins for each beach location that we found from the Environment Agency's website. Our first plan was to to have our backend connect to our MongoDB Atlas cluster and then have our frontend get the pins from the database and place them on the map. We did get this working, however it was very inconsistent and we could not find a way to reliably and consistently get the pins to load. To get around this issue, we ultimately decided to store the beach locations in a CSV file which we then turned into a JavaScript object. 

The weather and tide APIs were also problematic. Understanding how to access them and get the required information whilst avoiding either call limits, or even just understanding where to place the calls inside React caused a lot of headaches for us all. 

Understanding how the front and backend connect and how to get React to submit or fetch the data from the server was confusing, especially for user information when it came to logging in and reflecting that change of state on the website. 

# Issues with React?
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


