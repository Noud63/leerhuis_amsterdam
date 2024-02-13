import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogoblack.png"
import amsterdam_oost_big from "../assets/images/adam_oost_marker.png"
import amsterdam_oost from "../assets/images/adam_oost.png"
import Map from '../components/Map';

const Contact = () => {
  return (
    <div className="w-full h-[1200px] flex justify-start items-start flex-row max-calendar:w-[100%] bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-right-bottom">
      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>

      <div className="flex flex-1 mt-20 justify-center">
        <div className="w-[85%] flex-col border-b border-black pb-32 max-calendargrid:w-[95%]">
          <span className="flex justify-start text-2xl font-semibold pb-4">
            # Contact
          </span>

          <div className="contact rounded-lg">
            <div className="flex flex-col max-contact:flex-col max-contact:gap-4 p-4">
              <div className="w-full justify-start flex flex-row mb-6 max-contact:mb-2 max-contact:flex-col">
                <div className="">
                  <img src={logo} alt="logo" className="w-[152px]" />
                </div>

                <div className="flex flex-col justify-between font-normal ml-4 max-contact:ml-0 max-contact:mt-2">
                  <span>Het Leerhuis Amsterdam</span>
                  <span>Linnaeusstraat 37</span>
                  <span>1093EG Amsterdam</span>
                  <span>06 1123 4567</span>
                  <span>leerhuisamsterdam@gmail.com</span>
                </div>
              </div>

              <div className="overons w-full rounded-lg p-2">
                <Map />
                {/* <picture className="rounded-md opacity-90 w-full h-auto">
                  <source
                    media="(min-width: 850px)"
                    srcset={amsterdam_oost_big}
                  />
                  <img
                    src={amsterdam_oost}
                    className="rounded-md w-full h-auto"
                  />
                </picture> */}
              </div>
            </div>

            <div className="w-full flex justify-between mt-6 pb-14 max-contact:flex-col">
              <div className="w-1/3 pl-4 flex items-center text-xl max-contact:hidden">
                Stuur ons een mail:
              </div>
              <Link
                to=""
                className="w-1/3 flex justify-center max-contact:w-full"
              >
                <button
                  type="button"
                  className="btn w-[170px] bg-black p-1 text-[#000] rounded-full"
                >
                  <div className="bg-[#000] rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]">
                    Mail ons
                  </div>
                </button>
              </Link>
              <div className="w-1/3 pr-4 max-contact:hidden"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>
    </div>
  );
}

export default Contact
