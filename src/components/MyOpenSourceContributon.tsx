import { Github01Icon } from "hugeicons-react";
import React from "react";

const data = [
  {
    projectName: "Fuel",
    prLink: ["https://github.com/FuelLabs/fuels-ts/pull/3425"],
  },
  {
    projectName: "Wagmi",
    prLink: ["https://github.com/wevm/wagmi/pull/4405"],
  },
  {
    projectName: "Fuel Agent Kit",
    prLink: [
      "https://github.com/FuelLabs/fuel-agent-kit/pull/21",
      "https://github.com/FuelLabs/fuel-agent-kit/pull/30",
    ],
  },
];

const MyOpenSourceContributon = () => {
  return (
    <div className="mt-14">
      <p className="text-xl font-semibold">My Open Source Contributions</p>
      <p className="text-black/50 mt-2">
        Contributed to some of the popular open source projects.
      </p>
      <div className="mt-4 flex gap-4 flex-wrap">
        {data.map((item) => (
          <div
            key={item.projectName}
            className="mt-2 flex gap-2 border border-emerald-500/10 rounded-xl px-4 py-2 bg-emerald-500/10"
          >
            <p className="font-medium">{item.projectName}</p>
            <div className="flex gap-2">
              {item.prLink.map((link) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  //   className="flex items-center gap-1"
                >
                  <Github01Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOpenSourceContributon;
