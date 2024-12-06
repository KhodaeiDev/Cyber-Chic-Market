const express = require("express");
const {
  editProfile,
  updatePassword,
  getUserInfo,
  createAddress,
  getAllUserAdresses,
  removeAddress,
} = require("./profile.controller");
const { auth } = require("./../../middleware/auth");
const router = express.Router();
const validator = require("./../../middleware/validator");
const { editValidator } = require("./profile.validator");

router.route("/").get(auth, getUserInfo);

router.route("/edit").post(auth, validator(editValidator), editProfile);
// router.route("/updatePassword").post(auth, controller.updatePassword);

router
  .route("/me/addresses")
  .post(auth, createAddress)
  .get(auth, getAllUserAdresses);

router.route("/me/addresses/:addressId").delete(auth, removeAddress);

module.exports = router;
