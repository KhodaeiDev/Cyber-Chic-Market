import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";
import banner from "../assets/banner/bg_top.jpg";
import { FaRegUser } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header_pc() {
 const user = useSelector((state) => state.authuser.user);
 const categorys = useSelector((state) => state.products.categorys);
 const [menu, setmenu] = useState({
  title: '',
  sub: null,
  index: 0,
 });
 return (
  <div className="hidden w-full max-w-[1440px] mx-auto lg:flex lg:flex-col shadow-md shadow-sky-100 rounded-b-lg">
   <img className=" object-cover w-full h-[40px]" src={banner} alt="" />
   <div className="flex mt-2 items-center justify-between px-4">
    <div className="flex gap-2 items-center justify-start">
     <NavLink className={"w-[70px] h-[70px] "} to={"/"}>
      <img className=" w-full h-full object-cover rounded-full" src={logo} alt="" />
     </NavLink>
     <input className=" w-[400px] p-2 rounded-xl bg-sky-100 outline-none" placeholder="جستجو" type="text" />
    </div>
    <div className="flex gap-2 items-center">
     <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btns w-[40px] h-[40px] bg-sky-300 text-sky-900  mask mask-hexagon flex justify-center items-center">
       <BsBasket2 size={25} />
      </div>
      <ul tabIndex={0} className="dropdown-content menu w-[350px]  bg-blue-50 rounded-box z-[100] shadow">
       <CartItem />
      </ul>
     </div>

     <NavLink to={"/login"} className={`w-[40px] h-[40px] bg-sky-300 text-sky-900  mask mask-hexagon flex justify-center items-center`}>
      <FaRegUser />
     </NavLink>
    </div>
   </div>
   {/* menu */}
   <div className="my-4 px-3 flex justify-between items-center z-[9999] ">
    <ul className="flex gap-4 items-center font-semibold text-[15px] xl:text-[17px]">
     <li className=" cursor-pointer relative group/group1">
      دسته بندی کالا ها
      <ul className="hidden absolute h-[305px] rigth-0 top-5 px-2 py-2 group-hover/group1:flex flex-col gap-5 bg-white rounded-r-xl shad-r-b ">
       {categorys.map((item, k) => (
        <ul key={k} className=" flex gap-1 group/item  relative ">
         <NavLink
          onMouseMove={() =>
           setmenu({
            title: item.title,
            sub: item.subCategories,
            index: k
        })}
      to={`/category/${item.href}`}
          className={` px-5 w-full py-2 text-center  text-nowrap rounded-r-lg hover:bg-sky-50 ${menu.title == item.title ? " bg-sky-50 z-20" : ""} `}
         >
          {item.title}
         </NavLink>
        </ul>
       ))}

       {menu.title && (
        <ul
         className={` grid gap-1 grid-cols-3 absolute top-0 ${
          menu.title == "موبایل"
           ? "-top-2"
           : menu.title == "لپتاپ"
           ? "-top-[70px]"
           : menu.title == "ساعت هوشمند"
           ? "-top-[130px]"
           : menu.title == "تبلت"
           ? "-top-[193px]"
           : "-top-[254px]"
         } p-2 right-[136px] w-[600px] lg:w-[700px] h-[305px] bg-sky-50 rounded-xl shad-l-b  `}
        >
         { menu.sub.map((ite, k) => (
           <ul key={k} className={` p-2 ${ite.priority === 1 ? "h-max col-span-3 " :" h-[240px] flex flex-col w-full "} `}>
            <NavLink to={`/category/${ite.href}`} className=" text-[17px] font-bold  w-max ">{ite.title}</NavLink>
            {ite.subCategories.map((i, k) => (
             <NavLink to={`/category/${i.href}`} className="mt-2 text-[14px] w-max " key={k}>
              {i.title}
             </NavLink>
            ))}
           </ul>
          ))}
        </ul>
       )}
      </ul>
     </li>

     <li>
      <NavLink>دمومحصولات</NavLink>
     </li>
     <li>
      <NavLink>تخفیفات و پیشنهادات</NavLink>
     </li>
     <li>
      <NavLink> سوالی دارید؟</NavLink>
     </li>
     <li>
      <NavLink>درباره ما</NavLink>
     </li>
    </ul>
    <NavLink to={`/dashbord`}>انتخاب موقعیت</NavLink>
   </div>
  </div>
 );
}

export default Header_pc;

// const MegaMenu = () => {
//  return (
//   <div className="relative">
//    {/* Main Menu Trigger */}
//    <div className="bg-blue-600 text-white py-3 px-5 rounded-md inline-block cursor-pointer group">
//     منوی اصلی
//     <div className="absolute left-0 top-full w-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//      {/* Mega Menu Content */}
//      <div className="grid grid-cols-4 gap-6 p-6 border border-gray-200 rounded-lg">
//       {/* موبایل */}
//       <div>
//        <h3 className="text-lg font-semibold text-gray-800 mb-4">موبایل</h3>
//        <ul className="space-y-2">
//         <li>
//          <a href="/phone" className="text-gray-700 hover:text-blue-500">
//           همه محصولات موبایل
//          </a>
//         </li>
//         <li>
//          <h4 className="text-gray-600 font-medium">لوازم جانبی</h4>
//          <ul className="ml-4 space-y-1">
//           <li>
//            <a href="/phone-cover" className="text-gray-500 hover:text-blue-500">
//             کیف و کاور گوشی
//            </a>
//           </li>
//           <li>
//            <a href="/phone-charger" className="text-gray-500 hover:text-blue-500">
//             شارژر گوشی
//            </a>
//           </li>
//           <li>
//            <a href="/phone-glass" className="text-gray-500 hover:text-blue-500">
//             گلس گوشی
//            </a>
//           </li>
//          </ul>
//         </li>
//        </ul>
//       </div>

//       {/* لپتاپ */}
//       <div>
//        <h3 className="text-lg font-semibold text-gray-800 mb-4">لپتاپ</h3>
//        <ul className="space-y-2">
//         <li>
//          <a href="/laptop" className="text-gray-700 hover:text-blue-500">
//           همه محصولات لپتاپ
//          </a>
//         </li>
//         <li>
//          <h4 className="text-gray-600 font-medium">لوازم جانبی</h4>
//          <ul className="ml-4 space-y-1">
//           <li>
//            <a href="/laptop-bag" className="text-gray-500 hover:text-blue-500">
//             کیف لپتاپ
//            </a>
//           </li>
//           <li>
//            <a href="/laptop-charger" className="text-gray-500 hover:text-blue-500">
//             شارژر لپتاپ
//            </a>
//           </li>
//          </ul>
//         </li>
//        </ul>
//       </div>

//       {/* تبلت */}
//       <div>
//        <h3 className="text-lg font-semibold text-gray-800 mb-4">تبلت</h3>
//        <ul className="space-y-2">
//         <li>
//          <a href="/tablet" className="text-gray-700 hover:text-blue-500">
//           همه محصولات تبلت
//          </a>
//         </li>
//        </ul>
//       </div>

//       {/* ساعت هوشمند */}
//       <div>
//        <h3 className="text-lg font-semibold text-gray-800 mb-4">ساعت هوشمند</h3>
//        <ul className="space-y-2">
//         <li>
//          <a href="/smartwatch" className="text-gray-700 hover:text-blue-500">
//           همه ساعت‌های هوشمند
//          </a>
//         </li>
//         <li>
//          <a href="/watch-bands" className="text-gray-700 hover:text-blue-500">
//           بند ساعت
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </div>
//   </div>
//  );
// };

// export default MegaMenu;
