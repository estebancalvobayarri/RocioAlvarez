// Zapatosdecharolconlazo · comportamiento mínimo

(function () {
  // Menú en móvil
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Año del pie
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
