const mongoose = require("mongoose");
require("../mongodb_helper");
const User = require("../../models/user");

describe("User schema", () => {
  it("should contain a first name property", () => {
    const user = new User({
      firstName: "Test",
    });
    expect(user.firstName).toEqual("Test");
  });
});
