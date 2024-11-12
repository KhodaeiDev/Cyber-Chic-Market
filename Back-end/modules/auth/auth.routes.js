const express = require("express");
const { login, register, getMe } = require("./auth.controller");
const validator = require("./../../middleware/validator");
const { registerValidator, loginValidator } = require("./auth.validator");
const { auth } = require("../../middleware/auth");

const router = express.Router();

router.route("/register").post(validator(registerValidator), register);

router.route("/login").post(validator(loginValidator), login);
router.route("/me").get(auth, getMe);

module.exports = router;
