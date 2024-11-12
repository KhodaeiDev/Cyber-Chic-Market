const mongoose = require("mongoose");

const addresSchema = new mongoose.Schema({
  name: { type: String, reqired: true },
  postalCode: { type: String, reqired: true },
  location: {
    lon: { type: Number, reqired: true },
    lat: { type: Number, reqired: true },
  },
  cityId: {
    type: Number,
    reqired: true,
  },
  provinceId: {
    type: Number,
    reqired: true,
  },
});

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
      unique: true,
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
    addresses: [addresSchema],
  },
  { timestamps: true }
);

const model = mongoose.model("User", schema);

module.exports = model;
