import React from 'react'
import Mcwhite from "@/public/assets/mclogowhite.svg"; 

const Footer = () => {
  return (
    <div className="bg-mcred p-16 flex flex-row justify-between gap-16">
        <div className="md:w-[40%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
        <div className="md:w-[15%] text-lg flex flex-col text-white">
            <h5>Navigation</h5>
            <p className="font-light">Home<br></br>Services<br></br>Spare Parts<br></br>About Us<br></br>Contact</p>
        </div>
        <div className="md:w-[15%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
        <div className="md:w-[15%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
    </div>
  )
}

export default Footer