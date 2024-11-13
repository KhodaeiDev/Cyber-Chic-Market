import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";
import banner from "../assets/banner/bg_top.jpg";
import { FaRegUser } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import CartItem from "./CartItem";

function Header_pc() {
  return (
    <div className="hidden w-full max-w-[1440px] mx-auto lg:flex lg:flex-col shadow-md shadow-sky-100 rounded-b-lg">
      <img className=" object-cover w-full h-[40px]" src={banner} alt="" />
      <div className="flex mt-2 items-center justify-between px-4">
        <div className="flex gap-2 items-center justify-start">
          <NavLink className={"w-[70px] h-[70px] "} to={"/"}>
            <img className=" w-full h-full object-cover rounded-full" src={logo} alt="" />
          </NavLink>
          <input
            className=" w-[400px] p-2 rounded-xl bg-sky-100 outline-none"
            placeholder="جستجو"
            type="text"
          />
        </div>
        <div className="flex gap-2 items-center">

          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btns w-[40px] h-[40px] bg-sky-300 text-sky-900  mask mask-hexagon flex justify-center items-center">
            <BsBasket2 size={25} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu w-[350px]  bg-blue-50 rounded-box z-[100] shadow"
            >
              <CartItem />
            </ul>
          </div>
          
          <NavLink to={'/login'}
            className={`w-[40px] h-[40px] bg-sky-300 text-sky-900  mask mask-hexagon flex justify-center items-center`}
          >
            <FaRegUser />
          </NavLink>

        </div>
      </div>
      {/* menu */}
      <div className="my-4 px-3 flex justify-between items-center ">
        <ul className="flex gap-4 items-center font-semibold text-[15px] xl:text-[17px]">
          <li>
            دسته بندی کالا ها
            <ul></ul>
          </li>
          <li>
            <NavLink>دمومحصولات</NavLink>
          </li>
          <li>
            <NavLink>تخفیفات و پیشنهادات</NavLink>
          </li>
          <li>
            <NavLink>مسای امن</NavLink>
          </li>
          <li>
            <NavLink>مسای پلاس</NavLink>
          </li>
          <li>
            <NavLink>مسای کلاب</NavLink>
          </li>
          <li>
            <NavLink>مسای پی</NavLink>
          </li>
          <li>
            <NavLink> سوالی دارید؟</NavLink>
          </li>
          <li>
            <NavLink>فروشنده شوید</NavLink>
          </li>
        </ul>
            <NavLink to={`/dashbord`}>انتخاب موقعیت</NavLink>
      </div>
    </div>
  );
}

export default Header_pc;
