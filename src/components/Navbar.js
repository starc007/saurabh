import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center py-4">
      <div></div>
      <div className="flex space-x-6 items-center text-gray-600 text-2xl">
        <a href="https://www.github.com/starc007" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/starc007" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://www.twitter.com/saurra3h" target="_blank">
          <AiOutlineTwitter />
        </a>
        <a href="mailto:saurabh10102@gmail.com" target="_blank">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
