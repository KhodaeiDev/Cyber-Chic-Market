module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, {
        abortEarly: false,
      });
    } catch (err) {
      return res.status(400).json({ errors: err.errors[0] });
    }
    next();
  };
};
