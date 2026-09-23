import HighlightsHeading from "./HighlightsHeading";

const highlights = [
  {
    title: "Tracwell",
    domain: "tracwell.app",
    description: "Website & product analytics",
    image: "/projects/tracwell.png",
    width: 1280,
    height: 720,
    date: "Sep 2026",
  },
  {
    title: "beUI",
    date: "2026",
    domain: "beui.dev",
    description: "Open-source motion components",
    image: "/projects/beui.png",
    width: 1280,
    height: 720,
  },
  {
    title: "beUI Pro",
    date: "2026",
    domain: "pro.beui.dev",
    description: "Premium components & templates",
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
