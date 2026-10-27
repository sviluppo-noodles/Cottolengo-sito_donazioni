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

## 28. Leggibilità: contrasto AA e testi di almeno 14 px (14/10/2026)

Richiesta di Fulvio ("visibilità perfetta"). **Cambia la scelta precedente** per cui l'azzurro del logo restava su titoli, menu e pulsanti nonostante il contrasto insufficiente: va comunicato al Cottolengo.
- L'azzurro del logo #009FE3 ha solo 3,0:1 col bianco, sotto i minimi WCAG AA (3:1 per titoli grandi e pulsanti, 4,5:1 per il testo). Resta per icone, bordi, linee, grafico, pallini e focus.
- Testi azzurri (titoli, titoli delle schede, link, numeri del grafico) e pulsanti azzurri con testo bianco usano `--azzurro-scuro`, portato da #007AB8 a **#0075B0**: 5,0:1 sul bianco e 4,6:1 sull'azzurro chiarissimo.
- Header, testata del modulo e fasce piene (raccolte solidali, contatti lasciti): gradiente da #0075B0 a **#005D8A** (`--azzurro-profondo`), da 5,0:1 a 7,2:1 col bianco. Il bianco del menu prima era a 3,0:1.
- Slide di Natale: velo blu notte sotto il testo. Il bianco sull'azzurro della foto passa da 2,6:1 ad almeno 4,6:1 su desktop; il titolo è a 3,2:1 nel caso peggiore (1024 px), che va bene per un titolo grande.
- Etichette ("il più scelto", "aiuta di più", "In evidenza", pillole dei progetti, occhielli di Chi siamo): minimo **14 px** (prima 10–13 px). Le pillole dei progetti vanno a capo invece di uscire dalla scheda.
- Righe di testo sotto i 75 caratteri: colonna di Chi siamo a 42rem, pagine senza colonna laterale (Aziende, Dona in memoria) a 42rem.
- Il footer resta com'è: i titoli azzurri su blu notte sono già leggibili.
- Verifica automatica su 12 pagine a 1440 e 390 px: nessun testo sotto i minimi WCAG AA su fondo pieno, nessun testo sotto i 14 px, righe sotto i 75 caratteri.

## 29. Data di inizio dell'Opera: 1828 (14/10/2026)

Risposta del Cottolengo (Silvia): il 17 gennaio 1828 il Cottolengo apre a Torino il "Deposito de' poveri infermi del Corpus Domini" (Ospedaletto della Volta Rossa); la "Piccola Casa della Divina Provvidenza" è riconosciuta con Regio Decreto di Carlo Alberto il 27 agosto 1833. La data ufficiale di inizio dal punto di vista pastorale è il **1828**, ed è quella che usiamo ovunque: numeri in home, footer di tutte le pagine, pagina Chi siamo, Family Cottolengo e meta description. Prima home e footer dicevano 1832, che non corrisponde a nessuna delle due date. Il 1833 (riconoscimento giuridico) potrà comparire nella storia della pagina Chi siamo, se il cliente lo vorrà.

## 30. Barra del menu: torna il colore istituzionale

Richiesta di Fulvio: con la decisione 28 anche la barra superiore era diventata più scura, ma è il colore istituzionale e deve restare. La barra torna al gradiente dall'azzurro del logo (#009FE3) all'azzurro scuro. È un'eccezione voluta alla regola di contrasto: il bianco delle voci del menu sull'azzurro è a 3,0:1 (testo in grassetto da 17 px). Testata del modulo, fasce e pulsanti restano più scuri, come deciso al punto 28.

## 31. Un solo azzurro istituzionale per il web: #0097D8 (14/10/2026)

