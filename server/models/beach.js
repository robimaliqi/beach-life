const mongoose = require("mongoose");

const beachSchema = new mongoose.Schema({
  EUBWID: String,
  name: String,
  samplePointID: String,
  yearDesignated: String,
  district: String,
  county: String,
  country: String,
  easting: String,
  northing: String,
  lat: String,
  long: String,
  appointedSewerageUndertaker: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const Beach = mongoose.model("Beach", beachSchema);

module.exports = Beach;