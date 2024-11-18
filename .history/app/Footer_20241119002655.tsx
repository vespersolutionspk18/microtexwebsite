import React from 'react'
import Mcwhite from "@/public/assets/mclogowhite.svg"; 

const Footer = () => {
  return (
    <div className="bg-mcred p-16 flex flex-row justify-between gap-10">
        <div className="md:w-[25%] text-3xl ">
            <Mcwhite className="h-[120px]"/>
        </div>
    </div>
  )
}

export default Footer