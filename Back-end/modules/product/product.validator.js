const { isValidObjectId } = require("mongoose");
const yup = require("yup");

const createProductValidator = yup.object().shape({
  name: yup
    .string()
    .required("Product name is required")
    .min(3, "Product name must be at least 3 characters long")
    .max(100, "Product name cannot exceed 100 characters"),

  title: yup
    .string()
    .required("Title is required")
    .min(10, "Title name must be at least 10 characters long")
    .max(255, "Title name cannot exceed 255 characters"),

  href: yup
    .string()
    .required("href is required")
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL-friendly"),

  description: yup
    .string()
    .required("Product description is required")
    .max(1000, "Product description cannot exceed 1000 characters"),

  subCategory: yup
    .string()
    .required("SubCategory ID is required")
    .test(
      "is-valid-objectid",
      "SubCategory ID must be a valid ObjectId",
      isValidObjectId
    ),

  category: yup
    .string()
    .required("SubCategory ID is required")
    .test(
      "is-valid-objectid",
      "SubCategory ID must be a valid ObjectId",
      isValidObjectId
    ),

  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),

  discountPercent: yup
    .number()
    .positive("discountPercent must be a positive number")
    .required("discountPercent is required (Beetwin 0 , 100)")
    .min(0, "The discountPercent must beetwin 0 , 100")
    .max(100, "The discountPercent must beetwin 0 , 100"),

  quantity: yup
    .number()
    .required("Stock is required")
    .min(0, "Stock must be a non-negative number"),

  brand: yup
    .mixed()
    .oneOf(["apple", "samsung", "xiaomi", "asus", "huawei", "hp"])
    .required("Product brands is a required fields"),

  attributes: yup
    .object()
    .test(
      "customFieldsCheck",
      "customFields must be an object with key-value pairs",
      (value) => value === undefined || typeof value === "object"
    ),
});

const updateProductValidator = yup.object().shape({
  name: yup
    .string()
    .min(3, "Product name must be at least 3 characters long")
    .max(100, "Product name cannot exceed 100 characters"),

  slug: yup
    .string()
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL-friendly"),

  description: yup
    .string()
    .max(1000, "Product description cannot exceed 1000 characters"),

  subCategory: yup
    .string()
    .test(
      "is-valid-objectid",
      "SubCategory ID must be a valid ObjectId",
      (value) => value === null || value === undefined || isValidObjectId(value)
    ),

  sellers: yup
    .array()
    .of(
      yup.object().shape({
        id: yup
          .string()
          .required("Seller ID is required")
          .test(
            "is-valid-objectid",
            "Seller ID must be a valid ObjectId",
            isValidObjectId
          ),
        price: yup
          .number()
          .required("Price is required")
          .positive("Price must be a positive number"),
        stock: yup
          .number()
          .required("Stock is required")
          .min(0, "Stock must be a non-negative number"),
      })
    )
    .min(1, "At least one seller is required"),

  customFields: yup
    .object()
    .test(
      "customFieldsCheck",
      "customFields must be an object with key-value pairs",
      (value) => value === undefined || typeof value === "object"
    ),

  filterValues: yup
    .object()
    .test(
      "filterValuesCheck",
      "filterValues must be an object with key-value pairs",
      (value) => value === undefined || typeof value === "object"
    ),
});

module.exports = {
  createProductValidator,
  updateProductValidator,
};
