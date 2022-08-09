const express = require("express");
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get("/", (req, res) => {
  res.json({
    name: "Sign In",
  });
});

router.post("/new", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        req.session.user = user;
        res.send("200");
        res.status(200)
      } else {
        res.status(401)
        res.send("401");
        console.log('not a valid password')
      }
    } else {
      res.status(401)
      res.send("401");
      console.log('not a valid email')
    }

})

module.exports = router;
