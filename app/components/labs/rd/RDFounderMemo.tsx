import React from 'react';

export const RDFounderMemo: React.FC = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto bg-graphite/10 border border-foreground/8 rounded-[40px] p-12 md:p-20 relative overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:border-fuchsia-500/30">
                {/* Lab Atmospheric Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
                
                <div className="relative z-10 space-y-12">
                    <div className="flex justify-between items-start">
                        <div className="space-y-4">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-fuchsia-400">Innovation Memo</span>
                            <h3 className="text-4xl md:text-5xl font-serif leading-tight">On Disciplined <span className="italic">Invention.</span></h3>
                        </div>
                        <div className="text-[10px] font-mono text-foreground/20 font-bold hidden md:block">
                            Subject: R&D Discipline // 08
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base font-light text-foreground/60 leading-relaxed">
                        <div className="space-y-8">
                            <p>
                                The most dangerous thing in a startup is a "successful" kitchen prototype that everyone loves. Kitchen successes are built on low-stress environments. Real success is built on surviving the 135°C sterilization of an industrial UHT line without flavor collapse or texture separation.
                            </p>
                            <p>
                                R&D is not where you show off your culinary creativity; it is where you solve for the consumer's emotional reward while respecting the machinery's physical constraints. If you cannot scale it, it's a concept, not a product.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <p>
                                Use AI to synthesize benchmarks and brainstorm adjacencies, but never let it bake the cake. The sensory validation must be human, repeated, and blind. Trust the data from the stability chamber more than the excitement in the kitchen.
                            </p>
                            <p className="text-foreground/80 italic border-l-2 border-fuchsia-500/30 pl-6">
                                "Ideas are cheap. Formulations are expensive. Validated commercial units are rare. Aim for the latter."
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-foreground/8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Hypothesis</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-fuchsia-400/60">Validated</span>
                        </div>
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Sensory</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-fuchsia-400/60">Benchmarked</span>
                        </div>
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Scale-Up</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-fuchsia-400/60">De-Risked</span>
                        </div>
                        <div>
                             <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">commercial</span>
                             <span className="text-xs uppercase tracking-widest font-bold text-fuchsia-400/60">Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
