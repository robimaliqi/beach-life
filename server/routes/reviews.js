const express = require("express");
const router = express.Router();
const Review = require("../models/review");

router.get("/", (req, res) => {
  res.json({
    name: "Reviews",
  });
});

router.post("/:id", (req, res) => {
  console.log(req.body);
  body = {
    text: req.body.text,
    beachId: req.params.id,
  }
  const review = new Review(body);
  review.save((err) => {
    if (err) {
      throw err;
    }
    res.send("");
  });
});

module.exports = router;
