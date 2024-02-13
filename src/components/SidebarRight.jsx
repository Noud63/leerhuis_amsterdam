import React from 'react'
import insta from "../assets/icons/insta.png";
import facebook from "../assets/icons/facebook.png";
import x from "../assets/icons/x.png";
import linkedin from '../assets/icons/linkedin.png'
import scroll from "../utils/scroll";

const SidebarRight = () => {

  const scrolled = scroll()
  
  return (
    <div className="w-[150px] max-calendar:hidden overflow-visible relative">
      <div className="w-full absolute h-full top-0 border-r border-l border-black">
        <div
          className={`${
            scrolled
              ? "mt-32 transform ease-in-out duration-1000 delay-200"
              : "mt-44 transform ease-in-out duration-1000 delay-100"
          } w-full mb-28 flex justify-center items-center flex-col gap-16`}
        >
          <div className="w-[40px] border border-black h-[40px] text-[#ff3355] text-md rounded-full flex justify-center items-center cursor-pointer">
            <img src={linkedin} alt=""/>
          </div>
          <div className="w-[40px] border border-black h-[40px] text-[#ff3355] text-md rounded-full flex justify-center items-center cursor-pointer">
            <img src={facebook} alt="" />
          </div>
          <div className="w-[40px] border border-black h-[40px] text-[#ff3355] text-md rounded-full flex justify-center items-center cursor-pointer">
            <img src={x} alt="" />
          </div>
          <div className="w-[40px] border border-black h-[40px] text-[#ff3355] text-md rounded-full flex justify-center items-center cursor-pointer">
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight
