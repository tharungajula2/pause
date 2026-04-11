'use client';

import React from 'react';
import Link from 'next/link';
import { siteContent } from './data/site-content';
import { products } from './data/products';
import { occasions } from './data/occasions';
import { modules } from './data/modules';


// Primitives
import { SectionHeader } from './components/ui/SectionHeader';
import { ProductSurface } from './components/ui/ProductSurface';
import { OccasionEngine } from './components/ui/OccasionEngine';
import { SystemModules } from './components/ui/SystemModules';
import { CtaButton } from './components/ui/CtaButton';
import { ChapterHero } from './components/hero/ChapterHero';
import { SystemContinuation } from './components/ui/SystemContinuation';

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-white">


      {/* 1. Chapter-Based Cinematic Hero */}
      <ChapterHero />

      {/* 2. Manifesto: The Director's Note */}
      <section className="relative py-48 md:py-64 px-6 z-20 overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
              <span className="text-gold/40 text-[10px] tracking-[0.5em] uppercase font-bold">Director's Note</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-balance mb-16 italic">
            “{siteContent.manifesto.heading}”
          </h2>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 text-xl md:text-2xl font-light leading-relaxed text-foreground/50 text-balance">
              {siteContent.manifesto.body}
            </div>
            <div className="w-full md:w-[2px] self-stretch bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />
            <div className="w-full md:w-1/4">
               <p className="text-xs tracking-widest uppercase text-gold font-bold mb-4">Core Thesis</p>
               <p className="text-[10px] text-foreground/30 leading-loose">Modern brands operate at the intersection of psychology, biology, and logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Worlds: Editorial Surfaces */}
      <div id="product-worlds" className="bg-background">
        <div className="pt-32 px-6 max-w-7xl mx-auto mb-20 lg:mb-32">
          <SectionHeader 
            alignment="left"
            eyebrow="Portfolio Architecture"
            title="Built through products. Understood through systems."
            subtitle="A roadmap for flavor, format, and frequency. Each SKU is an entry point into the OS."
            badge="Product Worlds"
          />
        </div>
        
        <div className="flex flex-col">
          {products.map((product, idx) => (
            <ProductSurface key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>

      {/* 4. Winning Formula Strip: Iconic Map */}
      <section className="py-48 px-6 bg-gradient-to-b from-background via-graphite/10 to-background border-y border-foreground/5">
        <div className="max-w-5xl mx-auto text-center mb-16 px-6">
            <SystemContinuation 
                nextRoute="/products" 
                nextTitle="Portfolio Hub" 
                description="Explore the 6-SKU core portfolio architecture." 
            />
        </div>
        
        <div className="relative py-24 overflow-hidden border-y border-gold/10">
            <div className="absolute inset-0 bg-gold/[0.02] flex items-center justify-center -z-10">
                <div className="w-full h-1/2 bg-gold/5 blur-[120px]" />
            </div>
            
            <div className="flex whitespace-nowrap items-center animate-scroll">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-16 px-8">
                        <div className="flex items-center group">
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Occasion</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Product</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Channel</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Repeat</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Economics</span>
                        </div>
                        <div className="h-12 w-px bg-gold/20" />
                    </div>
                ))}
            </div>
        </div>
        
        <div className="text-center mt-12">
            <p className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold text-gold/60 max-w-xl mx-auto leading-loose">
                This is the path from interesting product to durable business
            </p>
        </div>
      </section>

      {/* 5. Occasion Engine: Strategic Interface */}
      <OccasionEngine />

      {/* 6. System Modules: Intelligence Previews */}
      <SystemModules />

      {/* 6. Final CTA: Cinematic Title Card */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gold/[0.03] blur-[150px] rounded-full" />
           <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
            <SectionHeader 
                alignment="center"
                eyebrow="Conclusion"
                title="Strategy is the only long-term flavor"
                subtitle="Join the system built for owners who think in decades, not drops."
            />
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link href="/strategy">
                    <CtaButton size="xl" variant="primary" className="min-w-[280px]">
                        Initiate Demo — Enter Strategy OS
                    </CtaButton>
                </Link>
                <CtaButton size="xl" variant="outline" className="min-w-[280px]">
                   View All Products
                </CtaButton>
            </div>
        </div>
      </section>

      {/* 2.5 System Mapping: The Demo Guide */}
      <section className="py-32 px-6 bg-graphite/40 border-y border-foreground/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <span className="text-gold/40 text-[10px] tracking-[0.5em] uppercase font-bold">System Architecture</span>
                    <h3 className="text-4xl md:text-5xl font-serif leading-tight">
                        A multi-layer <span className="italic text-gold">logic suite</span> for the modern protein enterprise.
                    </h3>
                    <p className="text-foreground/40 font-light leading-relaxed max-w-xl">
                        Protein OS is not a dashboard of metrics. It is a cinematic roadmap of strategy, economics, and behavior, built to help founders and operators navigate product viability and category expansion.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { title: 'Core Strategy', desc: 'Portfolio architecture & SKU logic.', route: '/strategy' },
                        { title: 'Unit Economics', desc: 'Margin structure & failure modes.', route: '/economics' },
                        { title: 'Growth Engine', desc: 'Behavioral loops & repeat logic.', route: '/growth' },
                        { title: 'Labs Hub', desc: 'Flavor, Trust, & Future Adjacency.', route: '/labs/packaging' }
                    ].map((item, idx) => (
                        <Link key={item.title} href={item.route} className="group p-8 bg-white/50 backdrop-blur-sm border border-foreground/8 rounded-2xl hover:border-gold/30 transition-all duration-500 shadow-sm">
                            <span className="text-[10px] font-bold text-foreground/20 group-hover:text-gold block mb-4">0{idx + 1}</span>
                            <h4 className="text-lg font-serif mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                            <p className="text-[11px] text-foreground/40 leading-relaxed">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <div className="mt-32 pb-32 text-center text-foreground/20">
          <p className="text-[9px] uppercase tracking-[0.6em] font-bold mb-4 italic">End of Session</p>
          <div className="text-xl font-serif">
              PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
          </div>
      </div>



      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </main>
  );
}
