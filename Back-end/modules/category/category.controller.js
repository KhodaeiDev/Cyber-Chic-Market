const { errorResponse, successResponse } = require("../../helpers/responses");
const categoryModel = require("./../../models/Category");
const productModel = require("../../models/product");
const subCategoryModel = require("./../../models/SubCategory");
const { isValidObjectId } = require("mongoose");

exports.fetchAllCategoriesAndSubcategories = async (req, res, next) => {
  try {
    const fetchSubcategoriesRecursively = async (parentId = null) => {
      const subCategories = await subCategoryModel.find(
        { parent: parentId },
        { createdAt: 0, updatedAt: 0, __v: 0, parent: 0 }
      );
      const parentSubCategories = await categoryModel
        .find(
          {
            parent: parentId,
          },
          { createdAt: 0, updatedAt: 0, __v: 0, parent: 0 }
        )
        .lean();

      const fetchedParentSubCategories = [];

      for (const category of parentSubCategories) {
        category.subCategories = await fetchSubcategoriesRecursively(
          category._id
        );

        fetchedParentSubCategories.push(category);
      }

      return [...fetchedParentSubCategories, ...subCategories];
    };

    const categories = await fetchSubcategoriesRecursively(null);

    return successResponse(res, 200, { categories });
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { title, href, parent } = req.body;

    let image = undefined;
    if (req.file) {
      const { filename } = req.file;

      image = {
        filename,
        path: `images/categoryIcon/${filename}`,
      };
    }

    const category = await categoryModel.create({ title, href, parent, image });
    return successResponse(res, 201, {
      message: "Category Created Successfully",
      category,
    });
  } catch (err) {
    next(err);
  }
};

exports.fetchJustMainCategories = async (req, res, next) => {
  try {
    const category = await categoryModel.find({});

    if (!category) {
      return errorResponse(res, 404, "Categories not found !!");
    }

    return successResponse(res, 200, { category });
  } catch (err) {
    next(err);
  }
};

exports.editCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    let { title, href, parent } = req.body;

    if (!isValidObjectId(categoryId)) {
      return errorResponse(res, 400, "Category ID is not valid !!");
    }

    await categoryEditValidator.validate(
      {
        title,
        href,
        parent,
      },
      { abortEarly: false }
    );

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      categoryId,
      {
        title,
        href,
        parent,
      },
      { new: true }
    );

    if (!updatedCategory) {
      return errorResponse(res, 404, "Category not found !!");
    }

    return successResponse(res, 200, { category: updatedCategory });
  } catch (err) {
    next(err);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;

    if (!isValidObjectId(categoryId)) {
      return errorResponse(res, 400, "Category ID is not valid !!");
    }

    const deletedCategory = await categoryModel.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return errorResponse(res, 404, "Category not found !!");
    }

    return successResponse(res, 200, {
      message: "Category deleted successfully :))",
      category: deletedCategory,
    });
  } catch (err) {
    next(err);
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const { title, href, parent } = req.body;

    const checkCategory = await categoryModel.findOne({ _id: parent });
    if (!checkCategory) {
      return errorResponse(res, 404, "Category not Found");
    }

    const subCategory = await subCategoryModel.create({
      title,
      href,
      parent,
    });
    return successResponse(res, 201, {
      subCategory,
      message: "SubCategory Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllSubCategories = async (req, res, next) => {
  try {
    const categories = await subCategoryModel.find();
    if (!categories) {
      return errorResponse(res, 404, "Sub Categories Not Found!!");
    }

    return successResponse(res, 200, { categories });
  } catch (err) {
    next(err);
  }
};

exports.getSubCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;

    console.log(categoryId);

    if (!isValidObjectId(categoryId)) {
      return errorResponse(res, 400, "Category ID is not correct !!");
    }

    const category = await subCategoryModel.findOne({ _id: categoryId });

    if (!category) {
      return errorResponse(res, 404, "SubCategory not found !!");
    }

    return successResponse(res, 200, { category });
  } catch (err) {
    next(err);
  }
};

exports.deleteSubCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;

    if (!isValidObjectId(categoryId)) {
      return errorResponse(res, 400, "Category ID is not correct !!");
    }

    const deletedCategory = await subCategoryModel.findByIdAndDelete(
      categoryId
    );

    if (!deletedCategory) {
      return errorResponse(res, 404, "Category not found !!");
    }

    return errorResponse(res, 200, {
      message: "SubCategory deleted successfully :))",
      category: deletedCategory,
    });
  } catch (err) {
    next(err);
  }
};

// exports.getCategoryProducts = async (req, res, next) => {
//   try {
//     const { href } = req.params;

//     const category = await categoryModel.findOne({ href });
//     if (!category) {
//       return res.status(404).json("دسته بندی مورد نظر یافت نشد");
//     }

//     const categoryProducts = await productModel.find({
//       category: category._id,
//     });
//     if (!categoryProducts) {
//       return res.status(404).json("محصولی یافت نشد");
//     }

//     return res.json(categoryProducts);
//   } catch (err) {
//     next(err);
//   }
// };
