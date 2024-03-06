import React, {useState, useEffect} from 'react'
import BackButton from "../components/BackButton";
import {useParams } from "react-router-dom";
import activities from "../db.json";
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogo.png"
import share from "../assets/icons/share.png"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton,
  WhatsappShareButton, WhatsappIcon, FacebookIcon, XIcon, LinkedinIcon 
} from 'react-share';


const InfoCalendarItem = () => {

const currentUrl = window.location.href

const { id } = useParams()

const [expired, setExpired] = useState(false)

const url = window.location.pathname

const item = activities.activities[id]

const givenDate = new Date(item.closing_date).getTime();
const now = new Date().getTime();

useEffect(()=> {
 if (givenDate <= now) {
   setExpired(true);
 } else{
   setExpired(false);
 }
},[givenDate, now])


  return (
    <div className="w-full h-[1280px] flex items-center flex-row max-calendar:h-auto bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-right-bottom">
      <div className="w-[150px] h-full border-r border-l border-black max-calendar:hidden"></div>

      <div className="flex flex-1 flex-col items-center mt-28 max-calendar:mt-12">
        <div className="w-[700px] mb-32 flex flex-col items-center max-calendar:w-[85%] max-calendargrid:w-[95%]">
          <div className="w-full flex justify-start pl-4 text-xl font-semibold mb-4">
            # Over {item.title}
          </div>

          <div className="calendar_item w-full rounded-2xl p-2">
            <div className="w-full h-auto bg-black rounded-xl text-[#ef8b39] px-4 pb-4 pt-4 flex flex-col">
              <div className="w-full flex justify-between font-bold border-b border-[#ef8b39] pb-2">
                <div className="w-full flex flex-row justify-between">
                  <img src={logo} alt="logo" className="w-[60px]" />
                  <span className="text-2xl max-xsm:text-xl">
                    {expired ? "Inschrijving verlopen!" : ""}
                  </span>
                </div>
              </div>
              <div className="w-full h-[50px] border-b border-[#ef8b39] flex justify-between items-end font-bold mb-2 text-xl py-2 overflow-hidden relative">
                {item.title}
                <div className="group">
                  <div className="flex flex-row gap-2 font-normal">
                    <span>Deel</span>
                    <img
                      src={share}
                      alt="share"
                      className="w-[28px] cursor-pointer"
                    />
                  </div>
                  <div className="bg-black h-full flex items-center text-black absolute z-[999] right-0 bottom-0 translate-y-full  py-2 rounded-lg transition duration-500 group-hover:translate-y-0 gap-2">
                    <span className="cursor-pointer h-full items-center flex">
                      <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={34} round={true} />
                      </FacebookShareButton>
                    </span>
                    <span className="cursor-pointer h-full items-center justify-center flex">
                      <TwitterShareButton url={currentUrl}>
                        <XIcon size={34} round={true} />
                      </TwitterShareButton>
                    </span>
                    <span className="cursor-pointer h-full items-center flex">
                      <WhatsappShareButton url={currentUrl}>
                        <WhatsappIcon size={34} round={true} />
                      </WhatsappShareButton>
                    </span>
                  </div>
                  
                </div>
              </div>

              <div className="w-full py-2">
                <div className="font-bold">Datums:</div>
                <div className="w-full flex flex-row flex-wrap">
                  <span>{item.date.day}:&nbsp;</span>
                  {item.date.dates.map((date, index) => (
                    <span key={index}>{date}&nbsp;</span>
                  ))}
                </div>
              </div>
              <div className="w-full py-2">
                {" "}
                <span className="font-bold">Tijd:</span>
                <br />
                {item.time}
              </div>
              <div className="w-full py-2">
                <span className="font-bold">Beschrijving: </span>
                <br />"{item.description}"
              </div>
              <div className="w-full py-2">
                {" "}
                <span className="font-bold">O.l.v:</span> {item.led_by}
              </div>

              <Link
                to={`/subscribe/${id}`}
                className="w-full flex justify-center my-4"
              >
                <button
                  type="button"
                  className="btn w-[150px] bg-black p-1 text-[#000] rounded-full cursor-pointer"
                  disabled={expired}
                >
                  <div className="bg-black flex flex-row justify-center items-center rounded-full py-2 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
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

              <div className="pt-4">
                ID:{" "}
                {id <= 9 ? `LA-AC0${Number(id) + 1}` : `LA-AC${Number(id) + 1}`}
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
