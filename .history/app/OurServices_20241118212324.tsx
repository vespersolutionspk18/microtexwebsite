import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
const OurServices = () => {
  return (
    <div className="flex flex-row bg-gray-200 pt-16 pr-16 pl-16 pb-24">
        <div className="md:w-[50%] pt-20">
            <h3 className="text-gray-800 font-light text-2xl">Our Services</h3>
        </div>
        <div className="md:w-[50%] pt-20 flex flex-col gap-3">
            <h3 className="text-gray-800 font-light text-justify text-4xl tracking-tight leading-tight hover:text-mcred">Upgradation & Installation</h3>
            <h3 className="text-gray-800 font-light text-justify text-4xl tracking-tight leading-tight">Format & Conversion Kits</h3>
            <h3 className="text-gray-800 font-light text-justify text-4xl tracking-tight leading-tight">Support Services & Rebuilding</h3>
            
        </div>
    </div>
  )
}

export default OurServices