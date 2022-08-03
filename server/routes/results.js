const express = require("express");
const router = express.Router();
const db = require('../database-config');

router.get("/beaches", async (req, res) => {
      db.getDb("beach_life")
      .collection("beaches")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

module.exports = router;
