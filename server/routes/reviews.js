const express = require("express");
const router = express.Router();
const Review = require("../models/review");

router.get("/:id", async (req, res) => {
  const reviews = await Review.find({ beachId: req.params.id }).populate("user");;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      reviews: reviews.reverse(),
    })
  );
});

router.post("/:id", (req, res) => {
  body = {
    text: req.body.text,
    user: req.session.user,
    beachId: req.params.id,
  };
  const review = new Review(body);
  review.save((err) => {
    if (err) {
      throw err;
    }
    res.send("");
  });
});

module.exports = router;
