const express = require("express");
const {
  login,
  register,
  banUser,
  getResetPasswordCode,
} = require("./auth.controller");
const validator = require("./../../middleware/validator");
const {
  registerValidator,
  loginValidator,
  getResetPassCodeValidator,
} = require("./auth.validator");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");

const router = express.Router();

router.route("/register").post(validator(registerValidator), register);

router.route("/login").post(validator(loginValidator), login);

router
  .route("/getCode")
  .post(validator(getResetPassCodeValidator), getResetPasswordCode);

router.route("/ban/:userId").post(auth, isAdmin, banUser);

module.exports = router;
