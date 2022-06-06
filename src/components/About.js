import React from "react";
import resume from "../resume.pdf";

const About = () => {
  return (
    <div className="flex flex-col grad-img ">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFihZdaWgcUmQ/profile-displayphoto-shrink_100_100/0/1654160628083?e=1660176000&v=beta&t=6cLB9H98Y8JDlZZ_VXzApXKvZs3Jyvdq2k0pB-7pCbw"
        className="rounded-full h-16 w-16 border"
      />
      <div className="txt-col py-14">
        <p className="sm:text-7xl text-6xl font-bold animate1">Saurabh</p>
        <p className="sm:text-5xl text-4xl font-bold py-4 grad-txt animate2">
          BUIDLing things for web
        </p>
        <p className="text-gray-800 animate3 tracking-wide sm:text-2xl text-xl font-medium mt-6 mb-8 font-sans">
          I'm an excellent developer as long as I'm getting my answers on
          Stackoverlflow 🥲. Full Stack Dev. Open for collaboration or new
          opportunities. Love to talk about tech, anime and life.
        </p>
        <p className="mt-4 mb-12 font-semibold">
          Wanna talk about tech, anime or anything ? Schedule a{" "}
          <a
            href="https://calendly.com/saurabbhh/30min"
            target="_blank"
            className="underline text-gray-400"
          >
            call
          </a>
        </p>
        <a
          href={resume}
          download
          className="px-4 py-3 btn font-medium bg-gray-200 text-gray-800 hover:bg-gray-100 hover:text-gray-800 transition duration-500"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
