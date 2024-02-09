import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogoblack.png"

const Contact = () => {
  return (
    <div className="w-full h-[800px] flex justify-start items-start flex-row max-calendar:w-[100%]">
      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>

      <div className="flex flex-1 mt-24 justify-center">
        <div className="w-[85%] flex-col">
          <span className="flex justify-start text-2xl font-semibold border-b border-black pb-2 mb-8">
            # Hier kun je ons bereiken:
          </span>

          <div className="w-[85%] flex flex-row justify-start max-contact:flex-col max-contact:gap-4">
            <div className="w-[175px]">
              <img src={logo} alt="logo" className="" />
            </div>

            <div className="flex flex-col justify-start leading-7 font-normal ml-2 max-contact:ml-0">
              <span>Het Leerhuis Amsterdam</span>
              <span>Linnaeusstraat 37</span>
              <span>1093EG Amsterdam</span>
              <span>06 1123 4567</span>
              <span>leerhuisamsterdam@gmail.com</span>
            </div>
          </div>

          <div className="w-full flex justify-center mt-16 border-b border-black pb-16 mb-8 max-calendar:w-full">
            <Link to="">
              <button
                type="button"
                className="btn w-[190px] bg-black p-1 text-[#000] rounded-full"
              >
                <div className="bg-[#000] rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]">
                  Mail ons
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>
    </div>
  );
}

export default Contact
