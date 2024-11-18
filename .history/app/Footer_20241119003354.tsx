import React from 'react'
import Mcwhite from "@/public/assets/mclogowhite.svg"; 
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <div className="bg-mcred p-16 flex flex-col justify-between gap-16">
        <div className="flex flex-row justify-between gap-16">
        <div className="md:w-[40%] text-3xl ">
            <Mcwhite className="h-[50px]"/>
        </div>
        <div className="md:w-[15%] text-lg flex flex-col text-white">
            <h5>Navigation</h5>
            <p className="font-light">Home<br></br>Services<br></br>Spare Parts<br></br>About Us<br></br>Contact</p>
        </div>
        <div className="md:w-[15%] text-lg flex flex-col text-white">
            <h5>Machines</h5>
            <p className="font-light">Mark-8<br></br>Mark-9<br></br>MTI-HLP250<br></br>MTI-HLP2<br></br>Packet Wrapper<br></br>Overwrapper Machine<br></br>High Speed Boxer<br></br>Stamper Machine</p>
        </div>
        <div className="md:w-[15%] text-lg flex flex-col text-white">
            <h5>Spare Parts</h5>
            <p className="font-light">MK8/MK9/MK95 Maker<br></br>Hauni Protos 70/80/90 Maker<br></br>
            Molins HLP Packer<br></br>
            GD X1 & GD X2 Packer<br></br>
            Tobacco Garniture & Suction Tapes</p>
        </div>
        </div>
        <Separator className="bg-white" />
        <div className="flex flex-col items-center justify-between p-6"></div>
    </div>
  )
}

export default Footer