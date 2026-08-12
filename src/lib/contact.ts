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

export async function sendContactRequest(input: ContactRequest) {
  const data = contactSchema.parse(input);
  const response = await fetch("/api/contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  const result = (await response.json().catch(() => null)) as { message?: string } | null;
  if (!response.ok) {
    throw new Error(result?.message ?? "Det gick inte att skicka förfrågan. Försök igen senare.");
  }
}
