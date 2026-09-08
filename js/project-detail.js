/* Interazioni condivisibili dal futuro template WordPress delle pagine progetto. */
(function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const dropdownItem = document.querySelector('.nav__item--dropdown');
  const dropdownToggle = document.querySelector('.nav__dropdown-toggle');

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

  if (dropdownItem && dropdownToggle) {
    dropdownToggle.addEventListener('click', event => {
      event.stopPropagation();
      const open = dropdownItem.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', event => {
      if (dropdownItem.contains(event.target)) return;
      dropdownItem.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  }

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
    impact.innerHTML = `Con <strong>${euro(amount)}&nbsp;€</strong> contribuisci ad assistenza, terapie e attività fondamentali.`;
    cta.textContent = `Dona ${euro(amount)} € a ${projectName}`;
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
