import React from 'react';

export const RepeatVsNoveltyLayer: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-foreground/10 bg-white/45 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-20 overflow-hidden text-center group">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/[0.03] blur-[120px] group-hover:bg-red-900/[0.1] transition-colors duration-1000 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/50 border border-foreground/10 px-4 py-2 rounded-full mb-12 bg-background/50 backdrop-blur-md">
                        Portfolio Discipline
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif text-balance leading-tight mb-8">
                        Flavor excitement is an <span className="italic text-red-400">acquisition trap.</span>
                    </h3>

                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl text-balance leading-relaxed mb-12">
                        Founders often get bored of their own Vanilla and Chocolate SKUs. 
                        They launch "Strawberry Cheesecake" to generate Instagram hype. 
                        The hype works. The trial spikes. But nobody wants to drink Strawberry Cheesecake every single morning at 7 AM. Churn skyrockets.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 w-full border-t border-foreground/10 pt-12">
                         <div className="md:w-1/2 text-left">
                             <h4 className="text-gold font-serif text-lg mb-2">The Utility Anchor</h4>
                             <p className="text-sm text-foreground/50 font-light">
                                 Your best-selling flavor should be relatively boring. It must act as a blank canvas for the consumer's daily routine—easy to mix with coffee, fruit, or oats.
                             </p>
                         </div>
                         <div className="md:w-1/2 text-left">
                             <h4 className="text-red-400 font-serif text-lg mb-2">The Bait Product</h4>
                             <p className="text-sm text-foreground/50 font-light">
                                 Novelty flavors exist strictly to stop the scroll and acquire a user. Once they are in the ecosystem, you must migrate their subscription to the Utility Anchor immediately.
                             </p>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
