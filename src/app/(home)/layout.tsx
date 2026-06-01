import React from "react";

import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { BackToTop } from "./_components/back-to-top";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col grain">
      {/* Unified mesh background across all pages */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 animate-mesh-drift mesh-gradient"
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
