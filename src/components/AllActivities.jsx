import React from 'react'
import calendar from "../assets/icons/calendar-icon.svg";
import BackButton from './BackButton';
import activities from "../db.json";
import { Link } from 'react-router-dom';

const AllActivities = () => {
  const url = window.location.pathname;
  console.log(url)
  return (
    <div className="w-[100%] flex flex-row m-auto max-calendar:w-[85%] mb-20">
      <div className="w-[150px] border-r border-black flex justify-center items-center max-calendar:hidden">
        sidebar
      </div>

      <div className="w-full flex flex-1 justify-center items-center flex-col">
        <div className="w-[85%] flex flex-row gap-2 pl-4 mb-6 border-t border-black pt-12 max-calendar:w-full max-calendar:border-0">
          <img src={calendar} alt="calendar" className="w-[28px]" />
          <span className="text-2xl font-semibold pt-1 max-xsm:text-xl">
            Activiteiten Kalender 2024
          </span>
        </div>

        <div className="w-[85%] grid grid-cols-3 gap-4 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-calendar:w-full">
          {activities.activities.map((act) => (
            <div className="calendar_item w-full rounded-2xl p-2" key={act.id}>
              <div className="w-full h-full bg-black rounded-xl text-[#ef8b39] px-4 pb-4 pt-4 flex flex-col justify-between gap-2">
                <span className="w-full flex justify-end font-bold border-b border-[#ef8b39] pb-2">
                  <span>{`#A0${act.id + 1}`}</span>
                </span>
                <span className="w-full border-b border-[#ef8b39] flex justify-between font-bold mb-2 text-xl pb-2">
                  {act.title}
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

        <BackButton url={url} />
      </div>

      <div className="w-[150px] border-l border-black flex justify-center items-center max-calendar:hidden">
        sidebar
      </div>
    </div>
  );
}

export default AllActivities
