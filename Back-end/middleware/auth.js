const jwt = require("jsonwebtoken");
const userModel = require("./../models/User");

exports.authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Token Expired already" });
    }

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User Not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
