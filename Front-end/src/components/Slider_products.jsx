import React, { useRef, useState } from "react";
import phoneimg from "../assets/p_7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Slider_products({img,flagtime}) {
  return (
    <div className=" w-full max-w-[1200px] mx-auto h-[570px] p-2 bg-red-900d flex flex-col items-center gap-2 justify-center">
      <div className=" w-full h-[110px] flex items-center justify-between border-b-2 pb-2 border-sky-500">
        <img className=" w-[220px] h-[50px] object-cover" src={img} alt="" />
        {
          flagtime && (
        <div className=" w-[200px] flex gap-2 items-center justify-center">
          <ul className="flex flex-col gap-2 items-center justify-center">
            <li className="w-[45px] h-[45px] flex items-center justify-center border-2 border-gray-400 rounded-full">
              0
            </li>
            <li>ثانیه</li>
          </ul>
          <ul className="flex flex-col gap-2 items-center justify-center">
            <li className="w-[45px] h-[45px] flex items-center justify-center border-2 border-gray-400 rounded-full">
              0
            </li>
            <li>دقیقه</li>
          </ul>
          <ul className="flex flex-col gap-2 items-center justify-center">
            <li className="w-[45px] h-[45px] flex items-center justify-center border-2 border-gray-400 rounded-full">
              0
            </li>
            <li>ساعت</li>
          </ul>
          <ul className=" flex flex-col gap-2 items-center justify-center">
            <li className="w-[45px] h-[45px] flex items-center justify-center border-2 border-gray-400 rounded-full">
              0
            </li>
            <li>روز</li>
          </ul>
        </div>
          )
        }
      </div>

        <Swiper
          spaceBetween={10}
          breakpoints={{
               380: {
                 slidesPerView: 2,
               },
               640: {
                 slidesPerView: 2,
               },
               768: {
                 slidesPerView: 3  
               },
               1024: {
                 slidesPerView: 4
               },
               1280: {
                 slidesPerView: 5
               },
             }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-full mt-2"
        >
          {[...Array(10)].map((item, k) => (
            <SwiperSlide key={k} className=" w-max h-max flex items-center justify-center ">
              <div className=" w-full h-full py-2 text-center rounded-2xl border border-gray-400 shadow-md shadow-black">
               <img className=" max-w-[300px] h-[300px] dsm:w-[250px] dsm:h-[300px] mx-auto object-cover rounded-2xl" src={phoneimg} alt="" />
               <p>نام</p>
               <p>100,000 تومان</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <NavLink className={` px-10 py-2 bg-sky-500 text-white rounded-2xl`} >مشاهده بیشتر</NavLink>

    </div>
  );
}

export default Slider_products;
