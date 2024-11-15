const fs = require("fs");
const productModel = require("./../../models/product");
const subCategoryModel = require("./../../models/SubCategory");
const categoryModel = require("./../../models/Category");
const favoritModel = require("./../../models/FavoritProduct");
const userModel = require("./../../models/User");
const {
  createProductValidator,
  updateProductValidator,
} = require("./product.validator");
const { errorResponse, successResponse } = require("../../helpers/responses");
const { isValidObjectId } = require("mongoose");

// exports.getAllProducts = async (req, res, next) => {
//   try {
//     const categories = await categoryModel.find();
//     const products = await productModel.find().sort({ _id: -1 });

//     const categorizedProducts = categories.map((category) => {
//       return {
//         title: category.title,
//         items: products
//           .filter(
//             (product) => product.category.toString() === category._id.toString()
//           )
//           .map((product) => ({
//             id: product._id,
//             name: product.name,
//             title: product.title,
//             description: product.description,
//             brand: product.brand,
//             subCategory: product.subCategory,
//             cover: product.cover,
//             images: product.images,
//             color: product.color,
//             price: product.price,
//             discountPrice: product.discountPrice,
//             discount: product.discount,
//             resolution: product.resolution,
//             size: product.size,
//             ability: product.ability,
//             operatingSystem: product.operatingSystem,
//             technology: product.technology,
//             Bluetooth: product.Bluetooth,
//             sendingTime: product.sendingTime,
//           })),
//       };
//     });
//     return res.json(categorizedProducts);
//   } catch (err) {
//     next(err);
//   }
// };

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

    const categoryChek = await categoryModel.findOne({
      _id: category,
    });
    if (!isValidObjectId(category) || !categoryChek) {
      return errorResponse(res, 400, "Category not defined !!");
    }

    const subCategoryChek = await subCategoryModel.findOne({
      _id: subCategory,
    });
    if (!isValidObjectId(subCategory) || !subCategoryChek) {
      return errorResponse(res, 400, "SubCategory not defined !!");
    }

    createProductValidator.validate(
      {
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

exports.deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (!isValidObjectId(productId)) {
      return errorResponse(res, 400, "Product ID is not correct !!");
    }

    const deletedProduct = await productModel.findByIdAndDelete(productId);

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

// exports.getProduct = async (req, res, next) => {
//   try {
//     const { productID } = req.params;
//     if (!productID) {
//       throw new Error("محصول مورد نظر یافت نشد");
//     }
//     const product = await productModel.findById(productID);
//     if (!product) {
//       throw new Error("محصول مورد نظر یافت نشد");
//     }

//     return res.json(product);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.addToFavorit = async (req, res, next) => {
//   try {
//     const { productID } = req.params;
//     const userID = req.user._id;

//     const product = await productModel.findOne({ _id: productID });
//     if (!product) {
//       return res.status(404).json("Producy Not Found");
//     }

//     const user = await userModel.findOne({ _id: userID });
//     if (!user) {
//       return res.status(404).json("User Not Found");
//     }

//     await favoritModel.create({ product: productID, user: userID });
//     return res
//       .status(201)
//       .json("محصول مورد نظر به لیست علاقه مندی ها اضافه شد");
//   } catch (err) {
//     next(err);
//   }
// };

// exports.removeFavorites = async (req, res, next) => {
//   try {
//     const { productID } = req.params;
//     const userID = req.user._id;

//     const product = await productModel.findOne({ _id: productID });
//     if (!product) {
//       return res.status(404).json("Product Not Found");
//     }

//     const user = await userModel.findOne({ _id: userID });
//     if (!user) {
//       return res.status(404).json("User Not Found");
//     }

//     const isProductInFavorit = await favoritModel.findOne({
//       product: productID,
//     });
//     if (!isProductInFavorit) {
//       return res
//         .status(404)
//         .json("محصول مورد نظر در لیست علاقه مندی ها وجود ندارد ");
//     }

//     await favoritModel.findOneAndDelete({ product: productID, user: userID });

//     return res.json("محصول مورد نظر از لیست علاقه مندی ها حذف شد");
//   } catch (err) {
//     next(err);
//   }
// };

// exports.myFavorites = async (req, res, next) => {
//   try {
//     const userID = req.user._id;

//     const user = await userModel.findOne({ _id: userID });
//     if (!user) {
//       return res.status(404).json("User Not Found");
//     }

//     const favorites = await favoritModel.find({ user: userID }).populate({
//       path: "product",
//       select: "name _id cover price sendingTime",
//     });

//     return res.json(favorites);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.priceSortProducts = async (req, res, next) => {
//   try {
//     const { maxPrice } = req.query;
//     const { subcategoryhref } = req.params;

//     const subCategory = await subCategoryModel.findOne({
//       href: subcategoryhref,
//     });
//     if (!subCategory) {
//       return res.status(404).json("دسته بندی مورد نظر یافت نشد");
//     }

//     const products = await productModel
//       .find({
//         $and: [{ subCategory: subCategory._id }, { price: { $lt: maxPrice } }],
//       })
//       .select("cover name price category subCategory");
//     if (!products) {
//       return res.status(404).json("محصول مورد نظر یافت نشد");
//     }

//     return res.json(products);
//   } catch (err) {
//     next(err);
//   }
// };
