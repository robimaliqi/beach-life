const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../../.env" });

const uri = process.env.MONGO_URI;

const dbConnection = new MongoClient(uri);

router.get("/", async (req, res) => {
    try {
      const db = dbConnection.db("beach_life");
      const beach = db.collection("beaches");
      const beaches = await beach.find((err, localBeaches) => {
        if (err) throw err;
      });
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          beaches: beaches,
        })
      );
    } finally {
      await dbConnection.close();
    }
  });

module.exports = router;
