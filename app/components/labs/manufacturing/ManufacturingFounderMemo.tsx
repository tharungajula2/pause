import React from 'react';

export const ManufacturingFounderMemo: React.FC = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto bg-graphite/10 border border-foreground/8 rounded-[40px] p-12 md:p-20 relative overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:border-gold/30">
                {/* Tactical Atmospheric Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
                
                <div className="relative z-10 space-y-12">
                    <div className="flex justify-between items-start">
                        <div className="space-y-4">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Director's Memo</span>
                            <h3 className="text-4xl md:text-5xl font-serif leading-tight">On Validating <span className="italic">Reality.</span></h3>
                        </div>
                        <div className="text-[10px] font-mono text-foreground/20 font-bold hidden md:block">
                            Subject: Manufacturing Readiness // 07
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base font-light text-foreground/60 leading-relaxed">
                        <div className="space-y-8">
                            <p>
                                Every founder begins in the kitchen or with a small lab blender. That environment is a sanctuary of control. The jump to a 50l pilot run is a 10x shock; the jump to a 5,000l commercial line is a 100x shock.
                            </p>
                            <p>
                                Manufacturing is where "premium" branding is frequently diluted in the search for yield. If a stabilizer kills flavor, or if homogenization breaks mouthfeel, the most expensive marketing in the world cannot save the repeat rate.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <p>
                                The operator's discipline is not in finding a factory, but in understanding the machine's constraints before the recipe is locked. High MOQ is a bet on your distribution speed; batch yield is a bet on your unit margins. 
                            </p>
                            <p className="text-foreground/80 italic border-l-2 border-gold/30 pl-6">
                                "The best manufacturers are partners in strategy. The worst are just landlords of machinery. Choose accordingly."
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-foreground/8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Validated</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-gold/60">Formula Tech</span>
                        </div>
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Audited</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-gold/60">Line Stability</span>
                        </div>
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Verified</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-gold/60">MOQ Viability</span>
                        </div>
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Certified</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-gold/60">Operator Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
