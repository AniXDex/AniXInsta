import React from "react";
import { LogoImage, LogoText } from "@/components/logo";
import { homeSections, legalLinks } from "@/lib/constants";

const footerLinks = [
  { label: "Terms of Service", href: legalLinks.terms },
  { label: "Privacy Policy", href: legalLinks.privacy },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/25 bg-background/35 backdrop-blur-3xl">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
          <a
            href={`#${homeSections.hero}`}
            className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
          >
            <LogoImage className="h-4 w-4 gold-text" />
            <LogoText className="text-base" />
          </a>

          <div className="flex gap-4 md:ml-4 md:border-l md:border-border/25 md:pl-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground relative text-xs transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-gold after:to-gold/60 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-xs">
          &copy; {year} AniXDex. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
