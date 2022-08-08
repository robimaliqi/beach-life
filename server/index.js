const express = require("express");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const port = process.env.PORT || 1111; // If the .env file is not working then the port number will be 9999
const app = express();
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

// Routers
const homeRouter = require("./routes/home");
const resultsRouter = require("./routes/results");
const registerRouter = require("./routes/register");
const signinRouter = require("./routes/signin");
const reviewsRouter = require("./routes/reviews");


app.use("/home", homeRouter);
app.use("/results", resultsRouter);
app.use("/register", registerRouter);
app.use("/signin", signinRouter);
app.use("/reviews", reviewsRouter);

app.get("/", (req, res) => {
  res.send({ express: "Backend connected to React" });
});

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "beach_life"
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error", error);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
