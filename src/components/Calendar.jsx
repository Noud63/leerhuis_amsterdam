import React from 'react'
import calendar from "../assets/icons/calendar-icon.svg";

const Calendar = () => {
  return (
    <div className="w-[65%] flex justify-center items-center flex-col py-2 m-auto mt-12 max-calendar:w-[85%] border-b border-black pb-16">

      <div className="w-full flex flex-row gap-2 pl-4 mb-6">
        <img src={calendar} alt="" className="w-[28px]" />
        <span className="w-full text-2xl font-semibold pt-1 max-xsm:text-xl">
          Activiteiten Kalender 2024
        </span>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 pb-6 pt-4 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg pb-2">
              De zin van Sabbat
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 pb-6 pt-4 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg pb-2">
              Bijbels ABC
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 pb-6 pt-4 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg pb-2">
              De moderne theologen
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        {/* <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 pb-6 pt-4 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg pb-2">
              Groen geloven in Mokum
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 pb-6 pt-4 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg pb-2">
              Literaire kring
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 pb-6 pt-4 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg pb-2">
              Leesgroep Miskotte
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div> */}
      </div>

      <div className="w-full flex justify-center mt-16">
        <button
          type="button"
          className="btn w-[190px] bg-black p-1 text-[#000] rounded-full"
        >
          <div className="bg-[#000] rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]">
            Alle activiteiten
          </div>
        </button>
      </div>
    </div>
  );
}

export default Calendar
