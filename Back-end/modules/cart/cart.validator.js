const yup = require("yup");
const { isValidObjectId } = require("mongoose");

const addToCartValidator = yup.object({
  productId: yup
    .string()
    .required("Product ID is required")
    .test("is-valid-object-id", "Invalid product ID", (value) =>
      isValidObjectId(value)
    ),
  quantity: yup
    .number()
    .required("Quantity is required")
    .positive()
    .integer()
    .max(1, "You cannot add more than 1 of each product to the cart"),
});

const removeFromCartValidator = yup.object({
  productId: yup
    .string()
    .required("Product ID is required")
    .test("is-valid-object-id", "Invalid product ID", (value) =>
      isValidObjectId(value)
    ),
});

module.exports = {
  addToCartValidator,
  removeFromCartValidator,
};
