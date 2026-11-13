// Zapatosdecharolconlazo · comportamiento mínimo

(function () {
  document.documentElement.classList.add('js');

  // Lazo animado: empieza a dibujarse cuando aparece en pantalla
  var lazos = document.querySelectorAll('.lazo-anim');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('play'); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    lazos.forEach(function (l) { io.observe(l); });
  } else {
    lazos.forEach(function (l) { l.classList.add('play'); });
  }

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

  // Preguntas de la portada: carrusel automático en móvil (cada 3 s)
  (function () {
    var lista = document.querySelector('.hero-v2 .preguntas');
    if (!lista) return;
    var items = lista.querySelectorAll('li');
    var movil = window.matchMedia('(max-width: 700px)');
    var actual = 0, timer = null;
    var puntos = document.createElement('div');
    puntos.className = 'preguntas-puntos';
    items.forEach(function (li, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Pregunta ' + (i + 1));
      b.addEventListener('click', function () { ir(i); reiniciar(); });
      puntos.appendChild(b);
    });
    lista.insertAdjacentElement('afterend', puntos);
    function ir(n) {
      var antes = items[actual];
      actual = (n + items.length) % items.length;
      items.forEach(function (li, i) {
        li.classList.toggle('activa', i === actual);
        li.classList.toggle('sale', li === antes && i !== actual);
      });
      puntos.querySelectorAll('button').forEach(function (b, i) {
        b.setAttribute('aria-current', i === actual ? 'true' : 'false');
      });
    }
    function reiniciar() {
      clearInterval(timer);
      if (movil.matches) timer = setInterval(function () { ir(actual + 1); }, 3000);
    }
    // deslizar con el dedo
    var x0 = null;
    lista.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lista.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { ir(actual + (dx < 0 ? 1 : -1)); reiniciar(); }
    });
    ir(0);
    reiniciar();
    if (movil.addEventListener) movil.addEventListener('change', reiniciar);
  })();


  // Servicios en pestañas (Estándar abierta al entrar)
  (function () {
    var lista = document.querySelector('.servicios [role="tablist"]');
    if (!lista) return;
    var tabs = Array.prototype.slice.call(lista.querySelectorAll('[role="tab"]'));
    function abrir(tab, foco) {
      tabs.forEach(function (t) {
        var activa = t === tab;
        t.setAttribute('aria-selected', activa ? 'true' : 'false');
        t.tabIndex = activa ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        panel.hidden = !activa;
        if (activa) { panel.classList.remove('entra'); void panel.offsetWidth; panel.classList.add('entra'); }
      });
      if (foco) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { abrir(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') n = 0;
        if (e.key === 'End') n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); abrir(tabs[n], true); }
      });
    });
    tabs.forEach(function (t) {
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = t.getAttribute('aria-selected') !== 'true';
    });
  })();


  // Looks: carrusel de antes/después. Las etiquetas quedan fijas; solo pasan las fichas.
  // En móvil se ve una foto (de partida, el después): tocarla o tocar la etiqueta cambia al antes y viceversa.
  (function () {
    var car = document.querySelector('.carrusel');
    if (!car) return;
    var pista = car.querySelector('.carrusel-pista');
    var slides = car.querySelectorAll('.slide');
    var tabs = car.querySelectorAll('.carrusel-cabecera .tab');
    var puntos = car.querySelector('.carrusel-puntos');
    var contador = car.querySelector('.carrusel-contador');
    var movil = window.matchMedia('(max-width: 700px)');
    var actual = 0;
    slides.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Look ' + (i + 1));
      b.addEventListener('click', function () { ir(i); });
      puntos.appendChild(b);
    });
    function ver(despues) {
      car.classList.toggle('ver-despues', despues);
      tabs[0].classList.toggle('activa', !despues);
      tabs[1].classList.toggle('activa', despues);
      tabs[0].setAttribute('aria-pressed', despues ? 'false' : 'true');
      tabs[1].setAttribute('aria-pressed', despues ? 'true' : 'false');
    }
    function marcar(i) {
      if (i !== actual) ver(true);    // cada look nuevo empieza en «Después»
      actual = i;
      puntos.querySelectorAll('button').forEach(function (b, k) {
        b.setAttribute('aria-current', k === i ? 'true' : 'false');
      });
      contador.textContent = (i + 1) + ' / ' + slides.length;
    }
    function ir(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      pista.scrollTo({ left: i * pista.clientWidth, behavior: 'smooth' });
      marcar(i);
    }
    car.querySelectorAll('.carrusel-flecha').forEach(function (b) {
      b.addEventListener('click', function () {
        var d = parseInt(b.getAttribute('data-dir'), 10);
        ir((actual + d + slides.length) % slides.length);
      });
    });
    var t = null;
    pista.addEventListener('scroll', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var i = Math.round(pista.scrollLeft / pista.clientWidth);
        if (i !== actual) marcar(i);
      }, 80);
    }, { passive: true });
    pista.addEventListener('click', function () {
      if (movil.matches) ver(!car.classList.contains('ver-despues'));
    });
    pista.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); ir(actual + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); ir(actual - 1); }
      if ((e.key === 'Enter' || e.key === ' ') && movil.matches) { e.preventDefault(); ver(!car.classList.contains('ver-despues')); }
    });
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (movil.matches) ver(tab.getAttribute('data-ver') === 'despues');
      });
    });
    window.addEventListener('resize', function () {
      pista.scrollLeft = actual * pista.clientWidth;
    });
    marcar(0);
  })();


  // Precio promocional: al pasar la fecha, se muestra el precio normal
  document.querySelectorAll('[data-promo-hasta]').forEach(function (el) {
    var fin = new Date(el.getAttribute('data-promo-hasta') + 'T23:59:59');
    if (new Date() > fin) {
      el.classList.add('promo-fin');
      var antes = el.querySelector('.precio-antes'), ahora = el.querySelector('.precio-ahora');
      if (antes && ahora) ahora.textContent = antes.textContent;
    }
  });


  // Trazo bajo «mucho más que ropa»: se dibuja al aparecer en pantalla
  (function () {
    var f = document.querySelector('.frase-ropa');
    if (!f) return;
    if (!('IntersectionObserver' in window)) { f.classList.add('play'); return; }
    var io = new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) { f.classList.add('play'); io.disconnect(); }
    }, { threshold: 0.6 });
    io.observe(f);
  })();

})();
