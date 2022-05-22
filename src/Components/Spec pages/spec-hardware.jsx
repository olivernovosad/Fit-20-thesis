import React from "react";
import { Link } from "react-router-dom";

import SecNav from "../Main components/Nav/sec-nav";
import Footer from "../Footer/footer";

import Ryzen from "../../photos/ryzen.png";
import arrleft from "../../photos/arrow-left.svg";

const Shardware = () => {
  return (
    <>
      <SecNav />
      <div className="w-[100vw] h-full md:h-[100vh] fixed top-0 left-0  bg-cover bg-no-repeat bg-center school overflow-hidden -z-[3] "></div>
      <div className="flex flex-col w-full h-full justify-center items-center mt-36">
        <div className="py-3 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          HARDWARE ENGINEERING
        </div>{" "}
        <div className="bg-white w-[90%] flex flex-col justify-center items-center text-center ">
          <div className="w-full flex flex-col items-center justify-center text-center md:block md:ml-16  md:mt-5">
            <div className="flex w-full justify-center items-center md:block">
              <img
                className=" w-48 md:w-64 imageText my-10 md:ml-8 md:mr-12"
                src={Ryzen}
                alt=""
              />
            </div>

            <p className="max-w-full text-center md:text-left md:mr-20 mx-2">
              <br />
              Hardware Engineering is the process of designing, developing,
              testing and producing computer systems and various physical <br />{" "}
              <br />
              components related to computer systems. With the advent of
              technology and advances in R&D, the scope of hardware engineering
              has been expanded to include hardware devices enabling embedded
              software engineering in non-computer devices.
              <br />
              <br />
              <br />
              In embedded systems, hardware engineering comprises of the process
              of design and development of all electronics related hardware such
              as sensors, processors and controllers.
              <br />
              <br />
              The scope of hardware engineering is limited not just to the
              designing and development of computer or embedded systems, but
              also to integrate the various devices for the functioning of the
              entire business system.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center text-center md:items-start justify-center">
            <div className="my-10">
              <h2 className="text-xl font-semibold text-left mx-5 mb-5">
                Subjects you will be taught:{" "}
              </h2>
              <ul className="list-disc text-left text-base mx-5 md:mx-10">
                <li>Discrete mathematics</li>
                <li>Electronics for information technology</li>
                <li>Linear algebra</li>
                <li>Introduction to software engineering</li>
                <li>The basics of programming</li>
              </ul>
            </div>
            <div className="my-10">
              <h2 className="text-xl font-semibold text-left mx-5 mb-5">
                Optional Subjects we recommend you pick:
              </h2>
              <ul className="list-disc text-left  text-base mx-5  md:mx-10">
                <li>Physics in electrical engineering</li>
                <li>Electrical engineering seminar</li>
                <li>Physics seminar</li>
                <li>VHDL seminar</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Link className="mt-8 md:self-start md:ml-8" to={"/"}>
              <button className="bg-VUT-blue flex flex-row items-center text-white font-semibold px-3 py-2 h-11 mx-5 ">
                <img className="pr-5" src={arrleft} alt="" />{" "}
                <h2>Back to the Main page</h2>
              </button>
            </Link>{" "}
            <a
              className="mt-8 self-start md:ml-8"
              href="https://www.fit.vut.cz/applicants/degree-field/14966/.cs"
            >
              <button className="bg-VUT-red flex flex-row items-center text-white font-semibold px-3 py-2 h-11 mx-5 ">
                <h2>Detailed Description of programme</h2>
              </button>
            </a>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Shardware;
