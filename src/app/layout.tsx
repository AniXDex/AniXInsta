import type { Metadata } from "next";
import { DM_Sans as RootFont } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { ReactQueryProvider } from "@/features/react-query/react-query-provider";

import { cn } from "@/lib/utils";
import { siteMetadata } from "@/lib/site";

import "./globals.css";

const rootFont = RootFont({
  variable: "--font-root-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("antialiased min-h-screen", rootFont.className)}>
        <ThemeProvider>
          <ReactQueryProvider>
            {children}
            <Toaster closeButton />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
