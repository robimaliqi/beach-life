const express = require("express");
const app = express();
const port = process.env.PORT || 9999; // If the .env file is not working then the port number will be 9999
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

// middleware
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.send({ express: "Backend connected to React" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
