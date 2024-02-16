import React from 'react'
import BackButton from '../components/BackButton';

const Aktueel = () => {
  const url = window.location.pathname
  return (
    <div className="w-full h-[500px] flex justify-center items-center flex-row">
      <div className="w-[150px] h-[900px] border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>

      <div className="w-[85%] h-full flex flex-1 flex-col justify-center items-center">
        <div className="w-[85%] h-full flex flex-col justify-start items-center border-b border-black mt-12">
          <div className="w-full flex flex-row border-b border-black pt-8 pb-4">
            <span className="text-2xl font-semibold pl-2">
              # Aankomende en lopende activiteiten:
            </span>
          </div>

          <div className="w-full flex justify-center flex-col border-b border-black pb-8">
            <div className="w-full pb-8 pt-4 flex justify-center leading-2 text-md">
              activiteiten
            </div>
            <BackButton url={url} />
          </div>
        </div>
      </div>

      <div className="w-[150px] h-full border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>
    </div>
  );
}

export default Aktueel
