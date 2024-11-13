import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img_slider_home_product/img1.jpg";
import img2 from "../assets/img_slider_home_product/img2.jpg";
import img3 from "../assets/img_slider_home_product/img3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Slider_product_home() {
  return (
    <div className=" w-full max-w-[1440px] slider_home_product pt-[10px] " dir="ltr">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 28500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NavLink to={"/category"}>
            <img className=" w-full h-full object-cover rounded-xl !z-[90]" src={img1} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={"/category"}>
            <img className=" w-full h-full object-cover rounded-xl !z-[90]" src={img2} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={"/category"}>
            <img className=" w-full h-full object-cover rounded-xl !z-[90]" src={img3} />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider_product_home;
