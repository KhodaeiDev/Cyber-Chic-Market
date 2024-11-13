import React from "react";
import { NavLink } from "react-router-dom";
import img3 from "../assets/minilogo/3.png";

function Category() {
 return (
  <div className=" bg-sky-50 w-full max-w-[1200px] mx-auto flex flex-col gap-3 items-start justify-center rounded-2xl py-5">
   <p className=" px-8">دسته بندی : </p>
   <hr className="w-[95%] mx-auto border border-sky-500" />
   <div className="w-full grid gap-3 grid-cols-2 md:grid-cols-6 ">
    {[...Array(12)].map((item, k) => (
     <div key={k} className=" w-full h-full flex flex-col items-center justify-normal">
      <NavLink>
       <img className=" w-[120px] h-[120px] md:w-[65px] md:h-[65px]  rounded-full" src={img3} alt="" />
      </NavLink>
      <NavLink>
       <p>tst</p>
      </NavLink>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Category;
