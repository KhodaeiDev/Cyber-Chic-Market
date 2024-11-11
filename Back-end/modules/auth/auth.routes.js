const express = require("express");
const { login, register } = require("./auth.controller");
const validator = require("./../../middleware/validator");
const { registerValidator, loginValidator } = require("./auth.validator");

const router = express.Router();

router.route("/register").post(validator(registerValidator), register);

router.route("/login").post(validator(loginValidator), login);

module.exports = router;
