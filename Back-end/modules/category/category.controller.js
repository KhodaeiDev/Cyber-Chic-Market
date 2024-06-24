const categoryModel = require("./../../models/Category");

exports.createCategory = async (req, res, next) => {
  try {
    const { title, href } = req.body;
    //Todo validator

    const isExistCategory = await categoryModel.findOne({
      $or: { href, title },
    });
    if (isExistCategory) {
      return res.status(401).json("category is already exist");
    }

    const category = await categoryModel.create({ title, href });
    return res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};
