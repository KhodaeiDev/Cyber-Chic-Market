const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
    min: 1,
  },

  totalPrice: {
    type: Number,
    required: true,
  },
});

const orderShcema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [orderItemSchema],

    phone: {
      type: String,
      required: true,
    },

    shippingAddress: {
      postalCode: {
        type: String,
        required: true,
      },

      address: {
        type: String,
        required: true,
      },
    },

    postTrackingCode: {
      type: String,
    },

    status: {
      type: String,
      enum: ["PROCESSING", "SIPPED", "DELIVERED"],
      default: "PROCESSING",
    },

    authority: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Order", orderShcema);

module.exports = model;
