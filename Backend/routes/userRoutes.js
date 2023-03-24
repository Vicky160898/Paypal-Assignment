const express = require("express");
const { SingupUser, LoginUser } = require("../controller/userController");
const router = express.Router();

router.post("/", SingupUser);
router.post("/login", LoginUser);

module.exports = router;
