import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="mb-24" id="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8"
      >
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-16 h-16 rounded-2xl overflow-hidden border border-border"
        >
          <img
            src="/profile.png"
            alt="Saurabh"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Headline */}
        <div>
          <h1 className="text-[36px] md:text-[42px] font-extrabold text-foreground tracking-tight leading-[1.1] mb-4">
            Design Engineer &<br />
            Product Builder.
          </h1>
          <p className="text-[15px] text-secondary leading-relaxed max-w-[480px]">
            I build tools and products that are fast, clean, and easy to use.
            Working with React, Next.js, and Rust.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-full text-[14px] font-semibold shadow-[0_2px_8px_rgba(44,30,16,0.15)] hover:bg-foreground/90 transition-colors"
          >
            <FileText size={15} />
            Download Resume
          </a>
          <a
            href="https://cal.com/saurra3h/30min"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 border-[1.5px] border-border text-foreground rounded-full text-[14px] font-semibold hover:bg-surface transition-colors"
          >
            Book a Call
            <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
