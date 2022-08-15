import React from "react";
import resume from "../resume.pdf";

const About = () => {
  return (
    <div className="flex flex-col grad-img ">
      <img
        src="https://avatars.githubusercontent.com/u/36479565?s=400&u=e578e0ba40b5aaff6bff342830d9092365ec3255&v=4"
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
          className="px-4 py-3 btn font-medium bg-gray-200 text-gray-800 hover:bg-gray-100 hover:text-gray-800 transition duration-500 rounded-lg"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
