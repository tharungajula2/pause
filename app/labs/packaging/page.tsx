import React from 'react';
import { SystemContinuation } from '../../components/ui/SystemContinuation';

import { PackagingHero } from '../../components/labs/packaging/PackagingHero';
import { TrustAnatomyMap } from '../../components/labs/packaging/TrustAnatomyMap';
import { PackagingSignalConsole } from '../../components/labs/packaging/PackagingSignalConsole';
import { DigestibilityComfortLayer } from '../../components/labs/packaging/DigestibilityComfortLayer';
import { ThumbnailClarityBlock } from '../../components/labs/packaging/ThumbnailClarityBlock';
import { ClaimsClaritySection } from '../../components/labs/packaging/ClaimsClaritySection';
import { TrustBreakdown } from '../../components/labs/packaging/TrustBreakdown';
import { FounderMemo } from '../../components/labs/packaging/FounderMemo';

export const metadata = {
  title: 'Packaging & Trust Lab | Protein OS',
  description: 'Operating system layer for visual hierarchy and consumer trust logic.',
};

export default function PackagingTrustPage() {
  return (
    <main className="min-h-screen selection:bg-gold/30 selection:text-foreground bg-background">

      <article>
          <PackagingHero />
          <TrustAnatomyMap />
          <PackagingSignalConsole />
          <DigestibilityComfortLayer />
          <ThumbnailClarityBlock />
          <ClaimsClaritySection />
          <TrustBreakdown />
          <FounderMemo />
      </article>

          <SystemContinuation 
            nextRoute="/labs/flavor" 
            nextTitle="Flavor Lab" 
            description="Understand how indulgence and sensory expectations drive repeat." 
            step="06"
          />
    </main>
  );
}
