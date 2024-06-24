const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  cover: {
    path: { type: String, required: true },
    filename: { type: String, required: true },
  },
  images: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  resolution: {
    type: String,
  },
  ability: {
    type: String,
  },
  size: {
    type: String,
  },
  operatingSystem: {
    type: String,
  },
  technology: {
    type: String,
  },
  Bluetooth: {
    type: Boolean,
    default: true,
    required: false,
  },
  sendingTime: {
    type: Number,
    default: 2,
    required: false,
  },
});

const model = mongoose.model("Product", schema);

module.exports = model;
