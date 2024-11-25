import resume from "../saurabh.pdf";

const About = () => {
  return (
    <div className="md:py-10 py-12 flex items-center">
      <div className="flex flex-col md:flex-row  justify-between w-full">
        <div className="md:w-full">
          <p className="text-3xl sm:text-5xl font-bold animate1 text-black">
            Saurabh Chauhan
          </p>

          <p className="text-black/50 mb-6 md:text-lg text-sm mt-4 font-medium">
            Full stack dev. Loves building Products. Building{" "}
            <a
              href="https://stylr.xyz"
              target="_blank"
              rel="noreferrer noopener"
              className="text-black inline-flex font-semibold hover:text-black/70 transition-colors duration-300 underline"
            >
              stylr.
            </a>{" "}
            Love to talk about tech, startups & anime. Open for collaboration or
            new opportunities.
          </p>
          <p className="text-black font-semibold">
            <span className="text-black/50 font-medium">Tech Stack:</span>{" "}
            React, Nextjs, Svelte, Typescript, JavaScript, Nodejs, Solidity,
            Tailwindcss, React Native
          </p>
          <p className="text-black font-semibold mt-4">
            <span className="text-black/50 font-medium">Exposure to:</span> Rust
          </p>
          <div className="flex items-center gap-2">
            <a
              href={resume}
              download
              className="sm:w-24 w-20 sm:h-11 h-10 mt-8 rounded-xl flex items-center justify-center md:text-base text-sm border border-black/5 text-black hover:bg-black/5 transition duration-500"
            >
              Resume
            </a>
            <a
              href="https://calendly.com/saurra3h/intro"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-black/5 px-4 sm:h-11 h-10 mt-8 rounded-xl flex items-center justify-center md:text-base text-sm text-black hover:bg-black/5 transition duration-500"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
