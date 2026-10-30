# Specifiche tecniche — Sito donazioni Cottolengo

Aggiornato il 13 ottobre 2026 · Fulvio Bosco (Noodles Comunicazione)

Versione modificabile: documento "Specifiche tecniche — Sito donazioni Cottolengo" nel progetto Claude SITO COTTOLENGO.

## A cosa serve

Qui ci sono le misure e le regole da rispettare per immagini e testi del sito, così chi prepara i materiali sa cosa consegnare. Oggi serve a Noodles; quando il sito passerà a WordPress, diventerà la guida per gli operatori del Cottolengo.

I valori corrispondono al codice attuale (`css/style.css`, `js/main.js`). Se cambia il codice, va aggiornato anche questo documento.

## Misure di menu, hero e footer

Le misure seguono le linee guida di accessibilità WCAG 2.2 e quelle per il tocco di Apple e Android: testo mai sotto i 16 px, aree cliccabili di almeno 44 px, nessuno scorrimento orizzontale fino a 320 px di larghezza (zoom al 400%).

| Elemento | Desktop (oltre 1020 px) | Tablet (721–1020 px) | Telefono (fino a 720 px) |
| --- | --- | --- | --- |
| Altezza menu | 76 px | 64 px | 64 px |
| Logo | 52 px di altezza | 44 px | 44 px |
| Voci del menu | 17 px, area cliccabile 44 px | 19 px nel pannello, righe da 52 px | come tablet |
| Sottolineatura voce attiva/aperta | 5 px | 2,5 px | 2,5 px |
| Pulsante «Dona ora» nel menu | 48 px (misura S) | 48 px, accanto all'hamburger | nascosto: lo sostituisce la barra fissa in basso (52 px) |
| Hamburger | — | 48 × 48 px | 48 × 48 px |
| Altezza hero | 72% dello schermo, tra 460 e 720 px | 64%, tra 460 e 640 px | schermo meno menu e 56 px, tra 480 e 640 px |
| Titolo hero | 34–58 px | 34–45 px | 30–38 px |
| Testi del footer | 17 px, interlinea 1,7 | 17 px | 17 px, più 76 px in fondo per la barra «Dona ora» |
| Titoli del footer | 19 px grassetto, azzurro | 19 px | 19 px |

**Come valutare le proporzioni.** Le misure sono pensate per lo schermo medio del pubblico (portatile 1366–1920 px, telefono). Per giudicarle si usa una finestra di circa 1440 × 900 px (metà di un monitor 4K, oppure F12 → Ctrl+Shift+M → «Responsive»), più 390 × 844 per il telefono. Su un monitor 4K a schermo intero la hero resta a 720 px e sembra più bassa: è voluto, il tetto evita che il modulo di donazione scenda troppo. Verifica del 13 ottobre: a metà schermo l'altezza è confermata.

**Menu a sei voci** (Chi siamo · Progetti · Come aiutarci · 5×1000 · Lasciti · Aziende). L'intestazione mostra le voci per esteso da 1160 px di larghezza; sotto passa all'hamburger, con "Dona ora" sempre in vista accanto. Le altre colonne della tabella (hero, footer) cambiano a 1020 px.

**Pulsante della hero:** stessa posizione in tutte le slide (in basso a sinistra, allineato al contenuto) e stessa larghezza minima (288 px su desktop, tutta la larghezza sul telefono).

**Pulsanti: tre misure, nessun'altra**

| Misura | Altezza | Testo | Dove |
| --- | --- | --- | --- |
| L | 58 px | 20 px grassetto | azione principale: pulsante di donazione del modulo, pulsante della hero |
| M | 52 px | 17 px grassetto | tutte le altre azioni: «Vedi tutti i progetti», «Esplora progetti», «Scopri e dona», «Scrivi per aderire», barra fissa «Dona ora» su telefono |
| S | 48 px | 17 px grassetto | «Dona ora» nell'intestazione |

L'altezza è fissa e non dipende dall'interlinea; la larghezza si adatta al testo (sul telefono i pulsanti principali sono larghi quanto lo schermo). I campi dei moduli (importi, menu a tendina, «Azzera filtri») restano a 50–52 px e non seguono questa scala.

