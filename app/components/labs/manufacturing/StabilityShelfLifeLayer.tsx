import React from 'react';
import { stabilityRisks } from '../../../data/manufacturing';

export const StabilityShelfLifeLayer: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 space-y-10">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Integrity Auditing</span>
                        <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Stability is a <span className="italic text-gold">business function.</span></h3>
                        <p className="text-foreground/50 text-lg font-light leading-relaxed">
                            A product that separates, seditments, or drifts in flavor within 3 months is a strategic failure. Manufacturing design must prioritize shelf-stability over simple recipe success.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {stabilityRisks.map(risk => (
                            <div key={risk.id} className="p-8 bg-white/45 backdrop-blur-sm border border-foreground/5 rounded-2xl group hover:border-red-500/20 transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-serif text-foreground group-hover:text-red-400 transition-colors">{risk.issue}</h4>
                                    <span className="text-[8px] uppercase tracking-widest font-bold text-red-500/40 border border-red-500/10 px-2 py-0.5 rounded">Risk Factor</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-foreground/5">
                                    <div>
                                        <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 block mb-2">Root Cause</span>
                                        <p className="text-xs font-light text-foreground/60 leading-relaxed">{risk.rootCause}</p>
                                    </div>
                                    <div>
                                        <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/30 block mb-2">Preventative Action</span>
                                        <p className="text-xs font-light text-foreground/60 leading-relaxed italic">"{risk.prevention}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 relative aspect-square max-w-xl">
                    {/* Visual metaphor for stability layers */}
                    <div className="absolute inset-0 flex flex-col gap-1 justify-center rotate-12">
                         <div className="h-4 w-full bg-gold/5 blur-md" />
                         <div className="h-4 w-full bg-gold/10 blur-md" />
                         <div className="h-32 w-full bg-gradient-to-b from-gold/20 via-transparent to-red-500/20 blur-2xl opacity-40 animate-pulse" />
                         <div className="h-4 w-full bg-red-500/10 blur-md" />
                         <div className="h-4 w-full bg-red-500/5 blur-md" />
                    </div>
                    
                    <div className="relative z-10 p-12 bg-graphite/20 backdrop-blur-3xl border border-foreground/10 rounded-[3rem] aspect-square flex flex-col justify-center items-center text-center space-y-8">
                         <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">The Stability Gap</span>
                         <div className="w-px h-24 bg-gradient-to-b from-gold via-foreground/5 to-red-500" />
                         <p className="text-2xl font-serif leading-relaxed text-balance italic text-foreground/80 lowercase">
                            "Everything is stable until it meets <span className="text-gold uppercase font-sans font-bold text-sm not-italic ml-2">Temperature Drift</span>"
                         </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
