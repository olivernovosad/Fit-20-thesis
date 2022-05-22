import React from "react";
import { Link } from "react-router-dom";

import SecNav from "../Main components/Nav/sec-nav";
import Footer from "../Footer/footer";

import Presentation from "../../photos/presentation full.png";
import arrleft from "../../photos/arrow-left.svg";

const presentation = () => {
  return (
    <>
      <SecNav />
      <div className="w-[100vw] h-[100vh] fixed top-0 left-0  bg-cover bg-no-repeat bg-center school overflow-hidden -z-[3] "></div>
      <div className="flex flex-col w-full h-full justify-center items-center mt-36">
        <div className="py-3 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          EVENTS
        </div>{" "}
        <div className="bg-white w-[90%] flex flex-col justify-center items-center text-center ">
          <div className="w-full flex flex-col items-center justify-center text-center md:block md:ml-16  md:mt-5">
            <div className="flex w-full justify-center items-center md:block">
              <img
                className=" w-48 md:w-64 imageText my-10 md:ml-8 md:mr-12"
                src={Presentation}
                alt=""
              />
            </div>
            <p className="max-w-full text-center md:text-left md:mr-20 mx-2">
              <br />
              <br />
              The partners of the Faculty of Information Technology VUT will
              have the opportunity to present their innovations and products in
              an interactive and fun way. Robots, cyber security, location
              technology, information systems, aerospace. Competitions, puzzles
              and quizzes for young and old. All this and much more on Saturday
              April 30 on the campus of the FIT BUT faculty.
              <br />
              <br />
              <br />
              More detailed information about the presentation of FIT partners
              within the FIT Festival here
            </p>
          </div>
          <Link className="mt-8 self-start ml-8" to={"/"}>
            <button className="bg-VUT-blue flex flex-row items-center text-white font-semibold px-3 py-2 ">
              <img className="pr-5" src={arrleft} alt="" />{" "}
              <h2>Back to the Main page</h2>
            </button>
          </Link>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default presentation;
