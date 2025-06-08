import { Calendar03Icon, Download04Icon } from "hugeicons-react";
import resume from "../saurabh.pdf";

const myskills = [
  "React",
  "Nextjs",
  "Svelte",
  "Typescript",
  "JavaScript",
  "Nodejs",
  "Solidity",
  "Tailwindcss",
  "React Native",
  "Rust",
  "Framer Motion",
  "Zustand",
  "Cloudflare",
];

const About = () => {
  return (
    <div className="mt-8">
      <p className="text-xl font-semibold">About</p>
      <p className="text-black/50  mt-2">
        full stack developer who loves building products and contributing to
        open source. Contributed to{" "}
        <a
          href="https://fuel.network/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-black hover:text-black/50 transition duration-500 underline"
        >
          Fuel
        </a>{" "}
        &{" "}
        <a
          href="https://wagmi.sh/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-black hover:text-black/50 transition duration-500 underline"
        >
          Wagmi
        </a>
        .
      </p>
      <p className="text-black/50 mt-2">
        Currently Building{" "}
        <a
          href="https://usewave.app"
          target="_blank"
          rel="noreferrer noopener"
          className="text-black hover:text-black/50 transition duration-500 underline"
        >
          Wave (Social wallet on Solana)
        </a>{" "}
        &{" "}
        <a
          href="https://games.usewave.app"
          target="_blank"
          rel="noreferrer noopener"
          className="text-black hover:text-black/50 transition duration-500 underline"
        >
          Wave Games
        </a>{" "}
        (Play 2 Earn Games on Solana)
      </p>
      <p className="text-black/50 mb-6  mt-1">
        I enjoy talking about tech, startups & anime. Open to collaborations and
        new opportunities.
      </p>

      <p className="font-semibold">Tech Stack:</p>
      <div className="flex flex-wrap gap-3 mt-2">
        {myskills.map((skill) => (
          <p
            key={skill}
            className="bg-black/5 px-2.5 py-1 rounded-full text-sm"
          >
            {skill}
          </p>
        ))}
      </div>

      {/* <p className="text-black/50 mt-4">
        If you'd like to connect with me over a quick call, you can schedule a
        call with me.{" "}
        <a
          href="https://cal.com/saurra3h/30min"
          target="_blank"
          rel="noreferrer noopener"
          className="text-black hover:text-black/50 transition duration-500 underline"
        >
          Schedule Call
        </a>
      </p> */}

      <div className="flex items-center gap-2">
        <a
          href={resume}
          download
          className="h-10 mt-8 px-4 rounded-xl flex items-center justify-center gap-2 text-sm border border-black/5 text-black font-medium"
        >
          Resume <Download04Icon size={18} />
        </a>
        <a
          href="https://cal.com/saurra3h/30min"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-black px-4 h-10 mt-8 rounded-xl flex items-center justify-center gap-2 text-sm text-white font-medium"
        >
          Schedule Call <Calendar03Icon size={18} />
        </a>
      </div>
    </div>
  );
};

export default About;
