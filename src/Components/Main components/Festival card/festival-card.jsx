import React from "react";
import { Link } from "react-router-dom";

import festival_image from "../../../photos/festival.png";
import duck from "../../../photos/phone/duck.png";

const festival = () => {
  return (
    <div
      id="festival"
      className="max-h-[100vh] flex justify-center items-center text-center relative overflow-hidden   "
    >
      <div className="relative w-full">
        <img
          className="w-full h-auto mt-20 hidden md:block "
          src={festival_image}
          alt="festival"
        />
        <img
          className="w-full h-auto mt-20 block md:hidden"
          src={duck}
          alt="festival"
        />

        <Link to="/Festival">
          <button className=" py-2 px-3 text-white font-semibold text-lg  bg-VUT-red absolute bottom-[8%] md:bottom-[10%] left-[50%] -translate-x-[50%] m-aut transition-all ease-in-out hover:bg-button-hover  z-50 ">
            JOIN HERE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default festival;
