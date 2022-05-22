import React from "react";
import SSlides from "../Carousel Stories/carousel-stories";

const stories = () => {
  return (
    <div
      id="stories"
      className="h-[100vh]  flex justify-center items-center text-center relative overflow-hidden "
    >
      <div className="flex flex-col justify-center items-center w-[60%] z-50">
        <div className="py-2 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          FIT STORIES
        </div>
        <SSlides />
      </div>
    </div>
  );
};

export default stories;
