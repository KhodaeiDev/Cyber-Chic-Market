import React, { useState } from "react";
import imgperson from "../assets/person.jpg"
import Header_mobile from "../components/Header_mobile";
import Header_pc from "../components/Header_pc";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { FaShoppingCart, FaTimes, FaUndo, FaList, FaMapMarkerAlt, FaEnvelope, FaUser, FaPencilAlt, FaLock } from "react-icons/fa";
import DeliveryProducts from "../components/Dashbord/DeliveryProducts";
import Order from "../components/Dashbord/Order";
import Cancel from "../components/Dashbord/Cancel";
import ProductReturn from "../components/Dashbord/ProductReturn";
import MyLists from "../components/Dashbord/MyLists";
import Addresses from "../components/Dashbord/Addresses";
import Messages from "../components/Dashbord/Messages";
import Profile from "../components/Dashbord/Profile";
import EditInformation from "../components/Dashbord/EditInformation";
import SecurityAndPassword from "../components/Dashbord/SecurityAndPassword";
import { useSelector } from "react-redux";

function Dashbord() {
 const [activeTab, setActiveTab] = useState("Addresses");
 return (
  <div className=" w-full h-full max-w-[1440px] pt-24 lg:pt-0 mx-auto flex flex-col justify-between items-center" dir="rtl">
   <Header_mobile />
   <Header_pc />

   <div className=" w-full">
    <div className=" w-full flex gap-2 flex-col items-start justify-center lg:flex-row mt-5 p-2">
     <div className=" w-[90%] mx-auto md:flex md:w-full lg:flex-col lg:w-[400px] ">
      <ShowProf />
      <ButtensItem activeTab={activeTab} setActiveTab={setActiveTab} />
     </div>
     <div className="w-[90%] mx-auto">
      {activeTab === "DeliveryProducts" && <DeliveryProducts />}
      {activeTab === "Order" && <Order />}
      {activeTab === "Cancel" && <Cancel />}
      {activeTab === "ProductReturn" && <ProductReturn />}
      {activeTab === "MyLists" && <MyLists />}
      {activeTab === "Addresses" && <Addresses />}
      {activeTab === "Messages" && <Messages />}
      {activeTab === "Profile" && <Profile />}
      {activeTab === "EditInformation" && <EditInformation />}
      {activeTab === "SecurityAndPassword" && <SecurityAndPassword />}
     </div>
    </div>
   </div>

   <Features />

   <Footer />
  </div>
 );
}

export default Dashbord;

const ShowProf = () => {
    // const user = useSelector((state)=> state.authuser.user)
    // console.log(user);
    let user = {
        username : "abol"
    }
    
 return (
  <div className=" w-full max-w-sm h-max mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
   {/* Header */}
   <div className="bg-div h-24"></div>

   {/* Profile Image */}
   <div className="flex justify-center -mt-[50px]">
    <img
     className="w-32 h-32 object-cover rounded-full border-2 animate-bounce"
     src={imgperson}
     alt="User"
    />
   </div>

   {/* User Info */}
   <div className="text-center px-6 py-4">
    <h2 className="text-xl font-bold">{user.username}</h2>
    <div className="mt-4">
     <button className="bg-btn px-4 py-2 rounded-full">افزایش موجودی</button>
    </div>
   </div>

   {/* User Stats */}
   <div className="flex justify-around border-t px-6 py-4 text-sm text-gray-600">
    <div className="text-center">
     <p className="font-bold text-lg text-blue-600">2</p>
     <p>سفارش جاری</p>
    </div>
    <div className="text-center">
     <p className="font-bold text-lg text-green-600">68</p>
     <p>دریافت شده</p>
    </div>
    <div className="text-center">
     <p className="font-bold text-lg text-red-600">15</p>
     <p>متوقف شده</p>
    </div>
   </div>
  </div>
 );
};

const ButtensItem = ({ activeTab, setActiveTab }) => {
 return (
  <div className=" w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
   <ul className="flex flex-col text-right p-4 space-y-2 ">
    <li
     onClick={() => setActiveTab("DeliveryProducts")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "DeliveryProducts" ? "bg-btn " : "bg-btn-hover  " 
     } `}
    >
     <span>تحویل داده شده</span>
     <FaShoppingCart className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("Order")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Order" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>سفارش جاری</span>
     <FaShoppingCart className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("Cancel")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Cancel" ? "bg-btn" : "bg-btn-hover"
     } `}
    >
     <span>لغو شده</span>
     <FaTimes className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("ProductReturn")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "ProductReturn" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>مرجوع محصول</span>
     <FaUndo className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("MyLists")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "MyLists" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>لیست های من</span>
     <FaList className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("Addresses")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Addresses" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>آدرس ها</span>
     <FaMapMarkerAlt className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("Messages")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Messages" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>پیغام ها</span>
     <FaEnvelope className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("Profile")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "Profile" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>پروفایل</span>
     <FaUser className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("EditInformation")}
     className={` flex flex-row-reverse gap-2 items-center justify-end  p-2 rounded-lg cursor-pointer ${
      activeTab === "EditInformation" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>ویرایش اطلاعات</span>
     <FaPencilAlt className="text-col" />
    </li>
    <li
     onClick={() => setActiveTab("SecurityAndPassword")}
     className={` flex flex-row-reverse gap-2 items-center justify-end p-2 rounded-lg cursor-pointer ${
      activeTab === "SecurityAndPassword" ? "bg-btn" : "bg-btn-hover "
     } `}
    >
     <span>امنیت و تغییر رمز</span>
     <FaLock className="text-col" />
    </li>
   </ul>
  </div>
 );
};
