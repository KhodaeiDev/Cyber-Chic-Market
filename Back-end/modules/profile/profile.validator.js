const yup = require("yup");

const editValidator = yup.object({
  fullName: yup.string().optional(),
  email: yup.string().email("لطفا ایمیل معتبر وارد کنید").optional(),
  username: yup
    .string()
    .required("نام کاربری اجباری است")
    .min(6, "نام کاربری حداقل باید 6 کاراکتر باشد")
    .max(32, "نام کاربری حداکثر باید 32 کاراکتر باشد"),
  phone: yup.number().required(),
  cardNumber: yup.number().optional(),
  shabaNumber: yup.number().optional(),
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
