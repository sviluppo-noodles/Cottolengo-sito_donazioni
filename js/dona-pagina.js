/* ==========================================================
   Pagina Dona (dona.html) — PROTOTIPO GRAFICO, decisioni 60, 61 e 75
   Pagina unica con tre sezioni numerate, riepilogo sempre visibile,
   controllo dei campi al pulsante "Dona" con elenco degli errori in alto
   e messaggio accanto a ogni campo da correggere.
   Il modulo non invia nulla: al pulsante finale mostra un avviso.
   ========================================================== */
(function () {
  const form = document.getElementById('dona-modulo');
  if (!form) return;

  const MIN = 1, MAX = 100000;
  const libero = document.getElementById('importo-libero');
  const liberoErr = document.getElementById('importo-libero-errore');
  const periodicita = document.getElementById('periodicita');
  const avvisoFine = document.getElementById('dona-avviso-fine');
  const box = document.getElementById('dona-errori');
  const testoPulsante = form.querySelector('[data-pulsante-testo]');
  const avvisoContinuativa = document.getElementById('metodi-continuativa');

  const euro = n => n.toLocaleString('it-IT', { maximumFractionDigits: 2 }) + ' €';
  const val = name => { const c = form.querySelector(`input[name="${name}"]:checked`); return c ? c.value : ''; };

  /* ---------- destinazione da indirizzo (es. dona.html?causale=pasti dalla home) ----------
     PROTOTIPO: su Myosotis ogni causale avrà il suo modulo dedicato. */
  const CAUSALI = {
    pasti: {
      tipo: 'Dona un pasto',
      nome: 'Per le mense del Cottolengo',
      breve: 'Mense del Cottolengo',
      nota: 'La tua donazione offre pasti caldi a chi non ha nulla, nelle mense del Cottolengo di Torino e Pisa.'
    }
  };
  const causale = CAUSALI[new URLSearchParams(location.search).get('causale')];
  if (causale) {
    Object.keys(causale).forEach(k => document.querySelectorAll(`[data-destinazione="${k}"]`).forEach(e => { e.textContent = causale[k]; }));
    form.elements.causale.value = new URLSearchParams(location.search).get('causale');
  }

  /* ---------- importo ---------- */
  function importoLibero() {
    const t = libero.value.trim().replace(/\s|€/g, '');
    if (!t) return { stato: 'vuoto' };
    if (!/^\d+$/.test(t)) return { stato: 'errore' };
    const n = Number(t);
    return n >= MIN && n <= MAX ? { stato: 'ok', n } : { stato: 'errore' };
  }
  function importo() {
    const l = importoLibero();
    if (l.stato === 'ok') return l.n;
    if (l.stato === 'errore') return null;
    const p = val('importo-proposto');
    return p ? Number(p) : null;
  }
  function frequenzaTesto() {
    if (val('ricorrenza') !== 'continuativa') return 'Una volta sola';
    return { mensile: 'Ogni mese', trimestrale: 'Ogni tre mesi', annuale: 'Ogni anno' }[val('periodicita')] || 'Continuativa';
  }

  /* ---------- metodi di pagamento compatibili con la frequenza ---------- */
  function metodi() {
    const continuativa = val('ricorrenza') === 'continuativa';
    form.querySelectorAll('[data-solo-singola]').forEach(l => {
      const input = l.querySelector('input');
      l.hidden = continuativa;
      input.disabled = continuativa;
      if (continuativa && input.checked) input.checked = false;
    });
    avvisoContinuativa.hidden = !continuativa;
  }

  function aggiorna() {
    const n = importo();
    const testoImporto = n ? euro(n) : '—';
    document.querySelectorAll('[data-riepilogo="importo"]').forEach(e => { e.textContent = testoImporto; });
    document.querySelectorAll('[data-riepilogo="frequenza"]').forEach(e => { e.textContent = frequenzaTesto(); });
    const org = val('tipo-donatore') === 'organizzazione';
    const nome = org ? form.elements['ragione-sociale'].value.trim()
      : `${form.elements.nome.value.trim()} ${form.elements.cognome.value.trim()}`.trim();
    document.querySelectorAll('[data-riepilogo="intestatario"]').forEach(e => { e.textContent = nome || '—'; });
    periodicita.hidden = val('ricorrenza') !== 'continuativa';
    metodi();
    /* pulsante finale: per bonifico e bollettino non si paga subito */
    const m = val('metodo');
    if (m === 'bonifico' || m === 'bollettino') {
      testoPulsante.textContent = m === 'bonifico' ? 'Ricevi i dati per il bonifico' : 'Ricevi i dati del bollettino';
    } else {
      testoPulsante.textContent = 'Dona ' + testoImporto;
    }
  }

  /* importo libero e importi proposti si escludono a vicenda */
  libero.addEventListener('input', () => {
    if (libero.value.trim()) form.querySelectorAll('input[name="importo-proposto"]').forEach(r => { r.checked = false; });
    segnaCampo(libero, false); liberoErr.hidden = true;
  });
  form.querySelectorAll('input[name="importo-proposto"]').forEach(r => r.addEventListener('change', () => {
    libero.value = ''; segnaCampo(libero, false); liberoErr.hidden = true;
  }));

  /* ---------- privato / azienda: mostra solo i campi giusti ---------- */
  function tipoDonatore() {
    const tipo = val('tipo-donatore');
    form.querySelectorAll('.dona-gruppo').forEach(g => {
      const attivo = g.dataset.per === tipo;
      g.hidden = !attivo;
      g.querySelectorAll('input').forEach(i => { i.disabled = !attivo; if (!attivo) segnaCampo(i, false); });
    });
  }
  form.querySelectorAll('input[name="tipo-donatore"]').forEach(r => r.addEventListener('change', tipoDonatore));

  /* maiuscole automatiche per codice fiscale e provincia */
  form.querySelectorAll('.dona-input--maiuscolo').forEach(i => i.addEventListener('input', () => {
    const p = i.selectionStart; i.value = i.value.toUpperCase(); i.setSelectionRange(p, p);
  }));

  /* ---------- validazione ---------- */
  const FORMATI = {
    cf: v => /^[A-Z0-9]{16}$/.test(v) || 'Il codice fiscale ha 16 caratteri.',
    piva: v => /^\d{11}$/.test(v) || 'La partita IVA ha 11 cifre.',
    cap: v => form.elements.nazione.value !== 'IT' || /^\d{5}$/.test(v) || 'Il CAP ha 5 cifre.'
  };
  /* messaggi corti e parlati: stanno su una riga anche nei campi stretti */
  const MANCA = {
    nome: 'Inserisci il nome.', cognome: 'Inserisci il cognome.', 'ragione-sociale': 'Inserisci la ragione sociale.',
    email: 'Inserisci l’email.', 'codice-fiscale': 'Inserisci il codice fiscale.', 'partita-iva': 'Inserisci la partita IVA.',
    indirizzo: 'Inserisci l’indirizzo.', civico: 'Inserisci il civico.', cap: 'Inserisci il CAP.',
    comune: 'Inserisci il comune.', provincia: 'Inserisci la provincia.', nazione: 'Scegli la nazione.'
  };
  function nomeCampo(el) {
    const l = form.querySelector(`label[for="${el.id}"]`);
    return l ? l.firstChild.textContent.trim() : el.name;
  }
  function segnaCampo(el, errore, testo) {
    const campo = el.closest('.dona-campo');
    let msg = campo && campo.querySelector('.dona-errore--auto');
    if (errore) {
      el.setAttribute('aria-invalid', 'true');
      if (campo && el !== libero) {
        if (!msg) { msg = document.createElement('p'); msg.className = 'dona-errore dona-errore--auto'; msg.id = el.id + '-errore'; campo.appendChild(msg); }
        msg.textContent = testo; msg.hidden = false;
        const desc = (el.getAttribute('aria-describedby') || '').split(' ').filter(x => x && x !== msg.id);
        el.setAttribute('aria-describedby', desc.concat(msg.id).join(' '));
      }
    } else {
      el.removeAttribute('aria-invalid');
      if (msg) msg.hidden = true;
    }
  }
  /* gruppi di scelte (importo, privacy, metodo): bordo rosso e messaggio sul posto */
  function segnaGruppo(gruppo, msgId, errore) {
    const fs = document.getElementById(msgId).closest('fieldset');
    fs.classList.toggle('dona-campo--errore', errore);
    document.getElementById(msgId).hidden = !errore;
    fs.querySelectorAll('input').forEach(i => {
      if (errore) { i.setAttribute('aria-invalid', 'true'); i.setAttribute('aria-describedby', ((i.getAttribute('aria-describedby') || '').replace(msgId, '') + ' ' + msgId).trim()); }
      else i.removeAttribute('aria-invalid');
    });
  }

  function controlla(sposta) {
    const errori = [];
    const l = importoLibero();
    if (l.stato === 'errore') { segnaCampo(libero, true); liberoErr.hidden = false; errori.push({ el: libero, t: 'Importo: scrivi una cifra intera da 1 a 100.000 €.' }); }
    segnaGruppo('importo', 'importo-errore', l.stato !== 'errore' && !importo());
    if (l.stato !== 'errore' && !importo()) errori.push({ el: form.querySelector('input[name="importo-proposto"]'), t: 'Scegli un importo.' });
    form.querySelectorAll('input.dona-input, select.dona-input').forEach(el => {
      if (el.disabled || el.closest('[hidden]') || el === libero) return;
      const v = el.value.trim();
      let t = '';
      if (el.required && !v) t = MANCA[el.id] || `Compila «${nomeCampo(el)}».`;
      else if (v && el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) t = 'Controlla l’email (es. nome@esempio.it).';
      else if (v && el.dataset.formato) { const r = FORMATI[el.dataset.formato](v.toUpperCase()); if (r !== true) t = r; }
      segnaCampo(el, !!t, t);
      if (t) errori.push({ el, t });
    });
    const noPrivacy = !form.elements.privacy.checked;
    segnaGruppo('privacy', 'privacy-errore', noPrivacy);
    if (noPrivacy) errori.push({ el: form.elements.privacy, t: 'Spunta la casella dell’informativa privacy.' });
    const noMetodo = !val('metodo');
    segnaGruppo('metodo', 'metodo-errore', noMetodo);
    if (noMetodo) errori.push({ el: form.querySelector('input[name="metodo"]:not(:disabled)'), t: 'Scegli come vuoi pagare.' });

    if (errori.length) {
      box.innerHTML = '<p><strong>' + (errori.length === 1 ? 'C’è un dato da correggere:' : `Ci sono ${errori.length} dati da correggere:`) + '</strong></p><ul></ul>';
      const ul = box.querySelector('ul');
      errori.forEach(e => {
        const li = document.createElement('li'); const a = document.createElement('a');
        a.href = '#' + (e.el.id || ''); a.textContent = e.t;
        a.addEventListener('click', ev => { ev.preventDefault(); e.el.focus(); e.el.scrollIntoView({ block: 'center' }); });
        li.appendChild(a); ul.appendChild(li);
      });
      box.hidden = false;
      if (sposta) { box.setAttribute('tabindex', '-1'); box.focus(); }
      return false;
    }
    box.hidden = true;
    return true;
  }

  /* tutto si aggiorna mentre si compila: riepilogo, metodi, pulsante e,
     se l'elenco degli errori è aperto, anche l'elenco (senza spostare la pagina) */
  function dopoModifica(e) {
    if (e && e.target.name === 'tipo-donatore') tipoDonatore();
    aggiorna();
    if (!box.hidden) controlla(false);
  }
  form.addEventListener('input', dopoModifica);
  form.addEventListener('change', dopoModifica);

  form.addEventListener('submit', e => {
    e.preventDefault();               // PROTOTIPO: nessun invio
    avvisoFine.hidden = true;
    if (!controlla(true)) return;
    avvisoFine.hidden = false;
  });
  /* Invio da tastiera in un campo di testo non fa partire la donazione:
     si dona solo premendo il pulsante */
  form.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.matches('input:not([type=radio]):not([type=checkbox])')) e.preventDefault();
  });

  tipoDonatore();
  aggiorna();
})();
