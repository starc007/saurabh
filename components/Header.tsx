import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className="mb-24" id="home">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
            >
                <div>
                    <h1 className="text-2xl font-bold text-foreground tracking-tighter mb-1">Saurabh.</h1>
                    <p className="text-[13px] text-foreground/50 font-medium tracking-tight font-serif italic">
                        Design Engineer <span className="text-foreground mx-2">—</span> Product Builder
                    </p>
                </div>

                <div className="text-[18px] text-foreground/50 leading-[1.5] max-w-[540px] text-balance">
                    Crafting premium digital experiences through the lens of <span className="font-serif italic text-foreground text-2xl underline decoration-background underline-offset-8 decoration-1">high-fidelity engineering</span> and deliberate design.
                </div>
            </motion.div>
        </header>
    )
}

export default Header