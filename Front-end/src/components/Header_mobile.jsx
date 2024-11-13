import { useState } from "react";
import logo from "/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FcMenu } from "react-icons/fc";
import Ullistmenu from "../components/Ullistmenu.jsx";
import { NavLink } from "react-router-dom";

function Header_mobile() {
  const dbmenu = [
    {
      id: 1,
      title: "موبایل",
      menu: [
        {
          id: 1,
          title: "لوازم جانبی",
          menu: [
            {
              id: 1,
              title: "کیف گوشی",
            },
            {
              id: 2,
              title: "کاورگوشی",
            },
            {
              id: 3,
              title: "شارزر همراه",
            },
            {
              id: 4,
              title: "گاردگوشی",
            },
          ],
        },
        {
          id: 2,
          title: "برندترین ها",
          menu: [
            {
              id: 1,
              title: "اپل",
            },
            {
              id: 2,
              title: "سامسونگ",
            },
            {
              id: 3,
              title: "هوآوی",
            },
            {
              id: 4,
              title: "شیائومی",
            },
          ],
        },
        {
          id: 3,
          title: "سیستم عامل",
          menu: [
            {
              id: 1,
              title: "اندروید",
            },
            {
              id: 2,
              title: "آی او اس",
            },
            {
              id: 3,
              title: "ویندوز",
            },
          ],
        },
        {
          id: 4,
          title: "گوشی براساس قیمت",
          menu: [
            {
              id: 1,
              title: "گوشی تا 2 میلیون تومان",
            },
            {
              id: 2,
              title: "گوشی تا 5 میلیون تومان",
            },
            {
              id: 3,
              title: "گوشی تا 7 میلیون تومان",
            },
            {
              id: 4,
              title: "گوشی تا 15 میلیون تومان",
            },
            {
              id: 5,
              title: "گوشی بالای 15 میلیون تومان",
            },
          ],
        },
        {
          id: 5,
          title: "گوشی بر اساس حافضه داخلی",
          menu: [
            {
              id: 1,
              title: "گوشی تا 16 گیگابایت",
            },
            {
              id: 2,
              title: "گوشی تا 32 گیگابایت",
            },
            {
              id: 3,
              title: "گوشی تا 64 گیگابایت",
            },
            {
              id: 4,
              title: "گوشی تا 128 گیگابایت",
            },
            {
              id: 5,
              title: "گوشی تا 256 گیگابایت",
            },
          ],
        },
        {
          id: 6,
          title: "رزولوشن عکس",
          menu: [
            {
              id: 1,
              title: "تا 13 پیکسل",
            },
            {
              id: 2,
              title: "تا 16 پیکسل",
            },
            {
              id: 3,
              title: "تا 48 پیکسل",
            },
            {
              id: 4,
              title: "تا 64 پیکسل",
            },
            {
              id: 5,
              title: "تا 128 پیکسل",
            },
          ],
        },
        {
          id: 7,
          title: "گوشی براساس کاربری",
          menu: [
            {
              id: 1,
              title: "گوشی اقتصادی",
            },
            {
              id: 2,
              title: "گوشی میان رده",
            },
            {
              id: 3,
              title: "گوشی دانش آموزی",
            },
            {
              id: 4,
              title: "گوشی گیمینگ",
            },
            {
              id: 5,
              title: "گوشی پرچمدار",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "لپ تاپ",
      menu: [
        {
          id: 1,
          title: "لوازم جانبی",
          menu: [
            {
              id: 1,
              title: "کیف لپتاپ",
            },
            {
              id: 2,
              title: "کاور لپتاپ",
            },
            {
              id: 3,
              title: "شارزر لپتاپ",
            },
            {
              id: 4,
              title: "فن لپ تاپ",
            },
          ],
        },
        {
          id: 2,
          title: "برندترین ها",
          menu: [
            {
              id: 1,
              title: "ایسوس",
            },
            {
              id: 2,
              title: "سامسونگ",
            },
            {
              id: 3,
              title: "اچ پی",
            },
            {
              id: 4,
              title: "اپل",
            },
          ],
        },
        {
          id: 3,
          title: "سیستم عامل",
          menu: [
            {
              id: 1,
              title: "لینوکس",
            },
            {
              id: 2,
              title: "آی او اس",
            },
            {
              id: 3,
              title: "ویندوز",
            },
          ],
        },
        {
          id: 4,
          title: "لپ تاپ بر اساس قیمت",
          menu: [
            {
              id: 1,
              title: "لپ تاپ تا 15 میلیون تومان",
            },
            {
              id: 2,
              title: "لپ تاپ تا 25 میلیون تومان",
            },
            {
              id: 3,
              title: "لپ تاپ تا 40 میلیون تومان",
            },
            {
              id: 4,
              title: "لپ تاپ بالای 40 میلیون تومان",
            },
          ],
        },
        {
          id: 5,
          title: "لپ تاپ بر اساس حافظه داخلی",
          menu: [
            {
              id: 1,
              title: "لپ تاپ تا 16 گیگابایت",
            },
            {
              id: 1,
              title: "لپ تاپ تا 32 گیگابایت",
            },
            {
              id: 1,
              title: "لپ تاپ تا 64 گیگابایت",
            },
            {
              id: 1,
              title: "لپ تاپ تا 128 گیگابایت",
            },
            {
              id: 1,
              title: "لپ تاپ تا 256 گیگابایت",
            },
          ],
        },
        {
          id: 6,
          title: "ابعاد صفحه نمایش",
        },
      ],
    },
    {
      id: 3,
      title: "ساعت هوشمند",
    },
    {
      id: 4,
      title: "مودم",
    },
    {
      id: 5,
      title: "تبلت",
    },
    {
      id: 6,
      title: "کامپیوتر",
    },
    {
      id: 7,
      title: "آیپد اپل",
    },
    {
      id: 8,
      title: "تلوزیون",
    },
    {
      id: 9,
      title: "دمو محصولات",
    },
    {
      id: 10,
      title: "تخفیفات و پیشنهادات",
    },
    {
      id: 11,
      title: "مسای امن",
    },
    {
      id: 12,
      title: "مسای پلاس",
    },
    {
      id: 13,
      title: "مسای کلاب",
    },
    {
      id: 14,
      title: "مسای پی",
    },
    {
      id: 15,
      title: "سوالی دارید؟",
    },
    {
      id: 16,
      title: "فروشده شوید",
    },
  ];
  const [flagmenu, setflagmenu] = useState(false);
  return (
    <nav className="  w-[100%] h-[105px] p-2 shadow-md shadow-sky-100 rounded-b-xl fixed top-0 left-0 z-[100]  bg-sky-50 lg:hidden ">
      <div className="container mx-auto flex-row-reverse  ">
        <div
          dir="rtl"
          className={` w-full transition-all flex flex-col items-center  gap-3 justify-between `}
        >
          <div
            className={`flex items-center justify-end relative  w-full h-[30px] `}
          >
            <button
              onClick={() => setflagmenu(true)}
              className={` ${
                flagmenu ? "hidden" : " pointer-events-auto"
              }  w-[40px] h-[40px] bg-sky-300 text-sky-900  mask mask-hexagon flex justify-center items-center`}
              type="button"
            >
              <FcMenu size={25} />
            </button>
          </div>
        </div>

        {flagmenu && (
          <div 
          onClick={() =>setflagmenu(!flagmenu)}
          className="w-full h-screen fixed top-0 right-0 bg-[#00000065] !z-[200]">
          <div
            className={` lg:hidden  bg-slate-50 w-[300px]  rounded-l-xl `}
            id="navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" text-center w-[160px] h-[160px] mx-auto">
              <NavLink to={'/'} className={' w-full h-full '}>
                <img className=" w-full h-full object-cover rounded-full mx-auto " src={logo} alt="logo" />
              </NavLink>
            </div>

            <div className=" w-full  h-screen overflow-scroll overflow-y-auto">
              <ul dir="rtl" className="flex w-full flex-col">
                {dbmenu.map((menu) => (
                  <Ullistmenu db={dbmenu} key={menu.id} {...menu} />
                ))}
              </ul>
            </div>
          </div>
          </div>
        )}
      </div>
      <div className=" container  mx-auto  top-[20px] relative  flex  items-center gap-3 justify-between">
        <form action="#" className="mx-auto relative">
          <input
            className=" pr-[40px]  w-[300px] sm:w-[350px] md:w-[500px] h-[40px] bg-gray-200  outline-none rounded-lg px-2"
            type="text"
            placeholder="جستجو ..."
          />
          <button
            className=" h-[35px] w-[35px] absolute top-[2.5px] right-0 mask mask-hexagon flex justify-center items-center bg-sky-300 text-sky-900 "
            type="submit"
          >
            <IoIosSearch size={28} />
          </button>
        </form>

        <div
          className={` ${
            flagmenu ? "sm:hidden" : ""
          }  w-max  flex gap-3 items-center justify-center`}
        >
          <NavLink
            className={
              " mask mask-hexagon w-[40px] h-[40px] flex justify-center items-center p-1 bg-sky-300 text-sky-900 "
            }
            to={"/cart"}
          >
            <SlBasket size={20} />
          </NavLink>
          <NavLink
            className={
              " mask mask-hexagon w-[40px] h-[40px] flex justify-center items-center p-1 bg-sky-300 text-sky-900 "
            }
            to={'/login'}
          >
            <FaUserAlt size={20} />
          </NavLink>
          {/* <NavLink className={' mask mask-hexagon w-[40px] h-[40px] flex justify-center items-center p-1 bg-sky-300 text-sky-900 '}  to={'/'}>dark</NavLink> */}
        </div>
      </div>
    </nav>
  );
}

export default Header_mobile;
