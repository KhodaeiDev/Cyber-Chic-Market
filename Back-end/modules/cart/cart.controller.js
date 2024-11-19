const { isValidObjectId } = require("mongoose");
const { errorResponse, successResponse } = require("../../helpers/responses");
const productModel = require("../../models/product");
const cartModel = require("../../models/cart");

exports.getCart = async (req, res, next) => {
  try {
    //Codes
  } catch (err) {
    next(err);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const user = req.user;
    const { productId, quantity } = req.body;

    if (!isValidObjectId(productId)) {
      return errorResponse(res, 400, "ProductId in not correct!!");
    }

    const product = await productModel.findOne({ _id: productId }).lean();
    if (!product) {
      return errorResponse(res, 404, "Product not found!!");
    }

    const cart = await cartModel.findOne({ user: user._id });
    if (!cart) {
      const newCart = await cartModel.create({
        user: user._id,
        items: [
          {
            quantity,
            product: productId,
          },
        ],
      });
      return successResponse(res, 200, {
        message: "Product Adding to ShoppingCart successfully",
        cart: newCart,
      });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId.toString()
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();
    return successResponse(res, 200, { cart });
  } catch (err) {
    next(err);
  }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    //Codes
  } catch (err) {
    next(err);
  }
};
