import { Metadata } from 'next';
import ResearchWipClient from './ResearchWipClient';

export const metadata: Metadata = {
  title: {
    absolute: "PAUSE"
  },
  description: "A working workbook for deep industry research and open questions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResearchWipPage() {
  return <ResearchWipClient />;
}
