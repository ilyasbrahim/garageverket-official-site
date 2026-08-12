import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Cta";
import { SERVICES } from "@/components/site/content";
import maskinsopning from "@/assets/maskinsopning.jpg";
import pelare from "@/assets/pelare-markeringar.jpg";

const title = "Tjänster – garagerengöring, maskinsopning och parkeringslinjer | Garageverket";
const description =
  "Garagerengöring, maskinsopning, våtrengöring, målning, parkeringslinjer och garageunderhåll för fastighetsägare, förvaltare, parkeringsbolag, företag och BRF:er.";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tjanster" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tjanster" }],
  }),
  component: TjansterPage,
});

function TjansterPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tjänster"
        title="Våra tjänster"
        text="Från rengöring till uppfräschning och underhåll – vi anpassar arbetet efter ert garage eller er parkeringsanläggning."
      />

      <section className="section-x py-16 md:py-24">
        <p className="max-w-3xl text-lg text-muted-foreground">
          Behöver ni endast en grundlig rengöring? Eller behöver hela parkeringsanläggningen
          fräschas upp med nya linjer, målning och underhåll? Tjänsterna kan kombineras fritt – vi
          anpassar omfattningen efter anläggningens behov.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article key={s.slug} className="group bg-card p-7">
              <span className="font-display text-sm font-bold text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 block h-1 w-10 bg-accent" aria-hidden="true" />
              <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-x grid gap-6 pb-16 md:grid-cols-2 md:pb-24">
        <figure>
          <img
            src={maskinsopning}
            alt="Maskinell sopning av golv i ett parkeringsgarage med industriell sopmaskin"
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Miljöbild: maskinell sopning i parkeringsgarage.
          </figcaption>
        </figure>
        <figure>
          <img
            src={pelare}
            alt="Målade betongpelare med gula markeringar och nymålade parkeringslinjer i garage"
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Miljöbild: pelarmarkeringar och parkeringslinjer.
          </figcaption>
        </figure>
      </section>

      <CtaBand
        title="Behöver ni hjälp med ett garage eller en parkeringsanläggning?"
        text="Kontakta oss för en kostnadsfri bedömning – vi lämnar en tydlig offert efter besök på plats."
      />
    </SiteLayout>
  );
}
