import React from 'react';

export const QuickCommerceThesis: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-5xl mx-auto">
            <div className="relative border border-amber-900/10 bg-graphite/40 backdrop-blur-md rounded-[2.5rem] p-10 md:p-20 overflow-hidden group shadow-sm">
                {/* Tension Glows */}
                <div className="absolute top-0 right-0 w-full h-[500px] bg-amber-500/[0.04] blur-[100px] group-hover:bg-amber-500/[0.08] transition-colors duration-1000 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-700/80 mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" /> Dark Store Logic
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                        Quick Commerce is a <span className="italic text-amber-600">search engine</span>, not a grocery store.
                    </h3>

                    <p className="text-xl text-foreground/60 font-light max-w-3xl leading-relaxed mb-12">
                        Users do not browse 10-minute delivery apps to discover new brand narratives; they are executing an immediate situational rescue. 
                        If the product thumbnail and name do not instantly solve "I am tired" or "I need protein post-gym," you will not convert.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-foreground/10 pt-12">
                        <div>
                            <h5 className="font-serif text-lg text-amber-700/90 mb-2">The Visibility Trap</h5>
                            <p className="text-sm font-light text-foreground/50 leading-relaxed">
                                Physical retail allows for label reading. Q-Commerce operates on 150x150px thumbnails. If "20g Protein" and the flavor cue aren't massive, the scroll continues.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-serif text-lg text-amber-700/90 mb-2">The Margin Bleed</h5>
                            <p className="text-sm font-light text-foreground/50 leading-relaxed">
                                Dark stores exist to acquire users. With 40% platform margins, every single-unit sale loses money. If the product lacks an unboxing mechanism to convert them to a D2C subscriber later, you are subsidizing the platform's growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
