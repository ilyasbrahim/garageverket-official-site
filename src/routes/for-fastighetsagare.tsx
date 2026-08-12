import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Cta";
import { ASSIGNMENTS, SEGMENTS } from "@/components/site/content";
import brfGarage from "@/assets/brf-garage.jpg";

const title =
  "För fastighetsägare, företag och parkeringsaktörer – garageunderhåll | Garageverket";
const description =
  "Garageverket sköter rengöring, underhåll och uppfräschning av garage och parkeringsanläggningar för fastighetsägare, förvaltare, parkeringsbolag, företag och BRF:er.";

export const Route = createFileRoute("/for-fastighetsagare")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-fastighetsagare" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/for-fastighetsagare" }],
  }),
  component: SegmentsPage,
});

const points = [
  "Kostnadsfri bedömning",
  "Tydlig offert",
  "Anpassade lösningar",
  "En kontakt för flera typer av arbeten",
  "Möjlighet till återkommande underhåll",
];

function SegmentsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="För fastigheter och verksamheter"
        title="Garageunderhåll för fastigheter och verksamheter"
        text="Oavsett om ni representerar en bostadsrättsförening, ett fastighetsbolag, ett parkeringsbolag eller ett företag kan Garageverket hjälpa till med rengöring, uppfräschning och underhåll av garage och parkeringsytor."
      />

      <section className="section-x py-16 md:py-24">
        <h2 className="text-2xl font-bold md:text-4xl">
          För fastigheter och parkeringsanläggningar
        </h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          Garageverket arbetar med garage och parkeringsytor för en rad olika typer av
          verksamheter och fastigheter. Oavsett om ni ansvarar för ett mindre garage eller en
          större parkeringsanläggning anpassar vi arbetet efter era behov.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <article key={s.title} className="bg-card p-7">
              <span className="block h-1 w-10 bg-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="section-x grid items-center gap-12 md:grid-cols-2">
          <img
            src={brfGarage}
            alt="Fastighet med garageplatser och parkeringsytor i ett svenskt bostads- och verksamhetsområde"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-sm object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Samma upplägg oavsett anläggning</h2>
            <p className="mt-5 text-muted-foreground">
              Ni som ansvarar för garaget – styrelse, förvaltare, driftansvarig eller
              parkeringschef – ska kunna få tydliga besked, en tydlig offert och ett arbete som
              blir gjort enligt överenskommelse.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-x py-16 md:py-24">
        <h2 className="text-2xl font-bold md:text-4xl">Från enstaka insatser till löpande underhåll</h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          Vi tar både mindre och större uppdrag. Det kan handla om en enstaka rengöring, förnyelse
          av parkeringslinjer eller ett mer omfattande underhållsprojekt.
        </p>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ASSIGNMENTS.map((a) => (
            <li key={a} className="bg-card px-6 py-5 font-medium">
              {a}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Behöver ni hjälp med ett garage eller en parkeringsanläggning?"
        text="Kontakta oss för en kostnadsfri bedömning och en tydlig offert."
      />
    </SiteLayout>
  );
}
