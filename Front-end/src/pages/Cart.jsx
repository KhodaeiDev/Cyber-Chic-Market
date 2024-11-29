import Features from "../components/Features";
import Footer from "../components/Footer";
import Header_mobile from "../components/Header_mobile";
import Header_pc from "../components/Header_pc";
import phoneimg from "../assets/p_7.jpg";
import { act, useState } from "react";

const Cart = () => {
 const [activetab, setactiveTab] = useState("سبد خرید");
 const items = [
  {
   id: 1,
   name: "شیائومی مدل Poco X4",
   color: "مشکی",
   insurance: "بیمه پاسبان",
   price: "۱,۸۰۰,۰۰۰",
   originalPrice: "۱,۸۹۹,۰۰۰",
   quantity: 1,
   image: phoneimg,
  },
  {
   id: 2,
   name: "ساعت هوشمند امیزفیت",
   color: "مشکی",
   price: "۱,۸۰۰,۰۰۰",
   originalPrice: "۱,۸۹۹,۰۰۰",
   quantity: 1,
   image: phoneimg,
  },
  {
   id: 1,
   name: "شیائومی مدل Poco X4",
   color: "مشکی",
   insurance: "بیمه پاسبان",
   price: "۱,۸۰۰,۰۰۰",
   originalPrice: "۱,۸۹۹,۰۰۰",
   quantity: 1,
   image: phoneimg,
  },
  {
   id: 2,
   name: "ساعت هوشمند امیزفیت",
   color: "مشکی",
   price: "۱,۸۰۰,۰۰۰",
   originalPrice: "۱,۸۹۹,۰۰۰",
   quantity: 1,
   image: phoneimg,
  },
  {
   id: 1,
   name: "شیائومی مدل Poco X4",
   color: "مشکی",
   insurance: "بیمه پاسبان",
   price: "۱,۸۰۰,۰۰۰",
   originalPrice: "۱,۸۹۹,۰۰۰",
   quantity: 1,
   image: phoneimg,
  },
  {
   id: 2,
   name: "ساعت هوشمند امیزفیت",
   color: "مشکی",
   price: "۱,۸۰۰,۰۰۰",
   originalPrice: "۱,۸۹۹,۰۰۰",
   quantity: 1,
   image: phoneimg,
  },
 ];

 return (
  <div className="w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center" dir="rtl">
   <Header_mobile />
   <Header_pc />
   <div className="w-[90%] mx-auto mt-8">
    <CheckoutSteps activetab={activetab} setactiveTab={setactiveTab} />
    <div className=" w-full">
     {activetab === "سبد خرید" && <Tabcart items={items} setactiveTab={setactiveTab} />}
     {activetab === "پرداخت" && <PaymentOptions setactiveTab={setactiveTab} />}
     {activetab === "ارسال" && <OrderConfirmation />}
    </div>
   </div>
   <Features />
   <Footer />
  </div>
 );
};

export default Cart;

const CheckoutSteps = ({ activetab, setactiveTab }) => {
 return (
  <div className="flex items-center justify-center mt-10 mb-10">
   <div className="flex items-center">
    {/* Step 1 */}
    <div className="flex flex-col gap-2 items-center">
     <span onClick={() => setactiveTab("سبد خرید")} className="ml-2 cursor-pointer text-teal-500 text-nowrap">
      سبد خرید
     </span>
     <div className="bg-teal-500 text-white rounded-full h-8 w-8 flex items-center justify-center">✓</div>
    </div>

    {/* Line */}
    <div className={`w-20 md:w-32 lg:w-[200px] h-1.5 rounded-md mt-7 mx-2 ${activetab !== "سبد خرید" ? "bg-teal-500" : "bg-gray-300"} `}></div>

    {/* Step 2 */}
    <div className="flex flex-col gap-2 items-center">
     <span onClick={() => setactiveTab("پرداخت")} className={` ml-2  cursor-pointer ${activetab !== "سبد خرید" ? " text-teal-500" : "text-gray-500"} `}>
      پرداخت
     </span>
     <div
      className={`  rounded-full h-8 w-8 flex items-center justify-center ${
       activetab !== "سبد خرید" ? "bg-teal-500 text-white" : "bg-gray-300 text-gray-500"
      } `}
     >
      2
     </div>
    </div>

    {/* Line */}
    <div className={` w-20 md:w-32 lg:w-[200px] h-1.5 rounded-md mt-7 mx-2 ${activetab === "ارسال" ? "bg-teal-500" : "bg-gray-300"} `}></div>

    {/* Step 3 */}
    <div className="flex flex-col gap-2 items-center">
     <span
      onClick={() => setactiveTab("ارسال")}
      className={`ml-2 cursor-pointer translate-x-7 text-nowrap ${activetab === "ارسال" ? "text-teal-500" : "text-gray-500"}`}
     >
      پایان خرید و ارسال
     </span>
     <div
      className={` translate-x-10 rounded-full h-8 w-8 flex items-center justify-center ${
       activetab === "ارسال" ? "bg-teal-500 text-white" : "bg-gray-300 text-gray-500"
      } `}
     >
      3
     </div>
    </div>
   </div>
  </div>
 );
};

