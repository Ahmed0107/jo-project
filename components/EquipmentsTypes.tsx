import React from "react";
import EquipmentTypeCard from "./EquipmentTypeCard";

export default function EquipmentsTypes() {
  const equipments = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    return (
      <div className="md:w-full w-[90vw] max-w-[1400px] h-fit">
        <div className="flex flex-col md:items-start items-center justify-center">
          <div className="text-amber-400 text-4xl ">المعدات</div>
          <div className="text-white text-2xl my-4">المعدات</div>
        </div>
        <div className="grid gap-6 grid-rows-5 grid-cols-2 md:grid-rows-3 md:grid-cols-3">
          {equipments.map(() => (
            <EquipmentTypeCard />
          ))}
        </div>
        <div className="w-full h-fit flex flex-col justify-center items-center my-10">
          <div className="text-3xl text-center text-amber-400">
            نسعي لتقديم أفضل خدمات الإنشاءات والمقاولات
          </div>
          <button className="rounded	border-2 border-amber-400 text-amber-400 px-12 py-4 text-xl my-10 hover:text-black hover:bg-amber-400">
            Button
          </button>
        </div>
      </div>
    );
}
