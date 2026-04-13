export interface WorkbookBlock {
  id: string;
  type: 'prompt' | 'question' | 'hypothesis' | 'validation' | 'risk';
  title: string;
  body: string;
}

export interface WorkbookChapter {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  blocks: WorkbookBlock[];
}

export const researchWipData: WorkbookChapter[] = [
  {
    id: 'how-to-use',
    title: 'How to Use This Workbook',
    eyebrow: 'Internal Study',
    summary: 'This is a private, working study layer built from deep retired research. It is intended for mastery, not display.',
    blocks: [
      {
        id: 'purpose',
        type: 'prompt',
        title: 'The Narrative Intention',
        body: 'This page captures the "backstage" of the Nuvie Thesis. While the public pages define presentable insights, this workbook holds the questions that still need Direct Founder Evidence.'
      },
      {
        id: 'open-nature',
        type: 'prompt',
        title: 'The Open Status',
        body: 'Prompts here may remain unresolved until we have direct data on Nuvie’s specific product stability, channel margins, or consumer behavior. Avoid providing finished answers; use this as a direct study checklist.'
      }
    ]
  },
  {
    id: 'strategy',
    title: 'Strategy',
    eyebrow: 'Step 01',
    summary: 'Portfolio Design as a focusing mechanism. Moving from fragmented SKU count to Role Clarity.',
    blocks: [
      {
        id: 'strat-q1',
        type: 'question',
        title: 'The Wedge vs. The Anchor',
        body: 'Is the Coffee Ritual currently the most reliable acquisition wedge for Nuvie? What evidence would confirm that it lowers the cost of first trial compared to the indulgence anchors?'
      },
      {
        id: 'strat-pillar-audit',
        type: 'prompt',
        title: 'Structural Pillar Audit',
        body: 'The OS defines 4 pillars: Hero (Acquisition), Repeat (Retention), Support (Logistics), and Indulgence (Discovery). Does every current SKU earn its place through occasion logic and channel fit?'
      },
      {
        id: 'strat-coord',
        type: 'question',
        title: 'Coordinate Map Logic',
        body: 'On the axis of "Strong Habit" vs "Pure Impulse", where is the strategic center of gravity? Does Nuvie win through daily routine hijacking or situational discovery?'
      },
      {
        id: 'strat-h1',
        type: 'hypothesis',
        title: 'Wedge-Led Retention',
        body: 'Habit-replacement SKUs (like Coffee) will demonstrate higher structural repeat rates and lower churn than novelty-led SKUs (like Seasonal Flavors).'
      },
      {
        id: 'strat-directive-1',
        type: 'risk',
        title: 'Protection of the Wedge',
        body: 'Risk: Diluting the morning ritual with too many coffee variants (Mocha, Caramel) before the Core Latte has saturated its primary channel.'
      },
      {
        id: 'strat-bar-exp',
        type: 'risk',
        title: 'Bar Expansion Discipline',
        body: 'Current split is Brownie (Smooth Impulse) vs Almond (Crunch Impulse). Hold at 2 SKUs. Expanding further introduces severe cannibalization before D2C shipping logic is perfected.'
      },
      {
        id: 'strat-directive-2',
        type: 'prompt',
        title: 'Heritage Anchor Trust',
        body: 'Regional flavors (Kesar Pista) act as "Trust SKUs." They break the Western "chemical gym powder" stigma. Ensure this SKU receives subscription-focused marketing to lock in long-term household LTV.'
      }
    ]
  },
  {
    id: 'economics',
    title: 'Economics',
    eyebrow: 'Step 02',
    summary: 'Analyzing the viability of formats against the drag of logistics and margin pressure.',
    blocks: [
      {
        id: 'econ-forces',
        type: 'prompt',
        title: 'The 4 Structural Forces',
        body: 'Survival is determined by Processing Load (heat degradation), Packaging Burden (heavy containers), Logistics Drag (weight-to-value), and Discount Dependence.'
      },
      {
        id: 'econ-q1',
        type: 'question',
        title: 'The RTD Shipping Paradox',
        body: 'Liquid formats are heavy per unit of value. D2C shipping for a 12-pack will consume gross margin unless AOV is pushed above $60. Push users immediately to multi-case logic.'
      },
      {
        id: 'econ-channel-margins',
        type: 'risk',
        title: 'The Dark Store Squeeze',
        body: 'Risk: Quick Commerce platforms (Swiggy/Blinkit) demand 35-45% margin. Selling a single RTD bottle is a negative-margin exercise. Deliver units in "Cases of 6" even on Q-comm to protect the bottom line.'
      },
      {
        id: 'econ-r1',
        type: 'risk',
        title: 'The Discount Trap',
        body: 'When repeat is weak, discounting pretends to be growth. Every 10% slashed to force a trial creates an artificial LTV curve that fractures once the discount is removed.'
      },
      {
        id: 'econ-pack-arch',
        type: 'hypothesis',
        title: 'Pack Architecture Parity',
        body: 'Pick-and-pack fees are identical for 6 and 12 units. The margin profile transforms at double volume. Refuse trial-sized packs if blended fulfillment costs exceed 30% of basket value.'
      },
      {
        id: 'econ-v1',
        type: 'validation',
        title: 'Unit Profitability Check',
        body: 'Validate: Blended shipping and handling costs across Tier 1 geographies. Does the current price point survive the impulse Q-Comm platform fee?'
      }
    ]
  },
  {
    id: 'channels',
    title: 'Channels',
    eyebrow: 'Step 03',
    summary: 'How distribution geography reshapes the meaning and performance of the product.',
    blocks: [
      {
        id: 'chan-thesis',
        type: 'prompt',
        title: 'Behavioral Geometry',
        body: 'Channel is context. It dictates pricing tolerance and repeat probability long before the consumer tastes. Discovery Logic vs. Decision Friction vs. Basket Context.'
      },
      {
        id: 'chan-search',
        type: 'question',
        title: 'The Search Engine Trap',
        body: 'Users do not browse 10-minute apps; they execute immediate situation rescues. If the thumbnail doesn’t instantly solve "I am tired" or "I need post-gym protein," you will not convert.'
      },
      {
        id: 'chan-h1',
        type: 'hypothesis',
        title: 'Office Pantry Dominance',
        body: 'The 3 PM slump is the highest-leverage occasion. B2B sales networks generate zero CAC and create a daily sampling loop that pushes users back to D2C for weekends.'
      },
      {
        id: 'chan-unboxing',
        type: 'question',
        title: 'The Unboxing Conversion',
        body: 'If a Q-Comm impulse purchase lacks a high-visibility unboxing mechanism to convert them to a D2C subscriber, you are purely subsidizing the platform’s growth.'
      },
      {
        id: 'chan-mismatch',
        type: 'risk',
        title: 'The Geometry of Mismatch',
        body: 'Risk: Bulk liquid multi-packs in Quick Commerce (logistics disaster) or Premium trial discovery in unbranded corner stores (brand destruction).'
      },
      {
        id: 'chan-memo-vanilla',
        type: 'validation',
        title: 'Vanilla Anchor Protection',
        body: 'Validate: Wah Vanilla is a D2C staple. It wins in the home blender, not on the impulse shelf at a gas station. Do not waste Modern Trade slotting fees on Vanilla.'
      }
    ]
  },
  {
    id: 'growth',
    title: 'Growth',
    eyebrow: 'Step 04',
    summary: 'Mapping trust transfer and behavioral loops. Growth as a result of repeated fit.',
    blocks: [
      {
        id: 'grow-lock',
        type: 'prompt',
        title: 'The Sequential Lock',
        body: 'Growth follows: Awareness Hook -> Occasion Entry -> Trust Confirmation -> Repeat Trigger. Fracture any link, and you bought a trial, not a customer.'
      },
      {
        id: 'grow-archetypes',
        type: 'question',
        title: 'Archetype Confusion',
        body: 'Indulgence-seekers require UGC taste-test proof. Utility-seekers require "High-Stress" proof (surviving a crowded laptop bag). Performance optimizers require Clinical proof (Macro panel close-ups).'
      },
      {
        id: 'grow-q1',
        type: 'question',
        title: 'Borrowed Trust',
        body: 'Growth depends on breaking the "chalky supplement" stigma. You cannot claim you are different; you must borrow trust from creators and contexts that prove it.'
      },
      {
        id: 'grow-crm',
        type: 'hypothesis',
        title: 'The 8 AM Habit Hijack',
        body: 'Traffic is useless if product sits unused. CRM flows must teach the habit (mixer/recipe) to ensure pantry-stocking occurs before the first 30 days are up.'
      },
      {
        id: 'grow-loops',
        type: 'prompt',
        title: 'Measure Loops, Not Trial',
        body: 'A spike in Instagram conversion for Vanilla is useless if it sits unused. You are not selling powder; you are selling a recurring behavioral window.'
      },
      {
        id: 'grow-failure',
        type: 'risk',
        title: 'Indulgence Churn',
        body: 'Risk: Acquired via glossy chocolate-pouring ad, but the product has a distinct whey aftertaste. Instant Churn. The product broke the core promise.'
      }
    ]
  },
  {
    id: 'packaging',
    title: 'Packaging & Trust',
    eyebrow: 'Step 05',
    summary: 'The product before it is tasted. Perception layers and semantic clarity.',
    blocks: [
      {
        id: 'pack-anatomy',
        type: 'prompt',
        title: 'Anatomy of Credibility',
        body: 'Trust Layers: Visual Authority (matte vs neon) -> Claim Hierarchy -> The Flip Test -> Somatic Expectation (digestive fear).'
      },
      {
        id: 'pack-aesthetic',
        type: 'risk',
        title: 'The Aesthetic Mismatch',
        body: 'Risk: The "E-Commerce Black Hole" (matte beige looks unbranded on digital screens) and "Gym-Bro Alienation" (metallic fonts rejecting the casual professional).'
      },
      {
        id: 'pack-150px',
        type: 'prompt',
        title: 'The 150px Thumbnail War',
        body: 'Quick Commerce is a search engine, not a grocery store. If the macros ("20g") and flavor cues aren\'t massive in a 150x150px thumbnail, the user skips you. Redesign the primary digital asset for thumb-stopping clarity.'
      },
      {
        id: 'pack-digestion',
        type: 'hypothesis',
        title: 'Front-Loaded Somatic Trust',
        body: 'Move digestive comfort signals (Lactose-Free) to the top visual hierarchy. Lose 40% of consumers if they fear the bloat before they taste the drink.'
      },
      {
        id: 'pack-semantics',
        type: 'prompt',
        title: 'Claim Discipline',
        body: '"Sugar-Free" sounds like an artificial lab chemical. "No Added Sugar" or "Naturally Sweetened" dictates whether they trust the product or feel like they are compromising.'
      },
      {
        id: 'pack-v1',
        type: 'validation',
        title: 'Thumbnail Macro Callouts',
        body: 'Validate: Artificially unscaling the "20g" text on the digital asset. Elegant minimalism means nothing when a user is rapid-scrolling on a phone.'
      }
    ]
  },
  {
    id: 'flavor',
    title: 'Flavor',
    eyebrow: 'Step 06',
    summary: 'Balancing acquisition excitement with retention stability.',
    blocks: [
      {
        id: 'flav-strategy',
        type: 'prompt',
        title: 'Sensory Strategy',
        body: 'Excitement is for acquisition. Familiarity is for retention. A bad flavor kills repeat; an "exciting" one often becomes exhausting novelty.'
      },
      {
        id: 'flav-threshold',
        type: 'question',
        title: 'The Sweetness Threshold',
        body: 'High sweetness wins on first sip but creates palate fatigue on day three. Is the sweetness level optimized for a 7 AM habit or a one-time taste test?'
      },
      {
        id: 'flav-h1',
        type: 'hypothesis',
        title: 'Bait Product Strategy',
        body: 'Novelty flavors exist to stop the scroll. Limit to two "Discovery" flavors per year. Transition these buyers into Vanilla or Coffee subscribers within 30 days.'
      },
      {
        id: 'flav-concepts',
        type: 'prompt',
        title: 'Summer Concept Extensions',
        body: 'Using seasonality (concepts like Thandai or Mango) as trial-pull tools to refresh the brand without fragmenting the core portfolio hierarchy.'
      },
      {
        id: 'flav-india',
        type: 'prompt',
        title: 'Regional Familiarity',
        body: 'Cultural flavor mapping moves products from the "gym" mental bucket into "daily wellness". Familiar regional profiles signal trust and generational safety.'
      },
      {
        id: 'flav-failure',
        type: 'risk',
        title: 'Vanilla Fatigue Churn',
        body: 'Risk: Formulating the staple "Vanilla" to be too sweet so it wins lab tests, but clashing with coffee/smoothies in real utility. Churn spikes on week 3.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    eyebrow: 'Step 07',
    summary: 'Where formulation dreams meet industrial physics.',
    blocks: [
      {
        id: 'manu-principles',
        type: 'prompt',
        title: 'Scale foundations',
        body: 'Ingredient behavior, Shear & Pressure, Thermal Stress (135C UHT), and Filling Integrity. Each is a junction where quality is locked in or lost. Does the recipe survive 135C sterilization?'
      },
      {
        id: 'manu-shear',
        type: 'question',
        title: 'The Silk-Smooth Mandate',
        body: 'Homogenization at 2000-3000 PSI is what separates a gritty powder mix from a silk-smooth RTD shake. Do we have the PSI capacity for premium mouthfeel?'
      },
      {
        id: 'manu-realities',
        type: 'prompt',
        title: 'Scale-Up Realities',
        body: 'MOQ constraints (10k-25k units), Batch Yield (3-7% loss destroys margin), Line Capability, and Supply Continuity (single points of failure).'
      },
      {
        id: 'manu-shock',
        type: 'prompt',
        title: 'Industrial Shock',
        body: 'The lab blender is a sanctuary of control. The jump to a 5,000L commercial line is a 100x shock where stabilization often kills flavor.'
      },
      {
        id: 'manu-r1',
        type: 'risk',
        title: 'Integrity Auditing',
        body: 'Risk: A product that separates or seditments within 3 months is a strategic failure. Manufacturing must prioritize shelf-stability over recipe success.'
      },
      {
        id: 'manu-v1',
        type: 'validation',
        title: 'Machine Constraints Readiness',
        body: 'Validate: Understanding the machine constraints before the recipe is locked. Partner in strategy vs landlord of machinery.'
      }
    ]
  },
  {
    id: 'rd',
    title: 'R&D',
    eyebrow: 'Step 08',
    summary: 'Disciplined creation through benchmarking and sensory filtering.',
    blocks: [
      {
        id: 'rd-strategy',
        type: 'prompt',
        title: 'Innovation Strategy',
        body: 'Decompose market leaders -> Isolate Faults (aftertaste/texture) -> Fix the Gap -> Validate Blind. If the consumer doesn’t pick Nuvie blind, R&D failed.'
      },
      {
        id: 'rd-q1',
        type: 'question',
        title: 'Benchmark Filtering',
        body: 'Decompose the benchmark: tasting it cold vs warm, mapping sweetness drift. What is the specific sensory gap we are solving?'
      },
      {
        id: 'rd-ai',
        type: 'prompt',
        title: 'Augmented Innovation',
        body: 'AI suggests 1,000 textures; a human operator must taste the grit. AI cannot replace sensory validation or industrial shelf-life stability testing.'
      },
      {
        id: 'rd-h1',
        type: 'hypothesis',
        title: 'Iterative Discipline',
        body: '"Does this taste better?" is a weak hypothesis. "Does 5% more fat mask the isolate chalkiness?" is a strategic iteration question.'
      },
      {
        id: 'rd-funnel',
        type: 'prompt',
        title: 'The Kill-or-Scale Funnel',
        body: 'Most recipes should be killed early. Gates: Benchmark check, Sensory check, Manufacturability (UHT survival) check.'
      },
      {
        id: 'rd-v1',
        type: 'risk',
        title: 'The Kitchen Prototype Trap',
        body: 'Risk: Real success is surviving the 135°C sterilization of an industrial line. If it fails there, it’s a concept, not a product.'
      }
    ]
  },
  {
    id: 'expansion',
    title: 'Expansion',
    eyebrow: 'Step 09',
    summary: 'Determining adjudicencies that strengthen vs fragment the brand.',
    blocks: [
      {
        id: 'exp-filter',
        type: 'prompt',
        title: 'The Adjacency Filter',
        body: 'Trust Transferability, Format CapEx, Cannibalization Risk, and Occasion Extension. A new SKU must strengthen the core system, not distract from it.'
      },
      {
        id: 'exp-arch',
        type: 'prompt',
        title: 'The 80/20 Rule',
        body: 'Spend 80% on "Core Deepening" and 20% on "Near Adjacency." Attempting "Strategic Stretches" in year one often bankrupts the margin profile.'
      },
      {
        id: 'exp-spoonables',
        type: 'risk',
        title: 'The Spoonable Risk',
        body: 'Risk: Cold-chain yogurt/spoonables are a low-margin knife fight in the Indian market. Delay until terminal velocity is guaranteed by a Q-Comm partner.'
      },
      {
        id: 'exp-kiosks',
        type: 'prompt',
        title: 'Kiosks as Theaters',
        body: 'Kiosks are sampling theaters, not profit centers. Optimize for email capture and transferring physical users to online D2C subscribers.'
      },
      {
        id: 'exp-adaptation',
        type: 'risk',
        title: 'The Mumbai vs. LA Trap',
        body: 'Risk: Copy-pasting Western blueprints. Cold chains and digestive tolerances break blueprints. Innovation Requires Translation, not just adaptation.'
      },
      {
        id: 'exp-v1',
        type: 'validation',
        title: 'Deepen Before Stretching',
        body: 'Validate: 12-pack cartons optimized for household/office pantry stacking. Increase LTV before acquiring new headache streams.'
      }
    ]
  },
  {
    id: 'open-questions',
    title: 'Open Questions / Next Bets',
    eyebrow: 'Synthesis',
    summary: 'Unresolved tensions and high-potential areas for future study.',
    blocks: [
      {
        id: 'open-q1',
        type: 'question',
        title: 'The Founder Bridge',
        body: 'What information is non-negotiable before Nuvie’s next 30-day initiatives can be locked?'
      },
      {
        id: 'open-h1',
        type: 'hypothesis',
        title: 'The Conviction Map',
        body: 'Where is conviction currently low, and what direct evidence (Founder, Consumer, or Channel) would transform curiosity into strategy?'
      },
      {
        id: 'open-synthesis',
        type: 'prompt',
        title: 'Final Synthesis Prompt',
        body: 'Merging the tensions: Premium aesthetics vs digital legibility; acquisition novelties vs habit retention; lab success vs industrial reality.'
      }
    ]
  }
];
