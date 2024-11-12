const jwt = require("jsonwebtoken");
const userModel = require("./../models/User");
const banUserModel = require("./../models/ban");
const { successResponse, errorResponse } = require("../helpers/responses");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ");
    const tokenValue = token[1];

    if (token[0] !== "Bearer") {
      return errorResponse(res, 400, {
        message: "Plz Add Bearer in first of Token",
      });
    }

    if (!tokenValue) {
      return errorResponse(res, 401, {
        message: "Token not found , Plz Login or Register first",
      });
    }

    const decoded = await jwt.decode(tokenValue, process.env.JWT_ACCESS_SECRET);

    if (!decoded) {
      return errorResponse(res, 401, {
        message: "Token Expired already, Plz Login first",
      });
    }

    const userId = decoded.id;

    const user = await userModel.findById(userId);
    if (!user) {
      return errorResponse(res, 401, { message: "User Not found" });
    }

    const isBanned = await banUserModel.findOne({ phone: user.phone });
    if (isBanned) {
      return errorResponse(res, 401, { message: "User Banned" });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
