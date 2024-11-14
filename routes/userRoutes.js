const express = require("express");
const { createUser } = require("../controllers/userController");
const router = express.Router();

router.post("/add-user", createUser);

module.exports = router;