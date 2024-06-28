import { useState } from "react";
//links-img
import img1 from "../assets/minilogo/1.png";
import img2 from "../assets/minilogo/2.png";
import img3 from "../assets/minilogo/3.png";
import img4 from "../assets/minilogo/4.png";
import img5 from "../assets/minilogo/5.png";
import img6 from "../assets/minilogo/6.png";
import img7 from "../assets/minilogo/7.png";
import img8 from "../assets/minilogo/8.png";
//baner-img
import imgb3 from '../assets/banner/img-3.jpg'
import imgb4 from '../assets/banner/img-4.jpg'
import imgb5 from '../assets/banner/img-5.jpg'
import imgb6 from '../assets/banner/img-6.jpg'
import imgb7 from '../assets/banner/img-7.jpg'
import imgb8 from '../assets/banner/img-8.jpg'
import imgb9 from '../assets/banner/img-9.jpg'

import Header_mobile from "../components/Header_mobile";
import Slider_product_home from "../components/Slider_product_home";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-sky-50 text-sky-950" dir="rtl">
      <Header_mobile />
      <Slider_product_home />
      
      {/* links */}
      <div className="grid w-full h-max gap-4 grid-cols-4 md:grid-cols-8 text-[13px] lg:text-[16px] p-1 my-4">
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img1} alt="" />
          </NavLink>
          <p>مسای مارکت</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img2} alt="" />
          </NavLink>
          <p>حراج مسای</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img3} alt="" />
          </NavLink>
          <p>خرید اقساطی</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img4} alt="" />
          </NavLink>
          <p>مسای سرویس</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img5} alt="" />
          </NavLink>
          <p>ماه رمضان</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img6} alt="" />
          </NavLink>
          <p>مسای پلاس</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img7} alt="" />
          </NavLink>
          <p>هدیه خرید</p>
        </div>
        <div className="flex gap-1 justify-center items-center flex-col">
          <NavLink to={"/"} className={" block w-[40px] h-[40px] rounded-full"}>
            <img className=" w-full h-full object-cover" src={img8} alt="" />
          </NavLink>
          <p>بیشتر</p>
        </div>
      </div>

      {/* slider-pc */}


      {/* baner */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 p-2 my-4">
        <NavLink to={'/'} className={'block w-full h-full  '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb3} alt="" />
        </NavLink>
        <NavLink to={'/'} className={'block w-full h-full  '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb4} alt="" />
        </NavLink>
        <NavLink to={'/'} className={'block w-full h-full  '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb5} alt="" />
        </NavLink>
        <NavLink to={'/'} className={'block w-full h-full  '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb6} alt="" />
        </NavLink>
      </div>

      {/* شگفت انگیزهای روز */}


      {/* baner */}
      <div className="flex flex-col  gap-3 items-center justify-center  md:flex-row p-2 my-4">
        <NavLink to={'/'} className={'block w-full h-full max-w-[500px] mx-auto md:max-w-[650px] '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb7} alt="" />
        </NavLink>
        <NavLink to={'/'} className={'block w-full h-full max-w-[500px] mx-auto md:max-w-[650px] '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb8} alt="" />
        </NavLink>
      </div>

      {/* محصولات پرفروش */}

      {/* baner */}
      <div className="flex flex-col  gap-3 items-center justify-center  md:flex-row p-2 my-4">
        <NavLink to={'/'} className={'block w-[95%] h-full '} >
          <img className=" w-full h-full object-cover rounded-xl"  src={imgb9} alt="" />
        </NavLink>
      </div>

    </div>
  );
}

export default Home;
