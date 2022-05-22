import React from "react";

import Hero from "../Main components/Hero/hero";
import Festival from "../Main components/Festival card/festival-card";
import Specifications from "../Main components/Specifications/specifications";
import Stories from "../Main components/Stories/stories";
import Events from "../Main components/Events/events";
import Nav from "../Main components/Nav/nav";
import Indicator from "../Main components/Nav/indicator";
import Gallery from "../Main components/Gallery/gallery";

//media

const main = () => {
  return (
    <div className=" w-full h-full ">
      <Nav />
      <Indicator />
      {/* BACKGROUND */}
      <div className="w-[100vw] h-[100vh] fixed top-0 left-0  bg-cover bg-no-repeat bg-center school overflow-hidden -z-[3] "></div>
      <Hero />
      <Festival />
      <Specifications />
      <Stories />
      <Events />
      <Gallery />
    </div>
  );
};

export default main;
