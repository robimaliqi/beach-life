const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  beachId: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
