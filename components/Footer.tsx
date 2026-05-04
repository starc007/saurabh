import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";

const LINKS = [
  { icon: XIcon, href: "https://x.com/saurra3h", label: "Twitter / X" },
  { icon: GithubIcon, href: "https://github.com/starc007", label: "Github" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/starc007", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="pt-16 border-t border-edge-subtle flex flex-col items-center gap-5">
      <div className="flex gap-6 items-center">
        {LINKS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-ink-3 hover:text-ink transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
        <a
          href="mailto:saurabh10102@gmail.com"
          aria-label="Email"
          className="text-ink-3 hover:text-ink transition-colors"
        >
          <Mail size={16} strokeWidth={1.8} />
        </a>
      </div>
      <p className="text-[11px] text-ink-3 font-mono">© 2026 Saurabh</p>
    </footer>
  );
};

export default Footer;
