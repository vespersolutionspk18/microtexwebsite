import React from 'react'
import Mcwhite from "@/public/assets/mclogowhite.svg"; 

const Footer = () => {
  return (
    <div className="bg-mcred p-16 flex flex-row justify-between gap-16">
        <div className="md:w-[25%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
        <div className="md:w-[25%] text-3xl flex flex-col">
            
        </div>
        <div className="md:w-[25%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
        <div className="md:w-[25%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
    </div>
  )
}

export default Footer