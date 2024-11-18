import React from 'react'

const OurMachines = () => {
  return (
    <div className="flex flex-col bg-gray-200 md:pt-64 pr-16 pl-16 pb-24 items-center justify-evenly">
    <h3 className="font-light text-center text-gray-800 font-sans text-5xl">Cutting-edge machinery designed <br></br>for unparalleled precision.</h3>
    <div className="flex flex-row mt-16 gap-10 items-center justify-evenly w-full">
    <div className="h-[700px] w-1/3 bg-white rounded-3xl flex flex-col p-3">
    <div className="rounded-[12px] h-[240px] bg-cover bg-center" style={{backgroundImage: `url('/assets/hero.jpg')`}}>
    
    </div>
    <h4 className=" text-lg text-gray-600 text-left pt-3">Making Machines</h4>
    <h3 className="text-3xl text-gray-700 text-left pt-2 pb-6">MARK8-D WITH MAX-15</h3>
    <div className="flex flex-row items-center justify-between ">
        <h5 className="text-gray-600 text-sm font-light">Format:</h5>
        <h5 className="text-gray-600 text-sm font-light"> King / Demi / Slims / Super Slims / NANO</h5>
    </div>
    </div>
    <div className="h-[700px] w-1/3 bg-white rounded-3xl flex flex-col">.</div>
    <div className="h-[700px] w-1/3 bg-white rounded-3xl">.</div>
    </div>
    </div>
  )
}

export default OurMachines