import React from "react";
import lic1 from "../assets/License_1.png";
import lic2 from "../assets/License_2.png";

const Footer = () => {
  return (
    <footer className="bg-[url('/map.png')] bg-cover filter backdrop-blur-xl w-full max-w-[1440px] mx-auto h-max pt-10 mt-10 ">
      <div className="container py-16 mx-auto px-3 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-600">
        {/* About Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg pb-1 border-b border-sky-300 font-semibold mb-4">
            درباره ما
          </h3>
          <p className="text-md">
            قالب مسای یک پکیج کامل ایرانی با هدف بی نهایت قالب HTML و WordPress
            و به روز رسانی همیشگی است، که تمام ویژگی های لازم طراحی سایت را در
            نظر میگیرد
          </p>
        </div>

        {/* Customer Services Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg pb-1 border-b border-sky-300 font-semibold mb-4">
            خدمات مشتریان
          </h3>
          <ul className="space-y-2">
            <li>ارسال فوری</li>
            <li>پشتیبانی سریع</li>
            <li>بازگشت وجه</li>
            <li>بسته بندی کالا</li>
          </ul>
        </div>

        {/* Shop Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg pb-1 border-b border-sky-300 font-semibold mb-4">
            با مَسای شاپ
          </h3>
          <ul className="space-y-2">
            <li>تامین کالا همکار</li>
            <li>تخفیف سازمانی</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
          </ul>
        </div>
      
      {/* Licenses */}
      <div className="">
        <h3 className="text-lg pb-1 border-b border-sky-300 font-semibold mb-4">
          مجوزات
        </h3>
        <div className=" flex justify-center items-center space-x-4">
          <img src={lic1} alt="License 1" className="w-32 h-32" />
          <img src={lic2} alt="License 2" className="w-32 h-32" />
        </div>
      </div>
      
      </div>


      {/* Footer Note */}
      <div className=" h-[45px] flex items-center justify-center rounded-xl text-center bg-gray-300 text-gray-700 text-xs mt-8">
        این قالب به وسیله ابوالفضل ملاشاهی پشتیبانی میشود.
      </div>
    </footer>
  );
};

export default Footer;
