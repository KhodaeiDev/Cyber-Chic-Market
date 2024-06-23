const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
  },
  password: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("User", schema);

module.exports = model;
