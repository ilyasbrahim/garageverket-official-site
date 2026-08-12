import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CONTACT } from "@/components/site/content";

const title = "Kontakt – kostnadsfri bedömning av ert garage | Garageverket";
const description =
  "Kontakta Garageverket för en kostnadsfri bedömning och offert på rengöring, uppfräschning och underhåll av garage och parkeringsanläggningar – för fastigheter, företag, parkeringsbolag och föreningar.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

const field =
  "mt-2 w-full rounded-sm border border-input bg-card px-3 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/30";
const labelCls = "block text-sm font-medium";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Behöver ni hjälp med ett garage eller en parkeringsanläggning?"
        text="Kontakta Garageverket för en kostnadsfri bedömning och offert."
      />

      <section className="section-x grid gap-12 py-16 md:grid-cols-[1fr_340px] md:py-24">
        <div>
          <h2 className="text-2xl font-bold">Skicka en förfrågan</h2>
          <p className="mt-2 text-muted-foreground">
            Fyll i så mycket ni kan, så återkommer vi med nästa steg.
          </p>

          {sent ? (
            <div className="mt-8 rounded-sm border border-accent bg-accent/10 p-6">
              <h3 className="font-display text-lg font-bold">Tack för er förfrågan</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Vi återkommer så snart vi kan för att boka en kostnadsfri bedömning.
              </p>
            </div>
          ) : (
            <form
              className="mt-8 grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className={labelCls} htmlFor="namn">Namn</label>
                <input id="namn" name="namn" required autoComplete="name" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="foretag">BRF/Företag</label>
                <input id="foretag" name="foretag" autoComplete="organization" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="epost">E-post</label>
                <input id="epost" name="epost" type="email" required autoComplete="email" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="telefon">Telefonnummer</label>
                <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="adress">Adress</label>
                <input id="adress" name="adress" autoComplete="street-address" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="ort">Ort</label>
                <input id="ort" name="ort" autoComplete="address-level2" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="typ">Typ av anläggning</label>
                <select id="typ" name="typ" className={field} defaultValue="">
                  <option value="" disabled>Välj</option>
                  <option>BRF-garage</option>
                  <option>Kommersiell fastighet</option>
                  <option>Kontorsfastighet</option>
                  <option>Köpcentrum/handel</option>
                  <option>Industri eller lager</option>
                  <option>Underjordiskt garage</option>
                  <option>Parkeringshus</option>
                  <option>Markparkering</option>
                  <option>Företagsgarage</option>
                  <option>Annat</option>
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="storlek">Ungefärlig storlek (kvm)</label>
                <input id="storlek" name="storlek" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="platser">Antal parkeringsplatser</label>
                <input id="platser" name="platser" inputMode="numeric" className={field} />
              </div>
              <div>
                <label className={labelCls} htmlFor="tid">Önskad tidsperiod</label>
                <input id="tid" name="tid" placeholder="T.ex. under våren" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="behov">Vilken hjälp behövs?</label>
                <textarea id="behov" name="behov" rows={5} className={field} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="bilder">Bifoga bilder (valfritt)</label>
                <input
                  id="bilder"
                  name="bilder"
                  type="file"
                  multiple
                  accept="image/*"
                  className={`${field} file:mr-3 file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm`}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="eyebrow w-full rounded-sm bg-accent px-6 py-4 text-accent-foreground transition-colors hover:bg-accent/85 sm:w-auto"
                >
                  Skicka förfrågan
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Uppgifterna används endast för att kunna svara på er förfrågan.
                </p>
              </div>
            </form>
          )}
        </div>

        <aside className="self-start rounded-sm bg-graphite p-7 text-graphite-foreground">
          <span className="hazard-stripe block h-1.5 w-20" aria-hidden="true" />
          <h2 className="mt-5 font-display text-lg font-bold uppercase tracking-wide">
            Kontaktuppgifter
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-accent" aria-hidden="true" />
              {CONTACT.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-accent" aria-hidden="true" />
              {CONTACT.email}
            </li>
          </ul>
          <p className="mt-6 text-sm text-graphite-foreground/70">
            Vi arbetar med garage och parkeringsanläggningar i Skåne och södra Sverige.
          </p>
          <p className="mt-6 border-t border-graphite-foreground/15 pt-6 text-xs text-graphite-foreground/60">
            {CONTACT.legalName}
            <br />
            Org.nr: {CONTACT.orgNr}
          </p>
        </aside>
      </section>
    </SiteLayout>
  );
}
