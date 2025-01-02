import Header_mobile from "../components/Header_mobile";
import Header_pc from "../components/Header_pc";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Category from "../components/Category";
import httphostname from "../httphostname";
import { useEffect } from "react";
import axios from "axios";

function CategorySearch() {
 let dbbrands = ["سامسونگ", "اپل", "هواوی", "سونی", "ایسوس", "نوکیا"];
 let dbsistems = ["اندروید", "ios", "ویندوزفون", "سایر"];
 let dbcolors = ["سیاه", "قرمز", "زرد", "آبی"];

 const fetchProducts = async (params) => {
  try {
    const response = await axios.get(`${httphostname}/products`, {
      params: {
        page: params.page,
        limit: params.limit,
        subCategory: params.subCategory,
        name: params.name,
        brand: params.brand, // این باید یک آرایه باشد
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
        attributes: params.attributes, // به صورت JSON string
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

  const handleFetch = () => {
    const params = {
      page: 1,
      limit: 10,
      subCategory: 'laptop',
      name: 'laptop',
      brand: ['Apple', 'Dell'],
      minPrice: 500,
      maxPrice: 2000,
      attributes: JSON.stringify({ color: 'blue' }),
    };

    fetchProducts(params);
  };

  useEffect(()=>{
    handleFetch()
  },[])

 return (
  <div className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex gap-5 flex-col justify-between items-center" dir="rtl">
   <Header_mobile />
   <Header_pc />

   {/* دسته بندی  */}
   <Category />

   <div className="p-2 w-full h-full flex flex-col md:flex-row gap-5 items-start justify-between">
    {/* div right */}
    <div className=" w-full md:w-1/3 flex flex-col gap-5">
     {/* رنگ */}
     <ContinerCheckbox title={"رنگ"} db={dbcolors} />
     {/* برندها */}
     <ContinerCheckbox title={"لیست برند ها"} db={dbbrands} />
     {/* سیستم عامل */}
     <ContinerCheckbox title={"سیستم عامل"} db={dbsistems} />
    </div>
    {/* div left */}
    <div className=" w-full flex flex-col gap-5">
     <ButtonItem />
     <div className="w-full flex flex-col gap-5 items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
      {[...Array(10)].map((item, k) => (
       <Product key={k} />
      ))}
     </div>
    </div>
   </div>

   <Features />

   <Footer />
  </div>
 );
}

export default CategorySearch;

function ContinerCheckbox({ title, db }) {
 return (
  <div className="w-full max-w-[400px] mx-auto flex flex-col gap-1 items-start justify-between border border-gray-400 p-2 rounded-2xl">
   <p>{title}</p>
   <hr className="w-full border" />
   <ul className=" flex flex-col w-full p-2 gap-4 items-start justify-between">
    {title === "رنگ"
     ? db.map((item, k) => (
        <ul key={k} className=" flex w-full p-2 items-center justify-between">
         <Input text={item} />
         <li
          className={` w-4 h-4 rounded-full ${
           item === "سیاه" ? "bg-black" : item === "قرمز" ? "bg-red-600" : item === "زرد" ? "bg-yellow-500" : "bg-blue-600"
          } `}
         ></li>
        </ul>
       ))
     : db.map((item, k) => <Input key={k} text={item} />)}
   </ul>
  </div>
 );
}

function Input({ text }) {
 return (
  <label className="inline-flex items-center gap-2 cursor-pointer">
   <input
    onClick={() => console.log(text)}
    type="checkbox"
    className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-teal-300 checked:border-transparent focus:outline-none checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:-translate-y-1 checked:after:text-center "
   />
   <span>{text}</span>
  </label>
 );
}

function ButtonItem() {
 let buttons = ["پیشنهاد خریداران", "پربازدیدترین", "سریع ترین ارسال", "بیشترین فروش", "براساس قیمت"];
 return (
  <div className=" w-[400px] mx-auto md:w-full border py-4 border-gray-400 flex justify-center gap-2 flex-wrap rounded-2xl">
   {buttons.map((item, k) => (
    <button key={k} className={`h-[35px] p-1 px-4 text-nowrap bg-sky-200 text-black rounded-md `}>
     {item}
    </button>
   ))}
  </div>
 );
}
