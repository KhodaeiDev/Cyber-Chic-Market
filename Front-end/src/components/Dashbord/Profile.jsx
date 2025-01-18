import React, { useState } from 'react'

function Profile() {

   const [flagedit,setflagedit] = useState(false)

  return (
    <div className=" mx-auto p-6 bg-white rounded-md shadow-md">
      <div className=" pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-4 border-b pb-4 border-col ">اطلاعات حساب کاربری</h2>
        <div className="space-y-2 md:grid md:grid-cols-2 gap-4 items-center font-bold">
          <p><span className="">نام:</span> ابوالفضل</p>
          <p><span className="">نام خانوادگی:</span> ملاشاهی</p>
          <p><span className="">شماره تلفن همراه:</span> 0900000000000</p>
          <p><span className="">پست الکترونیک:</span> چرتوپرت</p>
          <p><span className="">کد پستی:</span> (نامشخص)</p>
          <p><span className="">شغل:</span> برنامه نویس</p>
          <p><span className="">کد ملی:</span> 000000000</p>
          <p><span className="">روش بازگرداندن پول من:</span> شماره شبا</p>
          <p><span className="">تاریخ تولد:</span> 1000/00/00</p>
        </div>
      </div>

    </div>
  )
}

export default Profile