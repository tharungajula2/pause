import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  name: 'PAUSE',
  tagline: 'A strategic concept exploration of modern product growth',
  description: 'From product storytelling and strategy to quick commerce, trust, repeat, and unit economics. PAUSE explores how modern consumer products actually win.',
  hero: {
    title: "A better-for-you brand concept.\nBuilt from scratch.",
    body: 'Strategy. Product thinking. Original packaging design. This is how I think about building a consumer brand that earns its second purchase.',
    primaryCta: 'Explore Product Lab',
    secondaryCta: 'See Where I Can Help',
  },
  heroChapters: [
    {
      id: 'intent',
      eyebrow: 'MY READING OF THIS PAGE',
      title: "How I'm thinking about the product system.",
      body: "The product visuals and packaging designs on this page are original concept work. The analysis alongside each product reflects strategic thinking about the better-for-you category in India — built from category research and consumer behaviour observations. This is independent work.",
      cta: { label: 'Explore the Portfolio', type: 'scroll-cue' },
    },
    {
      id: 'products',
      eyebrow: 'The SKU Universe',
      title: 'Built through products.',
      body: 'Each SKU has a different job. Some lower trial friction, some build routine, and one might become the highest-frequency wedge.',
    },
    {
      id: 'outreach',
      eyebrow: 'Profile & Capability',
      title: 'Systems-minded builder.',
      body: 'Translating institutional discipline and quantitative rigor into product growth.',
      cta: { label: 'See How I Help', href: '/how-i-can-help', type: 'primary' },
    },
  ],
  manifesto: {
    heading: 'Growth is not just acquisition. It is product, behavior, and repeat.',
    body: 'A brand wins when adoption feels easy, occasions feel natural, and trust becomes the default.',
  },
  whyIBuiltThis: {
    heading: 'WHY I BUILT THIS',
    body: `I build by standing on the road, eyes and ears open to what the community actually needs. There are massive whitespaces in legacy FMCG categories—cooler, newer, repositioned products are waiting to be built. I wanted to understand how to solve the "Optimization Problem" of better-for-you products: removing guilt-heavy ingredients and replacing them with high-tech alternatives without losing the "Love and Like" taste bracket. This brand is the intersection of that math and the art of consumption.`,
  },
  understanding: {
    heading: 'Core Visionary Pillars',
    points: [
      {
        title: 'Protein + Indulgence',
        body: "Protein isn't just for the gym; it's for everyone. We attach it to existing rituals—like the daily Caffe Latte habit. If you're drinking it anyway, might as well upgrade it.",
      },
      {
        title: 'Functional Control',
        body: "Health means different things to different people. We don't moralize; we optimize. We provide functional control (like 100-calorie limits) in guilt-heavy zones where taste is paramount.",
      },
      {
        title: 'Science + Art of Texture',
        body: "Texture is the silent driver of repeat. From the thickness of a chip to the creaminess of a shake, we treat food technology as an optimization problem where Science meets Art.",
      },
    ],
  },
  usefulness: {
    heading: 'What I bring to the table',
    strengths: [
      {
        title: 'Finding structure in messy problems',
        body: 'I spent years in high-stakes environments where information is dense and the job is to make it actionable. That discipline translates directly into brand and product work.',
      },
      {
        title: 'Working with data, not just instinct',
        body: 'I apply analytical thinking to behavioural signals. Not to produce reports, but to find what actually moves the needle on repeat and retention.',
      },
      {
        title: 'Building, not just recommending',
        body: "I build the thing rather than describing it. This entire brand — strategy, products, packaging, website — is the most recent example of that.",
      },
    ],
  },
  connection: {
    heading: 'If this thinking is useful to you',
    body: `This is honest, original work built to show how I think and what I can build. If you want to talk about any of it, I am ready for that conversation.`,
    cta: { label: 'REACH OUT', href: 'mailto:tharun.gajula.2@gmail.com' },
  },
};
