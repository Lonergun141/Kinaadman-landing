import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-secondary selection:text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <Features />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
