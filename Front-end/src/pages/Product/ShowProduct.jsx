import React, { useState } from "react";
import Header_mobile from "../../components/Header_mobile";
import Header_pc from "../../components/Header_pc";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import phoneimg from "../../assets/p_7.jpg";
import img from '../../assets/1.png'

function ShowProduct() {
  const [flag1, setflag1] = useState(true);
  const [flag2, setflag2] = useState(false);
  const [flag3, setflag3] = useState(false);
  const [flag4, setflag4] = useState(false);
  return (
    <div
      className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center"
      dir="rtl"
    >
      <Header_mobile />
      <Header_pc />
      {/* nav */}
      <div className="px-10 w-[95%] text-nowrap  p-2 mt-5 text-gray-500 border border-gray-300 rounded-xl">
        <p>موبایل / برند ترین ها / اپل / اپل مدل iphone 13 Pro Max</p>
      </div>

      <div className=" w-full h-full mt-1 p-3 flex flex-col md:flex-row items-start justify-center gap-5 ">
        <div className=" w-[90%] md:w-2/4 p-4 mx-auto h-full border border-gray-300 rounded-2xl">
          <img
            className=" w-[330px] h-[400px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[380px] xl:w-[400px] xl:h-[480px] mx-auto object-cover rounded-2xl shadow-sm shadow-black"
            src={phoneimg}
            alt=""
          />
          <div className=" w-full mt-2 p-1 flex gap-4 flex-wrap justify-center items-center">
            <img
              className="w-[100px] h-[100px] object-fill rounded-xl shadow-sm shadow-black"
              src={phoneimg}
              alt=""
            />
            <img
              className="w-[100px] h-[100px] object-fill rounded-xl shadow-sm shadow-black"
              src={phoneimg}
              alt=""
            />
            <img
              className="w-[100px] h-[100px] object-fill rounded-xl shadow-sm shadow-black"
              src={phoneimg}
              alt=""
            />
            <img
              className="w-[100px] h-[100px] object-fill rounded-xl shadow-sm shadow-black"
              src={phoneimg}
              alt=""
            />
            <img
              className="w-[100px] h-[100px] object-fill rounded-xl shadow-sm shadow-black"
              src={phoneimg}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[90%] p-4 mx-auto flex flex-col gap-3 border border-gray-300 rounded-2xl">
          <p>اپل مدل Iphone 13 Pro Max</p>
          <p>دو سیم‌ کارت ظرفیت 1 ترابایت و 6 گیگابایت رم </p>
          <ul className=" w-full p-2 grid grid-cols-2 gap-3 items-center justify-center">
            <li> قابلیت : ضداب</li>
            <li> نوع گوشی : دوگوشی</li>
            <li>سیستم عامل : iOS 15</li>
            <li>فناوری : Super Retina XDR OLED</li>
            <li>اندازه : 6.1</li>
            <li>رزولوشن عکس : 12 مگاپیکسل</li>
            <li>بلوتوث : دارد</li>
            <li>رنگ : مشکی</li>
            <li></li>
          </ul>

          <div className="w-full flex gap-3 flex-col items-start">
            <p className=" text-[14px] p-2 border-b border-gray-400">
              زمان ارسال محصول : از انبار مَسای کالا طی 2 روز کFاری
            </p>
            <div className=" w-full flex flex-col gap-3 lg:grid lg:grid-cols-2 xl:grid-cols-3 items-center justify-items-center ">
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
              <div className="w-full flex gap-3 items-center justify-center">
                <p className=" text-nowrap text-red-600 decoration-red-600 line-through px-4 py-2 rounded-xl">
                  12,000,000 تومان
                </p>
                <p className=" text-nowrap text-sky-600 bg-sky-100 px-4 py-2 rounded-xl">
                  10,000,000 تومان
                </p>
              </div>
              <button className="w-max h-max mx-auto px-4 py-2 transition-all bg-sky-700 hover:bg-sky-500 hover:shadow-md hover:shadow-sky-950 text-white rounded-2xl">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
          <p className="mt-3 p-2 text-gray-400 leading-6">
            برای کالاهای گروه موبایل، امکان برگشت کالا به دلیل انصراف از خرید
            تنها در صورتی مورد قبول است که کالا بدون هیچگونه استفاده و با تمامی
            قطعات، متعلقات و بسته‌بندی‌های اولیه خود بازگردانده شود. لازم به ذکر
            است که برای هر کالای موبایل، ضمانت رجیستری صادر می‌شود. در صورت بروز
            اشکال در ضمانت رجیستری، پس از انقضای مدت ۳۰ روزه، کالا می‌تواند
            بازگردانده شود.
          </p>
        </div>
      </div>

      <div className="w-[90%] flex gap-3 flex-col items-center">
        <div className=" w-full p-2 flex items-center gap-3 justify-start border border-gray-300 rounded-xl">
          <button
            onClick={() => {
              setflag1(true), setflag2(false), setflag3(false), setflag4(false);
            }}
            className={` btn-pro ${flag1 ? "bg-sky-600 text-white" : "bg-sky-200 text-gray-700" } `}
          >
            توضیحات تکمیلی
          </button>
          <button
            onClick={() => {
              setflag1(false), setflag2(true), setflag3(false), setflag4(false);
            }}
            className={`  btn-pro ${flag2 ? "bg-sky-600 text-white" : "bg-sky-200 text-gray-700" }`}
          >
            مشخصات محصول
          </button>
          <button
            onClick={() => {
              setflag1(false), setflag2(false), setflag3(true), setflag4(false);
            }}
            className={`  btn-pro ${flag3 ? "bg-sky-600 text-white" : "bg-sky-200 text-gray-700" } `}
          >
            دیدگاه خریداران
          </button>
          <button
            onClick={() => {
              setflag1(false), setflag2(false), setflag3(false), setflag4(true);
            }}
            className={` btn-pro ${flag4 ? "bg-sky-600 text-white" : "bg-sky-200 text-gray-700" } `}
          >
            پرسش و نظر
          </button>
        </div>
        
        <div className=" w-full p-4 border border-gray-300 rounded-3xl">
          
          {flag1 && (
            <div className="w-full">
              <p className=" p-2 border-b rounded-md border-gray-400">
                بررسی تخصصی گوشی iPhone 13 Pro Max
              </p>
              <p className=" leading-10 ">
                مدل iPhone 13 Pro Max، آخرین نسخه از سری گوشی‌های iPhone ساخت
                شرکت اپل است که در تاریخ 14 سپتامبر 2021 معرفی شده است. این گوشی
                با صفحه‌نمایش سوپر رتینا XDR از نوع OLED و ابعاد 6.7 اینچ،
                عملکردی بی‌نظیر را در ارائه تصاویر با کیفیت بالا به کاربران خود
                ارائه می‌دهد. صفحه آن با درجه حفاظت IP68 در برابر آب و گرد و
                غبار مقاوم است. گوشی iPhone 13 Pro Max دارای پردازنده A15
                Bionic، پردازنده اختصاصی شرکت اپل است که همراه با 6 هسته و GPU 5
                هسته‌ای طراحی شده است. این پردازنده با فناوری 5 نانومتر قدرتمندی
                و قابلیت انجام عملیات پردازشی سریع در برنامه‌های گوناگون را
                فراهم می‌کند. دوربین‌های iPhone 13 Pro Max شامل سه لنز 12
                مگاپیکسلی هستند که شامل لنز اصلی، لنز تله‌فوتو و لنز زاویه
                یک‌صدم گنجایش هستند که مجموعه ای از قابلیت‌های عکاسی شامل فوکوس
                خودکار بصری، حالت زوم، اپتیکال زوم، پورتره، ثبت عکس با رنگ‌های
                بیشتر و تصاویر با کیفیت بالا را فراهم می‌کند. این گوشی دارای
                سیستم عامل iOS 15 است که با مجموعه دستورالعمل‌ها و روش‌های جدید
                برای ارتقاء تجربیات کاربری و تضمین امنیت اطلاعات کاربر فراهم
                می‌شود. همچنین، دارای جعبه باتری پورت هسته هیدروژن است که زمان
                شارژ موثر گوشی را افزایش می‌دهد.
              </p>
            </div>
          )}

          {
            flag2 && (
              <div className=" w-full">
                <p className=" p-2 border-b rounded-md border-gray-400">
                  بررسی تخصصی گوشی iPhone 13 Pro Max
                </p>
                <ul className=" flex flex-col gap-3 mt-3">
                  <li>رنگ : مشکی</li>
                  <li>بلوتوث : دارد</li>
                  <li>رزولوشن عکس : 12 مگاپیکسل</li>
                  <li>اندازه : 6.1</li>
                  <li>قابلیت : ضد آب</li>
                  <li>نوع گوشی : دو گوشی</li>
                  <li>سیستم عامل : iOS 15</li>
                  <li>فناوری : Super Retina XDR OLED</li>
                </ul>
              </div>
            )
          }

          {
            flag3 && (
              <div className=" w-full">
                <p className=" p-2 border-b rounded-md border-gray-400">
                  دیدگاه های دیگر کاربران
                </p>
                <ul className=" flex flex-col gap-3 mt-3">
                  {
                    [...Array(10)].map((item, k) => (
                      <li key={k} className=" flex gap-2  items-start ">
                        <img className=" w-[90px] h-[90px] rounded-full" src={img} alt="" />
                        <div className="flex flex-col gap-3">
                          <span className=" text-[20px] font-bold">عالی و شیک</span>
                          <span className=" text-[15px]">
                            محصول بسیار خوبی است. صفحه‌نمایش با کیفیت فوق‌العاده، دوربین‌های با کیفیت و روانی کارکرد دستگاه همگی از ویژگی‌های مثبت این محصول هستند.
                          </span>
                          <span className=" text-[14px] text-gray-600">
                            25 اردیبهشت 1402 رضا صبوری
                          </span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          }

          {
            flag4 && (
              <div className="w-full">
                <p className=" p-2 border-b rounded-md border-gray-400">
                  ارسال نظر و پرسش
                </p>
                <textarea className="mt-3 p-2 px-3 w-full h-[150px] outline-none bg-transparent border border-gray-400 rounded-3xl" name="" id="" cols="30" rows="10"></textarea>
                <button className="mt-2 px-5 py-2 text-white rounded-xl bg-sky-600">ارسال نظر</button>
              </div>
            )
          }
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  );
}

export default ShowProduct;
