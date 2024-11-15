const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
    },

    href: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discountPercent: {
      type: Number,
      required: true,
    },

    priceAfterDiscount: {
      type: Number,
      required: false,
    },

    // موجودی
    quantity: {
      type: Number,
      required: true,
    },

    brand: {
      type: String,
      enum: ["apple", "samsung", "xiaomi", "asus", "huawei", "hp"],
      required: true,
    },

    images: [
      {
        filename: { type: String, required: true, trim: true },
        path: { type: String, required: true, trim: true },
      },
    ],

    attributes: {
      type: Map, //   Map -> Key - Value Pair
      of: mongoose.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
