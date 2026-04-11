import React from 'react';
import { SystemContinuation } from '../../components/ui/SystemContinuation';

import { ManufacturingHero } from '../../components/labs/manufacturing/ManufacturingHero';
import { ManufacturingPrinciples } from '../../components/labs/manufacturing/ManufacturingPrinciples';
import { ProcessFlowConsole } from '../../components/labs/manufacturing/ProcessFlowConsole';
import { IngredientBehaviorLayer } from '../../components/labs/manufacturing/IngredientBehaviorLayer';
import { StabilityShelfLifeLayer } from '../../components/labs/manufacturing/StabilityShelfLifeLayer';
import { EconomicsScaleLayer } from '../../components/labs/manufacturing/EconomicsScaleLayer';
import { ManufacturingRoadmap } from '../../components/labs/manufacturing/ManufacturingRoadmap';
import { ManufacturingFailureModes } from '../../components/labs/manufacturing/ManufacturingFailureModes';
import { ManufacturingFounderMemo } from '../../components/labs/manufacturing/ManufacturingFounderMemo';

export const metadata = {
  title: 'Manufacturing Lab | Protein OS',
  description: 'Operating system layer for production intelligence, technical scale-up, and stability logic.',
};

export default function ManufacturingLabPage() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-foreground bg-background">

      <article>
          <ManufacturingHero />
          <ManufacturingPrinciples />
          <ProcessFlowConsole />
          <IngredientBehaviorLayer />
          <StabilityShelfLifeLayer />
          <EconomicsScaleLayer />
          <ManufacturingRoadmap />
          <ManufacturingFailureModes />
          <ManufacturingFounderMemo />
      </article>

      <SystemContinuation 
        nextRoute="/labs/expansion" 
        nextTitle="Expansion Lab" 
        description="Determine what adjacencies strengthen the brand vs fragment it." 
        step="08"
      />
    </main>
  );
}
