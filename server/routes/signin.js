const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "Sign In",
  });
});

module.exports = router;
