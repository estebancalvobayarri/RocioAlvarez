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

  // Huecos para archivos aún no subidos (logotipo y fotos de looks).
  // El logotipo no se sustituye por texto: se reserva su sitio.
  function placeholder(img) {
    var el = document.createElement('span');
    if (img.hasAttribute('data-logo')) {
      el.className = 'logo-missing';
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', img.alt);
    } else {
      el.className = 'photo-missing';
      el.textContent = img.getAttribute('data-photo') || '';
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', img.alt);
    }
    img.replaceWith(el);
  }
  document.querySelectorAll('img[data-logo], img[data-photo]').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) placeholder(img);
    else img.addEventListener('error', function () { placeholder(img); }, { once: true });
  });

  // Año del pie
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
