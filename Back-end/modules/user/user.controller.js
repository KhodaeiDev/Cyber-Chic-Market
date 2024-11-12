const { errorResponse, successResponse } = require("../../helpers/responses");
const userModel = require("./../../models/User");
const banModel = require("./../../models/ban");

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
