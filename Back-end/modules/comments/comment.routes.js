const express = require("express");
const { auth } = require("./../../middlewares/auth");
const roleGuard = require("./../../middlewares/roleGuard");
const { isAdmin } = require("../../middleware/isAdmin");

const router = express.Router();

router.route("/").get(getComments).post(auth, createComment);

router.route("/:commentId").delete(auth, roleGuard("ADMIN"), deleteComment);

router.route("/:commentId/reply").post(auth, addReply);

router.route("/:commentId/reply/:replyId").delete(auth, isAdmin, deleteReply);

module.exports = router;
