/* ==========================================================
   Donazioni Cottolengo — interazioni
   ========================================================== */

/* ---------- Modulo donazione: importi, impatto, detrazione ---------- */
const COSTO_PASTO = 5; // € per pasto completo (da validare con l'ente)
const DETRAZIONE = 0.30; // detrazione IRPEF 30% per ETS

const amountRadios = document.querySelectorAll('input[name="importo"]');
const customInput = document.getElementById('amt-custom');
const freqRadios = document.querySelectorAll('input[name="freq"]');
const tipoSelect = document.getElementById('dona-tipo');
const impactText = document.getElementById('impact-text');
const fiscalLine = document.getElementById('fiscal-line');
const donaCta = document.getElementById('dona-cta');

function importoCorrente() {
  const custom = parseFloat(customInput.value);
  if (!isNaN(custom) && custom > 0) return custom;
  const checked = document.querySelector('input[name="importo"]:checked');
  return checked ? parseFloat(checked.value) : 35;
}

function frequenzaCorrente() {
  const checked = document.querySelector('input[name="freq"]:checked');
  return checked ? checked.value : 'singola';
}

function formattaEuro(n) {
  return n.toLocaleString('it-IT', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function descriviImpatto(importo, freq) {
  const pasti = Math.max(1, Math.floor(importo / COSTO_PASTO));
  const ogniMese = freq === 'mensile' ? ' ogni mese' : '';
  if (importo >= 100) {
    return `Con <strong>${formattaEuro(importo)}&nbsp;€</strong>${ogniMese} garantisci <strong>${pasti} pasti caldi</strong> e contribuisci alle cure di un ospite.`;
  }
  if (importo >= 50) {
    return `Con <strong>${formattaEuro(importo)}&nbsp;€</strong>${ogniMese} offri <strong>${pasti} pasti caldi</strong> e materiale scolastico per un bambino.`;
  }
  return `Con <strong>${formattaEuro(importo)}&nbsp;€</strong>${ogniMese} offri <strong>${pasti} pasti caldi</strong> a chi non ha nulla.`;
}

function aggiornaCard() {
  const importo = importoCorrente();
  const freq = frequenzaCorrente();

  impactText.innerHTML = descriviImpatto(importo, freq);

  const costoReale = importo * (1 - DETRAZIONE);
  fiscalLine.innerHTML =
    `La tua donazione è <strong>detraibile al 30%</strong>: ` +
    `${formattaEuro(importo)}&nbsp;€ te ne costano davvero solo <strong>${formattaEuro(costoReale)}&nbsp;€</strong>.`;

  const etichettaFreq = freq === 'mensile' ? ' al mese' : '';
  donaCta.textContent = `Dona ${formattaEuro(importo)} € adesso${etichettaFreq}`;

  // passa la scelta alla piattaforma di pagamento (deep-link verso Myosotis)
  const url = new URL('https://dona.cottolengo.org/');
  url.searchParams.set('importo', importo);
  url.searchParams.set('ricorrenza', freq);
  if (tipoSelect) url.searchParams.set('causale', tipoSelect.value);
  donaCta.href = url.toString();
}

if (tipoSelect) tipoSelect.addEventListener('change', aggiornaCard);

amountRadios.forEach(r => r.addEventListener('change', () => {
  customInput.value = '';
  aggiornaCard();
}));

customInput.addEventListener('input', () => {
  if (customInput.value !== '') {
    amountRadios.forEach(r => (r.checked = false));
  } else {
    document.getElementById('amt-35').checked = true;
  }
  aggiornaCard();
});

freqRadios.forEach(r => r.addEventListener('change', aggiornaCard));

aggiornaCard();

/* ---------- Menu mobile ---------- */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const aperto = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', aperto);
  burger.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
});

// chiudi il menu quando si sceglie una voce
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

/* ---------- Dropdown "Come donare" ---------- */
const dropdownItem = document.querySelector('.nav__item--dropdown');
const dropdownToggle = document.querySelector('.nav__dropdown-toggle');

dropdownToggle.addEventListener('click', e => {
  e.stopPropagation();
  const aperto = dropdownItem.classList.toggle('open');
  dropdownToggle.setAttribute('aria-expanded', aperto);
});

document.addEventListener('click', e => {
  if (!dropdownItem.contains(e.target)) {
    dropdownItem.classList.remove('open');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    dropdownItem.classList.remove('open');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  }
});

/* ---------- Contatori animati ---------- */
const counters = document.querySelectorAll('.numbers__value');

