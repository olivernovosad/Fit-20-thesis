import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";

//Pictures
import arrleft from "../../../photos/arrow-left.svg";
import arrright from "../../../photos/arrow-right.svg";
import science from "../../../photos/tvojnar.png";
import building from "../../../photos/zbousa.png";
import growth from "../../../photos/pzemcik.png";
import campus from "../../../photos/fit.png";
import founding from "../../../photos/thruska.png";
import { Link } from "react-router-dom";

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
        title: "Science is pushing us. And we push science.",
        content:
          "Research is one of the main pillars of the faculty, its employees and for most students.",
        picture: `${science}`,
        url: "/Science",
      },
      {
        id: 2,
        title: "Monastery, brewery and supercomputer.",
        content:
          "In 2002, when the Faculty of Information Technology was established, it was clear that the future 2,500 students would not fit into the monastery with their teachers.",
        picture: `${building}`,
        url: "/Monastery",
      },
      {
        id: 3,
        title: "The faculty is growing, the values ​​remain",
        content:
          "In Brno, Božetěchov is the only surviving cartouche in the Czech Republic in the original concept.",
        picture: `${growth}`,
        url: "/Growing",
      },
      {
        id: 4,
        title: "FIT campus - a cultural monument that resisted the wars",
        content:
          "Technika, tvořivost, vzdělávání, věda i inovace jsou již 20 let nerozlučně spjaty s Fakultou informačních technologií.",
        picture: `${campus}`,
        url: "/Campus",
      },
      {
        id: 5,
        title: "You need a workbook to establish a faculty.",
        content:
          "The building on Božetěchova Street has been located since 1969.",
        picture: `${founding}`,
        url: "/Founding",
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
    <div className="  text-white w-[100vw] md:w-[85%] z-50">
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
          <div className="group  bg-white w-full mx-5 relative text-left z-50  ">
            {/* Without hover */}
            <div className="group-hover:hidden z-50 ">
              <div className="flex bg-VUT-red absolute top-3 left-3  px-2 justify-center items-center text-white text-sm font-semibold z-50">
                STORY
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[95%] font-bold text-VUT-blue  z-50 ">
                <div className="bg-white/80 px-2 py-1 text-base inline-block underline  ">
                  {item.title}
                </div>
              </div>
            </div>
            {/* With hover */}
            <div className="group-hover:block absolute w-full  top-0 left-1/2 -translate-x-1/2 h-full hidden text-center transition duration-300     z-50">
              {/* Contents */}
              <div className="flex flex-col w-full h-[90%] relative pt-3">
                <h1 className=" text-lg text-VUT-blue  ">{item.title}</h1>
                <div className=" pt-5 ">
                  <p className="text-black whitespace-pre-line   ">
                    {item.content}
                  </p>
                </div>
                <div className=" mt-auto mb-5">
                  <Link to={"/Science"}>
                    <button className=" bg-VUT-red px-5 py-1     text-white font-semibold transition-all ease-in-out hover:bg-button-hover">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="group-hover:opacity-[.28] opacity-[.38] w-full transition duration-300  ;
  opacity: 0; "
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
