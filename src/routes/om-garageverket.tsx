import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Cta";

const title = "Om Garageverket – svenskt företag för garageunderhåll | Garageverket";
const description =
  "Garageverket är ett svenskt företag med fokus på garage, parkeringsanläggningar och fastighetsnära underhåll för fastighetsägare, förvaltare, företag och föreningar.";

export const Route = createFileRoute("/om-garageverket")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/om-garageverket" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/om-garageverket" }],
  }),
  component: AboutPage,
});

const why = [
  { t: "Tydliga offerter", d: "Ni ska veta vad som ingår och vad arbetet kostar." },
  {
    t: "Anpassade lösningar",
    d: "Alla garage är olika. Vi anpassar arbetet efter anläggningens behov.",
  },
  {
    t: "En kontakt",
    d: "Flera typer av underhåll kan samordnas genom samma leverantör.",
  },
  { t: "Långsiktigt tänk", d: "Vi vill hjälpa er att hålla garaget i gott skick över tid." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Om oss"
        title="Om Garageverket"
        text="Ett svenskt företag med fokus på garage, parkeringsanläggningar och fastighetsnära underhåll."
      />

      <section className="section-x max-w-3xl py-16 md:py-24">
        <p className="text-lg leading-relaxed">
          Garageverket är ett svenskt företag med fokus på garage, parkeringsanläggningar och
          fastighetsnära underhåll.
        </p>
        <p className="mt-5 text-muted-foreground">
          Vårt mål är enkelt: att göra det enklare för fastighetsägare, förvaltare, parkeringsbolag,
          företag och föreningar att hålla sina garage och parkeringsytor rena, välskötta och
          representativa.
        </p>
        <p className="mt-5 text-muted-foreground">
          Vi tror på tydlig kommunikation, noggrant arbete och lösningar som är anpassade efter
          varje anläggning. Vi är verksamma i Skåne och södra Sverige.
        </p>
      </section>

      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="section-x">
          <h2 className="text-2xl font-bold md:text-3xl">Varför Garageverket?</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.t} className="bg-card p-7">
                <span className="block h-1 w-10 bg-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide">
                  {w.t}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Vill ni veta vad vi kan göra för ert garage?" />
    </SiteLayout>
  );
}
