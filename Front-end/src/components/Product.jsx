import React from 'react'
import phoneimg from "../assets/p_7.jpg";
import { SlBasket } from "react-icons/sl";
import { NavLink } from 'react-router-dom';

function Product() {
  return (
     <div className="w-full max-w-[400px] h-full mx-auto p-2 flex gap-3 md:gap-0 lg:gap-3 flex-col items-center justify-between border border-gray-400 rounded-2xl">
          <NavLink to={'/showproduct/1'}>
     <img
       className=" w-[350px] h-[450px] md:w-[200px] md:h-[300px] object-cover rounded-xl"
       src={phoneimg}
       alt=""
     />
     <p>گوشی</p>

     </NavLink>
     <div className="flex flex-wrap gap-3 items-center justify-center">
       <p className="text-nowrap text-gray-600 line-through decoration-red-600">
         10,000,000 تومان
       </p>
       <p className="text-nowrap px-2 p-1 rounded-xl bg-sky-500 text-white">
         %10
       </p>
       <p className="text-nowrap text-sky-600">5,000,000 تومان</p>
     </div>
     <div className=" w-full h-[40px] flex items-center justify-between ">
         <button className="w-[30px] h-[30px] mask mask-heart bg-red-600"></button>
         <button className="w-[30px] p-1 h-[30px] rounded-full bg-sky-500 text-white flex items-center justify-center ">
              <SlBasket size={17} />
         </button>
     </div>
   </div>
  )
}

export default Product