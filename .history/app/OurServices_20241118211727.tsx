import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
const OurServices = () => {
  return (
    <div className="flex flex-row bg-gray-200 pt-16 pr-16 pl-16 pb-24">
        <div className="md:w-[50%] pt-20">
            <h3 className="text-gray-800 font-light text-2xl">Our Services</h3>
        </div>
        <div className="md:w-[50%] pt-20 flex flex-col gap-10">
            <h3 className="text-gray-800 font-light text-justify text-5xl tracking-tight leading-tight">Together with our valued partners, we play a vital role in ensuring society operates seamlessly. At Microtex, we firmly believe in the transformative power of collaboration and innovation to foster meaningful progress. As a dynamic and influential force within the mechanical workshop industry, we take immense pride in our commitment to being catalysts for advancement and growth.</h3>
            
        </div>
    </div>
  )
}

export default OurServices