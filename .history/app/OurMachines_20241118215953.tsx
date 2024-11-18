import { Separator } from '@/components/ui/separator'
import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 

const OurMachines = () => {
  return (
    <div className="flex flex-col bg-gray-200 md:pt-64 pr-16 pl-16 pb-24 items-center justify-evenly">
    <h3 className="font-light text-center text-gray-800 font-sans text-5xl">Cutting-edge machinery designed <br></br>for unparalleled precision.</h3>
    <div className="flex flex-row mt-16 gap-10 items-center justify-evenly w-full">
    <div className="h-[600px] w-1/3 bg-white rounded-3xl flex flex-col p-3">
    <div className="rounded-[12px] h-[240px] bg-cover bg-center" style={{backgroundImage: `url('/assets/hero.jpg')`}}>
    
    </div>
    <h4 className=" text-lg text-gray-600 text-left pt-3">Making Machines</h4>
    <h3 className="text-3xl text-gray-700 text-left pt-2 pb-6">Mark8-D With Max-15</h3>
    <div className="flex flex-row items-center justify-between ">
        <h5 className="text-gray-600 text-sm font">Format:</h5>
        <h5 className="text-gray-600 text-sm font-light"> King / Demi / Slims / Super Slims / NANO</h5>
    </div>
    <Separator className="bg-gray-600 mt-1 mb-2" />
    <div className="flex flex-row items-center justify-between ">
        <h5 className="text-gray-600 text-sm font">Output:</h5>
        <h5 className="text-gray-600 text-sm font-light">Up-to 2800 CPM</h5>
    </div>
    <Separator className="bg-gray-600 mt-1 mb-2" />
    <div className="flex flex-row items-center justify-between ">
        <h5 className="text-gray-600 text-sm font">Power:</h5>
        <h5 className="text-gray-600 text-sm font-light">16 KW</h5>
    </div>
    <Separator className="bg-gray-600 mt-1 mb-2" />
    <div className="flex flex-row items-center justify-between ">
        <h5 className="text-gray-600 text-sm font">Weight:</h5>
        <h5 className="text-gray-600 text-sm font-light">5000 Kgs</h5>
    </div>
    <Separator className="bg-gray-600 mt-1 mb-2" />
    <div id="button"
  className="group mt-7 bg-gray-800 h-[44px] flex-row  text-white text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[190px] transition-width duration-500 ease-in-out  hover:w-[215px] hover:bg-mcred"
  
>
  <div className="mx-3">View Full Details</div>
  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
                </div>

    </div>
    <div className="h-[700px] w-1/3 bg-white rounded-3xl flex flex-col">.</div>
    <div className="h-[700px] w-1/3 bg-white rounded-3xl">.</div>
    </div>
    </div>
  )
}

export default OurMachines