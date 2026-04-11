import React from 'react';
import { SystemContinuation } from '../components/ui/SystemContinuation';

import { ChannelHero } from '../components/channels/ChannelHero';
import { ChannelLandscape } from '../components/channels/ChannelLandscape';
import { ChannelSelectorConsole } from '../components/channels/ChannelSelectorConsole';
import { FormatFitMatrix } from '../components/channels/FormatFitMatrix';
import { QuickCommerceThesis } from '../components/channels/QuickCommerceThesis';
import { ChannelMismatchLogic } from '../components/channels/ChannelMismatchLogic';
import { FounderMemo } from '../components/channels/FounderMemo';

export const metadata = {
  title: 'Channel OS | Protein OS',
  description: 'Operating system layer for channel strategy, format fit, and discovery logic.',
};

export default function ChannelsPage() {
  return (
    <main className="min-h-screen selection:bg-gold/30 selection:text-foreground bg-background">


      <article>
          <ChannelHero />
          <ChannelLandscape />
          <ChannelSelectorConsole />
          <FormatFitMatrix />
          <QuickCommerceThesis />
          <ChannelMismatchLogic />
          <FounderMemo />
      </article>

          <SystemContinuation 
            nextRoute="/growth" 
            nextTitle="Growth OS" 
            description="Understand how to loop behavior and scale the habit." 
            step="04"
          />
    </main>
  );
}
