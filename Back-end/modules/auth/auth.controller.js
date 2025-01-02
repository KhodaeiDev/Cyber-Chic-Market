const userModel = require("./../../models/User");
const banModel = require("./../../models/ban");
const bcrypt = require("bcrypt");
const { createAccessToken } = require("../../utils/auth");
const { successResponse, errorResponse } = require("../../helpers/responses");

exports.register = async (req, res, next) => {
  try {
    const { username, phone, password } = req.body;

    const isBanUser = await banModel.findOne({ phone });
    if (isBanUser) {
      return errorResponse(res, 401, "This phone Number Blocked");
    }

    //* Exist User
    const isExistUser = await userModel.findOne({
      $or: [{ username }, { phone }],
    });
    if (isExistUser) {
      return errorResponse(res, 403, "Username Or Phone are Already exist");
    }

    const userCount = await userModel.countDocuments();

    //* HashPass
    const hashedPassword = await bcrypt.hash(password, 10);

    //* create User
    const newUser = await userModel.create({
      username,
      phone,
      role: userCount === 0 ? "ADMIN" : "USER",
      password: hashedPassword,
    });

    //*create USER Token
    const accessToken = await createAccessToken(newUser._id, newUser.role);
    newUser.password = undefined;

    return successResponse(res, 201, {
      message: "User Registered Successfully",
      accessToken: accessToken,
      newUser,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (!user) {
      return errorResponse(res, 401, "Invalid Data");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return errorResponse(res, 401, "Invalid Data");
    }

    const accessToken = await createAccessToken(user._id, user.role);

    return successResponse(res, 200, {
      message: "User Logined Successfully",
      accessToken: accessToken,
    });
  } catch (err) {
    next(err);
  }
};

exports.banUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await userModel.findOne({ _id: userId });
    if (!user) {
      return errorResponse(res, 404, "User Not Found");
    }

    await banModel.create({ phone: user.phone });
    await userModel.findOneAndDelete({ _id: user.id });

    return successResponse(res, 200, "User Banned successfully");
  } catch (err) {
    next(err);
  }
};
