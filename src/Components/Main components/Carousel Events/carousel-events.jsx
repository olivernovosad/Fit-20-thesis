import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { Link } from "react-router-dom";

//Pictures
import arrleft from "../../../photos/arrow-left.svg";
import arrright from "../../../photos/arrow-right.svg";
import celebrate from "../../../photos/fit20.png";
import proclamation from "../../../photos/proclaim.png";
import presentation from "../../../photos/present.png";
import gala from "../../../photos/gala.png";
import founding from "../../../photos/fit.png";

function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? arrleft : arrright;
  return (
    <button onClick={onClick} disabled={isEdge}>
      <img src={pointer} alt="arrow" />
    </button>
  );
}

const Rotissery = () => {
  const [state, setState] = useState({
    items: [
      {
        id: 1,
        title: "Celebrate with us",
        content:
          "FIT is preparing a number of events and materials for 2022 that will commemorate the 20th anniversary of the faculty during the year.",
        picture: `${celebrate}`,
        url: "Celebrate",
      },
      {
        id: 2,
        title: "Proclamation of FIT employees",
        content:
          "As academic staff of the Institute of Informatics and Computer Science, we have long been responsible for the development of this field of science.",
        picture: `${proclamation}`,
        url: "Proclamation",
      },
      {
        id: 3,
        title:
          "Last April Sunday will be a presentation day of our industrial partners",
        content:
          "The partners of the BUT Faculty of Information Technology will have the opportunity to present their innovations and products in an interactive and entertaining way within the FIT Festival.",
        picture: `${presentation}`,
        url: "Presentation",
      },
      {
        id: 4,
        title:
          "At the gala evening, the Minister of Education and the Mayor of Brno congratulated her",
        content:
          "The Faculty of Information Technology commemorated the anniversary of its founding, which was 20 years since January 1.",
        picture: `${gala}`,
        url: "Gala",
      },
      {
        id: 5,
        title: "Today it's 20 years since the founding of FIT",
        content:
          "On January 1, 2022, FIT celebrates its round birthday. It has been exactly 20 years since the faculty was established",
        picture: `${founding}`,
        url: "Its",
      },
    ],
  });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const { items } = state;
  return (
    <div className="   text-white w-[100vw] md:w-[85%] z-50">
      <Carousel
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className="hidden md:flex flex-row">
              <ul className="flex flex-row text-white h-auto  pr-4 ml-auto  ">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <li
                      className={`relative block float-left mx-2 my-4 w-5 h-5 cursor-pointer ${
                        isActivePage ? "active" : ""
                      }`}
                    >
                      <div
                        className="card"
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
        renderArrow={myArrow}
        breakPoints={breakPoints}
      >
        {items.map((item) => (
          <div className="group bg-white w-full h-auto mx-5 relative text-left z-50">
            {/* Without hover */}
            <div className="group-hover:hidden z-50 ">
              <div className="flex bg-VUT-red absolute top-3 left-3  px-2 justify-center items-center text-white text-sm font-semibold z-50">
                EVENT
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold w-[95%] text-VUT-blue  z-50 ">
                <div className="bg-white/80 px-2 py-1 md:text-base inline-block underline  ">
                  {item.title}
                </div>
              </div>
            </div>
            {/* With hover */}
            <div className="group-hover:block absolute w-full  top-0 left-1/2 -translate-x-1/2 h-full hidden text-center transition duration-300    z-50">
              {/* Contents */}
              <div className="flex flex-col w-full h-[90%] relative pt-3">
                <h1 className=" text-lg text-VUT-blue  ">{item.title}</h1>
                <div className=" pt-5 ">
                  <p className="text-black  whitespace-pre-line   ">
                    {item.content}
                  </p>
                </div>
                <div className=" mt-auto mb-5">
                  <Link to={"/Presentation"}>
                    <button className=" bg-VUT-red px-5 py-1     text-white font-semibold transition-all ease-in-out hover:bg-button-hover">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="group-hover:opacity-[.28] opacity-[.38] w-full  transition duration-300"
              src={item.picture}
              alt="cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Rotissery;
