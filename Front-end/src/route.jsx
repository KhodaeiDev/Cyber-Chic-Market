import Cart from "./pages/Cart";
import CategorySearch from "./pages/CategorySearch";
import Dashbord from "./pages/Dashbord";
import Home from "./pages/Home";
import LoginAndSinup from "./pages/LoginAndSinup";
import ShowProduct from "./pages/Product/ShowProduct";


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
    element:<Dashbord/>
  },
  {
    path:'/showproduct/:id',
    element:<ShowProduct/>
  },
]
export default routes