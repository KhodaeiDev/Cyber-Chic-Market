import React from "react";
import l1 from '../assets/loding.gif'
// import l2 from '../assets/loading-2.mp4'


function Loding() {
 return (
  <div className=" w-full flex flex-col items-center justify-center h-screen bg-white">
    <img className=" w-[90%] ml-4 h-[300px] object-cover" src={l1} alt="" />
    <p className=" text-[20px] font-bold text-sky-700">LOADING...</p>
  </div>
 );
}

export default Loding;
