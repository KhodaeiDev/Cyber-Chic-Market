const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProduct,
  myFavorites,
  deleteProduct,
  addOrRemoveFavorit,
} = require("./product.controller");
const { multerStorage } = require("./../../middleware/uoloader");
const { auth } = require("./../../middleware/auth");
const { isAdmin } = require("./../../middleware/isAdmin");

const upload = multerStorage("public/images/product");

const router = express.Router();

router
  .route("/")
  .post(auth, isAdmin, upload.array("images", 5), addProduct)
  .get(getAllProducts);

router.route("/favorites").get(auth, myFavorites);

router.route("/:id").delete(auth, isAdmin, deleteProduct).get(getProduct);
router.route("/favorite/:productID").post(auth, addOrRemoveFavorit);

module.exports = router;
