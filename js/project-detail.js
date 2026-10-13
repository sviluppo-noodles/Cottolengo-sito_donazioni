/* Interazioni condivisibili dal futuro template WordPress delle pagine progetto. */
(function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    });
    nav.addEventListener('click', event => {
      if (!event.target.closest('a')) return;
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  }

  // tendine del menu: gestite da js/nav.js


  const form = document.getElementById('dona');
  if (!form) return;
  const choices = Array.from(form.querySelectorAll('input[name="project-amount"]'));
  const custom = document.getElementById('project-amt-custom');
  const hiddenAmount = document.getElementById('project-importo');
  const impact = document.getElementById('project-impact');
  const cta = document.getElementById('project-dona-cta');
  const projectTitle = document.getElementById('project-title');
  const projectName = form.dataset.projectName || (projectTitle && projectTitle.textContent.trim()) || 'questo progetto';

  function euro(value) {
    return value.toLocaleString('it-IT', { maximumFractionDigits: 2 });
  }

  function currentAmount() {
    const customValue = Number(custom && custom.value);
    if (customValue > 0) return customValue;
    const selected = choices.find(choice => choice.checked);
    return selected ? Number(selected.value) : 20;
  }

  function updateDonation() {
    const amount = currentAmount();
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

  choices.forEach(choice => choice.addEventListener('change', () => {
    if (custom) custom.value = '';
    updateDonation();
  }));
  if (custom) custom.addEventListener('input', () => {
    if (custom.value) choices.forEach(choice => { choice.checked = false; });
    updateDonation();
  });
  updateDonation();
})();
