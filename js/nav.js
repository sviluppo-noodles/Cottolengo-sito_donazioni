/* ==========================================================
   Navbar — script condiviso da TUTTE le pagine
   ----------------------------------------------------------
   Unico punto per: hamburger (menu mobile), tendine "Progetti" e
   "Come aiutarci", descrizioni delle voci, rimbalzo dei pulsanti e
   copia del codice fiscale. Gli script delle singole pagine (main.js,
   progetti.js, project-detail.js, testamento-solidale.js) NON gestiscono
   più il menu: niente listener doppi.

   In produzione WordPress: le voci diventano un menu del backend
   (Aspetto → Menu) con la descrizione nel campo "Descrizione" della
   voce, che il tema stampa in data-desc. Nessuna logica da riscrivere.
   ========================================================== */

/* ---------- Hamburger e tendine del menu ----------
   Hamburger: apre/chiude il menu sotto 72.5em; aria-expanded e aria-label
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

/* ---------- Pulsanti: rimbalzo morbido al rilascio ----------
   Aggiunge .is-rimbalzo al rilascio (mouse o dito); l'animazione è in CSS.
   Con "riduci movimento" attivo il CSS la annulla. */
(function initRimbalzo() {
  document.addEventListener('pointerup', e => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    btn.classList.remove('is-rimbalzo');
    void btn.offsetWidth;                 // riavvia l'animazione se già in corso
    btn.classList.add('is-rimbalzo');
  });
  document.addEventListener('animationend', e => {
    if (e.animationName === 'btn-rimbalzo') e.target.classList.remove('is-rimbalzo');
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
