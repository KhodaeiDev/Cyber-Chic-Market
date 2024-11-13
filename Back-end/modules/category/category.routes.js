const express = require("express");
const {
  createCategory,
  getCategoryAndSubCategory,
  getCategoryProducts,
} = require("./category.controller");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");
const validator = require("../../middleware/validator");
const { categoryValidator } = require("./category.validator");

const router = express.Router();

router
  .route("/")
  .post(auth, isAdmin, validator(categoryValidator), createCategory)
  .get(controller.getCategoryAndSubCategory);

router.route("/:href").get(controller.getCategoryProducts);

module.exports = router;
