import React from "react";
import resume from "../resume.pdf";

const Skill = ({ title }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="triangle w-2 h-2" />
      <p className="text-gray-200 text-lg">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="py-12 flex flex-col">
      <p className="text-4xl sm:text-6xl font-bold animate1 text-gray-200">
        gm! i'm Saurabh
      </p>
      <p className="text-2xl sm:text-4xl font-bold py-4 txt-green animate2">
        building & simplifying things for web
      </p>
      <p className="text-gray-300 animate3 sm:text-xl text-base mt-4 mb-6 ">
        I'm an excellent developer as long as I'm getting my answers on
        Stackoverlflow. Trying to Simplify Web3. Full Stack Dev. Open for
        collaboration or new opportunities.
      </p>
      <div className=" my-10">
        <p className="md:text-3xl text-xl text-gray-300 flex font-semibold">
          Some
          <div className="relative mx-2">
            <span className="absolute bottom-1 border-b-[3px] md:border-b-[5px] w-[120px] md:w-[180px]  border-[#03c4a1]" />
            <h1 className="relative">technologies</h1>
          </div>
          that I play with:
        </p>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="React" />
            <Skill title="Svelte" />
            <Skill title="Nodejs" />
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <Skill title="Typescript" />
            <Skill title="Javascript" />
            <Skill title="Solidity" />
          </div>
        </div>
      </div>
      <a
        href={resume}
        download
        className="w-24 h-11 text-lg rounded flex items-center justify-center font-medium border border-[#03c4a1] txt-green hover:bg-[#03c4a1] hover:text-gray-900 transition duration-500"
      >
        Resume
      </a>
    </div>
  );
};

export default About;
