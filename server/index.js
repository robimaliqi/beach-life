const express = require("express");
const app = express();
const port = process.env.PORT || 1234;
const home = require('./routes/home');

app.use('/api/home', home);

app.get("/api", (req, res) => {
  res.send({ express: "Backend connected to React" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
