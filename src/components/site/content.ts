export const NAV = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Tjänster" },
  { to: "/for-brf", label: "För BRF" },
  { to: "/sa-fungerar-det", label: "Så fungerar det" },
  { to: "/om-garageverket", label: "Om Garageverket" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const SERVICES = [
  {
    slug: "garagerengoring",
    title: "Garagerengöring",
    text: "Professionell rengöring av garage och parkeringsytor. Vi avlägsnar grus, damm, smuts, löv och annat skräp från golv och svåråtkomliga områden.",
  },
  {
    slug: "maskinsopning",
    title: "Maskinsopning",
    text: "Effektiv maskinell sopning av större garage och parkeringsytor för ett jämnt och noggrant resultat.",
  },
  {
    slug: "vatrengoring",
    title: "Våtrengöring",
    text: "Grundlig rengöring av hårda golvytor när vanlig sopning inte räcker. Metod och utförande anpassas efter underlag och förutsättningar på plats.",
  },
  {
    slug: "malning",
    title: "Målning",
    text: "Uppfräschning och målning av exempelvis väggar, pelare och andra lämpliga ytor i garage och parkeringsanläggningar.",
  },
  {
    slug: "parkeringslinjer",
    title: "Parkeringslinjer",
    text: "Förnyelse av slitna parkeringslinjer, parkeringsrutor och andra markeringar för en tydligare och mer välskött parkeringsmiljö.",
  },
  {
    slug: "pelare-markeringar",
    title: "Pelare & markeringar",
    text: "Uppfräschning och tydlig markering av pelare och andra utsatta områden för bättre synlighet och ett renare helhetsintryck.",
  },
  {
    slug: "parkeringsskyltning",
    title: "Parkeringsskyltning",
    text: "Förnyelse och montering av skyltar och enklare information i parkeringsanläggningar.",
  },
  {
    slug: "garageunderhall",
    title: "Garageunderhåll",
    text: "Vi hjälper till att identifiera och åtgärda sådant som behöver fräschas upp eller underhållas för att hålla garaget i gott skick.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Kontakta oss",
    text: "Berätta kort om ert garage och vad ni behöver hjälp med.",
  },
  {
    n: "02",
    title: "Vi bedömer behovet",
    text: "Vi går igenom garaget och tittar på ytor, skick och vilka åtgärder som kan behövas.",
  },
  {
    n: "03",
    title: "Ni får en offert",
    text: "Vi sammanställer arbetet och lämnar en tydlig offert.",
  },
  {
    n: "04",
    title: "Vi planerar arbetet",
    text: "Vi kommer överens om omfattning, tid och praktiska detaljer.",
  },
  {
    n: "05",
    title: "Vi utför arbetet",
    text: "Arbetet genomförs enligt överenskommelse.",
  },
];

export const FAQ = [
  {
    q: "Vilka typer av garage arbetar ni med?",
    a: "Vi arbetar med bland annat BRF-garage, parkeringsgarage och andra parkeringsanläggningar.",
  },
  {
    q: "Arbetar ni med stora garage?",
    a: "Ja. Vi anpassar arbetssätt och utrustning efter anläggningens storlek och förutsättningar.",
  },
  {
    q: "Kan ni hjälpa till med både rengöring och målning?",
    a: "Ja. Vi erbjuder flera typer av rengörings-, uppfräschnings- och underhållstjänster.",
  },
  {
    q: "Kan ni förnya parkeringslinjer?",
    a: "Ja, parkeringslinjer och andra markeringar kan ingå som en del av uppdraget.",
  },
  {
    q: "Kan ni göra våtrengöring?",
    a: "Ja, beroende på garage, golvtyp, avlopp och övriga förutsättningar.",
  },
  {
    q: "Vad kostar det?",
    a: "Priset beror bland annat på garageytans storlek, skick, omfattning och vilka arbeten som ska utföras. Därför lämnar vi offert efter bedömning.",
  },
  {
    q: "Kan vi få återkommande rengöring?",
    a: "Ja. Vi kan planera återkommande underhåll efter anläggningens behov.",
  },
  {
    q: "Hur fungerar en kostnadsfri bedömning?",
    a: "Vi går igenom anläggningen, identifierar behov och lämnar därefter ett tydligt förslag och en offert.",
  },
];

export const CONTACT = {
  phone: "[TELEFONNUMMER]",
  email: "[E-POST]",
  legalName: "[JURIDISKT FÖRETAGSNAMN]",
  orgNr: "[ORG.NUMMER]",
};