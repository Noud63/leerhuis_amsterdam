import React from 'react'
import bullet from "../assets/icons/bullet.png";
const Overons = () => {

  return (
    <div className="w-full h-[700px] flex justify-center items-center flex-row m-auto max-calendar:w-[85%]">
      <div className="w-[150px] h-full border-r border-black flex justify-center items-center max-calendar:hidden">
        {/* <img src={bullet} alt="" className="w-3" /> */}
      </div>

      <div className="w-full h-full flex flex-1 justify-center">
        <div className="w-[85%] h-full flex flex-col justify-start items-center border-b border-black mt-12">
          <span className="text-xl font-semibold">Over het Leerhuis</span>
          <div className="w-full flex justify-center">
            <div className="w-full pb-8 pt-4 flex justify-center leading-2 text-md">
              Leerhuis Amsterdam richt zich op zinvol samen leven in een
              complexe wereld die ons voor veel vragen stelt.
              <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
              hedendaagse wereld van kunst en cultuur zoeken wij hierover het
              gesprek.
              <br /> We organiseren daarom bijeenkomsten, dialogen en cursussen,
              in de Muiderkerk, waarin deze werelden elkaar ontmoeten.
            </div>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full border-l border-black flex justify-center items-center max-calendar:hidden">
        {/* <img src={bullet} alt="" className="w-3" /> */}
      </div>
    </div>
  );
}

export default Overons
