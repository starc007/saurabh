import { Github, Linkedin, Mail, Twitter } from 'lucide-react'


const Footer = () => {
    return (
        <footer className="pt-24 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-6">
                <div className="flex gap-8">
                    <a href="https://x.com/saurra3h" className="text-foreground/20 hover:text-accent transition-all hover:-translate-y-1"><Twitter size={18} /></a>
                    <a href="https://github.com/starc007" className="text-foreground/20 hover:text-accent transition-all hover:-translate-y-1"><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/starc007" className="text-foreground/20 hover:text-accent transition-all hover:-translate-y-1"><Linkedin size={18} /></a>
                    <a href="mailto:saurabh10102@gmail.com" className="text-foreground/20 hover:text-accent transition-all hover:-translate-y-1"><Mail size={18} /></a>
                </div>
                <p className="text-[10px] font-mono text-foreground/50 leading-relaxed max-w-[200px] uppercase tracking-tighter">
                    Crafted in silence, published in the open.
                </p>
            </div>

            <div className="text-right">
                <div className="text-[9px] font-mono text-foreground/50 tracking-[0.4em] uppercase mb-1.5">Build Better Things</div>
                <div className="text-[9px] font-mono text-foreground/50 tracking-tighter uppercase opacity-50">
                    © 2024 SAURABH
                </div>
            </div>
        </footer>
    )
}

export default Footer