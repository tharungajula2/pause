import type { WorkbookChapter } from '../types/index';
import { module01Content } from './research/module-01';
import { module02Content } from './research/module-02';
import { module03Content } from './research/module-03';
import { module04Content } from './research/module-04';
import { module05Content } from './research/module-05';
import { module06Content } from './research/module-06';

export const researchWipData: WorkbookChapter[] = [
  {
    id: 'sticky-notes',
    type: 'sticky-notes',
    eyebrow: 'STICKY NOTES',
    title: 'Raw observations. Unfiltered.',
    summary: 'Things I noticed. Not conclusions — just signals worth keeping somewhere.',
    stickyNotes: [
      {
        id: 'note-1',
        title: 'Note 1 — Seal Issue (Open)',
        status: 'OPEN',
        body: "Customer feedback and Nuvie's own Instagram shows a known seal/peel issue on the bottles. Hem acknowledged it publicly — fixed sealing pressure and added notch caps as backup. Signal: operations and packaging QC is an active pain point, not a closed one."
      },
      {
        id: 'note-2',
        title: 'Note 2 — Bar Texture Inconsistency (Open)',
        status: 'OPEN',
        body: "Customers reported bars went from soft to dry between orders. Nuvie is on V3 reformulation. Signal: bar category still being figured out. Repeat on bars is at risk until texture stabilises across batches."
      },
      {
        id: 'note-3',
        title: 'Note 3 — Protein Content Feedback (Open)',
        status: 'OPEN',
        body: "Customers comparing 20g Nuvie shake vs 25g Epigamia. Nuvie acknowledged this publicly — working on new formulation. Signal: product spec is a competitive vulnerability right now, especially with health-aware buyers who read labels."
      },
      {
        id: 'note-4',
        title: 'Note 4 — Blinkit Availability (Open)',
        status: 'OPEN',
        body: "Multiple SKUs sold out on Blinkit simultaneously — Cafe Latte, Choco Almond Bar, Choco Brownie Bar, multipack. Nuvie posted 'going live on Blinkit Bangalore super soon'. Signal: quick commerce availability is not consistent. This is both a supply chain and a channel ops problem."
      },
      {
        id: 'note-5',
        title: 'Note 5 — Quick Commerce as Data Problem',
        status: 'OPEN',
        body: "Gobble Cube (ex-Blinkit team) built a platform specifically for brands to decode QC data — dark store concentration, availability gaps, share of voice, category share vs raw growth. They have a growth package for younger brands. Nuvie-sized opportunity to use this kind of tool if someone knows how to run it."
      },
      {
        id: 'note-6',
        title: 'Note 6 — Content Direction Observation',
        status: 'OPEN',
        body: "Nuvie's Instagram content is founder-led, raw, honest — showing lab iterations, customer complaints, real fixes. This is a strong trust signal. Any content contribution should match this tone exactly. Polish would kill what makes it work."
      },
      {
        id: 'note-7',
        title: 'Note 7 — Profile × QC Data Gap (Your Strongest Connection)',
        status: 'OPEN',
        body: "Gobble Cube's founder said it directly: QC is fundamentally a big data problem. 5,000+ dark stores. Availability, share of voice, category share, dark store concentration — all measurable. Nuvie is currently sold out on Blinkit across multiple SKUs simultaneously. That's not just a supply problem — that's an ops + data visibility problem. Tharun's background: analytics, ML on behavioral signals, systems design. This is the most direct profile-to-problem connection on the table."
      },
      {
        id: 'note-8',
        title: 'Note 8 — The Repeat Rate Benchmark (Know This Cold)',
        status: 'OPEN',
        body: "The Whole Truth: 56% repeat purchase rate. Industry average: ~35%. That 21-point gap explains their 232% YoY growth. Nuvie's entire thesis is built on repeat — occasion attachment, habit loops, indulgence that survives shelf life. Knowing this benchmark means if Nuvie ever shares cohort data, you know exactly what number to look for and what's good vs broken."
      },
      {
        id: 'note-9',
        title: 'Note 9 — RTD/Functional Foods vs Supplements (Market Shape)',
        status: 'OPEN',
        body: "Protein powders growing at ~6% CAGR. Protein functional foods (RTD shakes, bars, high-protein dairy) growing at 14-20% CAGR. Nuvie is an RTD brand — it's in the faster-growing segment by default. But RTD has higher logistics complexity, shorter shelf life, heavier QC requirements. This is why ops discipline matters more for Nuvie than for a powder brand."
      },
      {
        id: 'note-10',
        title: 'Note 10 — India Is Where US Was in 2010',
        status: 'OPEN',
        body: "US protein went mainstream around 2010 — gym supplement to everyday food. India is at that same inflection point right now. Whoever positions ahead of the mainstream wave wins. Nuvie's 'pleasure first, protein second' framing is exactly the right positioning for this transition — not 'supplement for serious people' but 'a better version of something you already enjoy.'"
      },
      {
        id: 'note-11',
        title: 'Note 11 — Trust Is The Real Moat (69% Adulteration Stat)',
        status: 'OPEN',
        body: "Citizens Protein Project tested 36 Indian protein supplements. 69.4% were mislabeled — actual protein was less than claimed, sometimes by 50%+. Heavy metals, fungal toxins, fake COAs. In a market where most products lie, radical transparency is a genuine moat — not a marketing phrase. The Whole Truth built ₹3,600 crore valuation on this single insight. Nuvie's founder-led honesty content (seal fixes, reformulations, inbox replies) is walking this path instinctively. Worth protecting at all costs."
      },
      {
        id: 'note-12',
        title: 'Note 12 — Content × Profile Connection',
        status: 'OPEN',
        body: "Nuvie's Instagram content works because it's raw, founder-led, and honest — lab shots, V3 reformulation updates, seal fix posts, real customer complaints. This is NOT polished content marketing. It's transparency as content. Any content contribution has to match this tone exactly — polish would kill what makes it work. Tharun's content background: editing, memes, technical content, Canva. The editing and meme angle actually fits here better than traditional content creation."
      },
      {
        id: 'note-13',
        title: 'Note 13 — QC Retention Stat (Use In Any Conversation)',
        status: 'OPEN',
        body: "Retention rates on next-day delivery: 25-30%. Retention rates on quick commerce: 70%+. That number alone explains why Blinkit availability is not optional for Nuvie — it's the difference between a one-time buyer and a repeat customer. If Nuvie loses the Blinkit slot, they're not losing one sale. They're losing the habit loop."
      }
    ]
  },
  {
    id: '02-qc-intelligence',
    type: 'qc-intelligence',
    eyebrow: 'MODULE 02',
    title: 'Quick Commerce Intelligence',
    summary: 'QC is not a sales channel. It\'s a data system. Here\'s what it would look like to actually operate it.',
  },
];
