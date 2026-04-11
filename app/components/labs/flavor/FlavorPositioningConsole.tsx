'use client';

import React, { useState } from 'react';
import { flavorStrategyModes } from '../../../data/flavor';
import { FlavorStrategyMode } from '../../../types';

export const FlavorPositioningConsole: React.FC = () => {
    const [activeFlavor, setActiveFlavor] = useState<FlavorStrategyMode>(flavorStrategyModes[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Sensory Diagnostics</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Flavor Positioning Map</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Test how different sensory directions change the business case. A "safe" flavor is boring but retains users. An "exciting" flavor gets clicks but rarely builds a routine.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {flavorStrategyModes.map(mode => {
                        const isActive = activeFlavor.id === mode.id;
                        return (
                            <button
                                key={mode.id}
                                onClick={() => setActiveFlavor(mode)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-graphite/40 border-foreground/20' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <span className={`text-[9px] uppercase tracking-[0.2em] font-bold block mb-2 transition-colors duration-300 ${isActive ? 'text-amber-500' : 'text-foreground/30'}`}>
                                    {isActive ? 'Active Sensory Profile' : 'Inspect Category'}
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
                        style={{ backgroundColor: activeFlavor.themeColor }}
                    />

                    <div className="relative z-10 flex flex-col h-full space-y-8">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block mb-3 pl-3 border-l hover:border-l-foreground/40 transition-colors">Emotional Response</span>
                            <h4 className="text-2xl md:text-3xl font-serif text-foreground leading-snug">{activeFlavor.emotionalResponse}</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="bg-background/20 p-5 rounded-lg border border-foreground/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-green-500/80 block mb-3">Repeat Likelihood</span>
                                <p className="text-xl font-serif text-foreground leading-relaxed">{activeFlavor.repeatLikelihood}</p>
                            </div>
                            <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-3">Failure Risk</span>
                                <p className="text-sm font-light text-foreground/70 leading-relaxed">{activeFlavor.failureMode}</p>
                            </div>
                        </div>

                        <div className="border-t border-foreground/5 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Trust Burden</span>
                                <p className="text-sm font-light text-foreground/80 leading-relaxed">{activeFlavor.trustBurden}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Format Compatibility</span>
                                <div className="flex flex-wrap gap-2">
                                     {activeFlavor.formatFit.map(f => (
                                         <span key={f} className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-graphite/50 border border-foreground/20 rounded-md text-amber-500/80 inline-block">
                                             {f}
                                         </span>
                                     ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
