const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "This life is beaching",
  });
});

module.exports = router;
