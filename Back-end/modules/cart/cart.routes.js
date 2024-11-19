const express = require("express");
const { auth } = require("../../middleware/auth");
const validator = require("../../middleware/validator.js");
const { getCart, addToCart, removeFromCart } = require("./cart.controller.js");
const {
  addToCartValidator,
  removeFromCartValidator,
} = require("./cart.validator.js");

const router = express.Router();

router.route("/").get(auth, getCart);
router.route("/add").post(auth, validator(addToCartValidator), addToCart);
router
  .route("/remove")
  .post(auth, validator(removeFromCartValidator), removeFromCart);

module.exports = router;
