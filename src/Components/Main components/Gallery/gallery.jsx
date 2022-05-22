import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";

import arrleft from "../../../photos/arrow-left.svg";
import arrright from "../../../photos/arrow-right.svg";
import cross from "../../../photos/cross.svg";

import one from "../../../photos/gallery/1.jpg";
import two from "../../../photos/gallery/2.jpg";
import three from "../../../photos/gallery/3.jpg";
import four from "../../../photos/gallery/4.jpg";
import five from "../../../photos/gallery/5.jpg";
import six from "../../../photos/gallery/6.jpg";
import seven from "../../../photos/gallery/7.jpg";
import eight from "../../../photos/gallery/8.jpg";
import nine from "../../../photos/gallery/9.jpg";
import ten from "../../../photos/gallery/10.jpg";
import eleven from "../../../photos/gallery/11.jpg";
import twelve from "../../../photos/gallery/12.jpg";

import { Link } from "react-scroll";

function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? arrleft : arrright;
  return (
    <button onClick={onClick} disabled={isEdge}>
      <img src={pointer} alt="arrow" />
    </button>
  );
}

const Gallery = () => {
  const [style, setStyle] = useState("carrouselOff");

  const changeStyleOn = () => {
    document.body.style.overflow = "hidden";
    setStyle("carrouselOn");
  };

  const changeStyleOff = () => {
    document.body.style.overflow = "visible";
    setStyle("carrouselOff");
  };
  const pictures = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  ];
  return (
    <div
      id="gallery"
      className=" md:h-[100vh]  flex flex-col justify-center items-center mt-20 mb-20 md:mb-0 md:mt-0 text-center relative overflow-hidden "
    >
      <div className="py-2 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
        GALLERY
      </div>
      <div className="flex flex-col justify-center items-center w-[60%] ">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 galleryImages  z-50  ">
          {pictures.map((picture) => {
            return (
              <Link to="gallery">
                <img
                  className="w-full max-h-36 z-50 transition duration-300"
                  src={picture}
                  alt="kawansanka"
                  onClick={changeStyleOn}
                />
              </Link>
            );
          })}
        </div>
      </div>
      {/* Carousel gallery open */}
      <div className={style}>
        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[65%]">
          <Carousel
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div className="flex flex-row">
                  <ul className="flex flex-row text-white h-auto  pr-4 ml-auto  ">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <div
                          className={`relative block float-left mx-2 my-4 w-5 h-5 cursor-pointer hidden ${
                            isActivePage ? "" : ""
                          }`}
                        ></div>
                      );
                    })}
                  </ul>
                </div>
              );
            }}
            renderArrow={myArrow}
            itemsToShow={1}
          >
            {pictures.map((picture) => (
              <div className="w-[100%] flex justify-center items-center ">
                <img
                  className="fixed right-10 top-3  md:top-5 z-50 cursor-pointer w-3 md:w-8 "
                  src={cross}
                  alt="close "
                  onClick={changeStyleOff}
                />
                <img className="w-full" src={picture} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
