import React from "react";
import { CheckCircle, Shield, TvMinimalPlay, Zap } from "lucide-react";
import { homeSections } from "@/lib/constants";

const cards = [
  {
    icon: Shield,
    title: "Always Free",
    description: "No subscriptions, no paywalls. Download as many videos as you like, forever.",
  },
  {
    icon: CheckCircle,
    title: "No Account Required",
    description: "Zero sign-ups, zero tracking. Paste your link and you&apos;re done.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Videos are fetched and ready in seconds — no waiting, no queues.",
  },
  {
    icon: TvMinimalPlay,
    title: "Original Quality",
    description: "We serve the highest resolution Instagram provides, exactly as uploaded.",
  },
];

export function Features() {
  return (
    <section
      id={homeSections.features}
      className="relative w-full scroll-mt-16 overflow-hidden py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-white/45 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground shadow-sm backdrop-blur-2xl dark:bg-white/[0.04]">
            <span className="inline-block h-1.5 w-1.5 rounded-full gold-bg" />
            Why AniXInsta
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for Simplicity
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
            Everything stripped back to what matters — fast, private, and effortless downloads.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4">
          {cards.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/25 bg-white/45 p-4 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-xl hover:shadow-glow/10 dark:bg-white/[0.04] sm:p-6"
            >
              <div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-b from-gold/[0.06] to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl gold-bg transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-glow/20 sm:h-11 sm:w-11">
                <Icon className="h-4 w-4 gold-text sm:h-5 sm:w-5" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
