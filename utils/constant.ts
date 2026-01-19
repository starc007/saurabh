export interface Project {
  id?: string | number;
  title: string;
  description: string;
  year?: string;
  date?: string;
  demo?: string;
  demoLink?: string; // mapping for compatibility
  github?: string;
  githubLink?: string; // mapping for compatibility
  category?: string;
  techStack?: string[];
  tech?: string[]; // variant used in some entries
  image?: string;
  videoLink?: string;
  tag?: string[];
  isDapp?: boolean;
  isWeb2?: boolean;
  isOSS?: boolean;
  isFreelance?: boolean;
}

export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Solidity", "Rust"
];

// Mapping helper to ensure consistency
const mapProject = (p: Project): Project => ({
  ...p,
  year: p.date ? p.date.split(',')[1]?.trim() || p.date : '2024',
  demoLink: p.demo || p.demoLink,
  githubLink: p.github || p.githubLink,
  category: p.tag ? p.tag.join(' / ') : (p.category || 'Engineering')
});

export const RECENT_PROJECTS: Project[] = [
  {
    id: 26,
    title: "Draft",
    description: "A fast, privacy-focused local-first notes app for developers and content creators",
    techStack: ["React", "Tailwindcss", "Zustand", "Rust", "Sqlite", "Tauri"],
    demo: "https://usedraft.app",
    github: "https://usedraft.app",
    image: "/draft.png",
    videoLink: "",
    date: "Jan, 2026",
    tag: ["Personal"],
  },
  {
    id: 26,
    title: "Solana Trading Bot",
    description: "A Solana-based trading bot that automatically monitors and trade trending tokens of Dexscreener using Jupiter's API.",
    techStack: ["Typescript", "Puppeteer", "Nodejs", "@solana/web3.js"],
    demo: "https://github.com/starc007/solana-trading-bot",
    github: "https://github.com/starc007/solana-trading-bot",
    image: "/sol-trading.png",
    videoLink: "",
    date: "Aug, 2025",
    tag: ["Personal"],
  },
  {
    id: -3,
    title: "Wave Games",
    description: "Multiplayer play 2 earn games on Solana. Play with friends and win SOL",
    techStack: ["Nextjs", "Solana", "Tailwindcss", "Nodejs"],
    demo: "https://games.usewave.app",
    github: "",
    image: "/sayhi.png",
    videoLink: "https://x.com/saurra3h/status/1928822868193730740",
    date: "May, 2025",
    tag: ["Personal"],
  },
  {
    id: -3,
    title: "Wave App",
    description: "Social Wallet App on Solana. The best way to hang out on your phone. Send messages and crypto payments seamlessly.",
    techStack: ["React Native", "Solana", "Zustand", "Nodejs"],
    demo: "https://usewave.app",
    github: "https://github.com/usewave",
    image: "/sayhi.png",
    videoLink: "",
    date: "May, 2025",
    tag: ["Personal"],
  },
].map(mapProject);

export const ALL_PROJECTS: Project[] = [
  {
    title: "NodeOps Website",
    description: "Built all the components for the website from scratch. Added animations using Framer Motion",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    demo: "https://nodeops.network/",
    github: "https:/nodeops.network/",
    isDapp: true,
    videoLink: "",
    tag: ["Curr. Organization"],
  },
  {
    title: "NodeOps Portal",
    description: "Built the UI for the entire product from scratch. Created Resuable UI components, integrated web3 wallets, integrated smart contracts, added animations using Framer Motion",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "@solana/web3.js", "wagmi", "zustand", "ethers"],
    demo: "https://portal.nodeops.network/",
    github: "https://portal.nodeops.network/",
    isDapp: true,
    videoLink: "",
    tag: ["Curr. Organization"],
  },
  {
    title: "Stylr ",
    description: "Make your beautiful forms in one click. Launched in Aug, 2024, got 500+ users in 1 month.",
    tech: ["Next.js", "TailwindCSS", "Nodejs", "Express", "Framer Motion"],
    demo: "https://www.stylr.xyz/",
    github: "https://www.stylr.xyz/",
    isWeb2: true,
    videoLink: "https://x.com/saurra3h/status/1823375367081738640",
    tag: ["Personal", "SaaS"],
  },
  {
    title: "walletwit",
    description: "Smart crypto analytics with a humorous twist. Track transactions, balances,and more in a fun and simplified way. Built this in Talent Olympics 2024.",
    tech: ["Next.js", "TailwindCSS", "Solana"],
    demo: "https://walletwit.vercel.app/",
    github: "https://github.com/starc007/walletwit",
    isDapp: true,
    videoLink: "",
    tag: ["Personal", "Hackathon"],
  },
  {
    title: "Sanchar",
    description: "A Professional Networking Platform. Used by 3000+ users. Built this product from scratch. (Frontend + Backend)",
    tech: ["Nextjs", "Typescript", "Tailwindcss", "Nodejs"],
    github: "https://github.com/starc007/piqr-frontend",
    demo: "https://sanchar.xyz",
    videoLink: "",
    isWeb2: true,
    tag: ["Personal", "Startup"],
  },
  {
    title: "beUi",
    description: "Build better, build faster. A collection of free UI components & templates for your next project.",
    github: "https://github.com/starc007/ui-components",
    demo: "https://beui.saura3h.xyz",
    tech: ["React", "Typescript", "Tailwindcss", "Framer Motion"],
    isOSS: true,
    videoLink: "",
    tag: ["Personal", "Open Source"],
  },
  {
    title: "Vakya AI Extension",
    description: "An AI extension that helps you to write coverletter in upwork and freelancer.",
    github: "https://chrome.google.com/webstore/detail/vakya-your-ai-assistant/dhlkjfbdgcljpkcbmagccimbeolgiane",
    demo: "https://chrome.google.com/webstore/detail/vakya-your-ai-assistant/dhlkjfbdgcljpkcbmagccimbeolgiane",
    tech: ["Javascript", "React", "Tailwindcss", "Webpack"],
    videoLink: "",
    isWeb2: true,
    tag: ["Personal", "Freelance"],
  },
].map(mapProject);

export const PROJECTS = RECENT_PROJECTS; // Default fallback



export const BIO_DATA = `
Saurabh is a Design Engineer focused on the intersection of visual precision and software performance. 
He builds high-performance tools for developers and crypto-native experiences.
Currently based in India, GMT+5:30.
Professional history includes tenure at NodeOps (Current), Playota, and various freelance engagements with Polygon and Powerloom.
Specialized in React, Next.js, Framer Motion, and Rust.
Tone of Voice: Calm, precise, slightly poetic, confident but humble.
`;