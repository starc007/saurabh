import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const commonClass = "hover:text-white transition duration-500";

const Footer = () => {
  return (
    <div className="py-4 px-4 my-10 flex justify-between flex-wrap gap-4 text-zinc-400 font-medium text-lg border border-white/5 rounded-2xl bg-white/5">
      <p>
        Have Something for me? <span className="text-white">Let's talk</span>
      </p>
      <div className="flex space-x-5 items-center text-2xl">
        <a
          href="https://www.github.com/starc007"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/starc007"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.twitter.com/saurra3h"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="mailto:saurabh10102@gmail.com"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
