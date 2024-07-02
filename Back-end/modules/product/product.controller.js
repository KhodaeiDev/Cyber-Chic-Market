const productModel = require("./../../models/Product");
const subCategoryModel = require("./../../models/SubCategory");
const categoryModel = require("./../../models/Category");
const favoritModel = require("./../../models/FavoritProduct");
const userModel = require("./../../models/User");

exports.getAllProducts = async (req, res, next) => {
  try {
    const categories = await categoryModel.find();
    const products = await productModel.find().sort({ _id: -1 });

    const categorizedProducts = categories.map((category) => {
      return {
        title: category.title,
        items: products
          .filter(
            (product) => product.category.toString() === category._id.toString()
          )
          .map((product) => ({
            id: product._id,
            name: product.name,
            title: product.title,
            description: product.description,
            brand: product.brand,
            subCategory: product.subCategory,
            cover: product.cover,
            images: product.images,
            color: product.color,
            price: product.price,
            discountPrice: product.discountPrice,
            discount: product.discount,
            resolution: product.resolution,
            size: product.size,
            ability: product.ability,
            operatingSystem: product.operatingSystem,
            technology: product.technology,
            Bluetooth: product.Bluetooth,
            sendingTime: product.sendingTime,
          })),
      };
    });
    return res.json(categorizedProducts);
  } catch (err) {
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const {
      name,
      title,
      description,
      category, //* دسته بندی
      brand,
      subCategory,
      color,
      price,
      discount,
      resolution, //* رزولوشن تصویر
      ability, //* قابلیت
      size,
      operatingSystem, //* سیستم عامل
      technology, //* فناوری
      Bluetooth, //* true or false
      sendingTime, //* زمان ارسال محصول به عدد
    } = req.body;

    // Todo validator

    if (!req.files) {
      return res.status(401).json("لطفا تصویر محصول خود را اپلود کنید");
    }

    const imagesname = [];
    req.files.images.forEach((file) => {
      const mediaUrlPath = `/images/product/${file.filename}`;
      imagesname.push(mediaUrlPath);
    });

    const mediaUrlPath = `/images/product/${req.files.cover[0].filename}`;

    //* Products Discount
    const discountPrice = price - (price * discount) / 100;

    await productModel.create({
      name,
      title,
      description,
      category,
      brand,
      subCategory,
      cover: {
        path: mediaUrlPath,
        filename: req.files.cover[0].filename,
      },
      images: imagesname,
      color,
      price,
      discountPrice,
      discount,
      resolution,
      size,
      ability,
      operatingSystem,
      technology,
      Bluetooth,
      sendingTime,
    });
    return res.status(201).json("محصول با موفقیت ساخته شد");
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const { productID } = req.params;
    if (!productID) {
      throw new Error("محصول مورد نظر یافت نشد");
    }
    const product = await productModel.findById(productID);
    if (!product) {
      throw new Error("محصول مورد نظر یافت نشد");
    }

    return res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.addToFavorit = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const userID = req.user._id;

    const product = await productModel.findOne({ _id: productID });
    if (!product) {
      return res.status(404).json("Producy Not Found");
    }

    const user = await userModel.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json("User Not Found");
    }

    await favoritModel.create({ product: productID, user: userID });
    return res
      .status(201)
      .json("محصول مورد نظر به لیست علاقه مندی ها اضافه شد");
  } catch (err) {
    next(err);
  }
};

exports.removeFavorites = async (req, res, next) => {
  try {
    const { productID } = req.params;
    const userID = req.user._id;

    const product = await productModel.findOne({ _id: productID });
    if (!product) {
      return res.status(404).json("Product Not Found");
    }

    const user = await userModel.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json("User Not Found");
    }

    const isProductInFavorit = await favoritModel.findOne({
      product: productID,
    });
    if (!isProductInFavorit) {
      return res
        .status(404)
        .json("محصول مورد نظر در لیست علاقه مندی ها وجود ندارد ");
    }

    await favoritModel.findOneAndDelete({ product: productID, user: userID });

    return res.json("محصول مورد نظر از لیست علاقه مندی ها حذف شد");
  } catch (err) {
    next(err);
  }
};

exports.myFavorites = async (req, res, next) => {
  try {
    const userID = req.user._id;

    const user = await userModel.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json("User Not Found");
    }

    const favorites = await favoritModel.find({ user: userID }).populate({
      path: "product",
      select: "name _id cover price sendingTime",
    });

    return res.json(favorites);
  } catch (err) {
    next(err);
  }
};

exports.priceSortProducts = async (req, res, next) => {
  try {
    const { maxPrice } = req.query;
    const { subcategoryhref } = req.params;

    const subCategory = await subCategoryModel.findOne({
      href: subcategoryhref,
    });
    if (!subCategory) {
      return res.status(404).json("دسته بندی مورد نظر یافت نشد");
    }

    const products = await productModel
      .find({
        $and: [{ subCategory: subCategory._id }, { price: { $lt: maxPrice } }],
      })
      .select("cover name price category subCategory");
    if (!products) {
      return res.status(404).json("محصول مورد نظر یافت نشد");
    }

    return res.json(products);
  } catch (err) {
    next(err);
  }
};
