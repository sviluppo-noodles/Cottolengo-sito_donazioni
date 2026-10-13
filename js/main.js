/* ==========================================================
   Donazioni Cottolengo — interazioni
   ========================================================== */

/* ---------- Modulo donazione: importi e impatto ---------- */
const COSTO_PASTO = 5; // € per pasto completo (da validare con l'ente)

const amountRadios = document.querySelectorAll('input[name="importo"]');
const customInput = document.getElementById('amt-custom');
const freqRadios = document.querySelectorAll('input[name="freq"]');
const tipoSelect = document.getElementById('dona-tipo');
const impactText = document.getElementById('impact-text');
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

  // la nota fiscale (#fiscal-line) è un testo fisso nell'HTML: non dipende
  // dall'importo e non viene riscritta qui

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
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
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

/* Copia codice fiscale 5x1000: gestita da js/nav.js (presente su tutte le pagine) */

/* ---------- Hero campagne: carosello in dissolvenza (ogni 6s) ----------
   Il pallino attivo si riempie man mano: mostra quale campagna è attiva e
   quanto manca alla successiva (l'animazione è in CSS: --cpm-durata deve valere INTERVALLO).
   Si ferma col pulsante pausa, col mouse sopra o col focus da tastiera, e
   dopo una sosta riparte da dove era rimasta. Con "riduci movimento" attivo
   non parte da solo. Su telefono si sfoglia col dito. Le slide nascoste
   sono `inert`: il tasto Tab non entra nei loro pulsanti. */
(function initCarosello() {
  const banner = document.getElementById('cpm-banner');
  const track = document.getElementById('cpm-track');
  const dotsWrap = document.getElementById('cpm-dots');
  const pauseBtn = document.getElementById('cpm-pause');
  if (!banner || !track) return;

  const slides = Array.from(track.querySelectorAll('.cpm-slide'));
  if (!slides.length) return;
  if (slides.length < 2) {
    slides[0].classList.add('is-attiva');
    banner.classList.add('is-singola');
    return;
  }

  const INTERVALLO = 6000; // ms — uguale a --cpm-durata in css/style.css
  const ridottoMov = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let indice = 0;
  let timer = null;
  let inPausa = false;     // pausa scelta dall'utente col pulsante
  let trascorso = 0;       // ms già passati sulla slide attiva prima di una sosta
  let partitoAlle = 0;

  // pallini di navigazione: uno per campagna
  const dots = slides.map((s, i) => {
    const b = document.createElement('button');
    b.className = 'cpm-dot';
    b.type = 'button';
    b.setAttribute('role', 'tab');
    const titolo = s.querySelector('.cpm-slide__title');
    b.setAttribute('aria-label', `Campagna ${i + 1} di ${slides.length}` + (titolo ? `: ${titolo.textContent.trim()}` : ''));
    b.addEventListener('click', () => { vaiA(i); avvia(); });
    dotsWrap.appendChild(b);
    return b;
  });

  function vaiA(i) {
    indice = (i + slides.length) % slides.length;
    trascorso = 0;
    slides.forEach((s, k) => {
      const attiva = k === indice;
      s.classList.toggle('is-attiva', attiva);
      s.inert = !attiva;
      s.setAttribute('aria-hidden', String(!attiva));
    });
    // slide su fondo chiaro: pallini e pausa passano al blu per restare visibili
    banner.classList.toggle('is-chiara', slides[indice].classList.contains('cpm-slide--chiara'));
    dots.forEach((d, k) => {
      d.setAttribute('aria-selected', String(k === indice));
      d.tabIndex = k === indice ? 0 : -1;
      if (k === indice) {           // fa ripartire da zero il riempimento del pallino
        d.classList.remove('is-viva'); void d.offsetWidth; d.classList.add('is-viva');
      }
    });
  }

  function avvia() {
    if (timer) { clearTimeout(timer); timer = null; }
    if (inPausa || ridottoMov) return;
    banner.classList.remove('is-ferma');
    partitoAlle = performance.now();
    timer = setTimeout(() => { timer = null; vaiA(indice + 1); avvia(); },
                       Math.max(300, INTERVALLO - trascorso));
  }
  function sosta() {
    if (timer) {
      clearTimeout(timer); timer = null;
      trascorso += performance.now() - partitoAlle;
    }
    banner.classList.add('is-ferma');
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      inPausa = !inPausa;
      pauseBtn.setAttribute('aria-pressed', String(inPausa));
      pauseBtn.setAttribute('aria-label', inPausa ? 'Riprendi lo scorrimento automatico' : 'Metti in pausa lo scorrimento automatico');
      banner.classList.toggle('is-statica', inPausa);
      if (inPausa) sosta(); else { trascorso = 0; vaiA(indice); avvia(); }
    });
  }
  if (ridottoMov) banner.classList.add('is-statica');

  // sosta col mouse sopra o col focus da tastiera dentro la hero
  banner.addEventListener('mouseenter', sosta);
  banner.addEventListener('mouseleave', avvia);
  banner.addEventListener('focusin', sosta);
  banner.addEventListener('focusout', e => { if (!banner.contains(e.relatedTarget)) avvia(); });

  // frecce sinistra/destra quando il focus è sui pallini
  dotsWrap.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    vaiA(indice + (e.key === 'ArrowRight' ? 1 : -1));
    dots[indice].focus();
  });

  // swipe orizzontale su touch (uno scorrimento verticale non lo attiva)
  let x0 = null, y0 = 0;
  track.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    x0 = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) { vaiA(indice + (dx < 0 ? 1 : -1)); avvia(); }
  }, { passive: true });

  // link interni a una slide (es. "Come firmare" → #cinquepermille): la mostrano
  function mostraDaHash(hash) {
    const k = slides.findIndex(s => s.id && '#' + s.id === hash);
    if (k >= 0) { vaiA(k); avvia(); }
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (a) mostraDaHash(a.getAttribute('href'));
  });

  vaiA(0);
  avvia();
  mostraDaHash(location.hash);
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


/* ---------- Altezza della sezione col modulo ----------
   --fold-h = viewport meno menu e hero campagne. Con la hero alta il valore
   è piccolo e la sezione prende l'altezza del suo contenuto; resta utile se
   la hero viene tolta (fuori campagna) o su schermi molto alti. */
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

/* ---------- Barra "Dona ora" fissa su mobile ----------
   Compare solo quando non si vedono né il modulo di donazione né la hero
   campagne: sulla hero c'è già un pulsante largo e la barra lo coprirebbe. */
const stickyDona = document.getElementById('sticky-dona');
const donaCard = document.getElementById('dona');
const heroCampagne = document.getElementById('cpm-banner');
const inVista = new Map();

const stickyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => inVista.set(entry.target, entry.isIntersecting));
  const visibile = ![...inVista.values()].some(Boolean);
  stickyDona.classList.toggle('visible', visibile);
  stickyDona.setAttribute('aria-hidden', String(!visibile));
}, { threshold: 0.05 });

stickyObserver.observe(donaCard);
if (heroCampagne) stickyObserver.observe(heroCampagne);
