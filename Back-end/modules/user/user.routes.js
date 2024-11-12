const express = require("express");
const { banUser, createAddress, removeAddress } = require("./user.controller");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");

const router = express.Router();

router.route("/ban/:userId").post(auth, isAdmin, banUser);
router.route("/me/addresses").post(auth, createAddress);

router
  .route("/me/addresses/:addressId")
  .post(auth, createAddress)
  .delete(auth, removeAddress);

module.exports = router;
