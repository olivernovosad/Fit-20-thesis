import React from "react";
import language from "../../../photos/lngoption.svg";
import logo from "../../../photos/Logo.png";
import { Link as Scroll } from "react-scroll";
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
              <Scroll className="bg" to="home" spy={true} smooth={true}>
                Home
              </Scroll>
            </li>
            <li>
              <Scroll className="bg" to="festival" spy={true} smooth={true}>
                Festival
              </Scroll>
            </li>

            <li>
              <Scroll
                className="bg"
                to="specifications"
                spy={true}
                smooth={true}
              >
                Specifications
              </Scroll>
            </li>
            <li>
              <Scroll className="bg" to="stories" spy={true} smooth={true}>
                FIT Stories
              </Scroll>
            </li>
            <li>
              <Scroll className="bg" to="events" spy={true} smooth={true}>
                Events
              </Scroll>
            </li>
            <li>
              <Scroll className="bg" to="gallery" spy={true} smooth={true}>
                Gallery
              </Scroll>
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
