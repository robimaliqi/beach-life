const mongoose = require("mongoose");

beforeAll((done) => {
  mongoose
    .connect("mongodb://localhost:27017/beachLife", {
      UseNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("MongoDB connection error", error);
    });

  afterAll((done) => {
    mongoose.connection.close(true, () => {
      done();
    });
  });
});
