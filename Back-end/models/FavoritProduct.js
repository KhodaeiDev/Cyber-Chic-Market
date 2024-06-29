const mongoose = require("mongoose");

const schema = mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const model = mongoose.model("Favorit ", schema);

module.exports = model;
