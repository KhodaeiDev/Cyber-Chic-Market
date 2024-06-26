const express = require("express");
const controller = require("./product.controller");
const { multerStorage } = require("./../../middleware/uoloader");

const upload = multerStorage("public/images/product");

const router = express.Router();

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

router.route("/:productID").get(controller.getProduct);

module.exports = router;
