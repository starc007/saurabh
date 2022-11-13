import React from "react";

const workExp = [
  {
    id: 1,
    position: "Frontend Developer",
    companyName: "Bitbns",
    from: "Aug 2022",
    to: "",
    current: true,
    description: [
      "Built Complete Frontend of Bitdroplet Dapp using Svelte and Typescript.",
      "Contributed in 2 other projects using Svelte",
    ],
    isVisible: true,
  },
  {
    id: 2,
    position: "Full Stack Developer",
    companyName: "Linkedphone",
    from: "Aug 2021",
    to: "Aug 2022",
    current: false,
    description: [
      "Wrote and maintained a new functionality for the product that was successfully implemented in production.",
      "Improved product UI using HTML,CSS, JavaScript and Jquery.",
      "Developed websocket api using AWS lambda and API gateway in Node.js",
      "Improved the code structure, Built reusable functions.",
    ],
    isVisible: false,
  },
  {
    id: 3,
    position: "Software Developer Intern",
    companyName: "Eboyo",
    from: "March 2021",
    to: "July 2021",
    current: false,
    description: [
      "Built various ui Reusable components in React used across applications and quickly built various prototypes with information gathered from the product team.",
      "Improved user experience and accomplish webpage objectives by creating site structure, navigation, page optimization and graphics integraton.",
      "Built stable and maintainable codebases using React.",
    ],
    isVisible: false,
  },
];

const Experience = () => {
  const activeClass =
    "-ml-[2px] md:text-base text-sm md:border-l-2 border-t-2 md:border-t-0 border-zinc-800 dark:border-white px-3 h-12 md:w-36 w-28 dark:text-white text-zinc-800 md:text-left bg-gray-800/5 dark:bg-white/5 transition-all duration-300";

  const inactiveClass =
    "-ml-[2px] md:text-base text-sm md:border-l-2 border-t-2 md:border-t-0 dark:border-zinc-700 hover:border-zinc-800 px-3 h-12 md:w-36 w-28 text-zinc-400 md:text-left hover:bg-gray-800/5 dark:hover:bg-white/5 hover:text-zinc-800 dark:hover:text-zinc-300 transition-all duration-300";

  const [workData, setWorkData] = React.useState(workExp);

  const showCompany = (id) => {
    let tempData = workData.map((item) => {
      if (item.id === id) {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
      return item;
    });
    setWorkData(tempData);
  };

  return (
    <section className="py-28" id="experience">
      <p className="md:text-4xl text-3xl dark:text-white text-zinc-800 flex font-semibold">
        Work Experience
      </p>

      <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-3 mt-12 ">
        <div className="flex md:flex-col flex-row items-start text-gray-100 ">
          <button
            onClick={() => showCompany(1)}
            className={workData[0].isVisible ? activeClass : inactiveClass}
          >
            Bitbns
          </button>
          <button
            onClick={() => showCompany(2)}
            className={workData[1].isVisible ? activeClass : inactiveClass}
          >
            Linkedphone
          </button>
          <button
            onClick={() => showCompany(3)}
            className={workData[2].isVisible ? activeClass : inactiveClass}
          >
            Eboyo
          </button>
        </div>
        <div>
          {workExp.map((work, index) => {
            return (
              <div
                key={index}
                className={`${work.isVisible ? "block" : "hidden"}`}
              >
                <div className="flex flex-col space-y-2">
                  <p className="dark:text-zinc-400 text-zinc-500 text-xl ">
                    {work.position}{" "}
                    <span className="dark:text-white text-zinc-800 font-semibold">
                      @{work.companyName}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col space-y-2 mt-3">
                  <p className="text-zinc-500 text-sm font-semibold">
                    {work.from} - {work.current === true ? "Present" : work.to}
                  </p>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                  {work.description.map((desc) => (
                    <div className="flex space-x-2" key={desc}>
                      <div className="triangle w-2 h-2 dark:bg-white bg-zinc-600" />
                      <p className="dark:text-zinc-300 text-zinc-600 -mt-2">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
