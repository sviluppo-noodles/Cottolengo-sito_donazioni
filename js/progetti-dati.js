/* ==========================================================
   Progetti — DATI E CARD (file condiviso)
   ----------------------------------------------------------
   Caricato da index.html E da progetti.html: la home ne usa i
   progetti "in evidenza" per il carosello, la pagina Progetti
   li usa tutti per l'archivio filtrabile. Una sola fonte di verità.

   In produzione WordPress questo file non esiste: i dati arrivano
   dal CPT "progetti" (tassonomie area_geografica / chi_aiuti +
   campi ACF "in evidenza" e link Myosotis). La funzione
   cardProgetto() diventa il partial del template della card, così
   home e archivio continuano a mostrare la stessa card.

   Contenuti reali ripresi dalle pagine progetti di
   donazioni.cottolengo.org. Copy sintetizzato dalle schede originali.
   ========================================================== */

/* ---------- Asse geografico: tassonomia GERARCHICA ----------
   Rispecchia `area_geografica` in WordPress: Europa è il termine
   padre, Italia il figlio. Filtrando sul padre si ottengono anche i
   progetti dei figli — è così che il click sull'Europa nella mappa
   della home mostra i progetti italiani.

   ➕ Nuovo Paese europeo: aggiungi la riga con `padre: 'europa'`.
      Il filtro e il menu a tendina si aggiornano da soli. */
const AREE = {
  europa:  { nome: 'Europa'  },
  italia:  { nome: 'Italia',  padre: 'europa' },
  africa:  { nome: 'Africa'  },
  asia:    { nome: 'Asia'    },
  america: { nome: 'America' },
};

/* ---------- Asse tematico: tassonomia PIATTA (`chi_aiuti`) ---------- */
const CATEGORIE = {
  'anziani-fragili':        'Anziani fragili',
  'persone-con-disabilita': 'Persone con disabilità',
  'educazione-e-famiglie':  'Educazione e famiglie',
  'cure-sanitarie':         'Cure sanitarie',
  'poverta-emergenze':      'Povertà ed emergenze',
};

/* nome leggibile di un'area */
const nomeArea = slug => (AREE[slug] ? AREE[slug].nome : slug);

/* i termini che rientrano in un filtro: il termine stesso + i suoi figli.
   areaEDiscendenti('europa') → ['europa', 'italia'] */
const areaEDiscendenti = slug =>
  [slug, ...Object.keys(AREE).filter(k => AREE[k].padre === slug)];

/* ---------- Dati progetti ----------
   Ogni oggetto rispecchia i campi del DB: titolo, copertina, copy,
   aree[], categorie[], donaUrl, inEvidenza.

   L'ORDINE conta: dentro ogni gruppo la lista dell'archivio conserva
   quest'ordine (l'ordinamento per "in evidenza" è stabile). L'ordine
   dei progetti italiani è quello di priorità indicato dal cliente. */
const PROGETTI = [
  /* ===================== EUROPA › ITALIA =====================
     Priorità del cliente (sintesi criticità): 1 Family Cottolengo ·
     2 Emergenza educativa · 3 Dona un pasto · 4 Ambulatorio Granetti
     → questi quattro sono i progetti "in evidenza". Dal 5° in poi si
     raggiungono da "Vedi tutti i progetti". */
  {
    titolo: 'Family Cottolengo',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2021/06/Foto-COTTOLENGO-FAMILY-progetti.png',
    copy: 'Accanto alle persone con disabilità grave accolte dalla Piccola Casa: cura quotidiana, dignità e il calore di una famiglia.',
    aree: ['italia'], categorie: ['persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/family-cottolengo/', inEvidenza: true,
  },
  {
    titolo: 'Emergenza educativa nelle Scuole Cottolengo',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2016/01/torino2.jpeg',
    copy: 'Sostegno allo studio e alla crescita dei ragazzi nelle 11 Scuole Cottolengo, nate per accogliere prima di tutto chi ha più bisogno.',
    aree: ['italia'], categorie: ['educazione-e-famiglie'],
    donaUrl: 'https://donazioni.cottolengo.org/emergenza-educativa-nelle-scuole-cottolengo/', inEvidenza: true,
  },
  {
    titolo: 'Dona un pasto',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2016/01/Foto-DONA-UN-PASTO-progetti.png',
    copy: 'Oltre 110.000 pasti completi ogni anno alle persone indigenti e senza dimora, nelle mense Cottolengo di Torino e Pisa.',
    aree: ['italia'], categorie: ['poverta-emergenze'],
    donaUrl: 'https://donazioni.cottolengo.org/dona-un-pasto/', inEvidenza: true,
  },
  {
    titolo: 'Ambulatorio Granetti',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2020/08/Ambulatorio.Dott_.Granetti.Piccola.Casa-Torino.jpg',
    copy: 'Prestazioni mediche e infermieristiche gratuite per chi non può permettersele, nel segno della cura propria del Cottolengo.',
    aree: ['italia'], categorie: ['cure-sanitarie'],
    donaUrl: 'https://donazioni.cottolengo.org/ambulatorio-granetti/', inEvidenza: true,
  },
  {
    titolo: 'Cottolengo Hospice',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2021/06/Foto-Hospice-Progetti.jpg',
    copy: 'Cure palliative, ascolto e dignità per i malati inguaribili, accompagnati con amore fino all’ultimo istante di vita.',
    aree: ['italia'], categorie: ['cure-sanitarie', 'anziani-fragili'],
    donaUrl: 'https://donazioni.cottolengo.org/cottolengo-hospice/', inEvidenza: false,
  },
  {
    titolo: 'Un volto nuovo per l’Ospedale Cottolengo',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2022/10/1600x898_bis.jpg',
    copy: 'Un’accoglienza più umana e confortevole per le pazienti che affrontano la chemioterapia all’Ospedale Cottolengo di Torino.',
    aree: ['italia'], categorie: ['cure-sanitarie'],
    donaUrl: 'https://donazioni.cottolengo.org/un-volto-nuovo/', inEvidenza: false,
  },
  {
    titolo: 'Dona un indumento',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2020/05/Foto-DONA-UN-INDUMENTO-progetti.png',
    copy: 'Abiti puliti, scarpe e una doccia calda per restituire dignità a bambini e adulti che vivono in grave difficoltà.',
    aree: ['italia'], categorie: ['poverta-emergenze'],
    donaUrl: 'https://donazioni.cottolengo.org/dona-un-indumento-emergenza-covid-19/', inEvidenza: false,
  },
  {
    titolo: 'Una Casa per la Vita',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2020/03/pisa1.jpg',
    copy: 'Cento anni di accoglienza a Pisa: assistenza e conforto a persone sole, orfane e con disabilità, grazie ai benefattori.',
    aree: ['italia'], categorie: ['persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/casa-la-vita/', inEvidenza: false,
  },

  /* ===================== AFRICA (Kenya · Tanzania) ===================== */
  {
    titolo: 'Salute e gioia per i bambini di Tobora',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2025/02/1-SALUTE-E-GIOIA-PER-I-PICCOLI.jpg',
    copy: 'Un pasto caldo e nutriente ogni giorno, per un anno intero, ai bambini della Scuola Sant’Irene di Tobora, in Tanzania.',
    aree: ['africa'], categorie: ['cure-sanitarie', 'educazione-e-famiglie'],
    donaUrl: 'https://donazioni.cottolengo.org/salute-e-gioia-per-i-bambini-di-tobora/', inEvidenza: true,
  },
  {
    titolo: 'Studiare… voce del verbo… seminare!',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2025/02/3-Studuare-voce-del-verbo-Seminare.jpg',
    copy: 'Istruzione e un futuro possibile per 70 bambini con disabilità e denutriti del centro Tuuru, nel nord-est del Kenya.',
    aree: ['africa'], categorie: ['educazione-e-famiglie', 'persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/studiare-voce-de-verbo-seminare/', inEvidenza: false,
  },
  {
    titolo: 'Piccoli passi per Matemanga',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2025/02/2-PICCOLI-PASSI.jpg',
    copy: 'Sostegno alla scuola materna e alla comunità di Matemanga, dove tre suore cottolenghine si prendono cura dei più piccoli.',
    aree: ['africa'], categorie: ['educazione-e-famiglie'],
    donaUrl: 'https://donazioni.cottolengo.org/piccoli-passi-per-matemanga/', inEvidenza: false,
  },
  {
    titolo: 'B.E.G. — Bridging Educational Gaps',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2023/02/Progetto-BEG-immagine-1.jpg',
    copy: 'Un nuovo plesso scolastico a Kisarawe — aule, mensa e laboratori — per i bambini più poveri e con disabilità della Tanzania.',
    aree: ['africa'], categorie: ['educazione-e-famiglie', 'persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/b-e-g-bridging-educational-gaps/', inEvidenza: false,
  },
  {
    titolo: 'Lo scrigno delle perle',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2022/01/IMG_1083.jpg',
    copy: 'Accoglienza residenziale, fisioterapia e attività per 51 uomini con disabilità alla missione di Chaaria, in Kenya.',
    aree: ['africa'], categorie: ['persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/lo-scrigno-delle-perle/', inEvidenza: false,
  },
  {
    titolo: '2 stampelle, sorrisi moltiplicati',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2021/07/foto-2-STAMPELLE-SORRISI-progetti.jpg',
    copy: 'Ausili e dispositivi prodotti in loco per rendere più autonoma la vita dei bambini con disabilità motorie in Kenya.',
    aree: ['africa'], categorie: ['persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/2-stampelle-sorrisi-moltiplicati/', inEvidenza: false,
  },
  {
    titolo: 'Progetto Maria Carola Animal Feeds (MACAFE)',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2024/11/p.-16-CASA-MARIA-CAROLA-scaled.jpg',
    copy: 'Un allevamento sostenibile e mangimi di qualità a Kisarawe, per l’autosostentamento della comunità e delle famiglie.',
    aree: ['africa'], categorie: ['poverta-emergenze'],
    donaUrl: 'https://donazioni.cottolengo.org/progetto-maria-carola-animal-feeds-macafe/', inEvidenza: false,
  },

  /* ===================== AMERICA (Ecuador) ===================== */
  {
    titolo: 'Adotta un nonno a Tachina',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2022/09/Foto-ADOTTO-UN-NONNO-A-TACHINA-progetti.jpg',
    copy: 'Un tetto, cure e una famiglia per gli anziani soli e nullatenenti accolti dai Fratelli Cottolenghini a Tachina, in Ecuador.',
    aree: ['america'], categorie: ['anziani-fragili'],
    donaUrl: 'https://donazioni.cottolengo.org/adotta-un-nonno-a-tachina/', inEvidenza: true,
  },
  {
    titolo: 'Un medico per la Fundación Cottolengo',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2022/09/Foto-UN-MEDICO-PER-LA-FUNDATION-COTTOLENGO-progetti.jpg',
    copy: 'Garantire la presenza continua di un medico alla Fundación Cottolengo di Manta, nei quartieri più poveri dell’Ecuador.',
    aree: ['america'], categorie: ['cure-sanitarie'],
    donaUrl: 'https://donazioni.cottolengo.org/un-dottore-la-fundacion-cottolengo/', inEvidenza: false,
  },

  /* ===================== ASIA (India) ===================== */
  {
    titolo: 'Un tetto sicuro e acqua per la Scuola Speciale di Kochi',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2024/11/p.-15-tetto.jpg',
    copy: 'Una struttura sicura e acqua potabile per i 75 studenti con disabilità della Scuola Speciale di Fort-Kochi, in India.',
    aree: ['asia'], categorie: ['persone-con-disabilita', 'educazione-e-famiglie'],
    donaUrl: 'https://donazioni.cottolengo.org/un-tetto-sicuro-e-acqua-per-tutti-per-la-scuola-speciale-di-kochi/', inEvidenza: true,
  },
  {
    titolo: 'Spazio di gioia… a Coimbatore!',
    img: 'https://donazioni.cottolengo.org/wp-content/uploads/2024/06/01-1-scaled.jpg',
    copy: 'Nuove aule e un salone per i laboratori occupazionali di bambini e adulti con disabilità a Coimbatore, in India.',
    aree: ['asia'], categorie: ['persone-con-disabilita'],
    donaUrl: 'https://donazioni.cottolengo.org/spazio-di-gioia-a-coimbatore/', inEvidenza: false,
  },
];

/* ---------- Costruzione di una card progetto ----------
   Usata identica dall'archivio (griglia) e dalla home (carosello). */
const PIN = '<svg class="pill__icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="currentColor"/></svg>';

function pillole(p) {
  // pillola area (con segnaposto) + pillole "chi aiuti"
  const aree = p.aree.map(a => `<span class="pill pill--area">${PIN}${nomeArea(a)}</span>`).join('');
  const cat  = p.categorie.map(c => `<span class="pill pill--cat">${CATEGORIE[c] || c}</span>`).join('');
  return aree + cat;
}

function cardProgetto(p) {
  const art = document.createElement('article');
  art.className = 'proj-card' + (p.inEvidenza ? ' proj-card--evidenza' : '');
  art.innerHTML =
    `<div class="proj-card__media">` +
      (p.inEvidenza ? `<span class="proj-card__flag">In evidenza</span>` : '') +
      `<img src="${p.img}" alt="${p.titolo}" loading="lazy">` +
    `</div>` +
    `<div class="proj-card__body">` +
      `<div class="proj-card__tags">${pillole(p)}</div>` +
      `<h3 class="proj-card__title">${p.titolo}</h3>` +
      `<p class="proj-card__copy">${p.copy}</p>` +
      `<a class="btn proj-card__cta" href="${p.donaUrl}">Dona ora <span aria-hidden="true">→</span></a>` +
    `</div>`;
  return art;
}
