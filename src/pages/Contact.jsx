import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogoblack.png"

const Contact = () => {
  return (
    <div className="w-full h-[800px] flex justify-start items-start flex-row max-calendar:w-[100%] bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-right">
      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>

      <div className="flex flex-1 mt-20 justify-center">
        <div className="w-[85%] flex-col border-b border-black pb-32">
          <span className="flex justify-start text-2xl font-semibold pb-4">
            # Hier kun je ons bereiken
          </span>

          <div className="contact rounded-lg">
            <div className="w-full flex flex-col justify-start max-contact:flex-col max-contact:gap-4 p-4">
              <div className="w-[175px]">
                <img src={logo} alt="logo" className="" />
              </div>

              <div className="flex flex-col justify-start leading-7 mt-4 font-normal max-contact:ml-0">
                <span>Het Leerhuis Amsterdam</span>
                <span>Linnaeusstraat 37</span>
                <span>1093EG Amsterdam</span>
                <span>06 1123 4567</span>
                <span>leerhuisamsterdam@gmail.com</span>
              </div>
            </div>

            <div className="w-full flex justify-between mt-16 pb-16 max-calendar:w-full">
              <div className="w-1/3 pl-4 flex items-center text-lg">
                {/* Stuur ons een mail */}
                </div>
              <Link to="" className="w-1/3 flex justify-center">
                <button
                  type="button"
                  className="btn w-[170px] bg-black p-1 text-[#000] rounded-full"
                >
                  <div className="bg-[#000] rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]">
                    Mail ons
                  </div>
                </button>
              </Link>
              <div className="w-1/3 pr-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>
    </div>
  );
}

export default Contact
