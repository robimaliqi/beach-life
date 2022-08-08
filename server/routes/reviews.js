const express = require("express");
const router = express.Router();
const Review = require('../models/review')

router.get("/", (req, res) => {
  res.json({
    name: "Reviews",
  });
});

router.post('/new', (req, res) => {
  console.log(req.body)
  const review = new Review(req.body);
  review.save((err) => {
    if (err) {
      throw err;
    }
    res.send("")
  });
})

module.exports = router;
