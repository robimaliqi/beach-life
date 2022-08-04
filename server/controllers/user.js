const User = require("../models/user");

const userController = {
  GetUsers: async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  },
};

module.exports = userController;
