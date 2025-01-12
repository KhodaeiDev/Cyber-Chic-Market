const fs = require("fs");
const productModel = require("../../models/Product");
const subCategoryModel = require("./../../models/SubCategory");
const categoryModel = require("./../../models/Category");
const favoritModel = require("./../../models/FavoritProduct");
const {
  createProductValidator,
  updateProductValidator,
} = require("./product.validator");
const { errorResponse, successResponse } = require("../../helpers/responses");
const { isValidObjectId, default: mongoose } = require("mongoose");
const { createPaginationData } = require("../../utils");

exports.addProduct = async (req, res, next) => {
  try {
    let {
      name,
      title,
      href,
      description,
      category,
      subCategory,
      discountPercent,
      price,
      quantity,
      brand,
      attributes,
    } = req.body;

    attributes = JSON.parse(attributes);

    if (!isValidObjectId(subCategory) || !isValidObjectId(category)) {
      return errorResponse(
        res,
        401,
        "Category Id Or SubCategory Id is not Valid !!"
      );
    }

    const categoryChek = await categoryModel.findOne({
      _id: category,
    });

    const [subCategoryChek, subCategoryChek2] = await Promise.all([
      subCategoryModel.findOne({ _id: subCategory }),
      categoryModel.findById(subCategory),
    ]);

    if ((!subCategoryChek && !subCategoryChek2) || !categoryChek) {
      return errorResponse(res, 404, "Sub Category Or Category not found !!");
    }

    await createProductValidator.validate(
      {
        href,
        name,
        title,
        description,
        category,
        subCategory,
        discountPercent,
        price,
        quantity,
        brand,
        attributes,
      },
      {
        abortEarly: false,
      }
    );

    let images = [];
    for (let i = 0; i < req.files?.length; i++) {
      const file = req.files[i];
      const filename = file?.filename;

      images.push({
        filename,
        path: `images/product/${filename}`,
      });
    }

    let priceAfterDiscount = undefined;
    if (discountPercent > 0) {
      priceAfterDiscount = price - (price * discountPercent) / 100;
    }

    const newProduct = await productModel.create({
      name,
      href,
      title,
      price,
      priceAfterDiscount,
      discountPercent,
      quantity,
      brand,
      description,
      category,
      subCategory,
      images,
      attributes,
    });
    return successResponse(res, 201, {
      message: "Product created successfully :))",
      product: newProduct,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const {
      name,
      subCategory,
      minPrice,
      maxPrice,
      attributes,
      brand,
      page = 1,
      limit = 10,
    } = req.query;

    let user = req.user;

    const filters = {
      quantity: { $gt: 0 },
    };

    if (name) {
      filters.name = { $regex: name, $options: "i" };
    }

    if (brand) {
      const brandArray = Array.isArray(brand) ? brand : [brand];
      filters.brand = { $in: brandArray };
    }

    if (subCategory) {
      filters.$or = [
        {
          subCategory: mongoose.Types.ObjectId.createFromHexString(subCategory),
        },
        { category: mongoose.Types.ObjectId.createFromHexString(subCategory) },
      ];
    }

    if (minPrice) {
      filters["price"] = { $gte: +minPrice };
    }

    if (maxPrice) {
      filters["price"] = { $lte: +maxPrice };
    }

    if (attributes) {
      const parsedAttributes = JSON.parse(attributes);
      Object.keys(parsedAttributes).forEach((key) => {
        filters[`attributes.${key}`] = parsedAttributes[key];
      });
    } // filters -> { ... }

    const userFavorites = user
      ? await favoritModel
          .findOne({ user: user._id })
          .then((fav) => fav?.items.map((item) => item.toString()) || [])
      : [];

    const products = await productModel.aggregate([
      {
        $match: filters,
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "product",
          as: "comments",
        },
      },
      {
        $addFields: {
          averageRating: {
            $cond: {
              if: { $gt: [{ $size: "$comments" }, 0] },
              then: { $avg: `$comments.rating` },
              else: 0,
            },
          },
          isFavorite: { $in: [{ $toString: "$_id" }, userFavorites] },
        },
      },
      {
        $project: {
          comments: 0,
        },
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $limit: +limit,
      },
    ]);

    const totalProducts = await productModel.countDocuments(filters);

    return successResponse(res, 200, {
      products,
      pagination: createPaginationData(
        +page,
        +limit,
        totalProducts,
        "Products"
      ),
    });
  } catch (err) {
    next(err);
  }
};

exports.myFavorites = async (req, res, next) => {
  try {
    const userID = req.user._id;

    const favorites = await favoritModel.find({ user: userID }).populate({
      path: "product",
      select: "name _id price href quantity images",
    });

    return successResponse(res, 200, { favorites });
  } catch (err) {
    next(err);
  }
};

exports.discountedProducts = async (req, res, next) => {
  try {
    const discountedProduct = await productModel
      .find({
        discountPercent: { $gt: 0 },
      })
      .select("-description -createdAt -updatedAt -__v");

    if (!discountedProduct.length) {
      return errorResponse(res, 404, "No discounted Products found!");
    }

    return successResponse(res, 200, { discountedProduct });
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return errorResponse(res, 400, "Product ID is not correct !!");
    }

    const deletedProduct = await productModel.findByIdAndDelete(id);

    deletedProduct?.images?.map((image) =>
      fs.unlink(`public/images/product/${image}`, (err) => next(err))
    );

    if (!deletedProduct) {
      return errorResponse(res, 404, "Product not found !!");
    }

    return successResponse(res, 200, {
      message: "Product deleted successfully :))",
      product: deletedProduct,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return errorResponse(res, 400, "Product Id not Correct");
    }
    const product = await productModel
      .findById(id)
      .populate({ path: "category", model: categoryModel })
      .populate({ path: "subCategory", model: subCategoryModel });

    if (!product) {
      return errorResponse(res, 404, "Product Not Found");
    }

    return successResponse(res, 200, { product });
  } catch (err) {
    next(err);
  }
};

exports.addToFavorites = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const user = req.user;

    const product = await productModel.findById(productId);

    if (!isValidObjectId(productId) || !product) {
      return errorResponse(res, 404, { message: "Poroduct Not Found !!" });
    }

    await favoritModel.findOneAndUpdate(
      { user: user._id },
      { $addToSet: { items: productId } },
      { upsert: true }
    );

    return successResponse(res, 201, {
      message: "Product Add to Favorite List",
    });
  } catch (err) {
    next(err);
  }
};

exports.removeFromFavorites = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const user = req.user;

    if (!isValidObjectId(productId)) {
      return errorResponse(res, 400, {
        message: "Poroduct Id not Valid format!!",
      });
    }

    const userFavorites = await favoritModel.findOne({ user: user._id });
    if (!userFavorites) {
      return errorResponse(res, 404, {
        message: "There is no product in your Favorite list!!",
      });
    }

    const product = userFavorites.items.findIndex((item) => {
      return item.toString() === productId.toString();
    });

    if (product === -1) {
      return errorResponse(res, 404, {
        message: "This Product is not in your Favorite list !!",
      });
    }

    userFavorites.items.splice(product, 1);
    await userFavorites.save();

    return successResponse(res, 200, {
      message: "Product Removed From Your Favorites",
    });
  } catch (err) {
    next(err);
  }
};
