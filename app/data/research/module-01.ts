import { EditorialSection } from '../../types';

export const module01Content: EditorialSection[] = [
  {
    id: 'section-1-core-philosophy',
    title: 'Section 1: Core Philosophy',
    anchorId: 'section-01-philosophy',
    tocLabel: 'Core Philosophy',
    content: [
      {
        type: 'paragraph',
        text: 'The core philosophy behind this study is rooted in structural clarity and behavioral signals. We explore how products earn their place in a daily routine through a combination of sensory pleasure and functional utility.'
      },
      {
        type: 'sub-section',
        title: 'Topic Title'
      },
      {
        type: 'list',
        listType: 'bullet',
        items: [
          'Strategic Point A',
          'Strategic Point B',
          'Strategic Point C',
        ]
      },
      {
        type: 'sub-section',
        title: 'Placeholder Sub-section',
        body: 'Description goes here. This section explores the relationship between product design and consumer adoption cycles.'
      }
    ]
  },
  {
    id: 'section-2-market-analysis',
    title: 'Section 2: Market Analysis',
    anchorId: 'section-02-market',
    tocLabel: 'Market Analysis',
    content: [
      {
        type: 'paragraph',
        text: 'An analysis of market trends and competitive positioning. We look at the inflection points where consumer behavior shifts and how brands can position ahead of these waves.'
      },
      {
        type: 'sub-section',
        title: 'Strategic Comparison'
      },
      {
        type: 'comparison',
        entries: [
          {
            title: 'Approach 1',
            body: 'Detailed description of the first strategic approach and its impact on growth.'
          },
          {
            title: 'Approach 2',
            body: 'Detailed description of the second strategic approach and its impact on growth.'
          }
        ]
      }
    ]
  }
];
