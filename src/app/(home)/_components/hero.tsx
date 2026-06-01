import React from "react";
import { ArrowDown } from "lucide-react";
import { homeLinks, homeSections } from "@/lib/constants";
import { InstagramForm } from "@/components/instagram-form";

export function Hero() {
  return (
    <section
      id={homeSections.hero}
      className="relative w-full scroll-mt-16 overflow-hidden py-16 md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[30rem] w-[30rem] animate-float-slow rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.2 68 / 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 -z-10 h-[25rem] w-[25rem] animate-float-reverse rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.2 68 / 0.07) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/4 -z-10 h-64 w-64 animate-float rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.2 68 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border/35 bg-white/45 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted-foreground shadow-sm backdrop-blur-2xl dark:bg-white/[0.04]">
            <span className="inline-block h-1.5 w-1.5 animate-glow-pulse rounded-full gold-bg" />
            Instagram Video Downloader
          </div>

          <div className="max-w-4xl animate-slide-up space-y-5" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              Save Any Instagram{" "}
              <span className="bg-gradient-to-r from-gold via-[oklch(0.72_0.22_58)] to-gold/60 bg-clip-text text-transparent">
                Video Instantly
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              Paste a link, get your video. No account needed, no watermarks, no limits.
            </p>
          </div>

          {/* Download card — clean minimal glass with subtle water flow */}
          <div className="w-full max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="group relative overflow-hidden rounded-xl border border-border/20 bg-white/40 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-md dark:bg-white/[0.03] md:p-6">
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
                style={{
                  background: "linear-gradient(105deg, transparent 20%, oklch(0.85 0.2 55) 40%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "water-flow 6s ease-in-out infinite",
                }}
              />
              <div className="relative z-[1]">
                <div className="mb-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gold-text">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="M12 9v4" /><path d="M10 11h4" />
                  </svg>
                  Paste your link below
                  <span className="mx-1.5 h-1 w-1 rounded-full gold-bg" />
                  Free &bull; No account
                </div>
                <InstagramForm />
              </div>
            </div>
          </div>

          <a
            href={homeLinks.howItWorks}
            className="group flex animate-fade-in flex-col items-center gap-2"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-foreground">
              See how it works
            </span>
            <ArrowDown className="h-4 w-4 animate-float" style={{ color: "var(--gold)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
