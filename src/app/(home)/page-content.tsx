import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { FrequentlyAsked } from "./_components/frequently-asked";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <div className="section-divider mx-auto max-w-5xl" />
      <Features />
      <div className="section-divider mx-auto max-w-5xl" />
      <HowItWorks />
      <div className="section-divider mx-auto max-w-5xl" />
      <FrequentlyAsked />
    </div>
  );
}
