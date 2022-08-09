const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {type: String,
    require: true,
  },
  lastName: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
