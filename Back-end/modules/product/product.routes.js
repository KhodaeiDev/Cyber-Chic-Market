const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProduct,
  myFavorites,
  deleteProduct,
  discountedProducts,
  addToFavorites,
  removeFromFavorites,
} = require("./product.controller");
const { multerStorage } = require("./../../middleware/uoloader");
const { auth } = require("./../../middleware/auth");
const { isAdmin } = require("./../../middleware/isAdmin");
const { optionalAuth } = require("../../middleware/optionalAuth");

const upload = multerStorage("public/images/product");

const router = express.Router();

router
  .route("/")
  .post(auth, isAdmin, upload.array("images", 5), addProduct)
  .get(optionalAuth, getAllProducts);

router.route("/favorites").get(auth, myFavorites);
router.route("/discounted").get(discountedProducts);

router.route("/:id").delete(auth, isAdmin, deleteProduct).get(getProduct);

router
  .route("/favorite/:productId")
  .post(auth, addToFavorites)
  .delete(auth, removeFromFavorites);

module.exports = router;
