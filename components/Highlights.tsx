import { ArrowUpRight, Check, MousePointer2, Plus } from "lucide-react";

export default function Highlights() {
  return (
    <section className="portfolio-section enter" aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="eyebrow mb-4">A few things I’ve made</h2>
      <div className="highlight-grid">
        <a href="https://beui.dev" target="_blank" rel="noopener noreferrer" className="highlight" data-preview-title="beUI" data-preview-description="Open-source motion components for React and Next.js." data-preview-detail="React · Motion · Tailwind CSS">
          <div className="highlight-art component-art" aria-hidden="true">
            <div className="sample-toolbar"><span><Plus size={17} /></span><span className="sample-selected"><Check size={17} /></span><span><MousePointer2 size={16} /></span></div>
            <span className="art-caption">A little interaction. A lot of care.</span>
          </div>
          <div className="highlight-caption"><span><strong>beUI</strong><small>Components with a little personality</small></span><ArrowUpRight size={15} /></div>
        </a>
        <a href="https://pro.beui.dev" target="_blank" rel="noopener noreferrer" className="highlight" data-preview-title="beUI Pro" data-preview-description="Production-ready motion components and blocks for React and Next.js." data-preview-detail="Design · Development · Motion">
          <div className="highlight-art composition-art" aria-hidden="true">
            <div className="mini-composition"><div className="mini-sidebar"><i /><i /><i /></div><div className="mini-content"><span className="mini-title"/><div className="mini-cards"><i/><i/></div><span className="mini-line"/><span className="mini-line short"/></div></div>
            <span className="art-caption">From the details to the whole.</span>
          </div>
          <div className="highlight-caption"><span><strong>beUI Pro</strong><small>Interfaces, ready to make your own</small></span><ArrowUpRight size={15} /></div>
        </a>
      </div>
    </section>
  );
}
