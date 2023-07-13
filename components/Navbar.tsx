'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";


export default function Navbar() {

  const [showMenuNav, setShowMenuNav] = useState<Boolean>(false);

  return (
    <div className="max-w-[1600px] w-full h-[60px] fixed top-0 bg-black flex md:flex-row items-center justify-between z-40">
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
        <a className="md:my-0 my-2 cursor-pointer" href="#slide_show">
          الرئيسية
        </a>
        <a
          className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer"
          href="#about_us"
        >
          عنا
        </a>
        <a
          className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer"
          href="#our_works"
        >
          أعمالنا
        </a>
        <a
          className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer"
          href="#our_equipments"
        >
          المعدات
        </a>
        <a
          className="md:mr-10 md:my-0 my-2 text-amber-500 cursor-pointer"
          href="#contact_us"
        >
          تواصل معنا
        </a>
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

