import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import phoneimg from "../../assets/p_7.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Sliders.css";

import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function Sliders() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="hidden slider lg:flex w-full max-w-[1200px] mx-auto  gap-2 items-start p-2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-[100%] h-[460px] bg-sky-50 rounded-2xl flex items-center justify-center "
        >
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex gap-6 items-center justify-center">
              <div className="w-max h-full flex items-center justify-center p-2">
                <img
                  className=" w-[400px] h-[350px] object-cover rounded-2xl shadow-sm shadow-black"
                  src={phoneimg}
                  alt=""
                />
              </div>
              <div className=" w-full h-full flex flex-col items-start gap-8 justify-center">
                <NavLink>گوشی</NavLink>
                <p> مدل Poco X4 Pro 5G 2201116PG</p>
                <div className="w-full grid grid-cols-2">
                  <ul className="flex gap-2">
                    <li>اندازه : </li>
                    <li>6.6</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رزولوشن عکس : </li>
                    <li>100 مگاپیکسل</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>رنگ : </li>
                    <li>مشکی</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>صفحه نمایش : </li>
                    <li>super amo</li>
                  </ul>
                  <ul className="flex gap-2">
                    <li>نسخه سیستم عامل : </li>
                    <li>android 11</li>
                  </ul>
                </div>
                <div className="w-full flex gap-2">
                  <p className="w-max p-2 line-through decoration-red-600 text-gray-500 bg-gray-100 rounded-2xl">
                    10,000,000 تومان
                  </p>
                  <p className="w-max p-2  text-sky-600 bg-sky-100 rounded-2xl">
                    9,000,000 تومان
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <p className=" text-sky-600 text-[23px] text-nowrap">
                    یه ثانیه هم غنیمته
                  </p>
                  <div className=" w-full flex gap-2 items-center justify-center">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper w-[300px] h-[350px] bg-sky-50 rounded-2xl "
        >
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <img className=" w-[150px] h-[200px] object-cover rounded-xl" src={phoneimg} alt="" />
              <p>گوشی</p>
              <p className="p-2 line-through decoration-red-600 text-gray-500">19,200,000</p>
              <p className="p-2 text-sky-600">15,000,000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-[95%] h-[95%] shadow-md shadow-black rounded-2xl">
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <img className=" w-[150px] h-[200px] object-cover rounded-xl" src={phoneimg} alt="" />
              <p>گوشی</p>
              <p className="p-2 line-through decoration-red-600 text-gray-500">19,200,000</p>
              <p className="p-2 text-sky-600">15,000,000</p>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
