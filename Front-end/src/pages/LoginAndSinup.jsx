import React, { useEffect, useState } from "react";
import Header_mobile from "../components/Header_mobile";
import Header_pc from "../components/Header_pc";
import Features from "../components/Features";
import Footer from "../components/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/auth";
import { useNavigate } from "react-router-dom";
import httphostname from "../httphostname";

function LoginAndSinup() {
 const [flaglogin, setflaglogin] = useState(false);
 const [loading, setloading] = useState(false);
 const [message, setMessage] = useState("");
 const dispatch = useDispatch();
 const nav = useNavigate();

 const [formData, setFormData] = useState({
  username: "",
  phone: "",
  password: "",
  confirmPassword: "",
  // termsAccepted: false,
 });

 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
   ...formData,
   [name]: type === "checkbox" ? checked : value,
  });
 };

 // ارسال فرم ثبت نام به بک‌اند
 //  const handleSubmitSignup = async (e) => {
 //   e.preventDefault();
 //   try {
 //    setMessage("");
 //    setloading(true);
 //    const response = await fetch("http://localhost:3000/auth/register", {
 //     method: "POST",
 //     headers: { "Content-Type": "application/json" },
 //     body: JSON.stringify(formData),
 //    });
 //    if (response.ok) {
 //     const data = await response.json();
 //     setMessage("ثبت‌نام با موفقیت انجام شد!");
 //     console.log("data", data);
 //    } else {
 //     const errorData = await response.json();
 //     setMessage(errorData.message || "خطایی رخ داده است.");
 //     console.log("errorData", errorData.error);
 //    }
 //   } catch (error) {
 //    console.log("error", error.message);
 //    setMessage("خطای ارتباط با سرور.");
 //   } finally {
 //    setloading(false);
 //   }
 //  };

 const handleSubmitSignup = async (e) => {
  e.preventDefault();
  setMessage(""); // پاک کردن پیام‌های قبلی
  setloading(true); // شروع حالت بارگذاری
  console.log(formData);
  try {
   const response = await axios.post(`${httphostname}/auth/register`, formData);
   const { newUser, message, accessToken } = response.data.data;
   setMessage(message);
   dispatch(setUser(newUser));
   localStorage.setItem("authToken", accessToken);
   nav("/dashbord");
  } catch (error) {
   console.log("error", error.message);
  } finally {
   setloading(false);
  }
 };

 const [loginData, setLoginData] = useState({
  username: "",
  password: "",
 });

 // تغییرات فرم لاگین
 const handleChangeLogin = (e) => {
  const { name, value } = e.target;
  setLoginData({
   ...loginData,
   [name]: value,
  });
 };

 // ارسال فرم ورود به بک‌اند
 const handleSubmitLogin = async (e) => {
  e.preventDefault();
  try {
    setloading(true)
   const response = await axios.post(`${httphostname}/auth/login`, loginData);
   const { message, accessToken } = response.data.data;
   localStorage.setItem("authToken", accessToken);
   const userResponse = await axios.get(`${httphostname}/auth/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
   });
   dispatch(setUser(userResponse.data.data.user));
   console.log("sub => ", response.data.data);
   nav("/dashbord");
  } catch (error) {
   setMessage("خطای ارتباط با سرور.");
   console.log("error", error.message);
  }finally{
    setloading(false)
  }
 };

 return (
  <div className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center" dir="rtl">
   <Header_mobile />
   <Header_pc />

   <div className=" w-full my-5">
    {flaglogin ? (
     //sinup
     <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={handleSubmitSignup} className="bg-white p-8 rounded shadow-md w-full max-w-md">
       <h2 className="text-2xl font-bold text-center mb-6">ایجاد حساب کاربری</h2>
       <div>
        <label className="block text-right text-gray-600 mb-1">* نام کاربری</label>
        <input
         type="text"
         name="username"
         onChange={handleChange}
         placeholder="نام کاربری شما"
         className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
        />
       </div>
       <div>
        <label className="block text-right text-gray-600 mb-1">شماره تماس *</label>
        <input
         type="tel"
         name="phone"
         onChange={handleChange}
         className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
         placeholder="09000000000"
        />
       </div>

       <div>
        <label className="block text-right text-gray-600 mb-1">کلمه عبور *</label>
        <input
         type="password"
         name="password"
         onChange={handleChange}
         className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
         placeholder="کلمه عبور شما"
        />
       </div>
       <div>
        <label className="block text-right text-gray-600 mb-1">تکرار کلمه عبور *</label>
        <input
         type="password"
         name="confirmPassword"
         onChange={handleChange}
         className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
         placeholder="تکرار کلمه عبور شما"
        />
       </div>

       {/* <div className="flex items-center mb-4 mt-2">
        <input type="checkbox" id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mx-2 " />
        <label htmlFor="termsAccepted" className="text-sm ">
         تمامی شرایط و قوانین سایت را مطالعه کرده‌ام و با آن موافقم.
        </label>
       </div> */}

       <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 focus:outline-none">
        عضویت
       </button>

       <div className="mt-4 text-center">
        قبلاً ثبت‌نام کرده‌اید؟
        <button onClick={() => setflaglogin(false)} className="mr-2 text-teal-500">
         ورود
        </button>
       </div>
      </form>
     </div>
    ) : (
     // login
     <div className="flex justify-center items-center h-max ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
       <h2 className="text-right text-2xl font-semibold text-gray-700 mb-6">ورود به حساب کاربری</h2>
       <form onSubmit={handleSubmitLogin} className="space-y-4">
        <div>
         <label className="block text-right text-gray-600 mb-1">* نام کاربری</label>
         <input
          type="text"
          name="username"
          onChange={handleChangeLogin}
          placeholder="نام کاربری شما"
          className="w-full px-4 py-2 bg-teal-50 border border-teal-200 rounded-full focus:outline-none focus:border-teal-400"
         />
        </div>
        <div>
         <label className="block text-right text-gray-600 mb-1">* کلمه عبور</label>
         <input
          type="password"
          name="password"
          onChange={handleChangeLogin}
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
        <button type="submit" disabled={loading} className="w-full py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
         ورود
        </button>
       </form>
       <div className="text-center mt-4 text-gray-600">
        کاربر جدید هستید؟{" "}
        <button onClick={() => setflaglogin(true)} className="mr-2 text-teal-500">
         ثبت نام
        </button>
       </div>
      </div>
     </div>
    )}
   </div>

   <Features />

   <Footer />
  </div>
 );
}

export default LoginAndSinup;
