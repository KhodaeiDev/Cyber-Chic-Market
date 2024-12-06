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
    .required("نام کاربری اجباری است")
    .min(6, "نام کاربری حداقل باید 6 کاراکتر باشد")
    .max(32, "نام کاربری حداکثر باید 32 کاراکتر باشد")
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
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .max(45, "رمز عبور باید حداکثر 45 کاراکتر داشته باشد")
    .required("رمز عبور اجباری است"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبود همخوانی ندارد"),
});

module.exports = { editValidator, resetPasswordValidator };
