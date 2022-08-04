const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });

const uri = process.env.MONGO_URI;

const db = new MongoClient(uri);

var _db;

module.exports = {
  connectToServer: function (callback) {
    db.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("beach_life");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
