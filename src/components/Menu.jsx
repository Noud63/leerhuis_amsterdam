import React from 'react'

const Menu = () => {
  return (
    <div className="menu w-[85%] m-auto mt-12 hidden max-calendar:flex max-xsm:mt-8 max-calendargrid:w-[95%]">
      <div className="w-full text-md max-sm:text-sm grid grid-cols-4 justify-between gap-4 max-xsm:grid-cols-2 max-xsm:gap-2">
        <button
          type="button"
          className="w-full bg-black p-1 rounded-full cursor-pointer"
        >
          <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
            over ons
          </div>
        </button>

        <button
          type="button"
          className="w-full bg-black p-1 rounded-full cursor-pointer"
        >
          <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
            contact
          </div>
        </button>

        <button
          type="button"
          className="w-full bg-black p-1 rounded-full cursor-pointer"
        >
          <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
            activiteiten
          </div>
        </button>
        <button
          type="button"
          className="w-full bg-black p-1 rounded-full cursor-pointer"
        >
          <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
            archief
          </div>
        </button>
      </div>
    </div>
  );
}

export default Menu
