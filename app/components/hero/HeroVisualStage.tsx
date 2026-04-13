'use client';

import React from 'react';
import { products } from '../../data/products';

interface HeroVisualStageProps {
  activeChapter: number;
}

export const HeroVisualStage: React.FC<HeroVisualStageProps> = ({ activeChapter }) => {
  // Visual states per chapter — tuned for grounded performance-editorial
  const chapterVisuals = [
    { glowOpacity: 0.04, productOpacity: 0, productBlur: 20, productScale: 0.88, spotlightOpacity: 0 },
    { glowOpacity: 0.15, productOpacity: 0.22, productBlur: 0, productScale: 1, spotlightOpacity: 0.85 },
    { glowOpacity: 0.1, productOpacity: 0.06, productBlur: 10, productScale: 0.9, spotlightOpacity: 0.12 },
    { glowOpacity: 0.08, productOpacity: 0.02, productBlur: 20, productScale: 0.85, spotlightOpacity: 0.03 },
    { glowOpacity: 0.1, productOpacity: 0.01, productBlur: 24, productScale: 0.8, spotlightOpacity: 0.02 },
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
      {/* 
        CINEMATIC VIDEO BASE 
        Synced with Home Page treatment. Edge-to-edge backdrop.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-[center_60%] scale-100 opacity-20 transition-opacity duration-1000"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/lab-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Atmospheric Overlays — Heavier vignette to protect the Navbar */}
        <div className="absolute inset-0 video-vignette opacity-85" />
        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 vignette-atmosphere opacity-30" />

      {/* Ambient Depth Haze — functional pistachio hint instead of purple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] haze-overlay opacity-30" />

      {/* Dynamic Glow Spots — Espresso & Cocoa anchors */}
      <div className="absolute inset-0 transition-all duration-[1500ms] ease-out">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full transition-opacity duration-[1500ms]"
          style={{ backgroundColor: 'rgba(43, 26, 21, 0.04)', opacity: activeChapter === 1 || activeChapter === 2 ? 0.3 : 0 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-[120px] rounded-full transition-opacity duration-[1500ms]"
          style={{ backgroundColor: 'rgba(138, 90, 59, 0.04)', opacity: activeChapter === 1 || activeChapter === 2 ? 0.3 : 0 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[150px] rounded-full transition-all duration-[1500ms]"
          style={{
            opacity: v.glowOpacity,
            backgroundColor: activeChapter >= 2 ? 'rgba(111, 134, 97, 0.08)' : 'rgba(43, 26, 21, 0.03)',
            transform: `translate(-50%, -50%) scale(${activeChapter === 0 ? 1 : 1.15})`,
          }}
        />
      </div>

      {/* Subtle Grid / Technical Texture — grounding the abstract space */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Central Product Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] flex items-center justify-center transition-all duration-[1200ms] ease-out"
        style={{
          opacity: v.spotlightOpacity,
          filter: `blur(${activeChapter === 1 ? 0 : 8}px)`,
          transform: `translate(-50%, -50%) scale(${activeChapter === 1 ? 1 : 0.9})`,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/products/choco-loco.png"
            alt="Hero SKU"
            className="w-full h-full object-contain filter drop-shadow-[0_30px_60px_rgba(43,26,21,0.25)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-foreground/5 blur-3xl opacity-40 -z-10" />
        </div>
      </div>

      {/* Flanking Product Cluster */}
      <div className="absolute inset-0">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`absolute w-48 h-72 flex items-center justify-center transition-all duration-[1200ms] ease-out ${positions[idx] || ''}`}
            style={{
              opacity: v.productOpacity + idx * 0.015,
              filter: `blur(${v.productBlur}px)`,
              transform: `scale(${v.productScale})`,
            }}
          >
            <img
              src={product.imagePath}
              alt={product.name}
              className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(43,26,21,0.15)]"
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
        <div className="absolute top-[30%] left-[20%] bg-foreground/[0.03] backdrop-blur-md px-4 py-2 border border-foreground/10 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-accent">
          Coffee Ritual
        </div>
        <div className="absolute top-[65%] right-[25%] bg-foreground/[0.03] backdrop-blur-md px-4 py-2 border border-foreground/10 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-accent">
          Breakfast Rescue
        </div>
        <div className="absolute bottom-[25%] left-[30%] bg-foreground/[0.03] backdrop-blur-md px-4 py-2 border border-foreground/10 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-accent">
          Sweet Craving Swap
        </div>
      </div>
    </div>
  );
};
