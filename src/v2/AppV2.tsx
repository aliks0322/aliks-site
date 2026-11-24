import { useRevealAll } from '@/hooks/useReveal';
import { V2Nav, V2Hero } from '@/v2/V2Top';
import { V2Services, V2Features, V2Works, V2Steps, V2Principles } from '@/v2/V2Middle';
import { V2Contact, V2Footer } from '@/v2/V2Bottom';

export function AppV2() {
  const ref = useRevealAll<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen">
      <span aria-hidden="true" className="v2-dot v2-dot-fixed" />
      <V2Nav />
      <main>
        <V2Hero />
        <V2Services />
        <V2Features />
        <V2Works />
        <V2Steps />
        <V2Principles />
        <V2Contact />
      </main>
      <V2Footer />
    </div>
  );
}
