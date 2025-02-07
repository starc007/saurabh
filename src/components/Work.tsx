import { useState } from "react";

import { WORK_TYPE_TABS } from "../utils/utils";
import { Tabs } from "./Tabs";
import CardItem from "./CardItem";
import { allProjects } from "./allProjects";

const filterTabs = [
  {
    label: "All",
    value: WORK_TYPE_TABS.ALL,
  },
  {
    label: "Web3",
    value: WORK_TYPE_TABS.WEB3,
  },
  {
    label: "Open Source",
    value: WORK_TYPE_TABS.OPEN_SOURCE,
  },

  {
    label: "Freelance",
    value: WORK_TYPE_TABS.FREELANCE,
  },
  {
    label: "Web2",
    value: WORK_TYPE_TABS.WEB2,
  },
];

const Work = () => {
  const [selected, setSelected] = useState(WORK_TYPE_TABS.ALL);
  const [data, setData] = useState(allProjects);

  const handleTabChange = (tab: string) => {
    setSelected(tab as WORK_TYPE_TABS);
    if (tab === WORK_TYPE_TABS.FREELANCE) {
      setData(allProjects.filter((project) => project.isFreelance === true));
    } else if (tab === WORK_TYPE_TABS.WEB3) {
      setData(allProjects.filter((project) => project.isDapp === true));
    } else if (tab === WORK_TYPE_TABS.OPEN_SOURCE) {
      setData(allProjects.filter((project) => project.isOSS === true));
    } else if (tab === WORK_TYPE_TABS.WEB2) {
      setData(allProjects.filter((project) => project.isWeb2 === true));
    } else {
      setData(allProjects);
    }
  };

  return (
    <section id="projects" className="mt-14">
      <div className="flex flex-col gap-4 sticky top-2 z-10 bg-white/10 backdrop-blur-sm ">
        <div className="border border-black/10 p-1 rounded-full w-fit ">
          <Tabs
            tabs={filterTabs}
            activeTab={selected}
            setActiveTab={handleTabChange}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        {data.map((detail) => (
          <CardItem
            demo={detail?.demo || ""}
            github={detail?.github || ""}
            videoLink={detail?.videoLink || ""}
            title={detail?.title}
            description={detail?.description}
            techStack={detail?.tech}
          />
        ))}
      </div>
      <p className="text-black/50 mt-5">
        Not Enough ? Well sometimes it's not enough:) Still you can Checkout my{" "}
        <a
          href="https://github.com/starc007?tab=repositories"
          target="_blank"
          className="text-black underline font-medium px-1"
        >
          Github
        </a>{" "}
        account
      </p>
    </section>
  );
};

export default Work;
