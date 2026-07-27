# Alberatura del sito originale — mappatura validata

Validata il 2026-07-06 leggendo la **sitemap WordPress reale** di `donazioni.cottolengo.org`
(`/sitemap.xml` → `wp-sitemap-posts-page-1.xml`, `wp-sitemap-posts-post-1.xml`,
`wp-sitemap-posts-coll-page-section-1.xml`, `wp-sitemap-taxonomies-category-1.xml`).
Il problema di certificato SSL segnalato nel brief non si è ripresentato: il fetch è andato a buon fine.
Questa mappa **sostituisce** (conferma e corregge) la tabella ipotetica della sezione 3 del brief.

## Pagine confermate (post type: page)

| Area | URL | Note |
|---|---|---|
| Home | `/` | |
| Chi siamo | `/donazioni-cottolengo/chi-siamo/` | ✓ come da brief |
| Dona (hub) | `/donazioni-cottolengo/dona/` | pagina contenitore dei modi di donare |
| Testamento solidale | `/donazioni-cottolengo/dona/testamento-solidale/` | ✓; la variante `/coll-page-section/testamento-solidale/` è una *sezione builder* del tema, non una pagina autonoma |
| Progetti (hub) | `/donazioni-cottolengo/progetti/` | |
| Progetti Africa / Asia / America | `/progetti-in-africa/` · `/progetti-in-asia/` · `/progetti-in-america/` | ✓ tutte e tre |
| Missioni (panoramica) | `/missioni/` | ✓; esiste anche l'albero categorie `/category/missioni/{africa,asia,america}/` |
| Adozioni a distanza | `/adozioni/` | ✓ |
| Italia | `/italia/` | pagina dedicata alle opere in Italia |
| Famiglia | `/famiglia/` (+ `/family-cottolengo/` come post) | non era nella tabella del brief |
| Testimonianze | `/testimonianze/` | ✓ |
| 5×1000 | `/5-x-1000/` | ✓ pagina di approfondimento propria |
| Newsletter | `/newsletter/` | ✓ form di iscrizione |
| Colletta alimentare | `/colletta-alimentare/` | ✓ |
| News / blog | `/news-donazioni-cottolengo/`, `/donazioni-cottolengo/blog-2/`, `/category/news/` | ✓ |
| Richiesta di preghiere | `/richiesta-di-preghiere/` | ✓ è una pagina locale del sito, non solo link esterno |
| SMS solidale | `/donazioni-cottolengo/chi-siamo/sms-solidale-cottolengo/` | ✓ |
| Contatti | `/donazioni-cottolengo/contatti/` | |
| Cookie policy | `/donazioni-cottolengo/cookie-policy/` | esiste **solo** la cookie policy: `/privacy-policy/` dà 404 |
| Video | `/video/`, `/video-2/` | non era nella tabella del brief |
| Marketplace solidale | `/marketplace/` (+ tutorial IT/EN) | non era nella tabella del brief |
| Collezione opere digitali | `/collezione-opere-digitali/` | non era nella tabella del brief |
| Campagne/eventi stagionali | `/mercatini-natalizi/`, `/natale-aziende/`, `/festa-delle-emozioni/` (+ 6 pagine "programma casa <colore>"), `/progetto-casa-accoglienza/`, `/homo-sapiens/`, `/donazioni-cottolengo/collisioni/` | pagine-campagna una tantum |

## Contenuti che stanno nei *post* (non pagine)

- `/dona-un-pasto/` ✓ (il brief indicava anche la variante `/italia/dona-un-pasto/`; l'URL canonico in sitemap è questo)
- `/adotta-un-nonno-a-tachina/`, `/un-pozzo-la-vita/`, `/cottaction/` ✓ (CottAction esiste, HTTP 200)
- pagine di funnel: `/form-dona/`, `/dono/`, `/grazie/`
- il resto sono articoli/news (categorie: `blog-donazioni`, `progetti`, `news`, `missioni`, `giovannino`, `family`)

## Sezioni builder (CPT `coll-page-section`, 102 elementi)

Non sono pagine navigabili ma blocchi del page-builder del tema (Collision). Tra questi:
`servizio-civile-universale` ✓ (il brief lo indicava correttamente qui: è una sezione, non una pagina propria).
Molti altri sono demo del tema (`typo-1`, `price-tables`, `demos`…): da ignorare nella riorganizzazione.

## Cosa NON esiste sul sito originale (confermato)

- **FAQ dedicata**: nessuna pagina in sitemap → il dubbio del brief è confermato.
- **Privacy policy**: 404 (c'è solo cookie policy).
- **Dona in memoria** e **Biglietti digitali solidali**: vivono sul dominio esterno `dona.cottolengo.org` (piattaforma di pagamento), non su questo sito.
- **Bilanci sociali**: eventuali PDF non passano dalla sitemap (media WP); da chiedere all'ente.

## Implicazioni per la v4 (promemoria)

I link "Scopri come →" delle card in "Tanti modi" continuano a puntare al dominio originale
finché non si decide diversamente; la struttura delle card resta compatibile con futuri href locali
(es. `/adozioni/index.html`) senza refactoring.
