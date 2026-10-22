/**
 * Tutti i testi del sito stanno qui, mai dentro i componenti.
 * Regola fissata in CLAUDE.md: aggiungere una lingua o cambiare una frase
 * deve essere un'operazione su questo file, non sul markup.
 */

export const site = {
  nome: "Relman",
  ragioneSociale: "Relman SRL",
  sottotitolo: "Relation Management Italia",
  dominio: "relman.it",
  url: "https://relman.it",
  email: "info@relman.it",
} as const;

export const comingSoon = {
  eyebrow: "Relation Management Italia",

  // L'<em> colora l'ultima parte col blu del logo.
  titoloPrima: "La ricchezza più grande è ",
  titoloEvidenziato: "quella che hai già",
  titoloDopo: ".",

  descrizione:
    "Riattiviamo il database commerciale che la tua azienda ha già costruito, e ne creiamo uno nuovo dove serve. Outreach B2B per PMI industriali e per le agenzie che ci lavorano in white label.",

  cantiere: "Sito in costruzione",

  contattoPrima: "Nel frattempo, per qualsiasi informazione scrivi a ",
  contattoDopo: ".",
} as const;

export const servizi = [
  {
    sigla: "LRM",
    classe: "lrm",
    nome: "Lead Relation Management",
    descrizione: "Outreach a freddo su liste nuove, costruite sul tuo profilo cliente ideale.",
  },
  {
    sigla: "DRM",
    classe: "drm",
    nome: "Database Relation Management",
    descrizione: "Riattivazione dei contatti che hai già: ex clienti, preventivi, fiere.",
  },
  {
    sigla: "ERM",
    classe: "erm",
    nome: "Ecosystem Relation Management",
    descrizione: "CRM, automazioni e outreach collegati in un sistema solo.",
  },
] as const;

export const legale = {
  righe: [
    "RELMAN SRL · STRADA SS. FORTUNATO E LAZZARO 151",
    "36061 BASSANO DEL GRAPPA (VI)",
    "P.IVA E C.F. 04655710244 · REA VI-420213",
  ],
} as const;
