const { errorResponse, successResponse } = require("../../helpers/responses");
const commentsModel = require("./../../models/comment");
const productsModel = require("./../../models/product");

exports.getComments = async (req, res, next) => {
  try {
    //Codes
  } catch (err) {
    next(err);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const user = req.user;
    const { rating, content, productId } = req.body;

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
    //Codes
  } catch (err) {
    next(err);
  }
};

exports.addReply = async (req, res, next) => {
  try {
    //Codes
  } catch (err) {
    next(err);
  }
};

exports.deleteReply = async (req, res, next) => {
  try {
    //Codes
  } catch (err) {
    next(err);
  }
};
