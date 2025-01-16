import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashbord from "./pages/Dashbord";
import LoginAndSinup from "./pages/LoginAndSinup";
import ShowProduct from "./pages/Product/ShowProduct";
import CategorySearch from "./pages/CategorySearch";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "./redux/auth";
import { useEffect, useState } from "react";
import httphostname from "./httphostname";
import { setCategorys } from "./redux/productslice";
import Loding from "./pages/Loding";

function App() {
 //  const token = localStorage.getItem("authToken");
 const [loading, setloading] = useState(false);
 const dispatch = useDispatch();
 const user = useSelector((state) => state.authuser.user);
 const categorys = useSelector((state) => state.products.categorys);

 useEffect(() => {
  const fetchUserData = async () => {
   const token = localStorage.getItem("authToken");
   if (!token) return dispatch(clearUser());

   try {
    const response = await axios.get(`${httphostname}/profile/`, {
     headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    
    dispatch(setUser(response.data.data.user));
   } catch (error) {
    console.error("Error fetching user data:", error.response?.data.message);
   }
  };
  fetchUserData();
 }, [dispatch]);

 useEffect(() => {
  if (categorys.length === 0) {
   const getcategory = async () => {
    try {
     setloading(true);
     const response = await axios.get(`${httphostname}/category`);
     let data = response.data.data.categories;
     const catssort = data.map((item) => {
      const subcat = item.subCategories.map((i) => ({
       ...i,
       priority: i.title.search("همه") ? 2 : 1,
      }));
      const sortedSubcat = subcat.sort((a, b) => a.priority - b.priority);
      return {
       ...item,
       subCategories: sortedSubcat,
      };
     });

    //  console.log("بعد", catssort);

     dispatch(setCategorys(catssort));
    } catch (error) {
     console.log("error ", error.message);
    } finally {
     setloading(false);
    }
   };
   getcategory();
  }
 }, [dispatch, categorys]);

 if (loading) {
  return <Loding />;
 }

 return (
  <div className=" bg-white text-sky-950">
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:title" element={<CategorySearch />} />
    <Route path="/cart" element={user ? <Cart /> : <Navigate to={"/login"} />} />
    <Route path="/dashbord" element={user ? <Dashbord /> : <Navigate to={"/login"} />} />
    <Route path="/login" element={<LoginAndSinup />} />
    <Route path="/showproduct/:id" element={<ShowProduct />} />
   </Routes>
  </div>
 );
}

export default App;
