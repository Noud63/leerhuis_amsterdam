import React from 'react'
import BackButton from "../components/BackButton";
import {useParams } from "react-router-dom";
import activities from "../db.json";
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogo.png"
import { Outlet } from 'react-router-dom';

const InfoCalendarItem = () => {

const { id } = useParams()

const url = window.location.pathname

const item = activities.activities[id]

  return (
    <div className="w-[55%] flex justify-center items-center flex-col  m-auto mt-12 max-2xl:w-[65%] max-calendar:w-[75%] max-md:w-[100%] border-b border-black pb-16">
      <div className="w-full flex justify-center text-xl font-semibold mb-8 border-t border-black pt-12">
        Over {item.title}
      </div>
      <div
        className="calendar_item rounded-2xl p-2 w-[55%] max-calendar:w-[75%] max-2xl:w-[65%] max-md:w-[85%]"
        key={item.id}
      >
        <div className="w-full h-auto bg-black rounded-xl text-[#ef8b39] px-4 pb-4 pt-4 flex flex-col gap-4">
          <span className="w-full flex justify-between font-bold border-b border-[#ef8b39] pb-2">
            <img src={logo} alt="logo" className="w-[40px]"/>
          </span>
          <span className="w-full border-b border-[#ef8b39] flex justify-between font-bold mb-2 text-xl pb-2">
            {item.title}
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

          <div className="w-full flex justify-center items-center mt-4">
            <img
              src={`/images/${item.image}`}
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>

          <Link to="/subscribe" className="w-full flex justify-center">
            <button
              type="button"
              className="btn w-[150px] bg-black p-1 text-[#000] rounded-full"
            >
              <div className="bg-black flex flex-row justify-center items-center rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                <span>Schrijf je in</span>
              </div>
            </button>
          </Link>
        </div>

        {/* <div className="w-[60px] h-[60px] border-4 border-black rounded-full absolute right-8 top-4 text-black font-bold bg-[#ef8b39] flex justify-center items-center">
          <span>{`A0${item.id + 1}`}</span>
        </div> */}
      </div>

      <BackButton url={url} />

      <Outlet />
    </div>
  );
}

export default InfoCalendarItem
