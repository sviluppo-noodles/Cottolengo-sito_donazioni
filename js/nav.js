/* ==========================================================
   Navbar — script condiviso da TUTTE le pagine
   ----------------------------------------------------------
   Unico punto per: hamburger (menu mobile), tendine "Progetti" e
   "Come aiutarci", descrizioni delle voci e
   copia del codice fiscale. Gli script delle singole pagine (main.js,
   progetti.js, project-detail.js, testamento-solidale.js) NON gestiscono
   più il menu: niente listener doppi.

   In produzione WordPress: le voci diventano un menu del backend
   (Aspetto → Menu) con la descrizione nel campo "Descrizione" della
   voce, che il tema stampa in data-desc. Nessuna logica da riscrivere.
   ========================================================== */

/* ---------- Hamburger e tendine del menu ----------
   Hamburger: apre/chiude il menu sotto 75em (1200 px); aria-expanded e aria-label
   sono aggiornati a OGNI chiusura (pulsante, scelta di una voce, Esc).
   Tendine: una sola aperta alla volta; si chiudono con un clic fuori o
   con Esc (il focus torna sulla voce del menu). Esc chiude prima la
   tendina aperta, poi, alla pressione successiva, il menu mobile. */
(function initMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const tendine = Array.from(document.querySelectorAll('.nav__item--dropdown'));

  function impostaBurger(aperto) {
    if (!burger) return;
    burger.setAttribute('aria-expanded', String(aperto));
    burger.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
  }
  function chiudiMenu() {
    if (!nav) return;
    nav.classList.remove('open');
    impostaBurger(false);
  }
  function chiudiTendina(item) {
    item.classList.remove('open');
    const t = item.querySelector('.nav__dropdown-toggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  }

  if (burger && nav) {
    burger.addEventListener('click', () => impostaBurger(nav.classList.toggle('open')));
    // scelta una voce (anche un'àncora nella stessa pagina) il menu si chiude;
    // closest('a'): il clic può cadere sullo <span> della descrizione
    nav.addEventListener('click', e => { if (e.target.closest('a')) chiudiMenu(); });
  }

  tendine.forEach(item => {
    const toggle = item.querySelector('.nav__dropdown-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const aperto = !item.classList.contains('open');
      tendine.forEach(chiudiTendina);
      item.classList.toggle('open', aperto);
      toggle.setAttribute('aria-expanded', String(aperto));
    });
  });

  document.addEventListener('click', e => {
    tendine.forEach(item => { if (!item.contains(e.target)) chiudiTendina(item); });
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const aperta = tendine.find(item => item.classList.contains('open'));
    if (aperta) {
      chiudiTendina(aperta);
      const t = aperta.querySelector('.nav__dropdown-toggle');
      if (t && aperta.contains(document.activeElement)) t.focus();
      return;
    }
    if (nav && nav.classList.contains('open')) {
      const dentro = nav.contains(document.activeElement);
      chiudiMenu();
      if (dentro && burger) burger.focus();
    }
  });
})();

/* ---------- Pannelli con elenco: descrizione della voce puntata ----------
   Vale per ogni pannello .nav__mega: a sinistra le voci, a destra la
   descrizione di quella puntata col mouse o col focus (.is-puntata).
   .is-puntata è solo uno stato grafico di hover/focus: la pagina in cui ci
   si trova è indicata da aria-current="page", scritto nell'HTML (in
   WordPress lo stampa il tema). All'apertura la descrizione mostrata è
   quella della pagina corrente, se è nel pannello, altrimenti la prima. */
