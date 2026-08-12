import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CONTACT } from "@/components/site/content";

const title = "Integritetspolicy och cookies | Garageverket";
const description =
  "Information om hur Garageverket hanterar personuppgifter som lämnas via kontaktformulär, samt information om cookies.";

export const Route = createFileRoute("/integritetspolicy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/integritetspolicy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/integritetspolicy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Juridisk information" title="Integritetspolicy och cookies" />
      <section className="section-x max-w-3xl space-y-8 py-16 md:py-24">
        <div>
          <h2 className="text-xl font-bold">Personuppgiftsansvarig</h2>
          <p className="mt-3 text-muted-foreground">Garageverket. Kontakt: {CONTACT.email}.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Vilka uppgifter vi behandlar</h2>
          <p className="mt-3 text-muted-foreground">
            När ni kontaktar oss via formuläret behandlar vi de uppgifter ni lämnar, till exempel
            namn, förening eller företag, e-postadress, telefonnummer, adress och information om
            anläggningen. Uppgifterna används för att kunna svara på förfrågan och lämna offert.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Laglig grund och lagringstid</h2>
          <p className="mt-3 text-muted-foreground">
            Behandlingen sker med stöd av berättigat intresse eller för att kunna ingå avtal.
            Uppgifterna sparas så länge det behövs för ändamålet. [LAGRINGSTID]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Cookies</h2>
          <p className="mt-3 text-muted-foreground">
            Webbplatsen använder i grundutförandet endast cookies som är nödvändiga för att sidan
            ska fungera. Om analys- eller marknadsföringscookies läggs till kompletteras webbplatsen
            med en cookiebanner där samtycke kan lämnas och återkallas.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Era rättigheter</h2>
          <p className="mt-3 text-muted-foreground">
            Ni har rätt att begära utdrag, rättelse eller radering av era personuppgifter samt att
            invända mot behandlingen. Kontakta oss på {CONTACT.email}.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
