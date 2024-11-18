import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
const AboutUsSection = () => {
  return (
    <div className="flex flex-row bg-white p-16 mb-20">
        <div className="md:w-[50%] pt-20">
            <h3 className="text-gray-800 font-light text-2xl">About Us</h3>
        </div>
        <div className="md:w-[50%] pt-20 flex flex-col gap-10">
            <h3 className="text-gray-800 font-light text-justify text-3xl tracking-tight leading-tight">Together with our valued partners, we play a vital role in ensuring society operates seamlessly. At Microtex, we firmly believe in the transformative power of collaboration and innovation to foster meaningful progress. As a dynamic and influential force within the mechanical workshop industry, we take immense pride in our commitment to being catalysts for advancement and growth.</h3>
            <div className="flex flex-row gap-5">
                <div id="button"
  className="group  bg-gray-800 h-[44px] flex-row  text-white text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[180px] transition-width duration-500 ease-in-out  hover:w-[205px] hover:bg-mcred"
  
>
  <div className="mx-3">Get in Touch</div>
  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
                </div>

                <div id="button"
  className="group border-gray-900 border-[1px] bg-white h-[44px] flex-row  text-gray-800 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[180px] transition-width duration-500 ease-in-out  hover:w-[205px] "
  
>
  <div className="mx-3">About Us</div>
  <div className="bg-gray-800 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
                </div>
                


            </div>
        </div>
    </div>
  )
}

export default AboutUsSection