function Tabcart({items ,setactiveTab}) {
 return (
  <>
   <h2 className="text-2xl font-semibold mb-6">سبد خرید شما</h2>
   <div className="w-full h-[500px]d md:h-full overflow-scroll overflow-y-auto overflow-x-auto ">
    <div className="w-full  bg-white rounded-lg flex flex-col ">
     {/* Header */}
     <div className="w-max md:w-full text-nowrap flex gap-5 items-center justify-between bg-gray-100 py-3 px-4  text-gray-700">
      <div className="">محصول</div>
      <div className="mr-14">سبد خرید شما</div>
      <div className="mr-20">قیمت واحد</div>
      <div className="mr-20">تعداد</div>
      <div className="mr-24 md:mr-20">قیمت نهایی</div>
     </div>

     {/* Items */}
     {items.map((item) => (
      <div key={item.id} className=" w-max md:w-full flex gap-2 justify-between items-center border-b py-4 p-1 ">
       {/* Product Image */}
       <div className="w-full h-full flex justify-start">
        <img src={item.image} alt={item.name} className="w-40 h-40 md:w-36 md:h-40 object-cover" />
       </div>

       {/* Product Details */}
       <div className="w-full text-center ">
        <h3 className=" text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">
         {item.insurance} | رنگ: {item.color}
        </p>
       </div>

       {/* Price */}
       <div className="w-full text-nowrap text-center flex items-center gap-2 ">
        <span className="text-gray-400 line-through ml-2">{item.originalPrice} تومان</span>
        <span className="text-teal-500 p-2 rounded-2xl bg-teal-50">{item.price} تومان</span>
       </div>

       {/* Quantity */}
       <div className="w-full flex justify-center lg:mr-10 ">
        <input type="number" value={item.quantity} className="border rounded-lg p-1 w-12 bg-gray-100" />
       </div>

       {/* Remove Button */}
       <div className="w-full text-nowrap text-center flex items-center justify-end gap-2 ">
        <span className="text-teal-500 p-2 rounded-2xl bg-teal-50">{item.price} تومان</span>
       </div>
      </div>
     ))}
    </div>
   </div>
   <CheckoutSummary setactiveTab={setactiveTab} />
  </>
 );
}

function CheckoutSummary({setactiveTab}) {
 return (
  <div className="p-6 mt-5 bg-gray-50 rounded-lg shadow-md w-full flex flex-col lg:flex-row items-center justify-around gap-5 mx-auto">
   <div className="flex flex-col justify-between items-center ">
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
     <input type="text" placeholder="12345" className="w-full px-4 py-2 rounded-full bg-teal-50 border border-teal-200 focus:outline-none" />
     <button className="bg-teal-600 text-nowrap text-teal-100 px-4 py-2 rounded-md">به روز رسانی</button>
     <button className="bg-teal-600 text-white px-4 py-2 rounded-md">اعمال</button>
    </div>
    <p className="text-red-500 text-sm mt-4">ارسال رایگان برای سفارش‌های بالای ۱ میلیون و ۴۰۰ هزار تومان</p>
    <p className="text-gray-500 text-sm mt-2">افزودن کالا به سبد خرید به معنی رزرو آن نیست، با توجه به محدودیت موجودی سبد خود را ثبت و خرید را تکمیل کنید.</p>
   </div>

   <div className="flex flex-col justify-between items-center">
    <div className="flex text-nowrap gap-2 justify-between items-center">
     <div className=" flex flex-col gap-2 items-center">
      <p className="text-gray-500">قیمت کل سفارش:</p>
      <p className="text-gray-500">بسته‌بندی و ارسال:</p>
      <p className="text-teal-600 ">قیمت قابل پرداخت:</p>
     </div>
     <div className=" flex flex-col gap-2 items-center">
      <p className="text-gray-700 ">۵,۳۹۸,۰۰۰ تومان</p>
      <p className="text-gray-700">وابسته به نوع ارسال</p>
      <p className="text-teal-600 ">۵,۳۹۸,۰۰۰ تومان</p>
     </div>
    </div>
    <button onClick={()=>setactiveTab("پرداخت")} className="w-max px-3 bg-teal-500 text-white py-2 rounded-md mt-4">گام بعدی</button>
   </div>
  </div>
 );
}

