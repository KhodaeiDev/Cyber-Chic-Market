const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    image: {
      path: { type: String, required: true, trim: true },
      filename: { type: String, required: true, trim: true },
    },

    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Category ", schema);

module.exports = model;
