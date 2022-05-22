import React from "react";
import SecNav from "../Main components/Nav/sec-nav";
import Footer from "../Footer/footer";

import { Link } from "react-router-dom";
import arrleft from "../../photos/arrow-left.svg";

import Foodicon from "../../photos/food icon.png";
import Activitiesicon from "../../photos/activitiesicon.png";
import Generalicon from "../../photos/generalicon.png";
import Hardwareicon from "../../photos/hardwareicon.png";
import Networkicon from "../../photos/network icon.png";
import Softwareicon from "../../photos/softwareicon.png";

import Timeicon from "../../photos/timeicon.png";

import One from "../../photos/partners/1.png";
import Two from "../../photos/partners/2.png";
import Three from "../../photos/partners/3.png";
import Four from "../../photos/partners/4.png";
import Five from "../../photos/partners/5.png";
import Six from "../../photos/partners/6.png";
import Seven from "../../photos/partners/7.png";
import Eight from "../../photos/partners/8.png";
import Nine from "../../photos/partners/9.png";
import Ten from "../../photos/partners/10.png";
import Eleven from "../../photos/partners/11.png";

const festival = () => {
  return (
    <>
      <SecNav />
      <div className="w-[100vw] h-full fixed top-0 left-0  bg-cover bg-no-repeat bg-center school overflow-hidden -z-[3] "></div>
      <div className="flex flex-col w-full h-full justify-center items-center mt-36">
        <div className="py-3 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          FESTIVAL
        </div>
        <div className="bg-white w-[90%] flex flex-col justify-center items-center text-center ">
          <div className=" w-1/2 mt-10">
            <h1 className="text-lg font-semibold">Festival fit</h1>
            <p className="text-sm mt-5">
              This year, the Faculty of Information Technology commemorates the
              20th anniversary of its establishment and on this occasion we are
              organizing an informal meeting with the accompanying program.{" "}
              <br /> <br /> We will gladly welcome you and show you what we are
              all about!
            </p>
            <br />

            <h2 className="text-base underline">
              FIT CAMPUS VUT, BOŽETĚCHOVA 2, BRNO
            </h2>
          </div>
          <div className="mt-8 w-full flex justify-center items-center flex-col  ">
            <h1 className="text-lg font-semibold col-span-2">
              Festival schedule
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 w-[95%] md:w-[75%]">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <div className="bg-blue-500 w-full  md:w-[75%] flex flex-col my-5 mx-10  ">
                  <div className="flex flex-row items-center ">
                    <img className="ml-2 h-10" src={Generalicon} alt="icon" />
                    <h2 className="font-semibold mr-auto ml-3 md:ml-10">
                      GENERAL PRESENTATION
                    </h2>
                  </div>

                  <div className="bg-blue-100 col-span-3 px-6 py-6 w-full  ">
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-500  w-full  md:w-[75%] flex flex-col my-5 mx-100">
                  <div className="flex flex-row items-center ">
                    <img className="ml-2 h-10" src={Hardwareicon} alIcont="" />
                    <h2 className="font-semibold mr-auto ml-3 md:ml-10">
                      HARDWARE ENGINEERING
                    </h2>
                  </div>

                  <div className="bg-red-100 col-span-3 px-6 py-6 w-full">
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-300  w-full  md:w-[75%] flex flex-col my-5 mx-100">
                  <div className="flex flex-row items-center ">
                    <img className="ml-2 h-10" src={Softwareicon} alIcont="" />
                    <h2 className="font-semibold mr-auto ml-3 md:ml-10">
                      SOFTWARE ENGINEERING
                    </h2>
                  </div>

                  <div className="bg-blue-50 col-span-3 px-6 py-6 w-full">
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <div className="bg-green-500  w-full  md:w-[75%] flex flex-col my-5 mx-10">
                  <div className="flex flex-row items-center ">
                    <img className="ml-2 h-10" src={Networkicon} alIcont="" />
                    <h2 className="font-semibold mr-auto ml-3 md:ml-10">
                      NETWORKING TECHNOLOGIES
                    </h2>
                  </div>

                  <div className="bg-green-100 col-span-3 px-6 py-6 w-full">
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-500 w-full  md:w-[75%] flex flex-col my-5 mx-10">
                  <div className="flex flex-row items-center">
                    <img
                      m-4
                      className="ml-2 h-10"
                      src={Activitiesicon}
                      alIcont=""
                    />
                    <h2 className="font-semibold mr-auto ml-3 md:ml-10">
                      ACTIVITIES
                    </h2>
                  </div>

                  <div className="bg-yellow-100 col-span-3 px-6 py-6 w-full">
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-500  w-full  md:w-[75%] flex flex-col my-5 mx-10">
                  <div className="flex flex-row items-center ">
                    <img className="ml-2 h-10" src={Foodicon} alIcont="" />
                    <h2 className="font-semibold mr-auto ml-3 md:ml-10">
                      FOOD ZONE
                    </h2>
                  </div>

                  <div className="bg-orange-100 col-span-3 px-6 py-6 w-full">
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img className="h-5" src={Timeicon} alt="icon" />
                      <p className="ml-8 my-3">
                        18:00 - 20:00 Mock hall <br />{" "}
                        <span className="underline text-blue-500">
                          Lots of fun and stuff
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link className="mt-8  " to={"/"}>
              <button className="bg-VUT-blue flex flex-row items-center text-white font-semibold px-3 py-2 ">
                <img className="pr-5" src={arrleft} alt="" />{" "}
                <h2>Back to the Main page</h2>
              </button>
            </Link>
          </div>
          <div className="flex flex-col w-3/4 mt-48">
            <div className="md:text-2xl font-semibold">
              Partners of the Festival
            </div>
            <div className="flex flex-col md:flex-row w-full items-center justify-center">
              {" "}
              <img className="h-24 md:h-48 mx-5" src={One} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Two} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Three} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Four} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Five} alt="" />
            </div>
            <div className="flex flex-col md:flex-row w-full items-center justify-center">
              <img className="h-24 md:h-48 mx-5" src={Six} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Seven} alt="" />
            </div>
            <div className="text-xl font-semibold">
              Our thanks for the support
            </div>
            <div className="flex flex-col md:flex-row w-full items-center justify-center">
              <img className="h-24 md:h-48 mx-5" src={Eight} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Nine} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Ten} alt="" />
              <img className="h-24 md:h-48 mx-5" src={Eleven} alt="" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default festival;
