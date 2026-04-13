'use client';

import React from 'react';
import { siteContent } from '../../data/site-content';
import { CtaButton } from '../ui/CtaButton';
import Link from 'next/link';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* 
        CINEMATIC VIDEO BASE 
        Edge-to-edge positioning with low opacity for atmospheric depth.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover scale-105 opacity-20 transition-opacity duration-1000"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero-teaser.mp4" type="video/mp4" />
        </video>
        
        {/* Atmospheric Overlays */}
        <div className="absolute inset-0 video-vignette opacity-60" />
        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-block text-accent text-[10px] uppercase tracking-[0.5em] font-bold mb-12 animate-fade-in opacity-80">
          The Outreach Study
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-12 text-balance text-foreground">
          {siteContent.hero.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed text-balance mb-16">
          {siteContent.hero.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/products">
            <CtaButton variant="primary" size="xl">
              {siteContent.hero.primaryCta}
            </CtaButton>
          </Link>
          <Link href="/how-i-can-help">
            <CtaButton variant="outline" size="xl">
              {siteContent.hero.secondaryCta}
            </CtaButton>
          </Link>
        </div>
      </div>

      {/* Static Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">Scroll to Enter</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};
