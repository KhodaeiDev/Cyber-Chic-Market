exports.getUserInfo = async (req, res, next) => {
  try {
    const user = req.user;
    user.password = undefined;
    return res.status(200).json({ user: user });
  } catch (err) {
    next(err);
  }
};
