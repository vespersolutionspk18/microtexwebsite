import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import Image from 'next/image';
const AboutUsSection = () => {
  return (
    <div className="flex  pt-36 flex-row bg-white pb-16 pr-16 pl-16 mb-20">
        <div className="md:w-[50%] mr-20  flex flex-col justify-between">
            <h3 className="text-gray-800 font-light text-2xl">About Us</h3>
            <div>
            <h3 className="text-gray-800 pt-36 font-light text-justify text-3xl tracking-tight leading-tight">Microtex offers all related spare parts and services for makers and packers. We&apos;re renowned for crafting world class spare parts. We have a huge collection of available spare parts that enable us to meet our clients&apos; requirements on an urgent basis.</h3>
            <div id="button"
  className="group mt-6 border-gray-900 border-[1px] bg-white h-[44px] flex-row  text-gray-800 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[180px] transition-width duration-500 ease-in-out  hover:w-[205px] hover:bg-gray-800 hover:text-white"
  
>
  <div className="mx-3">Learn More</div>
  <div className="bg-gray-800 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
                </div>
            </div>
        </div>
        <div className="md:w-[50%] flex flex-col items-end">
            
            <Image src="/assets/manworking.jpg" alt="logo" width={400} height={400} />
        </div>
    </div>
  )
}

export default AboutUsSection