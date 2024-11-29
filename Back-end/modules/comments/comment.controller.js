const { isValidObjectId } = require("mongoose");
const { errorResponse, successResponse } = require("../../helpers/responses");
const commentsModel = require("./../../models/comment");
const productsModel = require("./../../models/product");

exports.getComments = async (req, res, next) => {
  try {
    const { productId } = req.query;
    if (!isValidObjectId(productId)) {
      return errorResponse(res, 400, "Product ID is not correct !!");
    }

    const comments = await commentsModel
      .find({
        product: productId,
      })
      .populate({ path: "user", select: "username fullname" })
      .populate({
        path: "replies",
        populate: {
          path: "user",
          select: "username fullname",
        },
      });

    return successResponse(res, 200, comments);
  } catch (err) {
    next(err);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const user = req.user;
    const { rating, content, productId } = req.body;

    if (!isValidObjectId(productId)) {
      return errorResponse(res, 403, "Product Id not correct ");
    }

    const product = await productsModel.findOne({ _id: productId });
    if (!product) {
      return errorResponse(res, 404, "Product not found !!");
    }

    const newComment = await commentsModel.create({
      product: productId,
      user: user._id,
      rating,
      content,
      replies: [],
    });

    return successResponse(res, 201, {
      comment: newComment,
      message: "Comment created successfully :))",
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;

    if (!isValidObjectId(commentId)) {
      return errorResponse(res, 403, "Comment ID is not correct !!");
    }

    const deletedComment = await commentsModel.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return errorResponse(res, 404, "Comment not found !!");
    }

    return successResponse(res, 200, {
      message: "Comment deleted successfully :))",
      comment: deletedComment,
    });
  } catch (err) {
    next(err);
  }
};

exports.addReply = async (req, res, next) => {
  try {
    const user = req.user;
    const { commentId } = req.params;
    const { content } = req.body;

    if (!isValidObjectId(commentId)) {
      return errorResponse(res, 400, "Comment ID is not correct !!");
    }

    const reply = await commentsModel.findByIdAndUpdate(
      commentId,
      {
        $push: {
          replies: {
            content,
            user: user._id,
          },
        },
      },
      { new: true }
    );

    if (!reply) {
      return errorResponse(res, 404, "Comment not found !!");
    }

    return successResponse(res, 200, { reply });
  } catch (err) {
    next(err);
  }
};

exports.deleteReply = async (req, res, next) => {
  try {
    const { commentId, replyId } = req.params;
    const user = req.user;

    if (!isValidObjectId(commentId) || !isValidObjectId(replyId)) {
      return errorResponse(res, 400, "Comment or Reply id is not correct !!");
    }

    const comment = await commentsModel.findById(commentId);
    if (!comment) {
      return errorResponse(res, 404, "Comment not found !!");
    }

    const reply = comment.replies.id(replyId);
    if (!reply) {
      return errorResponse(res, 404, "Reply not found !!");
    }

    if (
      reply.user.toString() !== user._id.toString() ||
      user.role !== "ADMIN"
    ) {
      return errorResponse(res, 403, "You have not access to this action !!");
    }

    comment.replies.pull(replyId);
    await comment.save();

    return successResponse(res, 200, {
      message: "Reply deleted successfully :))",
    });
  } catch (err) {
    next(err);
  }
};
