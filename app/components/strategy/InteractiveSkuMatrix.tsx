'use client';

import React, { useState } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types';

export const InteractiveSkuMatrix: React.FC = () => {
    // Default to the predefined "Hero" SKU for instant page life
    const [activeSku, setActiveSku] = useState<Product>(products.find(p => p.slug === 'cafe-latte') || products[0]);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-foreground/5" id="sku-matrix">
            <div className="mb-16">
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Strategic Console</h3>
                <p className="text-foreground/50 max-w-2xl text-lg font-light">
                    Select a SKU from the portfolio universe to inspect its operational logic, risk factors, and exact strategic burden.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Pane: Interactive Roster */}
                <div className="lg:w-5/12 space-y-3">
                    {products.map(product => {
                        const isActive = activeSku.id === product.id;
                        return (
                            <button 
                                key={product.id}
                                onClick={() => setActiveSku(product)}
                                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${isActive ? 'bg-graphite/40 border-gold/40' : 'bg-background border-foreground/5 hover:border-foreground/20 hover:bg-graphite/10'}`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div 
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'scale-110 shadow-[0_0_15px_rgba(var(--color-gold),0.5)]' : 'scale-100 opacity-50'}`}
                                        style={{ backgroundColor: product.themeColor }}
                                    />
                                    <div>
                                        <div className={`font-serif text-lg ${isActive ? 'text-gold' : 'text-foreground group-hover:text-gold/80'}`}>
                                            {product.name}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-1">
                                            {product.portfolioClassification} Element
                                        </div>
                                    </div>
                                </div>
                                <div className={`text-[10px] uppercase tracking-wider font-bold ${isActive ? 'text-gold' : 'text-foreground/20'}`}>
                                    Inspect
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right Pane: Deep Strategic Intel */}
                <div className="lg:w-7/12 relative rounded-3xl border border-foreground/10 bg-graphite/10 overflow-hidden flex flex-col min-h-[600px] transition-all duration-500">
                    
                    {/* Atmospheric Glow */}
                    <div 
                        className="absolute inset-x-0 top-0 h-96 blur-[120px] opacity-10 transition-colors duration-1000 -z-10"
                        style={{ backgroundColor: activeSku.themeColor }}
                    />

                    <div className="p-8 md:p-12 flex-grow flex flex-col z-10">
                        {/* Header */}
                        <div className="border-b border-foreground/10 pb-8 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4 block">
                                Portfolio Analysis: {activeSku.portfolioClassification}
                            </span>
                            <h4 className="text-4xl font-serif text-foreground mb-4">
                                {activeSku.name}
                            </h4>
                            <p className="text-xl italic font-light text-foreground/60 leading-relaxed">
                                "{activeSku.heroDescriptor}"
                            </p>
                        </div>

                        {/* Data Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 mb-12">
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-2">Primary Occasion</span>
                                <span className="text-sm font-medium text-foreground">{activeSku.primaryOccasion}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-2">Channel Edge</span>
                                <span className="text-sm font-medium text-foreground">{activeSku.channelFit[0]}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-2">Repeat Mechanism</span>
                                <span className="text-sm font-medium text-foreground">{activeSku.repeatLogic}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-2">Risk Level</span>
                                <span className={`text-sm font-medium text-foreground flex items-center gap-2`}>
                                    <span className={`w-2 h-2 rounded-full ${activeSku.riskLevel === 'High' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : activeSku.riskLevel === 'Moderate' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' : 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]'}`} />
                                    {activeSku.riskLevel}
                                </span>
                            </div>
                        </div>

                        {/* Caution Frame */}
                        <div className="mt-auto bg-background/80 border border-foreground/10 p-6 rounded-xl flex flex-col gap-4 backdrop-blur-sm">
                             <div>
                                <span className="block text-[10px] uppercase tracking-widest text-gold font-bold mb-1">Cannibalization Risk</span>
                                <span className="text-sm text-foreground/80">{activeSku.cannibalizationRisk}</span>
                            </div>
                             <div>
                                <span className="block text-[10px] uppercase tracking-widest text-gold font-bold mb-1">Expansion Caution</span>
                                <span className="text-sm text-foreground/80">{activeSku.expansionCaution}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
