import resume from "../saurabh.pdf";

const About = () => {
  return (
    <div className="md:py-28 py-12 flex items-center">
      <div className="flex flex-col md:flex-row  justify-between w-full">
        <div className="md:w-full">
          <p className="text-3xl sm:text-5xl font-bold animate1 dark:text-white text-zinc-800">
            Saurabh Chauhan
          </p>
          {/* <p className="md:text-lg text-sm text-zinc-700 dark:text-zinc-400 py-4 animate2">
            Building{" "}
            <LinkPreview
              className={
                "inline-block px-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
              }
              url="https://piqr.in"
            >
              Piqr
            </LinkPreview>
            {","}
            <LinkPreview
              className={
                "inline-block px-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
              }
              url="https://readmi.xyz"
            >
              Readmi.xyz
            </LinkPreview>{" "}
            &
            <LinkPreview
              className={
                "inline-block px-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
              }
              url="https://github.com/starc007/web3-wallet-connect"
            >
              @saura3h/web3-connect
            </LinkPreview>
          </p> */}
          <p className="text-zinc-500 mb-6 md:text-lg text-sm mt-4">
            full Stack Developer with more than 3+ years of exp. Trying to
            Simplify Web3. Open for collaboration or new opportunities.
          </p>
          <p className="dark:text-white text-zinc-800 font-semibold">
            <span className="dark:text-zinc-400 text-zinc-500 font-medium">
              Tech Stack:
            </span>{" "}
            React, Nextjs, Svelte, Typescript, JavaScript, Nodejs, Solidity,
            Tailwindcss, React Native, Ether.js
          </p>
          <p className="dark:text-white text-zinc-800 font-semibold mt-4">
            <span className="dark:text-zinc-400 text-zinc-500 font-medium">
              Exposure to:
            </span>{" "}
            Rust, Go
          </p>
          <a
            href={resume}
            download
            className="sm:w-24 w-20 sm:h-11 h-10 mt-8 rounded-full flex items-center justify-center md:text-base text-sm border border-zinc-700 dark:text-white hover:bg-white/5 transition duration-500"
          >
            Resume
          </a>
        </div>
        {/* <div className="relative w-44 flex-shrink-1 p-4 md:order-last order-first">
          <a
            href="https://twitter.com/saurra3h"
            target="__blank"
            className="block relative z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5"
          >
            <img
              className="h-auto w-24 md:w-44"
              src="https://twitter.com/saurra3h/photo"
              alt="Saurabh Chauhan"
            />
          </a>
          <div className="z-0 ">
            <div className="absolute left-0 -right-12  top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute left-0 -right-12  bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
