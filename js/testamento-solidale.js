/* Interazioni della pagina Testamento solidale e del modulo generico. */
(function () {
  // hamburger e tendine del menu: gestiti da js/nav.js (unico per tutte le pagine)

  const amounts = Array.from(document.querySelectorAll('input[name="legacy-amount"]'));
  const frequencies = Array.from(document.querySelectorAll('input[name="legacy-freq"]'));
  const custom = document.getElementById('legacy-amt-custom');
  const impact = document.getElementById('legacy-impact');
  const cta = document.getElementById('legacy-dona-cta');
  if (!amounts.length || !custom || !impact || !cta) return;
  const Importo = window.CottolengoImporto;
  const URL_BASE = 'https://dona.cottolengo.org/';

  function euro(value) {
    return value.toLocaleString('it-IT', { maximumFractionDigits: 2 });
  }

  /* importo valido, oppure null se il campo libero contiene un valore non
     valido (regola in js/importo.js: intero da 1 a 100.000 €) */
  function currentAmount() {
    const libero = Importo ? Importo.leggi(custom) : { stato: 'vuoto' };
    if (libero.stato === 'valido') return libero.valore;
    if (libero.stato === 'errore') return null;
    const selected = amounts.find(amount => amount.checked);
    const n = selected ? Number(selected.value) : 35;
    return (!Importo || Importo.valido(n)) ? n : 35;
  }

  function currentFrequency() {
    const selected = frequencies.find(frequency => frequency.checked);
    return selected ? selected.value : 'singola';
  }

  function updateDonation() {
    const amount = currentAmount();
    const errore = amount === null;
    if (Importo) {
      Importo.segnala(custom, errore);
      Importo.bloccaPulsante(cta, errore);
    }
    if (errore) {
      cta.href = URL_BASE;             // nessun URL con un importo non valido
      cta.textContent = 'Inserisci un importo valido';
      return;
    }
    const frequency = currentFrequency();
    const meals = Math.max(1, Math.floor(amount / 5));
    const monthly = frequency === 'mensile' ? ' ogni mese' : '';

    impact.innerHTML = `Con <strong>${euro(amount)}&nbsp;€</strong>${monthly} offri <strong>${meals} pasti caldi</strong> a chi non ha nulla.`;
    cta.textContent = `Dona ${euro(amount)} € adesso${frequency === 'mensile' ? ' al mese' : ''}`;

    const url = new URL(URL_BASE);
    url.searchParams.set('importo', String(amount));
    url.searchParams.set('ricorrenza', frequency);
    cta.href = url.toString();
  }

  amounts.forEach(amount => amount.addEventListener('change', () => {
    custom.value = '';
    updateDonation();
  }));
  frequencies.forEach(frequency => frequency.addEventListener('change', updateDonation));
  custom.addEventListener('input', () => {
    if (custom.value || (custom.validity && custom.validity.badInput)) amounts.forEach(amount => { amount.checked = false; });
    updateDonation();
  });

  updateDonation();
})();