**Scelte tecniche**

- I 56 px lasciati liberi sotto la hero sul telefono mostrano l'inizio della sezione successiva: fanno capire che la pagina continua.
- I testi sono in rem e i punti di passaggio tra desktop, tablet e telefono in em. Se una persona ingrandisce il carattere del browser, il menu passa all'hamburger invece di andare a capo.
- Sugli schermi bassi (sotto i 500 px di altezza, telefono in orizzontale o zoom molto forte) il menu smette di restare fisso, così non copre il testo.
- Il codice usa un solo valore per l'altezza del menu (`--header-h`): pannello mobile, hero e ancore interne si allineano da soli.

## Hero campagne: immagini

Per ogni campagna serve una foto orizzontale **2400 × 1350 px (16:9)**, minimo 1920 × 1080 px. La stessa foto si usa su desktop, tablet e telefono: il sito la ritaglia in base allo schermo.

| Schermo | Larghezza | Altezza della hero | Quanta parte della foto si vede |
| --- | --- | --- | --- |
| Desktop | oltre 1020 px | 72% dello schermo, tra 460 e 720 px | tutta la larghezza; sopra e sotto si perde fino al 17% |
| Tablet | 721–1020 px | 64% dello schermo, tra 460 e 640 px | la parte centrale, circa il 70% della larghezza |
| Telefono | fino a 720 px | schermo meno menu e 56 px, massimo 640 px (minimo 480) | una striscia verticale di circa un terzo della larghezza |

**Come comporre la foto**

- Il soggetto (volto, mani) sta nella **metà destra**, tra il 55% e l'80% della larghezza: a sinistra c'è il testo.
- Il soggetto deve stare in **una striscia verticale larga un terzo** della foto, perché è quella che si vede sul telefono.
- Niente di importante nel **17% in alto e in basso**: sugli schermi larghi si taglia.
- **Niente testi dentro la foto**: titolo e pulsante li mette il sito. Le grafiche già impaginate seguono le regole della sezione successiva.
- Le foto in bianco e nero vanno bene: la sfumatura blu notte garantisce comunque la lettura del testo bianco.

**Punto focale.** Per ogni foto si indica il punto da tenere sempre in vista, in percentuale (per esempio 70% orizzontale, 35% verticale). Nel codice è lo stile `--fuoco` della slide.

**File da preparare.** JPG in sRGB, qualità circa 80. Due misure: 1920 px (massimo 300 KB) e 960 px (massimo 120 KB). In WordPress la misura piccola la genera il sistema.

**Versione verticale per telefono (facoltativa).** Se il Cottolengo fornisce anche una foto 1080 × 1920 px (9:16), la si può usare solo sui telefoni. Oggi il codice usa un'unica foto: serve una piccola modifica per gestirne due.

## Template per comporre le immagini della hero

Nella cartella `guide/` ci sono quattro file da usare in Photoshop o Illustrator:

| File | A cosa serve |
| --- | --- |
| `template-hero-foto.png` | Schema delle zone per le foto (2400 × 1350 px), con griglia ogni 10% |
| `overlay-hero-foto.png` | Lo stesso schema su fondo trasparente, da mettere come livello sopra la foto |
| `template-hero-grafica.png` | Schema delle zone per le grafiche impaginate (1920 × 1080 px) |
| `overlay-hero-grafica.png` | Lo stesso schema su fondo trasparente |

