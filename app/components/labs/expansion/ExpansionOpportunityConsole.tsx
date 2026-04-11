'use client';

import React, { useState } from 'react';
import { expansionOpportunities } from '../../../data/expansion';
import { ExpansionOpportunity } from '../../../types';

export const ExpansionOpportunityConsole: React.FC = () => {
    const [activeExp, setActiveExp] = useState<ExpansionOpportunity>(expansionOpportunities[0]);

    const getClassificationColor = (classification: string) => {
        switch(classification) {
            case 'Core Deepening': return 'text-blue-400 bg-blue-900/20 border-blue-500/20';
            case 'Near Adjacency': return 'text-teal-400 bg-teal-900/20 border-teal-500/20';
            case 'Strategic Stretch': return 'text-amber-400 bg-amber-900/20 border-amber-500/20';
            case 'Dangerous Premature': return 'text-red-400 bg-red-900/20 border-red-500/20';
            default: return 'text-foreground bg-graphite/40 border-foreground/10';
        }
    };

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Tactical Matrix</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Expansion Opportunity Inspector</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Analyze the structural burden of launching different formats. Everything looks good in a pitch deck; this console exposes the operational reality.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {expansionOpportunities.map(exp => {
                        const isActive = activeExp.id === exp.id;
                        return (
                            <button
                                key={exp.id}
                                onClick={() => setActiveExp(exp)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-white/60 border-foreground/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <span className={`text-[9px] uppercase tracking-[0.2em] font-bold block mb-2 transition-colors duration-300 ${isActive ? 'text-teal-500/80' : 'text-foreground/30'}`}>
                                    {isActive ? 'Active Target' : 'Inspect Class'}
                                </span>
                                <span className={`text-xl font-serif block ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>
                                    {exp.conceptName}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right: Intel Form */}
                <div className="lg:w-2/3 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                    
                    {/* Atmospheric horizon glow */}
                    <div 
                        className="absolute inset-x-0 bottom-0 top-1/2 blur-[150px] opacity-[0.06] pointer-events-none transition-colors duration-1000 -z-0"
                        style={{ backgroundColor: activeExp.themeColor }}
                    />

                    <div className="relative z-10 flex flex-col h-full space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${getClassificationColor(activeExp.classification)}`}>
                                    {activeExp.classification}
                                </span>
                            </div>
                            <h4 className="text-2xl md:text-3xl font-serif text-foreground leading-snug">{activeExp.consumerProblemSolved}</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="bg-background/20 p-5 rounded-lg border border-foreground/10 border-l-4 border-l-teal-600/50">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Trust Transfer Status</span>
                                <p className="text-sm font-light text-foreground/80 leading-relaxed">{activeExp.trustTransfer}</p>
                            </div>
                            <div className="bg-background/20 p-5 rounded-lg border border-foreground/10 border-l-4 border-l-red-900/50">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Complexity Burden</span>
                                <p className="text-sm font-light text-foreground/80 leading-relaxed">{activeExp.complexityBurden}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                             <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-2">Primary Failure Mode</span>
                                <p className="text-sm font-light text-foreground/70 leading-relaxed">{activeExp.failureMode}</p>
                            </div>
                        </div>

                        <div className="border-t border-foreground/5 pt-6 flex flex-col md:flex-row gap-8 justify-between">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-2">Required Format Logic</span>
                                <span className="text-sm text-foreground/80 font-medium">
                                    {activeExp.formatLogic}
                                </span>
                            </div>
                            <div className="md:text-right">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-2">Repeat Potential</span>
                                <span className="text-sm text-gold font-bold uppercase tracking-widest">
                                    {activeExp.repeatPotential}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
