const userModel = require("./../../models/User");
const bcrypt = require("bcrypt");
const { registerValidator, loginValidator } = require("./auth.validator");
const { createAccessToken } = require("../../utils/auth");

exports.register = async (req, res, next) => {
  try {
    const { username, phone, password } = req.body;

    //* Exist User
    const isExistUser = await userModel.findOne({ username });
    if (isExistUser) {
      return res.status(403).json({ message: "Username Already exist" });
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
    const accessToken = await createAccessToken(newUser._id);

    return res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(404).json("Invalid Data");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json("Invalid Data");
    }
    const token = await createAccessToken(user._id);
    return res.json({ accessToken: token });
  } catch (err) {
    next(err);
  }
};
