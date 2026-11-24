import { Nav } from '@/sections/Nav';
import { Hero } from '@/sections/Hero';
import { Marquee } from '@/sections/Marquee';
import { Works } from '@/sections/Works';
import { WhyTilda } from '@/sections/WhyTilda';
import { Pricing } from '@/sections/Pricing';
import { Process } from '@/sections/Process';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { useRevealAll } from '@/hooks/useReveal';

export default function App() {
  const ref = useRevealAll<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Works />
        <WhyTilda />
        <Pricing />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
