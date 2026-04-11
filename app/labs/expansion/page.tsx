import React from 'react';
import { SystemContinuation } from '../../components/ui/SystemContinuation';

import { ExpansionHero } from '../../components/labs/expansion/ExpansionHero';
import { AdjacencyFramework } from '../../components/labs/expansion/AdjacencyFramework';
import { ExpansionOpportunityConsole } from '../../components/labs/expansion/ExpansionOpportunityConsole';
import { CoreVsStretchLayer } from '../../components/labs/expansion/CoreVsStretchLayer';
import { ExpansionMappingBlock } from '../../components/labs/expansion/ExpansionMappingBlock';
import { KioskOfflineStrategy } from '../../components/labs/expansion/KioskOfflineStrategy';
import { GlobalAdaptationLogic } from '../../components/labs/expansion/GlobalAdaptationLogic';
import { ExpansionBreakdown } from '../../components/labs/expansion/ExpansionBreakdown';
import { FounderMemo } from '../../components/labs/expansion/FounderMemo';

export const metadata = {
  title: 'Expansion Lab | Protein OS',
  description: 'Operating system layer for adjacency, risk, and portfolio future-mapping.',
};

export default function ExpansionLabPage() {
  return (
    <main className="min-h-screen selection:bg-teal-500/30 selection:text-foreground bg-background">

      <article>
          <ExpansionHero />
          <AdjacencyFramework />
          <ExpansionOpportunityConsole />
          <CoreVsStretchLayer />
          <ExpansionMappingBlock />
          <KioskOfflineStrategy />
          <GlobalAdaptationLogic />
          <ExpansionBreakdown />
          <FounderMemo />
      </article>

          <SystemContinuation 
            nextRoute="/strategy" 
            nextTitle="Return to Strategy" 
            description="Review the master portfolio logic." 
            step="End"
          />
    </main>
  );
}
