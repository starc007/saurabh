import type { ReactNode } from "react";

export default function CustomSection({ title, children, id, className = "" }: {
  title: string; children: ReactNode; id?: string; className?: string;
}) {
  return (
    <section className={`portfolio-section enter ${className}`} id={id}>
      <h2 className="eyebrow mb-4">{title}</h2>
      {children}
    </section>
  );
}
