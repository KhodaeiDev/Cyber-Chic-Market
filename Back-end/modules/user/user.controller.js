const { errorResponse, successResponse } = require("../../helpers/responses");
const userModel = require("./../../models/User");
const banModel = require("./../../models/ban");
const cities = require("./../../cities/cities.json");

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

exports.createAddress = async (req, res, next) => {
  try {
    const user = req.user;
    const { name, postalCode, location, cityId, provinceId } = req.body;

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
      provinceId,
    };

    const updateAddress = await userModel.findOneAndUpdate(
      user._id,
      {
        $push: { addresses: addressObject },
      },
      { new: true }
    );
    if (!updateAddress) {
      return errorResponse(res, 404, "User Not Found");
    }

    updateAddress.password = undefined;
    return successResponse(res, 200, {
      updateAddress,
      message: "Address Added Successfully",
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
