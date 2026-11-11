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

  // Formulario de contacto: valida antes de enviar
  var form = document.getElementById('contacto-form');
  if (form) {
    var reglas = {
      nombre: function (v) { return v.trim() !== ''; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
      mensaje: function (v) { return v.trim() !== ''; }
    };
    function marcar(nombre, mal) {
      var input = form.elements[nombre];
      var err = document.getElementById('cf-' + nombre + '-error');
      input.setAttribute('aria-invalid', mal ? 'true' : 'false');
      if (mal) input.setAttribute('aria-describedby', err.id); else input.removeAttribute('aria-describedby');
      err.hidden = !mal;
    }
    Object.keys(reglas).forEach(function (n) {
      form.elements[n].addEventListener('input', function () { marcar(n, false); });
    });
    form.addEventListener('submit', function (e) {
      var primero = null;
      Object.keys(reglas).forEach(function (n) {
        var mal = !reglas[n](form.elements[n].value);
        marcar(n, mal);
        if (mal && !primero) primero = form.elements[n];
      });
      if (primero) { e.preventDefault(); primero.focus(); }
    });
  }

  // Año del pie
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
