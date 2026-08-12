import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Cta";
import brfGarage from "@/assets/brf-garage.jpg";

const title = "Garagerengöring och garageunderhåll för BRF | Garageverket";
const description =
  "Garageverket hjälper bostadsrättsföreningar med rengöring, uppfräschning och underhåll av garage och parkeringsytor. Kostnadsfri bedömning och tydlig offert.";

export const Route = createFileRoute("/for-brf")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for-brf" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/for-brf" }],
  }),
  component: BrfPage,
});

const points = [
  "Kostnadsfri bedömning",
  "Tydlig offert",
  "Anpassade lösningar",
  "En kontakt för flera typer av arbeten",
  "Möjlighet till återkommande underhåll",
];

function BrfPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="För BRF"
        title="Garageunderhåll för BRF:er"
        text="Som styrelse behöver ni kunna få tydliga besked, tydliga offerter och ett arbete som blir gjort enligt överenskommelse."
      />

      <section className="section-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">
            Rengöring och underhåll av föreningens garage
          </h2>
          <p className="mt-5 text-muted-foreground">
            Garageverket hjälper bostadsrättsföreningar med rengöring, uppfräschning och underhåll
            av garage och parkeringsytor. Vi utgår från anläggningens faktiska behov och föreslår
            de åtgärder som är relevanta för just er förening.
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
        <img
          src={brfGarage}
          alt="Garageinfart till ett modernt svenskt bostadshus med parkeringsplatser"
          width={1280}
          height={960}
          loading="lazy"
          className="rounded-sm object-cover"
        />
      </section>

      <CtaBand
        title="Boka en kostnadsfri bedömning"
        text="Vi går igenom garaget tillsammans med er och sammanställer ett tydligt förslag till styrelsen."
        label="Boka en kostnadsfri bedömning"
      />
    </SiteLayout>
  );
}
