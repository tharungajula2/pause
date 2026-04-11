'use client';

import React, { useState } from 'react';
import { formatEconomics } from '../../data/economics';
import { FormatEconomics } from '../../types';

export const FormatEconomicsConsole: React.FC = () => {
    // Defaulting to RTD Shake as requested
    const [activeFormat, setActiveFormat] = useState<FormatEconomics>(formatEconomics[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Instrumented Sandbox</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Format Viability Console</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Select a format architecture to inspect its underlying financial and logistical pressure.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Pane: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {formatEconomics.map(format => {
                        const isActive = activeFormat.id === format.id;
                        return (
                            <button
                                key={format.id}
                                onClick={() => setActiveFormat(format)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-graphite/30 border-foreground/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-2 transition-colors duration-300 ${isActive ? 'text-foreground/80' : 'text-foreground/30'}`}>
                                    {isActive ? 'Active Lens' : 'Select Format'}
                                </span>
                                <span className={`text-xl font-serif block ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>
                                    {format.formatName}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Pane: Intel Output */}
                <div className="lg:w-2/3 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col transition-all duration-500">
                    {/* Active Glow */}
                    <div 
                        className="absolute top-0 right-0 w-[400px] h-[400px] blur-[150px] opacity-10 pointer-events-none transition-colors duration-1000"
                        style={{ backgroundColor: activeFormat.themeColor }}
                    />

                    <div className="relative z-10 flex flex-col h-full space-y-12">
                        {/* Status Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-foreground/10">
                            <div>
                                <h4 className="text-3xl font-serif mb-2">{activeFormat.formatName}</h4>
                                <span className="text-xs uppercase tracking-[0.3em] font-bold text-foreground/40">Diagnostic Output</span>
                            </div>
                            <div className="flex items-center gap-4 bg-background px-4 py-2 rounded-lg border border-foreground/10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40">Economic Intensity</span>
                                <div className={`px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold ${activeFormat.economicIntensity === 'Severe' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : activeFormat.economicIntensity === 'Moderate' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'}`}>
                                    {activeFormat.economicIntensity}
                                </div>
                            </div>
                        </div>

                        {/* Grid Data */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Packaging Burden</span>
                                <p className="text-foreground/70 font-light leading-relaxed">{activeFormat.packagingBurden}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Shipping & Logistics Risk</span>
                                <p className="text-foreground/70 font-light leading-relaxed">{activeFormat.shippingRisk}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3 flex items-center gap-2">
                                    Discount Fragility
                                    {activeFormat.discountFragility.includes('Extremely') && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />}
                                </span>
                                <p className="text-foreground/70 font-light leading-relaxed">{activeFormat.discountFragility}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Required Demand Profile</span>
                                <div className="flex items-center gap-4">
                                     <span className="text-sm">Repeat Requirement:</span>
                                     <span className="text-sm font-bold text-foreground">{activeFormat.repeatRequirement}</span>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                     <span className="text-sm">Hero SKU Viability:</span>
                                     <span className="text-sm font-bold text-foreground">{activeFormat.heroViability ? 'Validated' : 'Sub-Optimal'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
