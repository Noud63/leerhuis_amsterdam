import React, {useState, useEffect} from 'react'
import logo from "../assets/icons/leerhuislogo.png"
import pointingfinger from '../assets/icons/pointing-finger2.svg'
import scroll from '../utils/scroll'

const Header = () => {

   const scrolled = scroll()

   const day= new Date().toLocaleDateString().split("-")[0];
   const month = new Date().toLocaleString("nl-NL", { month: "short" });

  return (
    <div
      className={`${scrolled ? "-translate-y-[130px]" : "translate-y-0"}
    header w-full flex justify-between fixed z-10 border-b border-black transform ease-in-out duration-500 max-sm:h-[90px]`}
    >
      <div className="w-1/2 h-[130px] flex justify-start items-center max-sm:w-[130px] max-sm:h-[90px]">
        <div className="w-[130px] h-[130px] bg-black p-7 flex justify-start items-center max-sm:p-9 max-sm:h-[90px]">
          <img src={logo} alt="" className="w-full h-auto " />
        </div>
      </div>
      <div className="sub_header w-1/2 h-[130px] border-l border-black text-4xl flex justify-between max-sm:flex-1 max-sm:h-[90px]">
        <div className="flex flex-1 justify-center items-center cursor-pointer">
          <img
            src={pointingfinger}
            alt=""
            className="w-[40px] mr-2 rotate-[22deg] pt-2"
          />
          <span className="text-3xl max-sm:text-xl">Aktueel</span>
        </div>
        <div className="w-[130px] h-[130px] flex justify-center items-center flex-col max-xl:border-l border-black max-sm:h-[90px] max-sm:text-2xl">
          <span className="font-bold">{day}</span>
          <span className="text-3xl max-sm:text-xl">{month}</span>
        </div>
      </div>
    </div>
  );
}

export default Header
