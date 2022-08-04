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

  it("should contain a last name property", () => {
    const user = new User({
      lastName: "Example",
    });
    expect(user.lastName).toEqual("Example");
  });

  it("should contain an email property", () => {
    const user = new User({
      email: "test@example.com",
    });
    expect(user.email).toEqual("test@example.com");
  });
});
