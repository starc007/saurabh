import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const workExp = [
  {
    position: "Full Stack Developer",
    companyName: "Linkedphone",
    from: "2021-08-02",
    to: "Present",
    current: true,
    description: [
      "Wrote and maintained a new functionality for the product that was successfully implemented in production.",
      "Improved product UI using HTML,CSS, JavaScript and Jquery.",
      "Developed websocket api using AWS lambda and API gateway in Node.js",
      "Improved the code structure, Built reusable functions.",
    ],
  },
  {
    position: "Software Developer Intern",
    companyName: "Dot Com Labs LLP",
    from: "2021-03-01",
    to: "2021-07-30",
    current: false,
    description: [
      "Built various ui Reusable components in React used across applications and quickly built various prototypes with information gathered from the product team.",
      "Improved user experience and accomplish webpage objectives by creating site structure, navigation, page optimization and graphics integraton.",
      "Built stable and maintainable codebases using React.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-16">
      <p className="text-4xl font-bold grad-txt w-64">Experience</p>
      <div className="flex flex-col my-8">
        {workExp.map((work, index) => (
          <div className="p-4 border shadow mt-4" key={index}>
            <div className="flex sm:space-x-8 space-x-6 w-full justify-between">
              <div className="pt-1 text-2xl sm:text-4xl text-gray-700">
                <FaRegBuilding />
              </div>
              <div className="w-full">
                <div className="flex justify-between md:flex-row flex-col ">
                  <div className="flex flex-col">
                    <label className="sm:text-xl text-lg font-bold text-gray-700">
                      {work?.position}
                    </label>
                    <label className=" text-gray-600 sm:text-base text-sm font-medium pt-1">
                      {work?.companyName}
                    </label>
                  </div>
                  <div className="flex items-center space-x-1  text-sm md:text-xs font-medium mt-2">
                    <label className="text-gray-600 ">
                      {work?.from.split("-")[1]}/{work?.from.split("-")[0]}
                    </label>{" "}
                    <span>-</span>
                    <label className="text-gray-600 ">
                      {work?.current === true
                        ? "Present"
                        : work?.to?.split("-")[1] +
                          "/" +
                          work?.to?.split("-")[0]}
                    </label>
                  </div>
                </div>
                <ul className="flex flex-col sm:mx-3 mx-0 list-disc sm:text-sm tracking-wide text-sm text-gray-700 pt-3">
                  {work.description.map((desc) => (
                    <li key={desc} className="mt-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
