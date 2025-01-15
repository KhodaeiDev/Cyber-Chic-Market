const userModel = require("./../../models/User");
const banModel = require("./../../models/ban");
const bcrypt = require("bcrypt");
const resetPasswordModel = require("./../../models/resetPassword");
const nodeMailer = require("nodemailer");
const { createAccessToken } = require("../../utils/auth");
const { successResponse, errorResponse } = require("../../helpers/responses");

exports.register = async (req, res, next) => {
  try {
    const { username, phone, password, email } = req.body;

    const isBanUser = await banModel.findOne({ phone });
    if (isBanUser) {
      return errorResponse(res, 401, "This phone Number Blocked");
    }

    //* Exist User
    const isExistUser = await userModel.findOne({
      $or: [{ username }, { phone }, { email }],
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
      email,
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

exports.getResetPasswordCode = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return errorResponse(res, 404, { message: "Email not Valid!!" });
    }
    await resetPasswordModel.findOneAndDelete({ user: user._id });

    let resetCode = Math.floor(Math.random() * 99999) + 10000;

    const resetTokenExpireTime = Date.now() + 1000 * 60 * 2;

    const resetPassword = new resetPasswordModel({
      user: user._id,
      code: resetCode,
      expireIn: resetTokenExpireTime,
    });

    resetPassword.save();

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password Code For Your Forniro Recovery Password",
      html: `
       <h2>Hi, ${user.fullname}</h2>
       <h3> Your Recovery Password Code is ${resetCode} ✌️❤️</h3>
      `,
    };

    transporter.sendMail(mailOptions);

    return successResponse(res, 200, { message: "Reset Password Code Sent" });
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
