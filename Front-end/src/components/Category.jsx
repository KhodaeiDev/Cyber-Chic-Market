import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img3 from "../assets/minilogo/3.png";
import httphostname from "../httphostname";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategorys } from "../redux/productslice";

function Category() {
 const [loading, setloading] = useState(false);
 const categorys = useSelector((state) => state.products.categorys);
//  const dispatch = useDispatch();
//  useEffect(() => {
//   if (categorys.length === 0) {
//    const getcategory = async () => {
//     try {
//      setloading(true);
//      const response = await axios.get(`${httphostname}/category`);
//      let data = response.data.data.categories;
//      const catssort = data.map((item) => {
//       const subcat = item.subCategories.map((i) => ({
//        ...i,
//        priority: i.title.search("همه") ? 2 : 1,
//       }));
//       const sortedSubcat = subcat.sort((a, b) => a.priority - b.priority);
//       return {
//        ...item,
//        subCategories: sortedSubcat,
//       };
//      });
     
//      console.log("قبل", data);
//      console.log("بعد", catssort);

//      dispatch(setCategorys(catssort));
//     } catch (error) {
//      console.log("error ", error?.response?.data?.message || error.message);
//     } finally {
//      setloading(false);
//     }
//    };
//    getcategory();
//   }
//  }, [dispatch, categorys]);

 return (
  <div className=" bg-sky-50 px-3 w-full max-w-[1200px] mx-auto flex flex-col gap-3 items-start justify-center rounded-2xl py-5">
   <p className=" px-8">دسته بندی : </p>
   <hr className="w-[95%] mx-auto border border-sky-500" />
   <div className="w-full gap-3 grid grid-cols-2 md:flex items-center justify-center ">
    {loading && categorys.length === 0 && [...Array(5)].map((item, k) => <div key={k} className="skeleton bg-sky-100  h-36 w-36 rounded-2xl"></div>)}

    {!loading &&
     categorys.map((item, k) => (
      <div key={k} className=" w-full h-full flex flex-col items-center justify-normal">
       <NavLink to={`/category/${item.href}`}>
        <img loading="lazy" className=" w-[130px] h-[130px] md:w-[150px] md:h-[150px] " src={`${httphostname}/${item.image.path}`} alt="" />
       </NavLink>
       <NavLink>
        <p>{item.title}</p>
       </NavLink>
      </div>
     ))}
   </div>
  </div>
 );
}

export default Category;
