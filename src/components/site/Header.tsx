import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "./content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/15 bg-graphite text-graphite-foreground">
      <div className="section-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="hazard-stripe block h-8 w-2 rounded-[2px]" aria-hidden="true" />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-[0.14em] md:text-xl">
              GARAGEVERKET
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-graphite-foreground/60 uppercase">
              Rengöring • Underhåll • Förnyelse
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Huvudmeny">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-graphite-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/kontakt"
            className="eyebrow inline-flex items-center rounded-sm bg-accent px-4 py-3 text-accent-foreground transition-colors hover:bg-accent/85"
          >
            Be om kostnadsfri bedömning
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-graphite-foreground/25 p-2 lg:hidden"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-graphite-foreground/10 lg:hidden">
          <nav className="section-x flex flex-col py-3" aria-label="Mobilmeny">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-graphite-foreground/10 py-3 text-base font-medium text-graphite-foreground/90"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="eyebrow mt-4 rounded-sm bg-accent px-4 py-4 text-center text-accent-foreground"
            >
              Be om kostnadsfri bedömning
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}