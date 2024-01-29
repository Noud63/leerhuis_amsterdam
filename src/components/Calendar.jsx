import React from 'react'
import calendar from "../assets/icons/calendar-icon.svg";

const Calendar = () => {
  return (
    <div className="w-[65%] flex justify-center items-center flex-col py-2 m-auto mt-12 max-calendar:w-[85%]">
      <div className="w-full flex flex-row gap-2 pl-4 mb-4">
        <img src={calendar} alt="" className="w-[28px]" />
        <span className="w-full text-xl font-semibold pt-1">
          Activiteiten Kalender 2024
        </span>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-calendar:grid-cols-1">
        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 py-6 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg">
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
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 py-6 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg">
              Bijbels ABC voor onze tijd
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 py-6 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg">
              De moderne theologen
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>

        <div className="calendar_item w-full rounded-2xl p-2">
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 py-6 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg">
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
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 py-6 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg">
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
          <div className="w-full h-auto bg-black/90 rounded-xl text-[#ef8b39] px-4 py-6 flex flex-col gap-2">
            <span className="w-full border-b border-[#ef8b39] font-bold mb-2 text-lg">
              Leesgroep Miskotte
            </span>
            <span className="w-full">Data: 17-1, 24-1, 31-1 en 7-2 </span>
            <span className="w-full">Tijd: 20:00 - 22:00 uur </span>
            <span className="w-full">
              O.l.v.: Johan Visser en Gerben van Manen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar
