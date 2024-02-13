import React from 'react'
import insta from "../assets/icons/insta2.png";
import facebook from "../assets/icons/facebook2.png";
import x from "../assets/icons/twitter2.png";
import linkedin from "../assets/icons/linkedin2.png";
import logo from "../assets/icons/leerhuislogo.png";

const Footer = () => {
  return (
    <div className="w-full h-[500px] bg-black flex flex-col justify-between items-end text-[#f19a53]">
      <div className="w-full justify-start flex flex-row p-8 max-contact:mb-2 max-contact:flex-col">
        <div className="">
          <img src={logo} alt="logo" className="w-[152px]" />
        </div>

        <div className="flex flex-col justify-between text-[#f19a53] font-normal ml-4 max-contact:ml-0 max-contact:mt-2">
          <span>Het Leerhuis Amsterdam</span>
          <span>Linnaeusstraat 37</span>
          <span>1093EG Amsterdam</span>
          <span>06 1123 4567</span>
          <span>leerhuisamsterdam@gmail.com</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center p-2 text-[#919191] border-t border-[#919191]">
        &copy;noudvandun webdevelopment
      </div>
    </div>
  );
}

export default Footer
