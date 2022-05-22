import React from "react";
import language from "../../../photos/lngoption.svg";
import logo from "../../../photos/Logo.png";

import { Link } from "react-router-dom";
const nav = () => {
  return (
    <>
      <div className="fixed top-3 left-3 z-[51] md:hidden">
        <Link to={"/"}>
          <img className="  w-24 " src={logo} alt="logo" />
        </Link>
      </div>

      <div className="hidden md:flex justify-center ">
        <div className="bg-black/[.8] fixed  flex flex-row py-3 mt-3 items-center  w-9/12 z-[100] ">
          <div className="  mr-20">
            <Link to={"/"}>
              <img className=" pl-4 " src={logo} alt="logo" />
            </Link>
          </div>

          <ul className="text-white opacity-100 flex justify-between  w-2/5 ">
            <li>
              <Link className="bg" to="/" spy={true} smooth={true}>
                Home
              </Link>
            </li>
          </ul>
          <div className="ml-auto pr-4">
            <a href="">
              <img src={language} alt="lgoptions" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default nav;
