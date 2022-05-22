import React from "react";
import Logo from "../../photos/Logo.png";

import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-12 border-t-2 border-gray-500 w-full">
      <Link to={"/"}>
        <img className="h-8 w-auto md:h-12 m-4 md:m-8" src={Logo} alt="" />
      </Link>

      <div className=" w-full flex flex-col ml-5 md:ml-20 md:items-start md:justify-start items-center justify-center text-center m-8 ">
        <div className="flex flex-row items-start justify-start ">
          <h1 className="mb-5 md:text-left md:text-base text-sm">
            FACULTY OF INFORMATIONAL TECHNOLOGIES <br /> HIGHER TECHNITIAN
            EDUCATION IN BRNO
          </h1>
        </div>
        <div className="flex flex-row md:text-base text-xs items-start justify-start md:text-left">
          <p className="mr-10">
            Božetechova 2<br />
            612 00 Brno
          </p>
          <p className="text-blue-500 underline md:text-left">
            www.fit.vut.cz
            <br />
            info@fit.vut.cz
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
