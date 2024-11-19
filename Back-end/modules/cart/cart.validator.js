const yup = require("yup");
const { isValidObjectId } = require("mongoose");

const addToCartValidator = yup.object({
  productId: yup
    .string()
    .required("Product ID is required")
    .test("is-valid-object-id", "Invalid product ID", (value) =>
      isValidObjectId(value)
    ),
  quantity: yup.number().required("Quantity is required").positive().integer(),
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
