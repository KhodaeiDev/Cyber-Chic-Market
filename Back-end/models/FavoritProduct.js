const mongoose = require("mongoose");

const schema = mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const model = mongoose.model("Favorit ", schema);

module.exports = model;
