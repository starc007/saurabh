import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import resume from "../resume.pdf";

const Navbar = () => {
  const commonClass =
    "text-gray-300 hover:text-[#03c4a1] transition duration-500";

  return (
    <div className="flex justify-between w-full items-center py-6">
      <img
        src="https://avatars.githubusercontent.com/u/36479565?s=400&u=e578e0ba40b5aaff6bff342830d9092365ec3255&v=4"
        className="rounded-full h-10 w-10 border"
      />

      <div className="flex space-x-5 items-center text-2xl">
        <a
          href="https://www.github.com/starc007"
          target="_blank"
          className={commonClass}
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/starc007"
          target="_blank"
          className={commonClass}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.twitter.com/saurra3h"
          target="_blank"
          className={commonClass}
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="mailto:saurabh10102@gmail.com"
          target="_blank"
          className={commonClass}
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
