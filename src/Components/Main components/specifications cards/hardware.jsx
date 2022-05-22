import React from "react";

import { Link } from "react-router-dom";

import hardware_photo from "../../../photos/hardware.png";

const hardware = () => {
  return (
    <div className="group hover:bg-red-hover bg-red-without-hover my-12 w-[65vw] md:w-1/4 relative text-left z-50 transition duration-300">
      {/* Without hover */}
      <div className="group-hover:hidden">
        <div className="bg-black/60 absolute top-0 w-full h-[25%]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold  text-white z-50 ">
          <div className="bg-VUT-blue px-2 py-1 inline-block ">HARDWARE</div>
          <div className="bg-VUT-red px-4 py-1 inline">ENGINEERING</div>
        </div>
        <div className="bg-black/60 absolute bottom-0 w-full h-[25%]"></div>
      </div>
      {/* With hover */}
      <div className="group-hover:block absolute left-0 top-0 w-full h-full hidden   z-50">
        <h1 className=" font-bold text-lg text-VUT-blue text-center mt-6 w-full">
          Hardware Engineering
        </h1>
        <div className="ml-5 mt-5 absolute md:top-[8%] w-full">
          <h2 className="text-sm font-bold md:mt-8">Specializations</h2>
          <ul className=" text-xs font-semibold md:mt-6 list-disc  ">
            <li>Hardware Engineering</li>
            <li>Inteligent Systems</li>
            <li>Build in systems</li>
          </ul>
        </div>
        <div className="  ml-5 absolute top-[40%] w-full">
          <h2 className="text-sm font-bold mt-8">Skills</h2>
          <ul className=" text-xs  font-semibold mt-6 list-disc  ">
            <li>Bridging software/hardware</li>
            <li>Development of hardware</li>
            <li>Deeper understanding of mathematics</li>
            <li>And many more ...</li>
          </ul>
        </div>
        <div className=" w-full  text-center left-1/2 -translate-x-1/2 bottom-4 absolute ">
          <Link to="/spec-hardware">
            <button className="bg-VUT-red px-5 py-1    text-white font-semibold transition-all ease-in-out hover:bg-button-hover">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <img className="opacity-[.18]" src={hardware_photo} alt="hardware" />
    </div>
  );
};

export default hardware;
