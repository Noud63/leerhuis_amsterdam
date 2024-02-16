import React from 'react'
import BackButton from "../components/BackButton";
import {Outlet, useParams } from "react-router-dom";
import activities from "../db.json";
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogo.png"
import share from "../assets/icons/share.png"

const InfoCalendarItem = () => {

const { id } = useParams()

const url = window.location.pathname

const item = activities.activities[id]

  return (
    <div className="w-full h-[1280px] flex items-center flex-row max-calendar:h-auto bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-right-bottom">
      <div className="w-[150px] h-full border-r border-l border-black max-calendar:hidden"></div>

      <div className="flex flex-1 flex-col items-center mt-20 max-calendar:mt-12">
        <div className="w-[700px] mb-32 flex flex-col items-center max-calendar:w-[85%] max-calendargrid:w-[95%]">
          <div className="w-full flex justify-start pl-4 text-xl font-semibold mb-4">
            # Over {item.title}
          </div>

          <div
            className="calendar_item w-full calendar_item rounded-2xl p-2"
            key={item.id}
          >
            <div className="w-full h-auto bg-black rounded-xl text-[#ef8b39] px-4 pb-4 pt-4 flex flex-col gap-4">
              <div className="w-full flex justify-between font-bold border-b border-[#ef8b39] pb-2">
                <div>
                  <img src={logo} alt="logo" className="w-[60px]" />
                </div>
              </div>
              <span className="w-full border-b border-[#ef8b39] flex justify-between font-bold mb-2 text-xl pb-2">
                {item.title}
                <div>
                  <img src={share} alt="share" className="w-[28px] cursor-pointer"/>
                </div>
              </span>

              <span className="w-full">
                <span className="font-bold">Datum: </span>
                {item.date}
              </span>
              <span className="w-full">
                {" "}
                <span className="font-bold">Tijd:</span> {item.time}
              </span>
              <span className="w-full">
                <span className="font-bold">Beschrijving: </span>
                <br />"{item.description}"
              </span>
              <span className="w-full">
                {" "}
                <span className="font-bold">O.l.v:</span> {item.led_by}
              </span>

              <Link
                to={`/subscribe/${id}`}
                className="w-full flex justify-center mt-4"
              >
                <button
                  type="button"
                  className="btn w-[150px] bg-black p-1 text-[#000] rounded-full"
                >
                  <div className="bg-black flex flex-row justify-center items-center rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                    <span>Schrijf je in</span>
                  </div>
                </button>
              </Link>

              <div className="w-full flex justify-center items-center mt-4">
                <img
                  src={`/images/${item.image}`}
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div>
                ID:{" "}
                {id < 9 ? `LA-AC0${Number(id) + 1}` : `LA-AC${Number(id) + 1}`}
              </div>
            </div>
          </div>

          <BackButton url={url} />
        </div>
      </div>

      <div className="w-[150px] h-full border-r border-l border-black max-calendar:hidden"></div>
    </div>
  );
}

export default InfoCalendarItem
