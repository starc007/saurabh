import { MdArrowOutward } from "react-icons/md";

const Details = [
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
];

const DetailsComponent = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
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
              <a
                href={data.github}
                target="_blank"
                className="dark:text-zinc-400 hover:underline hover:text-zinc-100"
              >
                Github
              </a>
              <a
                href={data.demo}
                target="_blank"
                className="dark:text-zinc-400 hover:underline hover:text-zinc-100"
              >
                Demo
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Work = () => {
  const workWithOSS = Details.filter((detail) => detail?.isOSS);
  const workWithoutOSS = Details.filter(
    (detail) => !detail?.isOSS && !detail?.isDapp
  );
  const workWithDapp = Details.filter(
    (detail) => detail?.isDapp && !detail?.isOSS
  );

  return (
    <section id="projects" className="py-">
      <p className="text-2xl text-white font-semibold">Some side chicks :)</p>
      <div className="mt-7 flex flex-col space-y-6">
        {workWithoutOSS.map((detail) => (
          <DetailsComponent data={detail} key={detail.title} />
        ))}
        <hr className="border-gray-200 dark:border-gray-700" />

        <p className="text-2xl text-gray-500 font-semibold">
          Open Source Projects
        </p>
        {workWithOSS.map((detail) => (
          <DetailsComponent data={detail} key={detail.title} />
        ))}

        <hr className="border-gray-200 dark:border-gray-700" />
        <p className="text-2xl text-gray-500 font-semibold">Web3 Projects</p>
        {workWithDapp.map((detail) => (
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
