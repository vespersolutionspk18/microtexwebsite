import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrowwhite.svg"; 

const Hero = () => {
  return (
    <div className="h-full">
        <div className="md:h-[730px] md:pb-10 bg-cover bg-center flex flex-row" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/assets/hero.jpg')`,}}>
        <div className="md:w-[60%] p-14 flex flex-col items-start justify-between">
        <h1 className="md:text-[88px] md:pt-10 font-light tracking-tight leading-tight font-sans text-white">Leading the Way In Tobacco Production</h1>
        <div id="button"
  className="group  bg-white h-[44px] flex-row  text-slate-900 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[200px] transition-width duration-500 ease-in-out  hover:w-[225px] "
  
>
  <div className="mx-3">Get a Price Quote</div>
  <div className="bg-slate-900 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
            </div>

        <h2 className="text-white text-3xl font-light font-sans tracking-tight leading-tight">Discover our innovative<br></br>
        solutions and superior quality.</h2>
        </div>
        <div className="md:w-[40%]"></div>
        </div>


    </div>
  )
}

export default Hero