const express = require("express");
const controller = require("./profile.controller");
const { authMiddleware } = require("./../../middleware/auth");
const router = express.Router();

router.route("/").get(authMiddleware, controller.getUserInfo);

module.exports = router;
