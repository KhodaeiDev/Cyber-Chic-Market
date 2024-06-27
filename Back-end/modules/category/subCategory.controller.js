const subCategoryModel = require("./../../models/SubCategory");
const productModel = require("./../../models/Product");

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

exports.getProductOfSubCategory = async (req, res, next) => {
  try {
    const { href } = req.params;

    const subCategory = await subCategoryModel.findOne({ href });
    if (!subCategory) {
      return res.status(404).json("دسته بندی مورد نظر یافت نشد");
    }

    const subCategoryProducts = await productModel.find({
      subCategory: subCategory._id,
    });
    if (!subCategoryProducts) {
      return res.status(404).json("محصولی یافت نشد");
    }

    return res.json(subCategoryProducts);
  } catch (err) {
    next(err);
  }
};
