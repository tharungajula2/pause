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
  imagePlaceholder?: {
    label: string;
    description: string;
  };
}

export const researchWipData: WorkbookChapter[] = [
  {
    id: '00-what-nuvie-appears-to-be',
    title: '00 — What Nuvie Appears To Be',
    eyebrow: 'Internal Observations',
    summary: 'Honest observations from public signals only. Not claims. This is my current read on the company trajectory.',
    imagePlaceholder: {
      label: 'product lineup',
      description: 'Add product images here when available.'
    },
    blocks: [
      {
        id: 'what-i-can-see',
        type: 'prompt',
        title: 'WHAT I CAN SEE',
        body: 'Nuvie appears to be a better-for-you indulgence brand. From what I can observe, they are anchored around ready-to-drink dairy protein milkshakes and a caffeinated protein coffee. They seem to be using retort processing for shelf stability without preservatives. I also see protein chocolate bars in the lineup. They emphasize being lactose-free via lactase and having no added sugar. Their presence on quick commerce is very visible, which is a major signal.'
      },
      {
        id: 'what-i-cannot-see',
        type: 'risk',
        title: 'WHAT I CANNOT SEE',
        body: 'I am still missing a lot of the operational detail. I do not know their manufacturing model or if they use a specialized partner for retort processing. Actual repeat rates by channel are unknown to me. I also do not have a clear read on their trade margins or damage rates for liquid shipping. These are the open questions I am sitting with.'
      },
      {
        id: 'competitor-set',
        type: 'hypothesis',
        title: 'The Real Competitor Set',
        body: 'In quick commerce, I notice Nuvie is often listed next to coffee brands like Sleepy Owl or Blue Tokai. It seems they are winning an occasion, not just a category. They are likely competing for a coffee replacement or a guilt-free dessert moment, rather than going head-to-head with protein powder brands. This is my current hypothesis, but I need to verify it further.'
      },
      {
        id: 'top-questions',
        type: 'question',
        title: 'The Five Strategic Questions',
        body: 'I think the five questions that matter most right now are these. Is this a wedge winning an occasion or just protein? Is there a repeat habit loop? Where do they win economically, quick commerce or D2C? Are the extra SKUs helping or creating drag? And finally, are they earning enough trust to be a daily habit?'
      }
    ]
  },
  {
    id: '01-protein-first-principles',
    title: '01 — Protein From First Principles',
    eyebrow: 'Science Study',
    summary: 'I am trying to learn the science here, not teach it. This is my summary of how protein actually works in the body.',
    imagePlaceholder: {
      label: 'protein science chart',
      description: 'Amino acid profile or digestion timing diagram.'
    },
    blocks: [
      {
        id: 'what-is-protein',
        type: 'prompt',
        title: 'What protein actually is',
        body: 'I used to think protein was just for building muscle, but my notes suggest it does much more. It acts as enzymes, transporters, and signaling molecules. My current read is that the real question is not total grams, but whether we are supplying enough usable amino acids. The body is constantly breaking down and rebuilding, so consistency seems to be the actual goal.'
      },
      {
        id: 'essential-amino-acids',
        type: 'prompt',
        title: 'Why essential amino acids matter',
        body: 'I am learning that amino acids are the real story. The essential ones have to come from our diet because the body can not make them. I suspect these are the real bottleneck in most diets. For a product, focusing on these seems more important than just hitting a high total gram count on the label.'
      },
      {
        id: 'complete-incomplete',
        type: 'prompt',
        title: 'Complete vs Incomplete',
        body: 'The framing of complete vs incomplete protein is a bit simple, but still feels useful. Dairy like Nuvie uses is complete, while many plant sources can be low in certain amino acids. If a person is eating a cereal-heavy diet, adding a complete source like this could be a major gain. I am still working through how much this matters for a casual user though.'
      },
      {
        id: 'digestibility',
        type: 'prompt',
        title: 'Why digestibility matters',
        body: 'Not all grams on the label are equal. I found that the DIAAS framework is the current gold standard for measuring what the body actually uses. It is more precise than the older methods. High protein claims are easy to make, but I think high quality protein you can actually use is the harder, more honest goal.'
      },
      {
        id: 'india-rda',
        type: 'prompt',
        title: 'The Indian RDA baseline',
        body: 'The Indian RDA is around 0.83 grams per kilogram for a healthy adult. But I am realizing this is a baseline to prevent deficiency, not an optimal target for performance. I suspect many people confuse these two. Being safe is different from being optimized, though I may be reading that wrong.'
      },
      {
        id: 'timing-distribution',
        type: 'prompt',
        title: 'Timing and Distribution',
        body: 'Perfect timing might matter for athletes, but for most people, I think just adding one better protein moment per day is the win. Some research suggests the body saturates around 20 to 25 grams per meal anyway. Nuvie’s 20 gram format seems to fit this per-occasion increment quite well.'
      },
      {
        id: 'misunderstandings',
        type: 'risk',
        title: 'The three big misunderstandings',
        body: 'In India, I see a few big hurdles. People still think protein is only for the gym, or that it might harm your kidneys. There is also confusion because zero added sugar does not mean zero sugar if it is coming from milk naturally. I think these are the trust barriers the brand has to solve.'
      }
    ]
  },
  {
    id: '02-why-products-fail',
    title: '02 — Why Products Like This Fail',
    eyebrow: 'Category Risks',
    summary: 'This is my investigation into why the category is so difficult. It seems trial is easy, but repeat is very hard.',
    imagePlaceholder: {
      label: 'formulation comparison',
      description: 'Product ingredient label comparison or processing map.'
    },
    blocks: [
      {
        id: 'rtd-difficulty',
        type: 'risk',
        title: 'Why RTD is hard to formulate',
        body: 'Ready-to-drink protein is a technical mess. Retort processing can create a cooked or even eggy taste because of the heat. I am noticing that stabilizers are not optional if you want a decent texture. If the flavor strategy is not perfect, people will try it once and never come back.'
      },
      {
        id: 'bar-polyols',
        type: 'risk',
        title: 'The problem with bars',
        body: 'Protein bars have a silent problem called polyols. Maltitol, which I see used often, can cause real gut discomfort if you eat too much. This seems to clash with the whole gut friendly positioning. I think it is an overlooked risk for many brands in this space.'
      },
      {
        id: 'five-failure-modes',
        type: 'risk',
        title: 'The five main failure modes',
        body: 'I think the big five are the taste-repeat gap, bad texture, digestive bloat, a lack of trust, and a mismatch in unit economics. Of these, the taste-repeat gap feels the most dangerous. You can have great trial numbers while your repeat is quietly collapsing beneath you.'
      }
    ]
  },
  {
    id: '03-india-consumer-reality',
    title: '03 — India Consumer Reality',
    eyebrow: 'Market Context',
    summary: 'I am trying to understand the Indian market behavior. It seems very different from what the global reports usually say.',
    imagePlaceholder: {
      label: 'consumer segments',
      description: 'Visual map of jobs-to-be-done or segment personas.'
    },
    blocks: [
      {
        id: 'india-source-quality',
        type: 'prompt',
        title: 'The two truths about India',
        body: 'Total protein numbers in India do not look awful, but the source quality is the real issue. Most of it comes from cereals, which is a structural problem for the national diet. I do not think most Indians are counting grams. I suspect they are actually buying solutions to daily friction points instead.'
      },
      {
        id: 'jobs-to-be-done',
        type: 'prompt',
        title: 'The five jobs-to-be-done',
        body: 'I think people are looking for five things. They want taste without guilt, a quick breakfast, a snack for the commute, a way to stop evening cravings, or a better coffee. Nuvie seems to be aiming for the idea that healthy should not feel like punishment. I think that is a very smart alignment for mass adoption.'
      },
      {
        id: 'consumer-segments',
        type: 'prompt',
        title: 'Six consumer segments',
        body: 'There are coffee habituals, busy pros who skip meals, and people looking for guilt-free treats. Then there are the gym-goers, women who do not want a bodybuilding identity, and parents. I think Nuvie fits the coffee and busy professional segments best right now. The other ones might need more work.'
      }
    ]
  },
  {
    id: '04-quick-commerce-mechanics',
    title: '04 — Quick Commerce Mechanics',
    eyebrow: 'Channel Study',
    summary: 'I am still learning how this channel works. It seems to have changed the entire purchase dynamic in India.',
    imagePlaceholder: {
      label: 'quick commerce listing',
      description: 'Screenshot of a listing or a thumbnail visibility test.'
    },
    blocks: [
      {
        id: 'q-commerce-shift',
        type: 'prompt',
        title: 'A change in dynamics',
        body: 'Quick commerce has moved us from planned health purchases to instant gratification. My read of the Bain data is that this channel now handles over two thirds of e-grocery orders in India. It is a defining disruption. It means you are winning or losing in seconds, not after a long research session.'
      },
      {
        id: 'coffee-adjacency',
        type: 'hypothesis',
        title: 'Winning the Coffee Shelf',
        body: 'I find it fascinating that Nuvie is often listed under Cold Coffee, not Protein. This is a huge strategic advantage. It means people compare them to Blue Tokai, not whey powder. I think the winning story is becoming the upgraded coffee ritual, rather than just another supplement.'
      },
      {
        id: 'five-operational-levers',
        type: 'prompt',
        title: 'What matters in the channel',
        body: 'Availability is the biggest thing, because out of stock kills your ranking. I also see that single-serve economics are much tighter. Search terms, thumbnail clarity, and how fast you get reviews seem to be the other big levers. I am still figuring out how brands balance all five at once.'
      },
      {
        id: 'discount-trap',
        type: 'risk',
        title: 'The silent discount trap',
        body: 'If people get used to a 28 percent discount on their milkshakes, it is very hard to move them back to full price or D2C. I suspect this is a trap for many brands. Growth looks amazing while the contribution margin quietly dies. I need to look closer at how to avoid this.'
      }
    ]
  },
  {
    id: '05-unit-economics',
    title: '05 — Unit Economics',
    eyebrow: 'Operational Logic',
    summary: 'I want to be careful here. These are just directional observations from what I can see, not claims about the actual numbers.',
    imagePlaceholder: {
      label: 'unit economics stack',
      description: 'Diagram of COGS or margin stack breakdown.'
    },
    blocks: [
      {
        id: 'cogs-drivers',
        type: 'prompt',
        title: 'The four COGS drivers',
        body: 'For a liquid protein product, the costs are in the protein source, the retort processing, the bottles, and the logistics. Liquids are heavy and fragile, which I think founders often underestimate. Damage returns can easily erase any profit if the packaging is not perfect. This seems like a constant struggle.'
      },
      {
        id: 'channel-margin-stack',
        type: 'prompt',
        title: 'The channel margin stack',
        body: 'D2C has better margins but you pay for shipping and customer acquisition. Quick commerce has lower marketing friction but the platform fees are heavy. Nuvie’s free shipping threshold of 599 rupees looks like a deliberate move to protect their basket size. I think that is a very necessary decision.'
      },
      {
        id: 'repeat-as-engine',
        type: 'hypothesis',
        title: 'The only sustainable engine',
        body: 'I am coming to realize that repeat purchase is the only things that really matters. If you can not get someone to buy a second time without a discount, the economics will never work. Everything else is just detail. The goal is to avoid the high cost of a constant trial loop.'
      }
    ]
  },
  {
    id: '06-packaging-and-trust',
    title: '06 — Packaging and Trust',
    eyebrow: 'Sensory Logic',
    summary: 'I am starting to notice how much the physical bottle matters. It is doing a lot of work at once.',
    imagePlaceholder: {
      label: 'packaging comparison',
      description: 'Bottle design test or thumbnail visibility comparison.'
    },
    blocks: [
      {
        id: 'six-roles-of-packaging',
        type: 'prompt',
        title: 'The six things to solve',
        body: 'A bottle has to prevent leaks, keep the taste fresh, and show claims clearly. It also has to look good in a tiny thumbnail on an app. I noticed a single review about damage, which I think should be taken very seriously. In liquid shipping, one complaint is usually just the tip of the iceberg.'
      },
      {
        id: 'info-hierarchy',
        type: 'prompt',
        title: 'The information hierarchy',
        body: 'I suspect consumers scan for protein grams first, then sugar, and then calories. Lactose-free and taste come next. Nuvie seems to do well here by pushing their 20 grams and zero added sugar very clearly. Trust cues like no preservatives via retort are also part of that hierarchy.'
      },
      {
        id: 'trust-by-transparency',
        type: 'hypothesis',
        title: 'Trust by transparency',
        body: 'I think there is an opportunity to make ingredient clarity a brand advantage. Instead of fine print, why not make usage guidance a core part of the story? Helping people understand their own tolerance could earn a lot of long-term loyalty. This is something I am still thinking about.'
      }
    ]
  },
  {
    id: '07-open-questions',
    title: '07 — Open Questions',
    eyebrow: 'Synthesis',
    summary: 'These are the things I am still sitting with. I do not have clear answers yet, but I wanted to write them down.',
    imagePlaceholder: {
      label: 'research map',
      description: 'A visual summary of unresolved questions or next steps.'
    },
    blocks: [
      {
        id: 'open-q-01',
        type: 'question',
        title: 'Manufacturing uncertainty',
        body: 'I am still wondering about their actual manufacturing model. Do they have their own facility or a specialized partner for that retort processing?'
      },
      {
        id: 'open-q-02',
        type: 'question',
        title: 'Actual repeat rates',
        body: 'I would love to see the difference in repeat rates between D2C and quick commerce users. My guess is they look very different.'
      },
      {
        id: 'open-q-03',
        type: 'question',
        title: 'Trade margin reality',
        body: 'What are the real trade margins after all the platform fees? I wonder if they can stay profitable in quick commerce long term.'
      },
      {
        id: 'open-q-04',
        type: 'question',
        title: 'Damage and return rates',
        body: 'I am curious if the liquid shipping damage is a minor issue or a structural margin drain. I suspect it is harder than it looks.'
      },
      {
        id: 'open-q-05',
        type: 'question',
        title: 'Subscription logic',
        body: 'Is the current subscription form just for gathering leads, or do they have a real fulfillment system behind it yet?'
      },
      {
        id: 'open-q-06',
        type: 'question',
        title: 'Coffee wedge utilization',
        body: 'Is the coffee ritual being fully utilized? I think it might be the strongest wedge in the entire portfolio if they lean into it.'
      },
      {
        id: 'open-q-07',
        type: 'question',
        title: 'Bar polyol situation',
        body: 'What does the maltitol situation mean for people who want to eat these daily? I worry about it clashing with the gut friendly brand.'
      },
      {
        id: 'open-q-08',
        type: 'question',
        title: 'Discount anchoring',
        body: 'Are the big discounts on quick commerce already anchoring people to a lower price? Shifting back to full price might be a struggle.'
      },
      {
        id: 'open-q-09',
        type: 'question',
        title: 'WhatsApp reorder loops',
        body: 'I wonder what a real WhatsApp reorder system would look like for a brand like this. It seems like a missed opportunity right now.'
      },
      {
        id: 'open-q-10',
        type: 'question',
        title: 'Community activation',
        body: 'Does the community work at gyms and events actually convert to new customers, or is it mostly just brand awareness?'
      },
      {
        id: 'open-q-11',
        type: 'question',
        title: 'Portfolio complexity',
        body: 'Is the current list of SKUs already creating a drag on their working capital? I am always curious how simple a brand can stay.'
      },
      {
        id: 'open-q-12',
        type: 'question',
        title: 'Signals of fit',
        body: 'What would be the first undeniable signal of product market fit for someone watching from the outside? I am still trying to define that.'
      }
    ]
  }
];
