import React, {useState, useEffect} from 'react'
import logo from "../assets/icons/leerhuislogo.png"
import pointingfinger from '../assets/icons/pointing_finger.png'
import scroll from '../utils/scroll'
import { Link } from 'react-router-dom'
import home from "../assets/icons/home.png"

const Header = () => {

   const scrolled = scroll()

   const day = new Date().toLocaleDateString().split("-")[0];
   const month = new Date().toLocaleString("nl-NL", { month: "short" });

  return (
    <div
      className={`${
        scrolled ? "-translate-y-[130px]" : "translate-y-0 delay-100"
      }
       header w-full max-w-[2000px] flex justify-between fixed top-0 z-10 border-b border-slate-800 transform ease-in-out duration-500 max-sm:h-[90px]`}
    >
      <div className="sub_header w-1/2 h-[130px] border-l border-black text-4xl flex justify-between max-sm:h-[90px] max-sm:w-[130px] max-xsm:w-[90px]">
        <Link
          to="/"
          className="w-[150px] h-[130px] flex justify-start items-center max-sm:w-[130px] max-sm:h-[90px] max-xsm:w-[90px]"
        >
          <div className="w-[150px] h-[130px] bg-black p-9 flex justify-start items-center max-sm:p-9 max-sm:h-[90px] max-xsm:w-[90px] max-xsm:p-5">
            <img src={logo} alt="" />
          </div>
        </Link>


        <Link to="/" className=" flex flex-1 justify-center items-center max-sm:hidden">
          <img src={home} alt="home" className="w-[35px]" />
        </Link>
      </div>

      <div className="sub_header w-1/2 h-[130px] border-l border-black text-4xl flex justify-between max-sm:flex-1 max-sm:h-[90px]">
        <Link to="aktueel" className="flex flex-1">
          <div className="flex flex-1 justify-center items-center cursor-pointer ">
            <img
              src={pointingfinger}
              alt=""
              className="w-[40px] mr-2 transition ease-in duration-300 hover:translate-x-2"
            />
            <span className="text-2xl max-sm:text-xl">Aktueel</span>
          </div>
        </Link>

        <div className="w-[150px] h-[130px] flex justify-center border-l border-black items-center flex-col max-xl:border-l max-sm:h-[90px] max-sm:text-2xl max-xsm:w-[90px]">
          <span className="font-bold">{day}</span>
          <span className="text-2xl max-sm:text-xl">{month}</span>
        </div>
      </div>
    </div>
  );
}

export default Header
