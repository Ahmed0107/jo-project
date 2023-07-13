'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";


export default function Navbar() {

  const [showMenuNav, setShowMenuNav] = useState<Boolean>(false);

  return (
    <div className="max-w-[1400px] h-[60px] flex md:flex-row items-center justify-between">
      <div className="mr-5 flex flex-row items-center justify-center z-50">
        <Image src="/logo.jpg" alt="" width={50} height={50} />
        <h1 className="text-2xl w-48 text-white mr-3">لؤلؤة الشرق</h1>
      </div>
      <div
        className={`text-2xl text-white
         flex flex-col md:flex-row md:static
          absolute justify-center items-center md:mt-0
          w-full
           h-[280px]
           md:h-fit
           md:z-0
           z-[10]
            bg-black
             transition-all duration-500 ease-in ${
               showMenuNav ? "top-[60px]" : "top-[-480px]"
             }`}
      >
        <span className="md:my-0 my-2 cursor-pointer">الرئيسية</span>
        <span className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer">
          عنا
        </span>
        <span className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer">
          أعمالنا
        </span>
        <span className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer">
          أعمالنا
        </span>
        <span className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer">
          تواصل معنا
        </span>
      </div>

      {!showMenuNav ? (
        <MdMenu
          className="md:hidden absolute left-3 top-3 text-white text-4xl cursor-pointer"
          onClick={() => setShowMenuNav(!showMenuNav)}
        />
      ) : (
        <MdClose
          className="md:hidden absolute left-3 top-3 text-white text-4xl cursor-pointer"
          onClick={() => setShowMenuNav(!showMenuNav)}
        />
      )}
    </div>
  );
}

