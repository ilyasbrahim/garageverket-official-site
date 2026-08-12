import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/Layout";
import { CtaBand, CtaButton } from "@/components/site/Cta";
import { FAQ, SERVICES, STEPS } from "@/components/site/content";
import heroGarage from "@/assets/hero-garage.jpg";
import maskinsopning from "@/assets/maskinsopning.jpg";
import brfGarage from "@/assets/brf-garage.jpg";

const title = "Garagerengöring och garageunderhåll för BRF och fastighetsägare | Garageverket";
const description =
  "Garageverket erbjuder garagerengöring, maskinsopning, våtrengöring, målning och parkeringslinjer för BRF:er, fastighetsägare och parkeringsanläggningar i Skåne och södra Sverige.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Garageverket",
          slogan: "Rengöring • Underhåll • Förnyelse",
          description,
          areaServed: [
            { "@type": "AdministrativeArea", name: "Skåne" },
            { "@type": "AdministrativeArea", name: "Södra Sverige" },
          ],
          knowsAbout: [
            "garagerengöring",
            "garagestädning",
            "maskinsopning",
            "våtrengöring garage",
            "parkeringslinjer",
            "garageunderhåll",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const flow = ["Rengöring", "Uppfräschning", "Parkeringsmarkering", "Underhåll"];
const brfPoints = [
  "Kostnadsfri bedömning",
  "Tydlig offert",
  "Anpassade lösningar",
  "En kontakt för flera typer av arbeten",
  "Möjlighet till återkommande underhåll",
];
const maintenance = [
  "Årlig rengöring",
  "Vår- och höstunderhåll",
  "Återkommande maskinsopning",
  "Periodisk uppfräschning",
  "Planerade underhållsinsatser",
];
const why = [
  { t: "Tydliga offerter", d: "Ni ska veta vad som ingår och vad arbetet kostar." },
  {
    t: "Anpassade lösningar",
    d: "Alla garage är olika. Vi anpassar arbetet efter anläggningens behov.",
  },
  { t: "En kontakt", d: "Flera typer av underhåll kan samordnas genom samma leverantör." },
  { t: "Långsiktigt tänk", d: "Vi vill hjälpa er att hålla garaget i gott skick över tid." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-graphite text-graphite-foreground">
        <img
          src={heroGarage}
          alt="Rent och välskött underjordiskt parkeringsgarage med målade parkeringslinjer och markerade pelare"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/40" />
        <div className="section-x py-24 md:py-36">
          <span className="hazard-stripe mb-8 block h-1.5 w-28" aria-hidden="true" />
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Vi tar hand om hela ditt garage.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-graphite-foreground/85 md:text-xl">
            Professionell rengöring, underhåll och förnyelse av garage och parkeringsanläggningar.
          </p>
          <p className="mt-4 max-w-2xl text-graphite-foreground/65">
            Garageverket hjälper BRF:er, fastighetsägare och parkeringsaktörer att hålla sina
            garage rena, välskötta och representativa.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton>Be om kostnadsfri bedömning</CtaButton>
            <CtaButton to="/tjanster" variant="outline">
              Se våra tjänster
            </CtaButton>
          </div>
          <p className="eyebrow mt-8 text-graphite-foreground/55">
            Kostnadsfri bedömning • Tydlig offert • Anpassad lösning
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-x grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <h2 className="text-2xl font-bold md:text-4xl">Ett garage behöver mer än bara sopas.</h2>
        <div className="space-y-5 text-muted-foreground">
          <p>
            Garage och parkeringsanläggningar utsätts varje dag för grus, damm, smuts, avgaser,
            oljefläckar och slitage. Med tiden påverkas både golv, väggar, pelare och
            parkeringsmarkeringar.
          </p>
          <p>
            Garageverket erbjuder lösningar för rengöring, uppfräschning och löpande underhåll – så
            att ni kan hålla anläggningen i gott skick över tid.
          </p>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="section-x">
          <span className="eyebrow text-muted-foreground">Tjänster</span>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">Våra tjänster</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Från rengöring till uppfräschning och underhåll – vi anpassar arbetet efter ert garage.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.slug} className="bg-card p-7">
                <span className="block h-1 w-10 bg-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Behöver ert garage en uppfräschning?"
        text="Vi tittar på anläggningens behov och lämnar en tydlig offert."
      />

      {/* FLERA LÖSNINGAR */}
      <section className="section-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-2xl font-bold md:text-4xl">
            Ett företag för flera delar av garageunderhållet.
          </h2>
          <p className="mt-5 text-muted-foreground">
            När ett garage behöver mer än rengöring kan flera olika arbeten behöva samordnas.
            Garageverket erbjuder flera tjänster under samma kontakt, vilket gör det enklare att
            planera och genomföra underhåll.
          </p>
          <p className="mt-5 text-muted-foreground">
            Vi börjar med att titta på garagets faktiska behov och föreslår de åtgärder som är
            relevanta för just er anläggning.
          </p>
        </div>
        <ol className="space-y-2">
          {flow.map((step, i) => (
            <li key={step}>
              <div className="flex items-center gap-4 rounded-sm border border-border bg-card px-6 py-5">
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-wide">
                  {step}
                </span>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="mx-6 my-1 size-5 text-muted-foreground" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* FÖR BRF */}
      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="section-x grid items-center gap-12 md:grid-cols-2">
          <img
            src={brfGarage}
            alt="Bostadsrättsförening med garageplatser under huset i ett svenskt bostadsområde"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-sm object-cover"
          />
          <div>
            <span className="eyebrow text-muted-foreground">För BRF</span>
            <h2 className="mt-4 text-2xl font-bold md:text-4xl">Garageunderhåll för BRF:er</h2>
            <p className="mt-5 text-muted-foreground">
              Som styrelse behöver ni kunna få tydliga besked, tydliga offerter och ett arbete som
              blir gjort enligt överenskommelse.
            </p>
            <p className="mt-4 text-muted-foreground">
              Garageverket hjälper bostadsrättsföreningar med rengöring, uppfräschning och
              underhåll av garage och parkeringsytor.
            </p>
            <ul className="mt-7 space-y-3">
              {brfPoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <CtaButton className="mt-8">Boka en kostnadsfri bedömning</CtaButton>
          </div>
        </div>
      </section>

      {/* SÅ FUNGERAR DET */}
      <section className="section-x py-16 md:py-24">
        <span className="eyebrow text-muted-foreground">Process</span>
        <h2 className="mt-4 text-2xl font-bold md:text-4xl">Så fungerar det</h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-5">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-card p-7">
              <span className="font-display text-3xl font-extrabold text-accent">{step.n}</span>
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <CtaButton className="mt-10">Be om kostnadsfri bedömning</CtaButton>
      </section>

      {/* LÖPANDE UNDERHÅLL */}
      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <div className="section-x grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow text-muted-foreground">Löpande underhåll</span>
            <h2 className="mt-4 text-2xl font-bold md:text-4xl">
              Håll garaget i gott skick över tid.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Med återkommande underhåll blir det enklare att hålla garage och parkeringsytor rena
              och välskötta.
            </p>
            <p className="mt-4 text-muted-foreground">
              Vi kan hjälpa till med återkommande rengöring och planerade underhållsinsatser
              utifrån anläggningens behov.
            </p>
            <CtaButton className="mt-8">Fråga om underhållsavtal</CtaButton>
          </div>
          <div>
            <img
              src={maskinsopning}
              alt="Industriell sopmaskin rengör betonggolvet i ett parkeringsgarage"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-sm object-cover"
            />
            <ul className="mt-6 grid gap-px overflow-hidden rounded-sm bg-border">
              {maintenance.map((m) => (
                <li key={m} className="bg-card px-5 py-3 text-sm font-medium">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OM + VARFÖR */}
      <section className="section-x grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="eyebrow text-muted-foreground">Om oss</span>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">Om Garageverket</h2>
          <p className="mt-5 text-muted-foreground">
            Garageverket är ett svenskt företag med fokus på garage, parkeringsanläggningar och
            fastighetsnära underhåll.
          </p>
          <p className="mt-4 text-muted-foreground">
            Vårt mål är enkelt: att göra det enklare för fastighetsägare och BRF:er att hålla sina
            garage rena, välskötta och representativa.
          </p>
          <p className="mt-4 text-muted-foreground">
            Vi tror på tydlig kommunikation, noggrant arbete och lösningar som är anpassade efter
            varje anläggning.
          </p>
          <Link
            to="/om-garageverket"
            className="eyebrow mt-8 inline-block border-b-2 border-accent pb-1"
          >
            Läs mer om oss
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Varför Garageverket?</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.t} className="bg-card p-6">
                <h3 className="font-display text-base font-bold uppercase tracking-wide">{w.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary py-16 md:py-24">
        <div className="section-x max-w-3xl">
          <span className="eyebrow text-muted-foreground">Frågor och svar</span>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">Vanliga frågor</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand
        title="Behöver ert garage en uppfräschning?"
        text="Kontakta Garageverket för en kostnadsfri bedömning och offert."
        label="Skicka förfrågan"
      />
    </SiteLayout>
  );
}
