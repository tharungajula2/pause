'use client';

import React from 'react';
import { summerConcepts } from '../../../data/summer-concepts';

export const SummerConceptGrid: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-foreground/8">
            <div className="mb-20 text-center">
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                    Horizon Strategy
                </span>
                <h3 className="text-4xl md:text-5xl font-serif mb-6">Seasonal Concept Extensions</h3>
                <p className="text-foreground/40 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
                    A disciplined flavor roadmap ensures the brand remains relevant without fragmenting the core. 
                    These concept SKUs demonstrate how summer seasonality can be used as a trial-pull tool.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {summerConcepts.map((concept) => (
                    <div 
                        key={concept.id} 
                        className="group relative flex flex-col items-center text-center p-8 bg-graphite/10 rounded-3xl border border-foreground/8 hover:border-gold/30 transition-all duration-700 overflow-hidden"
                    >
                        {/* THE INTENSIFIED AMBIENT LIGHTING SYSTEM */}
                        <div 
                            className="absolute inset-0 opacity-5 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none"
                            style={{ 
                                background: `radial-gradient(circle at 50% 50%, ${concept.themeColor}55 0%, transparent 80%)` 
                            }}
                        />
                        
                        {/* Primary Corner Leak (Top Right) */}
                        <div 
                            className="absolute -top-32 -right-32 w-64 h-64 blur-[100px] opacity-20 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-125"
                            style={{ backgroundColor: concept.themeColor }}
                        />

                        {/* Secondary Corner Leak (Bottom Left) */}
                        <div 
                            className="absolute -bottom-32 -left-32 w-64 h-64 blur-[100px] opacity-10 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-125"
                            style={{ backgroundColor: concept.themeColor }}
                        />

                        {/* FLOATING PRODUCT STAGE */}
                        <div className="relative w-full aspect-square mb-10 flex items-center justify-center">
                            {/* NEW: BEHIND-ASSET PULSING SPOTLIGHT */}
                            <div 
                                className="absolute w-48 h-48 blur-[80px] opacity-20 group-hover:opacity-80 transition-all duration-1000 animate-pulse"
                                style={{ backgroundColor: concept.themeColor }}
                            />

                            <div className="relative z-10 w-full h-full flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-1000 ease-out animate-float-slow">
                                <img 
                                    src={concept.imagePath} 
                                    alt={concept.name}
                                    className="max-h-[85%] object-contain filter drop-shadow-[0_20px_40px_rgba(44, 24, 16, 0.15)]"
                                    onError={(e) => {
                                        // Fallback for missing assets - Fixed typo and prevented infinite loops
                                        const img = e.target as HTMLImageElement;
                                        if (img.src.includes('concepts')) {
                                            img.src = '/images/products/wah-vanilla.png';
                                        } else {
                                            img.onerror = null; // Kill the handler to stop the loop
                                        }
                                    }}
                                />
                            </div>
                            
                            {/* Reflection Pedestal (Simplified for Concept) */}
                            <div className="absolute bottom-4 w-32 h-6 bg-foreground/10 blur-xl rounded-full opacity-60 group-hover:scale-150 transition-transform duration-1000" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex flex-col items-center">
                                <span className="px-2 py-0.5 border border-gold/30 rounded bg-gold/5 text-[8px] font-mono font-bold text-gold/80 mb-2">
                                    Concept SKU
                                </span>
                                <h4 className="text-2xl font-serif text-foreground group-hover:text-gold transition-colors">
                                    {concept.name}
                                </h4>
                            </div>
                            
                            <p className="text-sm text-foreground/50 font-light italic leading-relaxed">
                                "{concept.descriptor}"
                            </p>

                            <div className="pt-6 border-t border-foreground/8 space-y-4 text-left">
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-1">Strategic Role</span>
                                    <span className="text-[11px] text-foreground/70 leading-tight block">{concept.strategicRole}</span>
                                </div>
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 block mb-1">Classification</span>
                                    <span className="text-[10px] text-gold font-bold uppercase tracking-wider">{concept.classification}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
