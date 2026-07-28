# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Donatore primario — privato italiano, prevalentemente over 50.** È la base cottolenghina storica: conosce l'Opera, dona per fedeltà, usa bonifico, C/C postale e 5×1000, e legge da desktop o da telefono con caratteri grandi. Decide in pochi minuti, spesso dopo una lettera o una campagna stagionale.

**Secondo pubblico da conquistare — nuovi donatori più giovani.** Il nuovo sito deve risultare moderno e appetibile anche per chi arriva da social e campagne e decide in pochi secondi da mobile. Nessuno dei due pubblici viene sacrificato: la leggibilità pensata per l'over 50 non è negoziabile, ma non può tradursi in un linguaggio visivo datato.

**Sviluppatore WordPress.** Riceve questa cartella e la traduce in tema: markup, classi e commenti di mappatura CPT/ACF sono parte del consegnabile.

**Moderatori dell'Ufficio Progetti e Raccolta Fondi.** Inseriranno i progetti da backend WordPress con liste chiuse di termini; non toccano codice.

## Product Purpose

Riprogettazione del sito di donazioni della **Piccola Casa della Divina Provvidenza — Cottolengo** (oggi `donazioni.cottolengo.org`, WordPress su tema Collision).

L'obiettivo dichiarato dal cliente nella sintesi delle criticità: **il sito attuale presenta troppe possibilità di donazione contemporaneamente**. Il nuovo sito deve semplificare il percorso dell'utente, ridurre le scelte iniziali, mettere in evidenza pochi progetti prioritari e rendere il percorso verso la donazione il più diretto possibile.

Successo = una donazione completata sulla piattaforma esterna (`dona.cottolengo.org` / Myosotis) e un donatore che ha capito chi aiuta e dove va il suo denaro.

## Positioning

Il Cottolengo non raccoglie fondi per progetti altrove: **gli ospiti vivono nelle case dell'Opera**, dal 1832, a Torino e in 4 continenti. Accoglie chi nessun altro accoglie, senza selezionare. La prova non è una promessa ma un luogo: mense di Torino e Pisa, hospice, ospedale, ambulatorio, 11 Scuole Cottolengo, case per anziani e per persone con disabilità grave, missioni in Africa, Asia e America.

La leva non è l'urgenza dell'emergenza ma la **continuità quotidiana della cura**: non "salva una vita adesso", ma "questa porta resta aperta ogni giorno, anche domani".

## Operating Context

