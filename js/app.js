/* ============================================================
   AISLE — app.js
   Independent product discovery for drone & RC parts.
   Curation + affiliate links. Data in products.json
   (plus embedded fallback so the files work from file:// too).
   ============================================================ */

/* ---------- Embedded fallback (mirror of products.json) ---------- */
var STORE_FALLBACK = {
  "marca": { "nome": "DroneDeck", "tagline": "Drone parts. Fair prices." },
  "categorias": [
    { "slug": "baterias-rc", "nome": "Batteries", "icone": "carregador", "descricao": "LiPo and LiHV packs for quadcopters, whoops and planes." },
    { "slug": "motores-esc", "nome": "Motors & ESCs", "icone": "barra", "descricao": "Brushless motors, ESCs and speed controllers for your build." },
    { "slug": "fpv-camera", "nome": "FPV & Cameras", "icone": "camera", "descricao": "FPV cameras, gimbals, video transmitters and antennas." },
    { "slug": "helices-rc", "nome": "Propellers", "icone": "caixa", "descricao": "Props and blades for racing, freestyle and scale models." },
    { "slug": "rc-transmissores", "nome": "RC Transmitters", "icone": "teclado", "descricao": "Radios, transmitters, gimbals and controller accessories." }
  ],
  "produtos": [
    {
      "id": "bg-fallback-lipo-1500", "nome": "ZOP Power 7.4V 1500mAh 40C 2S Lipo Battery XT60 Plug", "descricao": "A 2S 7.4V LiPo pack with XT60 plug — a solid pick for your RC build, curated from the retailer catalog with live price and real ratings.", "marca": "ZOP Power",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-LIPO-1500",
      "categoria": "baterias-rc", "categoria_nome": "Batteries", "preco": 12.99, "preco_anterior": 15.99, "comissao": 0.4,
      "url_afiliado": "https://partners.example.com/dronedeck/lipo-1500?ref=dronedeck",
      "icone": "carregador", "disponibilidade": "em_estoque", "rating": 4.8, "avaliacoes": 920, "destaque": true,
      "specs": [
        { "rotulo": "Brand", "valor": "ZOP Power" },
        { "rotulo": "Category", "valor": "Batteries" },
        { "rotulo": "Package", "valor": "1 PCS" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged). Since this is a static demo, confirm price, rating and availability before buying." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-motor-2200kv", "nome": "RacerStar BR2304 1850KV 2-3S Brushless Motor", "descricao": "A race-tuned brushless motor for 2-3S whoop builds, curated from the retailer catalog with live price and ratings.", "marca": "RacerStar",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-MOTOR-2304",
      "categoria": "motores-esc", "categoria_nome": "Motors & ESCs", "preco": 9.99, "preco_anterior": 12.99, "comissao": 0.3,
      "url_afiliado": "https://partners.example.com/dronedeck/br2304?ref=dronedeck",
      "icone": "barra", "disponibilidade": "em_estoque", "rating": 4.7, "avaliacoes": 640, "destaque": true,
      "specs": [
        { "rotulo": "Brand", "valor": "RacerStar" },
        { "rotulo": "Category", "valor": "Motors & ESCs" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-cam", "nome": "Caddx Nebula Pro Vista FPV Camera Unit", "descricao": "A high-quality FPV camera unit with low latency, fitted for racing and freestyle quads, curated from the retailer catalog.", "marca": "Caddx",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-CAM-NEB",
      "categoria": "fpv-camera", "categoria_nome": "FPV & Cameras", "preco": 89.99, "preco_anterior": 109.99, "comissao": 2.7,
      "url_afiliado": "https://partners.example.com/dronedeck/nebula-pro?ref=dronedeck",
      "icone": "camera", "disponibilidade": "em_estoque", "rating": 4.6, "avaliacoes": 388, "destaque": false,
      "specs": [
        { "rotulo": "Brand", "valor": "Caddx" },
        { "rotulo": "Category", "valor": "FPV & Cameras" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-props", "nome": "Gemfan GF 5040 2-Blade Propeller CW CCW (4 Pack)", "descricao": "Lightweight 5-inch 2-blade props in CW and CCW pairs — a favorite for 5\" racing and freestyle quads.", "marca": "Gemfan",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-PROPS-5040",
      "categoria": "helices-rc", "categoria_nome": "Propellers", "preco": 3.49, "preco_anterior": 4.99, "comissao": 0.1,
      "url_afiliado": "https://partners.example.com/dronedeck/gf5040?ref=dronedeck",
      "icone": "caixa", "disponibilidade": "em_estoque", "rating": 4.9, "avaliacoes": 1510, "destaque": true,
      "specs": [
        { "rotulo": "Brand", "valor": "Gemfan" },
        { "rotulo": "Category", "valor": "Propellers" },
        { "rotulo": "Package", "valor": "4 PCS" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-tx", "nome": "RadioMaster Pocket 2.4GHz 16CH ELRS Radio Controller", "descricao": "A compact 2.4GHz 16-channel ELRS radio built for FPV — curated from the retailer catalog with live price and ratings.", "marca": "RadioMaster",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-TX-POCKET",
      "categoria": "rc-transmissores", "categoria_nome": "RC Transmitters", "preco": 79.99, "preco_anterior": 99.99, "comissao": 2.4,
      "url_afiliado": "https://partners.example.com/dronedeck/pocket-elrs?ref=dronedeck",
      "icone": "teclado", "disponibilidade": "em_estoque", "rating": 4.8, "avaliacoes": 1200, "destaque": true,
      "specs": [
        { "rotulo": "Brand", "valor": "RadioMaster" },
        { "rotulo": "Category", "valor": "RC Transmitters" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-esc", "nome": "Flycolor Beast Pro 45A ESC 6S BLHeli_32 4-in-1", "descricao": "A 45A 6S 4-in-1 ESC with BLHeli_32 firmware for racing and freestyle quads.", "marca": "Flycolor",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-ESC-45A",
      "categoria": "motores-esc", "categoria_nome": "Motors & ESCs", "preco": 42.99, "preco_anterior": 49.99, "comissao": 1.3,
      "url_afiliado": "https://partners.example.com/dronedeck/beastpro45?ref=dronedeck",
      "icone": "barra", "disponibilidade": "em_estoque", "rating": 4.5, "avaliacoes": 255, "destaque": false,
      "specs": [
        { "rotulo": "Brand", "valor": "Flycolor" },
        { "rotulo": "Category", "valor": "Motors & ESCs" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-servo", "nome": "DSServo DS3225 25KG Metal Gear Digital Servo", "descricao": "A 25kg metal-gear digital servo for planes, cars and robots — a robust choice at a fair price.", "marca": "DSServo",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-SERVO-3225",
      "categoria": "servos-rc", "categoria_nome": "Servos", "preco": 14.99, "preco_anterior": 17.99, "comissao": 0.5,
      "url_afiliado": "https://partners.example.com/dronedeck/ds3225?ref=dronedeck",
      "icone": "caixa", "disponibilidade": "em_estoque", "rating": 4.7, "avaliacoes": 810, "destaque": true,
      "specs": [
        { "rotulo": "Brand", "valor": "DSServo" },
        { "rotulo": "Category", "valor": "Servos" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    },
    {
      "id": "bg-fallback-frame", "nome": "iFlight Nazgul CineSpeed Cinematic FPV Frame 5-inch", "descricao": "A durable 5-inch cinematic FPV frame with mounting options for an easily serviceable build.", "marca": "iFlight",
      "merchant": "partner-store", "merchant_nome": "Partner store", "product_id": "BG-FALLBACK-FRAME-5",
      "categoria": "estruturas-rc", "categoria_nome": "Frames & Bodies", "preco": 34.99, "preco_anterior": 41.99, "comissao": 1.1,
      "url_afiliado": "https://partners.example.com/dronedeck/nazgul-frame?ref=dronedeck",
      "icone": "caixa", "disponibilidade": "em_estoque", "rating": 4.6, "avaliacoes": 310, "destaque": false,
      "specs": [
        { "rotulo": "Brand", "valor": "iFlight" },
        { "rotulo": "Category", "valor": "Frames & Bodies" },
        { "rotulo": "Availability", "valor": "In stock" }
      ],
      "faq": [
        { "p": "Does DroneDeck sell this part?", "a": "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer's page, where the item is sold and processed by that retailer." },
        { "p": "Where do the price and rating come from?", "a": "Directly from the current partner listing used in this demo (unchanged)." },
        { "p": "Does DroneDeck earn a commission?", "a": "if you buy through the button, this independent product discovery demo may receive a small commission from the partner store, at no additional cost to you." }
      ]
    }
  ]
};

/* ---------- State ---------- */
var DADOS = null;
var PRODUTOS = [];
var CATEGORIAS = [];

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

/* ---------- Utilities ---------- */
function fmt(n) {
  return (n == null) ? "" : n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
function num(n) {
  return (n == null) ? "" : n.toLocaleString("en-US");
}
function pctDesc(a, b) {
  if (!a || !b || a >= b) return null;
  return Math.round((1 - a / b) * 100);
}
function esc(s) {
  return String(s || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function starsHTML(rating) {
  var full = Math.floor(rating);
  var frac = rating - full;
  var half = (frac >= 0.25 && frac < 0.75);
  var out = "";
  for (var i = 0; i < full; i++) out += "\u2605";
  if (half) out += '<span class="half">\u2605</span>';
  for (var j = full + (half ? 1 : 0); j < 5; j++) out += '<span class="half">\u2605</span>';
  return '<span class="stars">' + out + "</span>";
}

var ROTULOS_DISP = {
  em_estoque: ["In stock", "stock"],
  poucas_unidades: ["Only a few left", "soon"],
  esgotado: ["Currently unavailable", "out"]
};

var SCHEMA_DISP = {
  em_estoque: "https://schema.org/InStock",
  poucas_unidades: "https://schema.org/LimitedAvailability",
  esgotado: "https://schema.org/OutOfStock"
};

/* ---------- Neutral product icons (light-gray line art) ---------- */
var ICON_STROKE = 'fill="none" stroke="#98a0a8" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"';
var ICON_STROKE_SOFT = 'fill="none" stroke="#aab1b9" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"';

function iconeSVG(icone, soft) {
  var s = soft ? ICON_STROKE_SOFT : ICON_STROKE;
  switch (icone) {
    case "fone":
      return '<path d="M150 360 v-60 a150 150 0 0 1 300 0 v60" ' + s + '/>' +
        '<rect x="130" y="330" width="90" height="120" rx="45" ' + s + '/>' +
        '<rect x="380" y="330" width="90" height="120" rx="45" ' + s + '/>';
    case "caixa":
      return '<rect x="185" y="150" width="230" height="300" rx="34" ' + s + '/>' +
        '<circle cx="300" cy="300" r="92" ' + s + '/>' +
        '<circle cx="300" cy="300" r="30" ' + s + '/>';
    case "barra":
      return '<rect x="110" y="190" width="380" height="120" rx="22" ' + s + '/>' +
        '<circle cx="300" cy="400" r="58" ' + s + '/>';
    case "relogio":
      return '<rect x="252" y="70" width="96" height="150" rx="20" ' + s + '/>' +
        '<rect x="252" y="380" width="96" height="150" rx="20" ' + s + '/>' +
        '<rect x="215" y="215" width="170" height="170" rx="48" ' + s + '/>' +
        '<circle cx="300" cy="300" r="52" ' + s + '/>';
    case "lampada":
      return '<circle cx="300" cy="280" r="105" ' + s + '/>' +
        '<rect x="265" y="385" width="70" height="95" rx="12" ' + s + '/>' +
        '<path d="M270 270 L300 240 M330 270 L300 240 M300 240 v40" ' + s + '/>';
    case "tomada":
      return '<rect x="190" y="165" width="220" height="270" rx="36" ' + s + '/>' +
        '<circle cx="345" cy="250" r="24" ' + s + '/>' +
        '<circle cx="345" cy="350" r="24" ' + s + '/>';
    case "aspirador":
      return '<rect x="175" y="255" width="250" height="130" rx="65" ' + s + '/>' +
        '<ellipse cx="300" cy="225" rx="60" ry="45" ' + s + '/>' +
        '<circle cx="300" cy="225" r="20" fill="#c2c8cf" stroke="none"/>';
    case "camera":
      return '<rect x="168" y="205" width="264" height="180" rx="32" ' + s + '/>' +
        '<circle cx="300" cy="295" r="78" ' + s + '/>' +
        '<circle cx="300" cy="295" r="34" fill="#c2c8cf" stroke="none"/>' +
        '<rect x="262" y="75" width="76" height="130" rx="16" ' + s + '/>';
    case "teclado":
      var keys = "";
      for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 8; c++) {
          keys += '<rect x="' + (150 + c * 36) + '" y="' + (205 + r * 38) + '" width="26" height="26" rx="7" ' + s + '/>';
        }
      }
      return '<rect x="128" y="175" width="344" height="235" rx="28" ' + s + '/>' + keys;
    case "carregador":
      return '<rect x="215" y="215" width="170" height="170" rx="85" ' + s + '/>' +
        '<polygon points="315,190 245,320 298,320 288,410 358,282 305,282" fill="#c2c8cf" stroke="none"/>';
    default:
      return '<rect x="150" y="150" width="300" height="300" rx="60" ' + s + '/>' +
        '<circle cx="300" cy="300" r="80" ' + s + '/>';
  }
}

/* ---------- Neutral placeholder image (no gradient, no color) ---------- */
var PH_BG = ["#edf0f2", "#e7ebee", "#eef0f2", "#e9edf1"];
var PH_ROT = [-6, 5, 9, -3];

function svgProduto(prod, variant) {
  if (prod.img && /^https?:\/\//i.test(String(prod.img))) { return prod.img; }
  var v = variant || 0;
  var bg = PH_BG[v % 4], rot = PH_ROT[v % 4];
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">' +
    '<rect width="600" height="600" fill="' + bg + '"/>' +
    '<circle cx="300" cy="470" r="150" fill="rgba(20,28,36,0.05)"/>' +
    '<ellipse cx="300" cy="465" rx="180" ry="24" fill="rgba(20,28,36,0.08)"/>' +
    '<g transform="translate(300,300) rotate(' + rot + ') translate(-300,-300) translate(0,-24)">' +
    iconeSVG(prod.icone) +
    "</g></svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function imgProd(prod, variant) {
  var v = variant || 0;
  var fotos = (prod.fotos && prod.fotos.length) ? prod.fotos : null;
  if (fotos) {
    if (fotos[v] && /^https?:\/\//i.test(String(fotos[v]))) return fotos[v];
    for (var i = 0; i < fotos.length; i++) {
      if (fotos[i] && /^https?:\/\//i.test(String(fotos[i]))) return fotos[i];
    }
  } else if (prod.img && /^https?:\/\//i.test(String(prod.img))) {
    return prod.img;
  }
  return svgProduto(prod, variant);
}

/* ---------- Product card ---------- */
function cardHTML(p) {
  var pct = pctDesc(p.preco, p.preco_anterior);
  var esgotado = p.disponibilidade === "esgotado";
  var badge = pct != null ? '<span class="badge">-' + pct + "%</span>" : "";
  var btn = esgotado
    ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
    : '<button class="btn-buy" onclick="abrirOferta(\'' + p.id + '\')">View deal</button>';
  return '<article class="pcard">' +
    '<a class="media" href="product.html?id=' + p.id + '">' + badge +
    '<img src="' + imgProd(p, 0) + '" alt="' + esc(p.nome) + '" loading="lazy"/>' +
    "</a>" +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="product.html?id=' + p.id + '">' + esc(p.nome) + "</a>" +
    '<div class="rating">' + starsHTML(p.rating) + ' <span class="reviews">' + p.rating.toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>" +
    '<div class="price">' +
    (p.preco_anterior ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (p.preco_anterior ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<div class="merchant"><a href="store.html?loja=' + encodeURIComponent(p.merchant) + '">' + esc(p.merchant_nome) + "</a></div>" +
    btn +
    "</div></article>";
}

/* ---------- SEO: per-product meta description + JSON-LD ---------- */
function setMetaDescricao(p) {
  var metaDesc = $('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = p.descricao + " Explore this product on DroneDeck — compare prices, ratings and specs, then check the price and buy directly at the retailer.";
}

function injetarSchema(p) {
  var antigo = document.getElementById("ld-product");
  if (antigo) antigo.remove();
  var dados = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.nome,
    "description": p.descricao,
    "brand": { "@type": "Brand", "name": p.marca },
    "sku": p.product_id,
    "offers": {
      "@type": "Offer",
      "url": p.url_afiliado,
      "priceCurrency": "USD",
      "price": p.preco.toFixed(2),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": SCHEMA_DISP[p.disponibilidade] || "https://schema.org/Unavailable",
      "seller": { "@type": "Organization", "name": p.merchant_nome }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": p.rating.toFixed(1),
      "reviewCount": p.avaliacoes
    }
  };
  var s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "ld-product";
  s.textContent = JSON.stringify(dados);
  document.head.appendChild(s);
}

/* ---------- Buy action (redirects to affiliate link) ---------- */
function abrirOferta(id) {
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) return;
  if (p.disponibilidade === "esgotado") { toast("This item is currently unavailable at the retailer."); return; }
  toast("Opening " + p.merchant_nome + " — the current price and deal are confirmed at checkout.");
  setTimeout(function () { window.open(p.url_afiliado, "_blank", "noopener"); }, 600);
}

function toast(msg) {
  var t = $("#toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(function () { t.classList.add("show"); });
  clearTimeout(t._to);
  t._to = setTimeout(function () { t.classList.remove("show"); }, 2600);
}

/* ---------- Header ---------- */
function renderHeader() {
  var catsHTML = '<a href="index.html">Home</a>';
  CATEGORIAS.forEach(function (c) {
    catsHTML += '<a href="catalog.html?cat=' + c.slug + '">' + esc(c.nome) + "</a>";
  });
  var h = document.createElement("div");
  h.innerHTML =
    '<header class="site-header">' +
    '<div class="container">' +
    '<div class="hdr-top">' +
    '<a class="brand" href="index.html">' +
    '<img class="brand-logo" src="img/logo.png" alt="DroneDeck logo" width="36" height="36"/>' +
    '<span><span class="brand-name">DroneDeck</span><span class="brand-tag">discover curated drone &amp; RC parts</span></span>' +
    '</a>' +
    '<form class="search-box" id="busca-form" role="search">' +
    '<label class="visually-hidden" for="busca-input">Search products</label>' +
    '<input id="busca-input" type="search" placeholder="Search parts… (e.g. LiPo battery, FPV camera, motor, prop)" autocomplete="off"/>' +
    '<button class="search-btn" type="submit" aria-label="Search">' + iconLupa() + "</button>" +
    '<div class="sugest" id="busca-sugest"></div>' +
    "</form>" +
    '<nav class="hdr-links" id="hdr-links">' +
    '<a class="ofertas" href="catalog.html?ofertas=1">Deals</a>' +
    '<a href="store.html">Stores</a>' +
    '<a href="about.html">About</a>' +
    '<a class="hdr-admin" href="admin.html">Admin</a>' +
    "</nav>" +
    '<button class="menu-btn" id="menu-btn" aria-label="Menu">\u2630</button>' +
    "</div>" +
    '<nav class="cats">' + catsHTML + "</nav>" +
    "</div>" +
    "</header>";
  var slot = $("#app-header");
  if (!slot) return;
  slot.parentNode.insertBefore(h.firstElementChild || h, slot);
  slot.parentNode.removeChild(slot);
  anexarBusca();
  var mb = $("#menu-btn"), links = $("#hdr-links");
  if (mb) mb.addEventListener("click", function () { links.classList.toggle("open"); });
}

function iconLupa() {
  return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
}

/* ---------- Search with suggestions (works for header + hero) ---------- */
function anexarBusca() {
  var qp = new URLSearchParams(location.search);
  $$("#busca-form, #hbusca-form").forEach(function (form) {
    var input = form.querySelector('input[type="search"]');
    var sugest = form.querySelector(".sugest");
    if (!form || !input) return;
    if (qp.get("busca")) input.value = qp.get("busca");

    var sugerir = function () {
      var t = input.value.trim().toLowerCase();
      if (!t) { sugest.classList.remove("open"); return; }
      var hits = PRODUTOS
        .filter(function (p) {
          return (p.nome + " " + p.marca + " " + p.categoria_nome).toLowerCase().indexOf(t) > -1;
        })
        .slice(0, 6);
      var html;
      if (!hits.length) html = '<div class="s-empty">No products found. Try another search.</div>';
      else html = hits.map(function (p) {
        return '<a href="product.html?id=' + p.id + '">' +
          '<span class="thumb"><img src="' + imgProd(p, 0) + '" alt=""/></span>' +
          '<span class="s-name">' + esc(p.nome) + "</span>" +
          '<span class="s-price">' + fmt(p.preco) + "</span></a>";
      }).join("");
      sugest.innerHTML = html;
      sugest.classList.add("open");
    };
    input.addEventListener("input", sugerir);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = input.value.trim();
      if (!t) return;
      sugest.classList.remove("open");
      location.href = "catalog.html?busca=" + encodeURIComponent(t);
    });
  });
  document.addEventListener("click", function (e) {
    $$(".sugest").forEach(function (s) {
      if (!s.contains(e.target)) s.classList.remove("open");
    });
  });
}

/* ---------- Footer ---------- */
function renderFooter() {
  var catLinks = "";
  CATEGORIAS.forEach(function (c) {
    catLinks += '<li><a href="catalog.html?cat=' + c.slug + '">' + esc(c.nome) + "</a></li>";
  });
  var f = document.createElement("div");
  f.innerHTML =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<div class="foot-top">' +
    '<div class="foot-brand">' +
    '<span class="brand"><img class="brand-logo" src="img/logo.png" alt="DroneDeck logo" width="36" height="36"/><span><span class="brand-name">DroneDeck</span></span></span>' +
    "<p>Independent product discovery and curation for drone and RC parts. We research and organize products, deals and coupons from partner retailers — purchases are completed directly with the retailer, never with us.</p>" +
    "</div>" +
    '<div class="foot-col"><h4>Explore</h4><ul>' + catLinks + "</ul></div>" +
    '<div class="foot-col"><h4>Company</h4><ul>' +
    '<li><a href="about.html">About DroneDeck</a></li>' +
    '<li><a href="about.html#how-it-works">How it works</a></li>' +
    '<li><a href="store.html">Retailers we track</a></li>' +
    '<li><a href="about.html#contact">Contact</a></li>' +
    "</ul></div>" +
    '<div class="foot-col"><h4>Transparency</h4>' +
    '<div class="foot-disclose">DroneDeck is an independent product discovery website. Some links may be affiliate links, meaning we may earn a commission from qualifying purchases, at no additional cost to you.</div>' +
    '<ul class="foot-legal">' +
    '<li><a href="about.html#disclosure">Affiliate disclosure</a></li>' +
    '<li><a href="about.html#privacy">Privacy policy</a></li>' +
    '<li><a href="about.html#terms">Terms of use</a></li>' +
    '<li><a href="about.html#cookies">Cookie policy</a></li>' +
    "</ul></div>" +
    "</div>" +
    '<div class="foot-bottom"><span>© 2026 ' + esc((DADOS.marca && DADOS.marca.nome) ? DADOS.marca.nome : String(DADOS.marca || "DroneDeck")) + ' — independent product discovery for drone &amp; RC parts. All products and retailers shown in this demo are fictional.</span><span>Built to validate the independent product curation model for drone parts.</span></div>' +
    "</div></footer>";
  var slot = $("#app-footer");
  if (!slot) return;
  slot.parentNode.insertBefore(f.firstElementChild || f, slot);
  slot.parentNode.removeChild(slot);
}

/* ---------- Load data (Supabase -> products.json -> fallback) ---------- */
function supaHeaders(token) {
  var k = (window.SUPA_CONFIG && SUPA_CONFIG.url) ? SUPA_CONFIG.anon : "";
  var h = { "apikey": k };
  h["Authorization"] = "Bearer " + (token || k);
  return h;
}

function carregarDoSupabase() {
  var url = (window.SUPA_CONFIG && SUPA_CONFIG.url) ? SUPA_CONFIG.url : null;
  if (!url) return Promise.reject(new Error("sem-supabase"));
  var base = url + "/rest/v1/produtos?select=id,dados";
  function getPagina(offset) {
    return fetch(base, {
      headers: Object.assign(supaHeaders(), { "Range-Unit": "items", "Range": offset + "-" + (offset + 999) })
    }).then(function (r) {
      if (!r.ok) throw new Error("supa " + r.status);
      return r.json();
    });
  }
  return getPagina(0).then(function (primeira) {
    if (primeira.length === 0) return [];
    if (primeira.length < 1000) return primeira;
    var paginas = [];
    for (var o = 1000; o <= 6000; o += 1000) paginas.push(o);
    var todas = paginas.map(getPagina);
    return Promise.all(todas).then(function (outras) {
      var rows = primeira.slice();
      outras.forEach(function (r) { if (r.length) rows = rows.concat(r); });
      return rows;
    });
  }).then(function (rows) {
    var produtos = [];
    for (var i = 0; i < rows.length; i++) produtos.push(rows[i].dados);
    var cats = {};
    var CAT_ICONE = { "rc-transmissores": "teclado", "rc-receptores": "teclado", "baterias-rc": "carregador", "carregadores-rc": "carregador", "servos-rc": "caixa", "motores-esc": "barra", "helices-rc": "caixa", "estruturas-rc": "caixa", "fpv-camera": "camera", "aeromodelos": "caixa", "helicopteros": "caixa", "drones-rc": "barra", "veiculos-rc": "caixa", "pecas-rc": "caixa" };
    produtos.forEach(function (p) {
      if (!p || !p.categoria) return;
      if (!cats[p.categoria]) {
        cats[p.categoria] = {
          slug: p.categoria,
          nome: p.categoria_nome || p.categoria,
          icone: (p.icone || CAT_ICONE[p.categoria] || "loja"),
          descricao: (p.categoria_nome || p.categoria) + " curated from our partner retailers — compare prices and check the latest deals."
        };
      }
    });
    var categorias = Object.keys(cats).map(function (k) { return cats[k]; });
    return { "marca": "DroneDeck", "categorias": categorias, "produtos": produtos };
  });
}

function saneiaProdutos_(produtos) {
  for (var _a = 0; _a < produtos.length; _a++) {
    var _p = produtos[_a];
    var _r = Number(_p.rating);
    var _av = Number(_p.avaliacoes);
    var _pc = Number(_p.preco);
    if (isFinite(_r)) _p.rating = _r;
    if (isFinite(_av)) _p.avaliacoes = _av;
    if (isFinite(_pc)) _p.preco = _pc;
    if (_p.preco_anterior != null && isFinite(Number(_p.preco_anterior))) _p.preco_anterior = Number(_p.preco_anterior);
  }
  return produtos;
}

/* ---------- IndexedDB cache (paint instantaneo + refresh em background) ---------- */
var CACHE_DB = "nshop-cache", CACHE_STORE = "dados", CACHE_KEY = "catalogo-v1";
function idbAbre() {
  return new Promise(function (resolve, reject) {
    if (!(window.indexedDB)) { reject(new Error("no-idb")); return; }
    var req = indexedDB.open(CACHE_DB, 1);
    req.onupgradeneeded = function (e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains(CACHE_STORE)) db.createObjectStore(CACHE_STORE);
    };
    req.onsuccess = function () { resolve(req.result); };
    req.onerror = function () { reject(req.error); };
  });
}
function cacheLe() {
  return idbAbre().then(function (db) {
    return new Promise(function (resolve) {
      var tx = db.transaction(CACHE_STORE, "readonly");
      var got = tx.objectStore(CACHE_STORE).get(CACHE_KEY);
      got.onsuccess = function () { db.close(); resolve(got.result || null); };
      got.onerror = function () { db.close(); resolve(null); };
    });
  }).catch(function () { return null; });
}
function cacheGrava(dados) {
  return idbAbre().then(function (db) {
    return new Promise(function (resolve) {
      var tx = db.transaction(CACHE_STORE, "readwrite");
      tx.objectStore(CACHE_STORE).put(dados, CACHE_KEY);
      tx.oncomplete = function () { db.close(); resolve(); };
      tx.onerror = function () { db.close(); resolve(); };
    });
  }).catch(function () {});
}
function assinaDados(d) {
  if (!d || !d.produtos || !d.produtos.length) return "0";
  return String(d.produtos.length) + ":" + String(d.produtos[0].id) + ":" + String(d.produtos[d.produtos.length - 1].id);
}
function aplicarDados(d) {
  DADOS = d;
  PRODUTOS = DADOS.produtos;
  CATEGORIAS = DADOS.categorias || [];
  renderHeader();
  renderFooter();
  if (typeof document !== "undefined") {
    var page = document.body && document.body.dataset.page;
    if (page === "home") initHome();
    else if (page === "categoria") initCategoria();
    else if (page === "produto") initProduto();
    else if (page === "loja") initLoja();
    else if (page === "admin") initAdmin();
  }
}

var CACHE_TTL_MS = 30 * 60 * 1000;
function carregarDados() {
  var carregarRede = function () {
    return carregarDoSupabase()
      .catch(function () {
        return fetch("products.json")
          .then(function (r) { if (!r.ok) throw new Error("http"); return r.json(); });
      })
      .then(function (d) {
        if (!d.produtos) d.produtos = [];
        saneiaProdutos_(d.produtos);
        aplicarDados(d);
        cacheGrava({ dados: d, ts: Date.now() });
        return d;
      });
  };
  return cacheLe().then(function (c) {
    if (c && c.dados && c.dados.produtos && c.dados.produtos.length) {
      if ((Date.now() - (c.ts || 0)) < CACHE_TTL_MS) {
        aplicarDados(c.dados);
        return c.dados;
      }
      return carregarRede();
    }
    return carregarRede();
  }).catch(function () {
    return cacheLe().then(function (c) {
      if (c && c.dados && c.dados.produtos && c.dados.produtos.length) {
        aplicarDados(c.dados);
        return c.dados;
      }
      aplicarDados(STORE_FALLBACK);
      return STORE_FALLBACK;
    });
  });
}

/* ============================================================
   PAGE: HOME
   ============================================================ */

function initHome() {
  var deals = $("#deals-grid");
  if (deals) {
    var comDesconto = PRODUTOS.filter(function (p) { return p.preco_anterior != null && p.preco_anterior > p.preco; })
      .sort(function (a, b) { return pctDesc(b.preco, b.preco_anterior) - pctDesc(a.preco, a.preco_anterior); })
      .slice(0, 15);
    deals.innerHTML = comDesconto.map(cardHTML).join("");
  }

  var pop = $("#populares-grid");
  if (pop) {
    var populares = PRODUTOS.slice()
      .sort(function (a, b) { return b.avaliacoes - a.avaliacoes; })
      .slice(0, 15);
    pop.innerHTML = populares.map(cardHTML).join("");
  }

  var feat = $("#destaques-grid");
  if (feat) {
    var destaques = PRODUTOS
      .filter(function (p) { return p.destaque || p.preco_anterior != null; })
      .sort(function (a, b) { return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || b.avaliacoes - a.avaliacoes; })
      .slice(0, 10);
    feat.innerHTML = destaques.map(cardHTML).join("");
  }

  renderStoreStrip();
  renderPopSearches();
}

function renderStoreStrip() {
  var el = $("#store-strip");
  if (!el) return;
  var lojas = {};
  PRODUTOS.forEach(function (p) {
    var k = p.merchant || p.merchant_nome || "Partner store";
    var nome = p.merchant_nome || k;
    if (!lojas[k]) lojas[k] = { nome: nome, qtd: 0, menor: Infinity, maior: 0 };
    lojas[k].qtd++;
    if (p.preco < lojas[k].menor) lojas[k].menor = p.preco;
    if (p.preco > lojas[k].maior) lojas[k].maior = p.preco;
  });
  var itens = Object.keys(lojas).sort(function (a, b) { return lojas[b].qtd - lojas[a].qtd; });
  if (!itens.length) { el.style.display = "none"; return; }
  el.innerHTML = itens.map(function (k) {
    var l = lojas[k];
    var iniciais = String(l.nome).split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
    return '<a class="store-card" href="store.html?loja=' + encodeURIComponent(k) + '">' +
      '<span class="store-logo">' + esc(iniciais) + "</span>" +
      '<span class="store-meta"><strong>' + esc(l.nome) + "</strong>" +
      "<span>" + l.qtd + " offer" + (l.qtd === 1 ? "" : "s") + " · from " + fmt(l.menor) + "</span>" +
      "</span><span class=\"store-link\">Compare prices ›</span></a>";
  }).join("");
}

function renderPopSearches() {
  var el = $("#pop-searches");
  if (!el) return;
  var contagem = {};
  PRODUTOS.forEach(function (p) {
    var m = p.marca || "Unknown brand";
    if (/sem marca/i.test(m)) return;
    contagem[m] = (contagem[m] || 0) + 1;
  });
  var marcas = Object.keys(contagem).sort(function (a, b) { return contagem[b] - contagem[a]; }).slice(0, 4);
  var sugestoes = CATEGORIAS.slice(0, 4).map(function (c) { return { t: c.nome, q: c.slug }; })
    .concat(marcas.map(function (m) { return { t: m, q: m }; }));
  el.innerHTML = '<span class="pop-label">Popular:</span> ' +
    sugestoes.map(function (s) {
      return '<a href="catalog.html?busca=' + encodeURIComponent(s.q) + '">' + esc(s.t) + "</a>";
    }).join("");
  el.style.display = "";
}

/* ============================================================
   PAGE: CATALOG
   ============================================================ */
var CAT_STATE = { cat: null, ofertas: false, busca: "", ordena: "rel", min: null, max: null, notaMin: 0, soDisponiveis: false, soOfertas: false, marcas: [], lojas: [], descMin: 0, pag: 1 };
var CAT_POR_PAGINA = 24;

function produtosFiltrados() {
  var s = CAT_STATE;
  var marcas = s.marcas.length ? s.marcas.map(function (m) { return m.toLowerCase(); }) : [];
  var lojas = s.lojas.length ? s.lojas.map(function (x) { return x.toLowerCase(); }) : [];
  var lista = PRODUTOS.filter(function (p) {
    if (s.cat && p.categoria !== s.cat) return false;
    if (s.ofertas && p.preco_anterior == null) return false;
    if (s.busca) {
      var t = (p.nome + " " + p.marca + " " + p.categoria_nome).toLowerCase();
      if (t.indexOf(s.busca) === -1) return false;
    }
    if (s.min != null && p.preco < s.min) return false;
    if (s.max != null && p.preco > s.max) return false;
    if (p.rating < s.notaMin) return false;
    if (s.soDisponiveis && p.disponibilidade === "esgotado") return false;
    if (s.soOfertas && p.preco_anterior == null) return false;
    if (marcas.length) {
      var mTxt = String(p.marca || "").trim();
      var passa = (marcas.indexOf("__none__") > -1 && !mTxt) || marcas.indexOf(mTxt.toLowerCase()) > -1;
      if (!passa) return false;
    }
    if (lojas.length && lojas.indexOf(String(p.merchant || "").toLowerCase()) === -1) return false;
    if (s.descMin && pctDesc(p.preco, p.preco_anterior) < s.descMin) return false;
    return true;
  });
  switch (s.ordena) {
    case "menor": lista.sort(function (a, b) { return a.preco - b.preco; }); break;
    case "maior": lista.sort(function (a, b) { return b.preco - a.preco; }); break;
    case "nota": lista.sort(function (a, b) { return b.rating - a.rating; }); break;
    case "pop": lista.sort(function (a, b) { return b.avaliacoes - a.avaliacoes; }); break;
    case "desc": lista.sort(function (a, b) { return (pctDesc(b.preco, b.preco_anterior) || -1) - (pctDesc(a.preco, a.preco_anterior) || -1); }); break;
    default: lista.sort(function (a, b) { return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || b.avaliacoes - a.avaliacoes; });
  }
  return lista;
}

function opcoesMarcaLoja() {
  var lojas = {}, marcas = {};
  PRODUTOS.forEach(function (p) {
    if (p.merchant) lojas[p.merchant.toLowerCase()] = { nome: p.merchant_nome || p.merchant, v: p.merchant };
    if (p.marca) marcas[p.marca.toLowerCase()] = { nome: p.marca, v: p.marca, n: (marcas[p.marca.toLowerCase()] || { n: 0 }).n + 1 };
    else marcas["{sem}"] = { nome: "No brand", v: "__none__", n: (marcas["{sem}"] || { n: 0 }).n + 1 };
  });
  var topMarcas = Object.keys(marcas).map(function (k) { return marcas[k]; })
    .sort(function (a, b) { return b.n - a.n; })
    .filter(function (m, i) { return i < 12; });
  return {
    marcas: topMarcas,
    lojas: Object.keys(lojas).map(function (k) { return lojas[k]; })
      .sort(function (a, b) { return a.nome.localeCompare(b.nome); })
  };
}

function initCategoria() {
  var qp = new URLSearchParams(location.search);
  var catSlug = qp.get("cat") || null;
  var ofertas = qp.get("ofertas") === "1";
  var busca = (qp.get("busca") || "").trim().toLowerCase();
  var sortParam = qp.get("ordenar") || null;

  var cat = CATEGORIAS.find(function (c) { return c.slug === catSlug; }) || null;

  CAT_STATE.cat = cat ? cat.slug : null;
  CAT_STATE.ofertas = ofertas;
  CAT_STATE.busca = busca;
  CAT_STATE.pag = 1;
  if (sortParam && ["menor", "maior", "nota", "pop", "desc"].indexOf(sortParam) > -1) CAT_STATE.ordena = sortParam;

  var head = $("#cat-head");
  if (head) {
    var kicker = ofertas ? "Best deals" : (cat ? cat.nome : "Curated catalog");
    var titulo = ofertas ? "Best deals right now" : (cat ? cat.nome : (busca ? "Results for \u201c" + esc(busca) + "\u201d" : "Explore all curated parts"));
    var desc = ofertas ? "The best deals currently in our curated catalog — prices come from retailer listings. Check the price and buy directly at the retailer." : (cat ? cat.descricao : "Browse drone and RC parts curated from our partner retailers — compare prices, brands and ratings, then check the price and buy directly at the retailer.");
    head.innerHTML = '<p class="kicker">' + kicker + "</p><h1>" + titulo + "</h1><p>" + desc + "</p>";
  }

  var fCat = $("#filtro-cat");
  if (fCat) {
    fCat.innerHTML = '<label><input type="radio" name="rcat" value="" ' + (!cat ? "checked" : "") + "/> All categories</label>" +
      CATEGORIAS.map(function (c) {
        return '<label><input type="radio" name="rcat" value="' + c.slug + '" ' + (cat && cat.slug === c.slug ? "checked" : "") + "/> " + esc(c.nome) + "</label>";
      }).join("");
  }

  var opcoes = opcoesMarcaLoja();
  var fMarca = $("#filtro-marca");
  if (fMarca) {
    fMarca.innerHTML = opcoes.marcas.map(function (m) {
      return '<label class="chk"><input type="checkbox" name="marca" value="' + esc(m.v) + '"/><span>' + esc(m.nome) + " (" + m.n + ")</span></label>";
    }).join("");
  }
  var fLoja = $("#filtro-loja");
  if (fLoja) {
    fLoja.innerHTML = opcoes.lojas.map(function (l) {
      return '<label class="chk"><input type="checkbox" name="loja" value="' + esc(l.v) + '"/><span>' + esc(l.nome) + "</span></label>";
    }).join("");
  }

  var fRend = $("#filtro-rend");
  if (fRend) {
    fRend.innerHTML =
      '<label class="chk"><input type="checkbox" name="rmin" value="4"><span>Rating 4.0 &amp; up</span></label>' +
      '<label class="chk"><input type="checkbox" name="rmin" value="4.5"><span>Rating 4.5 &amp; up</span></label>';
  }

  var fDisp = $("#filtro-disp");
  if (fDisp) {
    fDisp.innerHTML =
      '<label class="chk"><input type="checkbox" name="sdisp" value="1"><span>In stock only</span></label>' +
      '<label class="chk"><input type="checkbox" name="sofertas" value="1"><span>On sale only</span></label>';
  }

  $$(".cats a").forEach(function (a) {
    if (cat && a.getAttribute("href").indexOf("cat=" + cat.slug) > -1) a.classList.add("active");
    if (ofertas && a.className.indexOf("ofertas") > -1) a.classList.add("active");
  });

  var sel = $("#ordenar");
  if (sel) {
    if (CAT_STATE.ordena) sel.value = CAT_STATE.ordena;
    sel.addEventListener("change", function () { CAT_STATE.ordena = sel.value; CAT_STATE.pag = 1; renderLista(); });
  }

  $("#filtros-form").addEventListener("change", aplicarFiltros);
  $("#filtros-form").addEventListener("input", aplicarFiltros);

  var tgl = $("#filtros-toggle");
  if (tgl) tgl.addEventListener("click", function () {
    var f = $("#filtros");
    f.classList.toggle("open");
    tgl.textContent = f.classList.contains("open") ? "Hide filters" : "Show filters";
  });

  renderLista();
}

function aplicarFiltros() {
  var s = CAT_STATE;
  var rcat = document.querySelector('input[name="rcat"]:checked');
  if (rcat) s.cat = rcat.value || null;
  s.min = $("#fmin").value === "" ? null : Number($("#fmin").value);
  s.max = $("#fmax").value === "" ? null : Number($("#fmax").value);
  var rmin = document.querySelector('input[name="rmin"]:checked');
  s.notaMin = rmin ? Number(rmin.value) : 0;
  s.soDisponiveis = !!document.querySelector('input[name="sdisp"]:checked');
  s.soOfertas = !!document.querySelector('input[name="sofertas"]:checked');
  s.marcas = $$('#filtro-marca input[name="marca"]:checked').map(function (i) { return i.value; });
  s.lojas = $$('#filtro-loja input[name="loja"]:checked').map(function (i) { return i.value; });
  var desc = document.querySelector('input[name="desc"]:checked');
  s.descMin = desc ? Number(desc.value) : 0;
  s.pag = 1;
  renderLista();
}

function renderPager() {
  var el = $("#cat-pager");
  if (!el) return;
  var lista = produtosFiltrados();
  var paginas = Math.ceil(lista.length / CAT_POR_PAGINA);
  if (paginas <= 1) { el.innerHTML = ""; return; }
  var html = '<span class="pager-info">Page ' + CAT_STATE.pag + " of " + paginas + "</span>";
  var prev = 0;
  var ultimoFoiDot = false;
  for (var i = 1; i <= paginas; i++) {
    if (i !== 1 && i !== paginas && Math.abs(i - CAT_STATE.pag) > 2) {
      if (!ultimoFoiDot) { html += '<span class="pager-dots">…</span>'; ultimoFoiDot = true; }
      prev = i;
      continue;
    }
    html += '<button class="pager-btn' + (i === CAT_STATE.pag ? " on" : "") + '" data-p="' + i + '">' + i + "</button>";
    ultimoFoiDot = false;
    prev = i;
  }
  el.innerHTML = html;
  $$(".pager-btn", el).forEach(function (b) {
    b.addEventListener("click", function () {
      CAT_STATE.pag = Number(b.dataset.p);
      renderLista();
    });
  });
}

function renderLista() {
  var lista = produtosFiltrados();
  var grid = $("#cat-grid");
  var count = $("#cat-count");
  if (count) count.textContent = lista.length + " " + (lista.length === 1 ? "product" : "products");
  if (!lista.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>No products found</h3><p>Try adjusting your filters or search terms.</p></div>';
    renderPager();
    return;
  }
  var ini = (CAT_STATE.pag - 1) * CAT_POR_PAGINA;
  var pagina = lista.slice(ini, ini + CAT_POR_PAGINA);
  grid.innerHTML = pagina.map(cardHTML).join("");
  renderPager();
}

/* ============================================================
   PAGE: PRODUCT
   ============================================================ */
function initProduto() {
  var id = new URLSearchParams(location.search).get("id");
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) {
    var main = $("main");
    if (main) main.innerHTML = '<div class="container"><div class="empty" style="margin-top:60px"><h3>Product not found</h3><p>The link you followed may be out of date.</p></div></div>';
    return;
  }

  var pct = pctDesc(p.preco, p.preco_anterior);
  var disp = ROTULOS_DISP[p.disponibilidade] || ROTULOS_DISP.em_estoque;
  var esgotado = p.disponibilidade === "esgotado";

  var crumb = $("#crumb");
  if (crumb) {
    crumb.innerHTML =
      '<a href="index.html">Home</a><span class="sep">›</span>' +
      '<a href="catalog.html?cat=' + p.categoria + '">' + esc(p.categoria_nome) + "</a>" +
      '<span class="sep">›</span><span>' + esc(p.marca) + "</span>";
  }

  var mainImg = $("#foto-main");
  var thumbs = $("#fotos-thumb");
  var fotosReais = (p.fotos && p.fotos.length) ? p.fotos : null;
  var variantes = fotosReais ? fotosReais.map(function (_, i) { return i; }) : [0, 1, 2, 3];
  mainImg.src = imgProd(p, 0);
  mainImg.alt = p.nome;
  thumbs.innerHTML = variantes.map(function (v, i) {
    return '<button data-v="' + v + '" class="' + (i === 0 ? "on" : "") + '"><img src="' + imgProd(p, v) + '" alt="View ' + (i + 1) + '"/></button>';
  }).join("");
  thumbs.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    mainImg.src = imgProd(p, Number(b.dataset.v));
    $$("button", thumbs).forEach(function (x) { x.classList.remove("on"); });
    b.classList.add("on");
  });

  $("#pg-titulo").textContent = p.nome;
  var descEl = $("#pg-descricao");
  if (descEl && p.descricao) descEl.textContent = p.descricao;
  setMetaDescricao(p);
  injetarSchema(p);
  var chipCat = $("#pg-categoria");
  if (chipCat) {
    chipCat.textContent = p.categoria_nome;
    chipCat.href = "catalog.html?cat=" + p.categoria;
    chipCat.classList.add("cat");
  }
  var chipDisp = $("#pg-disponibilidade");
  chipDisp.className = "chip " + disp[1];
  chipDisp.innerHTML = '<span data-dot></span>' + disp[0];

  $("#pg-rating").innerHTML = starsHTML(p.rating) + ' <strong>' + p.rating.toFixed(1) + "</strong> out of 5 <span class=\"count\">(" + num(p.avaliacoes) + " ratings)</span>";
  $("#pg-merchant").innerHTML = "Available at <span class=\"merchant-chip\">" + esc(p.merchant_nome) + "</span>";
  $("#pg-marca").textContent = "Brand: " + p.marca;
  $("#pg-produto-id").textContent = "Partner SKU: " + p.product_id;

  var precoHTML = "";
  if (p.preco_anterior) {
    precoHTML =
      '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" +
      '<div class="row"><span class="now">' + fmt(p.preco) + "</span>" +
      '<span class="pct">-' + pct + '%</span>' +
      '<span class="save">You save ' + fmt(p.preco_anterior - p.preco) + "</span></div>";
  } else {
    precoHTML = '<div class="row"><span class="now">' + fmt(p.preco) + "</span></div>";
  }
  $("#preco-bloco").innerHTML = precoHTML + '<div class="cash">Reference price from the retailer\'s listing — the final price is confirmed at checkout.</div>';

  if (p.comissao) {
    $("#comissao-note").innerHTML = "<strong>Transparency:</strong> DroneDeck is an affiliate — we may earn a commission on qualifying purchases made through this link, at no additional cost to you.";
  }

  var btn = $("#btn-comprar");
  btn.innerHTML = esgotado ? "Currently unavailable" : "Check price at " + esc(p.merchant_nome);
  btn.disabled = esgotado;
  btn.addEventListener("click", function () { abrirOferta(p.id); });

  var btnPar = $("#btn-parceiro");
  if (btnPar) {
    btnPar.textContent = "See product at " + esc(p.merchant_nome) + " \u2197";
    btnPar.addEventListener("click", function () { abrirOferta(p.id); });
  }
  var parceiroNome = $("#parceiro-nome");
  if (parceiroNome) parceiroNome.textContent = p.merchant_nome;

  $("#specs-tabela").innerHTML = p.specs.map(function (s) {
    return "<tr><th>" + esc(s.rotulo) + "</th><td>" + esc(s.valor) + "</td></tr>";
  }).join("");

  renderSimilares(p);

  var faq = $("#faq-lista");
  var genericas = [
    { p: "Does DroneDeck sell this part?", a: "No. DroneDeck is an independent product discovery platform — the button takes you to the retailer, where your purchase is completed. DroneDeck never sells, prices or processes payment." },
    { p: "Is the displayed price final?", a: "Prices shown are references collected from retailer listings and can change. Please confirm the price on the retailer's page before completing your order." },
    { p: "Who handles shipping and returns?", a: "Shipping, delivery dates and return policies are set by the retailer. Review those terms on the retailer's product page." }
  ];
  faq.innerHTML = p.faq.concat(genericas).map(function (f) {
    return '<div class="faq-item"><button class="faq-q" type="button">' + esc(f.p) +
      '<span class="chev">\u25BC</span></button><div class="faq-a">' + esc(f.a) + "</div></div>";
  }).join("");
  faq.addEventListener("click", function (e) {
    var b = e.target.closest(".faq-q");
    if (!b) return;
    var item = b.parentNode;
    var estavaAberto = item.classList.contains("open");
    $$(".faq-item", faq).forEach(function (x) { x.classList.remove("open"); });
    if (!estavaAberto) item.classList.add("open");
  });

  var rel = $("#relacionados-grid");
  var relacionados = PRODUTOS.filter(function (x) { return x.id !== p.id; })
    .sort(function (a, b) {
      var sameA = a.categoria === p.categoria ? 0 : 1;
      var sameB = b.categoria === p.categoria ? 0 : 1;
      return sameA - sameB || b.rating - a.rating;
    })
    .slice(0, 4);
  rel.innerHTML = relacionados.map(cardHTML).join("");

  renderOfertas(p);
  renderHistorico(p);

  document.title = p.nome + " · DroneDeck";
}

/* ---------- Where to buy (offer comparison) ---------- */
/* Groups offers for the same product by a real identifier only.
   No invented matches: if only this store carries the item, it is the single offer. */
function ofertasDoProduto(p) {
  var chave = p.product_id || p.nome.toLowerCase().trim();
  var ofertas = PRODUTOS.filter(function (x) { return (x.product_id || x.nome.toLowerCase().trim()) === chave; });
  if (!ofertas.length) ofertas = [p];
  return ofertas;
}

function renderOfertas(p) {
  var sec = $("#ofertas-sec");
  var alvo = $("#ofertas-tabela");
  var countEl = $("#ofertas-count");
  if (!alvo) return;
  var ofertas = ofertasDoProduto(p);
  var melhorPreco = Math.min.apply(null, ofertas.map(function (o) { return o.preco; }));
  var best = melhorPreco === p.preco;
  if (countEl) countEl.textContent = "(" + ofertas.length + " offer" + (ofertas.length === 1 ? "" : "s") + ")";
  if (ofertas.length === 1) {
    var o = ofertas[0];
    var pct = pctDesc(o.preco, o.preco_anterior);
    alvo.innerHTML =
      '<div class="oferta-row best">' +
      '<span class="oferta-badge">Best offer</span>' +
      '<span class="oferta-loja"><span class="store-logo sm">' + esc(String(o.merchant_nome || "Store").split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase()) + "</span>" +
      '<span class="oferta-loja-nome"><a href="store.html?loja=' + encodeURIComponent(o.merchant) + '">' + esc(o.merchant_nome) + "</a><small>" + esc(o.marca) + "</small></span></span>" +
      '<span class="oferta-prazo">' + (ROTULOS_DISP[o.disponibilidade] ? ROTULOS_DISP[o.disponibilidade][0] : "In stock") + "</span>" +
      '<span class="oferta-preco">' +
      (pct != null ? '<span class="pct">-' + pct + "%</span>" : "") +
      '<span class="now">' + fmt(o.preco) + "</span>" +
      (o.preco_anterior ? '<span class="was">' + fmt(o.preco_anterior) + "</span>" : "") +
      "</span>" +
      (o.disponibilidade === "esgotado"
        ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
        : '<button class="btn-buy" onclick="abrirOferta(\'' + o.id + '\')">View deal</button>') +
      "</div>" +
      '<p class="ofertas-extra">This product is currently available from one retailer. As more retailers carry it, all offers will appear here automatically.</p>';
  } else {
    alvo.innerHTML = ofertas.map(function (o, i) {
      var isBest = o.preco === melhorPreco;
      var pct = pctDesc(o.preco, o.preco_anterior);
      return '<div class="oferta-row' + (isBest ? " best" : "") + '">' +
        (isBest ? '<span class="oferta-badge">Best offer</span>' : "") +
        '<span class="oferta-loja"><span class="store-logo sm">' + esc(String(o.merchant_nome || "Store").split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase()) + "</span>" +
        '<span class="oferta-loja-nome"><a href="store.html?loja=' + encodeURIComponent(o.merchant) + '">' + esc(o.merchant_nome) + "</a><small>" + esc(o.marca) + "</small></span></span>" +
        '<span class="oferta-prazo">' + (ROTULOS_DISP[o.disponibilidade] ? ROTULOS_DISP[o.disponibilidade][0] : "In stock") + "</span>" +
        '<span class="oferta-preco">' +
        (pct != null ? '<span class="pct">-' + pct + "%</span>" : "") +
        '<span class="now">' + fmt(o.preco) + "</span>" +
        (o.preco_anterior ? '<span class="was">' + fmt(o.preco_anterior) + "</span>" : "") +
        "</span>" +
        (o.disponibilidade === "esgotado"
          ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
          : '<button class="btn-buy" onclick="abrirOferta(\'' + o.id + '\')">View deal</button>') +
        "</div>";
    }).join("");
  }
  if (!best && sec) sec.classList.add("not-best");
}

/* ---------- Price history (interface only — no invented data) ---------- */
function renderHistorico(p) {
  var alvo = $("#historico-box");
  if (!alvo) return;
  alvo.innerHTML =
    '<div class="historico-empty">' +
    '<svg class="historico-ico" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>' +
    "<h3>Price tracking is starting</h3>" +
    "<p>We record prices for this product over time. This section will show the price history (current price, lowest and highest recorded) as soon as real data is collected. We never show estimated history.</p>" +
    '<p class="historico-fato">Current price: <strong>' + fmt(p.preco) + "</strong> at " + esc(p.merchant_nome) + ".</p>" +
    "</div>";
}

function renderSimilares(principal) {
  var sim = PRODUTOS.filter(function (x) {
    return x.id !== principal.id && x.categoria === principal.categoria;
  }).slice(0, 3);
  if (sim.length < 2) {
    PRODUTOS.forEach(function (x) {
      if (sim.length >= 2) return;
      if (x.id !== principal.id && sim.indexOf(x) === -1) sim.push(x);
    });
  }
  var alvo = $("#similares");
  if (sim.length) {
    alvo.style.display = "";
    $("#similares-grid").innerHTML = sim.map(osCardHTML).join("");

    var labels = principal.specs.map(function (s) { return s.rotulo; });
    var rowsSel = labels.filter(function (r) {
      return sim.some(function (x) { return x.specs.some(function (s) { return s.rotulo === r; }); });
    }).slice(0, 5);

    var headRow = "<tr><th>Feature</th><th>This product</th>" +
      sim.map(function (x) { return "<th>" + esc(x.nome.split(" ").slice(0, 3).join(" ")) + "</th>"; }).join("") + "</tr>";
    var bodyRows = rowsSel.map(function (r) {
      var val = function (x) {
        var v = x.specs.find(function (s) { return s.rotulo === r; });
        return v ? esc(v.valor) : "<span style='color:#aab1b9'>—</span>";
      };
      return "<tr><td class=\"spec-k\">" + esc(r) + "</td><td>" + val(principal) + "</td>" +
        sim.map(function (x) { return "<td>" + val(x) + "</td>"; }).join("") + "</tr>";
    }).join("");
    $("#compara-tabela").innerHTML = headRow + bodyRows;
  } else {
    alvo.style.display = "none";
  }
}

function osCardHTML(p) {
  var esgotado = p.disponibilidade === "esgotado";
  return '<article class="pcard">' +
    '<a class="media" href="product.html?id=' + p.id + '">' +
    (pctDesc(p.preco, p.preco_anterior) != null ? '<span class="badge">-' + pctDesc(p.preco, p.preco_anterior) + "%</span>" : "") +
    '<img src="' + imgProd(p, 1) + '" alt="' + esc(p.nome) + '" loading="lazy"/></a>' +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="product.html?id=' + p.id + '">' + esc(p.nome) + "</a>" +
    '<div class="rating">' + starsHTML(p.rating) + " <span class=\"reviews\">" + p.rating.toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>" +
    '<div class="price">' +
    (p.preco_anterior ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (p.preco_anterior ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<div class="merchant"><a href="store.html?loja=' + encodeURIComponent(p.merchant) + '">' + esc(p.merchant_nome) + "</a></div>" +
    (esgotado ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>' : '<button class="btn-buy" onclick="abrirOferta(\'' + p.id + '\')">View deal</button>') +
    "</div></article>";
}

/* ============================================================
   PAGE: STORE (loja)
   ============================================================ */
var LOJA_STATE = { loja: null, ordena: "menor", pag: 1 };
var LOJA_POR_PAGINA = 24;

function initLoja() {
  var qp = new URLSearchParams(location.search);
  var lojaParam = qp.get("loja") || "";

  var loja = null;
  PRODUTOS.forEach(function (p) {
    if ((p.merchant && p.merchant.toLowerCase() === lojaParam.toLowerCase()) ||
        (p.merchant_nome && p.merchant_nome.toLowerCase() === lojaParam.toLowerCase())) {
      loja = { merchant: p.merchant, nome: p.merchant_nome };
    }
  });

  var sel = $("#loja-ordenar");
  if (sel) sel.addEventListener("change", function () { LOJA_STATE.ordena = sel.value; LOJA_STATE.pag = 1; renderLoja(loja); });

  if (!loja) { renderLojaOverview(); return; }

  LOJA_STATE.loja = loja.merchant;
  var nomeEl = $("#loja-nome");
  var head = $("#loja-head");
  var produtos = PRODUTOS.filter(function (p) { return p.merchant === loja.merchant; });
  var menor = Math.min.apply(null, produtos.map(function (p) { return p.preco; }));
  var menorPct = 0;
  produtos.forEach(function (p) { var d = pctDesc(p.preco, p.preco_anterior); if (d != null && d > menorPct) menorPct = d; });
  if (nomeEl) nomeEl.textContent = loja.nome;
  if (head) {
    head.innerHTML =
      '<p class="kicker">Retailer profile · buy directly at the retailer</p>' +
      '<h1>' + esc(loja.nome) + "</h1>" +
      "<p>" + produtos.length + " curated offer" + (produtos.length === 1 ? "" : "s") + " · prices from " + fmt(menor) +
      (menorPct ? " · biggest discount " + menorPct + "%" : "") + ". Buying through our links supports the curation at no additional cost to you.</p>";
  }
  renderLoja(loja);
}

function renderLoja(loja) {
  var produtos = PRODUTOS.filter(function (p) { return p.merchant === loja.merchant; });
  switch (LOJA_STATE.ordena) {
    case "menor": produtos.sort(function (a, b) { return a.preco - b.preco; }); break;
    case "maior": produtos.sort(function (a, b) { return b.preco - a.preco; }); break;
    case "nota": produtos.sort(function (a, b) { return b.rating - a.rating; }); break;
    case "pop": produtos.sort(function (a, b) { return b.avaliacoes - a.avaliacoes; }); break;
    case "desc": produtos.sort(function (a, b) { return (pctDesc(b.preco, b.preco_anterior) || -1) - (pctDesc(a.preco, a.preco_anterior) || -1); }); break;
    default: produtos.sort(function (a, b) { return a.preco - b.preco; });
  }
  var grid = $("#loja-grid");
  var count = $("#loja-count");
  var pager = $("#loja-pager");
  if (count) count.textContent = produtos.length + " " + (produtos.length === 1 ? "offer" : "offers") + " from " + esc(loja.nome);
  if (!produtos.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>No offers found</h3><p>Try another store.</p></div>';
    if (pager) pager.innerHTML = "";
    return;
  }
  var paginas = Math.ceil(produtos.length / LOJA_POR_PAGINA);
  if (LOJA_STATE.pag > paginas) LOJA_STATE.pag = 1;
  var ini = (LOJA_STATE.pag - 1) * LOJA_POR_PAGINA;
  grid.innerHTML = produtos.slice(ini, ini + LOJA_POR_PAGINA).map(cardHTML).join("");
  if (pager) {
    pager.innerHTML = paginas <= 1 ? "" : '<span class="pager-info">Page ' + LOJA_STATE.pag + " of " + paginas + "</span>";
    for (var i = 1; i <= paginas; i++) {
      pager.innerHTML += '<button class="pager-btn' + (i === LOJA_STATE.pag ? " on" : "") + '" data-p="' + i + '">' + i + "</button>";
    }
    $$(".pager-btn", pager).forEach(function (b) {
      b.addEventListener("click", function () {
        LOJA_STATE.pag = Number(b.dataset.p);
        renderLoja(loja);
      });
    });
  }
}

function renderLojaOverview() {
  var lojas = {};
  PRODUTOS.forEach(function (p) {
    if (!p.merchant) return;
    var k = p.merchant.toLowerCase();
    if (!lojas[k]) lojas[k] = { merchant: p.merchant, nome: p.merchant_nome || p.merchant, qtd: 0, menor: Infinity };
    lojas[k].qtd++;
    if (p.preco < lojas[k].menor) lojas[k].menor = p.preco;
  });
  var itens = Object.keys(lojas).sort(function (a, b) { return lojas[b].qtd - lojas[a].qtd; });
  var head = $("#loja-head");
  if (head) {
    head.innerHTML = '<p class="kicker">Retailers we track</p><h1>All partner retailers</h1>' +
      "<p>Every retailer whose products we curate. Pick one to browse its catalog with prices, ratings and deals.</p>";
  }
  var grid = $("#loja-grid");
  var count = $("#loja-count");
  var pager = $("#loja-pager");
  var nomeEl = $("#loja-nome");
  if (nomeEl) nomeEl.textContent = "All partner retailers";
  if (count) count.textContent = itens.length + " " + (itens.length === 1 ? "store" : "stores");
  if (pager) pager.innerHTML = "";
  if (grid) {
    grid.innerHTML = itens.length
      ? '<div class="store-grid">' + itens.map(function (k) {
          var l = lojas[k];
          var iniciais = String(l.nome).split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
          return '<a class="store-card big" href="store.html?loja=' + encodeURIComponent(l.merchant) + '">' +
            '<span class="store-logo">' + esc(iniciais) + "</span>" +
            '<span class="store-meta"><strong>' + esc(l.nome) + "</strong>" +
            "<span>" + l.qtd + " offer" + (l.qtd === 1 ? "" : "s") + " · from " + fmt(l.menor) + "</span>" +
            "</span><span class=\"store-link\">View store ›</span></a>";
        }).join("") + "</div>"
      : '<div class="empty" style="grid-column:1/-1"><h3>No stores found</h3><p>Store profiles appear here when offers are loaded.</p></div>';
  }
}

/* ---------- Boot ---------- */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    carregarDados();
  });
}