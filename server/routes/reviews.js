const express = require("express");
const router = express.Router();
const Review = require("../models/review");

router.get("/:id", async (req, res) => {
  const reviews = await Review.find({ beachId: req.params.id });
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      reviews: reviews,
    })
  );
});

router.post("/:id", async (req, res) => {
  body = {
    text: req.body.text,
    beachId: req.params.id,
  };
  const review = new Review(body);
  await review.save((err) => {
    if (err) {
      throw err;
    }
    res.send("");
  });
});

module.exports = router;
