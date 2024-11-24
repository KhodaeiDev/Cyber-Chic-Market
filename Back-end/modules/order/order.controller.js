const { errorResponse, successResponse } = require("../../helpers/responses");
const cartModel = require("./../../models/cart");
const orderModel = require("./../../models/order");
const productModel = require("./../../models/product");

exports.getAllOrders = async (req, res, next) => {
  try {
    //
  } catch (err) {
    next(err);
  }
};

exports.ordersRegistration = async (req, res, next) => {
  try {
    const user = req.user;
    const { phone, postalCode, address, orderCode } = req.body;

    const cart = await cartModel.findOne({ user: user._id });
    if (!cart || cart.items.length === 0) {
      return errorResponse(
        res,
        404,
        "User Shoping Cart not Found!! Or not Product in Shoping Cart"
      );
    }

    const items = [];

    for (const item of cart.items) {
      items.push({
        product: item.product,
        quantity: item.quantity,
        price: item.productPrice,
      });
    }

    const newOrder = await orderModel.create({
      user: user._id,
      shippingAddress: {
        postalCode,
        address,
      },
      items,
      phone,
      orderCode,
    });
    if (!newOrder) {
      return errorResponse(res, 400, "Order don't Registration");
    }

    for (const item of newOrder.items) {
      const product = await productModel.findOne({ _id: item.product });

      product.quantity -= item.quantity;
      await product.save();
    }

    return successResponse(res, 200, {
      message: "The order was successfully placed",
      newOrder,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateOrder = async (req, res, next) => {
  //
};
