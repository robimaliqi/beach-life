const express = require("express");
const dotenv = require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const port = process.env.PORT || 1111; // If the .env file is not working then the port number will be 9999
const app = express();
const database = require("./database-config");

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

app.listen(port, () => {
  database.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Listening on port ${port}`);
});
