# Architettura dei contenuti — Sito donazioni Cottolengo

Analisi del 13 ottobre 2026. Serve a decidere **come organizzare menu e pagine** prima di aggiungere altre voci. **Applicata il 13 ottobre 2026** (decisione 18 in DECISIONI-DESIGN.md): Contatti nella pagina Chi siamo e nel footer, senza barra di servizio. Nomi delle voci e testi restano da validare con il Cottolengo.

## 1. Il problema

Il menu attuale ha sette voci: Come donare · 5×1000 · Lasciti · I progetti · Crowdfunding · Aziende · Contatti, più il pulsante "Dona ora". Non è solo una questione di spazio. Le voci non seguono una logica comune.

- **Quattro voci rispondono alla stessa domanda**, "come posso donare?": Come donare, 5×1000, Lasciti e Crowdfunding. Chi legge non capisce perché il 5×1000 o una raccolta solidale stiano fuori da "Come donare".
- **Le voci mescolano criteri diversi**: modi di donare (Come donare, 5×1000, Lasciti, Crowdfunding), destinatari dell'aiuto (I progetti), un tipo di pubblico (Aziende) e un servizio (Contatti).
- **Manca la risposta alla prima domanda di chi non conosce l'Opera**: "chi siete?". Non c'è una pagina "Chi siamo".
- **"I progetti" non descrive più il contenuto**: i singoli progetti spariscono e la voce porta alle quattro aree (Cura, Accoglienza, Educazione, Missioni).
- **Voci di peso diverso stanno sullo stesso piano**: Crowdfunding ha sei sottovoci per una pagina che ancora non esiste, Contatti è un servizio.

## 2. Le domande di chi arriva sul sito

Un sito di donazione funziona quando il menu segue l'ordine delle domande del donatore:

1. **Chi siete?** Posso fidarmi? (soprattutto chi arriva da una ricerca o da un passaparola)
2. **Chi aiutate?** Dove va il mio aiuto?
3. **Come posso aiutare?** Una donazione, il 5×1000, un lascito, il mio tempo, la mia azienda.
4. **Voglio donare subito.** → pulsante "Dona ora", sempre visibile.

Contatti, privacy e informazioni pratiche sono **servizi**: si cercano quando servono, e il loro posto naturale è il footer (o una barra di servizio).

## 3. Come fanno i siti di riferimento

| Sito | Menu principale | Dove stanno 5×1000 e lasciti | Aziende |
| --- | --- | --- | --- |
| UNICEF Italia | Chi siamo · Cosa facciamo · Media · Diventa volontario · Sostienici + "Dona ora" | dentro "Sostienici" | dentro "Sostienici" |
| Lega del Filo d'Oro | Chi chiede aiuto · Sostienici · Conosci · Contatti + "Dona ora" | dentro "Sostienici", gruppo "Dona ora" | gruppo "Aziende e Fondazioni" dentro "Sostienici" |
| EMERGENCY | Chi siamo · Cosa facciamo · Cosa puoi fare tu · Cultura di pace · Lavora con noi + "Dona" | 5×1000 anche nella barra di servizio in alto; lasciti dentro "Cosa puoi fare tu" | dentro "Cosa puoi fare tu" |
| Cottolengo (sito donazioni attuale) | 10 voci: Chi siamo · Adozioni · Donazioni specifiche · 5×1000 · Testimonianze · Biglietti solidali · Progetti · Contatti · Video · Dona ora | 5×1000 voce propria; testamento dentro "Donazioni specifiche" | — |

Cosa hanno in comune i siti delle grandi organizzazioni:
- **da 4 a 5 voci** al primo livello, più il pulsante di donazione;
- la struttura **Chi siamo → Cosa facciamo / Chi aiutiamo → Come aiutare**;
- tutti i modi di donare, **comprese le aziende**, raccolti sotto **una sola voce** ("Sostienici", "Cosa puoi fare tu"), con sottogruppi;
- le voci che contano molto per la raccolta (EMERGENCY con il 5×1000) **in evidenza anche fuori dal menu**, senza rompere la logica.

## 4. Proposta

Il Cottolengo chiede che **5×1000 e Lasciti** abbiano una voce propria: li teniamo al primo livello e intorno costruiamo una struttura chiara.

