const mongoose = require("mongoose");
require("../mongodb_helper");
const User = require("../../models/user");

describe("User schema", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

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

  it("should contain a password property", () => {
    const user = new User({
      password: "password123",
    });
    expect(user.password).toEqual("password123");
  });

  it("can save a new user", (done) => {
    const user = new User({
      firstName: "Test",
      lastName: "Example",
      email: "test@example.com",
      password: "password123",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          firstName: "Test",
          lastName: "Example",
          email: "test@example.com",
          password: "password123",
        });
        done();
      });
    });
  });
});
