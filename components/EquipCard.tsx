'use client'
import React from "react";

export default function EquipCard() {
  return (
    <div className="w-[100%] md:h-[500px] h-[400px] flex flex-col hover:scale-[0.99] cursor-pointer">
      <img src="/logo.jpg" alt="" className="w-full h-[70%]" />
      <div className="w-full h-[30%] flex flex-col items-start justify-between">
        <h1 className="text-amber-400 my-3">Title</h1>
        <h1 className="text-white text-sm">Description</h1>
        {/* social share here */}
        <div className="w-full h-fit flex md:justify-evenly justify-between items-center">
          <div className="w-[50%] h-[50px] flex items-center justify-between">
            <h1
              className="md:rounded md:border-2 md:border-amber-400
             text-amber-400 md:px-6 md:py-2 sm:px-3 sm:py-2 md:text-xl sm:text-xl min-[375px]:text-[12px] my-10
              hover:text-black hover:bg-amber-400"
            >
              إتصل بنا
            </h1>
            <img
              src="phone.png"
              alt=""
              className="w-[20%] md:h-[50px] h-[35px] cursor-pointer"
              onClick={() => (window.location.href = "tel:201155117828")}
            />
          </div>

          {/* TODO: Change the phone number*/}
          <img
            src="whatsapplogo.png"
            alt=""
            className="w-[15%] md:h-[50px] h-[35px] cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://api.whatsapp.com/send?phone=201155117828")
            }
          />
          <img
            src="facebooklogo.png"
            alt=""
            className="w-[15%] md:h-[50px] h-[35px] cursor-pointer bg-black"
            onClick={() =>
              (window.location.href =
                "https://web.facebook.com/profile.php?id=100005607675323")
            }
          />
        </div>
      </div>
    </div>
  );
}
