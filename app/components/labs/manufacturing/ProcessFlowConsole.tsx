'use client';

import React, { useState } from 'react';
import { processStages } from '../../../data/manufacturing';
import { ProcessStage } from '../../../types';

export const ProcessFlowConsole: React.FC = () => {
    const [activeStage, setActiveStage] = useState<ProcessStage>(processStages[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Production Intelligence</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Process Flow Console</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Inspect the end-to-end manufacturing journey. Each stage is a critical junction where quality is either locked in or lost.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left: Stage Selector */}
                <div className="lg:w-1/3 flex flex-col gap-3">
                    {processStages.map((stage, idx) => {
                        const isActive = activeStage.id === stage.id;
                        return (
                            <button
                                key={stage.id}
                                onClick={() => setActiveStage(stage)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${isActive ? 'bg-graphite/40 border-blue-500/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-400' : 'text-foreground/20'}`}>0{idx + 1}</span>
                                        <span className={`text-lg font-serif ${isActive ? 'text-foreground' : 'text-foreground/40'}`}>{stage.name}</span>
                                    </div>
                                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-foreground/10'}`} />
                                </div>
                                {isActive && (
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right: Detail Console */}
                <div className="lg:w-2/3 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                    {/* Atmospheric mode glow */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none -z-0" />

                    <div className="relative z-10 flex flex-col h-full space-y-10">
                        <div className="flex justify-between items-start">
                             <div className="space-y-2">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400/60 block">Process Objective</span>
                                <h4 className="text-2xl md:text-4xl font-serif text-foreground leading-tight max-w-2xl">{activeStage.objective}</h4>
                             </div>
                             <div className={`px-4 py-1.5 rounded-full border text-[9px] uppercase tracking-widest font-bold ${activeStage.complexity === 'High' ? 'border-red-500/30 text-red-400 bg-red-500/5' : 'border-blue-500/30 text-blue-400 bg-blue-500/5'}`}>
                                 {activeStage.complexity} Complexity
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                            <div className="space-y-6">
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-4 border-l-2 border-blue-500/30 pl-3">Critical Variables</span>
                                    <div className="flex flex-wrap gap-2">
                                        {activeStage.variables.map(v => (
                                            <span key={v} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-graphite/40 border border-foreground/10 rounded text-foreground/70">{v}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-blue-400/60 block mb-4 border-l-2 border-blue-500/30 pl-3">Process Impact</span>
                                    <p className="text-sm font-light text-foreground/80 leading-relaxed italic">"{activeStage.impact}"</p>
                                </div>
                            </div>

                            <div className="p-6 bg-red-500/[0.03] border border-red-500/10 rounded-xl space-y-4">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/60 block border-l-2 border-red-500/30 pl-3">Potential Failure Modes</span>
                                <ul className="space-y-3">
                                    {activeStage.failureModes.map(f => (
                                        <li key={f} className="flex items-start space-x-3 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-1.5 group-hover:bg-red-500 transition-colors" />
                                            <span className="text-[11px] text-foreground/60 font-light group-hover:text-foreground/80 transition-colors">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
