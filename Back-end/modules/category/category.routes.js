const express = require("express");
const {
  createCategory,
  createSubCategory,
  getCategoryProducts,
  fetchCategories,
} = require("./category.controller");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");
const validator = require("../../middleware/validator");
const {
  categoryValidator,
  subCategoryValidator,
} = require("./category.validator");

const router = express.Router();

router
  .route("/")
  .post(auth, isAdmin, validator(categoryValidator), createCategory)
  .get(fetchCategories);

router
  .route("/sub/")
  .post(auth, isAdmin, validator(subCategoryValidator), createSubCategory);

// router.route("/:href").get(getCategoryProducts);

module.exports = router;
