const express = require("express");
const { banUser } = require("./user.controller");
const { auth } = require("../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");

const router = express.Router();

router.route("/ban/:userId").post(auth, isAdmin, banUser);

module.exports = router;
