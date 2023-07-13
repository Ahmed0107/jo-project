import React from 'react'
import EquipCard from './EquipCard'

export default function Equipments() {
  const equipments = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div
      className="md:w-full w-[90vw] max-w-[1400px] h-fit mb-10
     grid gap-6 md:grid-rows-3 md:grid-cols-3 grid-cols-2 grid-rows-5"
      id="our_equipments"
    >
      {equipments.map(() => (
        <EquipCard />
      ))}
    </div>
  );
}
