const jwt = require("jsonwebtoken");

const createAccessToken = async (id, role) => {
  const token = await jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN_DAY + "d" }
  );
  return token;
};

module.exports = { createAccessToken };
