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
  users?: number;
}

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Node.js",
  "Solidity",
  "Rust",
  "Cloudflare",
];

// Mapping helper to ensure consistency
const mapProject = (p: Project): Project => ({
  ...p,
  year: p.date ? p.date.split(",")[1]?.trim() || p.date : "2024",
  demoLink: p.demo || p.demoLink,
  githubLink: p.github || p.githubLink,
  category: p.tag ? p.tag.join(" / ") : p.category || "Engineering",
});

export const RECENT_PROJECTS: Project[] = [
  {
    id: 133,
    title: "StealthPay",
    description:
      "Stealth address protocol on Tempo (EVM) implementing EIP-5564 & EIP-6538. Send crypto privately - receiver publishes a stealth meta-address, sender derives a one-time address. Includes Solidity contracts, TypeScript SDK, and an MPP-gated API.",
    techStack: [
      "Solidity",
      "Typescript",
      "Foundry",
      "Cloudflare Workers",
      "Hono",
    ],
    github: "https://github.com/starc007/stealthpay",
    image: "/draft.png",
    date: "Mar, 2026",
    tag: ["Personal", "Hackathon"],
  },
  // {
  //   id: 134,
  //   title: "frenlog",
  //   description:
  //     "A shared social feed for AI agents. Agents (Claude, Cursor, Codex) post learnings and task completions as markdown. Built with Bun, Hono, Cloudflare Workers, and D1.",
  //   techStack: ["Bun", "Hono", "Cloudflare Workers", "D1", "Next.js"],
  //   github: "https://github.com/starc007/frenlog",
  //   image: "/draft.png",
  //   date: "Mar, 2026",
  //   tag: ["Personal", "Open Source"],
  // },
  {
    id: 135,
    title: "mppx-proxy / mpp-solana",
    description:
      "Open-source MPP ecosystem tools. mppx-proxy is a self-hosted reverse proxy enabling AI agents to access any HTTP service via wallet-based identity and micropayments. mpp-solana bridges MPP payments to the Solana network.",
    techStack: ["Typescript", "Nodejs", "Solana", "MPP"],
    github: "https://github.com/starc007/mppx-proxy",
    image: "/draft.png",
    date: "Feb, 2026",
    tag: ["Personal", "Open Source"],
  },
  {
    id: 132,
    title: "Crev",
    description:
      "AI code review from the command line. Runs locally via Ollama or with any cloud LLM.",
    techStack: ["Rust", "Ollama", "Sqllite"],
    github: "https://github.com/starc007/crev",
    image: "/draft.png",
    videoLink: "",
    date: "Mar, 2026",
    tag: ["Personal"],
  },
  {
    id: 1332,
    title: "deadcheck",
    description:
      "Fast dead code detector for JavaScript and TypeScript projects .",
    techStack: ["Rust"],
    github: "https://github.com/starc007/deadcheck",
    image: "/draft.png",
    videoLink: "",
    date: "Mar, 2026",
    tag: ["Personal"],
  },
  {
    id: 1332,
    title: "browser-sandbox",
    description:
      "Preview AI-generated code in the browser. No server, no Node, no local build. Built for quickly rendering and iterating on generated Vite-style projects.",
    techStack: ["Typescript"],
    github: "https://github.com/starc007/browser-sandbox",
    image: "/draft.png",
    videoLink: "",
    date: "Feb, 2026",
    tag: ["Personal"],
  },
  {
    id: 1,
    title: "Draft",
    description:
      "A fast, privacy-focused local-first notes app for developers and content creators",
    techStack: ["React", "Tailwindcss", "Zustand", "Rust", "Sqlite", "Tauri"],
    demo: "https://usedraft.app",
    image: "/draft.png",
    videoLink: "",
    date: "Jan, 2026",
    tag: ["Personal"],
  },
  {
    id: 2,
    title: "Solana Trading Bot",
    description:
      "A Solana-based trading bot that automatically monitors and trade trending tokens of Dexscreener using Jupiter's API.",
    techStack: ["Typescript", "Puppeteer", "Nodejs", "@solana/web3.js"],
    demo: "https://github.com/starc007/solana-trading-bot",
    github: "https://github.com/starc007/solana-trading-bot",
    image: "/sol-trading.png",
    videoLink: "",
    date: "Aug, 2025",
    tag: ["Personal"],
  },
  {
    id: 3,
    title: "Wave App",
    description:
      "Social Wallet App on Solana. The best way to hang out on your phone. Send messages and crypto payments seamlessly.",
    techStack: ["React Native", "Solana", "Zustand", "Nodejs"],
    demo: "https://usewave.app",
    github: "https://github.com/usewave",
    image: "/sayhi.png",
    videoLink: "",
    date: "May, 2025",
    tag: ["Personal"],
    users: 300,
  },
  {
    id: 4,
    title: "Wave Games",
    description:
      "Multiplayer play 2 earn games on Solana. Play with friends and win SOL",
    techStack: ["Nextjs", "Solana", "Tailwindcss", "Nodejs"],
    demo: "https://games.usewave.app",
    github: "",
    image: "/sayhi.png",
    videoLink: "https://x.com/saurra3h/status/1928822868193730740",
    date: "May, 2025",
    tag: ["Personal"],
    users: 200,
  },
  {
    id: 5,
    title: "DateMate",
    description:
      "A Telegram bot that helps users find and match with potential partners. Launched in Feb, 2025, got 200+ users in 3 days.",
    techStack: ["Reactjs", "Fuel", "Simplewebauthn", "Nodejs"],
    demo: "https://t.me/DateMateHQ_bot",
    github: "http://github.com/starc007/dateMate",
    image: "/sayhi.png",
    videoLink: "",
    date: "Feb, 2025",
    tag: ["Personal"],
    users: 1100,
  },
  {
    id: 6,
    title: "GhostKey",
    description:
      "A privacy-focused wallet for the Fuel Network that generates unique addresses for each dApp connection. NEVER REVEAL YOUR MAIN WALLET TO ANYONE.",
    techStack: ["Reactjs", "Fuel", "Simplewebauthn", "Nodejs"],
    demo: "",
    github: "https://github.com/starc007/fuel-ghost-wallet/",
    image: "/sayhi.png",
    videoLink: "https://x.com/saurra3h/status/1885227733451759708",
    date: "Jan, 2025",
    tag: ["Personal"],
  },
].map(mapProject);

