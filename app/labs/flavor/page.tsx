import React from 'react';
import { SystemContinuation } from '../../components/ui/SystemContinuation';

import { FlavorLabHero } from '../../components/labs/flavor/FlavorLabHero';
import { FlavorStrategyMap } from '../../components/labs/flavor/FlavorStrategyMap';
import { FlavorPositioningConsole } from '../../components/labs/flavor/FlavorPositioningConsole';
import { RepeatVsNoveltyLayer } from '../../components/labs/flavor/RepeatVsNoveltyLayer';
import { FormatFlavorFit } from '../../components/labs/flavor/FormatFlavorFit';
import { IndiaCulturalFit } from '../../components/labs/flavor/IndiaCulturalFit';
import { SummerConceptGrid } from '../../components/labs/flavor/SummerConceptGrid';
import { FlavorBreakdown } from '../../components/labs/flavor/FlavorBreakdown';
import { FounderMemo } from '../../components/labs/flavor/FounderMemo';

export const metadata = {
  title: 'Flavor Lab | Protein OS',
  description: 'Operating system layer for sensory strategy, indulgence, and format fit.',
};

export default function FlavorLabPage() {
  return (
    <main className="min-h-screen selection:bg-amber-500/30 selection:text-foreground bg-background">

      <article>
          <FlavorLabHero />
          <FlavorStrategyMap />
          <FlavorPositioningConsole />
          <RepeatVsNoveltyLayer />
          <FormatFlavorFit />
          <IndiaCulturalFit />
          <SummerConceptGrid />
          <FlavorBreakdown />
          <FounderMemo />
      </article>

          <SystemContinuation 
            nextRoute="/labs/expansion" 
            nextTitle="Expansion Lab" 
            description="Determine what adjacencies strengthen the brand vs fragment it." 
            step="07"
          />
    </main>
  );
}
