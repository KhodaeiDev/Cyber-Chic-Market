const express = require("express");
const { auth } = require("./../../middleware/auth");
const { isAdmin } = require("../../middleware/isAdmin");
const validator = require("../../middleware/validator");
const { createCommentValidator } = require("./comment.validator");
const {
  addReply,
  createComment,
  deleteComment,
  deleteReply,
  getComments,
} = require("./comment.controller");

const router = express.Router();

router
  .route("/")
  .get(getComments)
  .post(auth, validator(createCommentValidator), createComment);

router.route("/:commentId").delete(auth, isAdmin, deleteComment);

router.route("/:commentId/reply").post(auth, addReply);

router.route("/:commentId/reply/:replyId").delete(auth, isAdmin, deleteReply);

module.exports = router;
