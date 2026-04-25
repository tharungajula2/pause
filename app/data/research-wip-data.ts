import type { WorkbookChapter } from '../types/index';

export const researchWipData: WorkbookChapter[] = [
  {
    id: 'sticky-notes',
    type: 'sticky-notes',
    eyebrow: 'STICKY NOTES',
    title: 'Raw observations. Unfiltered.',
    summary: 'Things I noticed while building PAUSE. Not conclusions — just signals worth keeping somewhere.',
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
    id: '02-growth-intelligence',
    type: 'qc-intelligence',
    eyebrow: 'MODULE 02',
    title: 'Growth Intelligence',
    summary: 'Strategic analysis of channel performance and behavioral signals.',
  },
  {
    id: '03-product-lab',
    type: 'flavor-lab',
    eyebrow: 'MODULE 03',
    title: 'Product Lab',
    summary: 'Exploration of format, flavor, and cultural fit logic.',
  },
];
