import React from 'react';

export const PackagingHero: React.FC = () => {
    return (
        <section className="relative min-h-[75vh] flex flex-col justify-center py-32 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* Clarity & Safety Glows */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-100/[0.02] blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/[0.04] blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay border-b border-foreground/5 pointer-events-none" />
                
                {/* Cinematic Product Silhouette Backdrop */}
                <div className="absolute opacity-10 blur-xl pointer-events-none right-10 top-1/2 -translate-y-1/2 w-64 h-96 group-hover:blur-3xl transition-all duration-1000">
                     <img 
                        src="/images/products/kesar-pista.png" 
                        alt="Product Silhouette" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-[10px] font-mono font-bold text-gold/80 px-2 py-0.5 border border-gold/30 rounded bg-gold/5">
                        Step 05
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 inline-block py-2 px-6 border border-foreground/10 rounded-full bg-foreground/5 backdrop-blur-md">
                        Operating System // Labs // Perception & Trust
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-balance">
                    Packaging is the product before the product <span className="italic text-gold">is tasted.</span>
                </h1>
                
                <div className="pt-8 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed text-balance">
                        Visual clarity creates credibility. Digestive comfort ensures repeat.
                        If your packaging signals health but your ingredient list screams artificial lab experiment, trust fractures instantly.
                    </p>
                </div>
            </div>
        </section>
    );
};
