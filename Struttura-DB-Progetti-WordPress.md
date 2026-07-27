# Struttura del database Progetti — WordPress

> **Documentazione tecnica · Fase di sviluppo WordPress**
>
> Un unico archivio di progetti, due assi di navigazione indipendenti. Questo documento definisce il modello dati da implementare in WordPress e l'esperienza di inserimento per il cliente.

**Progetto:** Sito Cottolengo · **Ambito:** CPT · Tassonomie · ACF · **Versione:** bozza condivisa al team

---

## 01 · Il principio: un DB, due chiavi d'accesso

Tutti i progetti vivono in **un solo archivio**. Non si duplicano mai le schede. La navigazione avviene attraverso **due sistemi di classificazione separati** che funzionano come chiavi d'accesso allo stesso dato.

| Asse A · Chi aiuti | ← ARCHIVIO **PROGETTI** → | Asse B · Geografia |
|---|:---:|---|
| **Chi viene aiutato** — sezione "Chi aiuti con il tuo gesto". Es. Anziani soli, Minori, Malati. | *unico DB* | **Dove è attivo** — navigazione da mappa. Es. Africa, Asia, America, Italia. |

*Lo stesso progetto è raggiungibile da entrambi i lati, senza essere duplicato.*

---

## 02 · Gli oggetti WordPress

Tre elementi nativi di WordPress compongono tutta la struttura.

### a. Custom Post Type — `progetti`

È il database vero e proprio. Ogni progetto è un record. Sostituisce l'uso improprio di pagine o articoli.

### b. Due tassonomie personalizzate

Sono le due chiavi d'accesso. **Non tag liberi**, ma liste controllate: URL puliti, pagine di archivio automatiche, nessun doppione.

| Tassonomia | Tipo | Termini (esempi) |
|---|---|---|
| `area_geografica` | Gerarchica (multi-valore) | Africa › Kenya · Asia › India · America › Ecuador · Italia › Piemonte |
| `chi_aiuti` | Piatta (multi-valore) | Anziani fragili · Persone con disabilità · Educazione e famiglie · Cure sanitarie |
| `annata` | Piatta (mono/multi-valore) · opz. | 2022 · 2023 · 2024 · 2025 |

Le prime due sono **multi-valore**: un progetto può essere attivo in più aree e rivolgersi a più categorie di persone. La terza (`annata`) serve al **filtro per anno** nella pagina Progetti (vedi §09) — in alternativa si può ricavare l'anno dal campo *Data inizio* con un facet data di FacetWP, evitando una tassonomia dedicata.

> I termini di `chi_aiuti` coincidono con le schede della sezione "Chi aiuti con il tuo gesto"; quelli di `area_geografica` con le aree della mappa. Così i link della home applicano il filtro corrispondente in pagina Progetti (`?chi_aiuti=…`, `?area=…`).

### c. Campi personalizzati (ACF)

I dati editoriali della scheda, gestiti con Advanced Custom Fields.

| Campo | Tipo | Note |
|---|---|---|
| Titolo (Nome progetto) | nativo | Titolo del post |
| Immagine di copertina | immagine in evidenza | Featured image |
| Galleria immagini | galleria ACF | Più immagini della scheda singola → richiede ACF **Pro** (vedi §08) |
| Microcopy (copy breve) | testo ACF | Sottotitolo breve sulla card |
| Descrizione | editor / WYSIWYG | Contenuto della scheda singola |
| Data inizio | date picker ACF | Inizio del progetto |
| Data fine | date picker ACF · opz. | Vuota = progetto ancora attivo/continuativo |
| Link "Dona" Myosotis | URL ACF | Destinazione del tasto donazione |
| Etichetta pulsante | testo ACF · opz. | Default "Dona ora" |
| **In evidenza** | True/False ACF | Flag per i moderatori: se attivo il progetto compare tra i "Progetti in evidenza" in cima alla pagina |

---

## 03 · Come si comportano le due sezioni

Le due pagine di navigazione sono semplicemente **due query diverse sullo stesso archivio**.

### Percorso A — dalla sezione (es. "Anziani soli")

Mostra tutti i progetti per anziani nel mondo, **ignorando la geografia**.

```
filtro: chi_aiuti = anziani-soli
```

Sulla card compare la pillola dell'asse opposto (geografia): `Kenya` · `India`

### Percorso B — dalla mappa (es. "Asia")

Mostra tutti i progetti asiatici, **a prescindere dal target**.

```
filtro: area_geografica = asia
```

Sulla card compare la pillola dell'asse opposto (chi aiuti): `Anziani soli` · `Minori`

