import React from 'react';
import { SystemContinuation } from '../../components/ui/SystemContinuation';

import { RDHero } from '../../components/labs/rd/RDHero';
import { RDPrinciples } from '../../components/labs/rd/RDPrinciples';
import { RecipeDevelopmentConsole } from '../../components/labs/rd/RecipeDevelopmentConsole';
import { BenchmarkingLayer } from '../../components/labs/rd/BenchmarkingLayer';
import { AIWorkflowSection } from '../../components/labs/rd/AIWorkflowSection';
import { ExperimentationFunnel } from '../../components/labs/rd/ExperimentationFunnel';
import { RDFailureModes } from '../../components/labs/rd/RDFailureModes';
import { RDFounderMemo } from '../../components/labs/rd/RDFounderMemo';

export const metadata = {
  title: 'R&D Lab | Protein OS',
  description: 'Operating system layer for disciplined innovation, benchmarking, and AI-assisted formulation.',
};

export default function RDLabPage() {
  return (
    <main className="min-h-screen selection:bg-fuchsia-500/30 selection:text-foreground bg-background">

      <article>
          <RDHero />
          <RDPrinciples />
          <RecipeDevelopmentConsole />
          <BenchmarkingLayer />
          <AIWorkflowSection />
          <ExperimentationFunnel />
          <RDFailureModes />
          <RDFounderMemo />
      </article>

      <SystemContinuation 
        nextRoute="/labs/expansion" 
        nextTitle="Expansion Lab" 
        description="Determine what adjacencies strengthen the brand vs fragment it." 
        step="09"
      />
    </main>
  );
}
