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
import imgb3 from "../assets/banner/img-3.jpg";
import imgb4 from "../assets/banner/img-4.jpg";
import imgb5 from "../assets/banner/img-5.jpg";
import imgb6 from "../assets/banner/img-6.jpg";
import imgb7 from "../assets/banner/img-7.jpg";
import imgb8 from "../assets/banner/img-8.jpg";
import imgb9 from "../assets/banner/img-9.jpg";

import Header_mobile from "../components/Header_mobile";
import Slider_product_home from "../components/Slider_product_home";
import { NavLink } from "react-router-dom";
import Header_pc from "../components/Header_pc";
import Slider_products from "../components/Slider_products";
import shegeftangizha from "../assets/shegeft_1.png";
import porfrosh from "../assets/seller_1.png";
import Pupiolatebranndslider from "../components/Pupiolatebranndslider";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Sliders from "../components/sliders/Sliders";
import { useSelector } from "react-redux";
import Category from "../components/Category";

function Home() {
 const products = useSelector((state) => state.products);
 
 let links = [
  {
   link: "/",
   img: img1,
   text: "مسای مارکت",
  },
  {
   link: "/",
   img: img2,
   text: "حراج مسای",
  },
  {
   link: "/",
   img: img3,
   text: "خرید اقساطی",
  },
  {
   link: "/",
   img: img4,
   text: "مسای سرویس",
  },
  {
   link: "/",
   img: img5,
   text: "ماه رمضان",
  },
  {
   link: "/",
   img: img6,
   text: "مسای پلاس",
  },
  {
   link: "/",
   img: img7,
   text: "هدیه خرید",
  },
  {
   link: "/",
   img: img8,
   text: "بیشتر",
  },
 ];

 return (
  <div className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center" dir="rtl">
   <Header_mobile />
   <Header_pc />
   <div className=" w-full ">
    <Slider_product_home />

    {/* links */}
    <div className=" w-full max-w-[1200px] mx-auto grid h-max gap-4 grid-cols-4 md:grid-cols-8 text-[13px] lg:text-[16px] p-1 my-4">
      {links.map((item, k) => (
     <div key={k} className="w-full flex gap-2 justify-center items-center flex-cold">
       <div  className="w-full flex gap-2 justify-center items-center flex-col">
        <NavLink to={item.link} className={" block w-[40px] h-[40px] rounded-full"}>
         <img className=" w-full h-full object-cover" src={item.img} alt="" />
        </NavLink>
        <NavLink to={item.link}>{item.text}</NavLink>
       </div>
     </div>
      ))}
    </div>

    {/* slider-pc */}
    <Sliders />

    {/* baner */}
    <div className="w-full max-w-[1200px] mx-auto grid gap-3 grid-cols-2 md:grid-cols-4 p-2 my-4">
     <NavLink to={"/"} className={"block w-full h-full  "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb3} alt="" />
     </NavLink>
     <NavLink to={"/"} className={"block w-full h-full  "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb4} alt="" />
     </NavLink>
     <NavLink to={"/"} className={"block w-full h-full  "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb5} alt="" />
     </NavLink>
     <NavLink to={"/"} className={"block w-full h-full  "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb6} alt="" />
     </NavLink>
    </div>

    {/* شگفت انگیزهای روز */}
    <Slider_products img={shegeftangizha} flagtime={true} />

    {/* baner */}
    <div className="w-full max-w-[1200px] mx-auto flex flex-col  gap-3 items-center justify-center  md:flex-row p-2 my-4">
     <NavLink to={"/"} className={"block w-full h-full max-w-[500px] mx-auto md:max-w-[650px] "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb7} alt="" />
     </NavLink>
     <NavLink to={"/"} className={"block w-full h-full max-w-[500px] mx-auto md:max-w-[650px] "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb8} alt="" />
     </NavLink>
    </div>

    {/* محصولات پرفروش */}
    <Slider_products img={porfrosh} flagtime={false} />

    {/* baner */}
    <div className="w-full max-w-[1200px] mx-auto flex flex-col  gap-3 items-center justify-center  md:flex-row p-2 my-4">
     <NavLink to={"/"} className={"block w-[95%] h-full "}>
      <img className=" w-full h-full object-cover rounded-xl" src={imgb9} alt="" />
     </NavLink>
    </div>

    {/* دسته بندی  */}
    <Category />

    {/* برند های محبوب */}
    <Pupiolatebranndslider />
   </div>

   <Features />

   <Footer />
  </div>
 );
}

export default Home;