**Menu principale (5 voci + "Dona ora"):**

**Chi siamo** · **Chi aiutiamo** ⌄ · **Come aiutarci** ⌄ · **5×1000** · **Lasciti** · [Dona ora]

| Voce | Contenuto | Destinazione |
| --- | --- | --- |
| **Chi siamo** | Due righe per chi non sa niente: chi era il Cottolengo, cosa fa oggi la Piccola Casa, i numeri chiave; contatti; link al sito istituzionale per approfondire | nuova pagina `chi-siamo.html` |
| **Chi aiutiamo** | Cura · Accoglienza · Educazione · Missioni internazionali (titoli e descrizioni delle schede della home) | pagine delle quattro aree con modulo di donazione |
| **Come aiutarci** | Pannello in tre gruppi: **Dona** (Donazione libera · Sostegno a distanza · Dona in memoria · Raccolte solidali) · **Partecipa** (Volontariato) · **Per le aziende** (le voci attuali di Aziende) | pagine e sezioni dedicate |
| **5×1000** | Codice fiscale, come firmare, a cosa serve | slide della hero oggi; poi una pagina breve |
| **Lasciti** | Testamento solidale | `testamento-solidale.html` |
| **Dona ora** | Pulsante, sempre visibile | modulo di donazione |

**Cosa cambia rispetto a oggi**
- **Nuova voce Chi siamo.** Risponde alla prima domanda e dà fiducia.
- **"I progetti" diventa "Chi aiutiamo"**: il nome dice cosa c'è dietro.
- **"Come donare" diventa "Come aiutarci"** e raccoglie anche Crowdfunding (come "Raccolte solidali") e Aziende: sono modi di aiutare, come fanno UNICEF, Lega del Filo d'Oro ed EMERGENCY. Le sei sottovoci del crowdfunding diventano sezioni della sua pagina.
- **Contatti** esce dal menu principale. Va nel footer (dove c'è già), in fondo alla pagina Chi siamo e nelle pagine delle aree. Se il cliente lo vuole sempre in vista: barra di servizio sottile sopra il menu (Contatti · telefono).
- Con 5 voci il menu torna a **17 px con gli spazi di prima** e c'è margine per il futuro.

**Telefono e tablet:** nessuna differenza di logica. Le stesse voci, nello stesso ordine, nell'hamburger; "Dona ora" sempre visibile accanto.

## 5. La pagina Chi siamo

Breve, per chi non conosce l'Opera. Struttura proposta:
1. **Titolo e due righe**: chi siamo e cosa facciamo oggi. Esempio da validare: *«Dal 1832 la Piccola Casa della Divina Provvidenza, fondata a Torino da san Giuseppe Benedetto Cottolengo, accoglie chi è più fragile: anziani, persone con disabilità, malati, bambini. Oggi in Italia e in quattro continenti.»*
2. **Tre o quattro numeri** (gli stessi della home).
3. **Chi aiutiamo**: rimando alle quattro aree.
4. **Trasparenza**: dove vanno le donazioni, bilancio.
5. **Contatti** e link al sito istituzionale per chi vuole approfondire.

## 6. Mappa del sito proposta

```
Home
├── Chi siamo
├── Chi aiutiamo
│   ├── Cura
│   ├── Accoglienza
│   ├── Educazione
│   └── Missioni internazionali
├── Come aiutarci
│   ├── Donazione libera (modulo)
│   ├── Sostegno a distanza
│   ├── Dona in memoria
│   ├── Raccolte solidali (crowdfunding, Myosotis)
│   ├── Volontariato
│   └── Per le aziende
├── 5×1000
├── Lasciti (testamento solidale)
└── Footer: contatti, privacy, cookie, trasparenza
```

## 7. Da decidere con il Cottolengo

- Nomi delle voci: "Chi aiutiamo" o "Chi aiuti con il tuo gesto"; "Come aiutarci" o "Sostienici".
- Contatti solo nel footer o anche in una barra di servizio.
- Testo della pagina Chi siamo.
- Se 5×1000 avrà una pagina propria (consigliato, perché in primavera è la campagna principale).
