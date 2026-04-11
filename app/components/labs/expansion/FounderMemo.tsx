import React from 'react';

export const FounderMemo: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto mb-20">
            <div className="bg-white/45 backdrop-blur-sm border border-blue-900/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="#60A5FA">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                </div>

                <div className="relative z-10">
                    <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                        The Operator's Reality
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">Operator Memo: Scale</h3>

                    <div className="space-y-12">
                        {/* Directive 1 */}
                        <div>
                            <h4 className="text-xl font-serif text-blue-400 mb-3">1. Deepen Before Stretching</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Stop brainstorming new baking concepts. Focus entirely on "Core Deepening." Release Wah Vanilla and Café Latte in 12-pack cartons optimized exclusively for household/office pantry stacking. Increase LTV before acquiring new headache streams.
                            </p>
                        </div>

                        {/* Directive 2 */}
                        <div>
                            <h4 className="text-xl font-serif text-blue-400 mb-3">2. Delay The Spoonables</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                Cold-chain yogurt is a brutal, low-margin knife fight in the Indian market. Unless you secure a dominant Q-Commerce partnership to guarantee immediate terminal velocity, hold off on this category.
                            </p>
                        </div>

                        {/* Directive 3 */}
                        <div>
                            <h4 className="text-xl font-serif text-blue-400 mb-3">3. Kiosks Are Marketing, Not Logistics</h4>
                            <p className="text-foreground/70 leading-relaxed font-light">
                                If you build a physical kiosk in a corporate gym, treat its rent budget as pure marketing spend. Do not judge it by its P&L. If the kiosk is not directly converting offline tastings into online D2C subscriptions via QR code, shut it down.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-8 border-t border-blue-900/20 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold flex items-center">System Status: <span className="text-blue-400 ml-3 flex items-center gap-2"><span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" /> Portfolio Logic Secured</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
