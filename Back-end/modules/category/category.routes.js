const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

router.route("/").get(controller.getCategoryAndSubCategory);

router.route("/:href").get(controller.getCategoryProducts);
router.route("/create").post(controller.createCategory);

module.exports = router;
