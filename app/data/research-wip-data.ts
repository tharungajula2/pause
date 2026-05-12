import type { WorkbookChapter } from '../types/index';

export const researchWipData: WorkbookChapter[] = [
  {
    id: '00-sticky-notes',
    type: 'sticky-notes',
    eyebrow: 'STICKY NOTES',
    title: 'Raw observations. Unfiltered.',
    summary: 'Things I noticed while building this framework. Not conclusions — just signals worth keeping somewhere.',
    stickyNotes: [
      {
        id: 'note-1',
        title: 'Note 1 — Indulgence Is the Real Entry Point',
        status: 'OPEN',
        body: "Every better-for-you brand in India leads with health. But the consumer's first question is always taste. The brands winning repeat are the ones that solved taste first and let health be the quiet bonus. Signal: positioning health loudly may actually be the conversion killer at the trial stage."
      },
      {
        id: 'note-2',
        title: 'Note 2 — Occasion Beats Category Every Time',
        status: 'OPEN',
        body: "People do not think in product categories. They think in moments — the 4pm slump, the post-workout window, the evening indulgence. The brand that owns a specific moment owns the repeat. Signal: the strategic question is not which category to compete in but which daily moment to own."
      },
      {
        id: 'note-3',
        title: 'Note 3 — Texture and Taste Are Non-Negotiable',
        status: 'OPEN',
        body: "The biggest failure pattern in functional food is asking the consumer to compromise on sensory experience for a health benefit. Baked vs fried, thick vs thin, creamy vs watery — these are not minor details. They are the entire product decision. Signal: food technology has advanced enough that the compromise should no longer exist. The optimization problem is now solvable."
      },
      {
        id: 'note-4',
        title: 'Note 4 — Quick Commerce Is a Data Surface',
        status: 'OPEN',
        body: "Availability gaps, search ranking drops, listing quality variance — these are all measurable signals hiding in plain sight on quick commerce platforms. Most brands treat these as ops problems. The sharp ones treat them as growth levers. Signal: the brand that instruments its quick commerce presence like a product has a structural advantage."
      }
    ]
  },
  {
    id: '01-growth-intelligence',
    type: 'qc-intelligence',
    eyebrow: 'MODULE 01',
    title: 'Growth Intelligence',
    summary: 'Strategic analysis of channel performance and behavioral signals.',
  },
  {
    id: '02-product-lab',
    type: 'flavor-lab',
    eyebrow: 'MODULE 02',
    title: 'Product Lab',
    summary: 'Exploration of format, flavor, and cultural fit logic.',
  },
  {
    id: '03-visionary-essence',
    type: 'editorial',
    eyebrow: 'MODULE 03',
    title: 'The Visionary Essence',
    summary: 'The core thesis and visionary mandate behind the FMCG Whitespace OS.',
    sections: [
      {
        id: 'visionary-mandate',
        anchorId: 'visionary-mandate',
        content: [
          {
            type: 'callout',
            title: 'The Visionary Mandate',
            body: 'This is not just a study; it is a vision board for a brand built by standing on the road, eyes and ears open. We are identifying the massive whitespaces in legacy FMCG categories. Our approach is to pick a lane, pack the punch in one go, and solve the "Better-for-you" math problem. We are here to provide mass-premium indulgence that is functionally controlled.',
          }
        ]
      },
      {
        id: 'the-core-thesis',
        anchorId: 'the-core-thesis',
        title: 'Module 00 — The Core Thesis: Why FMCG Whitespace OS Exists',
        content: [
          {
            type: 'sub-section',
            title: '1. Eyes and Ears on the Road',
            body: "I don't build from a boardroom. I build by standing on the street, watching how people actually eat, where they struggle, and what they reach for when no one is watching. This brand is a direct response to the community's unspoken needs. If a customer gives you attention once, you have to pack everything into that one punch. Impressions matter, but leaving a strong mark is the goal."
          },
          {
            type: 'sub-section',
            title: '2. Identifying FMCG Whitespaces',
            body: "Legacy FMCG is a sea of staleness. There are whitespaces everywhere—categories that have been ignored for decades. We look for cooler, newer, repositioned products that provide Functional Control (like 100-calorie portion control) in guilt-heavy zones. We operating only in categories that have large existing demand."
          },
          {
            type: 'sub-section',
            title: '3. The Math of Better-for-You (Optimization)',
            body: '"Better-for-you" is an optimization problem. We remove the top guilt-heavy ingredients in descending order and replace them with high-tech alternatives that maximize taste. It\'s Science + Art: For example, in the chips category, baked chips often lose the texture of fried ones. But what if we reduce the thickness of the chips? Eating less in one go and creating a lighter feel can compensate for the baked texture disadvantages. That is the kind of balance we find.'
          },
          {
            type: 'paragraph',
            text: 'We measure taste like legacy companies do but without the massive overhead, targeting the "Love and Like" bracket.'
          },
          {
            type: 'sub-section',
            title: '4. Protein + Indulgence',
            body: 'Protein isn\'t for gym-goers; it\'s for everyone. The greatest product ever built is a "Diet Plan"—because the consumer always blames themselves when they fail. We remove that blame by providing "Protein + Indulgence." If you\'re drinking cold coffee anyway, might as well drink the prototype\'s "Caffe Latte"—you get the coffee and the protein.'
          },
          {
            type: 'sub-section',
            title: '5. The Sine Curve: Health + Indulgence',
            body: 'We don\'t force people to choose. We balance the sine curve. We give indulgence its full weightage while building in health as a default brand standard. India is a value-for-money market; Price = Expectations. We pick a lane and communicate it effectively.'
          },
          {
            type: 'sub-section',
            title: '6. Texture: The Silent Creator',
            body: 'Texture is the silent killer or creator of a brand. In shakes and bars, texture is as important as flavor. Our most important hire is "The Food Technologist" to ensure the math of food science meets the art of consumption.'
          }
        ]
      }
    ]
  },
  {
    id: '04-supply-chain',
    type: 'editorial',
    eyebrow: 'MODULE 04',
    title: 'Manufacturing & Supply Chain',
    summary: 'Deep dive into protein science, quality metrics, and supply chain dynamics.',
    sections: [
      {
        id: 'protein-science',
        anchorId: 'protein-science',
        title: 'Module 01 — From Raw Ingredient to Ready Bottle',
        subtitle: 'The Supply Chain of Protein',
        content: [
          {
            type: 'image-slot',
            label: 'Module 01 Hero',
            description: 'The raw material and production environment',
          },
          {
            type: 'sub-section',
            title: 'Section 1: What Is Protein',
            body: 'Protein is not a single thing. It is a class of molecules, long chains of amino acids that fold into specific shapes and carry out almost every structural and functional job in the body. Enzymes, hormones, immune molecules, muscle fibers, connective tissue, all protein.'
          },
          {
            type: 'paragraph',
            text: 'The body is in constant protein turnover: breaking down old proteins, rebuilding new ones. The nutritional question is simply whether you are supplying enough quality amino acids, consistently, to meet that demand.'
          },
          {
            type: 'list',
            listType: 'bullet',
            items: [
              '20 amino acids total',
              '9 are "essential" (indispensable): Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Valine',
              'Body cannot make these in sufficient amounts — must come from food',
              'Leucine specifically is a key trigger for muscle protein synthesis',
              'Complete = all 9 essential amino acids in adequate proportions.'
            ]
          },
          {
            type: 'table',
            headers: ['Metric', 'Description'],
            rows: [
              ['PDCAAS', 'Older method. Maximum score = 1.0. Uses crude fecal digestibility.'],
              ['DIAAS', 'Newer, more accurate. Uses true ileal digestibility. Recommended by FAO.'],
              ['India Diet', '~46% rural / 39% urban protein from cereals. Structural problem is quality, not just quantity.']
            ]
          },
          {
            type: 'callout',
            title: 'How Much Protein Do You Actually Need',
            body: 'Per meal threshold: approximately 20 to 25g of high-quality protein for meaningful muscle protein synthesis response — this is exactly why the 20g format is deliberate, not arbitrary.'
          }
        ]
      },
      {
        id: 'whey-vs-filtered',
        anchorId: 'whey-vs-filtered',
        title: 'Section 2: Two Types of Protein — Whey vs Ultra-Filtered Milk',
        content: [
          {
            type: 'comparison',
            entries: [
              {
                title: 'Whey Protein',
                body: 'Byproduct of cheese making. Fast-digesting. Peaks in 60-90 mins. Often imported (30% duty + 18% GST).'
              },
              {
                title: 'Ultra-Filtered Milk',
                body: 'Not a byproduct. Retains casein and whey in natural ratio (80:20). Slower, sustained release. Sourced domestically.'
              }
            ]
          },
          {
            type: 'image-slot',
            description: 'Ultra-filtration membrane diagram — milk in, concentrate out, permeate out',
          }
        ]
      },
      {
        id: 'ingredient-breakdown',
        anchorId: 'ingredient-breakdown',
        title: 'Section 3: Ingredient Breakdown',
        content: [
          {
            type: 'table',
            headers: ['Ingredient', 'Role', 'Strategic Note'],
            rows: [
              ['Ultra Filtered Milk (66%)', 'Protein Delivery', '20g protein source'],
              ['FOS (2%)', 'Prebiotic Fiber', 'Gut health / 18% RDA fiber'],
              ['Lactase Enzyme', 'Digestibility', 'Enables lactose-free claim'],
              ['Gellan Gum', 'Stabilizer', 'Ensures consistent texture'],
              ['Sucralose', 'Sweetener', 'Heat-stable sweetness (no calories)']
            ]
          }
        ]
      },
      {
        id: 'manufacturing-process',
        anchorId: 'manufacturing-process',
        title: 'Section 4: The Manufacturing Process',
        content: [
          {
            type: 'list',
            listType: 'numbered',
            items: [
              'Raw Material Sourcing & QC',
              'Ultra-Filtration',
              'Lactase Treatment',
              'Blending & pH Adjustment',
              'Homogenization (~200 bar)',
              'Filling (HDPE bottles)',
              'Retort Processing (121°C for 15-30 min)',
              'Cooling & Incubation (7-14 days)',
              'Final QC Release',
              'Labelling & Dispatch'
            ]
          },
          {
            type: 'callout',
            title: 'Retort vs UHT',
            body: 'Retort allows for ambient shelf life without preservatives but has a harsher sensory impact compared to UHT.',
            highlight: 'Retort: In-container sterilization'
          }
        ]
      }
    ]
  },
  {
    id: '05-consumer-reality',
    type: 'editorial',
    eyebrow: 'MODULE 05',
    title: 'The Consumer Reality',
    summary: 'Understanding the Indian consumer: trust gaps, behavioral segments, and physiological constraints.',
    sections: [
      {
        id: 'protein-quality-gap',
        anchorId: 'protein-quality-gap',
        title: 'Module 02 — The Indian Consumer',
        subtitle: 'The Behavioral Economics of Protein',
        content: [
          {
            type: 'image-slot',
            label: 'Module 02 Hero',
            description: 'The Indian consumer and protein reality',
          },
          {
            type: 'sub-section',
            title: "Section 1: India's Protein Reality in Data",
            body: "India's protein problem is about quality, not quantity. While per capita intake looks adequate on paper (~63g), the functional deficiency is masked by cereal-heavy diets with low digestibility and incomplete amino acid profiles."
          },
          {
            type: 'table',
            headers: ['Source', 'Rural Share', 'Urban Share', 'NIN Recommended'],
            rows: [
              ['Cereals', '45.9%', '38.7%', '32%'],
              ['Pulses', '8.7%', '9.1%', '19%'],
              ['Milk & Dairy', '11.0%', '12.9%', '—'],
              ['Egg, Fish, Meat', '12.4%', '14.1%', '—']
            ]
          },
          {
            type: 'callout',
            title: 'The 20% Haircut',
            body: 'Total crude protein intake multiplied by a 0.8 digestibility correction leaves only 48g of quality protein. Apparent adequacy masks functional deficiency.'
          }
        ]
      },
      {
        id: 'trust-mechanics',
        anchorId: 'trust-mechanics',
        title: 'Section 2: The Trust Crisis',
        content: [
          {
            type: 'paragraph',
            text: '25-30% of all products sold in India are counterfeit. Testing found 70% of popular supplements mislabeled, with some containing fungal toxins or lead.'
          },
          {
            type: 'callout',
            title: 'The Verification Advantage',
            body: 'Brands that make their testing results independently verifiable — QR-code-linked batch reports, public lab results — are building trust capital that the regulatory framework cannot provide.'
          }
        ]
      },
      {
        id: 'behavioral-segments',
        anchorId: 'behavioral-segments',
        title: 'Section 4: Behavioral Segments',
        content: [
          {
            type: 'comparison',
            entries: [
              {
                title: 'Fitness Enthusiasts',
                body: 'Legacy core. High knowledge. Primarily powder users; RTD for convenience.'
              },
              {
                title: 'Casual Health-Conscious',
                body: 'Urban professionals/parents. Looking for satiety, not muscle. Fast-growing segment.'
              },
              {
                title: 'Convenience Seekers',
                body: 'Bought for the occasion. Quick commerce drives this spontaneous segment.'
              }
            ]
          }
        ]
      },
      {
        id: 'physiological-moat',
        anchorId: 'physiological-moat',
        title: 'Section 5: Lactose Intolerance — The Formulation Moat',
        content: [
          {
            type: 'sub-section',
            title: 'The Genetic Reality',
            body: '60-70% of India\'s population has some degree of lactose intolerance. In South India, this figure rises to 66.6%.'
          },
          {
            type: 'callout',
            title: 'Strategic Advantage',
            body: 'Lactase enzyme treatment is not a marketing claim. It is a formulation decision that structurally expands the addressable consumer base in South India from 33% to nearly 100%.',
            highlight: 'Moat: Full Population Accessibility'
          }
        ]
      },
      {
        id: 'consumption-occasions',
        anchorId: 'consumption-occasions',
        title: 'Section 6: The 5 Occasions',
        content: [
          {
            type: 'list',
            listType: 'numbered',
            items: [
              'Morning Protein Gap (6-9 AM): Quick breakfast replacement.',
              'Post-Workout Recovery (7-9 AM, 5-8 PM): Convenience over powder prep.',
              'Afternoon Energy Slump (2-4 PM): The highest-potential workplace moment.',
              'Guilt-Free Snack Replacement: Resolving the "indulgence vs guilt" tension.',
              'Late Evening Impulse (9 PM-Midnight): Dessert substitute via Quick Commerce.'
            ]
          },
          {
            type: 'paragraph',
            text: 'Strategic Insight: Brands owning the "Afternoon Slump" on Quick Commerce compete for every urban professional, while gym-focused brands compete for only ~3% of the population.'
          }
        ]
      }
    ]
  },
  {
    id: '06-unit-economics',
    type: 'editorial',
    eyebrow: 'MODULE 06',
    title: 'Unit Economics',
    summary: 'The P&L waterfall, quick commerce margins, and competitive pricing dynamics.',
    sections: [
      {
        id: 'pl-waterfall',
        anchorId: 'pl-waterfall',
        title: 'Module 03 — The Business Model',
        subtitle: 'Economic Strategy — The Unit Economics of Distribution',
        content: [
          {
            type: 'image-slot',
            label: 'Module 03 Hero',
            description: 'The business model and unit economics overview',
          },
          {
            type: 'table',
            headers: ['Line Item', 'Amount (Rs)', '% of MRP'],
            rows: [
              ['MRP', '110', '100%'],
              ['GST (5%)', '-5.5', '-5%'],
              ['Discount (15%)', '-16.5', '-15%'],
              ['Net Selling Price', '88', '80%'],
              ['COGS', '-40 to -48', '-36 to -44%'],
              ['Gross Margin', '40 to 48', '36 to 44%'],
              ['Shipping', '-13 to -20', '-12 to -18%'],
              ['CM2 (Post-fulfillment)', '15 to 30', '14 to 27%'],
              ['Net Contribution (CM3)', '-10 to +5', '-9% to +5%']
            ],
            footnote: 'Breaking even requires ~4 purchases; only 22% of customers repeat.'
          },
          {
            type: 'callout',
            title: 'The RTD Margin Challenge',
            body: 'RTD beverages achieve 35-50% gross margins — significantly below protein powder (55-70%). Compression comes from liquid processing costs, packaging per serving, and weight-to-value ratios for shipping.'
          }
        ]
      },
      {
        id: 'qc-economics',
        anchorId: 'qc-economics',
        title: 'Section 2: Quick Commerce Margin Stack',
        content: [
          {
            type: 'paragraph',
            text: 'Quick commerce is the dominant discovery channel but also the most margin-punishing. Platform ad rates surged 40-50% in 2025.'
          },
          {
            type: 'table',
            headers: ['Fee Component', 'Est. Impact (Rs)', '% of MRP'],
            rows: [
              ['Base Commission', '11 to 18', '10-16%'],
              ['Ad Spend (Visibility)', '9 to 15', '8-14%'],
              ['Warehousing / Logistics', '3 to 5', '3-5%'],
              ['Listing Fees', '2 to 5', '2-5%'],
              ['Funded Discounts', '5 to 15', '5-14%'],
              ['Net Realization', '40 to 65', '36-59%']
            ]
          }
        ]
      },
      {
        id: 'competitive-pricing',
        anchorId: 'competitive-pricing',
        title: 'Section 3: Competitive Pricing Map',
        content: [
          {
            type: 'table',
            headers: ['Brand', 'Protein', 'MRP', 'Rs per g Protein'],
            rows: [
              ['Amul HP Blueberry', '20g', 'Rs 50', 'Rs 2.50'],
              ['FMCG Whitespace OS', '20g', 'Rs 110', 'Rs 4.40 - 4.95'],
              ['Epigamia Turbo', '25g', 'Rs 141', 'Rs 3.96'],
              ['Yogabar', '26g', 'Rs 131', 'Rs 4.19 - 4.58'],
              ['Phab', '18g', 'Rs 125', 'Rs 5.56 - 6.83']
            ]
          },
          {
            type: 'callout',
            title: 'The Price Anchor',
            body: 'Amul at Rs 2.50/g creates a value floor. Premium brands must justify exceeding this by 2x through taste, functionality, and brand experience.'
          }
        ]
      }
    ]
  },
  {
    id: '07-competitive-identity',
    type: 'editorial',
    eyebrow: 'MODULE 07',
    title: 'Competitive Identity',
    summary: 'Strategic positioning, trust architecture, and the competitive landscape of Indian health food.',
    sections: [
      {
        id: 'competitive-tiers',
        anchorId: 'competitive-tiers',
        title: 'Module 04 — The Brand',
        subtitle: 'Competitive Identity — The Positioning Architecture of Health',
        content: [
          {
            type: 'image-slot',
            label: 'Module 04 Hero',
            description: 'Brand positioning and trust architecture',
          },
          {
            type: 'sub-section',
            title: 'Section 1: The Competitive Map — Seven Tiers',
            body: 'India\'s protein landscape is bifurcated into seven distinct tiers, from scale incumbents like MuscleBlaze to dairy giants like Amul.'
          },
          {
            type: 'table',
            headers: ['Tier', 'Example Brand', 'Competitive Edge'],
            rows: [
              ['Scale Incumbents', 'MuscleBlaze', 'Performance / Scale'],
              ['Funded Insurgents', 'The Whole Truth', 'Radical Transparency'],
              ['Celebrity-Powered', 'SuperYou', 'Celebrity + Format Innovation'],
              ['Dairy Cooperatives', 'Amul', 'Massive Cost Advantage (Rs 50 MRP)'],
              ['Premium Dairy', 'Epigamia', 'Premium Indulgence'],
              ['Early-Stage Challengers', 'the brand / Phab', 'Fun-first / Joyful Indulgence'],
              ['FMCG Giants', 'Nestle / ITC', 'Unmatched Distribution']
            ]
          }
        ]
      },
      {
        id: 'positioning-strategy',
        anchorId: 'positioning-strategy',
        title: 'Section 2: The "Healthier Than" Framework',
        content: [
          {
            type: 'paragraph',
            text: 'The defining insight: "Healthier than" dramatically outperforms "healthy" in India. Consumers want permission to indulge without guilt, not a moralizing health lecture.'
          },
          {
            type: 'callout',
            title: 'Defensible Positioning',
            body: 'Operational sacrifices (like in-house manufacturing or shorter shelf life) create genuine moats. Marketing messages alone do not.',
            highlight: 'Operational Sacrifice = Defensibility'
          }
        ]
      },
      {
        id: 'brand-signals',
        anchorId: 'brand-signals',
        title: 'Section 4: Dissecting the Fun-First Bet',
        content: [
          {
            type: 'comparison',
            entries: [
              {
                title: 'The Yellow Bottle',
                body: 'Contrarian choice against black (gym-bro) or green (plant-based). Signals approachability and pops on Quick Commerce thumbnails.'
              },
              {
                title: 'Shockingly Tasty',
                body: 'Disarms the "chalky protein" expectation. Promises sensory surprise over nutritional obligation.'
              },
              {
                title: 'Zero Drama',
                body: 'Encapsulates zero digestive issues, zero preparation friction, and zero guilt.'
              }
            ]
          }
        ]
      },
      {
        id: 'flavor-moat',
        anchorId: 'flavor-moat',
        title: 'Section 5: The Indian Flavor Moat',
        content: [
          {
            type: 'sub-section',
            title: 'Dual-Coded Ingredients',
            body: 'Kesar, Badam, and Pista are "dual-coded" in India — they are seen as both luxurious indulgence and traditional health-givers. This removes the need for complex "permission" framing.'
          },
          {
            type: 'callout',
            title: 'Regional specificty',
            body: 'Culturally resonant flavors like Kesar Pista or Masala Chai are difficult for international giants to authentically replicate, creating a local-first moat.'
          }
        ]
      }
    ]
  },
  {
    id: '08-risk-mapping',
    type: 'editorial',
    eyebrow: 'MODULE 08',
    title: 'Risk Mapping',
    summary: 'Identifying the critical vulnerabilities and failure modes for the OS.',
    sections: [
      {
        id: 'risk-vectors',
        anchorId: 'risk-vectors',
        title: 'Module 05 — What Could Break This',
        subtitle: 'Risk Mapping — The Seven Critical Vulnerabilities',
        content: [
          {
            type: 'sub-section',
            title: '1. The Taste-Repeat Gap',
            body: 'Retort processing can cause "eggy" off-notes. If the product remains a "weekly treat" rather than a "daily habit," the D2C unit economics fail.'
          },
          {
            type: 'sub-section',
            title: '2. The Amul Price Anchor',
            body: 'Paying a 120% premium (Rs 110 vs Rs 50) over Amul for the same 20g of protein is a high bar for mass-market adoption.'
          },
          {
            type: 'sub-section',
            title: '3. Silent Digestive Churn',
            body: 'Even with lactose-free claims, sensitivities to sweeteners or fibers (FOS) can cause "silent churn" where consumers stop buying without complaining.'
          }
        ]
      },
      {
        id: 'economics-risks',
        anchorId: 'economics-risks',
        title: 'Supply Chain & Financial Risks',
        content: [
          {
            type: 'table',
            headers: ['Damage Rate', 'Annual Loss Impact', 'Strategic Risk'],
            rows: [
              ['1.0%', 'Rs 1.2 Lakh', 'Acceptable overhead'],
              ['2.5%', 'Rs 3.0 Lakh', 'Margin erosion'],
              ['5.0%', 'Rs 6.0 Lakh', 'Viability threat']
            ],
            footnote: 'Includes forward/reverse shipping and customer churn value.'
          },
          {
            type: 'callout',
            title: 'Regulatory Claims Risk',
            body: 'ASCI and FSSAI are tightening surveillance on "High Protein" and "Zero Sugar" claims. Proactive third-party lab verification is now a strategic necessity.',
            highlight: 'FSSAI Enforcement: Tightening'
          }
        ]
      }
    ]
  },
  {
    id: '09-strategic-unresolveds',
    type: 'editorial',
    eyebrow: 'MODULE 09',
    title: 'Strategic Unresolveds',
    summary: 'Critical open questions across operations, economics, and brand strategy.',
    sections: [
      {
        id: 'ops-unresolveds',
        anchorId: 'ops-unresolveds',
        title: 'Module 06 — Open Questions',
        subtitle: 'Synthesis — Strategic Unresolveds',
        content: [
          {
            type: 'sub-section',
            title: 'Operations & Manufacturing',
            body: 'Critical questions remain regarding the structure and fragility of the operational relationships that enable the framework.'
          },
          {
            type: 'list',
            listType: 'bullet',
            items: [
              'What is the nature of the relationship with the contract manufacturer?',
              'What is the actual production capacity and lead time?',
              'How does per-unit COGS change at 5x current volume?',
              'What is the actual channel revenue split?'
            ]
          }
        ]
      },
      {
        id: 'behavioral-unresolveds',
        anchorId: 'behavioral-unresolveds',
        title: 'Consumer Behavior & Retention',
        content: [
          {
            type: 'paragraph',
            text: 'The most operationally important data — repeat purchase behavior — is often the least rigorously tracked in early-stage D2C.'
          },
          {
            type: 'list',
            listType: 'bullet',
            items: [
              'What is the actual repeat purchase rate and where does it drop most sharply?',
              'What is the retention difference between Quick Commerce and D2C website first-time buyers?',
              'Has there been structured feedback collection on why customers do not return?',
              'Is "Subscribe & Save" a true checkout or just a lead capture form?'
            ]
          }
        ]
      },
      {
        id: 'brand-trust-unresolveds',
        anchorId: 'brand-trust-unresolveds',
        title: 'Brand & Trust Development',
        content: [
          {
            type: 'callout',
            title: 'The Trust Transition',
            body: 'Can the current attention-driven brand architecture transition to credibility-based trust as it scales?',
            highlight: 'Attention vs Trust'
          },
          {
            type: 'list',
            listType: 'bullet',
            items: [
              'Is the "India\'s First Caffeinated Protein Shake" claim defensible?',
              'How will the brand manage reputational confusion (e.g., Trustpilot mismatch)?',
              'What is the current third-party testing infrastructure (COAs via QR codes)?',
              'Has there been any contact from FSSAI or ASCI regarding claims?'
            ]
          }
        ]
      },
      {
        id: 'category-future',
        anchorId: 'category-future',
        title: 'The Future of the Category',
        content: [
          {
            type: 'comparison',
            entries: [
              {
                title: 'Quick Commerce Stability',
                body: 'Will the discount environment stabilize or worsen as platforms prioritize their own private labels?'
              },
              {
                title: 'The Amul Ceiling',
                body: 'Does the Rs 50/20g protein anchor represent a permanent ceiling for premium D2C brands?'
              },
              {
                title: 'Positioning Crowding',
                body: 'When does "better-for-you indulgence" stop being a whitespace and start being a crowded category?'
              }
            ]
          }
        ]
      }
    ]
  },
];
