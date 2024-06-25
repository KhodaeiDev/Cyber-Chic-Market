const categoryModel = require("./../../models/Category");
const subCategoryModel = require("./../../models/SubCategory");
const productModel = require("./../../models/Product");

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

exports.getCategory = async (req, res, next) => {
  try {
    const { href } = req.params;

    const category = await categoryModel.findOne({ href });
    if (!category) {
      return res.status(404).json("دسته بندی مورد نظر یافت نشد");
    }

    const categoryProducts = await productModel.find({
      category: category._id,
    });
    if (!categoryProducts) {
      return res.status(404).json("محصولی یافت نشد");
    }

    return res.json(categoryProducts);
  } catch (err) {
    next(err);
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const { title, href, category } = req.body;
    //Todo validator

    const isExistCategory = await categoryModel.findOne({
      $or: { href, title },
    });
    if (isExistCategory) {
      return res.status(401).json("Sub Category is already exist");
    }

    const Subcategory = await categoryModel.create({ title, href, category });
    return res.status(201).json(Subcategory);
  } catch (err) {
    next(err);
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const { title, href, category } = req.body;
    //Todo validator

    const isExistSubCategory = await categoryModel.findOne({
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
