import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icons/leerhuislogo.png";
import getJsonData from "../utils/getJsonData"
import { useLoaderData } from 'react-router-dom';

export const loader = () => {
  const data = getJsonData()
  return data
}

const Calendar = () => {

  const [ slice, setSlice] = useState(3)
  const [ width, setWidth] = useState(window.innerWidth)

  const data = useLoaderData()

  useEffect(() => {
    const handleResize = () => { 
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize)
  }, []);


  useEffect(() => {
    if (width !== null && width <= 1536) {
      setSlice(2);
    } else if (width !== null && width > 1536) {
      setSlice(3);
    } 
  }, [width]);

  return (
    <div className="w-full flex flex-row m-auto">
      <div className="w-[150px] border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>

      <div className="w-full flex flex-1 justify-center items-center flex-col">
        <div className="w-[85%] flex flex-row gap-2 pl-4 mb-6 pt-12 max-calendar:border-0 max-calendargrid:w-[95%]">
          <span className="text-2xl font-semibold pt-1 max-xsm:text-xl">
            # Activiteiten Kalender 2024
          </span>
        </div>

        <div className="w-[85%] mb-8 pl-4 max-calendargrid:w-[95%]">
          <span className="text-xl">
            Het Leerhuis Amsterdam organiseert bijeenkomsten, dialogen en
            cursussen, in de Muiderkerk. <br />
            Schrijf je in voor een of meerdere activiteiten.
          </span>
        </div>

        <div
          className={`w-[85%] grid grid-cols-${slice} gap-4 max-2xl:grid-cols-2 max-calendargrid:grid-cols-1 max-calendargrid:w-[95%]`}
        >
          {data?.slice(0, slice).map((act) => (
            <div
              className="calendar_item_shadow w-full rounded-2xl p-2"
              key={act.id}
            >
              <div
                className={`bg-black calendar_item w-full h-full rounded-xl text-[#ef8b39] px-4 pb-4 pt-4 flex flex-col justify-between gap-2`}
              >
                <span className="w-full flex justify-between font-bold border-b border-[#ef8b39] pb-2">
                  <img src={logo} alt="logo" className="w-[40px]" />
                </span>
                <span className="w-full border-b border-[#ef8b39] flex justify-between font-bold mb-2 text-xl pb-2">
                  {act.title}
                </span>
                <span className="w-full">
                  <span className="font-bold">Start: </span>
                  {new Date(act.starting_date).toLocaleDateString()}
                </span>
                <span className="w-full">
                  {" "}
                  <span className="font-bold">Tijd:</span> {act.time}
                </span>

                <span className="w-full">
                  {" "}
                  <span className="font-bold">O.l.v:</span> {act.led_by}
                </span>

                <div className="w-full flex justify-center items-center mt-4">
                  <img
                    src={`/images/${act.image}`}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <Link
                  to={`infocalendaritem/${act.id}`}
                  className="w-full flex justify-center pt-2"
                >
                  <button
                    type="button"
                    className="w-[150px] bg-black flex justify-center items-center rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]"
                  >
                    Lees meer
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[85%] flex justify-center mt-16 border-b border-black pb-16 mb-8 max-calendar:w-full max-calendargrid:w-[95%]">
          <Link to="allactivities">
            <button
              type="button"
              className="btn w-[190px] bg-black p-1 text-[#000] rounded-full"
            >
              <div className="bg-black rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53]">
                Alle activiteiten
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[150px] border-r border-l border-black flex justify-center items-center max-calendar:hidden"></div>
    </div>
  );
}

export default Calendar
