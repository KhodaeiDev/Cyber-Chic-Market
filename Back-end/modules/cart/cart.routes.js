const express = require("express");
const { auth } = require("../../middleware/auth");
const { getCart, addToCart, removeFromCart } = require("./cart.controller.js");

const router = express.Router();

router.route("/").get(auth, getCart);
router.route("/add").get(auth, addToCart);
router.route("/remove").get(auth, removeFromCart);

module.exports = router;
