# Decisioni di design — Sito donazioni Cottolengo

Registro delle scelte fatte sul prototipo, una per una: cosa abbiamo deciso, perché, e quali alternative abbiamo scartato. Serve al cliente per capire le scelte e a Noodles per non rimetterle in discussione senza motivo.

Le misure precise (pixel, codici colore, pesi delle immagini) sono in `SPECIFICHE-TECNICHE.md`.

Ultimo aggiornamento: 13 ottobre 2026 (pomeriggio) · Fulvio Bosco (Noodles Comunicazione)

---

## 1. Hero delle campagne sotto il menu

**Decisione.** La fascia sotto il menu è diventata una hero fotografica a tutta larghezza, con quattro campagne che si alternano: 5×1000, Speciale Natale, Dona un pasto e Lasciti solidali (testamento solidale).

**Perché.** È la prima cosa che si vede. Una foto grande con un titolo breve e un solo pulsante comunica in pochi secondi, anche da telefono, e porta il donatore dritto all'azione. Prima c'era un banner basso con tre impaginazioni diverse.

**Come funziona.**
- Ogni campagna resta 6 secondi e passa alla successiva con una dissolvenza morbida.
- Quando una campagna entra, la foto parte leggermente ingrandita (+10%) e si apre fino alla misura piena, con il movimento concentrato nei primi due secondi. Dà vita all'immagine senza distrarre. Lo zoom si ferma solo con il pulsante pausa.
- Lo scorrimento si ferma quando il mouse è sopra la hero o con il pulsante pausa. Se sul dispositivo è attivo "riduci movimento", non parte da solo.
- Sul telefono si sfoglia col dito e il pulsante è largo quanto lo schermo.

**Slide su fondo azzurro.** Per immagini con il fondo già azzurro, come il ritratto del Cottolengo nella slide di Natale, la sfumatura scura è più leggera e solo in basso a sinistra, così il fondo resta azzurro. L'occhiello e il pulsante diventano bianchi, perché quelli azzurri sparirebbero sul fondo dello stesso colore. È la stessa logica del "Dona ora" nel menu: bianco su azzurro.

**Slide su fondo bianco.** Per foto scontornate su bianco, come nonno e nipote nella slide dei lasciti, al posto della sfumatura scura c'è una velatura bianca. Il titolo è azzurro e il testo blu notte, come nel resto del sito, e pallini e pausa diventano scuri. Sul telefono la velatura sta solo dietro al testo e ne segue l'altezza. La foto dei lasciti (nonno e nipote, in bianco e nero) è stata sostituita con una versione con i soggetti più a destra e più in basso: sul desktop non toccano mai il testo; sul telefono il punto focale è spostato a destra per mostrare il bambino intero, mentre il volto del nonno passa dietro al velo del testo.

**Pulsante sempre nello stesso punto.** In tutte le slide il pulsante ha la stessa posizione e la stessa larghezza (minimo 288 px su desktop, tutta la larghezza sul telefono). Durante le dissolvenze non "salta": cambia solo l'etichetta.

**Alternative scartate.** Hero fissa con una sola campagna: è più semplice, ma il Cottolengo ha campagne stagionali che devono convivere con il 5×1000.

## 2. Una hero riconoscibile come Cottolengo, non come UNICEF

**Decisione.** Il riferimento di partenza era la hero di unicef.it. Ne abbiamo tolto i tre elementi distintivi: la linea gialla verticale, l'occhiello giallo e le barre di avanzamento con il contatore "1 / 4".

**Perché.** L'impianto foto grande + titolo + pulsante è comune e si può usare liberamente. La combinazione di quei tre dettagli invece è tipica di UNICEF, che ha anche un azzurro quasi identico al nostro. Al loro posto abbiamo messo:
- l'occhiello come pillola azzurra, la stessa forma dei tag del sito;
- i pallini a pillola, già presenti nel banner originale.

## 3. Slide del 5×1000: foto e testo vero

