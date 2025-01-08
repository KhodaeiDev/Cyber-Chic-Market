const yup = require("yup");

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const editValidator = yup.object({
  fullName: yup.string().optional(),
  email: yup
    .string()
    .matches(emailRegex, "The email entered is not valid.")
    .optional(),
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters long")
    .max(32, "Username must be 32 characters maximum.")
    .required("Username is a required"),
  phone: yup.string().required(),
  cardNumber: yup
    .string()
    .optional()
    .length(16, "Cart Number is not Valid , must be exactly 16 digits"),
  shabaNumber: yup
    .string()
    .optional()
    .length(
      24,
      "Shaba Number is not Valid  ,Shaba Number must be exactly 24 digits"
    ),
});

const resetPasswordValidator = yup.object({
  password: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(45, "Password must have a maximum of 45 characters")
    .required("Password is Required"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "The Confirm Password does not match with password"
    ),
});

module.exports = { editValidator, resetPasswordValidator };