> **REGOLA PER LE CARD**
> Su ogni card si mostra sempre la pillola dell'**asse opposto** a quello con cui si sta navigando, così l'informazione è complementare al filtro attivo e mai ridondante.

Filtri semplici → archivi nativi di tassonomia. Filtri combinati (es. Minori + Africa) e AJAX → **FacetWP** o `WP_Query` custom.

---

## 04 · Le pillole colorate

Il colore di ogni pillola è **gestito dal cliente**, non cablato nel codice. Con ACF si aggiunge un **campo "colore" al singolo termine** della tassonomia (es. Asia = arancione, Africa = verde). Il template della card legge il termine e ne stampa nome + colore.

Se un progetto ha più termini, la card mostra **più pillole**, tutte cliccabili verso il rispettivo archivio.

---

## 05 · Inserimento progetto (lato cliente)

Creando un nuovo progetto, dopo i dati base il cliente trova nella colonna laterale i due box di classificazione — le stesse interfacce native di categorie/tag, con le nostre etichette.

| Box | Interfaccia | Azione |
|---|---|---|
| Area geografica | elenco gerarchico con caselle multiple | Flagga una o più aree dove il progetto è attivo |
| Chi aiuti | elenco di checkbox | Flagga una o più categorie di persone aiutate |

> **ACCORGIMENTO IMPORTANTE**
> Forzare l'input tramite **liste chiuse**: l'editor non deve poter creare termini nuovi al volo dall'editing (evita doppioni tipo "Asia" / "asia" / "Continente asiatico"). I termini si gestiscono solo da una schermata dedicata.

---

## 06 · Step operativi

| # | Attività | Fase |
|---|---|---|
| 1 | **Definire le liste chiuse dei termini** con il cliente: elenco aree geografiche + elenco categorie "chi aiuti". | Definizione |
| 2 | **Mappare i campi** della scheda progetto e decidere gli obbligatori (in primis il link Myosotis). | Definizione |
| 3 | **Registrare** il CPT `progetti` e le due tassonomie. | Sviluppo |
| 4 | **Creare i gruppi ACF** (campi scheda + campo colore sui termini). | Sviluppo |
| 5 | **Costruire i template**: scheda singola, archivi `chi_aiuti` e `area_geografica`. | Sviluppo |
| 6 | **Realizzare le due pagine d'ingresso** ("Chi aiuti" e mappa/aree). | Sviluppo |
| 7 | **Implementare i filtri** (nativi o FacetWP per i combinati). | Sviluppo |
| 8 | **Migrare i progetti esistenti** assegnando l'area, poi fase di arricchimento con il tag "chi aiuti". | Migrazione |
| 9 | **Rifinire il pannello gestionale**: colonne personalizzate nella lista progetti, validazioni, placeholder guida. | Gestione |
| 10 | **Test end-to-end**: il cliente crea un progetto di prova e verifica che appaia in entrambe le sezioni e che il tasto Dona funzioni. | Collaudo |

---

## 08 · Campi personalizzati: costi e scelta del plugin

> Nota: i piani e i prezzi dei plugin cambiano nel tempo. Le cifre qui sotto sono indicative — **verificare sempre il listino aggiornato** prima di decidere.

### Cosa è già gratuito e senza limiti (core WordPress)

- Le **due tassonomie** (`area_geografica`, `chi_aiuti`) sono native: nessun costo, nessun limite di termini.
- L'**immagine di copertina** è la *featured image* nativa.

### ACF (Advanced Custom Fields) — versione FREE

La versione gratuita di ACF **non ha limiti sul numero di campi, gruppi o tipi di post** e include quasi tutti i tipi che ci servono:

- Text, Textarea, **WYSIWYG**, **URL**, **Image**, Select, Checkbox, Radio, True/False
- **Date Picker** (data inizio / data fine)
- **Color Picker** → il campo "colore" sui **termini** della tassonomia (§04) è gratis: la location rule *Taxonomy Term* è disponibile anche nella free.

Quindi, di tutta la scheda, la Free copre: titolo, copertina, microcopy, descrizione, date, link Myosotis, etichetta pulsante e il colore delle pillole.

### L'unico campo "premium": la GALLERIA immagini

Il campo **Gallery** (più immagini in un unico campo, con drag&drop) è disponibile **solo in ACF Pro**, insieme a Repeater, Flexible Content, Clone, Options Pages e ACF Blocks. Licenza indicativa **~49 $/anno per 1 sito** (da verificare).

Opzioni per gestire le immagini multiple:

