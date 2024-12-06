const userModel = require("./../../models/User");
const orderModel = require("./../../models/order");
const bcrypt = require("bcrypt");
const {
  editValidator,
  resetPasswordValidator,
} = require("./profile.validator");

const { errorResponse, successResponse } = require("../../helpers/responses");
const cities = require("./../../cities/cities.json");

exports.getUserInfo = async (req, res, next) => {
  try {
    const user = req.user;

    const orders = await orderModel.find({ user: user._id });

    user.password = undefined;

    return successResponse(res, 200, {
      user,
      orders,
    });
  } catch (err) {
    next(err);
  }
};

exports.editProfile = async (req, res, next) => {
  try {
    const user = req.user;

    const { fullName, email, username, phone, cardNumber, shabaNumber } =
      req.body;

    const userData = {};

    if (fullName) userData.fullName = fullName;
    if (email) userData.email = email;
    if (cardNumber) userData.cardNumber = cardNumber;
    if (shabaNumber) userData.shabaNumber = shabaNumber;
    userData.phone = phone;
    userData.username = username;

    const updateUser = await userModel
      .findOneAndUpdate(
        { _id: user._id },
        {
          $set: userData,
        },
        { new: true }
      )
      .select("-password");
    if (!updateUser) {
      return errorResponse(res, 404, "Profile Not Updated");
    }
    return successResponse(res, 200, { user: updateUser });
  } catch (err) {
    next(err);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;
    const userID = req.user._id;

    const user = await userModel.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await resetPasswordValidator.validate({ password, confirmPassword });

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.findOneAndUpdate(
      {
        _id: userID,
      },
      { password: hashedPassword }
    );

    return res.json({ message: "Password Updated successfully" });
  } catch (err) {
    next(err);
  }
};

exports.createAddress = async (req, res, next) => {
  try {
    const user = req.user;
    const { name, postalCode, address, location, cityId, provinceId } =
      req.body;

    const city = cities.find((city) => +city.id === +cityId);
    const province = cities.find((province) => +province.id === +provinceId);

    if (!city || !province) {
      return errorResponse(res, 409, "Province Or City is Not Valid");
    }

    const addressObject = {
      name,
      postalCode,
      location,
      cityId,
      address,
      provinceId,
    };

    const updateAddress = await userModel.findOneAndUpdate(
      user._id,
      {
        $push: { addresses: addressObject },
      },
      { new: true }
    );

    updateAddress.password = undefined;
    return successResponse(res, 200, {
      updateAddress,
      message: "Address Added Successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUserAdresses = async (req, res, next) => {
  try {
    const user = req.user;

    const addreses = user.addresses;

    user.password = undefined;
    return successResponse(res, 200, {
      addreses,
    });
  } catch (err) {
    next(err);
  }
};

exports.removeAddress = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const user = await userModel.findOne({ _id: req.user.id });

    const address = user.addresses.id(addressId);
    if (!address) {
      return errorResponse(res, 404, "Address Not Found!!");
    }

    await user.addresses.pull(address);
    await user.save();
    user.password = undefined;

    return successResponse(res, 200, {
      user,
      message: "Address Removed Successfully",
    });
  } catch (err) {
    next(err);
  }
};