**Decisione.** La slide 5×1000 usa una foto pulita (mani di un bambino, di un adulto e di un anziano una sopra l'altra, su fondo bianco) con il testo scritto nel sito, non dentro l'immagine, e con la stessa struttura di tutte le altre slide: etichetta "5×1000", titolo "Firma il 5×1000 per garantire una cura fatta di amore per gli anziani più fragili", codice fiscale **97905980013** e pulsante "Copia codice fiscale".

**Perché.**
- Il testo vero si legge bene su ogni schermo, si ingrandisce con lo zoom del browser, viene letto dai lettori di schermo e indicizzato da Google. Il testo dentro una grafica, sul telefono, diventava troppo piccolo.
- La slide si comporta come le altre: foto a tutto schermo, testo e pulsante nello stesso punto.
- Nella foto le mani stanno a destra e lasciano libera la parte sinistra per il testo. Sul telefono, su tutte le slide a fondo bianco, il velo bianco sta dietro al blocco di testo e ne segue l'altezza (più una sfumatura di 5rem sopra): con un titolo lungo copre di più, con uno corto lascia libera la foto (es. la foto dei lasciti). Nessuna opzione da scegliere per il cliente.
- Per rendere evidente il 5×1000 è entrato nel titolo ("Firma il 5×1000…"). Una prova con un numero gigante fuori schema è stata scartata: le slide verranno gestite dal cliente e devono seguire tutte la stessa regola, senza eccezioni.
- Sulle slide chiare i pallini del carosello hanno dietro una pillola bianca semitrasparente: sopra la pelle delle mani altrimenti sparivano.

**Alternative scartate.** La creatività già impaginata (prima intera e rimpicciolita a destra, poi a tutta larghezza senza logo): piccola, diversa dalle altre slide e poco leggibile sul telefono.

## 4. Immagini della hero

**Decisione.**
- Foto orizzontali 2400 × 1350 px (16:9), soggetto nella metà destra.
- Le grafiche impaginate vanno a 1920 × 1080 px.
- Il sito usa due versioni ottimizzate di ogni immagine: 1920 px per desktop e 960 px per telefono.

**Perché.** Una sola foto deve funzionare su tutti gli schermi. Il sito la ritaglia indicando un "punto focale", così il soggetto resta in vista anche sul telefono. Le foto originali pesavano 1–3 MB l'una, quelle ottimizzate pesano da 44 a 280 KB: la pagina si carica più in fretta, soprattutto con connessioni lente.

**Da fare.** Le foto attuali sono provvisorie, prese dai progetti già presenti. Servono foto dedicate dal Cottolengo.

## 5. Nota fiscale nel modulo di donazione

**Decisione.** In fondo al modulo c'è una frase fissa: "Tutte le donazioni a Fondazione Cottolengo Solidale ETS possono usufruire dei vantaggi fiscali previsti dal Codice del Terzo Settore (D.Lgs. 117/2017)". Vale per la home e per la pagina Testamento solidale.

**Perché.** Indicazione del cliente. Prima il modulo calcolava una detrazione del 30% sull'importo scelto. Era una semplificazione che non vale per tutti i donatori: aziende e privati hanno regole diverse, e le persone fisiche possono scegliere tra detrazione e deduzione.

## 6. Colori: azzurro per la marca, blu notte per le informazioni

**Decisione.**
- **Azzurro istituzionale (#009FE3):** menu, titoli e pulsanti.
- **Blu notte (#003B57):** footer e pannelli che si aprono dal menu.

**Perché.**
- **Leggibilità.** Il testo bianco sull'azzurro ha un contrasto di 3:1, sotto il minimo per i testi piccoli (4,5:1). Sul blu notte arriva a 11,9:1. Nel footer e nei pannelli ci sono IBAN, indirizzi e recapiti da leggere bene.
- **Struttura.** Il footer scuro chiude la pagina, e il pannello scuro si legge come un livello che si apre sopra la pagina.
- **Coerenza.** La regola è unica: l'azzurro identifica il Cottolengo, il blu notte porta le informazioni.

**Alternative scartate.** Footer e pannelli azzurri come il menu: più uniformi, ma meno leggibili.

## 7. Accento caldo: miele in due toni

**Decisione.** Il secondo colore del sito è il miele, un giallo caldo e profondo, "dorato". Si usa in due toni:
- **miele vivo (#EAB308):** solo segni grafici senza testo, cioè le linee accanto ai dati e un segmento del grafico;
- **miele scuro (#A16207):** tutto ciò che contiene testo, cioè le etichette "In evidenza", "il più scelto" e "aiuta di più" (con scritta bianca, contrasto 4,9:1) e i numeri d'impatto.

Il pulsante "Dona" resta sempre azzurro. Il miele non va su titoli, paragrafi o fondi ampi: al massimo il 10% della superficie.

**Perché: la regola della luminosità.** Due colori diversi ma ugualmente luminosi, messi uno accanto all'altro, "vibrano": il bordo sembra tremolare e affatica gli occhi. Abbiamo misurato la luminosità di ogni accento rispetto all'azzurro:

| Accento | Luminosità rispetto all'azzurro | Vibra? |
| --- | --- | --- |
| Miele | 1,55:1 | no |
| Ambra | 1,46:1 | no |
| Corallo / rosso | 1,05–1,11:1 | sì |
| Lampone | 1,03:1 | sì |
| Arancio vivo | 1,26:1 | sì |

I gialli caldi sono naturalmente più chiari dell'azzurro e gli stanno accanto senza conflitto. Per questo il giallo era sembrato fin dall'inizio il compagno più adatto, ed è anche il motivo per cui lo usa UNICEF. Da UNICEF ci distingue il modo d'uso: loro hanno pulsanti gialli e un giallo piatto e acceso; noi pulsanti azzurri e il miele, più profondo, solo come piccolo accento con testo bianco.

Il sistema completo si legge come una cosa sola:
- azzurro per la marca;
- blu notte per le informazioni;
- miele per ciò che va notato.

**Percorso e alternative scartate** (provate in questo ordine):
- **Giallo piatto:** l'abbinamento di UNICEF.
- **Albicocca:** gradevole ma troppo spenta.
- **Arancio vivo:** vibra accanto all'azzurro; con testo blu notte il tremolio si vede anche nelle scritte.
- **Arancio fluo:** illeggibile nelle etichette piccole e troppo "commerciale". A schermo l'effetto fluorescente non esiste.
- **Mattone:** leggibile, ma tendente al rosso-ruggine.
- **Oro (piatto o metallico):** l'oro piatto a schermo diventa ocra; l'effetto metallico stona in un sito piatto e richiama il lusso.
- **Ambra:** corretta e rilassante, molto vicina al miele ma più caramello. È l'alternativa valida.
- **Rosso #CC4040 e corallo #F45858:** emotivi, ma vibrano accanto all'azzurro e richiamano errori e urgenza.
- **Lampone:** originale, ma vibra come il corallo.

## 8. Menu "Contatti" con pannello

**Decisione.** "Contatti" apre un pannello come "Come donare", con tre recapiti:
- donazioni e informazioni;
- sostegno a distanza;
- lasciti e testamento solidale.

**Perché.** Prima il link portava al footer, in fondo alla pagina. Chi cerca un contatto ha un'esigenza precisa: mostrare subito il recapito giusto, con il telefono in evidenza e chiamabile con un tocco, evita passaggi e telefonate all'ufficio sbagliato.

**Altri dettagli.**
- Si apre un pannello alla volta, e si chiude con un clic fuori o con il tasto Esc.
- Nel pannello "Come donare" abbiamo tolto la freccetta sulla voce selezionata: non aggiungeva informazioni, e la selezione è già indicata dal filo azzurro a sinistra.

## 9. Misure di menu, hero e footer

**Decisione.**
- **Menu:** 76 px di altezza su desktop, 64 px su tablet e telefono.
- **Hamburger:** sotto i 1160 px di larghezza (vedi decisioni 18 e 24), quindi anche sul tablet e sui portatili piccoli. Sotto questa misura le voci non stanno su una riga. Accanto all'hamburger resta in vista il pulsante "Dona ora".
- **Testi:** mai sotto i 16 px. Il footer è passato da 16 a 17 px.
- **Pannelli del menu:** testi tra 17 e 20 px.

**Perché.** Il pubblico è in buona parte over 50, e le misure seguono le linee guida di accessibilità (WCAG 2.2):
- aree cliccabili di almeno 44 px;
- nessuno scorrimento laterale fino a 320 px di larghezza;
- il sito regge lo zoom del browser fino al 400%.

Prima, sul tablet, le voci del menu andavano a capo e l'intestazione raddoppiava d'altezza.

**Accorgimenti.**
- Se una persona ingrandisce il carattere del browser, il menu passa all'hamburger invece di rompersi.
- Sugli schermi molto bassi, come un telefono in orizzontale, il menu smette di restare fisso in alto per non coprire il testo.
- Sul telefono la hero lascia intravedere l'inizio della sezione successiva, per far capire che la pagina continua.

## 10. Pulsanti: tre misure

**Decisione.** Esistono solo tre misure di pulsante:

| Misura | Altezza | Testo | Dove |
| --- | --- | --- | --- |
| L | 58 px | 20 px | azione principale (donazione nel modulo, hero) |
| M | 52 px | 17 px | tutte le altre azioni |
| S | 48 px | 17 px | "Dona ora" nel menu |

**Perché.** Prima c'erano sette altezze diverse, da 50 a 63 px, e lo stesso pulsante cambiava misura da una pagina all'altra. Tre misure fisse danno ordine e una gerarchia chiara. Il "Dona ora" nel menu è più piccolo apposta, per non competere con il pulsante principale della pagina.

## 11. Animazione dei pulsanti

**Decisione.**
- **Passaggio del mouse:** il pulsante si ingrandisce appena (+4%, +2% per quelli larghi) con un movimento morbido. Il colore diventa sempre **blu notte con testo bianco**, il colore del footer, qualunque sia il colore a riposo (azzurro, bianco o con bordo): una sola regola per tutto il sito, che lega i pulsanti a footer e pannelli del menu. Sulle slide fotografiche scure il pulsante blu notte prende un filo bianco, altrimenti si confonderebbe con la sfumatura.
- **Pressione:** si schiaccia leggermente.
- **Rilascio:** fa un piccolo rimbalzo e si assesta.

**Perché.** Dà una risposta tattile e piacevole, adatta a un sito che chiede un gesto di fiducia. Prima il pulsante si sollevava, un effetto più rigido.

**Accorgimenti.**
- Sui touch l'ingrandimento al passaggio non c'è, perché resterebbe bloccato dopo il tocco. Resta solo la reazione alla pressione.
- Con "riduci movimento" attivo, nessuna animazione.

## 12. Selezione da tastiera

**Decisione.** L'elemento selezionato con il tasto Tab è segnalato da un anello blu notte con un alone bianco. Sui fondi scuri, cioè hero, footer e pannelli, l'anello è bianco.

**Perché.** Chi naviga con la tastiera deve sempre vedere dove si trova. L'anello giallo usato prima non si vedeva sul bianco e richiamava il giallo che abbiamo tolto.

## 13. Pannelli del menu: si aprono con un clic

**Decisione.** "Come donare", "Aziende" e "Contatti" aprono il loro pannello con un clic, non al passaggio del mouse.

**Perché.**
- Con l'apertura al passaggio il pannello si apre anche per sbaglio, e si chiude se il mouse esce di poco mentre si scende verso le voci. Per chi usa il mouse con meno precisione è frustrante.
- Il clic funziona allo stesso modo su computer, tablet e telefono, anche da tastiera e con i lettori di schermo.
- È lo standard dei siti istituzionali per i menu che occupano tutta la larghezza.

La freccetta accanto alla voce indica che si apre un pannello. Si apre un pannello alla volta, e si chiude con un clic fuori o con Esc.

**Alternative scartate.** Apertura al passaggio con un ritardo di 0,3 secondi: meno clic, ma più aperture involontarie.

## 14. Nuove voci del menu: Crowdfunding e Aziende

**Decisione.** Il menu aveva cinque voci: Come donare · I progetti · Crowdfunding · Aziende · Contatti (poi sette, oggi cinque: vedi decisioni 17 e 18).
- **Crowdfunding** apre un pannello con sei voci che portano alle sezioni della pagina dedicata (`crowdfunding.html`), dove verrà collegato il modulo fornito da Myosotis:
  - cos'è una raccolta solidale;
  - crea la tua raccolta;
  - sostieni una raccolta;
  - occasioni speciali (matrimoni, battesimi, anniversari);
  - sport e sfide solidali;
  - come funziona e garanzie: ogni raccolta è verificata dal Cottolengo, e il denaro va sempre all'Opera, mai all'organizzatore.
- **Aziende** apre un pannello come "Come donare", con sei voci che portano alle sezioni della pagina dedicata (`aziende.html`):
  - donazioni aziendali;
  - regali e Natale solidale;
  - volontariato d'impresa;
  - donazioni di beni e servizi;
  - partnership e progetti;
  - proponi una collaborazione.

**Perché.** Il Crowdfunding si rivolge ai privati che vogliono organizzare una raccolta, e sta vicino alle voci dedicate al donatore. Le Aziende sono un pubblico diverso, con esigenze diverse, e meritano un ingresso proprio prima dei Contatti.

**Da fare.** Le pagine `aziende.html` e `crowdfunding.html` non esistono ancora, quindi per ora quei link portano a una pagina inesistente. I testi dei pannelli Crowdfunding e Aziende sono provvisori.

---

## 15. "Come fare del bene": da tab a cinque schede

**Decisione.** La sezione non è più un elenco a tab con un pannello alla volta: i cinque modi (sostegno a distanza, 5×1000, dona in memoria, testamento solidale, volontariato) sono cinque schede costruite come le schede dei progetti: foto, titolo, testo breve e pulsante.

**Perché.**
- Tutte le scelte si vedono insieme: con le tab quattro modi su cinque erano nascosti dietro un clic.
- Le schede usano la stessa costruzione (e lo stesso codice) delle schede progetto: un solo modello da imparare per chi visita e un solo modello da gestire in WordPress. La sezione "Chi aiuti con il tuo gesto" userà la stessa scheda.

**Cinque in fila: sì, ma solo da 1200 px.** Il contenitore è largo 1200 px: cinque schede vengono larghe circa 220 px. Ci stanno con una versione un po' più compatta (spazi interni e titolo leggermente ridotti, testo fino a 5 righe); pulsanti, testi e foto restano leggibili. Sotto i 1200 px non ci starebbero:
- **tablet e portatili piccoli:** fila che scorre, con due schede e mezza in vista e una barra sottile per chi usa il mouse;
- **telefono:** una scheda e un pezzo della successiva, da sfogliare col dito, come i progetti.

**Alternative scartate.** Tre + due su due righe (la seconda riga sembra incompleta); carosello con frecce anche su desktop (nasconde due modi su cinque, lo stesso difetto delle tab).

**Dettagli.**
- Le voci del menu "Come donare" (Sostegno a distanza, 5×1000, Dona in memoria, Volontariato) portano direttamente alla scheda corrispondente; sul computer si vede anche il titolo della sezione.
- Le foto di 5×1000 e testamento solidale sono ritagli dedicati delle foto della hero (`…-scheda-800.jpg`): la versione larga della hero nella scheda mostrava le persone troppo piccole.
- **Niente etichette sulle schede:** provate in più versioni (cosa ti chiede / chi aiuti, in azzurro, miele, blu notte, solo testo), poi tolte: non aggiungevano abbastanza rispetto a titolo e testo, e ogni etichetta in più toglieva attenzione al titolo. Le schede sono solo foto, titolo, testo e pulsante.
- **Etichette della hero:** blu notte pieno con testo bianco (circa 11:1): lì stanno sopra un titolo molto grande e sopra le foto, quindi non lo sovrastano. Sulle slide con fondo azzurro o foto scura sono bianche con testo blu notte.
- Il contatto diretto per il sostegno a distanza (richiesto dal cliente) resta come nota piccola sotto il testo; è un campo facoltativo della scheda.
- Il testo introduttivo sotto il titolo è provvisorio.

## 16. Dai singoli progetti alle quattro aree di "Chi aiuti"

**Decisione.** La home non mostra più i singoli progetti: tolte le sezioni "Progetti da sostenere" (carosello) e "I nostri progetti nel mondo" (mappa). Al loro posto la sezione "Chi aiuti con il tuo gesto" presenta quattro aree, con le stesse schede di "Come fare del bene":
- **Cura** (anziani e malati),
- **Accoglienza** (persone con disabilità),
- **Educazione** (bambini e ragazzi),
- **Missioni internazionali** (nel mondo).

**Perché.**
- Un donatore, soprattutto anziano, sceglie più facilmente tra quattro aree chiare che tra venti progetti: meno scelte, decisione più rapida.
- Ogni area avrà una sua pagina con il modulo di donazione: una pagina per area è più semplice da tenere aggiornata di una pagina per progetto.
- Le schede hanno la stessa costruzione in tutta la home: chi visita impara un solo modello.

**Dettagli.**
- Al posto delle icone ci sono foto. Per ora sono foto tratte dai progetti del Cottolengo (Hospice, Family Cottolengo, Scuola Cottolengo, missione in Africa), ritagliate a 800 × 500: sono provvisorie, da sostituire con foto definitive.
- Quattro schede in fila da 1200 px (circa 285 px l'una); sotto, la stessa fila che scorre di "Come fare del bene".
- Nel menu, "I progetti" apre un pannello come "Come donare", con titoli e descrizioni delle quattro aree; ogni voce porta alla sua scheda.
- Finché le pagine delle aree non esistono, schede e pulsanti "Scopri e dona" portano al modulo di donazione della home.

## 17. 5×1000 e Lasciti diventano voci del menu (superata dalla 18 per la parte sugli spazi)

**Decisione.** Su richiesta del Cottolengo, 5×1000 e lasciti testamentari hanno una voce propria nel menu e non sono più dentro "Come donare". Il menu ora è: Come donare · 5×1000 · Lasciti · I progetti · Crowdfunding · Aziende · Contatti, più il pulsante "Dona ora".
- **5×1000** porta alla slide della hero con codice fiscale e pulsante "Copia codice fiscale" (da ogni pagina).
- **Lasciti** porta alla pagina Testamento solidale. "Lasciti" e non "Testamento solidale" perché è più corto e il nome che il Cottolengo usa; sulla pagina la voce resta sottolineata.
- Sono voci dirette, senza pannello: portano a una sola destinazione.
- Il pannello "Come donare" ha ora quattro voci: Donazione libera, Sostegno a distanza, Dona in memoria, Volontariato.

**Spazio nel menu.** Con sette voci la riga sarebbe stata larga circa 890 px, ma accanto a logo e "Dona ora" ce ne sono circa 790. Per farla stare:
- testo delle voci da 17 a 16 px (resta nella fascia 16–18 px dei menu leggibili);
- spazi interni delle voci più stretti (l'area cliccabile resta alta 44 px);
- l'hamburger compare sotto i 1240 px invece che sotto i 1200: da 1240 px il contenitore è largo 1200 e le sette voci ci stanno con circa 50 px di margine. I portatili da 1280 e 1366 px vedono il menu completo.

**Da valutare.** La sezione "Come fare del bene" in home ha ancora le schede 5×1000 e Testamento solidale: si possono lasciare (sono comunque modi di donare) o togliere ora che hanno una voce di menu.

## 18. Nuova organizzazione del menu e pagina Chi siamo

**Decisione.** Il menu segue le domande di chi arriva sul sito (analisi completa in `ARCHITETTURA-CONTENUTI.md`):

**Chi siamo** · **Chi aiutiamo** ⌄ · **Come aiutarci** ⌄ · **5×1000** · **Lasciti** · [Dona ora]

- **Chi siamo** porta alla nuova pagina `chi-siamo.html`: due righe per chi non conosce l'Opera, i numeri, le quattro aree, i contatti, il link al sito istituzionale. Testi provvisori.
- **Chi aiutiamo** (prima "I progetti"): Cura, Accoglienza, Educazione, Missioni internazionali.
- **Come aiutarci** (prima "Come donare"): Donazione libera, Sostegno a distanza, Dona in memoria, Raccolte solidali, Volontariato, Per le aziende. Crowdfunding e Aziende non sono più voci proprie: sono modi di aiutare, come nei siti di UNICEF, Lega del Filo d'Oro ed EMERGENCY. Le loro sottovoci diventeranno sezioni delle rispettive pagine (`crowdfunding.html`, `aziende.html`, da realizzare); i testi provvisori sono descritti nella decisione 14.
- **5×1000** e **Lasciti** restano voci proprie, come chiesto dal Cottolengo.
- **Contatti** esce dal menu: i tre recapiti sono nella pagina Chi siamo e il footer ha il link "Tutti i contatti".

**Perché.** Con sette voci il menu mescolava criteri diversi (modi di donare, destinatari, pubblico, servizi) e quattro voci rispondevano alla stessa domanda. Con cinque voci il menu è più chiaro e più arioso.

**Misure.** Voci di nuovo a 17 px con gli spazi originali; il menu occupa circa 630 px e sta in riga da 1120 px di larghezza (prima l'hamburger partiva da 1240): i portatili da 1280 e 1366 px vedono il menu completo con ampio margine.

## 19. Pagina Chi siamo sul modello di UNICEF "Missione e storia"

**Decisione.** La pagina `chi-siamo.html` segue la struttura della pagina "Missione e storia" di UNICEF Italia, **senza la timeline** e con i componenti del nostro sito:
1. **Cover** con il dipinto storico della Piccola Casa (stesso componente della pagina Testamento solidale);
2. **La nostra missione**: due paragrafi in una colonna di lettura;
3. **Il motto** in grande, «Caritas Christi urget nos», con la traduzione;
4. **La Piccola Casa oggi**: testo affiancato alla foto degli ospiti;
5. **Numeri** (stessa sezione della home);
6. **A chi va la tua donazione**: Fondazione Cottolengo Solidale ETS, vantaggi fiscali, codice fiscale;
7. **Documenti e bilanci**: tre schede da scaricare (bilancio sociale, bilancio d'esercizio, statuto). I file PDF sono da collegare;
8. **Volontariato**: invito breve;
9. **Chi aiutiamo**: le quattro schede della home;
10. **Fai una donazione**: fascia azzurra con il pulsante;
11. **Contatti**: i tre recapiti e il link al sito istituzionale.

**Perché.** Chi non conosce l'Opera cerca prima di tutto fiducia: chi siete, da quando, a chi va il denaro, si possono vedere i conti. La struttura di UNICEF risponde in quest'ordine; la timeline è stata esclusa su richiesta, la storia resta in due righe e nel link al sito istituzionale.

**Da verificare con il Cottolengo.** La pagina parla del 1828 (primo rifugio aperto dal Cottolengo, come indica il sito donazioni attuale), mentre la home e il footer dicono 1832 (trasferimento a Valdocco e nascita della Piccola Casa): va scelta una data unica. Testi, motto e documenti sono provvisori.

## 20. Raccolte solidali: fascia in home, non slide nella hero

**Decisione.** Il crowdfunding ha una fascia azzurra in home, dopo "Chi aiuti con il tuo gesto": titolo «Crea una raccolta solidale», due righe e il pulsante «Crea la tua raccolta» verso `crowdfunding.html` (da realizzare).

**Perché.** La hero è riservata alle campagne a tempo (5×1000, Natale, Dona un pasto); il crowdfunding è sempre attivo. Una quinta slide avrebbe ridotto il tempo in vista di ogni campagna. La fascia riusa il componente "Fai una donazione" della pagina Chi siamo (`.fascia-invito`). Una raccolta speciale con scadenza potrà andare anche in hero.

## 21. Pagine dedicate: 5×1000, quattro aree e "Come aiutarci"

**Decisione.** Ogni voce del menu ha ora la sua pagina:
- **5×1000** (`cinque-per-mille.html`): codice fiscale in grande con pulsante "Copia", come si firma in tre passi, perché firmare, chi non presenta la dichiarazione, passaparola, invito a donare, contatto.
- **Chi aiutiamo**: `cura.html`, `accoglienza.html`, `educazione.html`, `missioni-internazionali.html`. Testo a sinistra, **modulo di donazione dedicato** a destra (causale = nome dell'area; frase d'impatto e pulsante propri, es. "Dona 20 € per la cura").
- **Come aiutarci**: `sostegno-a-distanza.html` (contatti di Sr Mary), `dona-in-memoria.html` (modulo con il campo "nome della persona che vuoi ricordare"), `crowdfunding.html` (raccolte solidali, sezioni con le ancore del vecchio pannello, pulsante "Crea la tua raccolta" da collegare a Myosotis), `volontariato.html`, `aziende.html` (sezioni con le ancore del vecchio pannello). Donazione libera resta il modulo della home.

**Perché.** Una pagina per ogni voce dà a ciascun modo di aiutare uno spazio proprio, indicizzabile e condivisibile, con un solo invito chiaro.

**Come sono fatte.** Tutte usano la struttura delle pagine di progetto (cover, testo, modulo o scheda contatti), così in WordPress basta un solo modello di pagina. Lo script del modulo legge frase d'impatto e testo del pulsante dagli attributi `data-impatto` e `data-cta` del modulo. Il pulsante "Copia codice fiscale" ora è gestito dallo script comune (`js/nav.js`) e funziona su ogni pagina.

**Da validare.** Tutti i testi e le foto (in `assets/img/pagine/`) sono provvisori. La foto delle Missioni è piccola (932 px) e va sostituita.

## 22. Moduli di donazione dentro il sito (prova con Myosotis)

**Obiettivo.** Il donatore deve completare la donazione senza lasciare il sito.

**Situazione.** I moduli di pagamento sono su Myosotis (NP Solutions), dominio dona.cottolengo.org: una pagina per causale (es. `/in-memoria/`). Il modulo non accetta importo, frequenza o causale nel link (legge solo il parametro di provenienza `orgn`/`origine`), quindi i nostri moduli non possono passargli la scelta fatta.

**Prova.** Nella pagina Dona in memoria il modulo Myosotis `/in-memoria/` è incorporato in pagina (iframe) a tutta larghezza, sotto il testo. dona.cottolengo.org non ne blocca l'incorporamento: si carica, si compila e calcola la detrazione.

**Limiti emersi.**
- Il modulo incorporato mostra anche il proprio logo, banner e titolo. Soluzione provvisoria: la cornice li taglia facendo salire il modulo (margine di circa 178 px + 31,7% della larghezza, misurato su schermi da 320 a 1440 px). È fragile: se NP Solutions cambia la loro intestazione il taglio va rifatto. Serve una versione "senza intestazione".
- Anche il footer Myosotis (fascia blu con logo e copyright, 730–960 px) è nascosto: la cornice si ferma subito dopo «Metodi di donazione». Poiché da fuori non si può leggere l'altezza del modulo, l'altezza della cornice è una tabella misurata sul modulo reale ogni 20 px di larghezza (da 2539 px su computer a circa 2980 sui telefoni più stretti). È molto fragile: se NP Solutions cambia il modulo va rimisurata. Dentro il modulo compare anche il loro avviso cookie, che non possiamo togliere noi.
- Sul prototipo GitHub (dominio diverso) alcuni browser possono bloccare la sessione tra i passaggi; sul dominio definitivo donazioni.cottolengo.org il problema non c'è.

**Domande per NP Solutions.**
1. Versione del modulo da incorporare, senza intestazione, banner, footer e avviso cookie, con colori e font del sito.
2. Altezza automatica del modulo incorporato (script di ridimensionamento).
3. Un modulo (o una causale) per ogni area: Cura, Accoglienza, Educazione, Missioni internazionali; più Raccolte solidali.
4. PayPal e Satispay funzionanti dentro il modulo incorporato.
5. Precompilazione da link di importo, frequenza e causale.
6. Dove si inserisce il nome della persona ricordata nel modulo in memoria.
7. Se il contratto include le API, per collegare direttamente i nostri moduli.

**Se la prova convince**, lo stesso schema si applica alle pagine delle aree, alla home e al 5×1000 non serve (non è una donazione).

## 23. "Chi aiutiamo" nel menu si chiama "Progetti"

**Decisione.** La voce del menu che porta alle quattro aree (Cura, Accoglienza, Educazione, Missioni internazionali) si chiama **Progetti**: è il nome che i donatori del Cottolengo già conoscono. Le sezioni nelle pagine mantengono i loro titoli ("Chi aiuti con il tuo gesto", "Chi aiutiamo").

## 24. "Aziende" torna voce del menu

**Decisione.** Su richiesta del Cottolengo, **Aziende** è una voce del menu principale (dopo Lasciti) e non più una voce del pannello "Come aiutarci". Il menu ora è: Chi siamo · Progetti · Come aiutarci · 5×1000 · Lasciti · Aziende + Dona ora.

**Spazio.** Con sei voci il menu occupa circa 695 px: il testo resta a 17 px e da 1200 px c'è ampio margine. L'hamburger compare sotto i 1160 px (prima 1120).

## 25. Correzioni tecniche (13/10/2026)

Solo codice: testi, foto, testimonianze, percentuali e partner provvisori non sono stati toccati.

- **Menu:** hamburger in un solo script (`js/nav.js`) per tutte le pagine. Prima era copiato in quattro file e **non funzionava** nelle pagine che caricano solo `nav.js` (Chi siamo, 5×1000, Aziende, Raccolte solidali, Dona in memoria, Sostegno a distanza, Volontariato). Esc chiude tendina e menu; `aria-expanded` e `aria-label` sempre aggiornati.
- **Pagina corrente nel menu:** `aria-current="page"` sulla voce reale (filo azzurro nel pannello, sottolineatura sulla voce di primo livello che la contiene). "Cura" e "Donazione libera" non risultano più evidenziate su ogni pagina: lo stato di hover/focus usa la classe `.is-puntata`.
- **Caroselli:** relazione tab/slide con `aria-controls`, slide nascoste `inert` + `aria-hidden`, icona e `aria-pressed` del pulsante pausa coerenti, con "riduci movimento" partono fermi. Grafica, velocità e contenuti invariati.
- **Importo libero:** intero da 1 a 100.000 €; con un valore non valido messaggio sotto il campo e pulsante bloccato (dettagli in SPECIFICHE-TECNICHE.md).
- **Aziende:** l'id del titolo "Proponi una collaborazione" diventa `proponi-collaborazione` (`contatti` era già del footer).
- **Myosotis:** ritaglio provvisorio isolato in `.modulo-incorporato__cornice--myosotis`, resa identica.
- **5×1000:** a 320–360 px le schede in fondo uscivano dallo schermo (il pulsante "Copia il codice da condividere" non andava a capo). Ora restano nella colonna.
- **Progetti:** il footer aveva ancora i link "Lorem ipsum": allineato al footer delle altre pagine.
- **CSS:** tolte le regole della mappa "Progetti nel mondo" e del carosello "Progetti da sostenere" (sezioni eliminate dalla home). Restano i componenti dei template futuri (breadcrumbs, pagina progetto, slide "creatività").
- **SEO:** Open Graph e Twitter Card; canonical, og:url e og:image in attesa del dominio.
- **Repository:** `.gitignore`; `.DS_Store` e `.claude/settings.local.json` (impostazioni personali) tolti dal versionamento. `.claude/launch.json` resta: avvia l'anteprima locale per tutto il team.

## 26. Gli elementi "arrivano" durante lo scorrimento (scroll reveal), in tutte le pagine

Richiesta di Fulvio, prima per la home e poi estesa a tutto il sito. Titoli di sezione, numeri, schede, paragrafi degli articoli, documenti, recapiti, passi del 5×1000, grafico, partner e testimonianze salgono di 24 px e si accendono in 0,7 s quando entrano nello schermo. Gli elementi affiancati partono uno dopo l'altro (90 ms di scarto, massimo 360 ms). Ogni elemento si anima una sola volta.
- Restano fermi: menu, hero e copertine, colonna laterale col modulo di donazione, moduli e footer, perché devono essere subito pronti.
- Ciò che è già in vista all'apertura della pagina compare subito.
- Con "riduci movimento" o senza JavaScript tutto è visibile da subito.
- Il controllo è sulla posizione verticale: funziona anche con le schede in fila orizzontale su telefono e con uno scorrimento veloce.

## 27. Fascia dei numeri in blu notte

Richiesta di Fulvio: la fascia con i numeri (97.000, 1832, 4, 5), sotto la foto della bambina in home e nella pagina Chi siamo, passa dal gradiente azzurro al blu notte pieno (`--blu-notte`, #003B57), il colore del footer e dei pannelli del menu. Il testo resta bianco (contrasto 11,9:1).

## Punti aperti

- **Foto definitive per la hero** dal Cottolengo, secondo le misure delle specifiche. Facoltativa una versione verticale 9:16 per telefono.
- **Testi delle slide** da validare con il cliente. Il dato "oltre 110.000 pasti" viene dalla scheda progetto; il vecchio banner diceva 97.000.
- **Pagina Family Cottolengo:** decidere se usare anche lì la nuova nota fiscale.
- **Etichette piccole** ("il più scelto", pillole delle schede): oggi sono sotto i 12 px. Proposta di portarle a 13 px.
- **Schede progetto:** al passaggio del mouse si sollevano ancora. Valutare lo stesso ingrandimento morbido dei pulsanti.
- **Immagini non più usate** da eliminare prima della consegna, su conferma: in `assets/img/hero/` i file `5x1000-*`, `5x1000-creativita-*`, `5-per-mille-cottolengo-anziani-fragili-*` (comprese le versioni `-largo`), `natale-1920/960`, `natale-cottolengo-1920/960` e `pasto-*` (sostituiti da versioni con nomi SEO); in `assets/img/` anche `COT_Adv 5x1000_200x140.jpg` (vecchia immagine della tab 5×1000); più altri file inutilizzati in `assets`.
- **Pagine delle quattro aree** (Cura, Accoglienza, Educazione, Missioni internazionali) con modulo di donazione: da generare quando arrivano i testi. Testi e foto delle schede sono provvisori.
- **Pulizia del codice dopo la rimozione dei progetti, su conferma:** la pagina `progetti.html` con `js/progetti-dati.js` e `js/progetti.js`; `js/mappa-regioni.js` (non caricato da nessuna pagina); la mappa `assets/img/mappa.svg` / `assets/svg/mappadot.web.svg` e le icone di "Chi aiuti" in `assets/svg/` non servono più alla home (le regole CSS di carosello progetti e mappa sono state tolte il 13/10/2026). Vanno eliminati quando si decide il destino della pagina Progetti. La pagina di progetto Family Cottolengo (`family-cottolengo.html`, `js/project-detail.js`) può diventare il modello per le pagine delle quattro aree.
- **Pagina Chi siamo:** testi da validare; file PDF di bilancio sociale, bilancio d'esercizio e statuto da collegare; scegliere tra 1828 e 1832 come data di inizio (oggi la pagina dice 1828, home e footer 1832).
- **Pagine nuove** (5×1000, 4 aree, Come aiutarci): testi e foto da validare; collegare il modulo Myosotis per le raccolte solidali. I testi dei pannelli Crowdfunding e Aziende sono provvisori e vanno validati con il Cottolengo.
- **Nome della voce Crowdfunding:** valutare un nome più immediato per il pubblico anziano, per esempio "Raccolte solidali" o "Crea una raccolta".
- **Myosotis / NP Solutions:** verificare se il contratto comprende personal fundraising, API, webhook e pagine personalizzabili.
- **Dominio definitivo:** serve per canonical, og:url e og:image (immagine di condivisione 1200 × 630 px da preparare).
- **Modulo Myosotis senza header/footer** (o widget/API) da NP Solutions, per togliere il ritaglio provvisorio.
