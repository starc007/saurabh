import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="mb-24" id="home">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-900 group relative cursor-none"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tighter mb-1">
            Saurabh.
          </h1>
          <p className="text-[13px] text-foreground/50 font-medium tracking-tight font-serif italic">
            Frontend Engineer{" "}
            <span className="text-foreground mx-1">{"//"}</span> Product Builder
          </p>
        </div>

        <div className="text-[18px] text-foreground/50 leading-[1.5] max-w-[540px] text-balance">
          Building small tools that are {" "}
          <span className="font-serif italic text-foreground text-2xl underline decoration-background underline-offset-8 decoration-1">
            simple, fast, and just work.
          </span>{" "}

        </div>
      </motion.div>
    </header>
  );
};

export default Header;
