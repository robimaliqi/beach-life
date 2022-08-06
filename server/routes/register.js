const express = require("express");
const router = express.Router();
const User = require('../models/user')

router.get("/", (req, res) => {
  res.json({
    name: "Register",
  });
});

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      throw err;
    }
    res.send("")
  });
});

module.exports = router;
