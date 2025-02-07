import { useState } from "react";

import { WORK_TYPE_TABS } from "../utils/utils";
import { Tabs } from "./Tabs";
import CardItem from "./CardItem";
import { allProjects } from "./allProjects";
import { InformationCircleIcon } from "hugeicons-react";

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
      <div className="flex flex-col gap-4 p-2 rounded-full sticky top-2 z-10 bg-black backdrop-blur-sm overflow-hidden overflow-x-auto">
        <Tabs
          tabs={filterTabs}
          activeTab={selected}
          setActiveTab={handleTabChange}
        />
      </div>
      <p className="text-yellow-500 text-sm mt-4 flex items-center gap-2">
        <InformationCircleIcon className="w-4 h-4" />
        Some projects might not work because of the server shutdown.
      </p>

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
      <p className="text-black mt-8">
        Not Enough ? Well sometimes it's not enough:) Still you can Checkout my{" "}
        <a
          href="https://github.com/starc007?tab=repositories"
          target="_blank"
          className="text-black underline font-medium px-1"
        >
          Github
        </a>
      </p>
    </section>
  );
};

export default Work;
