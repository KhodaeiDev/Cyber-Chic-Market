const productModel = require("./../../models/Product");

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
      return ServiceWorker.status(401).json(
        "لطفا تصویر محصول خود را اپلود کنید"
      );
    }
    const imagesname = [];
    req.files.images.forEach((file) => {
      const mediaUrlPath = `/images/product/${file.filename}`;
      imagesname.push(mediaUrlPath);
    });

    const mediaUrlPath = `/images/product/${req.files.cover[0].filename}`;

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
