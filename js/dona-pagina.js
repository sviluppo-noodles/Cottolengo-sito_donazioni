/* ==========================================================
   Pagina Dona (dona.html) — PROTOTIPO GRAFICO, decisioni 60 e 61
   Pagina unica con tre sezioni numerate, riepilogo sempre visibile,
   controllo dei campi al pulsante "Dona" con elenco degli errori in alto.
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

  const euro = n => n.toLocaleString('it-IT', { maximumFractionDigits: 2 }) + ' €';
  const val = name => { const c = form.querySelector(`input[name="${name}"]:checked`); return c ? c.value : ''; };

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
    if (val('ricorrenza') !== 'continuativa') return 'Una tantum';
    return { mensile: 'Ogni mese', trimestrale: 'Ogni tre mesi', annuale: 'Ogni anno' }[val('periodicita')] || 'Continuativa';
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
  }

  /* importo libero e importi proposti si escludono a vicenda */
  libero.addEventListener('input', () => {
    if (libero.value.trim()) form.querySelectorAll('input[name="importo-proposto"]').forEach(r => { r.checked = false; });
    segnaCampo(libero, false); liberoErr.hidden = true;
    aggiorna();
  });
  form.querySelectorAll('input[name="importo-proposto"]').forEach(r => r.addEventListener('change', () => {
    libero.value = ''; segnaCampo(libero, false); liberoErr.hidden = true; aggiorna();
  }));

  /* ---------- privato / azienda: mostra solo i campi giusti ---------- */
  function tipoDonatore() {
    const tipo = val('tipo-donatore');
    form.querySelectorAll('.dona-gruppo').forEach(g => {
      const attivo = g.dataset.per === tipo;
      g.hidden = !attivo;
      g.querySelectorAll('input').forEach(i => { i.disabled = !attivo; });
    });
    aggiorna();
  }
  form.querySelectorAll('input[name="tipo-donatore"]').forEach(r => r.addEventListener('change', tipoDonatore));
  form.addEventListener('input', aggiorna);
  form.addEventListener('change', aggiorna);

  /* maiuscole automatiche per codice fiscale e provincia */
  form.querySelectorAll('.dona-input--maiuscolo').forEach(i => i.addEventListener('input', () => {
    const p = i.selectionStart; i.value = i.value.toUpperCase(); i.setSelectionRange(p, p);
  }));

  /* ---------- validazione ---------- */
  const FORMATI = {
    cf: v => /^[A-Z0-9]{16}$/.test(v) || 'Il codice fiscale ha 16 caratteri, lettere e numeri.',
    piva: v => /^\d{11}$/.test(v) || 'La partita IVA ha 11 cifre.',
    cap: v => form.elements.nazione.value !== 'IT' || /^\d{5}$/.test(v) || 'Il CAP italiano ha 5 cifre.'
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
  function controlla() {
    const errori = [];
    const l = importoLibero();
    if (l.stato === 'errore') { segnaCampo(libero, true); liberoErr.hidden = false; errori.push({ el: libero, t: 'Importo: inserisci una cifra intera da 1 a 100.000 €.' }); }
    else if (!importo()) errori.push({ el: form.querySelector('input[name="importo-proposto"]'), t: 'Scegli un importo.' });
    form.querySelectorAll('input.dona-input, select.dona-input').forEach(el => {
      if (el.disabled || el.closest('[hidden]') || el === libero) return;
      const v = el.value.trim();
      let t = '';
      if (el.required && !v) t = `Compila il campo «${nomeCampo(el)}».`;
      else if (v && el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) t = 'Controlla l’indirizzo email: manca una parte (es. nome@esempio.it).';
      else if (v && el.dataset.formato) { const r = FORMATI[el.dataset.formato](v); if (r !== true) t = r; }
      segnaCampo(el, !!t, t);
      if (t) errori.push({ el, t });
    });
    if (!form.elements.privacy.checked) errori.push({ el: form.elements.privacy, t: 'Conferma di aver preso visione dell’informativa privacy.' });
    if (!val('comunicazioni')) errori.push({ el: form.querySelector('input[name="comunicazioni"]'), t: 'Indica se vuoi ricevere aggiornamenti (Sì o No).' });
    if (!val('metodo')) errori.push({ el: form.querySelector('input[name="metodo"]'), t: 'Scegli un metodo di pagamento.' });

    const box = document.getElementById('dona-errori');
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
      box.setAttribute('tabindex', '-1'); box.focus();
      return false;
    }
    box.hidden = true;
    return true;
  }
  /* l'errore di un campo sparisce mentre lo si corregge (non all'uscita dal
     campo: sparendo sposterebbe la pagina proprio mentre si clicca altrove) */
  form.addEventListener('input', e => {
    const el = e.target;
    if (el.getAttribute && el.getAttribute('aria-invalid') === 'true' && el !== libero && el.value.trim()) {
      const f = el.dataset.formato ? FORMATI[el.dataset.formato](el.value.trim().toUpperCase()) : true;
      if (f === true) segnaCampo(el, false);
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();               // PROTOTIPO: nessun invio
    avvisoFine.hidden = true;
    if (!controlla()) return;
    avvisoFine.hidden = false;
  });
  /* Invio da tastiera in un campo di testo non fa partire la donazione:
     si dona solo premendo il pulsante */
  form.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.matches('input:not([type=radio]):not([type=checkbox])')) e.preventDefault();
  });

  tipoDonatore();
})();
