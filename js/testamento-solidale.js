/* Interazioni della pagina Testamento solidale e del modulo generico. */
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


  const amounts = Array.from(document.querySelectorAll('input[name="legacy-amount"]'));
  const frequencies = Array.from(document.querySelectorAll('input[name="legacy-freq"]'));
  const custom = document.getElementById('legacy-amt-custom');
  const impact = document.getElementById('legacy-impact');
  const fiscal = document.getElementById('legacy-fiscal');
  const cta = document.getElementById('legacy-dona-cta');
  if (!amounts.length || !custom || !impact || !fiscal || !cta) return;

  function euro(value) {
    return value.toLocaleString('it-IT', { maximumFractionDigits: 2 });
  }

  function currentAmount() {
    const customAmount = Number(custom.value);
    if (customAmount > 0) return customAmount;
    const selected = amounts.find(amount => amount.checked);
    return selected ? Number(selected.value) : 35;
  }

  function currentFrequency() {
    const selected = frequencies.find(frequency => frequency.checked);
    return selected ? selected.value : 'singola';
  }

  function updateDonation() {
    const amount = currentAmount();
    const frequency = currentFrequency();
    const meals = Math.max(1, Math.floor(amount / 5));
    const monthly = frequency === 'mensile' ? ' ogni mese' : '';

    impact.innerHTML = `Con <strong>${euro(amount)}&nbsp;€</strong>${monthly} offri <strong>${meals} pasti caldi</strong> a chi non ha nulla.`;
    cta.textContent = `Dona ${euro(amount)} € adesso${frequency === 'mensile' ? ' al mese' : ''}`;

    const url = new URL('https://dona.cottolengo.org/');
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
    if (custom.value) amounts.forEach(amount => { amount.checked = false; });
    updateDonation();
  });

  updateDonation();
})();
