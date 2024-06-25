const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

// router.route("/:href").get(controller.getCategory);
router.route("/create").post(controller.createCategory);
router.route("/create-SubCategory").post(controller.createSubCategory);

module.exports = router;