Proposta concordata con Fulvio. Supera in parte le decisioni 28 e 30: con un azzurro per l'header e uno più scuro per pulsanti e fasce, due colori quasi uguali sembravano un errore.
- **Azzurro web #0097D8:** è l'azzurro del logo (#009FE3) scurito appena, con una differenza di ΔE 3,3 che si vede solo mettendo i due colori fianco a fianco. Col bianco arriva a 3,3:1, la soglia WCAG AA per titoli grandi e per pulsanti con testo grande. Lo usiamo per header, fasce, testata del modulo, pulsanti, titoli e scelte attive dei moduli.
- **Scritte dei pulsanti a 19 px in grassetto** (erano 17 px): così sono "testo grande" e il 3,3:1 basta. Lo stesso vale per le scelte "Una volta sola / Ogni mese" nella colonna laterale.
- **Fascia "Crea una raccolta solidale":** sottotitolo in grassetto (21 px), per lo stesso motivo.
- **Azzurro scuro #0075B0 solo per il testo piccolo:** link nel testo, occhielli ed etichette sotto i 19 px.
- **Riquadri dei contatti** (es. "Parla con noi" nei lasciti): blu notte, come le altre informazioni.
- **Unica eccezione:** le voci del menu (17 px) sull'azzurro sono a 3,3:1, meglio di prima (3,0:1) ma sotto i 4,5:1 del testo normale. Ingrandirle a 19 px non ci starebbe in una riga.
- Il colore del logo (#009FE3) resta come riferimento (`--azzurro-logo`) per stampa e marchio.

## 32. Loghi dei sostenitori in home (14/10/2026)

Il Cottolengo ha fornito 9 loghi, che sostituiscono le caselle segnaposto della fascia "Con il sostegno e la collaborazione di", dopo Compagnia di San Paolo e Fondazione CR Firenze. Ogni logo apre in una nuova scheda il sito dell'ente:

| Ente | Link |
| --- | --- |
| Presidenza del Consiglio – Dipartimento per le Pari Opportunità | https://www.pariopportunita.gov.it/ |
| Agenda della Disabilità ("Anche noi ci impegniamo", CPD con Fondazione CRT) | https://www.agendadelladisabilita.it/ |
| Sermig – Arsenale della Pace | https://www.sermig.org/ |
| Conferenza Episcopale Italiana | https://www.chiesacattolica.it/ |
| Intesa Sanpaolo – Fondo di beneficenza | https://group.intesasanpaolo.com/it/sociale/fondo-di-beneficenza |
| Fondazione CRT | https://www.fondazionecrt.it/ |
| Fondazione Davida | https://fondazionedavida.it/ |
| Fondazione CRC | https://www.fondazionecrc.it/ |
| For a Smile Onlus | https://www.forasmile.org/ |

- I file ricevuti sono 150×150 px con molto margine bianco. Abbiamo ritagliato il bianco in eccesso e, nella fascia, i fondi chiari spariscono sul bianco (`mix-blend-mode: multiply`). Alcuni loghi restano poco nitidi: vanno richiesti in SVG o PNG da almeno 300 px.
- **Regola:** nessuna casella vuota o segnaposto. Nella fascia compaiono solo i loghi già ricevuti; i nuovi si aggiungono man mano che arrivano, ognuno con il link al sito dell'ente.
- Lo scorrimento passa a 44 secondi per giro, così la velocità resta quella di prima con 11 loghi invece di 8.
- I link sono da confermare con il Cottolengo, soprattutto quello di Intesa Sanpaolo, che porta alla pagina del Fondo di beneficenza.
- 14/10/2026: arrivati i loghi di CEI (1080 px), Fondazione Davida (336 px), Dipartimento Pari Opportunità (591 px) Fondazione CRC (566 px), Fondazione CRT (600 px), Sermig (995 px, ridotto a 400), Agenda della Disabilità (200 px), Intesa Sanpaolo (1280 px, fondo grigio chiaro portato a bianco; solo il marchio della banca, senza la dicitura del Fondo di beneficenza: il link porta comunque alla pagina del Fondo) e For a Smile (440 px, ora "Ente Terzo Settore" invece di Onlus), che sostituiscono quelli da 150 px. Il logo delle Pari Opportunità è arrivato bianco su fondo blu: lo usiamo in positivo (blu su bianco), come gli altri loghi della fascia. Tutti i loghi sono ora in alta risoluzione. I loghi molto larghi (CRC, CRT, Intesa Sanpaolo, For a Smile: rapporto 3:1 o più) hanno una casella da 200 px invece di 120, altrimenti diventano strisce alte 20 px.

## 33. Sostenitori: griglia ferma divisa per gruppi, niente scorrimento (14/10/2026)

Su proposta concordata con Fulvio, la fascia "Con il sostegno e la collaborazione di" non scorre più: tutti i loghi sono fermi, divisi in tre gruppi con un'etichetta. È la soluzione più diffusa nei siti istituzionali e non pone problemi tecnici: niente animazione, niente JavaScript, niente lista duplicata.
- **Istituzioni:** Dipartimento per le Pari Opportunità, Conferenza Episcopale Italiana.
- **Fondazioni ed enti erogatori:** Compagnia di San Paolo, Fondazione CRT, Fondazione CRC, Fondazione CR Firenze, Intesa Sanpaolo – Fondo di beneficenza, Fondazione Davida.
- **Reti e associazioni:** Agenda della Disabilità, Sermig – Arsenale della Pace, For a Smile.

Perché:
- un logo fermo si legge e si clicca, mentre uno in movimento si insegue;
- non c'è contenuto in movimento da fermare (WCAG 2.2.2): prima la pausa funzionava solo col mouse, quindi non da telefono;
- i gruppi spiegano chi sostiene l'Opera, un segnale di fiducia per chi dona.

Come è fatta:
- **Colonne fisse per gruppo, così nessun logo resta da solo su una riga.** Fondazioni: 6 colonne su desktop, 3 sotto i 1200 px, 2 su telefono. Su telefono un ultimo logo dispari si centra.
- **Altezza in base alla forma del logo, non al file.** Quadrati 80 px, medi 60 px, orizzontali 40 px, così hanno tutti un peso visivo simile.
- **Nessuna casella vuota.** Un nuovo logo si aggiunge nel suo gruppo; in WordPress diventa un campo ripetibile (logo, nome, link, gruppo).
- **Comparsa allo scorrimento:** i gruppi compaiono come il resto della pagina.

## 34. Separazione tra "Dove va la tua donazione" e i sostenitori

Le due sezioni sono entrambe bianche e le separava solo lo spazio vuoto: i due margini pieni sommati facevano circa 180–200 px, e l'occhio li leggeva come un buco. Ora c'è una linea sottile larga quanto il contenuto, la stessa usata tra i gruppi di loghi, e lo spazio si è circa dimezzato. Un fondo colorato è stato escluso perché la sezione delle testimonianze, subito sotto, ha già il fondo azzurro chiarissimo.

## 35. Testimonianze: schede ferme, niente carosello (14/10/2026)

Richiesta di Fulvio: anche le testimonianze in home non scorrono più. Le quattro testimonianze diventano schede ferme, 2 × 2 su computer e una sotto l'altra su telefono, con la stessa logica della fascia dei sostenitori (decisione 33): si leggono con calma, non c'è un movimento da mettere in pausa e lo stesso schema si usa nei siti istituzionali.
- Ogni scheda: testo della testimonianza (21 px, blu notte), poi una linea sottile e il nome con il ruolo. Le virgolette «» sono già nel testo, quindi niente segni decorativi in più.
- La sezione ha un titolo, "Le voci della Piccola Casa", da validare con il Cottolengo, e resta il link "Leggi tutte le testimonianze".
- Tolti il JavaScript del carosello (pallini, pausa, scorrimento automatico) e le relative regole CSS. Le schede compaiono allo scorrimento come il resto della pagina.
- I testi restano quelli provvisori. In WordPress diventano un campo ripetibile (testo, nome, ruolo).

## 36. Testimonianze: niente pagina dedicata, "Mostra altre" solo se servono

Il link "Leggi tutte le testimonianze" portava a una pagina del vecchio sito ed è stato tolto. Non c'è una pagina dedicata alle testimonianze.
- **Con 4 testimonianze o meno** (oggi sono 4): nessun pulsante e nessun link, la sezione finisce con le schede.
- **Con più di 4:** si vedono le prime 4 e compare il pulsante "Mostra altre testimonianze (N)", che apre le altre nella stessa sezione e le richiude ("Mostra meno testimonianze"). Il pulsante ha `aria-expanded` e `aria-controls`, e all'apertura il focus va alla prima testimonianza nuova. Senza JavaScript si vedono tutte.
- **In WordPress:** basta aggiungere voci al campo ripetibile, il pulsante compare da solo.
- **Proposta da valutare:** 1–2 testimonianze pertinenti nelle pagine tematiche (Cura, Volontariato, Sostegno a distanza, Lasciti), vicino al modulo di donazione.

## 37. Testimonianze tolte dalla home (14/10/2026)

Decisione di Fulvio, che supera le decisioni 35 e 36. La sezione delle testimonianze è stata eliminata dalla home, con il relativo codice (schede, pulsante "Mostra altre", stili).

**Perché:**
- **Suonavano false.** Erano citazioni senza cognome, senza volto e senza un fatto concreto ("Maria, ospite della casa di riposo"), con frasi troppo levigate e tutte uguali nel tono. Chi legge le percepisce come scritte da chi fa il sito.
- **Su un sito di donazioni la fiducia è il bene principale.** Una testimonianza che sembra inventata toglie credibilità anche al resto della pagina: è peggio di nessuna testimonianza.
- **Il materiale vero è difficile da avere.** Gli ospiti sono persone fragili (anziani, persone con disabilità, minori): usarne nome e volto richiede consenso e delicatezza, e spesso non è opportuno.
- **La home regge senza.** La fiducia la costruiscono già i numeri dell'Opera, il grafico "Dove va la tua donazione" e i loghi dei sostenitori, che sono elementi verificabili.

**Se in futuro il Cottolengo fornisce materiale vero**, la forma consigliata non sono le citazioni ma brevi **storie raccontate dall'Opera**: in terza persona, con un fatto concreto, una foto (anche di spalle o di dettaglio, per la privacy) e il link al progetto da sostenere. In alternativa, testimonianze di chi può firmarle con nome, cognome, ruolo e foto: volontari, operatori, suore, donatori.

## 38. Volontariato: "in Italia" e "nel mondo" (14/10/2026)

Richiesta del Cottolengo (Silvia): nella pagina Volontariato servono i due collegamenti "Volontariato in Italia" e "Volontariato nel mondo", come sulla pagina cottolengo.org/volontariato2/, ma presentati meglio. Lì sono due immagini senza testo alternativo né descrizione.
- Nuovo paragrafo "Dove puoi fare volontariato" con **due schede affiancate**, interamente cliccabili (una sotto l'altra su telefono). Ogni scheda ha un titolo, una riga di spiegazione e l'invito "Scopri come partecipare", sottolineato e senza freccia (le frecce sottili non piacciono a Fulvio).
- **Link:** https://www.cottolengo.org/volontariato-in-italia/ e https://www.cottolengo.org/volontariato-nel-mondo/, in una nuova scheda.
- **Spiegazioni**, riassunte dalle due pagine e da validare con il Cottolengo: in Italia le case in Piemonte e in altre regioni, accanto ad anziani, persone con disabilità, donne in difficoltà e bambini; nel mondo le missioni in Ecuador, Kenya, Tanzania, India e Kazakistan.
- Componente riutilizzabile (`.scelte` / `.scelta`) per altre scelte del tipo "due strade".

## 39. Cura: nuova immagine di copertina, specchiata (14/10/2026)

Fornita da Fulvio: un'operatrice sanitaria stringe la mano di una persona anziana. L'immagine è **specchiata**: le mani stanno a sinistra, dove c'è il titolo, e non a destra sotto il modulo di donazione che copre la copertina. Il file è `assets/img/pagine/cura-assistenza-anziani-cottolengo-1920.jpg` (1920 × 640, 92 KB). La vecchia `cura-cottolengo-1600.jpg` non è più usata: va eliminata su conferma.

## 40. Chi siamo, Contatti: il sottotitolo va a capo dopo i due punti (14/10/2026)

Prima il sottotitolo "Tre recapiti per tre esigenze diverse: ti risponde direttamente chi se ne occupa." finiva con "ne occupa." da solo sulla seconda riga. Adesso:

- da 900 px in su sta su una riga sola;
- sotto i 900 px va a capo dopo i due punti, così ogni frase ha la sua riga.

Le due frasi sono in `<span class="frase">` (inline-block). Il componente si può riusare per altri sottotitoli in due parti.

## 41. Moduli di donazione delle pagine interne uguali a quello della home (14/10/2026)

Fulvio ha notato che i moduli delle pagine interne avevano gli angoli quadrati e un aspetto diverso da quello della home. Erano rimasti con uno stile proprio: testata bianca, angoli a 5 px, frequenza e importi a caselle attaccate. Adesso tutti i moduli hanno lo stesso aspetto, così chi passa dalla home a una pagina interna ritrova lo stesso modulo:

- angoli arrotondati;
- testata azzurra sfumata con il titolo in bianco;
- "Una volta sola / Ogni mese" come interruttore;
- importi in pulsanti separati.

Nelle pagine interne restano solo le differenze legate alla colonna laterale:

- il modulo resta fisso mentre si scorre;
- l'ombra è più marcata;
- il campo "altro importo" va a capo a tutta larghezza.

Dalla testata dei moduli è stata tolta anche la scritta piccola sopra il titolo ("Sostieni la cura", "Donazione libera"…), per tre motivi:

- ripeteva il titolo;
- la home non ce l'ha;
- in bianco sull'azzurro, a 14 px, non raggiungeva il contrasto richiesto.

Le schede contatti a lato (5×1000, Volontariato…) non sono moduli e restano com'erano.

## 42. Pagine interne: zoom d'ingresso della foto di copertina (14/10/2026)

All'arrivo sulla pagina la foto di copertina parte leggermente ingrandita e in 6 secondi torna alla misura normale. È lo stesso gesto della hero in home, così tutto il sito ha un movimento coerente e passare da una pagina all'altra dà l'idea di "entrare" in un luogo.

**Più leggero della home, per non disturbare:**

- +5% invece di +10%;
- una volta sola, niente movimento continuo;
- si muove solo la foto: titolo, testi e modulo di donazione restano fermi;
- lo zoom è centrato sul soggetto: dove la pagina ha un punto focale (Cura, Aziende, Testamento, 5×1000) lo zoom parte da lì;
- con "riduci movimento" attivo nel sistema la foto è ferma.

Riguarda le 13 pagine con foto di copertina. È solo CSS (`.project-cover__image`, `@keyframes cover-zoom`), quindi in WordPress funziona senza modifiche.

## 43. Donazioni: il pulsante porta alla pagina di Myosotis, niente moduli incorporati (14/10/2026)

**Decisione di Fulvio.** Il pulsante "Dona" porta l'utente sulla pagina di Myosotis (dona.cottolengo.org), come avviene già oggi, con importo, frequenza e causale compilati nell'indirizzo. Il modulo Myosotis non viene incorporato nelle pagine del sito.

**Perché:**

- Myosotis ha scritto che non può garantire che i moduli incorporati funzionino al 100%, né graficamente né con tutti gli strumenti di pagamento.
- Sulla loro pagina invece tutto è gestito da loro e funziona già: carta, PayPal, Apple/Google Pay e le conferme della banca (3-D Secure).
- Per il Cottolengo vuol dire zero problemi sui pagamenti e nessuna manutenzione in più.

**Cosa chiediamo a Myosotis:** di migliorare l'aspetto della loro pagina perché sia coerente con il nuovo sito: logo, azzurro `#0097D8` e blu notte `#003B57`, pulsanti arrotondati, intestazione semplice con un link per tornare al sito. Se ne parla nella call di martedì 20 ottobre.

**Conseguenze sul sito:**

- **Dona in memoria** (`dona-in-memoria.html`) oggi contiene il modulo incorporato. Dopo la call andrà sostituito con un modulo come quelli delle altre pagine, oppure con un pulsante verso `dona.cottolengo.org/in-memoria/`.
- **Raccolte solidali:** stessa logica, cioè raccolte sulla piattaforma di Myosotis e il nostro sito che spiega e rimanda lì. Dipende da cosa offre il contratto: da verificare in call.

## 44. Dona in memoria come le pagine delle aree e "Donazione sicura" sotto ogni pulsante Dona (14/10/2026)

**Dona in memoria.** La pagina non incorpora più il modulo di Myosotis (decisione 43). Ora è fatta come Cura:

- a lato c'è il modulo con gli importi (30, 50 e 100 € o cifra libera);
- il pulsante "Dona {importo} € in memoria" apre `dona.cottolengo.org/in-memoria/?importo=…` in una nuova scheda; lì si scrive il nome della persona ricordata e si paga;
- al posto dell'elenco puntato ci sono **tre passaggi numerati** che dicono cosa succede dopo il clic (Scegli l'importo, Scrivi il nome, Completa il pagamento in sicurezza).

Spiegare prima i passaggi, dicendo che si passa alla pagina ufficiale, evita la sorpresa del cambio di pagina e dà fiducia.

**"Donazione sicura" sotto ogni pulsante Dona.** È un riquadro con lucchetto e testo: "Donazione sicura. Completi il dono sulla pagina ufficiale del Cottolengo, dona.cottolengo.org." I grandi enti mettono un rassicuratore come questo vicino al pulsante di pagamento, perché nel momento in cui si dona chi legge vuole sapere dove finiscono i suoi dati. Il riquadro è in tutti gli 8 moduli: home, quattro aree, Family Cottolengo, Testamento e Dona in memoria. Per credibilità ha un tono sobrio: bordo azzurro chiaro, testo blu notte, nessun bollino colorato o finto "certificato".

**Cose da verificare con Myosotis nella call del 20/10:**

- che la pagina `/in-memoria/` legga il parametro `importo`;
- quali metodi di pagamento elencare, se si vuole aggiungerli al riquadro. Per ora non sono indicati, perché non sono confermati.

Le regole CSS del vecchio modulo incorporato (`.modulo-incorporato…`) non sono più usate: si possono eliminare, su conferma.

## 45. Dona in memoria: solo il pulsante verso Myosotis, come esempio (14/10/2026)

**Richiesta di Fulvio:** vedere come viene la pagina con il solo pulsante che porta alla pagina di Myosotis, senza modulo con gli importi sul nostro sito. Sostituisce il modulo descritto nella decisione 44 per questa pagina; il riquadro "Donazione sicura" resta.

Nel riquadro a lato ci sono, in quest'ordine:

- il titolo "Dona in memoria";
- una riga che dice cosa si farà ("Scegli l'importo e scrivi il nome della persona che vuoi ricordare: bastano pochi minuti");
- **un solo pulsante grande** (64 px di altezza, con il cuore) che apre `dona.cottolengo.org/in-memoria/` in una nuova scheda;
- sotto, "Donazione sicura" e la nota fiscale.

I tre passaggi nel testo sono stati adattati: premi il pulsante, scegli l'importo e scrivi il nome, completa il pagamento.

**Confronto tra le due soluzioni, per decidere con il cliente:**

| | Modulo con importi (Cura, Accoglienza…) | Solo pulsante (Dona in memoria) |
| --- | --- | --- |
| Sul nostro sito | Si sceglie importo e frequenza | Nessuna scelta, solo il pulsante |
| Su Myosotis | Si arriva con l'importo già compilato | Si sceglie tutto lì |
| Pro | Il dono "parte" già dal sito; il testo d'impatto mostra cosa fa l'importo scelto | Zero dipendenze dai parametri di Myosotis; massima semplicità |
| Contro | Serve che Myosotis legga i parametri | Un passaggio in più sulla loro pagina |

Il riquadro (`.dona-link`) è pronto per essere riusato su altre pagine, se si sceglie questa strada.

## 46. Dona in memoria: foto di copertina specchiata (14/10/2026)

Nella foto originale il volto dell'anziano sta a destra e finiva dietro il riquadro "Dona in memoria". La foto è stata **specchiata**: il volto ora sta a sinistra, sotto il titolo, e resta visibile. Il titolo si legge bene grazie alla sfumatura scura già presente sul lato sinistro. È la stessa soluzione usata per Cura (decisione 39).

Il nuovo file è `assets/img/pagine/dona-in-memoria-anziano-sorriso-cottolengo-1600.jpg` (1600 × 1000). Il vecchio `dona-in-memoria-cottolengo-1600.jpg` non è più usato e va eliminato, su conferma.

## 47. 5×1000: meno spazio tra il codice fiscale e "Come si firma" (14/10/2026)

Le due sezioni sono entrambe su bianco. Con il respiro pieno di ogni sezione, tra il pulsante "Copia codice fiscale" e il titolo "Come si firma" restavano circa 190 px vuoti su computer, e sembrava un buco. Ora lo spazio è di **96 px** a tutte le larghezze. Le due parti si leggono come un unico discorso: prima il codice, poi come usarlo.

In CSS: `.cpm-codice { padding-bottom: var(--s-6) }` e `.cpm-codice + .chi-blocco { padding-top: var(--s-8) }`.

## 48. Missioni internazionali: solo pulsante verso Myosotis, come Dona in memoria (15/10/2026)

Su richiesta di Fulvio, anche Missioni internazionali usa il riquadro con **il solo pulsante** (decisione 45), al posto del modulo con frequenza e importi. Il riquadro contiene:

- il titolo "Dona per le missioni";
- la riga "Scegli quanto donare, una volta sola o ogni mese: bastano pochi minuti";
- il pulsante grande "Dona per le missioni", che apre `dona.cottolengo.org` in una nuova scheda;
- il riquadro "Donazione sicura" e la nota fiscale.

In fondo al testo sono stati aggiunti i **tre passaggi numerati**: premi il pulsante, scegli importo e frequenza, completa il pagamento.

**Da verificare con Myosotis (call del 20/10):**

- se esiste una pagina dedicata alle missioni, da collegare al pulsante al posto dell'indirizzo generico;
- che sulla loro pagina si possa scegliere anche la donazione mensile, come dice la riga del riquadro.

Le pagine con il solo pulsante oggi sono Dona in memoria e Missioni internazionali. Hanno ancora il modulo con gli importi la home, Cura, Accoglienza, Educazione, Family Cottolengo e Testamento.

## 49. Home, "Chi aiuti con il tuo gesto": la descrizione dice che si dona per i progetti (15/10/2026)

Il titolo resta "Chi aiuti con il tuo gesto"; cambia solo la descrizione sotto.

- **Prima:** "Dietro ogni donazione c'è un volto. Questi sono i nostri ospiti, la nostra famiglia."
- **Ora:** "Tutti i progetti del Cottolengo sono divisi in quattro aree. Scegli quella che ti sta più a cuore: la tua donazione sosterrà i suoi progetti."

**Perché.** La descrizione di prima era emotiva, ma non spiegava cosa sono le quattro schede. Ora si capisce che Cura, Accoglienza, Educazione e Missioni sono le aree in cui sono divisi **tutti** i progetti e che si dona **per i progetti** dell'area scelta. Sul computer la descrizione va a capo dopo la prima frase (`<span class="frase">`, decisione 40).

## 50. Schede delle quattro aree: foto 4:3 e nuove immagini generate con l'AI (15/10/2026)

**Formato.** Nelle schede Cura, Accoglienza, Educazione e Missioni (home e Chi siamo) le foto passano da 16:10 a **4:3**. Sono più alte, quindi su telefono riempiono meglio la scheda; sul computer, con quattro schede in fila, restano equilibrate. Va bene un solo ritaglio per tutte le larghezze, con il soggetto al centro.

**Misure da fornire:** 1200 × 900 e 800 × 600 px, in JPEG. Il sito sceglie da solo quella giusta (`srcset`): 800 sugli schermi normali, 1200 su quelli ad alta densità.

**Immagini generate con l'AI.** Fulvio le genera con ChatGPT partendo da prompt che hanno uno stile comune: foto documentaristica, luce naturale, colori vivi ma veri, bianco e azzurro chiaro sullo sfondo. Soprattutto, **nessun volto riconoscibile**: mani, gesti e dettagli. Così le immagini sono belle e nessuno può scambiarle per ospiti reali del Cottolengo; è la stessa attenzione alla credibilità della decisione 37.

**Arrivate finora:**

- **Cura:** le mani di un'operatrice stringono quelle di una persona anziana su una coperta azzurra (`cura-cottolengo-mani-operatrice-anziano-800/1200.jpg`);
- **Accoglienza:** una tavola apparecchiata in cui ci si passa il cestino del pane, con una persona in carrozzina tra i commensali (`accoglienza-cottolengo-tavola-pane-800/1200.jpg`);
- **Educazione:** un bambino scrive sul quaderno mentre l'insegnante e un compagno indicano la pagina (`educazione-cottolengo-quaderno-mani-800/1200.jpg`);
- **Missioni:** bambini in divisa, visti di spalle, camminano al tramonto su un sentiero di terra rossa verso la scuola (`missioni-cottolengo-bambini-scuola-800/1200.jpg`).

Le quattro schede ora hanno tutte immagini dello stesso stile.

**Da decidere con il cliente:** se le immagini generate con l'AI vanno indicate come tali (per esempio con una nota nei crediti), in linea con le nuove regole europee sull'AI. Le vecchie `cura-cottolengo-mani-assistenza-800.jpg`, `accoglienza-cottolengo-famiglia-800.jpg`, `educazione-scuole-cottolengo-800.jpg` e `missioni-internazionali-cottolengo-bambini-800.jpg` non sono più usate nelle schede e vanno eliminate, su conferma.

## 51. Compatibilità tra browser: verifica e una correzione (15/10/2026)

**Verifica.** Il sito usa solo HTML, CSS e JavaScript standard, senza librerie esterne. Le tecnologie più recenti sono usate in modo che, se un browser non le conosce, la pagina resti comunque usabile:

- titoli a capo bilanciato (`text-wrap`);
- selettore `:has()`;
- misure `dvh` e `svh`, che hanno sempre una misura `vh` di riserva.

Controlli fatti: 15 pagine a 7 larghezze, con e senza "riduci movimento"; 146 controlli di funzionamento; simulazione iPhone 13; navigazione senza JavaScript (si vede la prima slide del carosello e il pulsante Dona c'è sempre).

**Correzione.** Su telefono il footer lascia spazio alla barra fissa "Dona ora" con una regola valida per tutti i browser. Prima la regola passava da `body:has(.sticky-dona)`, che Safari prima della 15.4 e Firefox prima della 121 non leggono: lì la barra poteva coprire l'ultima riga del footer.

**Limite.** I test automatici girano su Chrome. Per Safari (iPhone e Mac) e Firefox c'è la lista di controllo a mano nel progetto: `claude/checklist-test-dispositivi.md`.

## 52. La logica "perché → cosa → come" in home e nelle pagine delle aree (15/10/2026)

**Cosa cambia**

1. **Home: le quattro aree vengono prima di "Come fare del bene".** Il nuovo ordine:
   - carosello e modulo "Dona ora";
   - numeri;
   - **Chi aiuti con il tuo gesto** (il cosa);
   - **Come fare del bene** (il come);
   - raccolte solidali;
   - dove va la tua donazione;
   - sostenitori.

   Prima "Come fare del bene" stava sopra le quattro aree.

   **Il "perché" della home c'è già: è il testo accanto al modulo.** "Fare bene fa bene al cuore. Ogni giorno il Cottolengo accoglie anziani soli, persone con disabilità, bambini e famiglie in difficoltà. Bastano pochi euro per fare molto." dice chi aiuta l'Opera e perché donare, nel punto in cui si dona. Per questo **non si aggiunge una fascia "perché" separata**, che sarebbe un doppione. Il percorso della home è quindi:
   - **perché:** il testo accanto al modulo;
   - **cosa:** i numeri, le quattro aree e l'esempio d'impatto nel modulo ("Con 35 € offri 7 pasti caldi");
   - **come:** "Come fare del bene" e il pulsante Dona.
2. **Pagine delle aree (Cura, Accoglienza, Educazione, Missioni) in tre blocchi, ognuno con un occhiello visibile:**
   - **PERCHÉ:** chi aiutiamo e di cosa ha bisogno (il testo che c'era già);
   - **COSA FA IL TUO DONO:** "Dove arriva il tuo aiuto", con perché servono le donazioni, l'elenco dei servizi e **tre esempi con cifra** ("00 € = …"). Le cifre e le descrizioni sono **segnaposti tratteggiati, da confermare con il Cottolengo**, e nella pagina c'è la nota "Esempi indicativi, da confermare";
   - **COME DONARE:** "Bastano tre passaggi", numerati, come in Dona in memoria.

**Perché: i principi su cui si basa**

- **Il percorso del donatore: perché → cosa → come.** Chi arriva su un sito di raccolta fondi vuole capire prima *chi aiuta* e *a cosa serve* il dono, poi *come* farlo. Le ricerche di Nielsen Norman Group sui siti di donazione hanno trovato che la maggior parte dei problemi degli utenti nasce dalla mancanza di informazioni su cosa fa l'ente e dove vanno i soldi, non dai moduli.
- **Prima la motivazione, poi lo strumento.** È il principio dei modelli sul comportamento (Fogg: motivazione + facilità + stimolo) e del classico AIDA (attenzione, interesse, desiderio, azione). Mostrare gli strumenti (5×1000, lasciti, sostegno a distanza…) prima delle persone aiutate è come mostrare il carrello prima del prodotto.
- **Coerenza con il menu.** Il menu dice già Chi siamo → Progetti → Come aiutarci; se la home segue lo stesso ordine, l'utente si orienta meglio.
- **Cifre concrete.** "Con 50 € offri…" trasforma un gesto astratto in un risultato visibile. Le grandi organizzazioni usano questi esempi perché aumentano la fiducia e aiutano a scegliere l'importo. Per questo le cifre devono essere **vere**: inventarle sarebbe lo stesso errore delle testimonianze finte (decisione 37).
- **Gli occhielli rendono la logica leggibile anche a chi scorre veloce,** che è la maggioranza su telefono.
- **I siti di riferimento** (UNICEF, Lega del Filo d'Oro, EMERGENCY) mettono "cosa facciamo / chi aiutiamo" prima di "come puoi aiutare".

**Cosa si perde.** Il 5×1000 scende un po' nella home. Resta però nella prima slide del carosello e ha una voce propria nel menu.

**Come verificarlo.** Sono principi consolidati, non leggi. Una volta online conviene misurare con Analytics i clic su ogni sezione e le donazioni completate, ed eventualmente fare un test A/B tra i due ordini.

**Da chiedere al Cottolengo:** per ogni area, 3 esempi veri "cifra → cosa permette" (vedi `claude/richieste-contenuti-cliente.md` nel progetto).

## 53. Home: un "perché" più chiaro accanto al modulo, e su telefono prima del modulo (15/10/2026)

**Testo.** Il titolo resta "Fare bene fa bene al cuore.". Cambia il testo sotto.

- **Prima:** "Ogni giorno il Cottolengo accoglie anziani soli, persone con disabilità, bambini e famiglie in difficoltà. Bastano pochi euro per fare molto."
- **Ora:** "Dal 1828 il Cottolengo è una casa per chi è solo e fragile: anziani, persone con disabilità, bambini e famiglie in difficoltà. Insieme a te possiamo continuare ad accoglierli. **Bastano 35 € per offrire 7 pasti caldi.**"

**Perché.** Un buon "perché" deve dare, in poche righe, quattro cose:

| Serve | Nel testo |
| --- | --- |
| **Fiducia** | "Dal 1828": quasi 200 anni di storia contano più di qualsiasi aggettivo |
| **Motivazione** | "chi è solo e fragile": il bisogno, detto in modo umano |
| **Legame** | "una casa", "insieme a te": il donatore entra nella famiglia, non fa beneficenza a distanza |
| **Risultato concreto** | "35 € = 7 pasti caldi": al posto del generico "pochi euro per fare molto" |

La cifra coincide con l'importo proposto nel modulo ("il più scelto", 35 €) e con il suo testo d'impatto: il testo prepara la scelta che si fa subito dopo.

**Ordine su telefono.** Prima il modulo stava sopra e il testo sotto, quindi chi apriva il sito vedeva "Dona" prima di sapere perché. Ora vengono prima il titolo e il testo (circa 6 righe), poi il modulo, poi la foto. Il modulo resta a portata di pollice e la barra fissa "Dona ora" è comunque sempre visibile scorrendo.

**Da confermare con il Cottolengo:** "35 € = 7 pasti caldi" (come gli altri esempi d'impatto, vedi `claude/richieste-contenuti-cliente.md`).

**Se il modulo della home diventa "solo pulsante" verso Myosotis** (probabile, come Dona in memoria e Missioni), il testo funziona lo stesso: "35 € = 7 pasti" resta un esempio concreto e non dipende più da un importo proposto nel modulo. In quel caso, su telefono, l'ordine testo → pulsante diventa ancora più naturale.

## 54. Revisione di qualità formale: codice, accessibilità, prestazioni, motori di ricerca (15/10/2026)

**Obiettivo.** Il sito deve rispettare i criteri formali di un sito istituzionale di raccolta fondi, perché il suo scopo è far crescere le donazioni in modo misurabile (piano di misurazione nel progetto: `claude/piano-misurazione-donazioni.md`).

**Strumenti usati** (gli stessi delle verifiche professionali):

- `html-validate`: correttezza del codice HTML;
- `axe-core`: accessibilità secondo WCAG 2.2 AA più le buone pratiche;
- Lighthouse di Google: prestazioni, accessibilità, buone pratiche e SEO;
- i nostri test: 15 pagine × 7 larghezze e 146 controlli di funzionamento;
- confronto pixel per pixel prima/dopo, per essere sicuri che l'aspetto non cambiasse.

**Corretto**

- **Codice HTML valido su tutte le pagine.** Pulsanti del menu con `type="button"`, numeri di telefono che non si spezzano a fine riga, etichette ARIA tolte dove non erano ammesse, vecchia pagina Progetti senza errori di struttura. Restano 4 `role="list"` voluti: servono a VoiceOver su Safari, che altrimenti non annuncia gli elenchi senza pallini.
- **Accessibilità: zero violazioni con axe** (WCAG 2.2 AA e buone pratiche), su tutte le pagine, a 1440 e 390 px.
  - Il riquadro di donazione a lato non è più un `<aside>` dentro un'altra area.
  - La barra fissa "Dona ora" è un'area propria ("Donazione rapida").
  - Le slide del carosello seguono lo schema ufficiale W3C (`role="group"`).
  - I titoli seguono l'ordine giusto.
- **Prestazioni: home da circa 4 MB a 0,66 MB,** con lo stesso aspetto.
  - Bambina in WebP (36 KB al posto di 1,1 MB).
  - Pennello in PNG ridotto (39 KB al posto di 816 KB).
  - Foto delle schede "Come fare del bene" a 800 px: erano a 1920 px fino a 2,2 MB l'una.
  - Copertine delle pagine in WebP con versione da 960 px per telefono.
  - Misure (`width`/`height`) su tutte le immagini, così la pagina non "salta" mentre carica.
  - I JPG e i PNG originali restano come riserva per i browser che non leggono WebP.
- **Pagina 404** con header, footer, pulsante Dona e link utili, così chi sbaglia indirizzo non si perde.
- **Icone:** favicon a 32 px, icona per la schermata Home di iPhone e colore del browser azzurro su telefono.
- **Dati strutturati (schema.org, tipo NGO)** in home: nome, codice fiscale, indirizzo e contatti dell'ente. Aiutano Google a mostrare l'ente correttamente. L'URL verrà aggiunto con il dominio definitivo.
- **Blocco per i motori di ricerca sul sito di prova** (`noindex, nofollow`). Il sito su GitHub ha testi provvisori, segnaposti "00 €" e un indirizzo che non sarà quello definitivo: non deve comparire su Google. **Va tolto al lancio.** Per questo Lighthouse dà ora un punteggio SEO più basso: è voluto.

**Risultati Lighthouse (telefono, server di prova senza compressione)**

| Pagina | Prestazioni | Accessibilità | Buone pratiche | SEO* |
| --- | --- | --- | --- | --- |
| Home | 80 | 100 | 100 | 100 |
| Cura | 93 | 100 | 100 | 100 |
| Dona in memoria | 91 | 100 | 100 | 100 |
| Chi siamo | 89 | 100 | 100 | 100 |

\* Misurato prima del blocco `noindex`. Online, con la compressione di GitHub Pages, le prestazioni salgono ancora.

**Non toccato, di proposito**

- **I caratteri Helvetica** pesano circa 106 KB l'uno. Si potrebbero alleggerire tenendo solo le lettere usate, ma è una modifica del file del carattere e va prima verificata la licenza.
- **Il CSS non è compresso a mano:** lo comprime il server (GitHub Pages; in WordPress, il tema o la cache).

**Incoerenza di contenuto da sistemare con il cliente:** in home la fascia dei numeri dice "97.000 pasti", il carosello e la pagina Accoglienza "oltre 110.000 pasti ogni anno". Serve il dato giusto.

## 55. Telefono: header e carosello come UNICEF (19/10/2026)

Riferimento indicato da Fulvio: la home di unicef.it su telefono. Non per copiarla, ma per avere le stesse misure, che sono collaudate per la leggibilità.

**Header su telefono (fino a 720 px), stesse misure di UNICEF** (lette con il browser su iPhone 13):

| | UNICEF | Cottolengo |
| --- | --- | --- |
| Altezza header | 60 px | 60 px |
| Margini laterali | 20 px | 20 px |
| Menu (tre linee), a sinistra | 36 × 36 px | 36 × 36 px |
| Logo | alto 25 px, a 16 px dal menu | alto 25 px, a 16 px dal menu |
| Pulsante "Dona ora", a destra | 32 px di altezza, testo 16 px, margine interno 12 px | uguale (110 px di larghezza invece di 100, per il cuoricino) |

Su tablet (fino a 1160 px) vale lo stesso ordine: menu a sinistra, logo e "Dona ora" a destra. Prima, su telefono, "Dona ora" era nascosto.

**Carosello su telefono e tablet in verticale (fino a 800 px), come UNICEF:**

- **Foto a tutto schermo,** alta circa il 60% dello schermo sotto il menu (`clamp(470px, 64svh, 580px)`) e inquadrata sul soggetto (`--fuoco-telefono`). Per i Lasciti c'è un ritaglio dedicato (`…-nonno-nipote-telefono-800/1200.jpg`), perché nell'originale nonno e nipote sono piccoli sul bordo destro.
- **Testo bianco sovrapposto in basso,** su una sfumatura scura che copre solo il terzo inferiore: la parte alta della foto resta pulita. Il velo bianco che prima spegneva le foto chiare è stato tolto.
- **Proporzioni più leggere:**
  - titolo intorno ai 26–30 px, prima arrivava a 38;
  - pulsante alto 48 px, a tutta larghezza;
  - occhiello bianco e pallini in basso.
- Su telefono niente zoom d'ingresso.
- Sopra gli 800 px il carosello resta com'era.

Una prima versione (foto sopra e testo sotto su una banda blu notte) è stata scartata da Fulvio: la banda blu era troppo pesante.

**Da migliorare con il cliente:** le immagini del carosello sono pensate per il computer (orizzontali, soggetto su un lato, fondo bianco). Per un risultato davvero come UNICEF servono foto vere a tutto campo, con una versione verticale per telefono.

## 56. Tutte le donazioni e le raccolte solidali su Myosotis: solo il pulsante (20/10/2026)

**Decisione presa nella riunione del 20 ottobre** tra Cottolengo, Myosotis (NP Solutions) e Noodles.

- **Donazioni.** Tutte le donazioni si fanno sulla pagina di Myosotis. Sul nostro sito non ci sono più moduli con importi e frequenza: ogni riquadro di donazione ha **solo un testo e un pulsante** che apre il modulo Myosotis in una nuova scheda. È lo stesso schema già usato in Dona in memoria e in Missioni internazionali (decisioni 45 e 48).
- **Moduli dedicati.** Myosotis creerà un **modulo dedicato per ogni pagina**. Finché non arrivano gli indirizzi, tutti i pulsanti puntano a `https://dona.cottolengo.org/`. Ogni pulsante ha l'attributo `data-modulo` (es. `cura`, `accoglienza`) e un commento "DA AGGIORNARE", così si trovano e si cambiano subito.
- **Raccolte solidali.** Sono **gestite interamente da Myosotis**, cioè la strada A degli appunti per la riunione. La pagina `crowdfunding.html` spiega e porta lì con il pulsante "Crea la tua raccolta". Prima il pulsante non portava da nessuna parte.

**Pagine cambiate.**

| Pagina | Titolo del riquadro | Pulsante | Modulo dedicato |
| --- | --- | --- | --- |
| Home | nessun riquadro, solo il pulsante sotto il testo (decisione 57); dal 21/10 porta a dona.html (decisione 62) | Dona ora | — |
| Cura | Dona per la cura | Dona per la cura | cura |
| Accoglienza | Dona per l'accoglienza | Dona per l'accoglienza | accoglienza |
| Educazione | Dona per l'educazione | Dona per l'educazione | educazione |
| Family Cottolengo | Adotta un ospite | Adotta un ospite | family-cottolengo |
| Testamento solidale | Vuoi donare ora? | Dona ora | donazione libera |
| Raccolte solidali | Crea la tua raccolta | Crea la tua raccolta | raccolte solidali |
| Per le aziende (decisione 59) | Dona come azienda | Dona come azienda | aziende |

Erano già così Missioni internazionali (`/`) e Dona in memoria (`/in-memoria/`).

**Cosa resta uguale.**

- Riquadro con testata azzurra, angoli arrotondati, "Donazione sicura" e nota fiscale.
- Pulsante grande, alto 64 px, con il cuore.
- Barra fissa "Dona ora" su telefono.

**Testi.**

- Nelle pagine delle aree, i passaggi di "Come donare" ora sono: premi il pulsante, scegli importo e frequenza su Myosotis, completa il pagamento.
- In home e nei Lasciti resta l'esempio "con 35 € offri 7 pasti caldi", da confermare con il Cottolengo.
- Su Raccolte solidali il riquadro sicurezza dice che le donazioni arrivano direttamente all'Opera e indica la mail infodonazioni@cottolengo.org.

**Perché.**

- È la soluzione più sicura: pagamenti, ricevute e conferme della banca restano sulla piattaforma che li garantisce.
- Ogni pagina ha un solo invito chiaro.
- Togliendo la scelta dell'importo dal nostro sito, il donatore la fa una volta sola, sul modulo Myosotis, invece di farla due volte.

**Codice.**

- I file `js/importo.js`, `js/project-detail.js` e `js/testamento-solidale.js` non sono più caricati da nessuna pagina. Restano nella cartella finché non si decide di eliminarli.
- In `js/main.js` il codice del vecchio modulo della home non si attiva più, perché non trova i suoi campi.

**Verifiche.**

- `html-validate`: nessun errore nuovo.
- axe: 0 violazioni.
- 15 pagine × 7 larghezze: nessun problema.
- Controlli di funzionamento: 137, tutti superati. Su 9 pagine, a 1440 e 390 px, si verifica che non ci siano moduli, che il pulsante porti a dona.cottolengo.org in una nuova scheda e che sia alto almeno 48 px.

## 57. Home: solo il pulsante "Dona ora" sotto il testo, la bambina di fianco (20/10/2026)

**Problema.** Con il solo pulsante (decisione 56) il riquadro di donazione in home era diventato basso. Restava appeso in alto a destra, con un grande vuoto sotto, mentre la bambina era in basso a sinistra.

**Soluzione, chiesta da Fulvio.**

- **Niente riquadro in home.** Sotto il titolo "Fare bene fa bene al cuore." e il testo c'è **solo il pulsante "Dona ora"**. Il pulsante è grande (64 px), con il cuore, e apre il modulo Myosotis in una nuova scheda.
- **La bambina a destra, di fianco al testo,** appoggiata alla fascia dei numeri. Nella foto originale guarda verso destra, cioè fuori dalla pagina: l'immagine è **specchiata** perché guardi verso il testo e il pulsante. È lo stesso principio della copertina di Cura (decisione 39).
- **La hero è alta quanto il suo contenuto.** Prima riempiva lo schermo per far posto al modulo; ora è alta circa 550–650 px su computer.
- **Su tablet e telefono** l'ordine è testo, pulsante, bambina. Su telefono il pulsante è largo quanto lo schermo. Qui la foto non è specchiata, perché sta sotto il testo e non di fianco.

**Misure.**

- Colonne 1,1 : 1.
- La foto è alta `clamp(380px, 40vw, 580px)`: 576 px a 1440.
- La parte trasparente della foto sborda sotto il testo; la bambina resta nella colonna di destra.

**Cosa si perde.** In home non ci sono più il riquadro "Donazione sicura" e la nota fiscale vicino al pulsante. Restano nel footer (IBAN e codice fiscale) e su tutte le pagine interne.

**Verifiche.**

- 15 pagine × 7 larghezze: nessun problema.
- Controlli di funzionamento: 137 su 137.
- axe: 0 violazioni.
- Nessuno scorrimento orizzontale.

## 58. Home: bambina a sinistra, testo e pulsante a destra (20/10/2026)

**Richiesta di Fulvio.** Rispetto alla decisione 57, si invertono le due colonne della hero della home:

- la **bambina a sinistra**, appoggiata alla fascia dei numeri;
- a destra il titolo, il testo e il pulsante **"Dona ora"**.

**Foto.** La foto torna nel verso originale, non specchiata: la bambina guarda già verso destra, cioè verso il testo e il pulsante. Il suo sguardo accompagna l'occhio verso l'invito a donare.

**Misure.**

- Colonne 1 : 1,1.
- La foto è alta `clamp(380px, 40vw, 580px)`, appoggiata in basso a sinistra.
- La parte trasparente della foto sborda a destra, sotto il testo.

**Tablet e telefono.** Nessun cambiamento: testo, pulsante e poi la bambina sotto.

## 59. Per le aziende: riquadro "Dona come azienda" verso Myosotis (20/10/2026)

**Richiesta di Fulvio.** Anche le donazioni aziendali devono avere il loro riquadro di donazione, come le altre pagine (decisione 56).

**Riquadro.**

- Titolo e pulsante: **"Dona come azienda"**.
- Testo: "Scegli quanto donare a nome della tua impresa, una volta sola o con continuità: bastano pochi minuti."
- Sotto il pulsante, come nelle altre pagine, "Donazione sicura" e la nota fiscale.
- Il pulsante apre in una nuova scheda il modulo Myosotis. **DA AGGIORNARE:** per ora punta a `dona.cottolengo.org`, finché NP Solutions non crea il modulo dedicato `aziende` (`data-modulo="aziende"`).

**Posizione.** Nelle altre pagine il riquadro sale sopra la copertina. Qui non è possibile: nella foto le cinque persone occupano tutta la metà destra, e il riquadro le coprirebbe. Su computer il riquadro parte quindi **sotto la copertina**, accanto a "Donazioni aziendali" (`.project-sidebar--sotto`). Su tablet e telefono resta come nelle altre pagine: subito sotto la copertina, prima del testo.

**Da chiedere al Cottolengo.** Servono le informazioni fiscali specifiche per le imprese, cioè la deducibilità secondo l'art. 83 del Codice del Terzo Settore, da scrivere vicino al pulsante. Va chiesto anche se le ricevute per le aziende si richiedono da Myosotis o all'ufficio.

## 60. Pagina "Dona" (dona.html): prototipo del modulo Myosotis con stile "da banca" (21/10/2026)

**Richiesta di Fulvio.** Rifare dentro il nostro sito la pagina di donazione di Myosotis (dona.cottolengo.org), impaginata come il sito. Il pulsante "Dona ora" dell'header deve portare a questa pagina. Lo stile deve essere serio e sicuro, "da banca", meno giocoso del resto del sito. La pagina servirà poi come modello da passare a Myosotis, anche in Figma.

**Nessun dato inventato.** Passaggi, campi e testi sono quelli del modulo Myosotis attuale:

- tipo di donazione: "Donazione libera, per le Opere di Carità";
- ricorrenza: singola oppure continuativa (mensile, trimestrale, annuale);
- importi: 50, 100 e 200 €, più un importo libero;
- tipo di donatore: individuo oppure organizzazione;
- dati richiesti, se individuo: nome, cognome, email, codice fiscale, indirizzo, civico, CAP, comune, provincia, nazione, cellulare;
- dati richiesti, se organizzazione: ragione sociale e partita IVA, al posto di nome, cognome e codice fiscale;
- due consensi: informativa privacy e comunicazioni;
- metodi di pagamento: carta di credito, PayPal, Satispay, bonifico bancario, bollettino postale.

**È un prototipo.** Il modulo non invia nessun dato. Un riquadro in alto lo dichiara e all'ultimo passaggio compare l'avviso "qui si aprirebbe il pagamento sicuro". Non ci sono campi per i dati della carta: quelli restano sulla pagina di pagamento della piattaforma.

**Modelli copiati.**

- **Checkout di Stripe e delle banche online:**
  - fondo grigio chiarissimo, schede bianche con bordo sottile;
  - angoli di 6–10 px, non a pillola;
  - pulsanti rettangolari blu notte, con il lucchetto su "Dona";
  - nessun cuore, badge o colore caldo.
- **Moduli di donazione delle grandi ONG:**
  - **tre passaggi numerati** (Donazione, I tuoi dati, Pagamento);
  - riepilogo sempre visibile: a lato su computer, in alto su telefono;
  - riquadro con il costo dopo la detrazione;
  - contatti per chi ha bisogno di aiuto.
- **Regole di Baymard Institute** per i moduli:
  - una sola colonna di campi, salvo gruppi che vanno insieme (nome e cognome, indirizzo e civico, CAP, comune e provincia);
  - etichette sopra il campo, sempre visibili;
  - scelte a pulsanti invece delle tendine (frequenza, importo, tipo di donatore);
  - errori chiari vicino al campo e un elenco in alto, con link a ogni campo da correggere;
  - "(facoltativo)" scritto solo sul campo facoltativo.

**Migliorie rispetto al modulo Myosotis attuale**, tutte senza aggiungere campi:

- passaggi numerati invece di una pagina lunga;
- importo e riepilogo sempre in vista;
- maiuscole automatiche per codice fiscale e provincia;
- tastiera numerica per CAP, partita IVA e importo;
- `autocomplete`, così il browser compila i campi da solo;
- controllo di codice fiscale (16 caratteri), partita IVA (11 cifre) e CAP italiano (5 cifre);
- Italia come nazione predefinita, in cima all'elenco;
- privacy con una casella da spuntare;
- comunicazioni con Sì/No senza preselezione, come richiede il GDPR;
- per le aziende non compare la detrazione IRPEF, che vale solo per le persone fisiche;
- il tasto Invio in un campo porta al passaggio successivo invece di inviare.

**Accessibilità.**

- Il passaggio corrente è indicato con `aria-current="step"`; il focus va sul titolo del nuovo passaggio.
- Errori con `aria-invalid` e messaggio collegato al campo.
- Campi alti 50 px con testo a 17 px, così l'iPhone non ingrandisce la pagina.
- Verifiche: axe, 0 violazioni; HTML valido; nessuno scorrimento orizzontale da 320 a 1440 px.

**Da confermare.**

- **Detrazione del 30%** (art. 83 c. 1 D.Lgs. 117/2017, persone fisiche) e il testo del riquadro: su Myosotis il testo ha segnaposti ancora vuoti.
- **Link all'informativa privacy:** oggi rimanda a dona.cottolengo.org, va collegato al PDF ufficiale.
- **Importo minimo:** oggi è 1 €.
- **Importo preselezionato:** oggi è 100 €, quello centrale; su Myosotis nessun importo è preselezionato.

**Tutti i pulsanti "Dona ora" dell'header** (17 pagine) portano ora a `dona.html`. I pulsanti nei riquadri delle singole pagine continuano invece a portare a Myosotis (decisione 56).

## 61. Pagina Dona: una sola pagina, niente passaggi, testo più grande (21/10/2026)

**Perché.** Fulvio ha fatto notare che il modulo Myosotis è una pagina unica e che i tre passaggi della decisione 60 li avevamo aggiunti noi. La parola d'ordine è **semplicità**: il pubblico è in gran parte anziano.

**Cosa cambia rispetto alla decisione 60.**

- **Pagina unica.** Tutto il modulo è visibile e si compila scorrendo. Non ci sono passaggi nascosti né pulsanti "Continua" e "Indietro": non c'è niente da ricordare né pagine in cui perdersi.
- **Tre sezioni numerate** con un cerchio blu notte: 1 La tua donazione, 2 I tuoi dati, 3 Metodo di pagamento. L'ordine dà comunque la sensazione di un percorso guidato e sicuro.
- **Un solo pulsante**, in fondo: "Dona 100 €", con il lucchetto. L'importo nel pulsante si aggiorna con la scelta.
- **Controllo dei campi solo quando si preme "Dona".** In cima al modulo compare l'elenco degli errori; ogni voce porta al campo da correggere. Anche ogni campo sbagliato è segnato in rosso, con la spiegazione sotto. Il messaggio sparisce mentre si scrive la correzione, non quando si esce dal campo: così la pagina non si sposta mentre si clicca altrove.
- **Il tasto Invio dentro un campo non fa partire la donazione:** si dona solo premendo il pulsante.
- **Per Myosotis il cambio è solo grafico:** campi, ordine e funzionamento sono già quelli del loro modulo.

**Più grande, per chi vede meno bene.**

- Etichette: 17 px in grassetto.
- Campi: alti 54 px, testo a 18 px.
- Importi: pulsanti da 60 px, testo a 21 px.
- Metodi di pagamento: righe da 60 px.
- Casella della privacy: 26 px.
- Pulsante "Dona": alto 60 px, testo a 19 px; su telefono è largo quanto lo schermo.
- Testi di aiuto e note: almeno 15 px.

**Resta come nella decisione 60.**

- Lo stile "da banca".
- Il riepilogo a lato su computer; su telefono va in alto.
- Le migliorie ai campi e la detrazione da confermare.
- È ancora un prototipo: il modulo non invia dati.

**Verifiche.**

- axe: 0 violazioni.
- HTML valido.
- Nessuno scorrimento orizzontale da 320 a 1920 px.
- Prova completa a 1440 e 390 px:
  - premendo "Dona" a modulo vuoto compaiono 12 errori, e il focus va sull'elenco;
  - con il modulo compilato compare l'avviso finale;
  - nessun errore JavaScript.

## 62. Home: "Dona ora" della hero porta alla pagina Dona (21/10/2026)

Su richiesta di Fulvio, il pulsante "Dona ora" sotto "Fare bene fa bene al cuore." porta a `dona.html` (decisioni 60 e 61), come il "Dona ora" dell'header. Prima apriva Myosotis.

Visto che porta a una pagina del sito, si apre **nella stessa scheda**. Ci si torna con "Indietro", senza schede aperte da gestire: è più semplice per un pubblico anziano.

I pulsanti dei riquadri delle pagine interne continuano a portare a Myosotis (decisione 56).

## 63. Per le aziende: il riquadro sale sulla copertina come nelle altre pagine (21/10/2026)

Su richiesta di Fulvio, il riquadro "Dona come azienda" torna a stare a cavallo tra copertina e testo, come in tutte le altre pagine. Si annulla la posizione "sotto la copertina" della decisione 59 (classe `.project-sidebar--sotto` tolta). La coerenza tra le pagine vale più dell'eccezione.

**Foto specchiata.** Con il riquadro sopra, il gruppo a destra della foto restava coperto. Su richiesta di Fulvio la copertina è stata **specchiata**: ora le persone sono a sinistra e il riquadro copre il paesaggio con la basilica di Superga.

- Sono stati specchiati direttamente i quattro file `aziende-cottolengo-960/1600.jpg` e `-960/1916.webp`, come per Cura (decisione 39). Così lo zoom d'ingresso della copertina continua a funzionare.
- L'inquadratura passa da `72% 50%` a `28% 50%`.

**Riquadro più basso.** Sempre su richiesta di Fulvio, qui il riquadro sale meno sulla copertina: `margin-top: clamp(-230px, -16vw, -170px)`, contro `clamp(-390px, -31vw, -320px)` delle altre pagine (classe `.project-sidebar--bassa`). Così sta tutto sul paesaggio e le persone restano libere. Su tablet e telefono resta la regola comune.

## 64. Pagina Dona: testi fiscali del Cottolengo, niente calcolo della detrazione (22/10/2026)

Il Cottolengo ha chiesto queste modifiche prima di mandare la pagina a NP Solutions (Myosotis). Valgono per tutti i moduli di donazione.

1. **Riepilogo:** tolta la riga "Dopo la detrazione ti costa 70 €".
2. **La tua donazione:** tolto il calcolo "Dopo la detrazione fiscale del 30% la tua donazione ti costa 70 €: recuperi 30 €". Il riquadro ora dice solo: "Per ottenere la ricevuta di donazione inserisci indirizzo e codice fiscale qui sotto. La tua donazione può usufruire dei benefici fiscali ai sensi dell'art. 83 D.Lgs. 117/2017." Il riquadro è visibile sia ai privati sia alle aziende.
3. **I tuoi dati:** "Servono per intestarti la ricevuta di donazione. Tutti i campi sono obbligatori, salvo dove indicato."

**Per coerenza con queste modifiche**, cambiati anche due testi che parlavano di detrazione:

- sotto il codice fiscale: "È necessario per la ricevuta di donazione";
- nel riepilogo laterale: "Ricevuta di donazione per i benefici fiscali".

**Codice.** In `js/dona-pagina.js` è stato tolto il calcolo della detrazione (`PERC_DETRAZIONE`). Il punto "detrazione del 30% da confermare" della decisione 60 non serve più.

**Metodi di pagamento.** Silvia verifica che ci siano tutti.

Gli altri riquadri del sito non contengono calcoli della detrazione. Dicono solo "possono usufruire dei vantaggi fiscali previsti dal Codice del Terzo Settore (D.Lgs. 117/2017)", quindi non sono stati toccati.

## 65. Footer: testi un gradino più piccoli, IBAN sempre su una riga (22/10/2026)

**Problema.** Il footer era scritto a 17 px, quasi come i paragrafi delle pagine (18,5 px). Nelle colonne strette:

- l'indirizzo lasciava "Torino" da solo su una riga;
- l'IBAN si spezzava in due, ed è facile copiarlo sbagliato;
- su telefono il footer era lungo circa 1.080 px.

**Modifiche, approvate da Fulvio.**

- **Testo delle colonne a 16 px**, interlinea 1,9 (provate 1,55 e 1,7, poi Fulvio ha chiesto ancora più aria tra le righe). Sotto i 16 px non si scende, perché il pubblico è anziano.
- **Riga finale a 15 px**: copyright, Privacy Policy, Cookie Policy.
- **Titoli delle colonne invariati a 19,2 px.** L'azzurro sul blu notte ha un contrasto di 4:1, valido solo per il testo grande (grassetto da 18,7 px in su). Rimpicciolirli li porterebbe sotto la soglia WCAG.
- **IBAN su una riga sola** (`.footer__iban`, `white-space: nowrap`). La colonna "Dona con bonifico" è un po' più larga: colonne `1.1fr 1fr 1.3fr 1fr`.
- **Indirizzo su due righe:** "Via Cottolengo, 14" e sotto "10152 Torino", in tutte le 17 pagine.
- **Righe allineate tra le colonne.** I link utili non hanno più il margine sopra e sotto. Ogni riga è alta come quelle delle altre colonne (27 px, sopra i 24 px minimi di WCAG 2.2), così le righe delle quattro colonne sono alla stessa altezza.

**Risultato.**

- Su computer il footer passa da 383 a circa 370 px, perché si accorcia l'indirizzo.

**Verifiche.**

- Header e footer identici su tutte le pagine.
- Nessuno scorrimento orizzontale da 320 px.
- axe: 0 violazioni.

## 66. Pagina Dona: header e footer "chiusi" da pagina di pagamento (22/10/2026)

**Perché.** La pagina di donazione starà su dona.cottolengo.org, la piattaforma di Myosotis, che dovrà riprodurre anche header e footer. Il menu completo del sito non serve: è uno dei punti di uscita più frequenti mentre si dona. In un esperimento di NextAfter, una pagina ridisegnata senza menu, con una proposta di valore chiara e importi più grandi, ha avuto **+45% di donazioni**. Lo stesso schema, il "checkout chiuso" raccomandato da Baymard, è usato da banche ed e-commerce. Vedi `claude/strategia-conversione-donazioni.md`, punto 1.

**Header.**

- Stesso azzurro e stessa altezza dell'header del sito, così la pagina sembra parte dello stesso sito.
- A sinistra il logo, che riporta al sito.
- A destra il lucchetto con **"Pagamento sicuro"** e il link **"Torna al sito"**.
- Niente menu, niente tendine, niente "Dona ora".
- Sotto i 480 px resta solo "Pagamento sicuro": si torna al sito dal logo o dal footer.

**Footer di due righe**, testo a 15 px:

1. Fondazione Cottolengo Solidale ETS · Codice fiscale 97905980013 · telefono · email;
2. © Piccola Casa della Divina Provvidenza – Cottolengo · Privacy Policy · Cookie Policy · Torna al sito.

Ogni voce resta intera quando la riga va a capo.

**Su questa pagina non c'è la barra "Dona ora" fissa**: si è già nella pagina di donazione.

**Codice.**

- Classi `.header--checkout`, `.checkout-sicuro`, `.checkout-torna`, `.footer--checkout`, `.footer__checkout`, `.footer__voce`.
- In `tools/verifica-sito.py`, la pagina `dona.html` è esclusa dal controllo "header e footer identici" (`PAGINE_CHECKOUT`).

**Verifiche.**

- HTML valido.
- axe: 0 violazioni.
- Nessuno scorrimento orizzontale da 320 px.
- Il modulo funziona come prima.

## 67. Home: nuovo testo sopra le quattro aree (22/10/2026)

**Testo fornito dal Cottolengo.**

- **Titolo:** "Scegli dove fare la differenza". Prima era "Chi aiuti con il tuo gesto".
- **Testo:** "Il tuo aiuto può sostenere quattro grandi aree di intervento: Cura, Accoglienza, Educazione e Missioni internazionali. Scegli quella che ti sta più a cuore. Il Cottolengo destinerà la tua donazione ai progetti e alle necessità più urgenti all'interno dell'area scelta."

Il testo chiarisce che la donazione va all'area scelta, il punto che la sezione Trasparenza della richiesta al cliente chiedeva di confermare.

**Impaginazione.** Il testo è più lungo di prima, quindi le righe sono limitate a 46rem, cioè circa 75 caratteri; prima la riga era libera. Le due frasi lunghe vanno a capo in modo bilanciato: su computer il testo sta su quattro righe centrate.

**Ritocco chiesto da Fulvio.** L'interlinea passa da 1,65 a 1,45, perché per un testo di quattro righe a 21 px la spaziatura era troppo ampia. I nomi delle quattro aree sono in grassetto blu notte, così si leggono a colpo d'occhio e rimandano alle schede sotto.

## 68. Pagina Dona: spiegazione della donazione libera (22/10/2026)

Nella pagina Dona, sotto "Donazione libera · Per le Opere di Carità", c'è ora il testo richiesto da Fulvio: "Sostieni il Cottolengo e lascia che sia l'ente a destinare la tua donazione dove c'è più bisogno." Sta dentro lo stesso riquadro grigio, in grigio a 16 px.

Spiega in modo semplice cosa vuol dire "donazione libera". È coerente con il testo della home sulle quattro aree (decisione 67): chi sceglie un'area dona per quella, chi fa la donazione libera lascia scegliere al Cottolengo.

## 69. Home: nuovo titolo e testo della sezione dei modi di aiutare (22/10/2026)

**Testo fornito dal Cottolengo**, al posto di quello provvisorio:

- **Titolo:** "Ci sono tanti modi per esserci". Prima era "Come fare del bene".
- **Testo:** "Dal 5×1000 al volontariato, ogni forma di sostegno contribuisce a portare avanti la missione del Cottolengo."

Le schede sotto non cambiano.

## 70. Missioni internazionali: prima foto vera del Cottolengo in copertina (23/10/2026)

**La foto.** Al posto dell'immagine provvisoria (932 px, troppo piccola) c'è una foto vera mandata da Fulvio: bambini di una missione del Cottolengo in Africa con tre suore, davanti alla scuola, che fanno il pollice in su. È la prima foto reale del sito e va nella direzione chiesta al Cottolengo: foto vere invece che generate con l'AI (vedi `claude/richieste-contenuti-cliente.md`).

**File.**

- `assets/img/pagine/missioni-cottolengo-bambini-suore-1482.jpg` e `.webp`;
- `assets/img/pagine/missioni-cottolengo-bambini-suore-960.jpg` e `.webp`, per il telefono.

**Inquadratura.** `50% 32%`: la foto è verticale rispetto alla copertina, quindi viene tagliata sopra e sotto, e così restano visibili i volti delle suore e dei bambini.

**Limiti.**

- L'originale è largo 1.482 px, meno dei 1.920 consigliati: sugli schermi molto grandi è leggermente meno nitida.
- È una foto di gruppo che riempie tutta la larghezza, quindi il titolo e il riquadro "Dona per le missioni" coprono una parte dei bambini.

Se il Cottolengo ha la stessa foto a risoluzione più alta, o una foto con più spazio libero ai lati, conviene sostituirla.

**Consenso.** Vanno confermate le liberatorie per i minori ritratti.

**File vecchi.** I file `missioni-internazionali-cottolengo-1600.jpg` e `-932.webp` non sono più usati. Restano nella cartella finché non si decide di eliminarli.

## 71. Educazione: foto vera della Scuola Cottolengo, versione migliore (23/10/2026)

La copertina di Educazione era già la foto vera dei bambini seduti in cerchio nel cortile della Scuola Cottolengo. Fulvio ne ha mandato una versione migliore: più grande (1.672 × 941 px invece di 1.600 × 898) e con colori più puliti e vivaci.

**File nuovi.** `assets/img/pagine/educazione-scuola-cottolengo-1672.jpg/.webp` e `-960.jpg/.webp`, per il telefono.

**File vecchi.** `educazione-cottolengo-1600/960` non sono più usati. Restano nella cartella finché non si decide di eliminarli.

**Da sapere.** La foto è del periodo Covid: diversi bambini portano la mascherina. Conviene chiedere al Cottolengo se ne ha una più recente. Vanno confermate anche le liberatorie per i minori.

## 72. Accoglienza: foto vera del laboratorio di pittura (23/10/2026)

**La foto.** Al posto dell'immagine generata con l'AI c'è una foto vera mandata da Fulvio: una suora del Cottolengo aiuta un'ospite anziana a dipingere, durante un laboratorio all'aperto. Racconta bene l'accoglienza: cura, vicinanza e attività insieme.

**File.** `assets/img/pagine/accoglienza-laboratorio-cottolengo-1448.jpg/.webp` e `-960.jpg/.webp`, per il telefono. Dimensioni originali: 1.448 × 1.086 px.

**Inquadratura.** `50% 33%`, per tenere in vista i volti dell'ospite e della suora. Si è provata anche la foto specchiata, ma la versione originale funziona meglio: su computer l'ospite resta a sinistra del riquadro di donazione, la suora a cavallo.

**Limiti.** Come per Missioni, la foto è meno larga dei 1.920 px consigliati, ed è in formato 4:3, quindi viene tagliata sopra e sotto.

**Consenso.** Vanno confermate le liberatorie delle persone ritratte.

**File vecchi.** `accoglienza-cottolengo-1600/960` non sono più usati. Restano nella cartella finché non si decide di eliminarli.

## 73. Cura: foto vera della suora con gli ospiti (23/10/2026)

**La foto.** Al posto dell'immagine generata con l'AI (le mani dell'operatrice e dell'anziana) c'è una foto vera mandata da Fulvio: una suora del Cottolengo sorride a un ospite in carrozzina durante un laboratorio, con altri ospiti al tavolo. Mostra la cura come presenza e relazione, coerente con il testo "non solo terapie, ma presenza, ascolto e dignità".

**File.** `assets/img/pagine/cura-suora-ospiti-cottolengo-1536.jpg/.webp` e `-960.jpg/.webp`, per il telefono. Dimensioni originali: 1.536 × 1.024 px.

**Inquadratura e riquadro.**

- Inquadratura `50% 60%`, cioè più in basso del solito, per far salire il volto dell’ospite sopra il riquadro di donazione su computer (1440 px). Sugli schermi molto larghi una parte del volto resta sotto il riquadro: è il compromesso con una foto di gruppo in formato 3:2.
- La foto **non è specchiata**: la suora resta a sinistra e l'ospite al centro.
- Il riquadro "Dona per la cura" sale meno sulla foto (`.project-sidebar--bassa`, come nella pagina Aziende), così su computer si vede il volto dell'ospite in carrozzina.
- Sono state provate quattro varianti: originale o specchiata, riquadro normale o basso. Questa è quella che copre meno le persone.

**Consenso.** Vanno confermate le liberatorie delle persone ritratte.

**File vecchi.** `cura-assistenza-anziani-cottolengo-960/1920` non sono più usati. Restano nella cartella finché non si decide di eliminarli.

## 74. Home: foto vere anche nelle quattro schede delle aree (23/10/2026)

Le schede della sezione "Scegli dove fare la differenza" usano ora le stesse foto vere delle copertine delle aree (decisioni 70–73), al posto delle immagini generate con l'AI. Una di queste, quella delle Missioni, aveva anche il marchio "Ps" di Photoshop visibile in un angolo.

| Scheda | Foto | Ritaglio 4:3 |
| --- | --- | --- |
| Cura | suora con l'ospite in carrozzina | 1.365 × 1.024 dalla parte sinistra: suora e ospite |
| Accoglienza | laboratorio di pittura | foto intera (è già 4:3) |
| Educazione | cortile della Scuola Cottolengo | 1.255 × 941 centrato, con la scritta "Scuola Cottolengo" |
| Missioni | bambini con le suore | foto intera |

**File.** In `assets/img/chi-aiuti/` le versioni da 1.200 × 900 e 800 × 600 px, come prima.

**File vecchi.** Le immagini AI non sono più usate. Restano nella cartella finché non si decide di eliminarle.

## 75. Revisione UX: ogni «Dona» porta alla pagina Dona, errori e pagamenti più chiari (26/10/2026)

Nasce da una revisione critica di home e pagina Dona, pensata soprattutto per chi dona da telefono (la maggioranza, secondo Donare 3.0) e per un pubblico in gran parte sopra i 50 anni. I contenuti non ancora completi (cifre, link provvisori) restano come sono: non sono errori.

**Home**
- **Tutti i pulsanti «Dona» portano a `dona.html`:** pulsante accanto alla bambina, «Dona ora» fisso in basso su telefono, «Donazione libera» nel menu di tutte le pagine, slide di Natale. Prima alcuni portavano a `#dona`, cioè a un punto della pagina che non c'è più. Su Myosotis diventeranno i moduli dedicati.
- **Il carosello apre con la donazione:** l'ordine ora è pasto, Natale, 5×1000, lasciti. La prima cosa che si vede è un gesto concreto e immediato. Il 5×1000 è una firma, non una donazione, e arriva dopo. «Dona un pasto» porta a `dona.html?causale=pasti`, che mostra «Dona un pasto · Per le mense del Cottolengo» (nel prototipo; su Myosotis sarà un modulo dedicato).
- **Pulsanti delle quattro schede secondari:** «Scopri e dona» ora è bianco con bordo blu. Così il pulsante pieno «Dona ora» resta il più evidente della pagina e non compete con quattro pulsanti uguali.

**Pagina Dona**
- **«Una tantum» diventa «Una volta sola»:** parola più comune.
- **Ogni metodo di pagamento dice cosa succede dopo:** «Paghi subito sulla pagina protetta», «Ricevi IBAN e causale…». Per bonifico e bollettino il pulsante finale dice «Ricevi i dati per il bonifico» / «Ricevi i dati del bollettino», perché non si paga in quel momento.
- **Con «Continuativa» il bollettino sparisce,** con una riga che lo spiega: non si può usare per donazioni ripetute.
- **Newsletter facoltativa:** non è più obbligatorio rispondere (non c'era l'obbligo nel modulo vecchio).
- **Errori:** l'elenco in alto si aggiorna mentre si correggono i dati; importo, metodo e privacy hanno il bordo rosso e il messaggio sul posto; i messaggi sono brevi («Inserisci il CAP.») e stanno su una riga anche su telefono. Se si passa da privato ad azienda, gli errori dei campi nascosti spariscono.
- **Provincia senza esempio «TO»:** sembrava già compilata.
- **Su telefono** CAP e provincia vanno uno sotto l'altro, larghi abbastanza da leggere quello che si scrive.
- **Box della detrazione** con bordo leggero invece della striscia laterale colorata.
- **Aree di tocco di 44 px** per «Dona ora» nell'header e per il menu su telefono, senza cambiare le dimensioni visibili.

Non toccato: il riepilogo su telefono che scorre via con la pagina e i testi introduttivi centrati su telefono (da valutare dopo).

## 76. Pagina Dona: codice fiscale e indirizzo solo per chi vuole la ricevuta (26/10/2026)

Prima un privato vedeva undici campi, anche se non voleva la ricevuta. Ogni campo in più è un punto in cui si può abbandonare, soprattutto su telefono (tastiera che copre lo schermo, pagina lunga, errori di battitura). La sintesi Nielsen Norman Group chiede di domandare solo i dati che servono e di spiegare perché.

- Dopo nome, email e cellulare c'è la domanda **«Vuoi la ricevuta per detrarre la donazione dalle tasse?» Sì / No**. È obbligatoria e **nessuna risposta è già scelta**: il pubblico è in gran parte sopra i 50 anni e la detrazione interessa a molti, quindi la persona deve decidere in modo consapevole e non accorgersi dopo di aver perso la ricevuta.
- Con **Sì** compaiono codice fiscale (o partita IVA per le aziende), indirizzo e nazione, con la riga «Questi dati servono per intestarti la ricevuta». Con **No** si passa direttamente a privacy e pagamento: 4 campi invece di 11 (3 invece di 10 per le aziende).
- Il cellulare (facoltativo) è salito vicino all'email, con gli altri contatti.
- Il box fiscale nella sezione 1 (testo del Cottolengo) ora dice di rispondere «Sì» alla domanda sulla ricevuta.
- Stessa cosa su telefono e su PC.

**Da decidere con il Cottolengo:** se l'indirizzo serve anche senza ricevuta (ringraziamenti per posta, notiziario cartaceo) si può chiedere comunque come facoltativo; quali dati servono davvero per la ricevuta e per la comunicazione all'Agenzia delle Entrate (da verificare con Cottolengo e Myosotis); a cosa serve il cellulare, per spiegarlo accanto al campo. Il modulo definitivo lo costruisce Myosotis.

## 77. Pagina Dona: «Dona in un tocco» con Apple Pay / Google Pay, PayPal e Satispay (26/10/2026)

Preso dai moduli di donazione su Stripe (esempio analizzato: Blender Foundation): i pagamenti rapidi stanno in cima, prima dei campi. Su telefono chi ha il portafoglio digitale dona con un tocco e l'impronta, senza scrivere nulla: nome ed email li passa il portafoglio o il conto.

- Subito dopo importo e frequenza: **«Dona in un tocco»** con tre pulsanti grandi: **Apple Pay** (su iPhone, iPad e Safari) **oppure Google Pay** (altrove: il pulsante cambia da solo), **PayPal**, **Satispay** (molto usato in Italia, qui ben visibile e non nascosto tra gli «altri metodi»). Su telefono uno sotto l'altro, su PC in fila.
- Sotto: «Donando accetti l'informativa privacy», poi la riga **«oppure inserisci i tuoi dati»** che porta al modulo di sempre. Il box fiscale del Cottolengo è passato sotto questa riga, perché riguarda il modulo.
- **Ricevuta dopo il pagamento:** chi dona in un tocco vede «Grazie per la tua donazione!» e la domanda «Vuoi la ricevuta per detrarre la donazione dalle tasse?» con il solo codice fiscale e due pulsanti: «Voglio la ricevuta» / «No, grazie». Chi non la vuole ha già finito.
- Senza un importo valido i pulsanti non partono: compare l'errore sull'importo.
- Non copiato dall'esempio Stripe: testi piccoli e grigi, il pulsante «Link» (sconosciuto in Italia), «Salva le mie informazioni», il linguaggio da negozio («ordine»), le scritte in inglese.

**PROTOTIPO.** I pulsanti sono solo testo nei colori dei servizi: quelli definitivi saranno i pulsanti ufficiali forniti dalla piattaforma di pagamento. **Da verificare con Myosotis:** se supportano Apple Pay, Google Pay e Satispay come pagamento rapido, anche per le donazioni continuative; se il portafoglio può passare anche l'indirizzo (serve per la ricevuta); come si chiede il codice fiscale dopo il pagamento.

## 78. Pagine Privacy Policy e Cookie Policy (26/10/2026)

- **`privacy.html`**: informativa ufficiale per i donatori (102BIS, ver. 1.0 del 15/09/2025). **`cookie.html`**: Cookie Policy ufficiale (108, ver. 6.0 del 10/02/2023). Testi riportati senza modifiche; cambia solo l'impaginazione: titoli per sezione, elenchi, telefoni ed email cliccabili. Unica correzione: il refuso «àòi» → «ai» nella Cookie Policy.
- **Niente PDF da scaricare** (deciso il 26/10): per legge basta la pagina, e un PDF sarebbe una seconda copia da tenere allineata (quello dei cookie avrebbe l'elenco vecchio). Sotto il titolo restano numero di versione e data del documento ufficiale. Se il Cottolengo lo chiede, il link si rimette in un minuto.
- Colonna di testo stretta per leggere bene; in fondo un riquadro con il contatto dell'ufficio privacy.
- **Tabella dei cookie:** su PC si allarga oltre la colonna di testo, così la finalità si legge su poche righe; su telefono ogni cookie diventa una scheda, senza tabella da scorrere di lato.
- **Collegamenti:** «Privacy Policy» e «Cookie Policy» nel footer di tutte le pagine (prima erano link vuoti); nella pagina Dona la casella dell'informativa e la riga «Donando accetti l'informativa privacy» ora aprono `privacy.html` in una nuova scheda (prima puntavano a dona.cottolengo.org).

**Da segnalare al Cottolengo:**
- L'elenco dei cookie è quello del **vecchio sito donazioni** (YouTube, Facebook, PayPal, Brevo, Scribd, dominio donazioni.cottolengo.org). Il nuovo sito oggi non installa nessun cookie: l'elenco va aggiornato con chi gestirà il sito definitivo (Myosotis), dopo aver deciso gli strumenti di misura e il banner del consenso.
- Nella pagina Dona la casella dice «informativa privacy di Piccola Casa della Divina Provvidenza e Fondazione Cottolengo Solidale ETS», mentre l'informativa elenca **tre titolari** (anche Fondazione Cottolengo ONLUS): da allineare.
- L'informativa donatori non parla delle comunicazioni facoltative (newsletter, SMS, WhatsApp, posta) chieste nel modulo: da verificare con l'ufficio privacy.

## 79. Raccolte solidali: testo della fascia in home riscritto (26/10/2026)

Rivisto alla luce della sintesi Nielsen Norman Group e di Donare 3.0. Grafica invariata (decisione 20), cambia solo il testo.

- **Titolo:** «Crea una raccolta solidale» → **«Festeggia facendo del bene»**: dice subito cosa ci guadagna chi la apre.
- **Testo:** «Un compleanno, un anniversario, una ricorrenza importante: apri la tua pagina di **raccolta fondi** e chiedi ad amici e parenti di donare **al posto dei regali**. Le donazioni vanno **direttamente al Cottolengo**.»
  - Esempi concreti per il nostro pubblico (compleanni, anniversari, ricorrenze). «Una corsa» è stata tolta dalla home (26/10): con «festeggia» e «al posto dei regali» non c'entrava. Lo sport resta spiegato nella pagina Raccolte solidali.
  - «Raccolta fondi» in italiano: la capiscono tutti. Niente «crowdfunding» o «fundraising» nei testi visibili, sono parole che il pubblico anziano spesso non conosce.
  - Dove vanno i soldi: è la domanda che frena di più (Nielsen), sia chi organizza sia chi dona.
- **Pulsante:** «Crea la tua raccolta» → **«Scopri come funziona»**: porta alla pagina che spiega, quindi deve dirlo (azioni prevedibili). Tornerà «Crea la tua raccolta» quando Myosotis attiverà le raccolte e il pulsante aprirà davvero la creazione.
- **Allineati:** sottotitolo della pagina Raccolte solidali, paragrafo «Cos'è una raccolta solidale» (ora dice «raccolta fondi personale» e che i soldi non vanno a chi organizza), titolo e descrizione per Google e condivisioni, descrizione della voce nel menu.

## 80. Pagina Raccolte solidali più completa e chiara (26/10/2026)

La pagina segue lo schema delle linee guida (sintesi Nielsen Norman Group, requisiti in `claude/requisiti-nng-donazioni.md`): che cos'è, come funziona, per quali occasioni, dove vanno i soldi, cosa fare dopo.

- **Cos'è – «Una raccolta fondi tutta tua».** Spiega che è una raccolta fondi personale aperta da chi organizza, non dal Cottolengo. Le parole inglesi compaiono **una volta sola, tra parentesi o spiegate**: *personal fundraising* e *crowdfunding* («raccolta fatta da tante persone»). Così chi le ha sentite le riconosce e chi non le conosce capisce. Un esempio concreto e dichiarato come tale: i 70 anni con figli e nipoti, vicino al nostro pubblico.
- **Come funziona – «Bastano tre passaggi».** Gli stessi riquadri numerati delle pagine delle aree: apri la tua pagina, condividi il link, amici e parenti donano. Sotto, chi aiuta: email e telefono dell'Ufficio Raccolta Fondi.
- **Per quali occasioni – «Feste, ricorrenze e sfide».** Compleanni e anniversari; matrimoni, battesimi, comunioni e cresime; pensione o traguardo di lavoro; sport e sfide (qui la corsa ha senso, Donare 3.0).
- **Dove vanno i soldi – «Le donazioni vanno al Cottolengo».** Non passano da chi organizza; il Cottolengo le usa per le sue opere **dove c'è più bisogno** (fondo, non progetto singolo: linee guida, punto «fondo ≠ progetto»). Ogni raccolta è verificata dal Cottolengo.
- **«Vuoi sostenere la raccolta di qualcuno?»**: si dona dal link ricevuto (tolto «cerca la raccolta»: non sappiamo se la piattaforma avrà una ricerca).
- Le ancore di prima (`#cos-e`, `#crea`, `#occasioni`, `#sport`, `#come-funziona`, `#raccolte`) restano.

**Non inventato, da chiedere a Cottolengo e Myosotis:** se aprire una raccolta costa qualcosa; se chi dona su una raccolta riceve la ricevuta per le detrazioni; importo minimo; se si può scegliere un'area (Cura, Accoglienza…); quanto dura una raccolta; esempi veri di raccolte passate da raccontare (con consenso). Quando arrivano le risposte si può aggiungere una sezione «Domande frequenti».

## 81. Raccolte solidali in home: le feste e lo sport insieme (26/10/2026)

Aggiorna la decisione 79. Donare 3.0 indica gli eventi sportivi come il canale delle raccolte personali che cresce di più, quindi lo sport va detto anche in home. Va detto però in modo coerente: con «Festeggia» e «al posto dei regali» una corsa non c'entrava.

- **Titolo:** «Festeggia facendo del bene» → **«Una festa o una sfida che fa del bene»**: comprende entrambe le occasioni.
- **Testo:** «Un compleanno, un anniversario, una corsa o una camminata: apri la tua pagina di raccolta fondi e chiedi ad amici e parenti di donare, **al posto dei regali o per sostenere la tua impresa**. Le donazioni vanno direttamente al Cottolengo.» Ogni occasione ha il suo motivo per donare. Corsa e camminata sono sfide alla portata di tutti, anche dei più anziani.
- Allineati: sottotitolo della pagina Raccolte solidali, descrizione per Google e condivisioni, descrizione della voce nel menu («Una festa o una sfida sportiva: apri la tua raccolta fondi per il Cottolengo.»).

## 82. Nuova pagina «Vestiti e una doccia calda» in «Come aiutarci» (26/10/2026)

Ripresa della pagina «Dona un indumento» del vecchio sito donazioni (donazioni.cottolengo.org, 11/05/2020, campagna Covid-19): testi, numeri, importi e foto vere vengono da lì. File: `dona-un-indumento.html` (stesso nome della vecchia pagina, utile anche per Google).

- **Perché:** mostra in modo concreto una delle cose che il Cottolengo fa ogni giorno. È ciò che chiedono le linee guida: bisogno chiaro, risposta operativa, numeri, foto vere, un'idea del valore del dono. Per il nostro pubblico, che dona «per un bisogno» (Donare 3.0), è molto forte.
- **Destinazione (indicazione di Fulvio):** le donazioni vanno alle **donazioni generali** del Cottolengo, non a un fondo solo per i vestiti. La pagina lo dice chiaramente in una sezione propria («Dove va la tua donazione – Aiuti tutto il Cottolengo») e nel riquadro Dona; gli importi sono presentati come equivalenza («Per darti un'idea, 25 € valgono un kit»). Pulsante «Dona ora» verso l'indirizzo generico dona.cottolengo.org, con `data-modulo="dona-un-indumento"` per sapere da dove arriva il dono.
- **Nome:** «Vestiti e una doccia calda» (menu: «Vestiti e docce») invece di «Dona un indumento» o «Dona un kit»: non si portano vestiti e il dono non compra solo kit (azioni prevedibili, fondo ≠ progetto).
- **Struttura** (come le pagine delle aree): il bisogno; cosa facciamo (240 adulti e 3.000 prestazioni al mese, 130 bambini e 1.560 kit); tre foto con didascalia; cosa c'è in un kit; 25 / 100 / 250 € in kit; dove va la donazione; tre passaggi per donare; «Vuoi portare dei vestiti? Scrivi prima a…» (così chi vuole portare abiti sa cosa fare, senza promettere nulla).
- **Foto:** le sei foto del vecchio sito, scattate dal telefono nel 2020 (guardaroba, operatori con mascherina, di spalle). Copertina 1600 e 960 px (16:10), tre foto in galleria 800 × 600 (4:3), JPG e WebP, metadati tolti. Non usata l'immagine di condivisione del vecchio sito: è una foto di repertorio (uomo anziano in bianco e nero), contraria alle linee guida.
- **Menu «Come aiutarci»:** nuova voce «Vestiti e docce» dopo «Dona in memoria», in tutte le pagine.
- Nuova regola CSS `.galleria-foto` (griglia di foto con didascalia). CSS v=116.

**Da confermare con il Cottolengo:** se il servizio è ancora attivo, dove si trova e chi lo gestisce; numeri di oggi (persone, kit, prestazioni); se 25 € per kit è ancora giusto; se accettano vestiti portati di persona; consenso per le foto. Fino ad allora la pagina dice «Numeri e importi della campagna del 2020, da aggiornare».

## 83. Più respiro dopo i riquadri dei passaggi (26/10/2026)

Il testo dopo i tre riquadri numerati era attaccato all'ultimo riquadro (segnalato da Fulvio sulla pagina Vestiti e docce).

- Regola generale: dopo i riquadri dei passaggi il testo che segue parte 2rem più in basso (pagina Raccolte solidali, «Se hai bisogno di una mano…»).
- «Vuoi portare dei vestiti?» è un argomento a parte: ora sta in un riquadro grigio chiaro, 3rem sotto i passaggi, così si capisce che non è il quarto passaggio. Classe `.nota-riquadro`. CSS v=117.

## 84. «Kit» spiegato dove non c'è contesto (26/10/2026)

Nel menu e nella descrizione per Google «25 € valgono un kit» non si capiva: chi legge non sa ancora cos'è il kit (segnalato da Fulvio).
- Menu «Vestiti e docce»: «Vestiti, intimo e una doccia calda per chi è in difficoltà: scopri come il Cottolengo aiuta anche così.»
- Descrizione per Google e condivisioni: «…Per darti un'idea, con 25 € una persona riceve vestiti, intimo e una doccia.»
- Dentro la pagina «kit» resta: lì è spiegato dalla sezione «Cosa c'è in un kit» e nel riquadro Dona.

## 85. Home, scheda Cura: foto della fisioterapia (26/10/2026)

Nella scheda «Cura» di «Scegli dove fare la differenza» la foto della suora con gli ospiti (che resta come copertina della pagina Cura) è sostituita da una foto fornita da Fulvio: un fisioterapista segue un uomo anziano negli esercizi di riabilitazione, con gli elettrodi sulla gamba. Mostra la cura sanitaria in modo concreto e distingue la scheda Cura da quella di Accoglienza, che ha già una suora con un'ospite.
- File: `assets/img/chi-aiuti/cura-cottolengo-fisioterapia-riabilitazione-800.jpg` e `-1200.jpg` (4:3, come le altre schede).
- Alt: «Un fisioterapista aiuta un uomo anziano negli esercizi di riabilitazione a letto, con gli elettrodi per la stimolazione sulla gamba».
- Le foto precedenti restano nella cartella; da eliminare solo su conferma.
- Da verificare con il Cottolengo: provenienza della foto e consenso della persona ritratta.

## 86. Pagina Cura: galleria di foto vere (27/10/2026)

Tre foto vere fornite da Fulvio, nella pagina Cura dopo l'elenco «Dove arriva il tuo aiuto» e prima degli esempi d'impatto, con la stessa galleria della pagina Vestiti e docce (decisione 82): su PC tre in fila, su telefono una sotto l'altra, con didascalia.

- **Foto:** operatrice con un'ospite in poltrona nella stanza; due infermiere al letto di un ospite; operatore con un'ospite in carrozzina nel corridoio.
- **Colore:** bilanciamento sui bianchi (pareti, lenzuola, camici) per togliere le dominanti, soprattutto quella fredda/azzurra della foto del corridoio; luminosità allineata (corridoio schiarito, foto al letto appena scurita) perché stiano bene insieme.
- **Formato:** 4:3 come le altre gallerie, 800 e 1200 px, JPG e WebP, metadati tolti. File `assets/img/pagine/cura-cottolengo-*`.
- **Didascalie** solo su ciò che si vede, senza nomi di luoghi: «Accanto a ogni ospite, ogni giorno.», «Cure e vicinanza al letto di chi è fragile.», «Una passeggiata insieme, nei corridoi della casa.» Alt descrittivi.
- Le altre due foto mostrate da Fulvio (fisioterapia in palestra, suora che medica un ragazzo) non sono arrivate come file: da aggiungere quando arrivano.
- Da verificare con il Cottolengo: consenso delle persone ritratte.

## 87. Galleria della pagina Cura: una foto grande e due affiancate (27/10/2026)

Le tre foto in fila su PC sembravano francobolli (240 px): non si vedevano volti e gesti. Confrontate due versioni (A: tre in fila; B: una grande e due sotto).
- **Scelta B, anche su telefono.** La prima foto (le due infermiere al letto, la più espressiva) è larga quanto il testo; le altre due affiancate sotto, con didascalia.
- **Su PC** la foto grande è panoramica (16:9) per non allungare troppo: galleria alta circa 710 px. **Su telefono** la foto grande è 3:2 e le due piccole affiancate: la galleria passa da circa 900 a 470 px, quindi la pagina si accorcia.
- **Niente carosello** sul telefono: i caroselli mostrano quasi solo la prima immagine (Nielsen Norman Group) e il pubblico anziano scorre poco di lato; il risparmio di spazio sarebbe minimo.
- Classe `.galleria-foto--principale`, riusabile nelle altre pagine. CSS v=118.

## 88. Pagina Educazione: galleria di foto vere (27/10/2026)

Stessa impaginazione della pagina Cura (decisione 87), dopo l'elenco «Dove arriva il tuo aiuto».
- **Foto grande (scelta di Fulvio):** la classe, con i bambini ai banchi e tre insegnanti. Era scura e un po' calda: bianchi resi neutri e immagine schiarita.
- **Sotto:** la palestra durante l'educazione fisica, tagliata a sinistra per tenere l'insegnante.
- **Accanto alla palestra:** il corridoio colorato con un'insegnante che sorride tra i bambini (dominante fredda tolta). Ora l'impaginazione è identica a Cura. Regola di riserva rimasta nel CSS: se dopo la foto grande ce n'è una sola, va a tutta larghezza ma più bassa (21:9).
- Didascalie: «In classe: ogni bambino seguito da vicino.», «In palestra, si cresce anche giocando.», «Un'insegnante tra i bambini, nei corridoi colorati della scuola.» Alt descrittivi. File `assets/img/pagine/educazione-cottolengo-*` (4:3, 800 e 1200 px, JPG e WebP). CSS v=119.
- Non usata la foto del cortile: è già copertina della pagina e scheda in home.
- Da verificare con il Cottolengo: consenso, soprattutto perché ci sono minori (volti in gran parte di spalle o mossi).

## 89. Accoglienza: foto vera delle famiglie in giardino, in home e in copertina (27/10/2026)

Foto fornita da Fulvio: due mamme con i loro figli siedono in giardino e parlano con una suora. Sostituisce la foto del laboratorio di pittura (decisione 72) sia nella scheda «Accoglienza» della home sia nella copertina della pagina Accoglienza. Racconta meglio «una casa e una famiglia»: famiglie, bambini, accoglienza di persone di origini diverse.
- Colore: dominante calda leggera dei bianchi corretta per il 70% (resta il calore estivo della luce).
- File: copertina `assets/img/pagine/accoglienza-cottolengo-famiglie-giardino-960/1600` (3:2, JPG e WebP, fuoco 50% 45%); scheda home `assets/img/chi-aiuti/accoglienza-cottolengo-famiglie-giardino-800/1200.jpg` (4:3).
- Alt: «Due mamme con i loro figli siedono in giardino e parlano con una suora del Cottolengo».
- Le foto precedenti restano nella cartella; da eliminare solo su conferma.
- Da verificare con il Cottolengo: consenso delle persone ritratte, ci sono minori.

## 90. Cura: foto delle infermiere al letto in home e in copertina (27/10/2026)

Su indicazione di Fulvio la foto delle due infermiere al letto di un ospite (decisione 86, stessa correzione del colore) diventa la foto di Cura nella scheda della home (al posto della fisioterapia, decisione 85) e nella copertina della pagina Cura (al posto della suora con gli ospiti).
- Copertina: 3:2, 960 e 1600 px, JPG e WebP, fuoco 50% 30% (volti delle infermiere sopra il titolo). Il riquadro Dona resta più basso (decisione 73).
- Alt: «Due infermiere sorridono a un ospite anziano a letto e gli tengono le mani».
- **Galleria della pagina Cura** riordinata per non ripetere la copertina: foto grande l'operatrice con l'ospite in poltrona; sotto il corridoio e la suora con gli ospiti durante un laboratorio (ex copertina, foto vera). Didascalia nuova: «Una suora tra gli ospiti, durante un laboratorio.»
- Le foto precedenti restano nella cartella.

## 91. Volontariato: foto vera in copertina (27/10/2026)

Foto fornita da Fulvio: una giovane volontaria sorride e parla con gli ospiti anziani in carrozzina, durante un'attività all'aperto. Sostituisce la copertina provvisoria (collage di volti). Mostra il volontariato in modo concreto e parla anche ai più giovani (Donare 3.0).
- File `assets/img/pagine/volontariato-cottolengo-ragazza-ospiti-960/1600` (3:2, JPG e WebP), fuoco 40% 30% (volto della volontaria).
- Alt: «Una giovane volontaria sorride e parla con gli ospiti anziani in carrozzina, durante un'attività all'aperto».
- In preparazione la galleria nella pagina (come Cura ed Educazione): pronta la foto delle due donne che si salutano nella sala (`volontariato-cottolengo-ospiti-saluto`), mancano come file l'uomo con la volontaria al tavolo e la fisioterapia.
- Da verificare con il Cottolengo: consenso delle persone ritratte.

## 92. Pagina Accoglienza: galleria di foto vere (27/10/2026)

Stessa impaginazione di Cura ed Educazione, dopo «Dove arriva il tuo aiuto». Colore corretto (bianchi resi neutri al 70%).
- **Foto grande:** un'ospite sorridente infila perline al laboratorio, con un'operatrice. «Al laboratorio, ogni giorno qualcosa da creare.»
- **Sotto:** due ospiti che si salutano con affetto nella sala, una con un ausilio per stare in piedi («Le relazioni sono il cuore della casa.»); un ospite anziano al tavolo con il giornale e una volontaria che lo abbraccia («Nessuno resta solo.»), taglio spostato a destra per tenere entrambi i volti.
- Le due foto delle persone erano state proposte anche per il Volontariato: usate solo qui, che è la pagina giusta. I file `volontariato-cottolengo-ospiti-saluto-*` (già pubblicati, non usati) restano in cartella; da eliminare solo su conferma.
- Da verificare con il Cottolengo: consenso delle persone ritratte.

## 93. Pagina Missioni internazionali: galleria di foto vere (27/10/2026)

Stessa impaginazione di Cura, Educazione e Accoglienza, dopo «Dove arriva il tuo aiuto».
- **Foto grande:** bambini di una scuola delle missioni in Africa che sorridono e si abbracciano nel cortile. «Sorrisi nel cortile di una scuola delle missioni.»
- **Sotto:** due suore con ragazzi con disabilità che dipingono bottiglie («Un laboratorio creativo in una casa delle missioni.», taglio che toglie metà del tavolo vuoto); bambini piccoli in divisa azzurra davanti alla scuola («I più piccoli, pronti per la scuola.»).
- **Colore e contrasto uniformati** (richiesta di Fulvio): bianchi resi neutri (via la dominante gialla della foto dei bambini in divisa e quella fredda del cortile), livelli allungati e luminosità media allineata, così le tre foto, di fonti e qualità diverse, stanno bene insieme.
- Le foto dei bambini sono piccole all'origine (932 e 1152 px): solo versione 800; su PC la foto grande è un po' morbida. Se il Cottolengo ha gli originali più grandi, vanno sostituite.
- Didascalie senza nomi di Paesi: non sappiamo dove sono state scattate. Da chiedere al Cottolengo luogo e consenso (ci sono minori).

## 94. Raccolte solidali: foto vera di tre giovani in copertina (27/10/2026)

Foto fornita da Fulvio: tre giovani camminano insieme sorridendo in un ambiente luminoso. Sostituisce la copertina precedente (ospiti e suore che festeggiano). Le raccolte personali parlano soprattutto ai più giovani e alla voglia di fare qualcosa insieme (Donare 3.0): la foto lo dice subito.
- File `assets/img/pagine/raccolte-solidali-cottolengo-giovani-960/1600` (3:2, JPG e WebP), fuoco 50% 8% (volti, anche quello della ragazza in alto). Bianchi resi neutri al 70%.
- Alt: «Tre giovani camminano insieme sorridendo in un ambiente luminoso del Cottolengo».
- Da verificare con il Cottolengo: consenso delle persone ritratte.

## 95. Pagina Volontariato: galleria di foto vere (27/10/2026)

Stessa impaginazione delle pagine delle aree, prima di «Come iniziare». Colore (bianchi neutri al 70%) e contrasto uniformati.
- **Foto grande:** una giovane abbraccia sorridendo un'ospite in carrozzina. «Un abbraccio vale più di tante parole.»
- **Sotto:** un'operatrice accompagna a braccetto un'ospite in corridoio («Una passeggiata insieme, a braccetto.»); un operatore aiuta un ospite in carrozzina a usare uno schermo touch («Anche la tecnologia aiuta a stare insieme.»).
- Nelle didascalie e negli alt nessuno è chiamato «volontario»: non sappiamo se sono volontari o operatori. Da verificare con il Cottolengo, insieme al consenso.

## 96. Le foto vere vengono dal Cottolengo (27/10/2026)

Fulvio conferma che tutte le foto vere inserite nelle decisioni 85–95 (Cura, Educazione, Accoglienza, Missioni internazionali, Volontariato, Raccolte solidali, schede della home e copertine) sono **fornite dal Cottolengo**. La provenienza è quindi confermata: le note «da verificare la provenienza» in quelle decisioni sono superate. Resta buona pratica che il Cottolengo confermi di avere il consenso delle persone ritratte (soprattutto minori) per l'uso sul sito.

## 97. Testamento solidale: l'ingresso della Piccola Casa in copertina (27/10/2026)

La foto di repertorio (coppia di anziani con una consulente) è sostituita da una foto vera fornita dal Cottolengo: l'ingresso della Piccola Casa in via Cottolengo 14 a Torino, con la targa «Piccola Casa della Divina Provvidenza». Un lascito è lasciare qualcosa che dura: la casa nata dalla Provvidenza e ancora aperta lo racconta senza parlare di morte. Sobria, adatta a un tema delicato, riconoscibile per i torinesi.
- Ingrandita da Fulvio con Topaz (2400 px). Colore: bianchi neutri al 70%, leggero schiarimento, saturazione +8% (era un po' grigia).
- File `assets/img/pagine/lasciti-cottolengo-piccola-casa-ingresso-960/1600` (3:2, JPG e WebP), fuoco 45% 45%: su PC la targa resta visibile accanto al titolo; su telefono si vedono i due portoni e la targa.
- Alt: «L'ingresso della Piccola Casa della Divina Provvidenza a Torino, in via Cottolengo 14, con la targa sulla facciata».
- La copertina della pagina Aziende resta da sostituire: serve una foto di persone che lavorano insieme (volontariato d'impresa).

## 98. Cura: copertina con la fisioterapia in palestra (27/10/2026)

Foto vera fornita dal Cottolengo: una fisioterapista sorridente segue una paziente negli esercizi con la palla, nella palestra di riabilitazione. Sostituisce in copertina la foto delle infermiere al letto (decisione 90), che resta nella scheda Cura della home.
- **Capovolta orizzontalmente** su richiesta di Fulvio: così il volto della fisioterapista sta al centro, tra il titolo e il riquadro Dona. Con il ribaltamento le scritte piccole sullo sfondo (marca del lettino, braccialetto) risultano a specchio, ma non si leggono nella copertina.
- File `assets/img/pagine/cura-cottolengo-fisioterapia-palestra-960/1600` (3:2, JPG e WebP), fuoco 55% 12%: la testa resta intera anche sugli schermi molto larghi (corretto dopo la segnalazione di Fulvio). Bianchi neutri al 70%.
- Alt: «Una fisioterapista sorridente segue una paziente negli esercizi di riabilitazione con la palla, nella palestra del Cottolengo».

## 99. Cura: copertina con il medico e l'ospite in carrozzina (27/10/2026)

Provata la foto della fisioterapia (decisione 98), poi scelta questa, fornita dal Cottolengo: un medico in camice si china verso un'ospite in carrozzina che lo guarda sorridendo, nel corridoio arancione. Due persone che si guardano: la relazione di cura si sente di più, ed è più calda. I volti restano interi su schermo largo, portatile e telefono.
- **Colore:** usata la versione corretta da Fulvio (più calda e luminosa), al posto della correzione automatica.
- File `assets/img/pagine/cura-cottolengo-medico-ospite-carrozzina-960/1536` (3:2, JPG e WebP; 1536 px è la misura della versione di Fulvio, non ingrandita), fuoco 45% 15%.
- Alt: «Un medico in camice si china verso un'ospite in carrozzina che lo guarda sorridendo, in un corridoio luminoso del Cottolengo».
- Le foto della fisioterapia (`cura-cottolengo-fisioterapia-palestra-*`, già pubblicate) restano in cartella e possono tornare in galleria.

## 100. Aziende: ritratto di san Giuseppe Benedetto Cottolengo su fondo azzurro in copertina (27/10/2026)

Soluzione scelta da Fulvio in attesa di foto di volontariato d'impresa: la foto di repertorio (professionisti in riunione) è sostituita dal ritratto disegnato del fondatore su fondo azzurro, la stessa immagine della slide di Natale del carosello (`assets/img/hero/natale-cottolengo-san-giuseppe-benedetto-960/1920`, nessun file nuovo). Tono istituzionale e riconoscibile, adatto a un pubblico di imprese; il fondo azzurro è il colore del marchio.
- Fuoco 75% 32%: il volto resta sopra il riquadro «Dona come azienda» su schermo largo, PC e telefono.
- Alt: «Ritratto di san Giuseppe Benedetto Cottolengo, fondatore della Piccola Casa della Divina Provvidenza, su fondo azzurro».
- La stessa immagine compare nel carosello (slide di Natale): accettato perché la copertina Aziende è provvisoria.
- Da sostituire quando arrivano foto di volontariato d'impresa (decisione 97). Le vecchie immagini `aziende-cottolengo-*` restano in cartella.

## Nota per il cliente: perché prima "chi aiutiamo" e poi "come aiutarci"

Chi visita il sito di un ente benefico si fa tre domande, in quest'ordine:

1. **Perché dovrei aiutare?**
2. **Che cosa farà il mio dono?**
3. **Come posso donare?**

Il sito ora segue questo ordine: in home le quattro aree vengono prima dei modi di donare. Ogni pagina delle aree è divisa in tre parti con un'etichetta chiara (PERCHÉ, COSA FA IL TUO DONO, COME DONARE). Per completare la seconda parte servono da voi alcuni esempi veri del tipo "con 30 € garantiamo…", perché sono ciò che convince di più chi sta per donare.

## Nota per il cliente: perché l'azzurro del logo non va usato per i testi

Testo pronto da condividere con il Cottolengo.

L'azzurro istituzionale (#009FE3) resta il colore del marchio: lo usiamo nella barra del menu, nelle icone, nelle linee, nel grafico e in tutti gli elementi decorativi. Sul sito usiamo una versione appena più intensa dello stesso azzurro (#0097D8): la differenza dal logo si nota solo mettendo i due colori fianco a fianco, ma basta a rendere leggibili titoli e pulsanti. Per il testo piccolo (link, etichette) usiamo una tonalità più profonda (#0075B0). Il motivo è la leggibilità.

- **Il contrasto è troppo basso.** Il bianco sull'azzurro del logo, e l'azzurro del logo sul bianco, arrivano a 2,97:1. Le linee guida internazionali di accessibilità (WCAG 2.1, livello AA) chiedono almeno 4,5:1 per il testo normale e 3:1 per i titoli grandi e i pulsanti con testo grande. Con l'azzurro web arriviamo a 3,3:1, e i pulsanti hanno scritte da 19 px in grassetto; il testo piccolo, nella tonalità più profonda, arriva a 5:1.
- **Il pubblico del sito è in gran parte anziano.** Dopo i 60 anni la sensibilità al contrasto cala in modo marcato. Un testo azzurro chiaro che a noi sembra leggibile, per molti donatori diventa faticoso o sbiadito, soprattutto su telefono e alla luce del sole.
- **I pulsanti di donazione sono il punto più importante del sito.** Se la scritta "Dona" si legge male, si perdono donazioni. Il pulsante deve essere il testo più leggibile della pagina.
- **È un obbligo che si sta estendendo.** Dal 28 giugno 2025 l'European Accessibility Act chiede che molti servizi digitali, compresi i pagamenti online, siano accessibili. Per gli enti del Terzo settore è comunque una buona pratica, ed è un segnale di attenzione verso le persone fragili, coerente con la missione dell'Opera.
- **Il marchio non cambia.** È la stessa famiglia di azzurro, solo più profonda. Usare una variante più scura del colore istituzionale per testi e pulsanti è una pratica comune nei sistemi di identità digitale, proprio per questo motivo.

**Eccezione concordata:** le voci del menu (17 px) sull'azzurro restano sotto la soglia del testo normale; sono in grassetto per compensare.

Se il Cottolengo preferisce comunque l'azzurro del logo anche su titoli e pulsanti, si può tornare indietro in pochi minuti. In quel caso il sito non rispetterebbe il livello AA su quegli elementi.

## Punti aperti

- **Foto definitive per la hero** dal Cottolengo, secondo le misure delle specifiche. Facoltativa una versione verticale 9:16 per telefono.
- **Testi delle slide** da validare con il cliente. Il dato "oltre 110.000 pasti" viene dalla scheda progetto; il vecchio banner diceva 97.000. Anche «5 ambiti» e «4 aree» vanno resi coerenti (contenuto da completare).
- **Pagina Family Cottolengo:** decidere se usare anche lì la nuova nota fiscale.
- **Etichette piccole** ("il più scelto", pillole delle schede): oggi sono sotto i 12 px. Proposta di portarle a 13 px.
- **Schede progetto:** al passaggio del mouse si sollevano ancora. Valutare lo stesso ingrandimento morbido dei pulsanti.
- **Immagini non più usate** da eliminare prima della consegna, su conferma: in `assets/img/hero/` i file `5x1000-*`, `5x1000-creativita-*`, `5-per-mille-cottolengo-anziani-fragili-*` (comprese le versioni `-largo`), `natale-1920/960`, `natale-cottolengo-1920/960` e `pasto-*` (sostituiti da versioni con nomi SEO); in `assets/img/` anche `COT_Adv 5x1000_200x140.jpg` (vecchia immagine della tab 5×1000); più altri file inutilizzati in `assets`.
- **Pagine delle quattro aree** (Cura, Accoglienza, Educazione, Missioni internazionali) con modulo di donazione: da generare quando arrivano i testi. Testi e foto delle schede sono provvisori.
- **Pulizia del codice dopo la rimozione dei progetti, su conferma:** la pagina `progetti.html` con `js/progetti-dati.js` e `js/progetti.js`; `js/mappa-regioni.js` (non caricato da nessuna pagina); la mappa `assets/img/mappa.svg` / `assets/svg/mappadot.web.svg` e le icone di "Chi aiuti" in `assets/svg/` non servono più alla home (le regole CSS di carosello progetti e mappa sono state tolte il 13/10/2026). Vanno eliminati quando si decide il destino della pagina Progetti. La pagina di progetto Family Cottolengo (`family-cottolengo.html`, `js/project-detail.js`) può diventare il modello per le pagine delle quattro aree.
- **Pagina Chi siamo:** testi da validare; file PDF di bilancio sociale, bilancio d'esercizio e statuto da collegare; data di inizio decisa: 1828 (vedi decisione 29).
- **Indirizzi dei moduli dedicati Myosotis** (decisione 56): quando arrivano, sostituirli nei pulsanti con `data-modulo` (home, Aziende, Cura, Accoglienza, Educazione, Missioni, Family Cottolengo, Testamento solidale, Raccolte solidali).
- **Pagine nuove** (5×1000, 4 aree, Come aiutarci): testi e foto da validare. I testi dei pannelli Crowdfunding e Aziende sono provvisori e vanno validati con il Cottolengo.
- **Nome della voce Crowdfunding:** valutare un nome più immediato per il pubblico anziano, per esempio "Raccolte solidali" o "Crea una raccolta".
- **Myosotis / NP Solutions:** verificare se il contratto comprende personal fundraising, API, webhook e pagine personalizzabili.
- **Dominio definitivo:** serve per canonical, og:url e og:image (immagine di condivisione 1200 × 630 px da preparare).
- **Modulo Myosotis senza header/footer** (o widget/API) da NP Solutions, per togliere il ritaglio provvisorio.
