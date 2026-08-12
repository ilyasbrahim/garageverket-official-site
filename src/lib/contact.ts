import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  namn: z.string().trim().min(1, "Ange ditt namn.").max(120),
  foretag: z.string().trim().max(160).optional(),
  epost: z.string().trim().email("Ange en giltig e-postadress.").max(254),
  telefon: z.string().trim().max(50).optional(),
  adress: z.string().trim().max(200).optional(),
  ort: z.string().trim().max(100).optional(),
  typ: z.string().trim().max(100).optional(),
  storlek: z.string().trim().max(50).optional(),
  platser: z.string().trim().max(50).optional(),
  tid: z.string().trim().max(100).optional(),
  behov: z.string().trim().max(5000).optional(),
  website: z.string().max(0).optional(),
});

type ContactRequest = z.infer<typeof contactSchema>;

function formatEmail(data: ContactRequest) {
  const fields: Array<[string, string | undefined]> = [
    ["Namn", data.namn],
    ["Företag/förening", data.foretag],
    ["E-post", data.epost],
    ["Telefon", data.telefon],
    ["Adress", data.adress],
    ["Ort", data.ort],
    ["Typ av anläggning", data.typ],
    ["Ungefärlig storlek", data.storlek],
    ["Antal parkeringsplatser", data.platser],
    ["Önskad tidsperiod", data.tid],
    ["Vilken hjälp behövs", data.behov],
  ];

  return fields
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n");
}

export const sendContactRequest = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };

    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["CONTACT_FROM_EMAIL"];

    if (!apiKey || !from) {
      console.error(
        "Contact form email is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
      );
      throw new Error("Kontaktformuläret är inte konfigurerat ännu.");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["info@garageverket.se"],
        reply_to: data.epost,
        subject: `Ny förfrågan från ${data.namn}`,
        text: formatEmail(data),
      }),
    });

    if (!response.ok) {
      console.error("Resend could not deliver contact request:", await response.text());
      throw new Error("Det gick inte att skicka förfrågan. Försök igen senare.");
    }

    return { ok: true };
  });
