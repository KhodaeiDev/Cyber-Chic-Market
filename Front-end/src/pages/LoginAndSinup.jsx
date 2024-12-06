import React from "react";
import Header_mobile from "../components/Header_mobile";
import Header_pc from "../components/Header_pc";
import Features from "../components/Features";
import Footer from "../components/Footer";

function LoginAndSinup() {
  return (
    
<div className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center" dir="rtl">

<Header_mobile />
<Header_pc />

<div className=" w-full my-5">
       {/* login */}
       <div className="flex justify-center items-center h-max ">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-right text-2xl font-semibold text-gray-700 mb-6">
            ورود به حساب کاربری
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-right text-gray-600 mb-1">
                * نام کاربری
              </label>
              <input
                type="text"
                placeholder="نام کاربری شما"
                className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
              />
            </div>
            <div>
              <label className="block text-right text-gray-600 mb-1">
                * کلمه عبور
              </label>
              <input
                type="password"
                placeholder="کلمه عبور شما"
                className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="ml-2 text-teal-500" />
                مرا به خاطر بسپار
              </label>
              <a href="#" className="text-teal-500 text-sm hover:underline">
                رمز عبور را فراموش کرده‌اید؟
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            >
              ورود
            </button>
          </form>
          <div className="text-center mt-4 text-gray-600">
            کاربر جدید هستید؟{" "}
            <a href="#" className="text-teal-500 hover:underline">
              ثبت نام
            </a>
          </div>
        </div>
      </div>
</div>

<Features />

<Footer />

</div>
  );
}

export default LoginAndSinup;
