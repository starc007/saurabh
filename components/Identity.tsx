import CustomSection from "./CustomSection";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";

const Identity = () => {
  return (
    <CustomSection title="About">
      <div className="space-y-8">
        <p className="text-[15px] text-foreground/50 leading-relaxed">
          I’m a developer who likes{" "}
          <span className="text-foreground font-medium">building products</span>{" "}
          and{" "}
          <span className="text-foreground font-medium">
            experimenting with ideas.{" "}
          </span>{" "}
          I’m currently working on{" "}
          <a
            href="https://usedraft.app"
            target="_blank"
            className="text-foreground font-medium underline"
          >
            Draft
          </a>{" "}
          and enjoy chatting about tech, startups, and anime. Open to
          collaborations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-2xl border border-foreground/5 hover:border-accent/40 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-accent/10 transition-colors">
                <FileText
                  size={16}
                  className="text-foreground/50 group-hover:text-accent"
                />
              </div>
              <div>
                <div className="text-[12px] font-bold text-foreground uppercase tracking-wider">
                  Resume
                </div>
                <div className="text-[10px] text-foreground/50">
                  Download CV
                </div>
              </div>
            </div>
            <ArrowUpRight
              size={14}
              className="text-foreground/50 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>

          <a
            href="https://cal.com/saurra3h/30min"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-2xl border border-foreground/5 hover:border-accent/40 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-accent/10 transition-colors">
                <Calendar
                  size={16}
                  className="text-foreground/50 group-hover:text-accent"
                />
              </div>
              <div>
                <div className="text-[12px] font-bold text-foreground uppercase tracking-wider">
                  Meet
                </div>
                <div className="text-[10px] text-foreground/50">
                  Schedule a call
                </div>
              </div>
            </div>
            <ArrowUpRight
              size={14}
              className="text-foreground/50 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        </div>
      </div>
    </CustomSection>
  );
};

export default Identity;
