import React from "react";

export default function EquipCard() {
  return (
    <div className="w-[100%] md:h-[500px] h-[400px] flex flex-col hover:scale-[0.99] cursor-pointer">
      <img src="/logo.jpg" alt="" className="w-full h-[70%]" />
      <div className="w-full h-[30%] flex flex-col items-start justify-between">
        <h1 className="text-amber-400 my-3">Title</h1>
        <h1 className="text-white">Description</h1>
        {/* social share here */}
        <div className="w-full h-fit flex justify-evenly items-center">
          <div className="w-[50%] h-[50px] flex items-center justify-between">
            <h1
              className="rounded border-2 border-amber-400
             text-amber-400 md:px-6 md:py-2 px-3 py-2 md:text-xl text-sm my-10
              hover:text-black hover:bg-amber-400"
            >
              إتصل بنا
            </h1>
            <img
              src="phone.png"
              alt=""
              className="w-[20%] h-[50px] cursor-pointer"
            />
          </div>
          <img
            src="whatsapplogo.png"
            alt=""
            className="w-[15%] h-[50px] cursor-pointer"
          />
          <img
            src="facebooklogo.png"
            alt=""
            className="w-[15%] h-[50px] cursor-pointer bg-black"
          />
        </div>
      </div>
    </div>
  );
}
