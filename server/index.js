const express = require("express");
const path = require("path");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const port = process.env.PORT || 1111; // If the .env file is not working then the port number will be 1111
const app = express();
const mongoose = require("mongoose");
const session = require("cookie-session");

// middleware
app.use(express.json());
app.use(cors());

// Routers
const homeRouter = require("./routes/home");
const resultsRouter = require("./routes/results");
const registerRouter = require("./routes/register");
const signinRouter = require("./routes/signin");
const reviewsRouter = require("./routes/reviews");
const beachesRouter = require("./routes/beaches");

// // middleware function to check for logged-in users
// const sessionChecker = (req, res, next) => {
//   if (!req.session.user && !req.cookies.user_sid) {
//     console.log(req.cookies.user_sid);
//     console.log("anything");
//     res.redirect("/signin/new");
//   } else {
//     next();
//   }
// };

app.use(
  session({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: false,
    },
  })
);

app.use("/home", homeRouter);
app.use("/results", resultsRouter);
app.use("/register", registerRouter);
app.use("/signin", signinRouter);
app.use("/reviews", reviewsRouter);
app.use("/beaches", beachesRouter);

app.get("/preload", (req, res) => {
  res.json({ status: 200 });
  // res.send({ express: "Backend connected to React" });
});

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "beach_life",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error", error);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Check Heroku is working
if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static(path.join(__dirname, "../client/build")));
}

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./client/build", "../public/index.html"));
});

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