function animaContatore(el, durata = 1400) {
  const target = parseInt(el.dataset.count, 10);
  const plain = el.dataset.plain === 'true'; // es. l'anno 1832: niente separatore migliaia
  const suffisso = el.dataset.suffix || ''; // es. "%" per la ciambella
  const inizio = performance.now();

  function step(ora) {
    const t = Math.min((ora - inizio) / durata, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(target * eased);
    el.textContent = (plain ? String(val) : val.toLocaleString('it-IT')) + suffisso;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (ridotto) {
  counters.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    el.textContent = el.dataset.plain === 'true' ? String(target) : target.toLocaleString('it-IT');
  });
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animaContatore(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

/* ---------- Grafico "dove va la donazione": anima all'ingresso in vista ---------- */
const whereSection = document.querySelector('.where');
if (whereSection) {
  // il numero al centro della ciambella conta da 0 a 84 in sincrono con gli archi
  const donutNum = whereSection.querySelector('.donut [data-count]');
  if (ridotto) {
    whereSection.classList.add('is-visible'); // l'HTML mostra già il valore finale (84%)
  } else {
    if (donutNum) donutNum.textContent = '0' + (donutNum.dataset.suffix || '');
    const whereObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          whereSection.classList.add('is-visible');
          if (donutNum) animaContatore(donutNum, 1200); // stessa durata del disegno degli archi
          obs.disconnect();
        }
      });
    }, { threshold: 0.35 });
    whereObs.observe(whereSection);
  }
}

/* ---------- Tab "Tanti modi per fare del bene" ---------- */
(function initModiTabs() {
  const nav = document.querySelector('.modi__nav');
  if (!nav) return;
  const tabs = Array.from(nav.querySelectorAll('.modi__tab'));
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

  function attiva(i) {
    tabs.forEach((tab, k) => {
      const sel = k === i;
      tab.classList.toggle('is-active', sel);
      tab.setAttribute('aria-selected', String(sel));
      tab.tabIndex = sel ? 0 : -1;
      if (panels[k]) panels[k].hidden = !sel;
    });
    // su mobile l'elenco è una riga di chip che scorre: porta in vista quella scelta
    if (nav.scrollWidth > nav.clientWidth) {
      tabs[i].scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
    }
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => attiva(i));
    // navigazione da tastiera tra i tab (frecce, Home/End)
    tab.addEventListener('keydown', e => {
      let target = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') target = (i + 1) % tabs.length;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') target = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') target = 0;
      else if (e.key === 'End') target = tabs.length - 1;
      if (target !== null) {
        e.preventDefault();
        attiva(target);
        tabs[target].focus();
      }
    });
  });
})();

/* ---------- Copia codice fiscale 5x1000 (uno o più pulsanti) ---------- */
function abilitaCopia(btn, codice) {
  if (!btn) return;
  const label = btn.querySelector('.btn__label');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codice.trim());
      if (label) {
        const originale = label.textContent;
        label.textContent = 'Copiato ✓';
        setTimeout(() => (label.textContent = originale), 2000);
      }
    } catch {
      // clipboard non disponibile: niente da fare in modo silenzioso
    }
  });
}

// pulsanti con il codice fiscale nell'attributo data-copy
document.querySelectorAll('.btn--copy[data-copy]').forEach(b => abilitaCopia(b, b.dataset.copy));

/* ---------- Carosello banner campagne (auto-scroll ogni 5s) ---------- */
(function initCarosello() {
  const track = document.getElementById('cpm-track');
  const dotsWrap = document.getElementById('cpm-dots');
  const pauseBtn = document.getElementById('cpm-pause');
  if (!track) return;

  const slides = Array.from(track.children);
  if (slides.length < 2) { if (pauseBtn) pauseBtn.style.display = 'none'; return; }

  const INTERVALLO = 5000; // 5 secondi
  let indice = 0;
  let timer = null;
  let inPausa = false;
  const ridottoMov = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // crea i pallini di navigazione
  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.className = 'cpm-dot';
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Campagna ${i + 1} di ${slides.length}`);
    b.addEventListener('click', () => { vaiA(i); riavvia(); });
    dotsWrap.appendChild(b);
    return b;
  });

  function vaiA(i) {
    indice = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${indice * 100}%)`;
    dots.forEach((d, k) => d.setAttribute('aria-selected', String(k === indice)));
  }

  function avanti() { vaiA(indice + 1); }

  function avvia() {
    if (inPausa || ridottoMov) return;
    stop();
    timer = setInterval(avanti, INTERVALLO);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function riavvia() { stop(); avvia(); }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      inPausa = !inPausa;
      pauseBtn.setAttribute('aria-label', inPausa ? 'Riprendi lo scorrimento automatico' : 'Metti in pausa lo scorrimento automatico');
      if (inPausa) stop(); else avvia();
    });
  }

  // pausa quando il mouse è sopra o c'è focus da tastiera
  const banner = document.getElementById('cpm-banner');
  banner.addEventListener('mouseenter', stop);
  banner.addEventListener('mouseleave', () => { if (!inPausa) avvia(); });
  banner.addEventListener('focusin', stop);
  banner.addEventListener('focusout', () => { if (!inPausa) avvia(); });

  vaiA(0);
  avvia();
})();

