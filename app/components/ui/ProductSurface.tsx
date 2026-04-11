import React from 'react';
import Link from 'next/link';
import { Product } from '../../types';

interface ProductSurfaceProps {
  product: Product;
  index: number;
}

export const ProductSurface: React.FC<ProductSurfaceProps> = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-24 md:py-32 overflow-hidden border-b border-foreground/5 last:border-0 group">
      {/* 
        INTENSIFIED ATMOSPHERIC BACKDROP 
        Triple-layer lighting: Central radial wash + Dual corner light leaks.
      */}
      <div className="absolute inset-0 -z-10 bg-background">
          {/* Central Radial Wash — matched to Summer Concepts */}
          <div 
            className="absolute inset-0 opacity-5 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 50%, ${product.themeColor}55 0%, transparent 80%)` }}
          />
          {/* Primary Corner Leak */}
          <div 
            className={`absolute -top-32 ${isEven ? '-right-32' : '-left-32'} w-64 h-64 blur-[100px] opacity-20 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-125`}
            style={{ backgroundColor: product.themeColor }}
          />
          {/* Secondary Corner Leak */}
          <div 
            className={`absolute -bottom-32 ${isEven ? '-left-32' : '-right-32'} w-64 h-64 blur-[100px] opacity-10 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-125`}
            style={{ backgroundColor: product.themeColor }}
          />
          <div className="absolute inset-0 vignette-atmosphere opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`flex flex-col items-center gap-16 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          
          {/* Visual Product Stage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl bg-graphite/10 border border-foreground/5 group-hover:border-gold/20 sheen-effect transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-20">
                    {/* BEHIND-ASSET PULSING SPOTLIGHT — matched to Summer Concepts (opacity-20 → opacity-80) */}
                    <div 
                        className="absolute w-48 h-48 blur-[80px] opacity-20 group-hover:opacity-80 transition-all duration-1000 animate-pulse" 
                        style={{ backgroundColor: product.themeColor }}
                    />
                    
                    {/* Product Typography Watermark */}
                    <span className="absolute bottom-12 left-12 text-7xl md:text-9xl font-serif text-foreground/[0.03] uppercase italic pointer-events-none select-none tracking-tighter">
                        {product.name.split(' ')[0]}
                    </span>

                    {/* Cinematic Product Asset Stage with Float — animate-float-slow added */}
                    <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-1000 ease-out animate-float-slow">
                        {/* THE REAL ASSET */}
                        <div className="relative z-20 w-full h-full flex items-center justify-center">
                            <img 
                                src={product.imagePath} 
                                alt={product.name}
                                className="max-w-[70%] max-h-[85%] object-contain filter drop-shadow-[0_20px_50px_rgba(44,24,16,0.25)]"
                            />
                        </div>
                    </div>

                    {/* Reflection Pedestal — matched to Summer Concepts */}
                    <div className="absolute bottom-4 w-32 h-6 bg-foreground/15 blur-xl rounded-full opacity-60 group-hover:scale-150 transition-transform duration-1000" />
                </div>
                
                {/* Format Badge Overlay */}
                <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 bg-white/60 backdrop-blur-md rounded-full text-[9px] uppercase tracking-[0.4em] font-bold text-gold border border-gold/20">
                        {product.format} Format
                    </span>
                </div>
            </div>
          </div>

          {/* Strategic Narrative Surface */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                    {product.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight max-w-[12ch]">
                    {product.name}
                </h2>
                <p className="text-xl md:text-2xl font-serif italic text-gold/80 max-w-xl">
                    "{product.heroDescriptor}"
                </p>
            </div>

            <div className="space-y-8">
                <p className="text-foreground/50 text-base md:text-lg leading-relaxed font-light max-w-2xl text-balance">
                    {product.operatorDescription}
                </p>

                {/* Portfolio Intelligence Blueprint */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-foreground/10">
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Portfolio Role</span>
                            <span className="text-sm font-medium text-foreground/80">{product.strategicRole}</span>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Primary Occasion</span>
                            <span className="text-sm text-gold font-medium">{product.primaryOccasion}</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Repeat Logic</span>
                            <span className="text-sm font-medium text-foreground/80">{product.repeatLogic}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="w-full text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Target Channels</span>
                            {product.channelFit.map(channel => (
                                <span key={channel} className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-foreground/5 rounded-full text-foreground/60 border border-foreground/5">
                                    {channel}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Operator Note Context */}
                <div className="bg-graphite/20 p-8 rounded-2xl border border-gold/10 relative overflow-hidden group/note">
                    <div 
                      className="absolute top-0 right-0 p-4 opacity-5 group-hover/note:opacity-20 transition-opacity"
                      style={{ color: product.accentColor }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold/60 block mb-4">Strategic Framework Note</span>
                    <p className="text-sm text-foreground/40 leading-relaxed italic pr-8">
                        {product.operatorNote}
                    </p>
                </div>
            </div>
            
            <div className="pt-8">
                <Link href={`/products/${product.slug}`} className="flex items-center space-x-4 text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/30 hover:text-gold transition-all duration-300">
                    <span className="h-px w-12 bg-foreground/10 group-hover:bg-gold/40 transition-colors" />
                    <span>View Product Intelligence</span>
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
