import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground/50 selection:bg-gold selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-xl border bg-white/60 px-4 py-1 text-base shadow-sm transition-all duration-300 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-xl md:text-sm",
        "focus-visible:border-gold focus-visible:ring-[3px] focus-visible:ring-glow focus-visible:shadow-lg focus-visible:shadow-glow",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "hover:border-border/80",
        className
      )}
      {...props}
    />
  );
}

export { Input };
