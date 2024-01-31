import React from 'react'

const Menu = () => {
  return (
    <div className="menu w-[85%] m-auto mt-12 hidden max-calendar:flex">
      <div className="w-full text-md max-sm:text-sm grid grid-cols-4 justify-between gap-4 max-xsm:grid-cols-2 max-xsm:gap-2">
        <div className="menu_btn w-full h-[40px] bg-black mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          over ons
        </div>
        <div className="menu_btn w-full h-[40px] bg-black mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          contact
        </div>

        <div className="menu_btn w-full h-[40px] bg-black mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          beeld
        </div>
        <div className="menu_btn w-full h-[40px] bg-black mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          activiteiten
        </div>
      </div>
    </div>
  );
}

export default Menu
