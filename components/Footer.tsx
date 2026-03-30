import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 border-t border-border flex flex-col items-center gap-6 text-center">
      <div className="flex gap-8">
        <a
          href="https://x.com/saurra3h"
          className="text-secondary hover:text-accent transition-colors"
        >
          <Twitter size={18} />
        </a>
        <a
          href="https://github.com/starc007"
          className="text-secondary hover:text-accent transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/starc007"
          className="text-secondary hover:text-accent transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:saurabh10102@gmail.com"
          className="text-secondary hover:text-accent transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
      <p className="text-[12px] text-secondary/50">© 2026 Saurabh</p>
    </footer>
  );
};

export default Footer;
