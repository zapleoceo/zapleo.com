import { CursorDot } from '@/components/cursor-dot';
import { CTABlock } from '@/components/cta-block';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { NowThen } from '@/components/now-then';
import { PullQuote } from '@/components/pull-quote';
import { TrustedStrip } from '@/components/trusted-strip';
import { WorkTeaser } from '@/components/work-teaser';

export default function Home() {
  return (
    <>
      <CursorDot />
      <main>
        <Hero locale="en" />
        <NowThen locale="en" />
        <TrustedStrip locale="en" />
        <WorkTeaser />
        <PullQuote locale="en" />
        <CTABlock locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
