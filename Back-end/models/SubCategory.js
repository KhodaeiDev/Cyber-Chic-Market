const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
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
});

const model = mongoose.model("SubCategory ", schema);

module.exports = model;
