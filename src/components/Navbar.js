import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
];

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="flex justify-between w-full items-center py-6">
      <button
        onClick={toggleTheme}
        className="flex items-center dark:text-white text-zinc-800 border dark:border-zinc-700 border-zinc-400 px-3 h-8 sm:text-lg rounded-full transition duration-500"
      >
        {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <div className="flex items-center text-xs sm:text-sm border dark:border-zinc-700 border-zinc-400 rounded-full">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.link}
            className="dark:text-white text-zinc-800 dark:hover:bg-white/5 hover:bg-zinc-100 rounded-full py-2 px-4 transition duration-500"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
