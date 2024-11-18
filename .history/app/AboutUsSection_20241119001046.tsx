import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
const AboutUsSection = () => {
  return (
    <div className="flex  pt-36 flex-row bg-white pb-16 pr-16 pl-16 mb-20">
        <div className="md:w-[50%] mr-20  flex flex-col justify-between">
            <h3 className="text-gray-800 font-light text-2xl">About Us</h3>
            <div>
            <h3 className="text-gray-800 pt-36 font-light text-justify text-3xl tracking-tight leading-tight">Microtex offers all related spare parts and services for makers and packers. We&apos;re renowned for crafting world class spare parts. We have a huge collection of available spare parts that enable us to meet our clients&apos; requirements on an urgent basis.</h3>
            <Separator className="mt-10  bg-gray-800" />
            <div className="group hover:bg-red-gray-800 hover:text-white flex flex-row items-center justify-between">
                <h5 className="text-gray-800 font-light text-justify text-3xl">Learn More</h5>
                <ButtonArrow className="h-[54px] w-[44px]" />
                </div>
            <Separator className=" bg-gray-800" />
            
            </div>
        </div>
        <div className="md:w-[50%] flex flex-col items-end">
            
            <Image src="/assets/manworking.jpg" alt="logo" width={500} height={500} />
        </div>
    </div>
  )
}

export default AboutUsSection