const express = require("express");
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get("/", (req, res) => {
  res.json({
    name: "Register",
  });
});

router.post("/new", async (req, res) => {
  console.log(req.body)
  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.save((err) => {
    if (err) {
      throw err;
    }
    res.send("")
  });
});

module.exports = router;
