import React from 'react'

export default function EquipmentTypeCard() {
  return (
    <div className="w-full md:h-[500px] h-[350px] flex flex-col">
      <img src="/logo.jpg" alt="" className="w-full h-[70%]" />
      <h1 className="text-white h-[30%] flex justify-center items-center">
        Description
      </h1>
    </div>
  );
}
