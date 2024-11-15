const express = require("express");
const {
  createCategory,
  createSubCategory,
  getCategoryProducts,
  fetchCategories,
  fetchAllCategories,
  editCategory,
  deleteCategory,
  getAllSubCategories,
  getSubCategory,
  deleteSubCategory,
} = require("./category.controller");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");
const validator = require("../../middleware/validator");
const {
  categoryValidator,
  subCategoryValidator,
} = require("./category.validator");
const { multerStorage } = require("../../middleware/uoloader");
const uploader = multerStorage("/public/images/categoryIcon");

const router = express.Router();

router
  .route("/")
  .post(
    auth,
    isAdmin,
    uploader.single("image"),
    validator(categoryValidator),
    createCategory
  )
  .get(fetchAllCategories);

router
  .route("/:categoryId")
  .put(auth, isAdmin, editCategory)
  .delete(auth, isAdmin, deleteCategory);

router
  .route("/sub/")
  .post(auth, isAdmin, validator(subCategoryValidator), createSubCategory)
  .get(getAllSubCategories);

router
  .route("/sub/:categoryId")
  .get(getSubCategory)
  .delete(auth, isAdmin, deleteSubCategory);

// router.route("/:href").get(getCategoryProducts);

module.exports = router;
