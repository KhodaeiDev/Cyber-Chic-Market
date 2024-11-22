const exporess = require("express");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");
const validator = require("../../middleware/validator.js");
const {
  getAllOrders,
  updateOrder,
  ordersRegistration,
} = require("./order.controller.js");
const { addOrderVAlidator } = require("./order.validator.js");

const router = exporess.Router();

router.route("/").get(auth, getAllOrders);
router
  .route("/verify")
  .post(auth, validator(addOrderVAlidator), ordersRegistration);
// router.route("/:id").put(auth, isAdmin, updateOrder);

module.exports = router;
