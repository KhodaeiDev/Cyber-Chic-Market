const express = require("express");
const controller = require("./subCategory.controller");

const router = express.Router();

router.route("/").post(controller.createSubCategory);

router.route("/:href").get(controller.getProductOfSubCategory);

module.exports = router;