- **Consegnabile:** cartella statica HTML/CSS/JS (`index.html`, `progetti.html`) da consegnare allo sviluppatore WordPress come base del tema. Non è il sito che va online così com'è, e non è un mockup usa-e-getta: struttura e nomi delle classi devono reggere la traduzione in template.
- **Nessun build front-end.** Unico tool: `tools/build-mappa.py`, che genera `assets/svg/mappadot.web.svg` dal sorgente Illustrator `assets/svg/mappadot.svg`. Il file generato non si modifica a mano.
- **La verifica richiede un server HTTP locale:** con `file://` la mappa non viene iniettata (il fetch dell'SVG fallisce) e si vede solo uno snapshot statico.
- **Modello dati dei progetti (documentato in `Struttura-DB-Progetti-WordPress.md`):** un solo CPT `progetti`, due assi di accesso indipendenti — `area_geografica` (gerarchica, multi-valore) e `chi_aiuti` (piatta, multi-valore), più `annata` opzionale. Campi ACF: copertina, galleria, microcopy, descrizione, date, link Myosotis, etichetta pulsante, flag **In evidenza**. Filtri passati in query string (`?area=`, `?chi_aiuti=`, `?anno=`, `?q=`); combinati via FacetWP o `WP_Query`. Sulle card si mostra sempre la pillola dell'**asse opposto** a quello con cui si sta navigando. Colore delle pillole gestito come campo sul termine, non cablato nel tema.
- **La donazione è esterna.** Il sito porta a `dona.cottolengo.org`; "Dona in memoria" e i biglietti solidali vivono già solo su quel dominio.
- **Alberatura del sito originale** validata sulla sitemap reale in `ALBERATURA-SITO-ORIGINALE.md`. Sul sito attuale **non esistono** una pagina FAQ né una privacy policy (solo cookie policy).

## Capabilities and Constraints

- Italiano, lingua singola.
- Due pagine oggi: home (`index.html`) e archivio unico filtrabile (`progetti.html`). Le sezioni della home non portano a pagine diverse: puntano all'archivio con il filtro già applicato.
- **Richieste vincolanti del cliente** (sintesi criticità, luglio 2026):
  - pochi progetti in evidenza, sempre accompagnati da un pulsante "Vedi tutti i progetti";
  - due assi di navigazione: geografia **e** ambito di intervento (anziani fragili, persone con disabilità, educazione e famiglie, cure sanitarie) — *già integrato*;
  - **"Sostegno a distanza" sostituisce "Adozioni"** in tutte le occorrenze — *già fatto*;
  - il claim *Fare bene fa bene al cuore* va collocato più in alto — *già fatto*;
  - la sezione Testimonianze resta nella parte bassa;
  - va previsto uno spazio, eventualmente scorrevole, per i loghi delle Fondazioni;
  - il footer porta i dati bancari della Fondazione Cottolengo Solidale ETS;
  - il menu principale va ripulito: fuori dalla tendina *Dona un pasto*, *Dona in memoria*, *Testamento solidale* come voci di primo livello; le diciture da affiancare alla foto sono Sostegno a distanza / Testamento solidale / Dona in memoria / 5×1000 / Volontariato;
  - progetti da rimuovere: **Africa** → *Diritto alla salute*, *Developing Kisarawe*, *CottAction*; **Asia** → *Un piccolo dispensario*; **Italia** → *BANDO INDID+*. Gli altri restano — *fatto*;
  - priorità Italia, nell'ordine: 1 Adotta un ospite / Family Cottolengo · 2 Emergenza educativa nelle Scuole · 3 Dona un pasto · 4 Ambulatorio Granetti · poi Hospice, Un volto nuovo, Dona un indumento, Una casa per la vita, Ospedale Cottolengo — *fatto: i primi quattro sono i progetti in evidenza*;
  - il form del sostegno a distanza va sostituito dal contatto diretto: `adozioni@cottolengo.org`, telefono 348 8989163 (Sr Mary Soshiyat).
- **Terminologia dell'Opera:** "Piccola Casa della Divina Provvidenza", "l'Opera", "gli **ospiti**" (mai "assistiti" o "beneficiari"), "cottolenghino", "sostegno a distanza".
- **Asse geografico — chiarito dal cliente.** Le aree sono **Europa · Africa · Asia · America**. Il "no Italia" del PDF significa che sulla mappa manca l'highlight sull'**Europa intera**: oggi si accende la sola Italia. Al click, il filtro dell'archivio deve selezionare le nazioni europee presenti — per ora solo l'Italia. In tassonomia: `europa` è il termine padre, `italia` il figlio. **È corretto che esistano progetti solo italiani:** restano taggati `italia` e risalgono sotto `europa`. Il livello `Europa` della mappa è un asset che produce il cliente in Illustrator (i pallini europei stanno oggi nel livello `Disattivi`).
- **Decisioni aperte — da non inventare:**
  - la lista di priorità Italia del cliente elenca **nove** voci, distinguendo *Un volto nuovo* (6) da *Ospedale Cottolengo* (9); nell'archivio esiste un solo progetto, *Un volto nuovo per l'Ospedale Cottolengo*. Da chiarire se sono due progetti distinti o lo stesso citato due volte;
  - voci del blocco "Link utili" nel footer (il cliente le ha lasciate esplicitamente da definire);
  - se le immagini dei progetti restano remote su `donazioni.cottolengo.org` o vengono migrate in locale;
  - galleria immagini della scheda progetto: ACF Pro a pagamento o alternativa gratuita;
  - se il filtro per anno entra davvero, e se via tassonomia `annata` o facet sulla data;
  - isolette della mappa e ipotesi di mappa doppia.

## Brand Commitments

- Nome e marchio Cottolengo: `assets/svg/Logo_cot_color.svg`, `assets/svg/Logo_cot_white.svg`, `assets/img/logo-bianco.png`, cuore PCDP `assets/img/Logo-CUORE-PCDP-e1705392560644.png`.
- Claim **"Fare bene fa bene al cuore"** — vincolante, e da posizionare in alto nella pagina.
- Firma istituzionale: *Piccola Casa della Divina Provvidenza. Accanto agli ultimi, dal 1832.*
- Palette incumbent: azzurro brand `#009FE3`, blu `#00658F` / `#003B57`, derivata dal logo. **Regola di sistema:** `#009FE3` è il colore del logo e vive su superfici grafiche (mappa, grafico, accenti); qualunque superficie che porta testo bianco usa `#007AB8` o `#00618F`, perché il bianco su `#009FE3` dà 3,0:1 e non è leggibile.
- **Caratteri:** Poppins nei titoli e sui comandi, Open Sans nel testo. Entrambi liberi (SIL OFL / Apache), self-hosted in `assets/fonts/` (4 file woff2, 68 KB). Nelle campagne l'ente usa Helvetica, nei materiali Gotham (a pagamento, non licenziabile per il web); il sito principale `cottolengo.org` usa Montserrat + Open Sans. Poppins è la scelta del cliente per i titoli.
- Le icone dei destinatari nascono dal linguaggio del logo (livelli Illustrator nominati: `Persone`, `Disabilità`, `Cuore`, `Anziani_soli`, `Casa`) e sono oggi placeholder in attesa del set custom del cliente.
- Gli SVG arrivano da Illustrator con **livelli nominati**, usati come `id` nel codice: è così che la mappa decide quali regioni si accendono (`js/mappa-regioni.js`).
- Tono di voce: concreto e caldo, mai pietistico o allarmistico.

## Evidence on Hand

**Dati reali, già verificati e da preservare**

- Fondazione Cottolengo Solidale ETS — IBAN `IT42 W030 4801 00000000 0097137`, Cod. Fiscale `97905980013`, C/C postale `1072743170`.
- Codice fiscale per il 5×1000: **`97905980013`** — lo stesso della Fondazione Cottolengo Solidale ETS. Corretto dal cliente il 2026-07-28: il prototipo riportava `97656390016`, che non è il codice da usare. Lo conferma la creatività ufficiale della campagna (`assets/img/COT_Adv 5x1000_200x140.jpg`), che stampa `97905980013`.
- Ufficio Progetti e Raccolta Fondi — Via Cottolengo 14, 10152 Torino · 011 522 5658 · `infodonazioni@cottolengo.org`.
- Sostegno a distanza — `adozioni@cottolengo.org` · 348 8989163 (Sr Mary Soshiyat).
- Copy e immagini dei progetti ripresi dalle schede reali di `donazioni.cottolengo.org` (`js/progetti.js`).
- Fatti dell'Opera: fondazione 1832 a Torino · presenza in 4 continenti · 11 Scuole Cottolengo · mense di Torino e Pisa · hospice, ospedale e Ambulatorio Granetti.

**Placeholder marcati — non presentarli mai come reali**

- Le 4 testimonianze del carosello (già etichettate *testo placeholder*).
- I loghi partner del marquee.
- La ripartizione 84 / 10 / 6 di "Dove va la tua donazione", in attesa del bilancio sociale.
- Le statistiche delle schede "Chi aiuti" (2.000 anziani, 1.000 persone con disabilità, 500 bambini).
- Le voci "Link utili" del footer (lorem ipsum).
- **Da allineare con l'ente:** il numero di pasti annui, indicato come 97.000 in home e 110.000 in `js/progetti.js`.

**Assenti**

Bilancio sociale in PDF, privacy policy, pagina FAQ: non esistono sul sito originale e non vanno inventati.

## Product Principles

1. **Una sola azione dominante.** Ogni schermata converge sulla donazione; tutto il resto è supporto a quella decisione.
2. **Poche scelte all'ingresso, profondità su richiesta.** Pochi progetti in evidenza e un "Vedi tutti i progetti" per chi vuole approfondire: mai il catalogo intero come primo impatto.
3. **Un solo archivio, due chiavi d'accesso.** Nessun progetto viene mai duplicato per stare in due sezioni; le tassonomie esistono esattamente per questo.
4. **Leggibile per un over 50 senza sembrare un sito per anziani.** La dimensione del testo e le aree di tocco non si riducono per ragioni estetiche; la modernità si ottiene altrove.
5. **Nessun numero, volto o testimonianza inventata.** I dati non confermati restano placeholder dichiarati, anche a costo di una sezione meno brillante.
6. **Il codice è un consegnabile, non uno scarto.** Struttura, classi e commenti devono reggere la traduzione in template WordPress da parte di un'altra persona.

## Accessibility & Inclusion

Nessun obbligo formale di conformità (né WCAG dichiarato né Legge Stanca / AgID). La **leggibilità alta è però un requisito di prodotto**, dato il pubblico: corpo testo 19px, contrasti forti, aree di tocco ≥52px, focus visibile, skip link. Non promettere conformità a uno standard in nessun contenuto pubblico finché l'ente non la richiede.
