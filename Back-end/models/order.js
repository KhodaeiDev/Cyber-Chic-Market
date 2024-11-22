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
});

const orderShcema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [orderItemSchema],

    shippingAddress: {
      postalCode: {
        type: String,
        required: true,
      },

      coordinates: {
        lat: {
          type: Number,
          required: true,
        },
        lng: {
          type: Number,
          required: true,
        },
      },

      address: {
        type: String,
        required: true,
      },

      cityId: {
        type: Number,
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
