module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, {
        abortEarly: true,
      });
    } catch (err) {
      return res.status(401).json({ errors: err.errors[0] });
    }
    next();
  };
};
