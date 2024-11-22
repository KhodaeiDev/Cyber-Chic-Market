const exporess = require("express");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");
const { getAllOrders, updateOrder } = require("./order.controller.js");

const router = exporess.Router();

router.route("/").get(auth, getAllOrders);
router.route("/:id").patch(auth, isAdmin, updateOrder);

module.exports = router;
