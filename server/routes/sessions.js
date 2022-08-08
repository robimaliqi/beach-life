const express = require("express");
const router = express.Router();

const SessionsController = require("../controllers/sessions");

router.get("/register", SessionsController.New);
router.post("/", SessionsController.Create);
router.delete("/", SessionsController.Destroy);

module.exports = router;