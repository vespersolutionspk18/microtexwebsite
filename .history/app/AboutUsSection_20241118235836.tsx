import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
const AboutUsSection = () => {
  return (
    <div className="flex h-[640px] flex-row bg-white p-16 mb-20">
        <div className="md:w-[50%] mr-20 pt-20 flex flex-col justify-between">
            <h3 className="text-gray-800 font-light text-2xl">About Us</h3>
            <h3 className="text-gray-800 pt-36 font-light text-justify text-3xl tracking-tight leading-tight">Microtex offers all related spare parts and services for makers and packers. We&apos;re renowned for crafting world class spare parts. We have a huge collection of available spare parts that enable us to meet our clients&apos; requirements on an urgent basis.</h3>
            <div id="button"
  className="group mt-12 border-gray-900 border-[1px] bg-white h-[44px] flex-row  text-gray-800 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[180px] transition-width duration-500 ease-in-out  hover:w-[205px] hover:bg-gray-800 hover:text-white"
  
>
  <div className="mx-3">Learn More</div>
  <div className="bg-gray-800 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
                </div>
        </div>
        <div className="md:w-[50%] pt-20 flex flex-col gap-10">
            
            <div className="w-full h-[940px] bg-center bg-auto" style={{backgroundImage: `url('/assets/manworking.jpg')`}}> .</div>
        </div>
    </div>
  )
}

export default AboutUsSection