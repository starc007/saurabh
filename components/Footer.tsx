
const LINKS = [
  { href: "mailto:saurabh10102@gmail.com", label: "Email" },
  { href: "https://github.com/starc007", label: "GitHub" },
  { href: "https://x.com/saurra3h", label: "X" },
  { href: "https://www.linkedin.com/in/starc007", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-edge pt-5 text-[11px] text-ink-2">
      <p>© 2026 Saurabh</p>
      <div className="flex items-center gap-4">
        {LINKS.map(({ href, label }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-link">{label}</a>)}
      </div>
    </footer>
  );
}
