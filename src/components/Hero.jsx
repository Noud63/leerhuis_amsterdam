import React from 'react'
import wandelaars from "../assets/images/wandelaars2.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-1 justify-center items-center flex-col mt-40 max-sm:mt-36 max-xsm:mt-24">
      <div
        className="w-[85%] flex justify-center items-center flex-col 
      max-calendar:w-[85%] mt-8 border-b border-black"
      >
        <span
          className="w-full flex justify-center flex-col items-center bg-transparent font-papyrus text-black
        text-[3.7rem] tracking-widest pb-2 max-xl:text-[3rem] max-sm:text-4xl max-xsm:text-[27px]"
        >
          Leerhuis Amsterdam
          <span
            className="flex justify-center items-center bg-transparent text-2xl font-papyrus font-bold tracking-[0.5rem] 
              pl-2 pb-4 max-sm:text-base max-xsm:text-[12px] max-xsm:pb-2"
          >
            voor zinvol samenleven
          </span>
        </span>
        <img
          src={wandelaars}
          alt="wandelaars"
          className="w-full max-w-[900px]"
        />
      </div>
    </div>
  );
}

export default Hero
