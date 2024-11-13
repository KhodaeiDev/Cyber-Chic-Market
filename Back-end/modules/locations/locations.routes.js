const express = require("express");
const { getAll } = require("./locations.controller.js");

const router = express.Router();

router.route("/").get(getAll);

module.exports = router;
