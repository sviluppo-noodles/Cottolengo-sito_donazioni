/* ==========================================================
   Navbar — menu a comparsa "Come donare"
   ----------------------------------------------------------
   Caricato da index.html E da progetti.html, DOPO main.js /
   progetti.js: apre le schede della sezione "Come fare del bene"
   simulando il click sul tab, quindi il suo gestore deve esistere già.

   In produzione WordPress: le voci diventano un menu del backend
   (Aspetto → Menu) con la descrizione nel campo "Descrizione" della
   voce, che il tema stampa in data-desc. Nessuna logica da riscrivere.
   ========================================================== */

/* ---------- Pannello: descrizione della voce puntata ---------- */
(function initMegaMenu() {
  const mega = document.getElementById('menu-donare');
  if (!mega) return;

  const voci = Array.from(mega.querySelectorAll('.nav__mega__voce'));
  if (!voci.length) return;
  const desc = document.getElementById('nav-mega-desc');
  const item = document.querySelector('.nav__item--dropdown');
  const toggle = document.querySelector('.nav__dropdown-toggle');

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
    voci.forEach(v => v.classList.toggle('is-current', v === voce));
    if (desc && voce.dataset.desc) desc.textContent = voce.dataset.desc;
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
})();

/* ---------- #modo-<voce> apre la scheda corrispondente ----------
   Fa sì che il click sulla voce del menu mantenga la promessa della sua
   descrizione. Funziona sia arrivando da un'altra pagina (al caricamento)
   sia cliccando dalla home (hashchange). */
(function initApriModo() {
  const modi = document.querySelector('.modi');
  if (!modi) return;

  function apri() {
    const m = location.hash.match(/^#modo-([\w-]+)$/);
    if (!m) return;
    const tab = document.getElementById('tab-' + m[1]);
    if (!tab) return;
    tab.click();                   // passa dal gestore già esistente dei tab
    modi.scrollIntoView({ block: 'start' });
  }

  window.addEventListener('hashchange', apri);
  apri();
})();
