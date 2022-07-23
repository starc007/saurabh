import React, { useState } from "react";
import linkme from "../assets/linkme.png";
import senju from "../assets/senju.png";
import buycoffee from "../assets/buycoffee.png";
import simple from "../assets/simple.png";
import { FaRegEye, FaGithub } from "react-icons/fa";
import onec from "../assets/onec.png";

const ProjectsData = [
  {
    title: "Senju",
    image: senju,
    url: "https://senju.in/",
    github: "https://senju.in",
    techStack: ["MERN", "TailwindCSS", "Onec Dev Tools"],
    type: "Web3",
  },
  {
    title: "Simple",
    image: simple,
    url: "https://simpldapp.netlify.app/",
    github: "https://simpldapp.netlify.app/",
    techStack: ["MERN", "NFTPort", "ether.js", "TailwindCSS"],
    type: "Web3",
  },
  {
    title: "Zeno",
    image:
      "https://cdn.sanity.io/images/p7wt73d0/production/e3d348e5ead3b0649964f67c2c225e96da1ca768-1432x692.png",
    url: "https://zenoo.netlify.app/",
    github: "https://zeno.netlify.app/",
    techStack: ["MERN", "Solidity", "ether.js", "TailwindCSS"],
    type: "Web3",
  },
  {
    title: "Onec Landing Page",
    image: onec,
    url: "https://onec.in/",
    github: "https://onec.in/",
    techStack: ["React", "TailwindCSS"],
    type: "Frontend",
  },
  {
    title: "Buy Me Coffee",
    image: buycoffee,
    url: "https://buymecoffee.netlify.app/",
    github: "https://github.com/starc007/buymecoffee",
    techStack: ["React", "Solidity", "ether.js", "TailwindCSS"],
    type: "Web3",
  },
  {
    title: "linkME",
    image: linkme,
    url: "https://linkmehq.netlify.app/",
    github: "https://github.com/starc007/linkme",
    techStack: ["MERN", "TailwindCSS", "Google Auth"],
    type: "Full Stack",
  },
  {
    title: "Payifi",
    image:
      "https://cdn.sanity.io/images/p7wt73d0/production/aab6e7fc0bd32ce87975f77fd9e49da68d022628-1910x851.png",
    url: "https://starc007-dev.netlify.app/",
    github: "https://starc007-dev.netlify.app/",
    techStack: ["React", "Bootstrap"],
    type: "Frontend",
  },
];

const Work = () => {
  const [projects, setProjects] = useState(ProjectsData);
  const [active, setActive] = useState(true);
  const [activeWeb3, setActiveWeb3] = useState(false);
  const [activeFullStack, setActiveFullStack] = useState(false);
  const [activeFrontend, setActiveFrontend] = useState(false);
  const [count, setCount] = useState(3);

  const filterProjects = (type) => {
    if (type === "All") {
      setProjects(ProjectsData);
      setActive(true);
      setActiveWeb3(false);
      setActiveFullStack(false);
      setActiveFrontend(false);
    } else if (type === "Web3") {
      setProjects(ProjectsData.filter((project) => project.type === "Web3"));
      setActive(false);
      setActiveWeb3(true);
      setActiveFullStack(false);
      setActiveFrontend(false);
    } else if (type === "Full Stack") {
      setProjects(
        ProjectsData.filter((project) => project.type === "Full Stack")
      );
      setActive(false);
      setActiveWeb3(false);
      setActiveFullStack(true);
      setActiveFrontend(false);
    } else if (type === "Frontend") {
      setProjects(
        ProjectsData.filter((project) => project.type === "Frontend")
      );
      setActive(false);
      setActiveWeb3(false);
      setActiveFullStack(false);
      setActiveFrontend(true);
    } else {
      setProjects(ProjectsData);
      setActive(false);
      setActiveWeb3(false);
      setActiveFullStack(false);
      setActiveFrontend(false);
    }
  };

  const showMore = () => {
    setCount(count + 3);
  };

  const showLess = () => {
    setCount(3);
  };

  const activeClass =
    "px-6 border p-2  bg-gray-200 text-gray-700 transition duration-500 mx-2 mt-2 font-medium";
  const inactiveClass =
    "px-6 border p-2  text-gray-600 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-800 mx-2 mt-2 font-medium";

  return (
    <div className=" py-16">
      <p className="text-4xl font-bold grad-txt w-64">My Work</p>
      <div className="flex text-sm  mt-6 flex-wrap">
        <button
          className={active ? activeClass : inactiveClass}
          onClick={() => filterProjects("All")}
        >
          All
        </button>
        <button
          className={activeWeb3 ? activeClass : inactiveClass}
          onClick={() => filterProjects("Web3")}
        >
          Web3
        </button>
        <button
          className={activeFrontend ? activeClass : inactiveClass}
          onClick={() => filterProjects("Frontend")}
        >
          Frontend
        </button>
        <button
          className={activeFullStack ? activeClass : inactiveClass}
          onClick={() => filterProjects("Full Stack")}
        >
          Full Stack Web2
        </button>
      </div>
      <div className="grid gap-7 row-gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-8 mx-2">
        {projects.slice(0, count).map((project) => (
          <div key={project.title} className="transition duration-500 ">
            <div className="shadow p-5 border group hover:shadow-xl duration-500 transition">
              <div className="relative mb-6 w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt="coverImage"
                  className="w-full h-full object-cover object-center brightness-75"
                />
                <div className="absolute opacity-0 transition duration-200 bg-gray-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                  <ul className="flex flex-wrap space-x-4">
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaRegEye size={28} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaGithub size={28} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-700 mb-2">
                {project.title}
              </h3>

              <p className="grad-txt font-semibold">Tech Stack</p>
              <div className="flex  flex-wrap">
                {project.techStack.map((tech) => (
                  <label
                    key={tech}
                    className="text-sm mx-1 text-gray-500 font-semibold border px-2 py-1 mt-2"
                  >
                    {tech}
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {count < projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            className="px-3 border flex items-center h-10 bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-500 font-medium text-sm"
          >
            Show more
          </button>
        </div>
      )}

      {count == projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showLess}
            className="px-3 border flex items-center h-10 bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-500 font-medium text-sm"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
