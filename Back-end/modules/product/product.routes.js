const express = require("express");
const {
  addProduct,
  addToFavorit,
  getAllProducts,
  getProduct,
  myFavorites,
  priceSortProducts,
  removeFavorites,
  deleteProduct,
  addOrRemoveFavorit,
} = require("./product.controller");
const { multerStorage } = require("./../../middleware/uoloader");
const { auth } = require("./../../middleware/auth");
const { isAdmin } = require("./../../middleware/isAdmin");

const upload = multerStorage("public/images/product");

const router = express.Router();

router.route("/").post(auth, isAdmin, upload.array("images", 5), addProduct);
//   .get(getAllProducts);

router.route("/favorites").get(auth, myFavorites);

router.route("/:id").delete(deleteProduct).get(getProduct);
router.route("/favorite/:productID").post(auth, addOrRemoveFavorit);

// // * Sort routes
// router.route("/priceSort/:subcategoryhref").get(priceSortProducts);

module.exports = router;
