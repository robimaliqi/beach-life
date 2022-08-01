const express = require("express");
const app = express();
const port = process.env.PORT || 1234;

app.get("/express_backend", (req, res) => {
  res.send({ express: "NICE BACKEND" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
