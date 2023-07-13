import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <div className="max-w-[1400px] w-[90vw]" id="contact_us">
      <div className="flex justify-between items-start w-full h-fit my-0 mx-auto mb-10">
        <div className="w-[70%]">
          <h1 className="text-amber-500">dihgduhg</h1>
          <p className="mt-5 text-white">
            تييتبايتايتاىستياتس تيالياهل اهثايلثها هاقلمستل جحسينب سثبن
            بةيكبتصثهب يزتب سحيب تييتبايتايتاىستياتس تيالياهل اهثايلثها هاقلمستل
            جحسينب سثبن بةيكبتصثهب يزتب سحيب تييتبايتايتاىستياتس تيالياهل
          </p>
        </div>
        <img src="/logo.jpg" alt="" className="md:w-[23%] w-[35%] h-full" />
      </div>
      {/* <div>
        <div className="w-full h-[60px] bg-black flex flex-row items-center justify-center">
          <div className="w-[90%] flex flex-row items-center justify-center">
            <div className="w-[70%] text-2xl text-white mr-3 flex items-center justify-between">
              <span className="mr-10 cursor-pointer">الرئيسية</span>
              <span className="mr-10 text-amber-500 cursor-pointer">عنا</span>
              <span className="mr-10 text-amber-500 cursor-pointer">
                أعمالنا
              </span>
              <span className="mr-10 text-amber-500 cursor-pointer">
                أعمالنا
              </span>
              <span className="mr-10 text-amber-500 cursor-pointer">
                تواصل معنا
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
