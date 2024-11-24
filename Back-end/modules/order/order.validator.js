const yup = require("yup");

const addOrderVAlidator = yup.object().shape({
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters long")
    .max(1000, "Address cannot exceed 1000 characters"),

  phone: yup.string().required("Phone number is required"),

  postalCode: yup.string().required("Phone number is required"),

  orderCode: yup
    .string()
    .required("Price is required")
    .length(6, "orderCode must be have 6 Digit "),
});

module.exports = { addOrderVAlidator };
