import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import arrow from "../assets/icons/left_arrow.png"

const BackButton = (url) => {

const [path, setPath]= useState("")

useEffect(() => {
if (
  url.url.slice(0, -1) === "/infocalendaritem/" ||
  url.url === "/allactivities" ||
  url.url === "/aktueel" || url.url === "/"
) {
  setPath("/");
}
if (url.url.slice(0, -1) === "/allactivities/infocalendaritem/") {
  setPath("/allactivities");
} 
},[path])

return (
    <div className="w-full flex justify-center mt-16">
      <Link
        to={path}
      >
        <button
          type="button"
          className="btn w-[150px] bg-black p-1 text-[#000] rounded-full"
        >
          <div className="bg-[#000] flex flex-row justify-center items-center rounded-full p-2 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
            {/* <div className="w-[28px] mt-1">
              <img src={arrow} alt="arrow" />
            </div> */}
            <span>Terug</span>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default BackButton
