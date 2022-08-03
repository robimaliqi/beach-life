const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../../.env" });

const uri = process.env.MONGO_URI;

const dbConnection = new MongoClient(uri);

router.get("/", (req, res) => {
  async function run() {
    try {
      const db = dbConnection.db("beach_life");
      const beaches = db.collection("beaches");

      const beach = await beaches.find((err, localBeaches) => {
        if (err) throw err;
      });
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          beaches: beach,
        })
      );
    } finally {
      await dbConnection.close();
    }
  }

  run().catch(console.dir);
});

module.exports = router;
