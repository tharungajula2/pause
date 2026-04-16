import { EditorialSection } from '../../types';

export const module01Content: EditorialSection[] = [
  {
    id: 'section-1-what-is-protein',
    title: 'Section 1: What Is Protein',
    anchorId: 'section-01-protein',
    tocLabel: 'What Is Protein',
    content: [
      {
        type: 'paragraph',
        text: 'Protein is not a single thing. It is a class of molecules, long chains of amino acids that fold into specific shapes and carry out almost every structural and functional job in the body. Enzymes, hormones, immune molecules, muscle fibers, connective tissue, all protein. The body is in constant protein turnover: breaking down old proteins, rebuilding new ones. The nutritional question is simply whether you are supplying enough quality amino acids, consistently, to meet that demand.'
      },
      {
        type: 'sub-section',
        title: 'Amino Acids: Why Essential is the Key Word'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          '20 amino acids total',
          '9 are "essential" (indispensable): Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Valine',
          'Body cannot make these in sufficient amounts — must come from food',
          'Leucine specifically is a key trigger for muscle protein synthesis',
          'The rest (non-essential) the body can synthesize'
        ]
      },
      {
        type: 'sub-section',
        title: 'Complete vs Incomplete Protein',
        body: 'Complete = all 9 essential amino acids in adequate proportions. Dairy proteins: complete. Most plant proteins: incomplete or limiting in one amino acid (cereals low in lysine; legumes low in methionine). India diet context: approximately 46% rural and 39% urban protein intake comes from cereals — the structural problem is quality, not just quantity.'
      },
      {
        type: 'sub-section',
        title: 'How Protein Quality is Measured: PDCAAS vs DIAAS'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'PDCAAS (Protein Digestibility Corrected Amino Acid Score)',
            body: "Older method. Amino acid profile × fecal digestibility correction. Maximum score = 1.0 (truncated). Nuvie's bottle explicitly claims 'PDCAAS of 1' — the highest possible score. Limitation: uses crude fecal digestibility, which can overestimate some plant proteins."
          },
          {
            title: 'DIAAS (Digestible Indispensable Amino Acid Score)',
            body: 'Newer, more accurate. FAO now recommends this. Uses true ileal digestibility of each essential amino acid individually. Not truncated above 1.0. More precise because it measures absorption before the large intestine, not after.'
          }
        ]
      },
      {
        type: 'image-slot',
        description: 'Diagram comparing PDCAAS vs DIAAS scoring concept'
      },
      {
        type: 'sub-section',
        title: 'How Much Protein Do You Actually Need'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'ICMR-NIN India RDA: approximately 0.83 g/kg/day for healthy adults. This is a population safety floor, not a performance target.',
          'Exercising individuals: 1.4 to 2.0 g/kg/day range commonly cited',
          'Per meal threshold: approximately 20 to 25g of high-quality protein for meaningful muscle protein synthesis response in many studies — this is exactly why Nuvie\'s 20g format is deliberate, not arbitrary',
          'For older adults: needs are higher due to anabolic resistance — the body becomes less efficient at using protein with age',
          'Key insight: for most Indian consumers, the biggest gain is simply adding one high-quality protein moment per day, not optimizing perfect timing'
        ]
      }
    ]
  },
  {
    id: 'section-2-two-types-of-protein',
    title: 'Section 2: Two Types of Protein — Whey vs Ultra-Filtered Milk',
    anchorId: 'section-02-protein-types',
    tocLabel: 'Whey vs Ultra-Filtered Milk',
    content: [
      {
        type: 'paragraph',
        text: 'Nuvie uses two different protein systems across its product range. The RTD shakes use ultra-filtered milk protein. The bars use whey protein concentrate. These are not the same thing, and understanding the difference matters for anyone building or advising a protein brand.'
      },
      {
        type: 'sub-section',
        title: 'WHEY PROTEIN',
        body: 'What it is: Whey is the liquid byproduct of cheese making. When milk is curdled, the solid curd (casein) separates. The remaining watery liquid is whey — which contains soluble proteins, lactose, and minerals.'
      },
      {
        type: 'paragraph',
        text: 'How it is made — step by step:',
        bold: true
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'Raw milk arrives at dairy plant and is pasteurized',
          'Cheese-making: enzymes (rennet) or acid added to curdle milk. Casein forms curds. Whey liquid separates.',
          'Filtration: whey liquid filtered to remove fat and lactose (this is where product types diverge)',
          'Concentration: evaporated to concentrate protein',
          'Spray drying: converted into powder form'
        ]
      },
      {
        type: 'sub-section',
        title: 'Three types of whey'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'WPC (Whey Protein Concentrate)',
            body: '70 to 80% protein. Some lactose and fat remain. Cheapest. What Nuvie\'s bars use.'
          },
          {
            title: 'WPI (Whey Protein Isolate)',
            body: '90%+ protein. Most lactose removed. More expensive. Better for lactose-sensitive people.'
          },
          {
            title: 'WPH (Whey Protein Hydrolysate)',
            body: 'Pre-digested (enzymatically broken down). Fastest absorption. Most expensive. Often bitter taste.'
          }
        ]
      },
      {
        type: 'image-slot',
        description: 'Simplified diagram: milk to cheese to whey — the separation process'
      },
      {
        type: 'callout',
        title: 'India Import Reality',
        body: 'Most quality WPC/WPI used in Indian protein brands is imported from USA, Europe (Netherlands, Ireland, Germany), and Australia/New Zealand.',
        highlight: 'Strategic Note'
      },
      {
        type: 'paragraph',
        text: 'Pros of imported whey:',
        bold: true
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'High quality and consistent standards',
          'Large-scale global production',
          'Established testing infrastructure'
        ]
      },
      {
        type: 'paragraph',
        text: 'Cons:',
        bold: true
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Approximately 30% import duty plus GST increases cost significantly',
          'Currency risk from USD/EUR fluctuation',
          'Supply chain vulnerability',
          'Long-term dependency on foreign supply'
        ]
      },
      {
        type: 'paragraph',
        italic: true,
        text: 'Absorption: Fast-digesting. Peaks in bloodstream approximately 60 to 90 minutes after consumption. Relevant for post-workout use cases.'
      },
      {
        type: 'sub-section',
        title: 'ULTRA-FILTERED MILK PROTEIN (what Nuvie RTD shakes use)',
        body: 'What it is: Not a byproduct. Whole toned milk passed through ultra-fine ceramic or polymeric membranes under pressure. Protein molecules (larger) are retained. Water, lactose, and small minerals pass through as "permeate."'
      },
      {
        type: 'image-slot',
        description: 'Ultra-filtration membrane diagram — milk in, concentrate out, permeate out'
      },
      {
        type: 'paragraph',
        text: 'How it is made — step by step:',
        bold: true
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'Raw toned milk collected and standardized (fat adjusted to target level)',
          'Ultra-filtration: milk fed through membranes with approximately 10,000 Dalton pore size. Protein retained. Water, lactose, small minerals removed.',
          'Result: milk protein concentrate — protein still in natural milk matrix, not isolated or spray-dried into powder'
        ]
      },
      {
        type: 'paragraph',
        text: 'Key differences vs whey:',
        bold: true
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Retains both casein and whey proteins in natural milk ratio (approximately 80% casein, 20% whey)',
          'Not a byproduct — no cheese step required',
          'PDCAAS of 1 — same top protein quality score',
          'Slower, more sustained amino acid release (casein digests slowly vs fast whey)',
          'Natural milk flavors — better taste base for RTD beverages',
          'Can be sourced domestically in India — strategic advantage over imported whey'
        ]
      },
      {
        type: 'paragraph',
        text: 'Toned Milk context: Full cream milk has approximately 6% fat. Toned milk has approximately 3% fat. This gives a good protein-to-fat ratio without excessive richness.',
        italic: true
      }
    ]
  },
  {
    id: 'section-3-ingredient-breakdown',
    title: 'Section 3: Every Ingredient on the Nuvie Bottle, Explained',
    anchorId: 'section-03-ingredients',
    tocLabel: 'Ingredients Explained',
    content: [
      {
        type: 'paragraph',
        text: 'The ingredient list on a bottle is a story if you know how to read it. Here is a full read of the Kesar Pista protein milkshake, ingredient by ingredient, role by role.'
      },
      {
        type: 'image-slot',
        description: 'Front and back of actual Nuvie Kesar Pista bottle'
      },
      {
        type: 'sub-section',
        title: '1. Ultra Filtered Toned Milk (66%)',
        body: 'The hero ingredient. Two-thirds of the liquid by volume. Toned milk passed through ultra-fine membranes to concentrate protein. This is where the 20g of protein comes from. Role: protein delivery, dairy taste, mouthfeel.'
      },
      {
        type: 'sub-section',
        title: '2. Filtered Water',
        body: 'RO or purified water brings the total to 250ml. "Filtered" is a food safety specification. Role: volume and dilution to target protein concentration.'
      },
      {
        type: 'sub-section',
        title: '3. Fructooligosaccharides — FOS (2%)',
        body: 'A prebiotic dietary fiber. Short-chain carbohydrates the human body cannot digest — instead they feed beneficial gut bacteria (Bifidobacterium, Lactobacillus). Contributes 4.5g dietary fiber per serving (18% RDA). Also adds mild natural sweetness without spiking blood sugar. At 4.5g per serve, typically well-tolerated; at higher doses FOS can cause gas in sensitive people. Role: gut health positioning, fiber claim, mild sweetness.'
      },
      {
        type: 'sub-section',
        title: '4. Cream',
        body: 'Adds fat and richness. Makes the texture feel like a milkshake rather than thin protein water. Role: mouthfeel, taste, emulsion stability.'
      },
      {
        type: 'sub-section',
        title: '5. Natural and Nature Identical Flavours (Kesar Pista)',
        body: '"Natural flavours" are extracted from real food sources. "Nature Identical" flavours are chemically synthesized to match natural compounds exactly — same molecular structure, produced in a lab. Both are FSSAI permitted. Role: flavor masking of the cooked notes from retort processing, consumer taste delivery.'
      },
      {
        type: 'sub-section',
        title: '6. Lactase Enzyme (beta-galactosidase)',
        body: 'This is Nuvie\'s key formulation decision. Lactose (milk sugar) is a disaccharide — glucose bonded to galactose. Lactase cleaves this bond. Result: the milk becomes lactose-free while tasting almost identical to regular milk. FSSAI lactose-free standard is 0.1% or less residual lactose. Approximately 70% of South Asians have some degree of lactose intolerance — this is a strategically smart choice for the Indian market. Role: lactose-free claim, digestive accessibility, expanded consumer base.'
      },
      {
        type: 'sub-section',
        title: '7. Acidity Regulators — INS 340, INS 452(ii), INS 339(ii)',
        body: 'These are phosphate salts: potassium phosphate (INS 340), sodium phosphate (INS 339), sodium polyphosphate (INS 452). Role: pH buffering during retort\'s high heat (121°C). Without these, milk proteins denature, curdle, or develop strong cooked flavor. They also act as mild emulsifiers and help maintain calcium availability. Permitted under FSSAI and internationally GRAS-listed.'
      },
      {
        type: 'sub-section',
        title: '8. Stabilizer — INS 418 (Gellan Gum)',
        body: 'A microbial polysaccharide produced by fermenting Sphingomonas elodea bacteria. Creates an invisible weak gel network in the liquid that keeps protein particles suspended evenly. Without this, protein settles to the bottom within hours. Role: suspension stability, consistent texture throughout the bottle, mouthfeel contribution.'
      },
      {
        type: 'sub-section',
        title: '9. Edible Common Salt',
        body: 'Small amount — 131.8mg sodium per 250ml (6.59% RDA). Role: taste enhancement (suppresses bitterness, rounds flavor), electrolyte.'
      },
      {
        type: 'sub-section',
        title: '10. Sweetener — INS 955 (Sucralose)',
        body: 'Made from sugar but approximately 600 times sweeter. Most passes through the body unabsorbed — no caloric or glycemic impact. Heat-stable, unlike stevia which degrades at retort temperatures. EFSA-approved ADI of 15mg/kg body weight per day — amounts in one 250ml bottle are far below this. Mandatory boxed disclosure required by FSSAI ("This Contains Sucralose" / "Contains Non-Caloric Sweetener"). Role: sweetness without added sugar.'
      }
    ]
  },
  {
    id: 'section-4-manufacturing-process',
    title: 'Section 4: The Manufacturing Process',
    anchorId: 'section-04-manufacturing',
    tocLabel: 'Manufacturing Process',
    content: [
      {
        type: 'paragraph',
        text: 'Making a shelf-stable protein milkshake without preservatives is harder than it sounds. Here is the full process, from raw milk to the sealed bottle on a shelf.'
      },
      {
        type: 'image-slot',
        description: 'Process flow diagram: raw milk to finished retort bottle — 10 steps'
      },
      {
        type: 'sub-section',
        title: 'Step 1: Raw Material Sourcing and QC',
        body: 'Toned milk sourced from dairy cooperatives. Tested on arrival for fat percentage, solids-not-fat content, antibiotics, and adulteration markers. FOS, cream, lactase enzyme, stabilizers sourced from ingredient suppliers. Every batch tracked by lot number for FSSAI traceability compliance.'
      },
      {
        type: 'sub-section',
        title: 'Step 2: Ultra-Filtration',
        body: 'Raw toned milk fed through UF membrane system. Transmembrane pressure forces water and small molecules through. Retentate (what stays behind) = concentrated milk protein. This step is how 20g protein in 250ml is achieved from milk that naturally contains approximately 8 to 9g per 250ml.'
      },
      {
        type: 'sub-section',
        title: 'Step 3: Lactase Treatment',
        body: 'Lactase enzyme added to the concentrated milk. Incubated at approximately 37 to 40°C for several hours. Enzyme cleaves lactose into glucose and galactose. Tested to confirm residual lactose is at or below the 0.1% FSSAI threshold. Enzyme then inactivated by brief heat treatment.'
      },
      {
        type: 'sub-section',
        title: 'Step 4: Blending',
        body: 'All ingredients combined in stainless steel mixing tanks. Acidity regulators added to buffer pH. Gellan gum hydrated separately before addition. Temperature approximately 60 to 70°C for proper dissolution and homogenization. pH checked and adjusted to approximately 6.5 to 6.8 to prevent protein aggregation.'
      },
      {
        type: 'sub-section',
        title: 'Step 5: Homogenization',
        body: 'Liquid forced through small orifices at high pressure (approximately 150 to 200 bar). Breaks fat globules into tiny, uniform particles. Result: stable emulsion with consistent mouthfeel. Cream does not separate.'
      },
      {
        type: 'sub-section',
        title: 'Step 6: Filling',
        body: 'HDPE bottles filled to precise 250ml volume. Cap applied immediately. The timing here matters — the bottle must be sealed before retort.'
      },
      {
        type: 'callout',
        title: 'Specific Callout: Retort Processing',
        body: 'What is retort: A pressurized steam chamber (autoclave) for sealed food containers. Nuvie uses this instead of preservatives. Why it works: At 121°C under pressure (approximately 1 to 3 bar), all pathogenic and spoilage microorganisms are killed. The F₀ standard: at least 3 minutes at 121°C — the threshold that kills Clostridium botulinum spores. Hold time is typically 15 to 30 minutes. What retort does to the product: Maillard reaction occurs at high heat — amino acids and sugars react, creating cooked, caramelized, slightly eggy notes. Protein structure changes (denaturation) but amino acid profile and nutritional content remain intact.',
        highlight: 'Critical Manufacturing Step'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'Retort',
            body: '121°C for 15 to 30 minutes, in the final sealed container, simpler filling line, harsher heat, shelf-stable ambient'
          },
          {
            title: 'UHT',
            body: '135 to 145°C for 2 to 4 seconds, then aseptic filling into pre-sterilized packaging, gentler on sensory quality, expensive sterile filling environment required'
          }
        ]
      },
      {
        type: 'sub-section',
        title: 'Step 8: Cooling and Batch Incubation',
        body: 'Bottles cooled and dried. Batch held at 37°C for 7 to 14 days (incubation test). Any microbial contamination shows as swelling or leakage from gas production. This is why the label says "Do not purchase if puffy or leaky".'
      },
      {
        type: 'sub-section',
        title: 'Step 9: Final QC and Release',
        body: 'Nutritional analysis against label claims. Microbiological sterility confirmation. Sensory panel testing (taste, color, texture). pH verification. Batch released only after all criteria pass.'
      },
      {
        type: 'sub-section',
        title: 'Step 10: Labelling and Secondary Packaging',
        body: 'Shrink-wrap sleeve or pressure-sensitive labels applied. Batch number, MFG date, EXP date printed by inkjet. Bottles packed into corrugated cardboard outers for multi-pack dispatch. Shelf life: approximately 9 months at ambient temperature (observed from actual bottle: MFG March 2026, EXP December 2026).'
      }
    ]
  },
  {
    id: 'section-5-packaging',
    title: 'Section 5: Packaging',
    anchorId: 'section-05-packaging',
    tocLabel: 'Packaging',
    content: [
      {
        type: 'paragraph',
        text: 'Packaging for an RTD dairy product is not just branding — it is food safety, logistics, consumer signal, and brand identity simultaneously.'
      },
      {
        type: 'sub-section',
        title: 'The Bottle',
        body: 'Material: HDPE (High-Density Polyethylene), food grade. Chosen because it is retort-safe (withstands 121°C under pressure), lightweight but structurally strong, good moisture barrier, and recyclable (Recycle Value Rs 15/kg in Maharashtra, as stated on the label). Shape: ergonomic grip, wide enough for branding. Nuvie\'s signature yellow creates immediate shelf recognition.'
      },
      {
        type: 'image-slot',
        description: 'Nuvie bottle front — Kesar Pista'
      },
      {
        type: 'sub-section',
        title: 'The Cap',
        body: 'Cap color is flavor-coded: Kesar Pista = green, Coffee = black. Material: Polypropylene (PP), food grade, heat resistant. Internal liner creates hermetic seal. The cap system works in conjunction with the tamper-evident ring.'
      },
      {
        type: 'sub-section',
        title: 'Secondary Packaging',
        body: 'Corrugated cardboard outer boxes for 6, 12, and 24-bottle packs. This is the area where damage most commonly occurs in D2C shipping. Internal dividers or protective inserts are critical for liquid bottle shipments across Indian courier networks — an area Nuvie should actively improve.'
      }
    ]
  },
  {
    id: 'section-6-labelling',
    title: 'Section 6: Labelling and Regulation',
    anchorId: 'section-06-labelling',
    tocLabel: 'Labelling and Regulation',
    content: [
      {
        type: 'paragraph',
        text: 'Every element on a food label in India is governed by FSSAI. Understanding these rules is essential for anyone building a food brand.'
      },
      {
        type: 'sub-section',
        title: 'Mandatory Label Elements (FSSAI)'
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'Product name and brand name',
          'Net quantity (250ml)',
          'Ingredients list in descending order of weight',
          'Nutritional information per 100g and per serving',
          'Allergen declaration (Contains Milk; processed in facility handling Nuts and Cereals)',
          'Best before date',
          'Batch/Lot number',
          'Manufacturer name, address, and FSSAI License Number',
          'Customer care details',
          'MRP with Rs prefix',
          'Green dot (vegetarian indicator)',
          'Recycle value statement (Maharashtra-specific)'
        ]
      },
      {
        type: 'sub-section',
        title: 'Specific Claims and What They Mean'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'No Added Sugar',
            body: 'FSSAI definition — no sugar or sugar-based ingredient added. Naturally occurring milk sugars (approximately 8.5g per bottle) are permitted and disclosed.'
          },
          {
            title: 'Lactose Free',
            body: 'FSSAI standard requires 0.1% or less residual lactose. Achieved via lactase enzyme treatment.'
          },
          {
            title: 'High Protein',
            body: 'FSSAI requires 10% or more of protein RDA per 100ml. At 8g protein per 100ml, Nuvie exceeds this.'
          }
        ]
      },
      {
        type: 'sub-section',
        title: 'The Sucralose Disclosure Boxes',
        body: 'FSSAI mandates prominent boxed disclosure for non-nutritive sweeteners. Hence the two boxes: "This Contains Sucralose" and "Contains Non-Caloric Sweetener." These are regulatory requirements.'
      }
    ]
  },
  {
    id: 'section-7-unit-economics',
    title: 'Section 7: Unit Economics — Cost to Make One Bottle',
    anchorId: 'section-07-economics',
    tocLabel: 'Unit Economics',
    content: [
      {
        type: 'paragraph',
        text: 'The MRP is Rs 110. The economics underneath that number are what determine whether this business is viable at scale. Note: These are directional industry estimates only.'
      },
      {
        type: 'table',
        headers: ['Component', 'Estimated Cost (Rs)', 'Notes'],
        rows: [
          ['Ultra-filtered toned milk', '18 to 22', 'Milk at Rs 50 to 55/litre; UF concentration adds premium'],
          ['Other ingredients', '8 to 12', 'Lactase enzyme is notably expensive'],
          ['Packaging (Bottle, cap, label)', '6 to 9', 'Imported HDPE resin fluctuates with oil'],
          ['Retort processing', '8 to 14', 'Retort is capital-intensive; co-man charges per unit'],
          ['QC testing and incubation', '2 to 4', 'Amortized across batch size'],
          ['Total estimated COGS', '42 to 61', '—']
        ],
        footnote: 'Gross margin at MRP Rs 110: approximately 44 to 62%.'
      },
      {
        type: 'sub-section',
        title: 'Channel Reality'
      },
      {
        type: 'table',
        headers: ['Channel', 'Economics', 'Impact'],
        rows: [
          ['D2C', 'MRP Rs 110. Flat Rs 60 to 80 shipping on single units.', 'Contribution is Rs 0 to 20 without bundle.'],
          ['Quick Commerce', 'Consumer pays Rs 79. Platform fee 20 to 30%.', 'Brand receives Rs 55 to 65. Marginal contribution.'],
          ['E-Grocery', 'Retailer margin applies.', 'Similar to quick commerce economics.']
        ]
      },
      {
        type: 'paragraph',
        text: 'The math makes clear why repeat purchase is the only sustainable engine. Single-unit margins are thin to zero in every channel. The economics only work when basket size is large (6-pack, 12-pack), churn is low, and damage/return rates are controlled. This is why Nuvie\'s strategic decisions around subscriptions, pack architecture, and packaging reliability are not just operational choices — they are existential economics.'
      }
    ]
  },
  {
    id: 'section-8-open-questions',
    title: 'Section 8: Open Questions',
    anchorId: 'section-08-questions',
    tocLabel: 'Open Questions',
    content: [
      {
        type: 'paragraph',
        text: 'These are things I observed but could not confirm from public information. They remain on my list.'
      },
      {
        type: 'list',
        listType: 'numbered',
        items: [
          'Does Nuvie own its retort facility or is production entirely co-manufactured?',
          'Where is ultra-filtration done — at the same co-man facility or at a separate dairy supplier?',
          'What is the actual batch size per production run?',
          'Is the cap difference across SKUs a supplier shift or a deliberate design choice?',
          'Shelf life validation: Does the 9-month window vary across flavors?',
          'Lactase sequence: Is treatment done before or after ultra-filtration?'
        ]
      }
    ]
  }
];
