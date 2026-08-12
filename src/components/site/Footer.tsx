import { Link } from "@tanstack/react-router";
import { CONTACT, NAV } from "./content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-graphite-foreground/10 bg-graphite pt-14 pb-28 text-graphite-foreground lg:pb-14">
      <div className="section-x grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="hazard-stripe block h-8 w-2 rounded-[2px]" aria-hidden="true" />
            <span className="font-display text-lg font-extrabold tracking-[0.14em]">
              GARAGEVERKET
            </span>
          </div>
          <p className="mt-3 text-sm text-graphite-foreground/60">
            Rengöring • Underhåll • Förnyelse
          </p>
          <p className="mt-4 max-w-sm text-sm text-graphite-foreground/70">
            Rengöring, uppfräschning och underhåll av garage och parkeringsanläggningar för
            BRF:er, fastighetsägare och parkeringsaktörer.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-accent">Meny</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-graphite-foreground/80 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/integritetspolicy"
                className="text-graphite-foreground/80 hover:text-accent"
              >
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-accent">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-sm text-graphite-foreground/80">
            <li>Telefon: {CONTACT.phone}</li>
            <li>E-post: {CONTACT.email}</li>
          </ul>
          <h2 className="eyebrow mt-8 text-accent">Företagsinformation</h2>
          <ul className="mt-4 space-y-2 text-sm text-graphite-foreground/80">
            <li>{CONTACT.legalName}</li>
            <li>Org.nr: {CONTACT.orgNr}</li>
          </ul>
        </div>
      </div>

      <div className="section-x mt-12 border-t border-graphite-foreground/10 pt-6 text-xs text-graphite-foreground/50">
        © {new Date().getFullYear()} Garageverket. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}