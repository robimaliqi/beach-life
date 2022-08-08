const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/user");

router.get("/new", UsersController.New);
router.post("/", UsersController.Create);

module.exports = router;
