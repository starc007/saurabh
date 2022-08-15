import React from "react";

const skillData = [
  "React",
  "Javascript",
  "Typescript",
  "Node.js",
  "Express.js",
  "Solidity",
  "AWS",
  "TailwindCSS",
  "MongoDB",
  "HTML",
  "CSS",
  "SASS",
];

const Skills = () => {
  return (
    <div className=" py-16">
      <p className="text-4xl font-bold grad-txt w-64">Tech Skills</p>
      <div className="flex flex-wrap items-center mt-12">
        {skillData.map((skill) => (
          <label
            key={skill}
            className="m-2 border px-5 bg-gray-100 py-3 font-medium text-gray-700 rounded-lg"
          >
            {skill}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Skills;