| Opzione | Costo | Pro / Contro |
|---|---|---|
| **ACF Pro** (campo Gallery) | ~49 $/anno | ✅ UX migliore per il cliente, drag&drop, + Repeater utile per estensioni future. Consigliata se il budget lo permette. |
| **Galleria nativa Gutenberg** dentro la Descrizione | gratis | ✅ zero costi · ❌ non è un campo strutturato (immagini "dentro il testo", meno controllo nel template) |
| **Carbon Fields** (open source) | gratis | ✅ ha nativamente *Complex Field* (≈ Repeater) e *Media Gallery* → copre TUTTO gratis · ❌ **code-based**: i campi si dichiarano via PHP, niente UI di configurazione → più lavoro di sviluppo e meno comodo da mantenere per chi non tocca il codice |
| **Meta Box** (free) o **Pods** (free) | gratis | Alternative freemium con UI; Meta Box ha la galleria in un add-on, Pods la gestisce nativamente |

### Raccomandazione

Poiché **l'unica esigenza "premium" è la galleria immagini**, la scelta è tra:

1. **ACF Pro** — consigliato se si vuole la migliore esperienza lato cliente (galleria drag&drop, liste chiuse, colore sui termini) e un unico plugin ben supportato. Costo ricorrente contenuto.
2. **Costo zero** — ACF Free + galleria nativa Gutenberg (o Carbon Fields / Pods per una vera galleria strutturata). Sensato se si vuole evitare licenze ricorrenti, accettando un po' più di lavoro di sviluppo o una UX leggermente meno comoda.

Carbon Fields ha senso valutarlo **solo se** il vincolo è "zero costi ricorrenti" *e* si è a proprio agio a definire i campi via codice; altrimenti ACF (Free dove basta, Pro per la galleria) resta la strada più rapida e manutenibile.

---

## 09 · La pagina Progetti (front-end)

**Una sola lista, sempre visibile** (niente sezione separata "in evidenza" e niente pulsante di espansione). In cima c'è la **barra filtri**; sotto, la griglia di tutte le card.

| Filtro | Sorgente dati | Comportamento |
|---|---|---|
| Ricerca testuale | titolo + microcopy | Ricerca full-text |
| Anno | tassonomia `annata` (o campo *Data inizio*) | Filtro per anno |
| Area geografica | tassonomia `area_geografica` | I termini della mappa |
| Chi aiuti | tassonomia `chi_aiuti` | Le categorie della sezione "Chi aiuti" |

**Ordinamento — gli "in evidenza" sempre per primi.** La lista mostra sempre in cima i progetti con il flag **In evidenza**, sia senza filtri sia quando si filtra (in quel caso salgono in cima solo gli "in evidenza" che rientrano nei filtri). In WordPress: `WP_Query` con `orderby` sul campo ACF *In evidenza* (meta) come chiave primaria, poi l'ordine desiderato (es. data) come secondaria; con **FacetWP** l'ordinamento resta applicato ai risultati filtrati.

> **Un'unica pagina, filtri via URL.** Le sezioni della home (mappa e "Chi aiuti con il tuo gesto") non portano a pagine diverse: puntano tutte a questa pagina passando il filtro in query string (`?area=africa`, `?chi_aiuti=anziani-fragili`, combinabili con `?anno=` e `?q=`). All'arrivo i filtri sono già applicati. In WordPress la stessa cosa si ottiene con **FacetWP** o una `WP_Query` che legge i parametri URL.

**Card progetto:** copertina, pillole delle tassonomie (area + chi aiuti + anno), titolo, microcopy e pulsante "Dona ora" verso il link Myosotis. Le card "in evidenza" hanno il badge "In evidenza" e un lieve risalto.

> **Due aggiunte rispetto alla bozza iniziale:** (a) l'**anno** come dato filtrabile (tassonomia `annata` o facet sulla data); (b) il flag **In evidenza**, un semplice True/False che i moderatori attivano dall'editor del progetto per far salire il progetto in cima alla lista — nessuna pagina o duplicato in più.

---

## 07 · Principi da tenere fermi

- **Tassonomie, non tag liberi.** Liste controllate = filtri e URL puliti, zero caos.
- **Un solo record per progetto.** Mai duplicare per farlo stare in due sezioni: è esattamente ciò che le tassonomie evitano.
- **Colori gestiti dai termini**, non hardcoded nel tema.
- **Estensibilità.** Un terzo asse futuro (es. "tipo di intervento") = una terza tassonomia, senza rifare nulla.

---

*Sito Cottolengo — modello dati Progetti · Bozza per il team · rev. luglio 2026*
