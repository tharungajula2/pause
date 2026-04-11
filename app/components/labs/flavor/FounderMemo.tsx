import React from 'react';

export const FounderMemo: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            <div className="bg-white/45 backdrop-blur-sm border border-amber-900/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--color-gold)">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v5.5l4.5 2.5-.8 1.4-5.2-3V6z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                        The Operator's Reality
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Memo: Flavor</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-amber-500 mb-3">1. Protect the Anchor</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Wah Vanilla is the financial engine of the brand. Do not let R&D tamper with the sweetness levels to make it more "exciting." It must remain a blank sensory canvas that users can drink everyday without palate fatigue.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-amber-500 mb-3">2. The Coffee Mandate</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Café Latte is not a flavor; it is a ritual replacement. If it does not successfully replace the user's morning cold brew benchmark, reformulate it. It must be positioned against Starbucks, not against other protein brands.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-amber-500 mb-3">3. Cap The Novelty</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Limit the brand to two "Discovery" flavors per year. Use them to spike awareness and run aggressive top-of-funnel ads, but build your CRM specifically to transition those buyers into Vanilla or Coffee subscribers within 30 days.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-amber-900/20 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold flex items-center">System Status: <span className="text-amber-500 ml-3 flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" /> Sensory Discipline Locked</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
