import React from "react";

import ESlides from "../Carousel Events/carousel-events";

const events = () => {
  return (
    <div
      id="events"
      className=" md:h-[100vh] mt-20 md:mt-0  flex justify-center items-center text-center relative overflow-hidden "
    >
      <div className="flex flex-col justify-center items-center w-[60%] z-50">
        <div className="py-2 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          EVENTS
        </div>
        <ESlides />
      </div>
    </div>
  );
};

export default events;
