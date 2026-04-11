'use client';

import React, { useState } from 'react';
import { consumerArchetypes } from '../../data/growth';
import { ConsumerArchetype } from '../../types';

export const ConsumerIdentityLayer: React.FC = () => {
    const [activeIdentity, setActiveIdentity] = useState<ConsumerArchetype>(consumerArchetypes[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5 relative">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Identity Archetypes</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">Consumer Adoption Logic</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Different archetypes require vastly different entry points. Pushing utility to an indulgence-seeker creates bounce; pushing indulgence to a functional-optimizer creates distrust.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {consumerArchetypes.map(archetype => {
                        const isActive = activeIdentity.id === archetype.id;
                        return (
                            <button
                                key={archetype.id}
                                onClick={() => setActiveIdentity(archetype)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-graphite/40 border-foreground/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <span className={`text-[9px] uppercase tracking-[0.2em] font-bold block mb-2 transition-colors duration-300 ${isActive ? 'text-foreground/80' : 'text-foreground/30'}`}>
                                    {isActive ? 'Active Archetype' : 'Select Archetype'}
                                </span>
                                <span className={`text-xl font-serif block ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>
                                    {archetype.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right: Intel Form */}
                <div className="lg:w-2/3 bg-white/45 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                    
                    {/* The Human Identity Glows (Multi-colored per archetype theme) */}
                    <div 
                        className="absolute inset-0 blur-[150px] opacity-[0.15] pointer-events-none transition-colors duration-1000 -z-0"
                        style={{ backgroundColor: activeIdentity.themeColor }}
                    />

                    <div className="relative z-10 flex flex-col h-full space-y-8">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block mb-3">Core Emotional Drive</span>
                            <h4 className="text-2xl md:text-3xl font-serif text-foreground leading-snug">{activeIdentity.emotionalDrive}</h4>
                        </div>

                        <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-lg">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-2">Primary Fear / Resistance</span>
                            <p className="text-sm font-light text-foreground/70">{activeIdentity.primaryFear}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-green-500/80 block mb-3">The Winning Message</span>
                                <p className="text-sm font-medium text-foreground italic">"{activeIdentity.winningMessage}"</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80 block mb-3">The Failure Message</span>
                                <p className="text-sm font-medium text-foreground/40 italic line-through decoration-red-500/50">"{activeIdentity.failureMessage}"</p>
                            </div>
                        </div>

                        <div className="border-t border-foreground/5 pt-6">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40 block mb-3">Required Trust Signal</span>
                            <p className="text-sm font-light text-foreground/70">{activeIdentity.trustSignal}</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
