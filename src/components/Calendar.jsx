import React, {useState} from 'react'
import calendar from "../assets/icons/calendar-icon.svg";
import { Link } from 'react-router-dom';
import  activities from '../db.json'

const Calendar = () => {
 
  return (
    <div className="w-[65%] flex justify-center items-center flex-col py-2 m-auto mt-12 max-calendar:w-[85%] border-b border-black pb-16">
      <div className="w-full flex flex-row gap-2 pl-4 mb-6">
        <img src={calendar} alt="calendar" className="w-[28px]" />
        <span className="w-full text-2xl font-semibold pt-1 max-xsm:text-xl">
          Activiteiten Kalender 2024
        </span>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {
          activities.activities.slice(0, 3).map((act) => (
            <div className="calendar_item w-full rounded-2xl p-2" key={act.id}>
              <div className="w-full h-full bg-black rounded-xl text-[#ef8b39] px-4 pb-4 pt-4 flex flex-col justify-between gap-2">
                <span className="w-full border-b border-[#ef8b39] flex justify-between font-bold mb-2 text-xl pb-2">
                  {act.title} <span>{`#A0${act.id + 1}`}</span>
                </span>
                <span className="w-full">
                  <span className="font-bold">Datum: </span>
                  {act.date}
                </span>
                <span className="w-full">
                  {" "}
                  <span className="font-bold">Tijd:</span> {act.time}
                </span>

                <span className="w-full">
                  {" "}
                  <span className="font-bold">O.l.v:</span> {act.led_by}
                </span>
                <Link to={`infocalendaritem/${act.id}`}>
                  <span className="w-full text-[#ef8b39] cursor-pointer">
                    Lees{" "}
                    <u>
                      <b>hier</b>
                    </u>{" "}
                    meer en schrijf je in.
                  </span>
                </Link>
                <div className="w-full flex justify-center items-center mt-4">
                  <img
                    src={`/images/${act.image}`}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full flex justify-center mt-16">
        <Link to="/allactivities">
          <button
            type="button"
            className="btn w-[190px] bg-black p-1 text-[#000] rounded-full"
          >
            <div className="bg-[#000] rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]">
              Alle activiteiten
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Calendar
