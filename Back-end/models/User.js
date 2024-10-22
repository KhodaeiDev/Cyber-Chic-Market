const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
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
    profilePicture: {
      type: String,
      required: false,
    },
    fullName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    cardNumber: {
      type: Number,
      required: false,
    },
    shabaNumber: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("User", schema);

module.exports = model;
