import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Clipboard } from "lucide-react";
import { homeLinks, homeSections } from "@/lib/constants";

const steps = [
  {
    icon: Copy,
    title: "Copy the Link",
    desktop: "Open the Instagram post or reel you want and copy its URL from the share menu or address bar.",
    mobile: "Open the Instagram post and copy its URL from the share menu.",
  },
  {
    icon: Clipboard,
    title: "Paste It Here",
    desktop: "Drop the URL into the input field at the top of this page and hit Download.",
    mobile: "Paste the URL into the input field above.",
  },
  {
    icon: Download,
    title: "Save Your Video",
    desktop: "Your video downloads directly to your device in its original quality.",
    mobile: "Your video saves directly to your device.",
  },
];

export function HowItWorks() {
  return (
    <section
      id={homeSections.howItWorks}
      className="relative w-full scroll-mt-16 overflow-hidden py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/35 bg-white/45 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground shadow-sm backdrop-blur-2xl dark:bg-white/[0.04]">
            <span className="inline-block h-1.5 w-1.5 rounded-full gold-bg" />
            Three Steps
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Effortlessly Simple
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
            From link to download in under ten seconds.
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mx-auto hidden max-w-5xl md:block">
          <div
            aria-hidden
            className="absolute top-10 right-[16.67%] left-[16.67%] h-[2px]"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--gold), transparent)",
              opacity: 0.15,
            }}
          />
          <div className="grid grid-cols-3 gap-10">
            {steps.map(({ icon: Icon, title, desktop }, i) => (
              <div key={i} className="flex flex-col items-center gap-6">
                <div
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/25 bg-white/45 text-lg font-bold text-gold shadow-lg shadow-glow/10 backdrop-blur-2xl transition-all duration-500 hover:scale-110 hover:border-gold/50 hover:shadow-xl hover:shadow-glow/20 dark:bg-white/[0.06]"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-full rounded-2xl border border-border/25 bg-white/45 p-7 text-center shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:shadow-xl hover:shadow-glow/10 dark:bg-white/[0.04]">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-bg transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5 gold-text" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-base font-semibold">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desktop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="relative mx-auto max-w-md space-y-8 md:hidden">
          <div
            aria-hidden
            className="absolute top-6 bottom-6 left-[1.85rem] w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--gold), transparent)",
              opacity: 0.12,
            }}
          />
          {steps.map(({ icon: Icon, title, mobile }, i) => (
            <div key={i} className="relative flex items-start gap-5">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold/25 bg-white/45 text-xs font-bold text-gold shadow-lg backdrop-blur-2xl dark:bg-white/[0.06]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 rounded-2xl border border-border/25 bg-white/45 p-5 shadow-sm backdrop-blur-xl dark:bg-white/[0.04]">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg gold-bg">
                    <Icon className="h-3.5 w-3.5 gold-text" />
                  </div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{mobile}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            asChild
            className="rounded-full px-8 text-sm font-medium tracking-wide shadow-lg shadow-glow/20 transition-all duration-500 hover:shadow-xl hover:shadow-glow/30 hover:scale-105 hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "var(--gold)",
              color: "oklch(0.07 0.01 260)",
            }}
          >
            <a href={homeLinks.hero}>Try It Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
