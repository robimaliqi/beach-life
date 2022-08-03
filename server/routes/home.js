const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "What a beaching life",
  });
});

// router.get("/beaches", (req, res) => {
//   async function run() {
//     try {
//       const db = client.db("beach_life");
//       const beaches = db.collection("beaches");
  
//       const query = { name: "Shoreham Beach" };
//       const beach = await beaches.findOne(query);
//       console.log(beach);
//     } finally {
//       await client.close();
//     }
//   }
  
//   run().catch(console.dir);
// })

module.exports = router;
