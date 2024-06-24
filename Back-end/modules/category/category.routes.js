const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

router.route("/create").post(controller.createCategory);

module.exports = router;
