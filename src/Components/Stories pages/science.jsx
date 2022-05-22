import React from "react";
import { Link } from "react-router-dom";

import SecNav from "../Main components/Nav/sec-nav";
import Footer from "../Footer/footer";

import Science from "../../photos/science-full.png";
import arrleft from "../../photos/arrow-left.svg";

const science = () => {
  return (
    <>
      <SecNav />
      <div className="w-[100vw] h-[100vh] fixed top-0 left-0  bg-cover bg-no-repeat bg-center school overflow-hidden -z-[3] "></div>
      <div className="flex flex-col w-full h-full justify-center items-center mt-36">
        <div className="py-3 px-3 mb-4 text-lg bg-VUT-blue font-semibold text-white ">
          STORIES
        </div>{" "}
        <div className="bg-white w-[90%] flex flex-col justify-center items-center text-center ">
          <div className="w-full flex flex-col items-center justify-center text-center md:block md:ml-16  md:mt-5">
            <div className="flex w-full justify-center items-center md:block">
              <img
                className=" w-48 md:w-64 imageText my-10 md:ml-8 md:mr-12"
                src={Science}
                alt=""
              />
            </div>
            <p className="max-w-full text-center md:text-left md:mr-20 mx-2">
              <br />
              <br />
              Research is one of the pillars of the faculty's activities, their
              employees and many students. At FIT, Tomáš Vojnar, Vice-Dean for
              Science and Research, has it under his wing. "FIT is at the
              forefront of both basic and applied research, and it is possible
              to achieve the transfer of ideas from mathematics interfaces to
              applications with companies. That seems great to me here," he
              says. IT is all around us, but not everyone considers information
              technology a science. "Science is everything before you can
              advertise a product and get a company to make it for you. Just try
              to go back a few years to the time when Google didn't exist and
              demand that you want to buy a search engine. "You won't buy it. No
              one has yet invented the principles on which it stands, has not
              implemented it and fine-tuned it. In short, research has not yet
              taken place," explains Tomáš Vojnar. If he were to present science
              and research at FIT, he would start by enumerating and, as he
              says, he would only hope that he would not forget anyone. He and
              his colleagues are involved in a number of IT fields in both basic
              and applied research, and thanks to this they are able to respond
              well to world trends. <br /> <br /> "Almost whenever a field comes
              forward, FIT is represented in it. In recent years, it is mainly
              machine learning," he adds. In addition to artificial
              intelligence, FIT researchers focus on network security and other
              aspects of computer security, automated analysis and verification,
              embedded computing and supercomputer technology, evolutionary
              hardware, robotic and cyberphysical systems, the Internet of
              Things, and the theoretical foundations of computer science. "We
              are pushing the boundaries of knowledge in a number of areas
              important to society. The results of such research should improve
              the quality of society - I am talking about security, smart
              cities, eGovernment, autonomous vehicles, smart agriculture or
              medical applications," says Tomáš Vojnar. As he adds, it is also
              extremely important to be able to pass on knowledge on the edge of
              current knowledge to students. <br /> <br /> "Not only because of
              their careers, but also because of the development of the region.
              Only in this way can strong teams and companies be created here,
              which attract other smart heads," he says. That is why FIT tries
              to involve students in research as soon as possible - already in
              the summer after the 1st year. Thanks to the so-called project
              subject, they can replace part of the classical teaching by
              working on research projects. "If they make it to a diploma in
              this way, they've had four years in a specific research field, and
              that's not enough for a student. Maybe they'll just gain
              experience and go to work in industry. But there's always the
              possibility that they will one day, who will lead the entire
              research team and move the possibilities of IT a bit further,
              "says Tomáš Vojnar.
            </p>
          </div>
          <Link className="mt-8 self-start ml-8" to={"/"}>
            <button className="bg-VUT-blue flex flex-row items-center text-white font-semibold px-3 py-2 ">
              <img className="pr-5" src={arrleft} alt="" />{" "}
              <h2>Back to the Main page</h2>
            </button>
          </Link>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default science;
