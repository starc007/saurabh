import React from "react";

const Details = [
  {
    title: "Readmi",
    description:
      "A Open Source Github readme builder. Use prebuilt templates, sections or create a new one.",
    tech: ["React", "Typescript", "Tailwindcss"],
    github: "https://github.com/starc007/readmi",
    demo: "https://readmi.xyz/",
  },
  {
    title: "Web3 Wallet Connect",
    description:
      "A Open Source wallet connecttion library for your decentralized application",
    github: "https://github.com/starc007/web3-wallet-connect",
    demo: "https://www.npmjs.com/package/web3-wallet-connect",
    tech: ["Typescript"],
  },
  {
    title: "Senju",
    description:
      "A decentralized blogging platform. Built on top of IPFS and Polygon. you can import your blogs from other platforms or write your own and mint them as NFT",
    github: "https://senju.in",
    demo: "https://senju.in/",
    tech: ["React", "Nodejs", "Redux", "Onec Tools"],
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
];

const DetailsComponent = ({ data }) => {
  return (
    <div className="flex flex-col w-full border border-gray-600 py-6 px-6 rounded div__hover">
      <h1 className="text-gray-100 text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-400 mt-2 text-lg">{data.description}</p>
      <div className="flex items-center mt-3 space-x-4 flex-wrap">
        {data.tech.map((tech) => (
          <span className="text-gray-100 font-medium mr-1">{tech} </span>
        ))}
      </div>
      <div className="flex mt-3 space-x-4 items-center">
        <a href={data.github} target="_blank" className="txt-green underline">
          Github
        </a>
        <a href={data.demo} target="_blank" className="txt-green underline">
          Demo
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="py-16">
      <p className="md:text-4xl text-3xl text-gray-200 flex font-semibold">
        Some Things I've
        <div className="relative ml-2">
          <span className="absolute bottom-1 border-b-[8px] w-[70px] md:w-[81px]  border-[#03c4a1]" />
          <h1 className="relative">Built</h1>
        </div>
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {Details.map((detail) => (
          <DetailsComponent data={detail} key={detail.title} />
        ))}
      </div>
      <p className="text-gray-300 mt-5">
        Not Enough ? Well sometimes it's not enough:) Still you can Checkout my{" "}
        <a
          href="https://github.com/starc007?tab=repositories"
          target="_blank"
          className="txt-green underline font-medium px-1"
        >
          Github
        </a>{" "}
        account
      </p>
    </div>
  );
};

export default Work;
