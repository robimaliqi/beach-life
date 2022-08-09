const mongoose = require("mongoose");
require("../mongodb_helper");
const Review = require("../../models/review");

describe("Review schema", () => {
  beforeEach((done) => {
    mongoose.connection.collections.reviews.drop(() => {
      done();
    });
  });

  it("should contain a text property", () => {
    const review = new Review({
      text: "This is a review",
    });
    expect(review.text).toEqual("This is a review");
  });
});
