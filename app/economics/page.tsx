import React from 'react';
import { SystemContinuation } from '../components/ui/SystemContinuation';

import { EconomicsHero } from '../components/economics/EconomicsHero';
import { WhatShapesEconomics } from '../components/economics/WhatShapesEconomics';
import { FormatEconomicsConsole } from '../components/economics/FormatEconomicsConsole';
import { ChannelMarginPressure } from '../components/economics/ChannelMarginPressure';
import { RepeatDiscountTension } from '../components/economics/RepeatDiscountTension';
import { FragilitySurvivalLayer } from '../components/economics/FragilitySurvivalLayer';

export const metadata = {
  title: 'Economics Console | Protein OS',
  description: 'Operating system layer for unit economics, margin pressure, and portfolio viability.',
};

export default function EconomicsPage() {
  return (
    <main className="min-h-screen selection:bg-gold/30 selection:text-foreground bg-background">


      <article>
          <EconomicsHero />
          <WhatShapesEconomics />
          <FormatEconomicsConsole />
          <ChannelMarginPressure />
          <RepeatDiscountTension />
          <FragilitySurvivalLayer />
      </article>

          <SystemContinuation 
            nextRoute="/channels" 
            nextTitle="Channel OS" 
            description="Map how distribution constraints reshape the product offering." 
            step="03"
          />
    </main>
  );
}