document.querySelectorAll('.nav__mega').forEach(function initMegaMenu(mega) {
  const voci = Array.from(mega.querySelectorAll('.nav__mega__voce'));
  if (!voci.length) return;
  const desc = mega.querySelector('.nav__mega__desc');
  const item = mega.closest('.nav__item--dropdown');
  const toggle = item ? item.querySelector('.nav__dropdown-toggle') : null;

  /* Su telefono la colonna di destra non c'è: la descrizione scende sotto la
     voce. Il testo è lo stesso data-desc, scritto una volta sola nell'HTML.
     Su desktop lo span è display:none, quindi non entra nemmeno nel nome
     accessibile del link (dove invece è utile su mobile). */
  voci.forEach(v => {
    if (!v.dataset.desc) return;
    const span = document.createElement('span');
    span.className = 'nav__mega__voce-desc';
    span.textContent = v.dataset.desc;
    v.appendChild(span);
  });

  function mostra(voce) {
    voci.forEach(v => v.classList.toggle('is-puntata', v === voce));
    if (desc && voce.dataset.desc) desc.textContent = voce.dataset.desc;
  }

  const corrente = voci.find(v => v.getAttribute('aria-current') === 'page');
  if (desc) {
    const iniziale = corrente || voci[0];
    if (iniziale.dataset.desc) desc.textContent = iniziale.dataset.desc;
  }

  voci.forEach(v => {
    v.addEventListener('mouseenter', () => mostra(v));
    v.addEventListener('focus', () => mostra(v));   // stesso comportamento da tastiera
  });

  // scelta una voce, il pannello si chiude
  mega.addEventListener('click', e => {
    if (!e.target.closest('.nav__mega__voce')) return;
    if (item) item.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Comparsa degli elementi durante lo scorrimento (scroll reveal) ----------
   In tutte le pagine: titoli di sezione, numeri, schede, paragrafi degli
   articoli, recapiti, documenti... "arrivano" (salgono di 24 px e si
   accendono) quando entrano nello schermo; quelli affiancati partono uno
   dopo l'altro. Una volta sola per elemento.
   - Restano fermi: menu, hero e copertine, colonna laterale col modulo di
     donazione, moduli, footer (devono essere subito pronti).
   - Ciò che è già in vista all'apertura della pagina compare subito, senza
     animazione.
   - Con "riduci movimento" attivo o senza JavaScript tutto resta visibile.
   - Controllo sulla posizione verticale (non IntersectionObserver): funziona
     anche con le schede in fila orizzontale su telefono e con uno
     scorrimento veloce (tasto Fine, àncore).
   Finita la comparsa le classi vengono tolte, così hover e transizioni
   proprie degli elementi restano quelle di sempre. */
(function initRivela() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SELETTORI = [
    '.section-head', '.numbers__item', '.fila-schede__item', '.legend-row',
    '.documento', '.recapito', '.cpm-passo', '.cpm-codice .container > *',
    '.chi-colonna > *', '.chi-affiancato > *', '.chi-citazione .container',
    '.fascia-invito .container > *', '.partners__title', '.partners__gruppo',
    '.project-article-content > *', '.proj-grid > *', '.modulo-incorporato__nota',
    '.galleria-foto > li', '.impatti__voce', '.impatti__nota', '.faq__lista',
  ];
  const ESCLUSI = '.header, .footer, .cpm-banner, .hero, .project-cover, .project-sidebar, form, .dona-card, .sticky-dona';

  const soglia = () => window.innerHeight * 0.92;
  let elementi = Array.from(document.querySelectorAll(SELETTORI.join(',')))
    .filter(el => !el.closest(ESCLUSI));
  // niente animazioni annidate: se un contenitore si anima, i suoi figli no
  elementi = elementi.filter(el => !elementi.some(altro => altro !== el && altro.contains(el)));
  // già in vista all'apertura: si vede subito
  elementi = elementi.filter(el => el.getBoundingClientRect().top >= soglia());
  // aperta da un link con àncora (es. index.html#domande-frequenti): il browser salta
  // alla sezione solo a caricamento finito, quindi la sezione di arrivo e ciò che la
  // precede restano subito visibili, senza comparire a pagina già ferma (decisione 104)
  let bersaglio = null;
  try { bersaglio = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) {}
  if (bersaglio) {
    elementi = elementi.filter(el => !(bersaglio.contains(el) ||
      (el.compareDocumentPosition(bersaglio) & Node.DOCUMENT_POSITION_FOLLOWING)));
  }
  if (!elementi.length) return;

  const PASSO = 90;       // ms tra un elemento e il successivo nella stessa fila
  const MAX_RITARDO = 4;  // oltre il quinto elemento il ritardo non cresce

  elementi.forEach(el => {
    const fratelli = Array.from(el.parentElement.children).filter(x => elementi.includes(x));
    const k = Math.min(fratelli.indexOf(el), MAX_RITARDO);
    el.style.setProperty('--rivela-ritardo', (k * PASSO) + 'ms');
    el.classList.add('rivela');
  });
  document.documentElement.classList.add('rivela-attiva');

  function fine(el) {
    el.classList.remove('rivela', 'is-entrato');
    el.style.removeProperty('--rivela-ritardo');
  }
  function entra(el) {
    el.classList.add('is-entrato');
    el.addEventListener('transitionend', function t(e) {
      if (e.target !== el || e.propertyName !== 'opacity') return;
      el.removeEventListener('transitionend', t);
      fine(el);
    });
  }

  let inAttesa = elementi.slice();
  let programmato = false;
  function controlla() {
    programmato = false;
    const limite = soglia();
    inAttesa = inAttesa.filter(el => {
      if (el.getBoundingClientRect().top < limite) { entra(el); return false; }
      return true;
    });
    if (!inAttesa.length) {
      window.removeEventListener('scroll', richiedi);
      window.removeEventListener('resize', richiedi);
    }
  }
  function richiedi() {
    if (!programmato) { programmato = true; requestAnimationFrame(controlla); }
  }
  window.addEventListener('scroll', richiedi, { passive: true });
  window.addEventListener('resize', richiedi);
  richiedi();

  // in stampa niente resta nascosto
  window.addEventListener('beforeprint', () => elementi.forEach(el => { el.classList.add('is-entrato'); fine(el); }));
})();

/* ---------- Domande frequenti: apertura e chiusura morbide (decisione 103) ----------
   <details> nativo resta la base (funziona senza JavaScript). Qui si anima
   l'altezza della scheda dal valore attuale a quello finale: il pannello
   si allunga e spinge giù le domande sotto, con la decelerazione
   esponenziale consigliata dalla skill impeccable (niente rimbalzi).
   Apertura 450 ms, chiusura 300 ms (si esce più in fretta di come si entra).
   Il testo arriva con una leggera dissolvenza appena dopo l'inizio.
   Un secondo clic a metà animazione riparte dal punto in cui si trova.
   Con "riduci movimento": niente movimento, solo una dissolvenza breve. */
(function initFaq() {
  const gruppi = document.querySelectorAll('.faq__gruppo');
  if (!gruppi.length || !('animate' in Element.prototype)) return;
  const ridotto = window.matchMedia('(prefers-reduced-motion: reduce)');
  const CURVA = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const APRI = 450, CHIUDI = 300;

  gruppi.forEach(d => {
    const titolo = d.querySelector('summary');
    const corpo = d.querySelector('.faq__corpo');
    let altezza = null, testo = null;

    function pulisci() {
      d.style.overflow = '';
      d.classList.remove('is-chiusura');
      altezza = testo = null;
    }

    titolo.addEventListener('click', e => {
      e.preventDefault();
      const chiusa = !d.open || d.classList.contains('is-chiusura');
      const da = d.offsetHeight;            // altezza attuale, anche a metà animazione
      if (altezza) altezza.cancel();
      if (testo) testo.cancel();

      if (ridotto.matches) {
        d.classList.remove('is-chiusura');
        d.open = chiusa;
        if (chiusa) corpo.animate({ opacity: [0, 1] }, { duration: 150, easing: 'ease-out' });
        return;
      }

      d.style.overflow = 'hidden';
      if (chiusa) {
        d.classList.remove('is-chiusura');
        d.open = true;
        const a = d.offsetHeight;
        altezza = d.animate({ height: [da + 'px', a + 'px'] }, { duration: APRI, easing: CURVA });
        testo = corpo.animate(
          { opacity: [0, 1], transform: ['translateY(-0.5rem)', 'none'] },
          { duration: APRI - 60, delay: 60, easing: CURVA, fill: 'backwards' });
        altezza.onfinish = pulisci;
      } else {
        d.classList.add('is-chiusura');     // la freccia gira subito, insieme al pannello
        const bordi = d.offsetHeight - d.clientHeight;
        const a = titolo.offsetHeight + bordi;
        altezza = d.animate({ height: [da + 'px', a + 'px'] }, { duration: CHIUDI, easing: CURVA });
        testo = corpo.animate({ opacity: [1, 0] }, { duration: CHIUDI * 0.6, easing: 'ease-in', fill: 'forwards' });
        altezza.onfinish = () => { d.open = false; testo.cancel(); pulisci(); };
      }
    });
  });
})();

/* ---------- Copia codice fiscale 5x1000 (uno o più pulsanti, su qualsiasi pagina) ---------- */
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


/* ---------- Barra "Dona ora" fissa su telefono e tablet (decisione 131) ----------
   Prima stava in main.js, caricato solo dalla home: nelle altre pagine la barra
   restava nascosta. Si nasconde quando è in vista un altro pulsante Dona grande:
   il riquadro di donazione (#dona), il Dona in fondo al testo (.dona-chiusura)
   o la hero campagne della home. Nelle pagine senza questi elementi resta sempre visibile. */
(function initStickyDona() {
  const barra = document.getElementById('sticky-dona');
  if (!barra) return;
  const mostra = v => {
    barra.classList.toggle('visible', v);
    barra.setAttribute('aria-hidden', String(!v));
    barra.inert = !v;   // nascosta: il suo pulsante non riceve il Tab
  };
  const bersagli = [document.getElementById('dona'), document.getElementById('cpm-banner'),
                    ...document.querySelectorAll('.dona-chiusura')].filter(Boolean);
  if (!bersagli.length || !('IntersectionObserver' in window)) { mostra(true); return; }
  const inVista = new Map();
  const oss = new IntersectionObserver(voci => {
    voci.forEach(v => inVista.set(v.target, v.isIntersecting && v.target.offsetParent !== null));
    mostra(![...inVista.values()].some(Boolean));
  }, { threshold: 0.05 });
  bersagli.forEach(el => oss.observe(el));
})();
