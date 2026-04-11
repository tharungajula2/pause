import React from 'react';
import Link from 'next/link';
import { CtaButton } from '../components/ui/CtaButton';
import { SystemContinuation } from '../components/ui/SystemContinuation';

import { StrategyHero } from '../components/strategy/StrategyHero';
import { ArchitectureOverview } from '../components/strategy/ArchitectureOverview';
import { InteractiveSkuMatrix } from '../components/strategy/InteractiveSkuMatrix';
import { PortfolioMap } from '../components/strategy/PortfolioMap';
import { RecommendationLayer } from '../components/strategy/RecommendationLayer';

export const metadata = {
  title: 'SKU Strategy | Protein OS',
  description: 'Operating system layer for portfolio architecture and SKU intelligence.',
};

export default function StrategyPage() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-white bg-background">


      <article>
          <StrategyHero />
          <ArchitectureOverview />
          <InteractiveSkuMatrix />
          <PortfolioMap />
          <RecommendationLayer />
      </article>

          <SystemContinuation 
            nextRoute="/economics" 
            nextTitle="Economics Console" 
            description="Analyze how product structures survive margin pressure." 
            step="02"
          />

    </main>
  );
}
