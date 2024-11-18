import React from 'react'
import Image from 'next/image'
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
const header = () => {
  return (
    <div className="md:p-4 bg-white flex flex-row justify-between items-center">
       <Image src="/assets/logo.png" alt="logo" width={250} height={250} className="pr-7"/>
       <div className="flex flex-row items-center gap-8 text-md font-sans font-light">
       <h5>Services</h5>
       <h5>Machines</h5>
       <h5>Spare Parts</h5>
       <h5>About</h5>
       </div>
            <div className="flex flex-row gap-5 items-center">
            
            <div id="button"
  className="group  bg-slate-900 h-[44px] flex-row  text-white text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[180px] transition-width duration-500 ease-in-out  hover:w-[205px] hover:bg-mcred"
  
>
  <div className="mx-3">Get in Touch</div>
  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
            </div>
            </div>
    </div>
  )
}

export default header