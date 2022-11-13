import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const commonClass = "dark:hover:text-white transition duration-500";

const Footer = () => {
  return (
    <div className="py-10 flex justify-between flex-wrap gap-4 dark:text-zinc-400 text-zinc-500 font-medium text-lg">
      <p>Developed with ❤️ in India 🇮🇳</p>
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

export default Footer;
