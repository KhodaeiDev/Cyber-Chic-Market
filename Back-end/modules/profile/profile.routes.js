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

router.route("/").get(auth, getUserInfo);
// router.route("/edit").post(authMiddleware, controller.editProfile);
// router.route("/updatePassword").post(authMiddleware, controller.updatePassword);

router
  .route("/me/addresses")
  .post(auth, createAddress)
  .get(auth, getAllUserAdresses);

router.route("/me/addresses/:addressId").delete(auth, removeAddress);

module.exports = router;
