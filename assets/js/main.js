// ----- Abas (Vanilla JS) -----
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

function activateTab(name) {
  tabs.forEach(function (tab) {
    tab.setAttribute('aria-selected', String(tab.dataset.tab === name));
  });
  panels.forEach(function (panel) {
    panel.classList.toggle('hidden', panel.id !== 'panel-' + name);
  });
}

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () { activateTab(tab.dataset.tab); });
});

// ----- Formulário (demonstração: não envia dados) -----
const form = document.getElementById('booking-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  message.classList.remove('hidden', 'text-teal-700', 'text-red-600');

  if (!form.checkValidity()) {
    message.textContent = 'Please fill in all fields so we can reach you.';
    message.classList.add('text-red-600');
    return;
  }
  message.textContent = 'Thank you! This is a demo, so no request was sent.';
  message.classList.add('text-teal-700');
  form.reset();
});
