import React from 'react';

export const RDHero: React.FC = () => {
    return (
        <section className="relative min-h-[75vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* R&D themed Glows */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-900/[0.05] blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-fuchsia-900/[0.08] blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay border-b border-foreground/5 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-gold/80 px-2 py-0.5 border border-gold/30 rounded bg-gold/5">
                        Step 08
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 inline-block py-2 px-6 border border-foreground/10 rounded-full bg-foreground/5 backdrop-blur-md">
                        Operating System // Labs // R&D & Experimentation
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    Great recipes are <span className="italic text-gold">discovered</span>, not just written.
                </h1>
                
                <div className="pt-8 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        R&D is the disciplined filtering of noise into products. 
                        It is where raw ideas meet benchmarks, hypotheses, and sensory reality to earn their right to scale.
                    </p>
                </div>
            </div>
        </section>
    );
};
