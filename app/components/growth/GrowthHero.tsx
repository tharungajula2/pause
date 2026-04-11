import React from 'react';

export const GrowthHero: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* Behavioral Flow Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-900/[0.03] blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.03] blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay border-b border-foreground/5 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-gold/80 px-2 py-0.5 border border-gold/30 rounded bg-gold/5">
                        Step 04
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 inline-block py-2 px-6 border border-foreground/10 rounded-full bg-foreground/5 backdrop-blur-md">
                        Operating System // Behavioral Loop Engine
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    Growth begins with the right moment and the <span className="italic text-gold">right message.</span>
                </h1>
                
                <div className="pt-8 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        Trial without routine is fake growth. Premium protein brands do not scale 
                        by screaming features—they scale when their narrative securely attaches the product to 
                        a specific, recurring human occasion.
                    </p>
                </div>
            </div>
        </section>
    );
};
