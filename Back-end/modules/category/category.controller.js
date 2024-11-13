const { errorResponse, successResponse } = require("../../helpers/responses");
const categoryModel = require("./../../models/Category");
const productModel = require("./../../models/Product");
const subCategoryModel = require("./../../models/SubCategory");

exports.getCategoryAndSubCategory = async (req, res, next) => {
  try {
    const categories = await categoryModel.find();
    const subCategories = await subCategoryModel.find({});

    const categorizedSubCatedory = categories.map((category) => {
      return {
        title: category.title,
        items: subCategories
          .filter(
            (subCategory) =>
              subCategory.category.toString() === category._id.toString()
          )
          .map((subCategory) => ({
            _id: subCategory._id,
            title: subCategory.title,
            href: subCategory.href,
            category: subCategory.category,
          })),
      };
    });

    if (!categorizedSubCatedory) {
      return res.status(404).json("Sub Category not Exist");
    }
    res.status(200).json({ categorizedSubCatedory });
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { title, href } = req.body;

    const isExistCategory = await categoryModel.findOne({
      $or: { href, title },
    });
    if (isExistCategory) {
      return errorResponse(res, 401, "category is already exist");
    }

    const category = await categoryModel.create({ title, href });
    return successResponse(res, 201, {
      category,
      message: "Category Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const { title, href, parent } = req.body;

    const isExistCategory = await categoryModel.findOne({
      $or: { href, title },
    });
    if (isExistCategory) {
      return errorResponse(res, 401, "SubCategory is already exist");
    }

    const checkCategory = await categoryModel.findOne({ _id: parent });
    if (!checkCategory) {
      return errorResponse(res, 404, "Category not Found");
    }

    const subCategory = await subCategoryModel.create({ title, href, parent });
    return successResponse(res, 201, {
      subCategory,
      message: "SubCategory Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.getCategoryProducts = async (req, res, next) => {
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
