export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Solidity", "Rust"
];

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  demoLink?: string;
  githubLink?: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'places-to-read',
    title: 'Places to Read',
    description: 'A global repository of high-tranquility reading spots. Built for the modern flâneur seeking silence in chaotic urban environments.',
    year: '2024',
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/saurabh/places-to-read',
    category: 'Product Design'
  },
  {
    id: 'draft',
    title: 'Draft.sh',
    description: 'Experimental documentation tool focused on velocity and high-fidelity collaborative state management. Bridging multiplayer editing with local-first performance.',
    year: '2023',
    demoLink: 'https://draft-demo.example.com',
    githubLink: 'https://github.com/saurabh/draft-sh',
    category: 'Engineering'
  },
  {
    id: 'monochrome',
    title: 'Monochrome OS',
    description: 'A concept design system for an operating system that prioritizes deep work by removing all visual noise and utilizing intention-based navigation.',
    year: '2023',
    githubLink: 'https://github.com/saurabh/monochrome-os',
    category: 'Design System'
  }
];