/* ---------- Mappa interattiva: progetti nel mondo ----------
   L'SVG della mappa è un file esterno (assets/svg/mappadot.web.svg): qui lo
   iniettiamo inline nel DOM (serve per poterlo stilare e manipolare) e poi
   accendiamo le regioni elencate in js/mappa-regioni.js. In produzione
   l'SVG può essere incluso lato server: se è già nel DOM saltiamo il fetch. */
(function initMappa() {
  const host = document.getElementById('world-map');
  const cardsList = document.getElementById('world-cards');
  if (!host || !cardsList) return;

  /* Aree: schede laterali + destinazione del filtro sulla pagina Progetti.
     Le chiavi sono i termini di `area_geografica` (vedi js/progetti-dati.js):
     cliccando "Europa" l'archivio mostra anche i progetti dei termini figli,
     oggi la sola Italia. I nomi arrivano da AREE per non duplicarli. */
  const SCHEDE = [
    { key: 'europa',  testo: 'Testo placeholder: la Piccola Casa di Torino e le opere di carità in Italia, cuore europeo dell’Opera.' },
    { key: 'africa',  testo: 'Testo placeholder: missioni, scuole e assistenza sanitaria a sostegno delle comunità africane.' },
    { key: 'asia',    testo: 'Testo placeholder: accoglienza e cura delle persone più fragili nei progetti in Asia.' },
    { key: 'america', testo: 'Testo placeholder: a Tachina, in Ecuador, accoglienza per anziani soli e senza dimora.' },
  ];
  const AREE_SCHEDE = SCHEDE.map(s => ({
    ...s,
    nome: typeof nomeArea === 'function' ? nomeArea(s.key) : s.key,
    href: `progetti.html?area=${s.key}`,
  }));

  const svgInDom = document.getElementById('map-svg');
  if (svgInDom) {
    setup(svgInDom);                     // già inline (es. include lato server)
  } else if (host.dataset.mapSrc) {
    fetch(host.dataset.mapSrc)           // prototipo statico: carico e inietto
      .then(r => r.text())
      .then(txt => {
        host.insertAdjacentHTML('afterbegin', txt);
        setup(document.getElementById('map-svg'));
      })
      .catch(() => costruisciSchede());  // se l'SVG non carica, le schede restano usabili
  } else {
    costruisciSchede();
  }

  // crea le schede laterali e restituisce i riferimenti per area
  function costruisciSchede() {
    const refs = {};
    AREE_SCHEDE.forEach(a => {
      const li = document.createElement('li');
      const card = document.createElement('a');
      card.className = 'world-card';
      card.href = a.href;
      card.setAttribute('aria-label', `Scopri i progetti in ${a.nome}`);
      card.innerHTML =
        `<div class="world-card__body">` +
          `<span class="world-card__title">${a.nome}</span>` +
          `<p class="world-card__text">${a.testo}</p>` +
        `</div>`;
      li.appendChild(card);
      cardsList.appendChild(li);
      refs[a.key] = { card, href: a.href, nome: a.nome, regioni: [] };
    });
    return refs;
  }

  function setup(mapSvg) {
    const refs = costruisciSchede();
    if (!mapSvg) return;

    // accendi le regioni elencate nella config e collegale alla loro area
    const REGIONI = window.REGIONI_MAPPA || {};
    Object.keys(REGIONI).forEach(id => {
      const area = REGIONI[id].area;
      const el = mapSvg.getElementById(id);   // <path id="Africa"> ecc.
      if (!el || !refs[area]) return;
      el.classList.add('is-live');
      refs[area].regioni.push(el);
    });

    // Sensore invisibile sul bounding box di ogni regione: i pallini hanno spazi
    // vuoti tra loro, così l'hover scatta sull'intera area e non sul singolo punto.
    const SVGNS = 'http://www.w3.org/2000/svg';
    const sensori = Object.keys(refs).map(key => {
      const regioni = refs[key].regioni;
      if (!regioni.length) return null;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      regioni.forEach(el => {
        const b = el.getBBox();
        minX = Math.min(minX, b.x); minY = Math.min(minY, b.y);
        maxX = Math.max(maxX, b.x + b.width); maxY = Math.max(maxY, b.y + b.height);
      });
      return { key, x: minX, y: minY, w: maxX - minX, h: maxY - minY, area: (maxX - minX) * (maxY - minY) };
    }).filter(Boolean);

    // i sensori più piccoli vanno sopra (aggiunti per ultimi) per vincere sugli overlap
    sensori.sort((a, b) => b.area - a.area);
    sensori.forEach(s => {
      const rect = document.createElementNS(SVGNS, 'rect');
      rect.setAttribute('x', s.x); rect.setAttribute('y', s.y);
      rect.setAttribute('width', s.w); rect.setAttribute('height', s.h);
      rect.setAttribute('pointer-events', 'all');
      rect.setAttribute('class', 'world__hit');
      rect.setAttribute('role', 'link');
      rect.setAttribute('tabindex', '0');
      rect.setAttribute('aria-label', `Progetti in ${refs[s.key].nome}`);
      mapSvg.appendChild(rect);
      refs[s.key].hit = rect;
    });

    function attiva(key, on) {
      const r = refs[key];
      if (!r) return;
      mapSvg.classList.toggle('is-dimmed', on);      // le altre regioni si slavano
      [r.card, ...r.regioni].forEach(el => el && el.classList.toggle('is-active', on));
    }

    // evidenziazione incrociata scheda ↔ mappa + click → pagina Progetti filtrata
    Object.keys(refs).forEach(key => {
      const r = refs[key];
      const enter = () => attiva(key, true);
      const leave = () => attiva(key, false);
      const vai = () => { window.location.href = r.href; };

      [r.card, r.hit].forEach(el => {
        if (!el) return;
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        el.addEventListener('focus', enter);
        el.addEventListener('blur', leave);
      });

      if (r.hit) {
        r.hit.addEventListener('click', vai);
        r.hit.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); vai(); }
        });
      }
    });
  }
})();

