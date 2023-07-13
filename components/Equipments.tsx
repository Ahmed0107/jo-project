import React from 'react'
import EquipCard from './EquipCard'

export default function Equipments() {
  const equipments = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div
      className="md:w-full w-fit max-w-[1400px] h-fit mb-10
     grid gap-6 md:grid-rows-3 md:grid-cols-3 grid-cols-1 grid-rows-9"
    >
      {equipments.map(() => (
        <EquipCard />
      ))}
    </div>
  );
}
