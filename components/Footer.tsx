import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const LINKS = [
  { icon: Twitter, href: "https://x.com/saurra3h", label: "Twitter / X" },
  { icon: Github, href: "https://github.com/starc007", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/starc007", label: "LinkedIn" },
  { icon: Mail, href: "mailto:saurabh10102@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-5 border-t border-edge-subtle pt-16">
      <div className="flex items-center gap-6">
        {LINKS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            aria-label={label}
            className="text-ink-3 transition-colors hover:text-ink"
          >
            <Icon className="h-4 w-4" strokeWidth={1.8} />
          </a>
        ))}
      </div>
      <p className="font-mono text-[11px] text-ink-3">© 2026 Saurabh</p>
    </footer>
  );
};

export default Footer;
