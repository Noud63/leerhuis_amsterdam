import React, {useRef} from 'react'
import scroll from "../utils/scroll";
import { Link } from "react-router-dom";

const SidebarLeft = () => {

  const scrolled = scroll()

  return (
    <div className="w-[150px] max-calendar:hidden overflow-visible relative">
      <div className="w-full absolute h-full top-0 border-r border-l border-black">
        <div
          className={`${
            scrolled
              ? "mt-32 transform ease-in-out duration-1000"
              : "mt-44 transform ease-in-out duration-1000"
          } w-full mb-28 flex justify-start items-center flex-col gap-16`}
        >
          <div className="w-[100px] flex justify-center">
            <button
              type="button"
              className="w-[190px] bg-black p-1 rounded-full cursor-pointer"
            >
              <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                over ons
              </div>
            </button>
          </div>

          <Link to="/contact">
            <div className="w-[100px] flex justify-center">
              <button
                type="button"
                className="w-[190px] bg-black p-1 rounded-full cursor-pointer"
              >
                <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                  contact
                </div>
              </button>
            </div>
          </Link>

          <Link to="allactivities">
            <div className="w-[100px] flex justify-center">
              <button
                type="button"
                className="w-[190px] bg-black p-1 rounded-full cursor-pointer"
              >
                <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                  acitiviteit
                </div>
              </button>
            </div>
          </Link>

          <div className="w-[100px] flex justify-center">
            <button
              type="button"
              className="w-[190px] bg-black p-1 rounded-full cursor-pointer"
            >
              <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                archief
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft
