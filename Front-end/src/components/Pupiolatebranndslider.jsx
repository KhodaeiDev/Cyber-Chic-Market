import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import b1 from '../assets/brands/brand-1.jpg'
import b2 from '../assets/brands/brand-2.jpg'
import b3 from '../assets/brands/brand-3.jpg'
import b4 from '../assets/brands/brand-4.jpg'
import b5 from '../assets/brands/brand-5.jpg'
import b6 from '../assets/brands/brand-6.jpg'
import b7 from '../assets/brands/brand-7.jpg'
import b8 from '../assets/brands/brand-8.jpg'
import b9 from '../assets/brands/brand-9.jpg'
import b10 from '../assets/brands/brand-10.jpg'


function Pupiolatebranndslider() {
  const [ brands, setbrands ] = useState([
    { src: b1, link: "/" },
    { src: b2, link: "/" },
    { src: b3, link: "/" },
    { src: b4, link: "/" },
    { src: b5, link: "/" },
    { src: b6, link: "/" },
    { src: b7, link: "/" },
    { src: b8, link: "/" },
    { src: b9, link: "/" },
    { src: b10, link: "/" },
  ]);
  return (
    <div className="  w-full mt-5 max-w-[1200px] mx-auto bg-sky-100 rounded-3xl">
      <p className="px-8 p-2">محبوب ترین برند ها</p>
      <hr className=" border border-sky-400 w-[95%] mx-auto" />
      <Swiper
        spaceBetween={10}
        breakpoints={{
          380: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        autoplay={true}
        modules={[Autoplay]}
        className="mySwiper w-full h-full mt-2  "
      >
        {brands.map((item, k) => (
          <SwiperSlide
            key={k}
            className=" w-full h-full flex items-center justify-center "
          >
            <img
              className=" w-[70%] p-2 h-[80px] object-cover rounded-3xl"
              src={item.src}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Pupiolatebranndslider;
