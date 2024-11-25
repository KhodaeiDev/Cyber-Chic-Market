import React from 'react'

function SecurityAndPassword() {
  return  (
    <div className=" w-full flex flex-col items-center justify-center min-h-max">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b-2 border-teal-500 pb-2">بازنشانی کلمه عبور</h2>
        
        <div className="space-y-6">
          {/* New Password */}
          <div>
            <label className="block text-gray-600 mb-1">* کلمه عبور جدید</label>
            <input
              type="password"
              placeholder="کلمه عبور حداقل باید ۶ کارکتر باشد"
              className="w-full px-4 py-2 rounded-full bg-teal-50 border border-teal-200 focus:outline-none"
            />
          </div>
          
          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 mb-1">* تکرار کلمه عبور</label>
            <input
              type="password"
              placeholder="تکرار کلمه عبور جدید"
              className="w-full px-4 py-2 rounded-full bg-teal-50 border border-teal-200 focus:outline-none"
            />
          </div>
          
          {/* Reset Password Button */}
          <button className="w-full py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none">
            بازنشانی کلمه عبور
          </button>
          
          {/* Password Security Message */}
          <div className="p-4 mt-4 text-sm text-gray-600 bg-teal-50 border-l-4 border-teal-300 rounded">
            رمز عبور خود را محافظت کرده و از افشای آن به دیگران خودداری کنید، همچنین از استفاده از رمزهای ضعیف و قابل پیش‌بینی جلوگیری کنید.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityAndPassword