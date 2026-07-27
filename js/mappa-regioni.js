/* ==========================================================
   Mappa mondo — Regioni attive (configurazione)
   ----------------------------------------------------------
   UNICA fonte di verità per decidere QUALI regioni si "accendono"
   sulla mappa della home e VERSO QUALE area portano al click.

   • la chiave è il nome del LIVELLO in Illustrator (= id del tracciato
     in assets/svg/mappadot.web.svg): America, Italia, Asia, Africa…
   • "area" è il termine geografico della pagina Progetti:
     europa | africa | asia | america
     (determina la scheda evidenziata e il filtro ?area=… al click).

   ⚠️ EUROPA — asset da produrre in Illustrator.
   Il cliente chiede che si accenda l'Europa INTERA, non la sola Italia.
   Nel sorgente non esiste ancora un livello "Europa": i pallini europei
   stanno nel livello "Disattivi". Dove finisce l'Europa (Turchia?
   Ucraina? Russia fino agli Urali?) è una scelta cartografica da fare a
   mano, non deducibile dalle coordinate: va fatta in Illustrator.

   Da fare quando il livello è pronto:
     1. in Illustrator crea il livello "Europa" e spostaci i pallini
        europei, ITALIA COMPRESA (il livello "Italia" non serve più);
     2. ri-esporta assets/svg/mappadot.svg e lancia
        `python3 tools/build-mappa.py`;
     3. qui sotto cancella la riga `Italia`.
   Fino a quel momento si accende la sola Italia sotto la scheda
   "Europa": entrambe le righe puntano all'area `europa`, quindi il
   comportamento del sito è già quello definitivo.

   Tutto ciò che NON è elencato qui resta grigio: il livello "Disattivi"
   non compare, ed è per questo che fa da sfondo spento.

   ➖ Spegnere una regione: cancella (o commenta) la sua riga. Non serve
      toccare l'SVG: i pallini tornano grigi da soli.
   ➕ Accendere una regione già presente come livello: aggiungi la riga.
   ⚠️ Solo per una regione che NON esiste ancora come livello: in Illustrator
      crea il livello, spostaci i pallini, ri-esporta e rilancia
      `python3 tools/build-mappa.py`, poi aggiungi la riga qui.

   In produzione WordPress questa lista può diventare un campo ACF ripetibile.
   ========================================================== */
window.REGIONI_MAPPA = {
  Europa:  { area: 'europa'  },   // livello ancora da creare: per ora non trovato, ignorato
  Italia:  { area: 'europa'  },   // ← cancella questa riga quando il livello "Europa" esiste
  Africa:  { area: 'africa'  },
  Asia:    { area: 'asia'    },
  America: { area: 'america' },
};
