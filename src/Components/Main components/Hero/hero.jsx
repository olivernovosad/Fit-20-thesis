import React from "react";

import hero_video from "../../../video/hero-video.mp4";

const hero = () => {
  return (
    <div
      id="home"
      className="bg-black/50 h-[100vh] flex justify-center items-center text-center relative overflow-hidden  "
    >
      <h1 className="text-2xl text-white font-sans">
        We are making a difference <br />
        <span className="text-VUT-blue">for 20 years</span>!
      </h1>
      <video
        className="invisible md:visible absolute top-0 left-0 w-full min-h-full bg-cover -z-[1]"
        autoPlay
        loop
        muted
      >
        <source src={hero_video} type="video/mp4" />
      </video>
    </div>
  );
};

export default hero;
