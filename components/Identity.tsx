import React from 'react'
import CustomSection from './CustomSection'
import { ArrowUpRight, Calendar, FileText } from 'lucide-react'

const Identity = () => {
    return (
        <CustomSection title="Identity">
            <div className="space-y-8">
                <p className="text-[15px] text-foreground/50 leading-relaxed">
                    I specialize in bridging the gap between <span className="text-foreground font-medium">visionary design</span> and <span className="text-foreground font-medium">performant code</span>. Currently obsessed with the future of human-computer interaction and generative interfaces.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center justify-between p-4 rounded-2xl border border-foreground/5 hover:border-accent/40 transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-accent/10 transition-colors">
                                <FileText size={16} className="text-foreground/50 group-hover:text-accent" />
                            </div>
                            <div>
                                <div className="text-[12px] font-bold text-foreground uppercase tracking-wider">Resume</div>
                                <div className="text-[10px] text-foreground/50">Download CV</div>
                            </div>
                        </div>
                        <ArrowUpRight size={14} className="text-foreground/50 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>

                    <a
                        href="https://calendly.com"
                        target="_blank"
                        className="flex items-center justify-between p-4 rounded-2xl border border-foreground/5 hover:border-accent/40 transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-accent/10 transition-colors">
                                <Calendar size={16} className="text-foreground/50 group-hover:text-accent" />
                            </div>
                            <div>
                                <div className="text-[12px] font-bold text-foreground uppercase tracking-wider">Meet</div>
                                <div className="text-[10px] text-foreground/50">Schedule a call</div>
                            </div>
                        </div>
                        <ArrowUpRight size={14} className="text-foreground/50 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                </div>
            </div>
        </CustomSection>
    )
}

export default Identity