import React from "react";
import Software from "../specifications cards/software";
import Hardware from "../specifications cards/hardware";
import Networking from "../specifications cards/networking";

const specifications = () => {
  return (
    <div
      id="specifications"
      className="md:h-[100vh]  flex justify-center items-center text-center relative overflow-hidden   "
    >
      <div className="flex flex-col justify-center items-center w-[60%]">
        <div className="py-2 px-3 mt-28 md:mt-0 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          CHOOSE YOUR SPECIFICATION
        </div>
        {/* HUGE DIV FOR ALL THREE CARDS OF THE TREE */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full ">
          {/* HARDWARE CARD */}
          <Hardware />
          {/* SOFTWARE CARD */}
          <Software />
          {/* NETWORKING CARD */}
          <Networking />
        </div>
      </div>
      {/* MAIN DIV FOR COLUMN ALLIGNMENT */}
    </div>
  );
};

export default specifications;