/* ---------- Carosello testimonianze (auto-scorrimento a timer) ---------- */
(function initTestimonianze() {
  const track = document.getElementById('quote-track');
  const dotsWrap = document.getElementById('quote-dots');
  const pauseBtn = document.getElementById('quote-pause');
  const root = document.getElementById('quote-carousel');
  if (!track) return;

  const slides = Array.from(track.children);
  if (slides.length < 2) { if (pauseBtn) pauseBtn.style.display = 'none'; return; }

  const INTERVALLO = 6000; // 6 secondi
  let indice = 0, timer = null, inPausa = false;
  const ridottoMov = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.className = 'quote-dot';
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Testimonianza ${i + 1} di ${slides.length}`);
    b.addEventListener('click', () => { vaiA(i); riavvia(); });
    dotsWrap.appendChild(b);
    return b;
  });

  // larghezza di una slide in % della larghezza visibile (auto: segue la flex-basis del CSS)
  function larghezzaSlidePct() {
    const vis = root.getBoundingClientRect().width || 1;
    return slides[0].getBoundingClientRect().width / vis * 100;
  }

  function vaiA(i) {
    indice = (i + slides.length) % slides.length;
    const w = larghezzaSlidePct();
    const gap = (100 - w) / 2;                 // margine per centrare la slide attiva
    track.style.transform = `translateX(${(gap - indice * w).toFixed(3)}%)`;
    slides.forEach((s, k) => s.classList.toggle('is-current', k === indice));
    dots.forEach((d, k) => d.setAttribute('aria-selected', String(k === indice)));
  }
  function avanti() { vaiA(indice + 1); }
  function avvia() { if (inPausa || ridottoMov) return; stop(); timer = setInterval(avanti, INTERVALLO); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function riavvia() { stop(); avvia(); }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      inPausa = !inPausa;
      pauseBtn.setAttribute('aria-label', inPausa ? 'Riprendi lo scorrimento automatico' : 'Metti in pausa lo scorrimento automatico');
      if (inPausa) stop(); else avvia();
    });
  }

  // ricalcola la posizione al ridimensionamento (la larghezza slide cambia col CSS)
  window.addEventListener('resize', () => vaiA(indice));

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', () => { if (!inPausa) avvia(); });
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', () => { if (!inPausa) avvia(); });

  vaiA(0);
  avvia();
})();

/* ---------- Carosello "Progetti da sostenere" (finestra sull'archivio) ----------
   Mostra i progetti con il flag "In evidenza" definito in js/progetti-dati.js,
   con LE STESSE card della pagina Progetti: una sola card, due contesti.

   Scorrimento orizzontale ciclico: le frecce avanzano di una card e, arrivate
   in fondo, ricominciano dall'inizio (e viceversa). Nessuna card duplicata nel
   DOM: così ogni card resta cliccabile e lo screen reader legge i progetti una
   volta sola. Su touch funziona anche lo swipe nativo (scroll-snap).

   In WordPress: WP_Query sul CPT `progetti` con meta_query sul campo ACF
   "in evidenza"; se si vuole un loop infinito con cloni, lo dà Swiper
   (`loop: true`) senza cambiare markup. */
(function initEvidenza() {
  const track = document.getElementById('evid-track');
  if (!track) return;
  // i dati arrivano da js/progetti-dati.js: se manca, la sezione si nasconde
  if (typeof PROGETTI === 'undefined' || typeof cardProgetto !== 'function') return;

  const sezione = document.getElementById('progetti-evidenza');
  const evidenza = PROGETTI.filter(p => p.inEvidenza);
  if (!evidenza.length) { if (sezione) sezione.hidden = true; return; }

  evidenza.forEach(p => {
    const li = document.createElement('li');
    li.className = 'evid-item';
    li.appendChild(cardProgetto(p));
    track.appendChild(li);
  });

  const prev = document.getElementById('evid-prev');
  const next = document.getElementById('evid-next');

  // larghezza di un passo = una card + il gap che la separa dalla successiva
  function passo() {
    const primo = track.querySelector('.evid-item');
    if (!primo) return track.clientWidth;
    const stili = getComputedStyle(track);
    const gap = parseFloat(stili.columnGap || stili.gap) || 0;
    return primo.getBoundingClientRect().width + gap;
  }

  const scorribile = () => track.scrollWidth - track.clientWidth;

  function scorri(direzione) {
    const max = scorribile();
    if (max <= 1) return;                       // tutte le card sono già visibili
    const ora = track.scrollLeft;
    let destinazione = ora + direzione * passo();
    // ciclico: oltre la fine si riparte dall'inizio, prima dell'inizio si va in fondo
    if (direzione > 0 && ora >= max - 2) destinazione = 0;
    else if (direzione < 0 && ora <= 2) destinazione = max;
    // chi ha chiesto meno animazioni salta direttamente alla posizione
    const dolce = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({
      left: Math.max(0, Math.min(destinazione, max)),
      behavior: dolce ? 'smooth' : 'auto',
    });
  }

  if (prev) prev.addEventListener('click', () => scorri(-1));
  if (next) next.addEventListener('click', () => scorri(1));

  // le frecce servono solo se c'è qualcosa da scorrere
  function aggiornaFrecce() {
    const serve = scorribile() > 1;
    [prev, next].forEach(b => { if (b) b.hidden = !serve; });
  }
  aggiornaFrecce();
  window.addEventListener('resize', aggiornaFrecce);
  window.addEventListener('load', aggiornaFrecce);   // le copertine arrivano dopo
})();

/* ---------- Above the fold: nav + banner + hero = 100% dell'altezza schermo ---------- */
(function initFoldHeight() {
  const header = document.querySelector('.header');
  const banner = document.getElementById('cpm-banner');
  const hero = document.querySelector('.hero');
  if (!header || !hero) return;

  function aggiorna() {
    const occupato = header.offsetHeight + (banner ? banner.offsetHeight : 0);
    // altezza della hero perché nav + banner + hero riempiano la viewport
    const h = Math.max(0, window.innerHeight - occupato);
    document.documentElement.style.setProperty('--fold-h', h + 'px');
  }

  aggiorna();
  window.addEventListener('resize', aggiorna);
  window.addEventListener('orientationchange', aggiorna);
  window.addEventListener('load', aggiorna);   // ricalcola quando immagini/banner hanno l'altezza definitiva
  // il banner ha immagini che cambiano l'altezza dopo il caricamento: riallinea appena le dimensioni cambiano
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(aggiorna);
    ro.observe(header);
    if (banner) ro.observe(banner);
  }
  // reti di sicurezza per font/immagini che arrivano tardi
  setTimeout(aggiorna, 300);
  setTimeout(aggiorna, 1200);
})();

/* ---------- Barra "Dona ora" fissa su mobile ---------- */
const stickyDona = document.getElementById('sticky-dona');
const donaCard = document.getElementById('dona');

const stickyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const visibile = !entry.isIntersecting;
    stickyDona.classList.toggle('visible', visibile);
    stickyDona.setAttribute('aria-hidden', String(!visibile));
  });
}, { threshold: 0.05 });

stickyObserver.observe(donaCard);
