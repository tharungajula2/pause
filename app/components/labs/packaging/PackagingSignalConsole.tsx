'use client';

import React, { useState } from 'react';
import { packagingModes } from '../../../data/trust';
import { PackagingTrustMode } from '../../../types';

export const PackagingSignalConsole: React.FC = () => {
    const [activeMode, setActiveMode] = useState<PackagingTrustMode>(packagingModes[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Signal Controller</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Packaging Signal Matrix</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Test how different visual hierarchies generate trust or confusion depending on what the consumer is looking for.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {packagingModes.map(mode => {
                        const isActive = activeMode.id === mode.id;
                        return (
                            <button
                                key={mode.id}
                                onClick={() => setActiveMode(mode)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-graphite/40 border-foreground/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <span className={`text-[9px] uppercase tracking-[0.2em] font-bold block mb-2 transition-colors duration-300 ${isActive ? 'text-foreground/80' : 'text-foreground/30'}`}>
                                    {isActive ? 'Active Wrapper' : 'Inspect Mode'}
                                </span>
                                <span className={`text-xl font-serif block ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>
                                    {mode.modeName}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right: Intel Form */}
                <div className="lg:w-2/3 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                    
                    {/* Atmospheric mode glow */}
                    <div 
                        className="absolute inset-0 blur-[150px] opacity-[0.08] pointer-events-none transition-colors duration-1000 -z-0"
                        style={{ backgroundColor: activeMode.themeColor }}
                    />

                    <div className="relative z-10 flex flex-col h-full space-y-8">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block mb-3 pl-3 border-l hover:border-l-foreground/40 transition-colors">Primary Visual Signal</span>
                            <h4 className="text-2xl md:text-3xl font-serif text-foreground leading-snug">{activeMode.primarySignal}</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="bg-green-500/5 p-5 rounded-lg border border-green-500/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-green-500/80 block mb-3">Trust Built</span>
                                <p className="text-sm font-light text-foreground/80 leading-relaxed">{activeMode.trustBuilt}</p>
                            </div>
                            <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-3">Confusion / Churn Risk</span>
                                <p className="text-sm font-light text-foreground/70 leading-relaxed">{activeMode.confusionRisk}</p>
                            </div>
                        </div>

                        <div className="border-t border-foreground/5 pt-6">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Strongest Channel Fit</span>
                            <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-graphite/50 border border-foreground/20 rounded-md text-foreground/80 inline-block">
                                {activeMode.bestChannel}
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
