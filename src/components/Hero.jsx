import React from 'react'
import wandelaars from "../assets/images/wandelaars2.png";

const Hero = () => {
  return (
    <div className="wandelaars w-full flex justify-center items-center flex-col">
      <div className="w-[65%] flex justify-center items-center flex-col pt-44 pb-4 border-b border-black max-calendar:w-[85%] max-sm:pt-32">
        <span className="w-full flex justify-center flex-col items-center bg-transparent font-papyrus text-[rgb(56,18,18)] text-6xl tracking-widest pb-2 max-xl:text-5xl max-sm:text-4xl max-xsm:text-3xl">
          Leerhuis Amsterdam
          <span
            className="flex justify-center items-center bg-transparent text-2xl font-papyrus font-bold tracking-[0.5rem] 
              pl-2 pb-4 max-xsm:text-sm"
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
