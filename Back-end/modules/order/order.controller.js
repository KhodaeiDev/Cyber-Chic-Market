const { errorResponse, successResponse } = require("../../helpers/responses");
const cartModel = require("./../../models/cart");
const orderModel = require("./../../models/order");
const productModel = require("./../../models/Product");

exports.getAllOrders = async (req, res, next) => {
  try {
    const { status } = req.query;
    const user = req.user;

    const validStatuses = ["PROCESSING", "SENT", "DELIVERED"];
    if (status && !validStatuses.includes(status)) {
      return errorResponse(res, 400, "Invalid status provided");
    }

    const filterOrder = { user: user._id };

    if (status) {
      filterOrder.status = status;
    }

    const orders = await orderModel.find(filterOrder).populate("items.product");

    return successResponse(res, 200, {
      message: `Orders whose status is in the ${status} state`,
      orders,
    });
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

    await cartModel.updateOne(
      { user: user._id },
      { $set: { items: [] } },
      { new: true }
    );

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