**Foto: dove mettere gli elementi** (in percentuale della larghezza e dell'altezza della foto, misurate sul sito vero dai monitor da 2560 px ai telefoni da 320 px):

| Zona | Orizzontale | Verticale | Cosa vuol dire |
| --- | --- | --- | --- |
| Soggetto principale (volto, mani) | 55–80% | 20–42% | sempre visibile e mai coperto dal testo, su tutti gli schermi |
| Punto focale consigliato | 70% | 32% | il punto che il sito tiene sempre in vista |
| Striscia visibile sul telefono | 46–80% | tutta l'altezza | il resto della foto sul telefono non si vede |
| Testo su desktop | 3–53% | 35–80% | qui la foto viene scurita e ci va il testo |
| Testo su telefono | dentro la striscia | dal 45% in giù | la parte bassa della striscia è coperta dal testo |
| Tagliato su schermi da 1920 px | — | 0–13% e 80–100% | niente di importante |
| Tagliato su monitor da 2560 px | — | 0–20% e 70–100% | niente di importante |

Se il soggetto sta in un altro punto, si sposta il punto focale (campo `--fuoco` della slide) e le zone si spostano con lui.

**Grafiche impaginate:** testi e logo tra l'8% e il 92% in larghezza e tra il 17% e l'83% in altezza. L'angolo in basso a sinistra (8–34% in larghezza, 74–86% in altezza) resta libero per il pulsante. Sopra i 2200 px di larghezza dello schermo la grafica si vede intera, senza tagli.

## Nomi dei file e testi alternativi (SEO e accessibilità)

**Nome del file:** descrive cosa c'è nell'immagine, con le parole che una persona cercherebbe.
- solo minuscole, parole separate da trattini, niente spazi, accenti o simboli (`×` → `per`, `à` → `a`);
- prima il soggetto o la campagna, poi "cottolengo", poi un dettaglio; in fondo la larghezza in pixel;
- 3–6 parole: niente elenchi di parole chiave ripetute, che i motori di ricerca penalizzano;
- mai nomi generici come `IMG_1234.jpg`, `banner-def.jpg` o `bannertest.jpg`;
- un nome già pubblicato non si cambia senza motivo: i link e l'indicizzazione dell'immagine ripartono da zero.

| Immagine | Nome del file |
| --- | --- |
| 5×1000, mani di tre generazioni | `5-per-mille-cottolengo-mani-generazioni-1920.jpg` |
| Natale, ritratto del fondatore | `natale-cottolengo-san-giuseppe-benedetto-1920.jpg` |
| Dona un pasto | `dona-un-pasto-cottolengo-1600.jpg` |
| Testamento solidale | `testamento-solidale-cottolengo-nonno-nipote-1920.jpg` |

**Testo alternativo (`alt`):** conta più del nome del file, sia per Google sia per chi usa un lettore di schermo.
- descrive in una frase cosa si vede, oppure riporta il testo della grafica (es. 5×1000 con codice fiscale);
- niente "immagine di…" o "foto di…": il lettore di schermo lo dice già;
- massimo 125 caratteri circa;
- `alt=""` vuoto solo per le immagini puramente decorative.

In WordPress il nome del file si decide prima del caricamento; il testo alternativo si scrive nel campo "Testo alternativo" della Libreria media.

## Grafiche già impaginate (oggi non usate)

Il 5×1000 ora usa foto + testo del sito, come le altre slide (consigliato). Se in futuro si volesse usare una grafica con il testo dentro:

Una grafica con testo e logo dentro va consegnata a **1920 × 1080 px (16:9)** su fondo bianco, in **due versioni**:
- **completa**, per tablet e telefono, dove si vede intera;
- **per desktop**, dove riempie la hero ed è ancorata in alto: si vede circa il **65% superiore** dell'altezza (fino a ~80% su schermi più bassi). Tutti i testi importanti vanno nella metà alta; il logo in basso va tolto, altrimenti resta tagliato.

Regole comuni:
- testi tra il 2% e il 98% in larghezza;
- l'angolo in basso a sinistra (5–35% in larghezza, 75–95% in altezza della parte visibile) resta libero per il pulsante "Copia codice fiscale";
- tutto il testo della grafica va riscritto nella descrizione dell'immagine (testo alternativo);
- file JPG, massimo 200 KB a 1920 px.

Sul telefono, sotto la grafica, il sito ripete codice fiscale, una frase e il pulsante: il testo dentro l'immagine lì è troppo piccolo.

## Hero campagne: testi

I testi brevi restano leggibili sul telefono senza coprire la foto.

| Campo | Lunghezza massima | Dove si vede | Esempio |
| --- | --- | --- | --- |
| Occhiello | 25 caratteri, su una riga | ovunque, pillola azzurra | Speciale Natale |
| Titolo | 50 caratteri (2 righe su desktop, 3 su telefono) | ovunque | Un pasto caldo per chi non ha nulla |
| Testo | 120 caratteri | solo desktop e tablet | Oltre 110.000 pasti completi ogni anno… |
| Pulsante | 22 caratteri, senza frecce | ovunque; largo quanto lo schermo sul telefono | Dona un pasto |
| Link del pulsante | modulo di donazione o pagina Myosotis | — | #dona |

Si usano i termini dell'Opera: «ospiti» e non «assistiti», «sostegno a distanza» e non «adozioni».

## Carosello

Ogni campagna resta visibile **6 secondi** e passa alla successiva con una dissolvenza di 0,9 secondi. Il consiglio è di non superare **3–4 campagne**.

- **Navigazione:** pallini a pillola in basso a destra (al centro sul telefono). Quello attivo si allunga e si riempie man mano.
- **Pause automatiche:** quando il mouse è sulla hero o il focus da tastiera è su un suo elemento. Poi riparte da dove si era fermato.
- **Pulsante pausa:** ferma lo scorrimento finché non viene premuto di nuovo.
- **Riduci movimento:** se è attivo sul dispositivo, le slide non scorrono da sole.
- **Telefono:** si sfoglia col dito, orizzontalmente.
- **Tastiera:** il tasto Tab entra solo nei pulsanti della slide visibile; le frecce sinistra e destra cambiano campagna quando il focus è sui pallini.
- **Una sola campagna:** pallini e pausa spariscono.
- **Caricamento:** la prima foto si carica subito, le altre in differita.
- **Slide su fondo chiaro** (classe `cpm-slide--chiara`): pallini e pausa diventano azzurri.

## Colori

Il sito usa l'azzurro istituzionale come colore principale e un accento caldo miele (vivo / scuro) per distinguersi dall'abbinamento azzurro + giallo di UNICEF. Proporzioni: 60% bianco e azzurro chiarissimo, 30% azzurri, massimo 10% caldo.

| Colore | Codice | Dove si usa | Dove non si usa |
| --- | --- | --- | --- |
| Azzurro istituzionale | #009FE3 | menu, titoli, pulsanti di donazione | testi lunghi; fondo di testi piccoli bianchi (contrasto troppo basso) |
| Azzurro scuro | #007AB8 | testo dei pulsanti bianchi, link | — |
| Blu notte | #003B57 | footer, pannelli del menu («Come donare», «Contatti», menu su telefono), testi forti, sfumatura della hero, etichette della hero (testo bianco), **tutti i pulsanti al passaggio del mouse** (testo bianco) | pulsanti a riposo |
| Azzurro chiarissimo | #EDF7FD | fondi delle sezioni chiare | — |
| Miele vivo | #EAB308 | linea accanto ai dati; segmento della ciambella | pulsanti, titoli, fondi ampi, sotto il testo |
| Miele scuro | #A16207 | tutto ciò che contiene testo: fondo delle etichette «In evidenza», «il più scelto», «aiuta di più» (testo bianco, 4,9:1) e numeri d'impatto | pulsanti, titoli, paragrafi |

**Regole**

- Il pulsante «Dona» è sempre azzurro.
- Il miele vivo è per i segni grafici, quello scuro per il testo. Nelle etichette il testo è bianco su miele scuro (4,9:1). Sul miele vivo non si scrive. Regola generale: l'accento non deve avere la stessa luminosità dell'azzurro, altrimenti i due colori accostati "vibrano".
- Un solo elemento caldo per schermata, quando possibile.
- **Focus da tastiera:** anello blu notte con alone bianco; su hero e footer anello bianco.
- **Footer:** fondo blu notte, titoli delle colonne in azzurro (19 px grassetto), testo e link bianchi.

## Altre immagini del sito

Tutte le foto vanno in JPG sRGB a qualità circa 80, con il soggetto al centro.

| Dove | Proporzione mostrata | Misura da consegnare | Peso massimo |
| --- | --- | --- | --- |
| Copertina scheda progetto (archivio e home) | 16:10 | 1600 × 1000 px | 200 KB |
| Immagine principale pagina progetto | 16:9 | 1920 × 1080 px | 300 KB |
| Schede «Come fare del bene» e «Chi aiuti» | 16:10 | 800 × 500 px, soggetto al centro e stretto | 100 KB |

| Cover pagina Chi siamo | 16:10, coperta come le pagine interne | 1920 × 1200 px (`assets/img/chi-siamo/`) | 300 KB |

**Nomi dei file:** minuscolo, parole separate da trattini, niente spazi né accenti (es. `dona-un-pasto-1920.jpg`). Su GitHub Pages maiuscole e minuscole contano.

**Formati:** loghi e icone in SVG; loghi dei partner a colori, in SVG o PNG con fondo trasparente.

## Sezioni a schede: «Ci sono tanti modi per esserci» (ex «Come fare del bene») e «Scegli dove fare la differenza» (ex «Chi aiuti con il tuo gesto»)

Stessa scheda (`.proj-card .proj-card--compatta`) dentro la stessa fila (`.fila-schede`): «Come fare del bene» ha 5 schede, «Chi aiuti» 4 (`.fila-schede--quattro`, circa 285 px l'una).

| | Desktop (da 1200 px) | Tablet | Telefono |
| --- | --- | --- | --- |
| Disposizione | 5 (o 4) schede in fila, circa 224 (o 285) px l'una, 20 px tra le schede | fila che scorre, 2,4 schede in vista | fila che scorre, una scheda all'82% della larghezza |
| Titolo della scheda | 19 px grassetto, azzurro | come desktop | come desktop |
| Testo | 16 px, al massimo 5 righe | come desktop | come desktop |
| Pulsante | a tutta larghezza della scheda, 52 px (misura M) | come desktop | come desktop |

**WordPress, campi di ogni scheda:** titolo (massimo 22), testo (massimo 110), immagine 800 × 500, testo del pulsante (massimo 18), link, nota facoltativa (es. telefono). Ogni scheda ha un'ancora usata dal menu: `#modo-…` per «Come fare del bene», `#aiuti-…` per «Chi aiuti».

**Nomi delle foto di «Chi aiuti»** (in `assets/img/chi-aiuti/`): `cura-cottolengo-mani-assistenza-800.jpg`, `accoglienza-cottolengo-famiglia-800.jpg`, `educazione-scuole-cottolengo-800.jpg`, `missioni-internazionali-cottolengo-bambini-800.jpg`. Provvisorie.

## WordPress: campi della hero

Ogni campagna diventa una voce di un campo ripetitore ACF nella home, oppure un tipo di contenuto «campagna». Questi sono i campi.

| Campo | Tipo | Obbligatorio | Corrisponde a |
| --- | --- | --- | --- |
| Immagine | immagine (2400 × 1350) | sì | `.cpm-slide__img` |
| Punto focale | due numeri in % | no (predefinito 50% 50%) | stile `--fuoco` |
| Tipo di slide | foto con testo / grafica impaginata | sì | classe `cpm-slide--creativita` |
| Fondo azzurro | sì/no | no | classe `cpm-slide--azzurra`: sfumatura più leggera, occhiello e pulsante bianchi (per immagini su fondo azzurro, es. Natale) |
| Fondo bianco | sì/no | no | classe `cpm-slide--luce cpm-slide--chiara`: velatura bianca al posto della sfumatura scura, titolo azzurro e testo blu notte (per foto scontornate su bianco, es. lasciti) |
| Fondo chiaro | sì/no | no | classe `cpm-slide--chiara` |
| Occhiello | testo breve | sì | `.cpm-slide__tag` |
| Titolo | testo | sì | `.cpm-slide__title` |
| Testo | testo | no | `.cpm-slide__sub` |
| Etichetta pulsante | testo breve | sì | `.cpm-slide__cta` |
| Link pulsante | URL | sì, tranne il 5×1000 | `href` del pulsante |
| Codice da copiare | testo | solo 5×1000 | `data-copy` |
| Testo alternativo | testo | sì per le grafiche | `alt` dell'immagine |
| Attiva dal / al | date | no | per far comparire e sparire da sole le campagne stagionali |

L'ordine delle voci è l'ordine delle slide. Con una sola voce attiva il carosello si comporta da hero fissa.

## Versione dei file (cache del browser)

Tutte le pagine caricano CSS e JS con **lo stesso numero di versione** (`?v=179` dal 30/10/2026). A ogni modifica di `css/style.css` o di un file in `js/` si aumenta il numero **in tutte le pagine insieme** (`tools/verifica-sito.py` segnala versioni diverse). In WordPress lo gestirà `wp_enqueue_style/script` con il numero di versione del tema.

## Pagina Chi siamo: documenti da scaricare

Ogni documento ha titolo, una riga di descrizione e un pulsante «Scarica PDF». In WordPress: campo file della Libreria media; nel testo del pulsante conviene indicare anno e peso (es. «Scarica PDF, 2025 — 2,4 MB»). Oggi i link sono segnaposto (`#`).

## Script condivisi

| File | Pagine | Compito |
| --- | --- | --- |
| `js/nav.js` | tutte, per ultimo | hamburger, tendine, descrizioni delle voci, rimbalzo dei pulsanti, copia del codice fiscale. Unico punto per il menu: gli altri script non lo gestiscono |
| `js/importo.js` | home, quattro aree, Family Cottolengo, Lasciti; prima dello script della pagina | validazione dell'importo libero |
| `js/main.js` | home | modulo, contatori, ciambella, caroselli, barra "Dona ora" |
| `js/project-detail.js` | quattro aree, Family Cottolengo | modulo della colonna laterale |
| `js/testamento-solidale.js` | Lasciti | modulo generico della colonna laterale |
| `js/progetti-dati.js`, `js/progetti.js` | Progetti | elenco e filtri |

Ogni script controlla che gli elementi esistano prima di usarli: su una pagina senza un componente non si interrompe e non scrive errori in console.

**Menu.** La pagina corrente è indicata da `aria-current="page"` sulla sua voce (scritto nell'HTML; in WordPress lo stampa il tema). Le voci di primo livello con pannello si sottolineano se contengono la pagina corrente. La classe `.is-puntata` è solo lo stato di hover/focus che collega la voce alla descrizione nella colonna di destra. Esc chiude prima la tendina aperta, poi il menu mobile, e riporta il focus sul pulsante.

## Importo libero dei moduli

- Valido: **intero da 1 a 100.000 €** (coincide con `min`, `max` e passo dei campi `type="number"`). Accettati anche "75,00" / "75.00".
- Non valido: negativi, zero, decimali (75,50), notazione esponenziale (1e3), oltre 100.000, testo che il browser non riconosce come numero.
- Con un valore non valido: messaggio sotto il campo (collegato con `aria-describedby`), `aria-invalid="true"`, pulsante "Dona" con `aria-disabled="true"` e clic/invio bloccati. Nessun URL con l'importo: il link torna a `https://dona.cottolengo.org/` senza parametri.
- Parametri verso Myosotis **invariati**: `importo`, `ricorrenza`, `causale` (moduli delle aree: invio GET con `causale`, `importo`, `project-amount`). Myosotis oggi non li legge (vedi decisione 22): restano pronti per quando NP Solutions li supporterà.

## Carosello delle campagne (hero)

La sezione testimonianze è stata tolta dalla home il 14/10/2026 (decisione 37).


- Pallini = `role="tab"` con `aria-controls` verso l'id della slide; slide = `role="tabpanel"` con `aria-roledescription="slide"`. Gli id mancanti sono creati dal JS (`cpm-slide-N`, `quote-slide-N`); quelli già presenti, come `#cinquepermille`, restano.
- Slide attiva: `aria-hidden="false"`, non `inert`. Le altre: `aria-hidden="true"` + `inert` (il Tab non entra nei loro link).
- Tastiera sui pallini: frecce, Home, Fine; un solo pallino nel percorso del Tab.
- Pulsante pausa: `aria-pressed` e icona coerenti (pausa mentre scorre, play quando è fermo).
- "Riduci movimento" attivo: il carosello non parte da solo; il pulsante parte premuto, con icona play, e chi vuole lo avvia.

## Modulo Myosotis incorporato (dona-in-memoria.html) — PROVVISORIO

Il ritaglio dell'header e del footer Myosotis è isolato nella classe `.modulo-incorporato__cornice--myosotis` (fondo di `css/style.css`). **Non è dinamico**: margine superiore negativo (`calc(-178px - 31.7%)`) e altezze fisse per fascia di larghezza, misurate il 13/10/2026. Se NP Solutions cambia la pagina il taglio si sposta. Il link "Aprilo in una nuova pagina" resta sempre visibile come alternativa.

Verifica del 13/10/2026: altezza, margine e larghezza della cornice identici alla versione precedente su 241 larghezze (300–1500 px, passo 5); modulo caricato a 320, 360, 375, 390, 768, 1024 e 1440 px.

**Serve da NP Solutions** per togliere la soluzione provvisoria: una versione del modulo **senza header e footer** pensata per l'incorporamento (con uno script che comunichi l'altezza alla pagina, es. `postMessage`), oppure un **widget/API** ufficiale.

## Pulsanti di donazione verso Myosotis (dal 20/10/2026, decisione 56)

Ogni riquadro di donazione è `div.dona-card.dona-link#dona` con testo (`.dona-link__testo`) e un solo link `a.dona-link__btn` (alto 64 px, testo 21 px), `target="_blank"` e `rel="noopener"`. Nessun modulo né importo sul nostro sito. L'attributo `data-modulo` indica quale modulo dedicato Myosotis va collegato. Indirizzo provvisorio: `https://dona.cottolengo.org/`. Dona in memoria: `/in-memoria/`. In WordPress i campi della pagina sono: titolo, testo, testo del pulsante e indirizzo del modulo.

## Pagina Dona (dona.html, dal 21/10/2026, decisioni 60 e 61) — PROTOTIPO

Pagina unica con tre sezioni numerate (`.dona-passo` e `.dona-passo__num`, cerchio blu notte da 34 px). Stile "da banca", con le classi `.dona-*` in fondo a `css/style.css`.

**Colori.**

- Fondo `#F4F7F9`.
- Bordi `#C9D4DB` (sottile) e `#8FA3AE` (campi).
- Errori `#B42318`.

**Forme e misure.**

- Raggio: 6 px per campi e pulsanti, 8–10 px per le schede.
- Pubblico anziano, quindi misure grandi:
  - etichette 17 px;
  - campi alti 54 px, testo 18 px;
  - scelte a pulsante 54 px, importi 60 px;
  - metodi di pagamento 60 px;
  - pulsante "Dona" 60 px, testo 19 px.
- Riepilogo laterale largo 320 px, fisso mentre si scorre. Sotto gli 896 px va sopra il modulo, compatto.

**Script `js/dona-pagina.js`.**

- Gestisce il riepilogo e il passaggio da privato ad azienda. Nessun calcolo della detrazione (decisione 64).
- Controlla i campi al pulsante "Dona" e mostra l'elenco degli errori in cima al modulo.
- Il modulo non invia nulla.

## SEO tecnico

Ogni pagina ha `<title>`, meta description, Open Graph (`og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`) e Twitter Card (`summary_large_image`, titolo, descrizione), con gli stessi testi di title e description: nessun testo visibile cambiato.

**Mancano di proposito**, perché richiedono URL assoluti e il dominio definitivo non è confermato (sottodominio `donazioni.cottolengo.org` o nuovo dominio):
- `<link rel="canonical">` e `og:url`;
- `og:image` / `twitter:image`: un'immagine 1200 × 630 px per pagina (o una comune), con URL assoluto.
Da aggiungere appena il dominio è deciso; in WordPress li genera il plugin SEO (Yoast o Rank Math).

## Header e footer: verifica automatica

Header e footer sono copiati in ogni pagina (GitHub Pages serve file statici: niente include né build). Per tenerli allineati: `python3 tools/verifica-sito.py`. Controlla che header e footer coincidano in tutte le pagine (ammesse solo le differenze volute: `aria-current`, link "#…" della home, destinazione di "Dona ora"), ID duplicati, riferimenti `aria-*`/`for`, link e frammenti interni, file locali e versione `?v=` unica. In WordPress diventeranno template unici (`header.php`, `footer.php`).

## Comparsa durante lo scorrimento (scroll reveal, tutte le pagine)

`initRivela` in `js/nav.js` + regole `.rivela-attiva .rivela` in fondo a `css/style.css`. Elementi: `.section-head`, `.numbers__item`, `.fila-schede__item`, `.legend-row`, `.documento`, `.recapito`, `.cpm-passo`, contenuto di `.cpm-codice`, `.chi-colonna`, `.chi-affiancato`, `.chi-citazione`, `.fascia-invito`, `.partners__title`, `.quote .container`, figli di `.project-article-content`, schede di `.proj-grid`, `.modulo-incorporato__nota`. Esclusi tutti gli elementi dentro header, footer, hero, copertina, colonna laterale, moduli e barra "Dona ora". Movimento: 24 px, 0,7 s, curva `--ease-uscita`, ritardo 90 ms per posizione nella fila (massimo 4 passi). L'elemento si attiva quando il bordo superiore supera il 92% dell'altezza dello schermo; quelli già in vista all'apertura non si animano. Finita la comparsa le classi vengono tolte. È disattivata con `prefers-reduced-motion: reduce`; in stampa tutto è visibile. In WordPress resta lo stesso script nel tema.

## Colori e leggibilità (WCAG AA)

| Uso | Colore | Contrasto col bianco |
| --- | --- | --- |
| Azzurro web: header, fasce, pulsanti (scritte 19 px grassetto), titoli | `--azzurro` #0097D8 | 3,3:1 (testo grande) |
| Testo azzurro piccolo: link, occhielli; fine dei gradienti | `--azzurro-scuro` #0075B0 | 5,0:1 |
| Azzurro del logo: solo riferimento (stampa, marchio) | `--azzurro-logo` #009FE3 | 3,0:1 |
| Informazioni: footer, numeri, contatti, pannelli del menu | `--blu-notte` #003B57 | 11,9:1 |

Regola: testo bianco sull'azzurro solo se è "testo grande" (almeno 24 px, oppure almeno 19 px in grassetto). Unica eccezione: le voci del menu (17 px).
Testo minimo 14 px (`--t-nano`). Lunghezza delle righe sotto i 75 caratteri. Il testo sopra le foto della hero ha un velo che lo porta ad almeno 4,5:1.



## Immagini: formati e pesi (dal 15/10/2026, decisione 54)

- **Copertine delle pagine:** `<picture>` con WebP (960 px e originale) e JPG di riserva (960 px e originale), `sizes="100vw"`, `width`/`height` dell'originale.
- **Schede delle quattro aree:** JPG 4:3, 800 × 600 e 1200 × 900, con `srcset`.
- **Schede "Come fare del bene":** JPG 16:10, 800 × 500.
- **Bambina in home:** WebP 900 e 1472 px, PNG di riserva.
- **Pennello del grafico:** PNG 800 px a 256 colori (39 KB).
- **Regola CSS:** `picture { display: contents }` e `picture > source { display: none }`: il contenitore `<picture>` non deve cambiare l'impaginazione.
- **Ogni `<img>` ha `width` e `height`,** per evitare spostamenti durante il caricamento (CLS).

## Da fare al lancio sul dominio definitivo

1. Togliere `<meta name="robots" content="noindex, nofollow">` da tutte le pagine.
2. Aggiungere canonical, og:url e og:image (immagine 1200 × 630) con URL assoluti.
3. Aggiungere `"url"` e `"logo"` (URL assoluti) ai dati strutturati in home.
4. Creare `robots.txt` e `sitemap.xml` nella radice del dominio.
5. In `404.html`, aggiornare (o togliere, in WordPress) `<base href="/Cottolengo-sito_donazioni/">`.
6. Attivare la misurazione concordata (vedi il piano di misurazione nel progetto) e il banner dei cookie, se serve.
