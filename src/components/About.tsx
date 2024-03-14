import resume from "../saurabh.pdf";

const About = () => {
  return (
    <div className="md:py-28 py-12 flex items-center">
      <div className="flex flex-col md:flex-row  justify-between w-full">
        <div className="md:w-full">
          <p className="text-3xl sm:text-5xl font-bold animate1 text-white">
            Saurabh Chauhan
          </p>

          <p className="text-zinc-500 mb-6 md:text-lg text-sm mt-4">
            full Stack Developer with more than 3 years of exp. Trying to
            Simplify Web3. Love to talk about tech, startups & anime. Open for
            collaboration or new opportunities.
          </p>
          <p className="text-white font-semibold">
            <span className="text-zinc-400font-medium">Tech Stack:</span> React,
            Nextjs, Svelte, Typescript, JavaScript, Nodejs, Solidity,
            Tailwindcss, React Native, Ether.js
          </p>
          <p className="text-white font-semibold mt-4">
            <span className="text-zinc-400 font-medium">Exposure to:</span>{" "}
            Rust, Go
          </p>
          <a
            href={resume}
            download
            className="sm:w-24 w-20 sm:h-11 h-10 mt-8 rounded-full flex items-center justify-center md:text-base text-sm border border-zinc-700 text-white hover:bg-white/5 transition duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
