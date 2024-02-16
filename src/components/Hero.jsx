import React from 'react'
import wandelaars from "../assets/images/wandelaars1.png";
import video from "../assets/vids/crowd2.mp4"

const Hero = () => {
  return (
    <div className="w-full flex flex-1 justify-center items-center flex-col mt-40 max-sm:mt-24">
      <div
        className="w-[85%] flex justify-center items-center flex-col 
     mt-8 border-b border-black max-calendargrid:w-[95%] pb-4"
      >
        <span
          className="w-full flex justify-center flex-col items-center bg-transparent font-papyrus text-black
        text-[3.7rem] tracking-widest pb-2 max-xl:text-[3rem] max-sm:text-[2.5rem] max-xsm:text-[1.9rem]"
        >
          Leerhuis Amsterdam
          <span
            className="flex justify-center items-center bg-transparent text-2xl font-papyrus font-bold tracking-[0.5rem] 
              pl-2 pb-4 max-sm:text-base max-xsm:text-[12px] max-xsm:pb-2"
          >
            voor zinvol samenleven
          </span>
        </span>
        {/* <video src={video} width="1980" height="400" controls /> */}
        <img
          src={wandelaars}
          alt="wandelaars"
          className="w-full max-w-[1000px]"
        />
      </div>
    </div>
  );
}

export default Hero
