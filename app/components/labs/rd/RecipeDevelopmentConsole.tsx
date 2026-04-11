'use client';

import React, { useState } from 'react';
import { recipeConcepts } from '../../../data/rd';
import { RecipeConcept } from '../../../types';

export const RecipeDevelopmentConsole: React.FC = () => {
    const [activeConcept, setActiveConcept] = useState<RecipeConcept>(recipeConcepts[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Strategic Formulation</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Recipe Development Console</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Simulate different product directions. Each concept is a balance of sensory ambition, cost constraints, and production reality.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left: Concept Selector */}
                <div className="lg:w-1/3 flex flex-col gap-3">
                    {recipeConcepts.map((concept, idx) => {
                        const isActive = activeConcept.id === concept.id;
                        return (
                            <button
                                key={concept.id}
                                onClick={() => setActiveConcept(concept)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${isActive ? 'bg-graphite/40 border-fuchsia-500/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <div className="relative z-10 flex flex-col">
                                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-2 ${isActive ? 'text-fuchsia-400' : 'text-foreground/20'}`}>Concept 0{idx + 1}</span>
                                    <span className={`text-xl font-serif ${isActive ? 'text-foreground' : 'text-foreground/40'}`}>{concept.name}</span>
                                </div>
                                {isActive && (
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right: Intel Form */}
                <div className="lg:w-2/3 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                    {/* Atmospheric mode glow */}
                    <div 
                        className="absolute inset-0 blur-[130px] opacity-[0.1] pointer-events-none transition-colors duration-1000 -z-0"
                        style={{ backgroundColor: activeConcept.themeColor }}
                    />

                    <div className="relative z-10 flex flex-col h-full space-y-10">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block mb-2 px-3 border-l hover:border-l-fuchsia-400 transition-colors">Target Narrative</span>
                                <div className="flex items-center space-x-2">
                                     <span className={`px-3 py-0.5 rounded-full border text-[8px] uppercase tracking-widest font-bold ${activeConcept.manufacturability === 'Hazardous' ? 'border-red-500/30 text-red-400' : 'border-green-500/30 text-green-400'}`}>
                                         {activeConcept.manufacturability} Mfg
                                     </span>
                                     <span className={`px-3 py-0.5 rounded-full border text-[8px] uppercase tracking-widest font-bold ${activeConcept.costBurden === 'High' ? 'border-amber-500/30 text-amber-400' : 'border-blue-500/30 text-blue-400'}`}>
                                         {activeConcept.costBurden} Cost
                                     </span>
                                </div>
                            </div>
                            <h4 className="text-2xl md:text-3xl font-serif text-foreground leading-snug italic">"{activeConcept.tagline}"</h4>
                            <p className="text-xl font-serif text-foreground/80">{activeConcept.objective}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 border-t border-foreground/5">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-fuchsia-400/60 block mb-4 border-l-2 border-fuchsia-500/30 pl-3">Sensory Target</span>
                                <p className="text-sm font-light text-foreground/70 leading-relaxed">{activeConcept.sensoryTarget}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-fuchsia-400/60 block mb-4 border-l-2 border-fuchsia-500/30 pl-3">Repeat Logic</span>
                                <p className="text-sm font-light text-foreground/70 leading-relaxed italic">"{activeConcept.repeatLogic}"</p>
                            </div>
                        </div>

                        <div className="p-6 bg-graphite/30 rounded-xl border border-foreground/5 flex items-center justify-between">
                             <div className="space-y-1">
                                <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-foreground/20 block">Strategic Recommendation</span>
                                <p className="text-sm font-serif text-gold">Ready for Kitchen Prototype</p>
                             </div>
                             <div className="flex items-center space-x-1 opacity-20">
                                 {[...Array(5)].map((_, i) => (
                                     <div key={i} className={`w-6 h-1 rounded-full ${i < 4 ? 'bg-gold' : 'bg-foreground/20'}`} />
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
