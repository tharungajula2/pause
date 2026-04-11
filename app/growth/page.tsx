import React from 'react';
import { SystemContinuation } from '../components/ui/SystemContinuation';

import { GrowthHero } from '../components/growth/GrowthHero';
import { GrowthArchitectureMap } from '../components/growth/GrowthArchitectureMap';
import { ConsumerIdentityLayer } from '../components/growth/ConsumerIdentityLayer';
import { MessageOccasionConsole } from '../components/growth/MessageOccasionConsole';
import { HabitLoopEngine } from '../components/growth/HabitLoopEngine';
import { CreatorTrustLogic } from '../components/growth/CreatorTrustLogic';
import { FailureStateBreakdown } from '../components/growth/FailureStateBreakdown';
import { FounderMemo } from '../components/growth/FounderMemo';

export const metadata = {
  title: 'Growth OS | Protein OS',
  description: 'Operating system layer for behavioral adoption and habit loop mechanics.',
};

export default function GrowthPage() {
  return (
    <main className="min-h-screen selection:bg-gold/30 selection:text-foreground bg-background">


      <article>
          <GrowthHero />
          <GrowthArchitectureMap />
          <ConsumerIdentityLayer />
          <MessageOccasionConsole />
          <HabitLoopEngine />
          <CreatorTrustLogic />
          <FailureStateBreakdown />
          <FounderMemo />
      </article>

          <SystemContinuation 
            nextRoute="/labs/packaging" 
            nextTitle="Packaging & Trust Lab" 
            description="Examine how visual hierarchy and claim clarity drive trial." 
            step="05"
          />
    </main>
  );
}
