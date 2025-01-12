// import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import CategorySearch from "./pages/CategorySearch";
import Dashbord from "./pages/Dashbord";
import Home from "./pages/Home";
import LoginAndSinup from "./pages/LoginAndSinup";
import ShowProduct from "./pages/Product/ShowProduct";
import { Navigate } from "react-router-dom";

// const user = useSelector((state)=>state.authuser.user)
const routes = [
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/category',
    element:<CategorySearch/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/login',
    element:<LoginAndSinup />
  },
  {
    path:'/dashbord',
    element: user ? <Dashbord/> : <Navigate to="/login" />
  },
  {
    path:'/showproduct/:id',
    element:<ShowProduct/>
  },
]
export default routes