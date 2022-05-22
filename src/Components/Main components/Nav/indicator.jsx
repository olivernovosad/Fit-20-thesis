import React from "react";

import { Link } from "react-scroll";

// function handleClick(e) {
//   var links = ["festival", "specifications", "stories", "events", "gallery"];
//   for (let i of links) {
//     if (i === e.target.id) {
//       let cards = document.querySelectorAll(".card");
//       console.log(cards);
//       cards.forEach((x) => x.classList.remove("active"));
//       console.log(e.target);
//       e.target.classList.add("active");
//     }
//   }
// }

const indicator = () => {
  return (
    <div className="fixed top-1/2 left-1/2 w-9/12 transform -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block   ">
      <ul className=" text-white h-auto w-10 pr-4 ml-auto  bg-black ">
        <li className="relative block float-left mx-0 my-4 w-5 h-5 cursor-pointer">
          <Link
            to="home"
            activeClass="active"
            className="card"
            spy={true}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li className="relative block float-left mx-0 my-4 w-5 h-5 cursor-pointer">
          <Link
            to="festival"
            activeClass="active"
            className="card"
            spy={true}
            smooth={true}
          >
            Festival
          </Link>
        </li>
        <li className="relative block float-left mx-0 my-4 w-5 h-5 cursor-pointer">
          <Link
            to="specifications"
            activeClass="active"
            className="card"
            spy={true}
            smooth={true}
          >
            Specifications
          </Link>
        </li>
        <li className="relative block float-left mx-0 my-4 w-5 h-5 cursor-pointer">
          <Link
            to="stories"
            activeClass="active"
            className="card"
            spy={true}
            smooth={true}
          >
            FIT Stories
          </Link>
        </li>
        <li className=" relative block float-left mx-0 my-4 w-5 h-5 cursor-pointer">
          <Link
            to="events"
            activeClass="active"
            className="card"
            spy={true}
            smooth={true}
          >
            Events
          </Link>
        </li>
        <li className="relative block float-left mx-0 my-4 w-5 h-5 cursor-pointer">
          <Link
            to="gallery"
            activeClass="active"
            className="card"
            spy={true}
            smooth={true}
            isDynamic={true}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default indicator;
