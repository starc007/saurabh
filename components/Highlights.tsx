import HighlightsHeading from "./HighlightsHeading";

const highlights = [
  {
    title: "Tracwell",
    domain: "tracwell.app",
    description: "Website & product analytics",
    detail: "Website and product analytics that connect traffic, signups, and revenue.",
    image: "/projects/tracwell.png",
    width: 1280,
    height: 720,
    launch: "Launched September 2026",
    date: "Sep 2026",
  },
  {
    title: "beUI",
    date: "2026",
    domain: "beui.dev",
    description: "Open-source motion components",
    detail: "Open-source motion components for React and Next.js.",
    image: "/projects/beui.png",
    width: 1280,
    height: 720,
  },
  {
    title: "beUI Pro",
    date: "2026",
    domain: "pro.beui.dev",
    description: "Premium components & templates",
    detail: "Production-ready motion components and blocks for React and Next.js.",
    image: "/projects/beui-pro.png",
    width: 1280,
    height: 800,
  },
];

export default function Highlights() {
  return (
    <section className="portfolio-section highlights-section enter" aria-labelledby="highlights-title">
      <HighlightsHeading />
      <div className="highlight-grid">
        {highlights.map(project => (
          <a
            key={project.domain}
            href={`https://${project.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
            data-preview-title={project.title}
            data-preview-description={project.detail}
            data-preview-detail={project.launch ?? project.domain}
          >
            <div className="highlight-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={`${project.title} website screenshot`} width={project.width} height={project.height} className="highlight-screenshot" loading="lazy" />
            </div>
            <div className="highlight-caption">
              <div className="highlight-heading">
                <h3>{project.title}</h3>
                <span className="highlight-date">{project.date}</span>
              </div>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
