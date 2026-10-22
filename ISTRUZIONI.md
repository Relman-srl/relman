# relman.it — pagina "sito in costruzione"

Pagina singola, pronta da pubblicare su Vercel. Usa già i token, i font e i tre colori del
design system definitivo: quando il sito vero sarà pronto, questa pagina viene sostituita
senza toccare nulla di quello che c'è sotto.

---

## Cosa contiene

```
app/
├── globals.css        design system completo (token, tema chiaro/scuro, componenti)
├── layout.tsx         font, metadata SEO, script anti-lampo del tema
└── page.tsx           la pagina
components/
└── ThemeToggle.tsx    interruttore chiaro/scuro
content/
└── site.ts            TUTTI i testi — non c'è una stringa dentro i componenti
public/
├── logo-relman.png        logo per fondo chiaro
└── logo-relman-dark.png   logo per fondo scuro
```

---

## Installazione

Dalla cartella del repo `Relman-srl/relman`:

```bash
# 1. progetto Next, se non c'è già
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# 2. ultima 16.3 con le patch di sicurezza
npm update next

# 3. copia dentro il repo le cartelle app/, components/, content/, public/
#    di questo pacchetto, sovrascrivendo i file omonimi

# 4. avvia
npm run dev
```

Poi `git push`: Vercel fa il deploy da solo.

---

## Prompt per Claude Code

Se preferisci farlo fare a lui:

> Nel repo ci sono le cartelle `app/`, `components/`, `content/` e `public/` del pacchetto
> relman-coming-soon. Verifica che Next sia alla 16.3.x aggiornata, che l'alias `@/*` sia
> configurato in `tsconfig.json`, che `npm run build` passi pulito e che ESLint non segnali
> nulla. Poi mostrami il punteggio Lighthouse della home.

---

## Cose da sapere

**Il tema.** Il sito segue il tema di sistema finché l'utente non tocca l'interruttore; da quel
momento ricorda la sua scelta in `localStorage`. Lo script in `layout.tsx` applica il tema
salvato prima del primo paint, così non si vede il lampo bianco sul tema scuro.

**I testi.** Stanno tutti in `content/site.ts`. È la regola del `CLAUDE.md` e vale anche qui:
cambiare una frase non deve mai significare aprire un componente.

**L'indicizzazione è attiva** (`robots: index, follow`). La pagina ha contenuto reale — chi è
Relman, cosa fa, come contattarla — quindi tanto vale che il dominio cominci a esistere per
Google fin da ora. Se preferisci tenerla fuori dall'indice fino al lancio, in `layout.tsx`
cambia `index: true` in `index: false`.

**Manca ancora** `sitemap.ts`, `robots.ts`, l'immagine OpenGraph e il favicon: non servono per
una pagina sola, si aggiungono col sito vero.

**L'email.** `info@relman.it` è scritta in chiaro nel sorgente, quindi raccoglibile dagli
spambot. Su una pagina pubblica è inevitabile a meno di offuscarla in JavaScript — cosa che
però la nasconde anche ai motori di ricerca. Dato che la casella è già protetta da Google
Workspace, lasciarla in chiaro è la scelta ragionevole.
