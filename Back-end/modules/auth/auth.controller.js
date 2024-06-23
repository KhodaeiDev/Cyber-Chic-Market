const userModel = require("./../../models/User");
const bcrypt = require("bcrypt");
const { registerValidator } = require("./auth.validator");
const { createToken } = require("../../utils/auth");

exports.showViewRegister = async (req, res) => {
  //Codes
};

exports.register = async (req, res, next) => {
  try {
    const { username, phone, password, confirmPassword } = req.body;

    //* Validate Body
    await registerValidator.validate({
      username,
      phone,
      password,
      confirmPassword,
    });

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
    const accessToken = await createToken(newUser._id);

    return res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    console.log("err=>", err);
    next(err);
  }
};
