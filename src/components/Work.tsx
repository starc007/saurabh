import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const Details = [
  {
    title: "MultiSig Wallet Smart Contract",
    description:
      "MultiSig contract + Factory contract for creating MultiSig Wallet",
    tech: ["Solidity", "hardhat"],
    demo: "https://github.com/starc007/multisig-wallet",
    isDapp: true,
  },
  {
    title: "PetRace Smart Contract",
    description:
      "Smart Contract for a Pet Racing Game. You can create your pet, upgrade them and participate in a game and win rewards.",
    tech: ["Solidity", "hardhat"],
    demo: "https://github.com/starc007/petrace-smart-contract",
    isDapp: true,
  },
  {
    title: "Piqr",
    description:
      "A Professional Networking Platform. Used by 3000+ users. Built this product from scratch. (Frontend + Backend)",
    tech: ["Nextjs", "Typescript", "Tailwindcss", "Nodejs"],
    github: "https://piqr.in",
    demo: "https://piqr.in",
  },
  {
    title: "Web3 Wallet Connect",
    description:
      "A Open Source wallet connection library for your decentralized application",
    github: "https://github.com/starc007/web3-wallet-connect",
    demo: "https://www.npmjs.com/package/web3-wallet-connect",
    tech: ["Typescript"],
    isOSS: true,
  },
  {
    title: "UI Components",
    description:
      "Fully customizable UI components for your next project. Built with Tailwindcss + Typescript",
    github: "https://github.com/starc007/ui-components",
    demo: "https://ui-comp69.vercel.app/",
    tech: ["React", "Typescript", "Tailwindcss"],
    isOSS: true,
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
    isOSS: true,
  },

  {
    title: "Zeno",
    description:
      "A decentralized Payment protocol where you can send/ buy crypto using INR. You can also Lend or swap your tokens. Built on top of Polygon",
    github: "https://github.com/starc007/zeno-prod",
    demo: "https://zenoo.netlify.app/",
    tech: ["React", "Nodejs", "Solidity"],
    isDapp: true,
  },
  {
    title: "Simple",
    description:
      "A decentralized doc sharing and collaborating web app. Built on top of IPFS and Polygon",
    github: "https://github.com/starc007/simple",
    demo: "https://simpldapp.netlify.app/",
    tech: ["React", "Nodejs", "NFT Port"],
    isDapp: true,
  },
  {
    title: "Senju",
    description:
      "A decentralized blogging platform. Built on top of IPFS and Polygon. you can import your blogs from other platforms or write your own and mint them as NFT",
    github: "https://senju-test.netlify.app",
    demo: "https://senju-test.netlify.app",
    tech: ["React", "Nodejs", "Redux", "Onec Tools"],
    isDapp: true,
  },
  {
    title: "Polygon Freelance Work",
    description:
      "Worked with Polygon for 2 small projects as a Freelance dev - Frontend",
    tech: ["React"],
    isFreelance: true,
  },
  {
    title: "Social Defi",
    description: "Wrote Smart Contract for a Social Defi Platform",
    tech: ["Solidity", "hardhat"],
    demo: "https://basescan.org/address/0x3158535153Ad4259f2e21763D0Eb566Ee9DaEA78#code",
    isFreelance: true,
  },
];

const DetailsComponent = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
  };
}) => {
  return (
    <div className="md:px-0 px-4">
      <ul className="list-disc text-white">
        <li>
          <div className="flex flex-col">
            <a
              href={data.github}
              target="_blank"
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300 flex items-center"
            >
              {data.title} <MdArrowOutward className="ml-1" />
            </a>
            <span className="text-gray-400 text-sm inline-flex">
              {data.description}
            </span>
            <div className="flex items-center mt-2 space-x-4 flex-wrap hover:text-white text-gray-300 ">
              {data.tech.map((tech) => (
                <span key={tech} className="italic text-sm">
                  {tech}{" "}
                </span>
              ))}
            </div>
            <div className="flex mt-2 space-x-4 items-center">
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  className="dark:text-zinc-400 hover:underline hover:text-zinc-100"
                >
                  Github
                </a>
              )}
              {data.demo && (
                <a
                  href={data.demo}
                  target="_blank"
                  className="dark:text-zinc-400 hover:underline hover:text-zinc-100"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const menu = [
  {
    id: 1,
    title: "Normal",
  },
  {
    id: 2,
    title: "Open Source",
  },
  {
    id: 3,
    title: "Web3",
  },
  {
    id: 4,
    title: "Freelance",
  },
];

const Work = () => {
  const [selected, setSelected] = useState("Normal");

  const [data, setData] = useState(
    Details.filter(
      (detail) => !detail?.isOSS && !detail?.isDapp && !detail?.isFreelance
    )
  );

  const handleClicked = (title: string) => {
    setSelected(title);
    if (title === "Normal") {
      setData(
        Details.filter(
          (detail) => !detail?.isOSS && !detail?.isDapp && !detail?.isFreelance
        )
      );
    } else if (title === "Open Source") {
      setData(Details.filter((detail) => detail?.isOSS));
    } else if (title === "Web3") {
      setData(Details.filter((detail) => detail?.isDapp));
    } else if (title === "Freelance") {
      setData(Details.filter((detail) => detail?.isFreelance));
    }
  };

  return (
    <section id="projects" className="py-">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <p className="text-2xl text-white font-semibold">Projects</p>

        <div className="flex items-center text-xs sm:text-sm border dark:border-zinc-700 border-zinc-400 rounded-full w-max">
          {menu.map((link) => (
            <button
              onClick={() => handleClicked(link.title)}
              key={link.title}
              className={`dark:text-white text-zinc-800 dark:hover:bg-white/5 hover:bg-zinc-100 rounded-full py-2 px-4 transition duration-500 ${
                selected === link.title
                  ? "bg-zinc-100 dark:bg-white/5"
                  : "bg-transparent"
              }`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-col space-y-6">
        {data.map((detail) => (
          <DetailsComponent data={detail} key={detail.title} />
        ))}
      </div>
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
