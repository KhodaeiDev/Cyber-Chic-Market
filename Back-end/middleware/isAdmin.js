const { errorResponse } = require("../helpers/responses");

exports.isAdmin = async (req, res, next) => {
  const user = req.user;

  if (user.role === "ADMIN") {
    return next();
  }
  return errorResponse(res, 404, "UnAuthorize");
};
