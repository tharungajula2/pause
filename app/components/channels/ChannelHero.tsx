import React from 'react';

export const ChannelHero: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* Channel Route / Architecture Glows */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/[0.04] blur-[100px] rounded-full" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/[0.03] blur-[100px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay border-b border-foreground/5 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-gold/80 px-2 py-0.5 border border-gold/30 rounded bg-gold/5">
                        Step 03
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 inline-block py-2 px-6 border border-foreground/10 rounded-full bg-foreground/5 backdrop-blur-md">
                        Operating System // Route Architecture
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    Where a product sells shapes <span className="italic text-gold">why it wins.</span>
                </h1>
                
                <div className="pt-8 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        Channel is not just distribution—it is behavior. 
                        A SKU that generates habitual repeat in a D2C pantry-stocking frame may be completely ignored on the impulse shelf of a modern retail aisle.
                    </p>
                </div>
            </div>
        </section>
    );
};