export const ALL_PROJECTS: Project[] = [
  {
    id: 0,
    title: "SayHi",
    description:
      "A chrome extension that helps generate personalized conversation starters for Twitter/X profiles using AI. Launched in Jan, 2025, got 10+ users in 1 day.",
    techStack: ["Typescript", "Reactjs", "Tailwindcss"],
    demo: "https://chromewebstore.google.com/detail/sayhi-twitter-conversatio/aclgcccecbcbmgnhgpiagboppajfpfmi?authuser=0&hl=en-GB",
    github: "https://github.com/starc007/sayhi",
    image: "/sayhi.png",
    videoLink: "https://x.com/saurra3h/status/1873391948280852914",
    tag: ["Personal"],
    date: "Dec, 2024",
  },
  {
    id: 2,
    title: "myIntro",
    description:
      "Unlock Your Network's Hidden Potential - Find warm introductions on Twitter in seconds",
    techStack: ["React", "Typescript", "Tailwindcss", "Nodejs", "MongoDB"],
    demo: "https://myintro.vercel.app",
    github: "",
    image: "/myIntro.png",
    videoLink: "https://x.com/saurra3h/status/1835008256466460834",
    tag: ["Personal"],
    date: "Dec, 2024",
  },
  {
    id: 3,
    title: "Love Language",
    description:
      "Love Language is a fun, love-themed programming language that brings romance to coding! Express your algorithms with affection using love-themed keywords and operators.",
    techStack: ["Rust"],
    demo: "https://github.com/starc007/love-language/",
    github: "https://github.com/starc007/love-language/",
    image: "/love-language.png",
    videoLink: "https://x.com/saurra3h/status/1854868774161137762",
    tag: ["Personal"],
    date: "Nov, 2024",
  },
  {
    id: 4,
    title: "EchoId",
    description:
      "EchoId is a Solana-based decentralized identity system enabling user-owned, cross-chain identities with compressed metadata and integrated reputation. This project is built using the Anchor framework. Built this in Solana Radar Hackathon 2024.",
    techStack: ["Rust", "React", "Solana", "Nodejs"],
    demo: "https://www.echoid.xyz/",
    github: "https://github.com/starc007/echo-id-contract",
    image: "/img-compression.png",
    videoLink: "",
    tag: ["Personal", "Hackathon"],
    date: "Oct, 2024",
  },
  {
    id: 5,
    title: "Image Compressor - Rust",
    description:
      "A command-line tool for compressing and resizing images in bulk. This tool can process entire directories, including nested folders, and maintains the original folder structure in the output.",
    techStack: ["Rust"],
    demo: "https://github.com/starc007/Image-compression",
    github: "https://github.com/starc007/Image-compression",
    image: "/img-compression.png",
    videoLink: "https://x.com/saurra3h/status/1832036469147332662",
    tag: ["Personal"],
    date: "Sept, 2024",
  },
  {
    id: 6,
    title: "BenGrid ",
    description: "Open-source tool to create and export bento grid layouts",
    techStack: ["Next.js", "TailwindCSS"],
    demo: "https://tailwind-bento.vercel.app/",
    github: "https://github.com/starc007/tailwind-bento",
    isOSS: true,
    isWeb2: true,
    videoLink: "",
    tag: ["Personal"],
    date: "Dec, 2024",
  },
  {
    title: "Stylr ",
    description:
      "Make your beautiful forms in one click. Launched in Aug, 2024, got 500+ users in 1 month.",
    techStack: ["Next.js", "TailwindCSS", "Nodejs", "Express", "Framer Motion"],
    demo: "https://www.stylr.xyz/",
    github: "https://www.stylr.xyz/",
    isWeb2: true,
    videoLink: "https://x.com/saurra3h/status/1823375367081738640",
    tag: ["Personal", "SaaS"],
    users: 450,
    date: "Aug, 2024",
  },
  {
    title: "walletwit",
    description:
      "Smart crypto analytics with a humorous twist. Track transactions, balances,and more in a fun and simplified way. Built this in Talent Olympics 2024.",
    techStack: ["Next.js", "TailwindCSS", "Solana"],
    demo: "https://walletwit.vercel.app/",
    github: "https://github.com/starc007/walletwit",
    isDapp: true,
    videoLink: "",
    tag: ["Personal", "Hackathon"],
    date: "July, 2024",
  },
  {
    title: "Sanchar",
    description:
      "A Professional Networking Platform. Used by 5000+ users. Built this product from scratch. (Frontend + Backend)",
    techStack: ["Nextjs", "Typescript", "Tailwindcss", "Nodejs"],
    github: "https://github.com/starc007/piqr-frontend",
    demo: "https://sanchar.xyz",
    videoLink: "",
    isWeb2: true,
    tag: ["Personal", "Startup"],
    users: 5000,
    date: "June, 2023",
  },
  {
    title: "beUi",
    description:
      "Build better, build faster. A collection of free UI components & templates for your next project.",
    github: "https://github.com/starc007/ui-components",
    demo: "https://beui.saura3h.xyz",
    techStack: ["React", "Typescript", "Tailwindcss", "Framer Motion"],
    isOSS: true,
    videoLink: "",
    tag: ["Personal", "Open Source"],
    date: "June, 2024",
  },
  {
    id: 7,
    title: "Readmi",
    description:
      "A Open Source Github readme builder. Use prebuilt templates, sections or create a new one.",
    techStack: ["React", "Typescript", "Tailwindcss"],
    github: "https://github.com/starc007/readmi",
    demo: "https://readmi.xyz/",
    isOSS: true,
    videoLink: "",
    tag: ["Personal", "Open Source"],
    date: "Nov, 2022",
  },
  {
    title: "Vakya AI Extension",
    description:
      "An AI extension that helps you to write coverletter in upwork and freelancer.",
    github:
      "https://chrome.google.com/webstore/detail/vakya-your-ai-assistant/dhlkjfbdgcljpkcbmagccimbeolgiane",
    demo: "https://chrome.google.com/webstore/detail/vakya-your-ai-assistant/dhlkjfbdgcljpkcbmagccimbeolgiane",
    tech: ["Javascript", "React", "Tailwindcss", "Webpack"],
    videoLink: "",
    isWeb2: true,
    tag: ["Personal", "Freelance"],
    date: "May, 2023",
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
