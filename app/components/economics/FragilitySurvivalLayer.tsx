import React from 'react';

export const FragilitySurvivalLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            <div className="bg-red-500/[0.03] border border-red-500/20 rounded-3xl p-10 md:p-16 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--color-red-600)">
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-600/60 inline-block mb-6">OS Directives</span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Memo: Fragility</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-red-600 mb-3">1. The RTD Delivery Paradox</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Liquid formats are incredibly heavy per unit of value. D2C shipping for a 12-pack of shakes will completely consume the gross margin unless AOV is pushed above $60. Do not optimize RTD launches for impulse D2C trialing; push users immediately to multi-case subscription logic.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-red-600 mb-3">2. The Margin Squeeze of Quick Commerce</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Dark stores and 10-minute delivery apps demand 35-45% margin. Selling a single RTD bottle on these platforms is a negative-margin exercise meant purely for discovery. Ensure packaging leads the consumer back to the localized brand ecosystem for their standard monthly supply.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-red-600 mb-3">3. Pack Architecture Defines Survival</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Why sell 6 bars when you can sell 12? The fulfillment pick-and-pack fee is identical, but the margin profile transforms completely. Refuse to launch trial-sized D2C packs if the blended shipping and handling costs exceed 30% of the basket value.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-red-500/20 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold flex items-center">System Status: <span className="text-red-600 ml-3 flex items-center gap-2"><span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" /> Margin Stress Detected</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
