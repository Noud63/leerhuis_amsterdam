import React from 'react'

const Subscribe = () => {
  return (
    <div className="w-full h-[700px] flex justify-center items-center flex-row max-calendar:w-[85%]">
      <div className="w-[150px] h-full border-r border-black flex justify-center items-center max-calendar:hidden">
      </div>

      <div className="w-full h-full flex flex-1 justify-center">
        <div className="w-[85%] h-full flex flex-col justify-start items-center border-b border-black mt-12">
          <div className="w-full flex flex-row pt-8">

            <span className="text-2xl font-semibold pl-2">
              Schrij je hier in:
            </span>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full pb-8 pt-4 flex justify-center leading-2 text-md">
             
            </div>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full border-l border-black flex justify-center items-center max-calendar:hidden">
      </div>
    </div>
  );
}

export default Subscribe
