/* ==========================================================
   Importo libero dei moduli di donazione — validazione comune
   ----------------------------------------------------------
   Usato da main.js (home), project-detail.js (pagine delle aree e
   progetto) e testamento-solidale.js: va caricato PRIMA di loro.

   Regola: importo in euro INTERO da 1 a 100.000 (gli input sono
   type="number" con min="1" max="100000" e passo 1: la regola coincide
   con la validazione nativa del browser). Si accettano "75", "75,00",
   "75.00"; si rifiutano vuoto-con-testo, negativi, zero, decimali
   (75,50), notazione esponenziale (1e3) e valori oltre il massimo.
   Con un importo non valido: messaggio sotto il campo, campo con
   aria-invalid, pulsante "Dona" bloccato e nessun URL con l'importo.
   I nomi dei parametri verso Myosotis NON cambiano.
   ========================================================== */
window.CottolengoImporto = (function () {
  const MIN = 1;
  const MAX = 100000;
  const MESSAGGIO = 'Inserisci un importo intero da 1 a 100.000 €.';

  function valido(n) {
    return typeof n === 'number' && Number.isInteger(n) && n >= MIN && n <= MAX;
  }

  /* { stato: 'vuoto' | 'valido' | 'errore', valore } */
  function leggi(input) {
    if (!input) return { stato: 'vuoto', valore: null };
    // testo che il browser non riesce a interpretare come numero (es. "1e", "abc"):
    // input.value è "" ma il campo non è vuoto
    if (input.validity && input.validity.badInput) return { stato: 'errore', valore: null };
    const testo = String(input.value).trim();
    if (testo === '') return { stato: 'vuoto', valore: null };
    if (!/^\d+([.,]0{1,2})?$/.test(testo)) return { stato: 'errore', valore: null };
    const n = Number(testo.replace(',', '.'));
    return valido(n) ? { stato: 'valido', valore: n } : { stato: 'errore', valore: null };
  }

  /* Mostra o nasconde il messaggio sotto il campo (creato al primo errore). */
  function segnala(input, errore) {
    if (!input) return;
    const id = input.id + '-errore';
    let msg = document.getElementById(id);
    if (!msg && errore) {
      msg = document.createElement('p');
      msg.className = 'importo-errore';
      msg.id = id;
      msg.setAttribute('role', 'alert');
      const campo = input.closest('.amounts__custom-field') || input;
      campo.insertAdjacentElement('afterend', msg);
      const descritto = (input.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
      if (!descritto.includes(id)) descritto.push(id);
      input.setAttribute('aria-describedby', descritto.join(' '));
    }
    if (msg) {
      msg.hidden = !errore;
      msg.textContent = errore ? MESSAGGIO : '';
    }
    if (errore) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  }

  /* Blocca o sblocca il pulsante "Dona" (<a> o <button type="submit">):
     aria-disabled + clic annullato. Resta raggiungibile col Tab, così chi
     usa uno screen reader sente che è bloccato. Anche l'invio con Invio dal
     campo passa da un clic sul pulsante di invio, quindi è bloccato. */
  function bloccaPulsante(el, bloccato) {
    if (!el) return;
    if (bloccato) el.setAttribute('aria-disabled', 'true');
    else el.removeAttribute('aria-disabled');
    if (!el.dataset.importoGuardia) {
      el.dataset.importoGuardia = '1';
      el.addEventListener('click', e => {
        if (el.getAttribute('aria-disabled') === 'true') e.preventDefault();
      });
    }
  }

  return { MIN, MAX, MESSAGGIO, valido, leggi, segnala, bloccaPulsante };
})();
