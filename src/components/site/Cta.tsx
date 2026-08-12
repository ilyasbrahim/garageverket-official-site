import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function CtaButton({
  children,
  variant = "primary",
  to = "/kontakt",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  to?: string;
  className?: string;
}) {
  const base =
    "eyebrow inline-flex items-center justify-center rounded-sm px-6 py-4 transition-colors";
  const styles = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/85",
    outline:
      "border border-graphite-foreground/35 text-graphite-foreground hover:border-accent hover:text-accent",
    dark: "bg-graphite text-graphite-foreground hover:bg-graphite/90",
  }[variant];

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function CtaBand({
  title,
  text,
  label = "Be om kostnadsfri bedömning",
}: {
  title: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="bg-graphite py-16 text-graphite-foreground">
      <div className="section-x flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="hazard-stripe mb-5 block h-1.5 w-24" aria-hidden="true" />
          <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">{title}</h2>
          {text && <p className="mt-3 max-w-xl text-graphite-foreground/70">{text}</p>}
        </div>
        <CtaButton className="w-full md:w-auto">{label}</CtaButton>
      </div>
    </section>
  );
}