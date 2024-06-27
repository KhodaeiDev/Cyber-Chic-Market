const subCategoryModel = require("./../../models/SubCategory");

exports.createSubCategory = async (req, res, next) => {
  try {
    const { title, href, category } = req.body;
    //Todo validator

    const isExistSubCategory = await subCategoryModel.findOne({
      $or: { href, title },
    });
    if (isExistSubCategory) {
      return res.status(401).json("Sub Category is already exist");
    }

    const SubCategory = await subCategoryModel.create({
      title,
      href,
      category,
    });
    return res.status(201).json(SubCategory);
  } catch (err) {
    next(err);
  }
};
