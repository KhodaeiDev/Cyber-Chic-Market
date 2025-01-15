const yup = require("yup");

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let phoneRegex =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const registerValidator = yup.object({
  username: yup
    .string()
    .required("نام کاربری اجباری است")
    .min(3, "نام کاربری حداقل باید 3 کارکتر باشد"),
  phone: yup.string().required(),
  // .matches(phoneRegex, "لطفا شماره تلفن معتبر وارد کنید"),
  email: yup
    .string()
    .matches(emailRegex, "The email entered is not valid.")
    .required(),
  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .max(45, "رمز عبور باید حداکثر 45 کاراکتر داشته باشد")
    .required("رمز عبور اجباری است"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبود همخوانی ندارد"),
});

const loginValidator = yup.object({
  username: yup.string().required("نام کاربری اجباری است"),
  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .max(45, "رمز عبور باید حداکثر 45 کاراکتر داشته باشد")
    .required("رمز عبور اجباری است"),
});

const getResetPassCodeValidator = yup.object({
  email: yup
    .string()
    .matches(emailRegex, "The email entered is not valid.")
    .required(),
});

module.exports = {
  registerValidator,
  loginValidator,
  getResetPassCodeValidator,
};
