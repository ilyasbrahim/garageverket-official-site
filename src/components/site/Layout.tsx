import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCta />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="bg-graphite py-16 text-graphite-foreground md:py-24">
      <div className="section-x">
        <span className="eyebrow text-accent">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-graphite-foreground/75">{text}</p>}
      </div>
    </section>
  );
}