@AGENTS.md

# relman.it — istruzioni per Claude Code

La prima riga importa `AGENTS.md`, cioè le regole di Next.js che `next dev` scrive e aggiorna da solo. Non toglierla: di default, se c'è un CLAUDE.md, Claude Code non legge AGENTS.md per conto suo.

## Web design: metodo di lavoro

Vale per ogni pagina, sezione o componente visivo del sito. Queste regole del progetto prevalgono sempre:
- token e temi chiaro e scuro stanno in `app/globals.css`: non cambiarne i valori senza l'ok di Paolo;
- i font (Poppins, Inter, JetBrains Mono) si caricano in `app/layout.tsx`;
- tutti i testi stanno in `content/site.ts`, mai dentro i componenti;
- nessun numero inventato: o è un dato reale Relman o un benchmark con fonte e data; quello che manca si marca `[DA CONFERMARE]`.

### Prima del codice
Presenta a Paolo, e aspetta il suo ok:
1. la direzione visuale in poche righe;
2. la struttura delle sezioni;
3. i token che userai: quelli di `app/globals.css`; uno nuovo solo se manca un equivalente, e lo dichiari;
4. cosa resta coerente in tutta la pagina.

### Fonte di verità
Questo file e `app/globals.css` → file Figma, se esiste (Figma MCP: griglia, spaziature, tipografia, colori, componenti, breakpoint) → direzione approvata. I siti di riferimento servono a capire i principi (con `/taste`, se installato): mai copiare logo, testi, immagini o identità. Se `/taste` propone di scrivere in questo file, non farlo senza l'ok di Paolo.

### Build
Una sezione per volta: struttura → hero → sezione successiva → responsive → movimento → QA. Dopo la prima build non rigenerare la pagina: correzioni mirate, stessi testi e stessa struttura.

### Da evitare
Sono i segnali di una pagina generata. Valgono salvo scelta diversa approvata da Paolo:
- glow messi a caso;
- gradienti senza una ragione;
- card dappertutto: la gerarchia si costruisce con tipografia e spaziatura;
- icone solo decorative;
- testo centrato in eccesso;
- animazioni che girano di continuo: il movimento serve dove comunica uno stato o una direzione, e si ferma con `prefers-reduced-motion: reduce`.

### QA nel browser
Il lavoro non è finito quando la build passa: è finito quando la pagina funziona e sembra giusta nel browser. Dopo ogni fase apri la pagina (Playwright MCP, se installato) a 1440, 1024, 768 e 390 px, in tema chiaro e scuro, e controlla: overflow orizzontale, gerarchia visiva, spaziature incoerenti, a capo brutti, CTA e form, hover e focus, errori in console, sovrapposizioni. Screenshot prima e dopo ogni correzione importante. Senza browser dichiara «QA DA FARE»: non dire che la pagina è pronta.

Prima di chiedere il merge, `grep -r "DA CONFERMARE" content/` non deve trovare nulla.

### Rifinitura
Gerarchia, movimento, spaziature, dettagli. Se installati: `/impeccable audit`, poi correggi solo i problemi ad alta priorità; `/emil-design-eng` sempre con una richiesta precisa. Se uno strumento manca, dillo: non installare nulla senza l'ok di Paolo.

### Permessi
Lavora su un ramo dedicato. Mai push o merge su `main` e mai deploy senza l'ok esplicito di Paolo: un push su `main` pubblica il sito, perché Vercel fa il deploy da solo.

Origine: guida «Claude Code per siti web che non sembrano generati dall'AI» (simonestavolo.ai), adattata a questo repo il 26/11/2026.
