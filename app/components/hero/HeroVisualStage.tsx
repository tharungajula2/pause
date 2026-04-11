'use client';

import React from 'react';
import { products } from '../../data/products';

interface HeroVisualStageProps {
  activeChapter: number;
}

export const HeroVisualStage: React.FC<HeroVisualStageProps> = ({ activeChapter }) => {
  // Visual states per chapter — tuned for cream background
  const chapterVisuals = [
    { glowOpacity: 0.06, productOpacity: 0.04, productBlur: 20, productScale: 0.9, spotlightOpacity: 0.06 },
    { glowOpacity: 0.2, productOpacity: 0.25, productBlur: 0, productScale: 1, spotlightOpacity: 0.9 },
    { glowOpacity: 0.12, productOpacity: 0.08, productBlur: 10, productScale: 0.92, spotlightOpacity: 0.15 },
    { glowOpacity: 0.1, productOpacity: 0.03, productBlur: 20, productScale: 0.85, spotlightOpacity: 0.05 },
    { glowOpacity: 0.15, productOpacity: 0.02, productBlur: 24, productScale: 0.8, spotlightOpacity: 0.03 },
  ];

  const v = chapterVisuals[activeChapter] ?? chapterVisuals[0];

  const positions = [
    'top-[15%] left-[10%] -rotate-12',
    'top-[60%] right-[12%] rotate-6',
    'bottom-[10%] left-[15%] rotate-3',
    'top-[30%] right-[5%] -rotate-3',
    'bottom-[20%] right-[20%] rotate-12',
    'top-[10%] right-[30%] -rotate-6',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 vignette-atmosphere opacity-40" />

      {/* Ambient Depth Haze — warm cream */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] haze-overlay opacity-40" />

      {/* Dynamic Glow Spots — warm brown/coffee tones */}
      <div className="absolute inset-0 transition-all duration-[1500ms] ease-out">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full transition-opacity duration-[1500ms]"
          style={{ backgroundColor: 'rgba(139, 69, 19, 0.08)', opacity: activeChapter === 1 || activeChapter === 2 ? 0.3 : 0 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-[120px] rounded-full transition-opacity duration-[1500ms]"
          style={{ backgroundColor: 'rgba(111, 78, 55, 0.08)', opacity: activeChapter === 1 || activeChapter === 2 ? 0.3 : 0 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[150px] rounded-full transition-all duration-[1500ms]"
          style={{
            opacity: v.glowOpacity,
            backgroundColor: activeChapter >= 3 ? 'rgba(184, 134, 11, 0.12)' : 'rgba(184, 134, 11, 0.05)',
            transform: `translate(-50%, -50%) scale(${activeChapter === 0 ? 1 : 1.2})`,
          }}
        />
      </div>

      {/* Subtle Grid / Technical Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Central Product Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] flex items-center justify-center transition-all duration-[1200ms] ease-out"
        style={{
          opacity: v.spotlightOpacity,
          filter: `blur(${activeChapter === 1 ? 0 : 6}px)`,
          transform: `translate(-50%, -50%) scale(${activeChapter === 1 ? 1 : 0.9})`,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/products/choco-loco.png"
            alt="Hero SKU"
            className="w-full h-full object-contain filter drop-shadow-[0_30px_60px_rgba(44,24,16,0.3)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#8B4513]/8 blur-3xl opacity-40 -z-10" />
        </div>
      </div>

      {/* Flanking Product Cluster */}
      <div className="absolute inset-0">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`absolute w-48 h-72 flex items-center justify-center transition-all duration-[1200ms] ease-out ${positions[idx] || ''}`}
            style={{
              opacity: v.productOpacity + idx * 0.02,
              filter: `blur(${v.productBlur}px)`,
              transform: `scale(${v.productScale})`,
            }}
          >
            <img
              src={product.imagePath}
              alt={product.name}
              className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(44,24,16,0.2)]"
            />
            <div
              className="absolute inset-0 opacity-8 blur-2xl -z-10"
              style={{ backgroundColor: product.accentColor }}
            />
          </div>
        ))}
      </div>

      {/* Occasion Tags — visible only on chapter 2 (occasions) */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-[1000ms]"
        style={{ opacity: activeChapter === 2 ? 1 : 0 }}
      >
        <div className="absolute top-[30%] left-[20%] bg-foreground/5 backdrop-blur-md px-3 py-1 border border-foreground/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-gold">
          Coffee Ritual
        </div>
        <div className="absolute top-[65%] right-[25%] bg-foreground/5 backdrop-blur-md px-3 py-1 border border-foreground/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-gold">
          Breakfast Rescue
        </div>
        <div className="absolute bottom-[25%] left-[30%] bg-foreground/5 backdrop-blur-md px-3 py-1 border border-foreground/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-gold">
          Sweet Craving Swap
        </div>
      </div>
    </div>
  );
};
