import {
  AiVideoIcon,
  Github01Icon,
  Link01Icon,
  SparklesIcon,
} from "hugeicons-react";
import { motion } from "framer-motion";

const data = [
  {
    id: -1,
    title: "GhostKey",
    description:
      "A privacy-focused wallet for the Fuel Network that generates unique addresses for each dApp connection. NEVER REVEAL YOUR MAIN WALLET TO ANYONE.",
    techStack: ["Reactjs", "Fuel", "Simplewebauthn", "Nodejs"],
    demo: "",
    github: "https://github.com/starc007/fuel-ghost-wallet/",
    image: "/sayhi.png",
    videoLink: "https://x.com/saurra3h/status/1885227733451759708",
    date: "Jan 31, 2025",
  },
  {
    id: 0,
    title: "SayHi",
    description:
      "A chrome extension that helps generate personalized conversation starters for Twitter/X profiles using AI.",
    techStack: ["Typescript", "Reactjs", "Tailwindcss"],
    demo: "https://sayhi.xyz",
    github: "https://github.com/starc007/sayhi",
    image: "/sayhi.png",
    videoLink: "https://x.com/saurra3h/status/1873391948280852914",
  },
  {
    id: 1,
    title: "Love Language",
    description:
      "Love Language is a fun, love-themed programming language that brings romance to coding! Express your algorithms with affection using love-themed keywords and operators.",
    techStack: ["Rust"],
    demo: "https://github.com/starc007/love-language/",
    github: "https://github.com/starc007/love-language/",
    image: "/love-language.png",
    videoLink: "https://x.com/saurra3h/status/1854868774161137762",
  },

  {
    id: 2,
    title: "myIntro",
    description:
      "Unlock Your Network's Hidden Potential - Find warm introductions on Twitter in seconds",
    techStack: ["React", "Typescript", "Tailwindcss", "Nodejs", "MongoDB"],
    demo: "https://myIntro.xyz",
    github: "",
    image: "/myIntro.png",
    videoLink: "https://x.com/saurra3h/status/1835008256466460834",
  },
  {
    id: 3,
    title: "Image Compressor - Rust",
    description:
      "A command-line tool for compressing and resizing images in bulk. This tool can process entire directories, including nested folders, and maintains the original folder structure in the output.",
    techStack: ["Rust"],
    demo: "https://github.com/starc007/Image-compression",
    github: "https://github.com/starc007/Image-compression",
    image: "/img-compression.png",
    videoLink: "https://x.com/saurra3h/status/1832036469147332662",
  },
  {
    id: 4,
    title: "EchoId",
    description:
      "EchoId is a Solana-based decentralized identity system enabling user-owned, cross-chain identities with compressed metadata and integrated reputation. This project is built using the Anchor framework.",
    techStack: ["Rust", "React", "Solana", "Nodejs"],
    demo: "https://www.echoid.xyz/",
    github: "https://github.com/starc007/echo-id-contract",
    image: "/img-compression.png",
    videoLink: "https://x.com/saurra3h/status/1832036469147332662",
  },
];

const RecentProjects = () => {
  const cardHeight = 150; // Increased base height for desktop
  const mobileCardHeight = 280; // Increased height for mobile
  const cardGap = 40; // Increased gap between cards
  const totalHeight = data.length * (cardHeight + cardGap);
  const mobileTotalHeight = data.length * (mobileCardHeight + cardGap);

  return (
    <div className="flex flex-col mt-20">
      <p className="text-black text-2xl font-semibold flex items-center gap-2">
        My recent builds
        <SparklesIcon size={24} />
      </p>
      <div
        className="relative mt-6 h-[200px] group hover:h-[var(--expanded-height)] md:hover:h-[var(--mobile-expanded-height)] transition-all duration-300"
        style={{
          ["--expanded-height" as any]: `${totalHeight}px`,
          ["--mobile-expanded-height" as any]: `${mobileTotalHeight}px`,
        }}
      >
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute w-full md:h-40 h-64 bg-white border border-black/5 p-4 rounded-xl duration-300 hover:border-black/10 cursor-pointer group-hover:translate-y-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              top: 0,
              translateY: `${index * 8}px`,
              transition: "transform 0.3s ease",
              transform: `translateY(${index * 8}px)`,
              ["--index" as any]: index,
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-full h-full flex flex-col justify-between">
              <p className="text-black font-semibold">
                <span>{project.title}</span> -{" "}
                <span className="text-black/50 text-sm font-medium">
                  {project.description}
                </span>
              </p>

              <div className="flex items-center justify-between flex-wrap gap-3 w-full mt-5">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-black flex items-center gap-1 text-sm"
                    >
                      <Link01Icon size={20} />
                      Website
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-black flex items-center gap-1 text-sm"
                    >
                      <Github01Icon size={20} />
                      Github
                    </a>
                  )}
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      className="text-black flex items-center gap-1 text-sm"
                    >
                      <AiVideoIcon size={20} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
