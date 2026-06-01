"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogoImage, LogoText } from "@/components/logo";
import { ThemeToggleButton } from "@/features/theme/theme-toggle-button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  return (
    <>
      <div className="h-16 md:h-20" />
      <header className="fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 px-3 pt-3 md:pt-4">
        <div
          className={cn(
            "mx-auto flex max-w-5xl items-center rounded-full border px-5 shadow-lg transition-all duration-500",
            scrolled
              ? "h-12 border-gold/20 bg-background/30 backdrop-blur-3xl md:h-14"
              : "h-12 border-border/20 bg-background/10 backdrop-blur-3xl md:h-14"
          )}
        >
          <div
            role="button"
            onClick={scrollUp}
            className="flex cursor-pointer items-center gap-2.5 select-none transition-opacity duration-300 hover:opacity-80"
          >
            <LogoImage className="h-4 w-4 md:h-5 md:w-5 gold-text" />
            <LogoText className="text-sm md:text-base" />
          </div>

          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-gold after:to-gold/60 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 border-l border-border/25 pl-4">
              <ThemeToggleButton />
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <ThemeToggleButton />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 transition-transform duration-300 active:scale-90"
                >
                  <Menu className="h-[1.1rem] w-[1.1rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] glass-strong sm:w-[320px]">
                <SheetHeader className="border-b border-border/25 pb-4">
                  <SheetTitle>
                    <div className="flex items-center gap-2.5">
                      <LogoImage className="h-5 w-5 gold-text" />
                      <LogoText />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col">
                  <nav className="flex flex-col gap-1 px-2 pt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 rounded-xl px-3 py-3 text-base font-medium transition-all duration-300"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto border-t border-border/25 px-4 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Theme</span>
                    <ThemeToggleButton variant="outline" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
