'use client';

import React from 'react';
import type { WorkbookChapter } from '../../types/index';

interface FlavorLabProps {
  chapter: WorkbookChapter;
}

const rotations = [-1.2, 0.8, -0.5, 1.4, -0.9, 0.6, -1.1, 1.3, -0.7, 0.4, -1.5, 1.0, -0.8, 0.5, -1.3, 0.9, -0.6, 1.2];

export const FlavorLab: React.FC<FlavorLabProps> = ({ chapter }) => {
  const getRotation = (index: number) => {
    return rotations[index % rotations.length];
  };

  return (
    <div className="flavor-lab-wrapper py-16 px-4 md:px-8 bg-[#F0EBE1]">
      {/* Module Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent italic">Module 03</span>
          <span className="h-px w-12 bg-accent/20" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-tight text-foreground">
          {chapter.title}
        </h2>
        <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed max-w-3xl mb-8">
          "{chapter.summary}"
        </p>
        <div className="bg-[#DDD5C8]/10 border-l border-accent/20 p-6 max-w-3xl">
           <p className="text-sm text-foreground/50 italic leading-relaxed">
             This is a working hypothesis board — not a product roadmap. Category signals are from public consumer research and category observation. US benchmarks are from published sources. India hypotheses are mine.
           </p>
        </div>
      </div>

      {/* SECTION 1: CUSTOMER SIGNAL BOARD */}
      <div className="max-w-7xl mx-auto mb-24">
        <SectionDivider label="CUSTOMER SIGNAL BOARD" />
        <div className="mt-8 mb-12">
          <p className="text-sm text-foreground/60 italic font-light">Category-level consumer signals. Patterns I tracked while building PAUSE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CustomerSignalCard 
            index={0}
            tag="FORMULATION REQUEST"
            tagColor="#C17B3A"
            message="I love the taste but honestly wish there was a higher protein option — something closer to 30g would make this my daily."
            signal="Protein content gap vs consumer expectation is a recurring theme in the better-for-you RTD category. The taste is winning — the spec is the open question."
            bg="#FFF9C4"
          />
          <CustomerSignalCard 
            index={1}
            tag="AVAILABILITY"
            tagColor="#E6A817"
            message="Can't find it on Blinkit or Zepto when I need it. I end up buying whatever is available in the moment."
            signal="Quick commerce availability is a first-purchase blocker, not just a retention issue. If the product isn't there at the moment of intent, the habit never forms."
            bg="#FAFAF7"
          />
          <CustomerSignalCard 
            index={2}
            tag="PACKAGING"
            tagColor="#6B7280"
            message="Took it to the gym and couldn't open it after a workout. Had to wait until I got home. That's the opposite of the use case."
            signal="Packaging friction kills the exact occasion the product is designed for. The post-workout window is 20 minutes. If the product can't be opened in that window, it fails the job."
            bg="#FFF0E0"
          />
          <CustomerSignalCard 
            index={3}
            tag="PRODUCT FEEDBACK"
            tagColor="#6B7280"
            message="Taste is genuinely great. But at this price point I expect at least 25g protein — other brands are already there."
            signal="Taste is winning. Spec is the battleground. Two conversations happening simultaneously — the brand needs to win both."
            bg="#FAFAF7"
          />
          <CustomerSignalCard 
            index={4}
            tag="CONSISTENCY"
            tagColor="#C17B3A"
            message="First batch of bars was incredible — soft, rich, almost caramel-like. Second order was noticeably drier. I'm not sure I'd reorder."
            signal="Batch consistency is a repeat-purchase killer in the bar format. Texture variance between orders breaks the trust loop faster than any marketing can rebuild it."
            bg="#FFF9C4"
          />
          <CustomerSignalCard 
            index={5}
            tag="AVAILABILITY"
            tagColor="#E6A817"
            message="Ordered again and it was out of stock on three platforms. Ended up buying a competitor. Now I'm not sure I'll switch back."
            signal="Stockout at the moment of repeat intent is the most expensive failure in quick commerce. The consumer doesn't wait — they substitute and re-habit."
            bg="#FFF0E0"
          />
          <CustomerSignalCard 
            index={6}
            tag="FOUNDER SIGNAL"
            tagColor="#C17B3A"
            message="The better-for-you category is not about removing things. It's about adding something the consumer actually wants — taste, texture, a feeling. That's the harder design problem."
            signal="The category positioning opportunity is clear — indulgence-first, health-as-bonus. The brand that solves taste and texture at accessible price wins the mass premium slot."
            bg="#FAFAF7"
          />
        </div>
      </div>

      {/* SECTION 2: US BENCHMARK SCANNER */}
      <div className="max-w-7xl mx-auto mb-24">
        <SectionDivider label="US BENCHMARK SCANNER" />
        <div className="mt-8 mb-12">
          <p className="text-sm text-foreground/60 italic font-light">5 RTD brands every Indian protein founder should study. Not to copy — to understand what&apos;s already been solved.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <USBenchmarkCard 
            rank="1"
            brand="Global Dairy Leader"
            positioning="Ultra-filtered dairy. 42g protein. Tastes like a real drink, not a supplement."
            steal={[
              "Ultra-filtered base — protein density without the chalkiness",
              "Two-tier architecture: 26g mainstream + 42g elite",
              "Benchmark taste against premium chocolate milk, not whey shakes"
            ]}
            dont={[
              "42g protein for India is often price-prohibitive",
              "Coke-scale distribution can't be replicated by a startup"
            ]}
            insight="A dairy tech platform disguised as a beverage brand"
          />
          <USBenchmarkCard 
            rank="2"
            brand="US Mass-Market Benchmark"
            positioning="30g protein. Mass-market. Every flavor for every occasion."
            steal={[
              "Occasion ladder — breakfast, snack, dessert swap, coffee replacement",
              "Flavor families (not random flavors): dessert, café, indulgence, non-dairy",
              "Pantry-staple positioning — not gym product"
            ]}
            dont={[
              "20+ flavors is operational suicide early-stage",
              "Their additive-heavy system won't fit clean-label India"
            ]}
            insight="Occasion architecture beats product purity"
          />
          <USBenchmarkCard 
            rank="3"
            brand="Plant-Based Pioneer"
            positioning="32g plant protein. 0g sugar. Allergen-safe. Complete amino acids."
            steal={[
              "Sells permission, not just protein (safe, inclusive, digestively easy)",
              "Allergen-safe framing — huge in India (lactose-free, Jain-compatible, vegetarian)",
              "Shelf-stable subscription economics"
            ]}
            dont={[
              "Plant shakes are harder to make taste naturally indulgent vs dairy",
              "India expects dairy-like nutrition cues — vegan ideology doesn't sell here"
            ]}
            insight="Don't sell vegan. Sell digestive peace."
          />
          <USBenchmarkCard 
            rank="4"
            brand="Beverage-First Entry"
            positioning="42g protein. 190 calories. 1g fat. In an aluminum can."
            steal={[
              "Can-first = beverage category, not supplement category",
              "Iced coffee adjacency — proffee moment",
              "Best macro efficiency: 22g protein per 100 kcal",
              "Modern consumer branding, not gym-bro branding"
            ]}
            dont={[
              "Aluminum-can economics and cold chain in India are different",
              "Flavor work must be world-class or the can makes a bad shake easier to reject"
            ]}
            insight="If the pack looks like a beverage, it gets judged like a beverage"
          />
          <USBenchmarkCard 
            rank="5"
            brand="Major Food Conglomerate"
            positioning="30g protein. Fiber. Casein. Trusted food brand entering shakes."
            steal={[
              "Protein + fiber mainstreaming — satiety, not just muscle",
              "Casein-led \"staying power\" — slow, filling nutrition",
              "Adjacent food equity: yogurt trust → shake trust"
            ]}
            dont={[
              "Still new — trend signal, not proven system yet",
              "The real lesson is the threat: large dairy players and FMCG giants can do this to Indian startups"
            ]}
            insight="Your future competition is trusted food brands, not just startups"
          />
        </div>

        {/* Lesson Callout */}
        <div className="bg-[#FFF9C4] p-8 md:p-12 border border-[#DDD5C8] shadow-sm rounded-sm max-w-4xl mx-auto">
          <h4 className="text-xl font-serif mb-6 text-foreground italic">The deepest US lesson for India</h4>
          <p className="text-base text-foreground/80 leading-relaxed font-light">
            The winning shake is not the one with the highest protein. It is the one that best matches one occasion, one base system, one channel, and one trust story. The global leaders picked dairy tech + recovery, mass-market occasions, or safety. <br/><br/>
            <span className="font-bold">What is the core strategic choice?</span>
          </p>
        </div>
      </div>

      {/* SECTION 3: PERPETUAL HYPOTHESIS BOARD */}
      <div className="max-w-7xl mx-auto">
        <SectionDivider label="PERPETUAL HYPOTHESIS BOARD" />
        <div className="mt-8 mb-12">
          <p className="text-sm text-foreground/60 italic font-light">Flavor and format directions mapped to occasions and cultural fit. These are hypotheses, not proposals. Some will be wrong. The board updates as signals change.</p>
        </div>

        <div className="masonry-grid">
           <HypothesisCard 
             id="H-01"
             title="Mango Tango"
             type="SEASONAL"
             occasion="Summer trial pull — April-June when cold fruity drinks dominate"
             analog="Global seasonal variants — summer novelty drives trial at scale"
             risk="Seasonal = low repeat if not anchored to a habit. Trial spike, not loyalty."
             index={0}
             bg="#FFF9C4"
           />
           <HypothesisCard 
             id="H-02"
             title="Rich Cold Coffee — Core Anchor"
             type="TRUST BUILDER"
             occasion="Daily household nutrition — feels familiar, not western"
             analog={`Leading dairy brand's "real dairy" angle — winning on cultural authenticity vs supplement-coded competitors`}
             risk="Lower excitement factor. Repeat is quiet — hard to see in data."
             index={1}
             bg="#FAFAF7"
           />
           <HypothesisCard 
             id="H-03"
             title="Thandai Chill"
             type="CULTURAL WEDGE"
             occasion="Holi season + heritage premium moment"
             analog={`Specialized plant brand's permission-led framing — "culturally yours" as a protein entry`}
             risk="Very seasonal. Margin may not justify limited window unless bundled into a festival pack."
             index={2}
             bg="#FFF0E0"
           />
           <HypothesisCard 
             id="H-04"
             title="Rich Cold Coffee"
             type="HABIT ATTACH"
             occasion="8-9AM office morning or 3-4PM afternoon slump"
             analog="US beverage-first adjacency + mass-market indulgence sub-lines"
             risk="Rich Cold Coffee is a core anchor — this is about going deeper, not launching new. Habit loop consistency is key."
             index={3}
             bg="#FAFAF7"
           />
           <HypothesisCard 
             id="H-05"
             title="High-Protein Chai Shake"
             type="CULTURAL WEDGE"
             occasion="Morning ritual replacement — the one meal most Indians actually have daily"
             analog="No direct US parallel — this is a genuine India-first whitespace"
             risk="Chai flavor in RTD is technically hard. Milk-tea balance without curdling. Formulation risk is real."
             index={4}
             bg="#FFF9C4"
           />
           <HypothesisCard 
             id="H-06"
             title="Rosy Falooda"
             type="SEASONAL + CULTURAL"
             occasion="Summer dessert replacement — nostalgia-driven first purchase"
             analog="US mass-market indulgence sub-line — pleasure as entry, not nutrition pitch"
             risk="Niche cultural appeal. Strong in metros, weaker in Tier 2."
             index={5}
             bg="#FFF0E0"
           />
           <HypothesisCard 
             id="H-07"
             title="Can Format"
             type="FORMAT PLAY"
             occasion="Wherever a bottle feels bulky — commute, desk, airport, gym bag"
             analog="US beverage-first benchmarks — the can signals beverage, not supplement. Changes where it lives in-store and in consumer's mind."
             risk="Cold chain and aluminum-can manufacturing cost in India. 2-3 year horizon, not today."
             index={6}
             bg="#FAFAF7"
           />
           <HypothesisCard 
             id="H-08"
             title="Bar V3 Texture Hypothesis"
             type="FORMAT PLAY"
             occasion="Any moment a bottle can't reach — desk drawer, commute, travel"
             analog="US bar benchmarks — solved texture when every other bar was chalky. That one product decision ate the market."
             risk="Batch consistency is the current open problem (V3 in progress). Don't market bars aggressively until texture is locked."
             index={7}
             bg="#FFF9C4"
           />
           <HypothesisCard 
             id="H-09"
             title="High-Protein Breakfast Meal Shake"
             type="HABIT ATTACH"
             occasion="Replacing the skipped breakfast for urban working adults — not adding to the day, replacing something already missing"
             analog={`Global substitution models — "replace one bad meal" not "add a supplement"`}
             risk={`Meal replacement has cultural baggage in India. Positioning must be "better breakfast" not "skip real food."`}
             index={8}
             bg="#FAFAF7"
           />
        </div>
      </div>

      {/* Final Note */}
      <div className="max-w-xl mx-auto mt-24">
        <div className="bg-[#FFF9C4] p-8 border border-dashed border-[#8C8070] text-center">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#8C8070] mb-4">A note on how to use this board</h4>
          <p className="text-sm text-foreground/80 leading-relaxed font-light italic">
            This is not a product roadmap. None of these hypotheses represent what should be built. They represent what I&apos;m tracking as potentially interesting spaces — based on customer signals, US market signals, and occasion mapping. The board is meant to be a living document. Some hypotheses will age out. New ones will come in as signals change.
          </p>
        </div>
      </div>

      <style jsx>{`
        .masonry-grid {
          column-count: 3;
          column-gap: 24px;
        }
        @media (max-width: 1024px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 1;
          }
          .card-rotate {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

const SectionDivider: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-4 py-8">
    <hr className="flex-1 border-t border-dashed border-[#C8BFB0]"/>
    <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C8070] uppercase">
      // {label}
    </span>
    <hr className="flex-1 border-t border-dashed border-[#C8BFB0]"/>
  </div>
);

const CustomerSignalCard: React.FC<{ index: number; tag: string; tagColor: string; message: string; signal: string; isFounder?: boolean; bg: string }> = ({ index, tag, tagColor, message, signal, isFounder, bg }) => (
  <div 
    className="card-rotate p-8 border border-[#DDD5C8] shadow-sm relative group transition-all hover:shadow-md"
    style={{ 
      backgroundColor: bg,
      transform: `rotate(${rotations[index % rotations.length]}deg)`,
      borderLeft: `4px solid ${tagColor}`
    }}
  >
    <div className="flex justify-between items-start mb-6">
      <span className="text-[8px] font-mono tracking-widest text-foreground/40 uppercase">[{tag}]</span>
      <span className="text-[8px] font-mono tracking-widest text-foreground/20 uppercase">SOURCE</span>
    </div>
    <p className="text-lg md:text-xl font-serif italic text-foreground mb-6 leading-relaxed">
      &quot;{message}&quot;
      {isFounder && <span className="block text-[10px] not-italic font-mono text-foreground/40 mt-2">— SOURCE SIGNAL</span>}
    </p>
    <div className="pt-6 border-t border-[#DDD5C8]/50">
      <span className="text-[10px] font-mono text-foreground/40 uppercase block mb-1">Signal:</span>
      <p className="text-xs text-foreground/70 leading-relaxed font-light">{signal}</p>
    </div>
  </div>
);

const USBenchmarkCard: React.FC<{ rank: string; brand: string; positioning: string; steal: string[]; dont: string[]; insight: string }> = ({ rank, brand, positioning, steal, dont, insight }) => (
  <div className="bg-[#FAFAF7] p-8 border border-[#DDD5C8] shadow-sm relative">
    <div className="text-[48px] font-serif text-[#DDD5C8] font-light absolute top-4 left-4 leading-none select-none">
      #{rank}
    </div>
    <div className="relative pt-12">
      <h4 className="text-xl font-serif font-bold text-foreground mb-2">{brand}</h4>
      <p className="text-sm text-foreground/60 italic mb-8 font-light">{positioning}</p>
      
      <div className="space-y-6 mb-10">
        <div>
          <span className="text-[9px] font-mono font-bold tracking-widest text-green-600/60 uppercase block mb-3">STEAL THIS</span>
          <ul className="space-y-2">
            {steal.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-foreground/70 leading-relaxed font-light">
                <span className="text-green-500 shrink-0">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-[9px] font-mono font-bold tracking-widest text-red-600/60 uppercase block mb-3">DON&apos;T COPY BLINDLY</span>
          <ul className="space-y-2">
            {dont.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-foreground/70 leading-relaxed font-light">
                <span className="text-red-500 shrink-0">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-6 border-t border-[#DDD5C8]/50">
        <span className="inline-block px-3 py-1 border border-[#DDD5C8] text-[9px] font-mono tracking-widest text-foreground/50 uppercase">
          {insight}
        </span>
      </div>
    </div>
  </div>
);

const HypothesisCard: React.FC<{ id: string; title: string; type: string; occasion: string; analog: string; risk: string; index: number; bg: string }> = ({ id, title, type, occasion, analog, risk, index, bg }) => {
  const getTypeColor = (t: string) => {
    if (t.includes('SEASONAL')) return 'bg-amber-100 text-amber-700';
    if (t.includes('CULTURAL')) return 'bg-orange-100 text-orange-700';
    if (t.includes('HABIT')) return 'bg-green-100 text-green-700';
    if (t.includes('FORMAT')) return 'bg-blue-100 text-blue-700';
    if (t.includes('TRUST')) return 'bg-[#8B4513]/10 text-[#8B4513]';
    if (t.includes('PREMIUM')) return 'bg-purple-100 text-purple-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div 
      className="card-rotate p-8 border border-[#DDD5C8] shadow-sm mb-6 inline-block w-full break-inside-avoid transition-all hover:shadow-md"
      style={{ 
        backgroundColor: bg,
        transform: `rotate(${rotations[index % rotations.length]}deg)`
      }}
    >
      <span className="text-[9px] font-mono text-foreground/30 uppercase block mb-4">{id}</span>
      <h4 className="text-lg font-serif font-bold text-foreground mb-3 leading-tight">{title}</h4>
      <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold tracking-widest uppercase mb-6 ${getTypeColor(type)}`}>
        {type}
      </span>
      
      <div className="space-y-4 mb-8">
        <div>
          <span className="text-[9px] font-mono text-foreground/40 uppercase block mb-1">Best moment:</span>
          <p className="text-xs text-foreground/80 leading-relaxed font-light">{occasion}</p>
        </div>
        <div>
          <span className="text-[9px] font-mono text-foreground/40 uppercase block mb-1">US parallel:</span>
          <p className="text-xs text-foreground/80 leading-relaxed font-light italic">{analog}</p>
        </div>
        <div>
          <span className="text-[9px] font-mono text-foreground/40 uppercase block mb-1">Risk:</span>
          <p className="text-[11px] text-foreground/50 leading-relaxed italic font-light">{risk}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <span className="text-[8px] font-mono tracking-widest text-foreground/20 uppercase">[ACTIVE HYPOTHESIS]</span>
      </div>
    </div>
  );
};
