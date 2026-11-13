(function () {

  function waUrl(msg) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  }
  function money(n) {
    return "$ " + Number(n).toLocaleString("es-AR");
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (/^5491100000000$|CAMBIAR/.test(WHATSAPP_NUMBER)) {
    console.warn("Raíz Deco: falta cargar tu número de WhatsApp en assets/js/config.js");
  }

  // Botones/links con data-wa="mensaje" -> link de WhatsApp
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waUrl(a.getAttribute("data-wa"));
    a.target = "_blank";
    a.rel = "noopener";
  });

  // ---------- Catálogo ----------
  var grid = document.getElementById("grid");
  var nav = document.getElementById("cat-nav");
  var categories = [];
  PRODUCTS.forEach(function (p) {
    if (categories.indexOf(p.category) === -1) categories.push(p.category);
  });

  function photoFor(p) {
    var box = el("div", "photo");
    var label = el("span", "ph-label", "foto 1:1");
    box.appendChild(label);
    if (p.image) {
      var img = new Image();
      img.alt = p.name;
      img.loading = "lazy";
      img.onload = function () { if (label.parentNode) label.parentNode.removeChild(label); };
      img.onerror = function () { if (img.parentNode) img.parentNode.removeChild(img); };
      box.appendChild(img);
      img.src = p.image;
    }
    return box;
  }

  // Mezcla pareja para "Todos": intercala categorías y reordena al azar en cada carga de la página
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var k = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[k]; a[k] = t;
    }
    return a;
  }
  function mixedOrder() {
    var groups = categories.map(function (c) {
      return shuffle(PRODUCTS.filter(function (p) { return p.category === c; }));
    });
    var out = [];
    while (groups.some(function (g) { return g.length; })) {
      shuffle(groups.filter(function (g) { return g.length; })).forEach(function (g) {
        out.push(g.shift());
      });
    }
    return out;
  }
  var mixed = mixedOrder();

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var currentCat = null;
  var switching = null;

  function render(cat) {
    currentCat = cat;
    grid.innerHTML = "";
    var list = cat ? PRODUCTS.filter(function (p) { return p.category === cat; }) : mixed;
    list.forEach(function (p, i) {
      var card = el("div", "product");
      card.style.setProperty("--i", Math.min(i, 9));
      card.appendChild(photoFor(p));
      card.appendChild(el("h3", null, esc(p.name)));
      if (p.desc) card.appendChild(el("p", "desc", esc(p.desc)));
      card.appendChild(el("div", "price", money(p.price)));
      var a = el("a", "wa-btn", "Comprar");
      a.href = waUrl("Hola! Quiero comprar: " + p.name);
      a.target = "_blank";
      a.rel = "noopener";
      card.appendChild(a);
      grid.appendChild(card);
    });
    Array.prototype.forEach.call(nav.children, function (b) {
      b.classList.toggle("active", (b.getAttribute("data-cat") || "") === (cat || ""));
    });
  }

  // Cambio de categoría con animación: las tarjetas se desvanecen y entran las nuevas
  function switchTo(cat) {
    if (cat === currentCat) return;
    if (switching) clearTimeout(switching);
    if (reduceMotion) { render(cat); return; }
    grid.classList.add("fading");
    switching = setTimeout(function () {
      grid.classList.remove("fading");
      render(cat);
      switching = null;
    }, 180);
  }

  function pill(label, cat) {
    var b = el("button", "cat-pill", esc(label));
    b.type = "button";
    b.setAttribute("data-cat", cat || "");
    b.addEventListener("click", function () { switchTo(cat); });
    nav.appendChild(b);
  }
  pill("Todos", null);
  categories.forEach(function (c) { pill(c, c); });
  render(null);

  // ---------- Carrusel del hero (usa las primeras fotos que existan) ----------
  var carousel = document.getElementById("hero-carousel");
  var current = 0;

  function sync() {
    var slides = carousel.querySelectorAll(".slide");
    if (!slides.length) {
      carousel.innerHTML = '<div class="slide active"><span class="ph-label">foto 1:1</span></div>';
      return;
    }
    if (current >= slides.length) current = 0;
    slides.forEach(function (s, i) { s.classList.toggle("active", i === current); });
  }

  carousel.innerHTML = '<div class="slide active"><span class="ph-label">foto 1:1</span></div>';
  var loaded = 0;
 mixed.forEach(function (p) {
    if (!p.image) return;
    var img = new Image();
    img.alt = "";
    img.onload = function () {
      if (loaded === 0) carousel.innerHTML = "";
      loaded++;
      var s = el("div", "slide");
      s.appendChild(img);
      carousel.appendChild(s);
      sync();
    };
    img.src = p.image;
  });

  setInterval(function () {
    var slides = carousel.querySelectorAll(".slide");
    if (slides.length < 2) return;
    current = (current + 1) % slides.length;
    sync();
  }, 3000);

  // Navbar fijo: se compacta al hacer scroll
  var header = document.querySelector("header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// Bloquea el menú de clic derecho sobre las imágenes
document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG") e.preventDefault();
});
