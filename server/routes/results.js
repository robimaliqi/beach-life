const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../../.env" });

const uri = process.env.MONGO_URI;

const dbConnection = new MongoClient(uri);

router.get("/", async (req, res) => {
      dbConnection.db("beach_life")
      .collection("beaches")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

module.exports = router;
