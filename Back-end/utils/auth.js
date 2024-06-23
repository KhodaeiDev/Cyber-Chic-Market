const jwt = require("jsonwebtoken");

const createAccessToken = async (id) => {
  const token = await jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7day" }
  );
  return token;
};

module.exports = { createAccessToken };
