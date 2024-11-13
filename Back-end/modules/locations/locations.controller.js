const { successResponse } = require("../../helpers/responses");
const provinces = require("./../../cities/provinces.json");
const cities = require("./../../cities/cities.json");

exports.getAll = async (req, res, next) => {
  try {
    return successResponse(res, 200, {
      provinces,
      cities,
    });
  } catch {
    next(err);
  }
};
