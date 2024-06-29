const express = require("express");
const controller = require("./profile.controller");
const { authMiddleware } = require("./../../middleware/auth");
const router = express.Router();

router.route("/").get(authMiddleware, controller.getUserInfo);
router.route("/edit").post(authMiddleware, controller.editProfile);
router.route("/updatePassword").post(authMiddleware, controller.updatePassword);

module.exports = router;
