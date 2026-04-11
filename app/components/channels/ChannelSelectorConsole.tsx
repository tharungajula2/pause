'use client';

import React, { useState } from 'react';
import { channelProfiles } from '../../data/channels';
import { ChannelProfile } from '../../types';

export const ChannelSelectorConsole: React.FC = () => {
    const [activeChannel, setActiveChannel] = useState<ChannelProfile>(channelProfiles[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5">
            <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground/30 inline-block mb-4">Route Intelligence</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Channel Diagnostics Console</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Select a channel architecture to view the specific behavioral, pack-size, and repeat mechanics it enforces.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Pane: Selector */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    {channelProfiles.map(channel => {
                        const isActive = activeChannel.id === channel.id;
                        return (
                            <button
                                key={channel.id}
                                onClick={() => setActiveChannel(channel)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${isActive ? 'bg-graphite/30 border-gold/30' : 'bg-background border-foreground/5 hover:bg-graphite/10'}`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div 
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'scale-110 shadow-[0_0_10px_rgba(var(--color-gold),0.3)]' : 'opacity-20 scale-75'}`}
                                        style={{ backgroundColor: channel.themeColor }}
                                    />
                                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${isActive ? 'text-gold' : 'text-foreground/30'}`}>
                                        {isActive ? 'Active Pipeline' : 'Inspect Channel'}
                                    </span>
                                </div>
                                <span className={`text-xl font-serif block ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>
                                    {channel.channelName}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Pane: Intel Output */}
                <div className="lg:w-2/3 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 relative min-h-[600px]">
                    {/* Active Glow */}
                    <div 
                        className="absolute inset-0 blur-[150px] opacity-10 pointer-events-none transition-colors duration-1000 -z-0"
                        style={{ backgroundColor: activeChannel.themeColor }}
                    />
                    <div className="absolute top-0 right-0 p-12 opacity-5 font-serif italic text-8xl pointer-events-none">
                        {activeChannel.channelName.charAt(0)}
                    </div>

                    <div className="relative z-10 flex flex-col h-full p-8 md:p-12">
                        {/* Status Header */}
                        <div className="pb-8 mb-8 border-b border-foreground/10">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block mb-3">Dominant Behavior</span>
                            <h4 className="text-3xl lg:text-4xl font-serif text-foreground">{activeChannel.dominantBehavior}</h4>
                        </div>

                        {/* Grid Data */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 flex-grow">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Discovery Mode</span>
                                <p className="text-sm text-foreground/70 font-light leading-relaxed">{activeChannel.discoveryMode}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Pack Architecture</span>
                                <p className="text-sm text-foreground/70 font-light leading-relaxed">{activeChannel.packArchitecture}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Repeat Mechanism</span>
                                <p className="text-sm text-foreground/70 font-light leading-relaxed">{activeChannel.repeatMechanism}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/30 block mb-3">Pricing Pressure</span>
                                <p className="text-sm text-foreground/70 font-light leading-relaxed">{activeChannel.pricingPressure}</p>
                            </div>
                        </div>

                        {/* Best Fit Formats Bar */}
                        <div className="mt-10 pt-6 border-t border-foreground/5 flex flex-wrap gap-4 items-center">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gold/60">Optimized Formats:</span>
                            {activeChannel.bestFitFormats.map(f => (
                                <span key={f} className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-gold/5 border border-gold/20 rounded-md text-gold/80">
                                    {f}
                                </span>
                            ))}
                        </div>

                        {/* Operator Note */}
                        <div className="mt-8 bg-background/50 border border-red-500/10 p-6 rounded-xl relative overflow-hidden">
                            <div className="absolute left-0 top-0 w-1 h-full bg-red-500/50" />
                            <span className="block text-[9px] uppercase tracking-widest text-red-500/80 font-bold mb-2">Operator Warning / Friction</span>
                            <p className="text-sm text-foreground/60 leading-relaxed font-light">{activeChannel.operatorWarning}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
