import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Cta";
import { STEPS } from "@/components/site/content";

const title = "Så fungerar det – från bedömning till utfört arbete | Garageverket";
const description =
  "Så går det till när Garageverket rengör och underhåller garage och parkeringsanläggningar: kontakt, bedömning på plats, offert, planering och utförande.";

export const Route = createFileRoute("/sa-fungerar-det")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sa-fungerar-det" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sa-fungerar-det" }],
  }),
  component: ProcessPage,
});

const maintenance = [
  "Årlig rengöring",
  "Vår- och höstunderhåll",
  "Återkommande maskinsopning",
  "Periodisk uppfräschning",
  "Planerade underhållsinsatser",
];

function ProcessPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Process"
        title="Så fungerar det"
        text="Fem tydliga steg från första kontakt till utfört arbete."
      />

      <section className="section-x py-16 md:py-24">
        <ol className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-5">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-card p-7">
              <span className="font-display text-3xl font-extrabold text-accent">{step.n}</span>
              <h2 className="mt-4 font-display text-base font-bold uppercase tracking-wide">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="section-x grid gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow text-muted-foreground">Löpande underhåll</span>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              Håll garaget i gott skick över tid.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Med återkommande underhåll blir det enklare att hålla garage och parkeringsytor rena
              och välskötta. Vi kan hjälpa till med återkommande rengöring och planerade
              underhållsinsatser utifrån anläggningens behov.
            </p>
          </div>
          <ul className="grid gap-px self-start overflow-hidden rounded-sm bg-border">
            {maintenance.map((m) => (
              <li key={m} className="bg-card px-5 py-4 font-medium">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Vill ni ha återkommande underhåll?"
        text="Vi planerar insatserna efter anläggningens behov."
        label="Fråga om underhållsavtal"
      />
    </SiteLayout>
  );
}
