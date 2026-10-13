/* Interazioni condivisibili dal futuro template WordPress delle pagine progetto. */
(function () {
  // hamburger e tendine del menu: gestiti da js/nav.js (unico per tutte le pagine)

  const form = document.getElementById('dona');
  if (!form || form.tagName !== 'FORM') return;
  const choices = Array.from(form.querySelectorAll('input[name="project-amount"]'));
  const custom = document.getElementById('project-amt-custom');
  const hiddenAmount = document.getElementById('project-importo');
  const impact = document.getElementById('project-impact');
  const cta = document.getElementById('project-dona-cta');
  if (!hiddenAmount || !impact || !cta) return;
  const projectTitle = document.getElementById('project-title');
  const projectName = form.dataset.projectName || (projectTitle && projectTitle.textContent.trim()) || 'questo progetto';
  const Importo = window.CottolengoImporto;

  function euro(value) {
    return value.toLocaleString('it-IT', { maximumFractionDigits: 2 });
  }

  /* importo valido, oppure null se il campo libero contiene un valore non
     valido (regola in js/importo.js: intero da 1 a 100.000 €) */
  function currentAmount() {
    const libero = Importo ? Importo.leggi(custom) : { stato: 'vuoto' };
    if (libero.stato === 'valido') return libero.valore;
    if (libero.stato === 'errore') return null;
    const selected = choices.find(choice => choice.checked);
    const n = selected ? Number(selected.value) : 20;
    return (!Importo || Importo.valido(n)) ? n : 20;
  }

  function updateDonation() {
    const amount = currentAmount();
    const errore = amount === null;
    if (Importo) {
      Importo.segnala(custom, errore);
      Importo.bloccaPulsante(cta, errore);
    }
    if (errore) {
      cta.textContent = 'Inserisci un importo valido';
      return;                          // il campo nascosto "importo" resta all'ultimo valore valido, l'invio è bloccato
    }
    hiddenAmount.value = String(amount);
    // testi personalizzabili per pagina: data-impatto e data-cta sul <form>,
    // con {importo} al posto della cifra (es. pagine delle aree di "Chi aiutiamo")
    const importo = `<strong>${euro(amount)}&nbsp;€</strong>`;
    impact.innerHTML = form.dataset.impatto
      ? form.dataset.impatto.replace('{importo}', importo)
      : `Con ${importo} contribuisci ad assistenza, terapie e attività fondamentali.`;
    cta.textContent = form.dataset.cta
      ? form.dataset.cta.replace('{importo}', euro(amount))
      : `Dona ${euro(amount)} € a ${projectName}`;
  }

  // rete di sicurezza: nessun invio con un importo non valido
  form.addEventListener('submit', e => {
    if (currentAmount() === null) { e.preventDefault(); if (custom) custom.focus(); }
  });

  choices.forEach(choice => choice.addEventListener('change', () => {
    if (custom) custom.value = '';
    updateDonation();
  }));
  if (custom) custom.addEventListener('input', () => {
    if (custom.value || (custom.validity && custom.validity.badInput)) choices.forEach(choice => { choice.checked = false; });
    updateDonation();
  });
  updateDonation();
})();
