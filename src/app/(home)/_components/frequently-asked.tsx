import React from "react";
import { HelpCircle, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { homeSections } from "@/lib/constants";

const generalFaqs = [
  {
    q: "Is AniXInsta completely free?",
    a: "Yes — always. There are no hidden fees, no subscription tiers, and no download limits. The service is free to use indefinitely.",
  },
  {
    q: "Do I need to log in or create an account?",
    a: "No account, no login, no personal data required. Just paste the URL and download.",
  },
  {
    q: "Is it legal to download Instagram videos?",
    a: "AniXInsta is intended for personal, offline use only. Always respect the original creator's rights and Instagram's terms of service.",
  },
];

const technicalFaqs = [
  {
    q: "What types of Instagram content can I download?",
    a: "You can download videos from regular posts and reels on public accounts. Private account content requires that you have access to it.",
  },
  {
    q: "What quality will the downloaded video be?",
    a: "We always fetch the highest resolution version Instagram makes available — typically 1080p for reels and HD posts.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. The tool works on any device with a browser. Copy the link from the Instagram app, paste it here, and download.",
  },
];

function FaqGroup({
  title,
  icon,
  items,
  prefix,
}: {
  title: string;
  icon: React.ReactNode;
  items: { q: string; a: string }[];
  prefix: string;
}) {
  return (
    <div className="rounded-2xl border border-border/25 bg-white/45 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-gold/20 hover:shadow-lg hover:shadow-glow/5 dark:bg-white/[0.04] md:p-8">
      <h3 className="mb-6 flex items-center gap-3 text-base font-semibold">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg gold-bg gold-text">
          {icon}
        </span>
        {title}
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`${prefix}-${i}`}>
            <AccordionTrigger className="py-4 text-left text-sm font-medium hover:no-underline hover:text-foreground">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 text-start text-sm leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function FrequentlyAsked() {
  return (
    <section
      id={homeSections.frequentlyAsked}
      className="relative w-full scroll-mt-16 overflow-hidden py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-white/45 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground shadow-sm backdrop-blur-2xl dark:bg-white/[0.04]">
            <span className="inline-block h-1.5 w-1.5 rounded-full gold-bg" />
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Common Questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
            Everything you might want to know before you start.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 md:gap-8">
          <FaqGroup
            title="General"
            prefix="general"
            items={generalFaqs}
            icon={<HelpCircle className="h-3.5 w-3.5" />}
          />
          <FaqGroup
            title="Technical"
            prefix="technical"
            items={technicalFaqs}
            icon={<ShieldCheck className="h-3.5 w-3.5" />}
          />
        </div>
      </div>
    </section>
  );
}