//
function PaymentOptions({setactiveTab}) {
 return (
  <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full mx-auto flex flex-col items-center lg:flex-row-reverse">
   <div className="w-full flex flex-col justify-center items-center gap-3">
    <div className=" w-full flex items-center justify-center gap-10">
     <div>
      <p className="text-gray-500">قیمت کل سفارش:</p>
      <p className="text-gray-500">بسته‌بندی و ارسال:</p>
      <p className="text-teal-600 font-bold mt-4">قیمت قابل پرداخت:</p>
     </div>
     <div className="text-right">
      <p className="text-gray-700 font-semibold">۵,۳۹۸,۰۰۰ تومان</p>
      <p className="text-gray-700">وابسته به نوع ارسال</p>
      <p className="text-teal-600 font-bold text-lg">۵,۳۹۸,۰۰۰ تومان</p>
     </div>
    </div>
    <button onClick={()=>setactiveTab("ارسال")} className="w-max px-10 bg-teal-500 text-white py-2 rounded-md mb-6">اتصال به درگاه</button>
   </div>

   <div className="w-full grid grid-cols-2 gap-4">
    <div className="p-4 border border-teal-200 rounded-lg bg-teal-50 flex items-center">
     <div className="flex-grow">
      <p className="text-teal-600 font-bold">پرداخت اینترنتی</p>
      <p className="text-gray-500 text-sm">از طریق کارت های عضو شتاب</p>
     </div>
     <div className="ml-4">
      {/* Replace with an icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
     </div>
    </div>

    <div className="p-4 border border-gray-200 rounded-lg flex items-center">
     <div className="flex-grow">
      <p className="text-gray-700 font-bold">پرداخت در محل</p>
      <p className="text-gray-500 text-sm">با کارت بانکی</p>
     </div>
     <div className="ml-4">
      {/* Replace with an icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m-6-3l3 3" />
      </svg>
     </div>
    </div>

    <div className="p-4 border border-gray-200 rounded-lg flex items-center">
     <div className="flex-grow">
      <p className="text-gray-700 font-bold">پرداخت اعتباری</p>
      <p className="text-gray-500 text-sm">الان بخر بعدا پرداخت کن</p>
     </div>
     <div className="ml-4">
      {/* Replace with an icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
     </div>
    </div>

    <div className="p-4 border border-gray-200 rounded-lg flex items-center">
     <div className="flex-grow">
      <p className="text-gray-700 font-bold">خرید اقساطی</p>
      <p className="text-gray-500 text-sm">با استفاده از مسای پی</p>
     </div>
     <div className="ml-4">
      {/* Replace with an icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
     </div>
    </div>
   </div>
  </div>
 );
}

function OrderConfirmation() {
 return (
  <div className="p-8 bg-gray-50 rounded-lg shadow-lg w-full max-w-lg mx-auto text-center">
   <div className="flex justify-center items-center mb-6">
    {/* Cart Icon */}
    <div className="text-teal-500">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h12l-2-8M11 19a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
      />
     </svg>
     {/* Decorative Elements */}
     <div className="text-xl text-teal-500">
      <span className="inline-block mx-1">+</span>
      <span className="inline-block mx-1">○</span>
      <span className="inline-block mx-1">◦</span>
      <span className="inline-block mx-1">-</span>
      <span className="inline-block mx-1">✦</span>
     </div>
    </div>
   </div>

   <h2 className="text-lg font-bold text-gray-800 mb-2">تریک، سفارش با موفقیت دریافت شد</h2>
   <p className="text-gray-600 mb-4">این اطمینان را به شما می‌دهیم که بزودی محصول خریداری شده شما را ارسال خواهیم کرد.</p>

   <div className="text-teal-600 font-semibold text-xl mb-6">کد سفارش: ۲۵۸۶۹۸۴</div>

   <button className="bg-teal-500 text-white py-2 px-6 rounded-lg">مشاهده وضعیت سفارش</button>
  </div>
 );
}
