import React from 'react';
import { Product } from '../../types';

interface ProductHeroStageProps {
    product: Product;
}

export const ProductHeroStage: React.FC<ProductHeroStageProps> = ({ product }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-background">
            {/* Cinematic Background Splashes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] blur-[150px] opacity-20"
                    style={{ backgroundColor: product.themeColor }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
                
                {/* Format Badging */}
                <div className="mb-8 flex items-center space-x-3">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">
                        Portfolio Element
                    </span>
                    <span className="w-1 h-1 bg-gold/50 rounded-full" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40">
                        {product.format} Format
                    </span>
                </div>

                {/* Hero Typographic Identity */}
                <div className="text-center max-w-4xl mb-16 space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-balance">
                        {product.name}
                    </h1>
                    <p className="text-xl md:text-3xl text-foreground/60 font-serif italic text-balance">
                        "{product.heroDescriptor}"
                    </p>
                </div>

                {/* Intelligent Product Presentation Stage */}
                <div className="relative w-full max-w-3xl aspect-[16/9] md:aspect-[21/9] rounded-3xl bg-graphite/30 border border-foreground/10 overflow-hidden flex items-center justify-center group sheen-effect">
                    <div 
                        className="absolute inset-0 mix-blend-overlay opacity-30"
                        style={{ background: `linear-gradient(to bottom right, transparent, ${product.themeColor})` }}
                    />
                    
                    {/* THE REAL ASSET */}
                    <div className="relative z-20 w-full h-full flex items-center justify-center transition-all duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1">
                        <img 
                            src={product.imagePath} 
                            alt={product.name}
                            className="max-h-[85%] object-contain filter drop-shadow-[0_40px_100px_rgba(44, 24, 16, 0.25)]"
                        />
                    </div>
                    
                    {/* Inner Pedestal Removed for 100% Floating Aesthetic */}

                    {/* Stage Typography Watermark */}
                    <div className="absolute right-8 bottom-4 text-foreground/[0.03] text-7xl md:text-9xl font-serif italic font-bold select-none tracking-tighter">
                        {product.format}
                    </div>
                </div>

                {/* Core Lenses Bar */}
                <div className="w-full max-w-4xl mx-auto mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 bg-graphite/40 rounded-2xl border border-foreground/5 backdrop-blur-md">
                    <div className="flex flex-col space-y-1 border-l-2 pl-4" style={{ borderColor: product.accentColor }}>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">Strategic Role</span>
                        <span className="text-sm font-medium text-foreground">{product.strategicRole}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">Category</span>
                        <span className="text-sm font-medium text-foreground">{product.category}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">Primary Fit</span>
                        <span className="text-sm font-medium text-foreground">{product.primaryOccasion}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">Format Role</span>
                        <span className="text-sm font-medium text-foreground">{product.format}</span>
                    </div>
                </div>

            </div>
        </section>
    );
};
