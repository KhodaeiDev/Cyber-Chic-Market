const express = require("express");
const controller = require("./product.controller");
const { multerStorage } = require("./../../middleware/uoloader");
const { authMiddleware } = require("./../../middleware/auth");

const upload = multerStorage("public/images/product");

const router = express.Router();

router.route("/").get(controller.getAllProducts);

router.route("/addProduct").post(
  upload.fields([
    {
      name: "cover",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount: 3,
    },
  ]),
  controller.addProduct
);

router
  .route("/addToFavorit/:productID")
  .post(authMiddleware, controller.addToFavorit);

router
  .route("/removeFavorit/:productID")
  .post(authMiddleware, controller.removeFavorites);

router.route("/favorites").get(authMiddleware, controller.myFavorites);

router.route("/:productID").get(controller.getProduct);

// * Sort routes
router.route("/priceSort/:subcategoryhref").get(controller.priceSortProducts);

module.exports = router;
