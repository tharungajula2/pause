import React from 'react';

export const ExpansionHero: React.FC = () => {
    return (
        <section className="relative min-h-[75vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* Vast Horizon Glows */}
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-teal-400/[0.06] blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gold/[0.06] blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay border-b border-foreground/5 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-teal-600/80 px-2 py-0.5 border border-teal-600/30 rounded bg-teal-600/5">
                        Step 07
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 inline-block py-2 px-6 border border-foreground/10 rounded-full bg-foreground/5 backdrop-blur-md">
                        Operating System // Labs // Adjacency Strategy
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    Expansion is where brands either compound or <span className="italic text-teal-600/80">fragment.</span>
                </h1>
                
                <div className="pt-8 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        More SKUs do not equal a stronger brand. 
                        Every new format, occasion, or channel introduces a massive operational burden. The next product must strengthen the core system, not distract from it.
                    </p>
                </div>
            </div>
        </section>
    );
};
