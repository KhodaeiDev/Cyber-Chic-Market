import React from 'react';

import i1 from "../assets/features/png-1.png"
import i2 from "../assets/features/png-2.png"
import i3 from "../assets/features/png-3.png"
import i4 from "../assets/features/png-4.png"
import i5 from "../assets/features/png-5.png"
import i7 from "../assets/features/png-7.png"


const Features = () => {
  const features = [
    { id: 1, title: "هدیه نقدی", icon: i7 },
    { id: 2, title: "پشتیبانی تلفنی", icon: i3 },
    { id: 3, title: "فرصت 7 روزه استرداد", icon: i5 },
    { id: 4, title: "ارسال سریع", icon: i2 },
    { id: 5, title: "پرداخت در محل", icon: i1 },
    { id: 6, title: "ضمانت اصل بودن", icon: i4 },
  ];

  return (
    <div className="w-full bg-sky-50 py-6 mt-10 px-4">
      <div className="w-full grid grid-cols-3 md:grid-cols-6 mx-auto">
        {features.map(feature => (
          <div key={feature.id} className="flex flex-col items-center justify-center w-full text-center mb-4">
            <div className="text-4xl mb-2 text-gray-700"><img className=' w-12 h-12 object-cover' src={feature.icon} alt="" /></div>
            <p className="text-gray-600 text-sm">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;