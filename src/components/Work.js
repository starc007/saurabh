import React from "react";

const Details = [
  {
    title: "Sanchar",
    description: "Social network for Freelancers (1200+ users)",
    tech: ["Nextjs", "Typescript", "Tailwindcss", "Nodejs"],
    github: "https://sanchar.xyz/",
    demo: "https://sanchar.xyz/",
  },
  {
    title: "Web3 Wallet Connect",
    description:
      "A Open Source wallet connection library for your decentralized application",
    github: "https://github.com/starc007/web3-wallet-connect",
    demo: "https://www.npmjs.com/package/web3-wallet-connect",
    tech: ["Typescript"],
  },
  {
    title: "Vakya AI Extension",
    description:
      "An AI extension that helps you to write coverletterin upwork and freelancer. Also you can write tweets and linkedin post using this.",
    github:
      "https://chrome.google.com/webstore/detail/vakya-your-ai-assistant/dhlkjfbdgcljpkcbmagccimbeolgiane",
    demo: "https://chrome.google.com/webstore/detail/vakya-your-ai-assistant/dhlkjfbdgcljpkcbmagccimbeolgiane",
    tech: ["Javascript", "React", "Tailwindcss", "Webpack"],
  },
  {
    title: "Playota Landing Page",
    description:
      "Landing page for Playota. A decentralized fantasy game platform.",
    github: "https://playota.app",
    demo: "https://playota.app",
    tech: ["Nextjs", "Typescript", "Tailwindcss", "Framer Motion"],
  },
  {
    title: "Readmi",
    description:
      "A Open Source Github readme builder. Use prebuilt templates, sections or create a new one.",
    tech: ["React", "Typescript", "Tailwindcss"],
    github: "https://github.com/starc007/readmi",
    demo: "https://readmi.xyz/",
  },

  {
    title: "Zeno",
    description:
      "A decentralized Payment protocol where you can send/ buy crypto using INR. You can also Lend or swap your tokens. Built on top of Polygon",
    github: "https://github.com/starc007/zeno-prod",
    demo: "https://zenoo.netlify.app/",
    tech: ["React", "Nodejs", "Solidity"],
  },
  {
    title: "Simple",
    description:
      "A decentralized doc sharing and collaborating web app. Built on top of IPFS and Polygon",
    github: "https://github.com/starc007/simple",
    demo: "https://simpldapp.netlify.app/",
    tech: ["React", "Nodejs", "NFT Port"],
  },
  {
    title: "Senju",
    description:
      "A decentralized blogging platform. Built on top of IPFS and Polygon. you can import your blogs from other platforms or write your own and mint them as NFT",
    github: "https://senju.in",
    demo: "https://senju.in/",
    tech: ["React", "Nodejs", "Redux", "Onec Tools"],
  },
];

const DetailsComponent = ({ data }) => {
  return (
    <div
      className="flex flex-col w-full border border-slate-200 dark:border-slate-700 py-4 px-6 hover:shadow-lg rounded-xl relative"
      id="twork"
    >
      {/* <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span> */}
      <h1 className="dark:text-white text-zinc-800 text-xl font-bold">
        🛠️ {data.title}
      </h1>
      <p className="text-zinc-500 sm:text-base text-sm mt-1">
        {data.description}
      </p>
      <div className="flex items-center mt-2 space-x-4 flex-wrap">
        {data.tech.map((tech) => (
          <span className="text-zinc-800 dark:text-white italic text-sm">
            {tech}{" "}
          </span>
        ))}
      </div>
      <div className="flex mt-2 space-x-4 items-center">
        <a
          href={data.github}
          target="_blank"
          className="dark:text-zinc-400 underline"
        >
          Github
        </a>
        <a
          href={data.demo}
          target="_blank"
          className="dark:text-zinc-400 underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="projects" className="py-">
      <p className="md:text-4xl text-3xl dark:text-white text-zinc-800 flex font-bold">
        Some cool stuff :)
      </p>
      <div className="mt-7  gap-3 gallery-container">
        {Details.map((detail) => (
          <DetailsComponent data={detail} key={detail.title} />
        ))}
      </div>
      {/* {count < Details?.length && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setCount(count + 2)}
            className="flex items-center dark:text-white text-zinc-800 font-medium dark:hover:bg-white/5 hover:bg-zinc-100 px-3 h-10 rounded-lg transition-all duration-500"
          >
            Show more
          </button>
        </div>
      )} */}
      <p className="dark:text-zinc-400 text-zinc-500 mt-5">
        Not Enough ? Well sometimes it's not enough:) Still you can Checkout my{" "}
        <a
          href="https://github.com/starc007?tab=repositories"
          target="_blank"
          className="text-zinc-800 dark:text-white underline font-medium px-1"
        >
          Github
        </a>{" "}
        account
      </p>
    </section>
  );
};

export default Work;
