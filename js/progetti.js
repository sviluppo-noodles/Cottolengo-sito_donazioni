/* ==========================================================
   Pagina Progetti — Cottolengo
   Logica di pagina: barra filtri + griglia. I DATI e la card stanno
   in js/progetti-dati.js (file condiviso con la home), che va caricato
   PRIMA di questo.

   In produzione WordPress: la griglia arriva da una WP_Query sul CPT
   "progetti"; i filtri diventano facet di FacetWP o parametri della
   query. La logica di filtro qui replica quel comportamento.
   ========================================================== */

/* ---------- Lista unica dei progetti: filtri + griglia ---------- */
(function initTuttiProgetti() {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;

  const fSearch = document.getElementById('f-search');
  const fArea   = document.getElementById('f-area');
  const fCat    = document.getElementById('f-cat');
  const countEl = document.getElementById('proj-count');
  const emptyEl = document.getElementById('proj-empty');

  /* Menu "Area geografica": prima i termini padre, poi i figli indentati
     con "›" (Europa, Europa › Italia). Rispecchia la tassonomia gerarchica:
     scegliendo il padre si vedono anche i progetti dei figli. */
  Object.keys(AREE).filter(k => !AREE[k].padre).forEach(padre => {
    fArea.appendChild(new Option(nomeArea(padre), padre));
    Object.keys(AREE)
      .filter(k => AREE[k].padre === padre)
      .forEach(figlio => {
        fArea.appendChild(new Option(`${nomeArea(padre)} › ${nomeArea(figlio)}`, figlio));
      });
  });
  Object.keys(CATEGORIE).forEach(k => fCat.appendChild(new Option(CATEGORIE[k], k)));

  function filtra() {
    const q    = (fSearch.value || '').trim().toLowerCase();
    const area = fArea.value;
    const cat  = fCat.value;

    // filtrando su un'area padre rientrano anche i progetti dei suoi figli
    const areeAmmesse = area ? areaEDiscendenti(area) : null;

    const risultati = PROGETTI.filter(p => {
      if (areeAmmesse && !p.aree.some(a => areeAmmesse.includes(a))) return false;
      if (cat && !p.categorie.includes(cat)) return false;
      if (q && !(p.titolo.toLowerCase().includes(q) || p.copy.toLowerCase().includes(q))) return false;
      return true;
    });

    // gli "in evidenza" sempre in cima; Array.sort è stabile → dentro ogni gruppo resta l'ordine originale
    risultati.sort((a, b) => (b.inEvidenza ? 1 : 0) - (a.inEvidenza ? 1 : 0));

    grid.innerHTML = '';
    risultati.forEach(p => grid.appendChild(cardProgetto(p)));
    countEl.textContent = risultati.length === 1
      ? '1 progetto trovato'
      : `${risultati.length} progetti trovati`;
    emptyEl.hidden = risultati.length !== 0;

    aggiornaStatiFiltri();
  }

  // evidenzia i selettori attivi e aggiorna il badge numerico sul pulsante "Azzera filtri"
  function aggiornaStatiFiltri() {
    const attivi = [
      { el: document.querySelector('.proj-filters__search'), on: !!fSearch.value.trim() },
      { el: fCat.closest('.proj-filters__field'),  on: !!fCat.value },
      { el: fArea.closest('.proj-filters__field'), on: !!fArea.value },
    ];
    let n = 0;
    attivi.forEach(a => { if (a.el) a.el.classList.toggle('is-active', a.on); if (a.on) n++; });

    const reset = document.getElementById('f-reset');
    const badge = document.getElementById('active-count');
    reset.classList.toggle('has-active', n > 0);
    if (badge) { badge.textContent = n; badge.hidden = n === 0; }
  }

  function azzera() {
    fSearch.value = ''; fArea.value = ''; fCat.value = '';
    filtra();
  }

  [fSearch].forEach(el => el.addEventListener('input', filtra));
  [fArea, fCat].forEach(el => el.addEventListener('change', filtra));
  document.getElementById('f-reset').addEventListener('click', azzera);
  const reset2 = document.getElementById('f-reset-2');
  if (reset2) reset2.addEventListener('click', azzera);

  /* ---- Filtri pre-applicati dai link della home (mappa / "chi aiuti") ----
     es. progetti.html?chi_aiuti=anziani-fragili  oppure  ?area=europa */
  const params = new URLSearchParams(location.search);
  const pArea = params.get('area');
  const pCat  = params.get('chi_aiuti');
  const pQ    = params.get('q');
  let preFiltrato = false;
  if (pArea && AREE[pArea])       { fArea.value = pArea; preFiltrato = true; }
  if (pCat && CATEGORIE[pCat])    { fCat.value = pCat;   preFiltrato = true; }
  if (pQ)                         { fSearch.value = pQ;  preFiltrato = true; }

  filtra();               // render iniziale (con eventuali filtri da URL)
  // se arriviamo dalla home con un filtro, portiamo la lista in vista
  if (preFiltrato) document.getElementById('all-projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
})();

/* ---------- Menu mobile + dropdown "Come donare" (come nella home) ---------- */
(function initNav() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const aperto = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', aperto);
      burger.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const dropdownItem = document.querySelector('.nav__item--dropdown');
  const dropdownToggle = document.querySelector('.nav__dropdown-toggle');
  if (dropdownItem && dropdownToggle) {
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
  }
})();
