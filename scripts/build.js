/* ============================================================
   WATTWHEEL — SSG build (prerender all product/category pages)
   - Fetches products from Supabase (fallback: products.json)
   - Emits products/<slug>/index.html for every product
   - Emits <category>/index.html pages
   - Regenerates sitemap.xml + robots.txt
   Run: node scripts/build.js
   ============================================================ */

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = ROOT;

const SITE_URL = process.env.SITE_URL || "https://neura-shop66.vercel.app";

/* ---------- Supabase config (read from js/config.js) ---------- */
function supaConfig() {
  try {
    const src = fs.readFileSync(path.join(ROOT, "js", "config.js"), "utf8");
    const u = (src.match(/url:\s*"([^"]+)"/) || [])[1];
    const a = (src.match(/anon:\s*"([^"]+)"/) || [])[1];
    return { url: u, anon: a };
  } catch (e) { return { url: null, anon: null }; }
}

async function carregarProdutos() {
  const cfg = supaConfig();
  if (cfg.url && cfg.anon) {
    try {
      const rows = await fetchPaginas(cfg);
      if (rows && rows.length) return { origem: "supa", produtos: rows.map(r => r.dados) };
    } catch (e) { console.warn("[build] Supabase falhou, usando products.json:", e.message); }
  }
  const local = JSON.parse(fs.readFileSync(path.join(ROOT, "products.json"), "utf8"));
  return { origem: "json", produtos: local.produtos || [] };
}

async function fetchPaginas(cfg) {
  const base = cfg.url + "/rest/v1/produtos?select=id,dados";
  const h = { "apikey": cfg.anon, "Authorization": "Bearer " + cfg.anon };
  async function get(o) {
    const r = await fetch(base, { headers: Object.assign({}, h, { "Range-Unit": "items", "Range": o + "-" + (o + 999) }) });
    if (!r.ok) throw new Error("supa " + r.status);
    return r.json();
  }
  const primeira = await get(0);
  if (primeira.length < 1000) return primeira;
  const out = primeira.slice();
  for (let o = 1000; o <= 6000; o += 1000) {
    const mais = await get(o);
    mais.forEach(m => out.push(m));
  }
  return out;
}

/* ---------- Helpers (mirror of js/app.js) ---------- */
function esc(s) {
  return String(s || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function fmt(n) {
  return (n == null) ? "" : Number(n).toLocaleString("en-US", { style: "currency", currency: "USD" });
}
function num(n) {
  return (n == null) ? "" : Number(n).toLocaleString("en-US");
}
function pctDesc(a, b) {
  if (!a || !b || a >= b) return null;
  return Math.round((1 - a / b) * 100);
}
function starsHTML(rating) {
  const full = Math.floor(rating);
  const frac = rating - full;
  const half = (frac >= 0.25 && frac < 0.75);
  let out = "";
  for (let i = 0; i < full; i++) out += "\u2605";
  if (half) out += '<span class="half">\u2605</span>';
  for (let j = full + (half ? 1 : 0); j < 5; j++) out += '<span class="half">\u2605</span>';
  return '<span class="stars">' + out + "</span>";
}
function imgProd(p) {
  if (p.img && /^https?:\/\//i.test(String(p.img))) return p.img;
  const fotos = (p.fotos && p.fotos.length) ? p.fotos : null;
  if (fotos) {
    for (let i = 0; i < fotos.length; i++) if (fotos[i] && /^https?:\/\//i.test(String(fotos[i]))) return fotos[i];
  }
  return "";
}
function descricaoHTML(t) {
  if (!t) return "";
  const linhas = String(t).split(/\n+/);
  const blocos = [];
  for (let i = 0; i < linhas.length; i++) {
    const l = linhas[i].trim();
    if (!l) continue;
    const m = l.match(/^([\u{1F000}-\u{1FAFF}]|[\u2600-\u27BF])?\s*【([^】]+)】\s*(.*)$/u);
    if (m && m[2]) {
      const titulo = (m[1] || "") + " " + m[2];
      let corpo = m[3];
      let j = i + 1;
      const extra = [];
      while (j < linhas.length) {
        const lj = linhas[j].trim();
        if (!lj) break;
        if (lj.match(/^[\u{1F000}-\u{1FAFF}]?\s*【[^】]+】/u)) break;
        extra.push(lj);
        j++;
      }
      if (extra.length) corpo += (corpo ? " " : "") + extra.join(" ");
      i = j - 1;
      blocos.push('<div class="d-item"><span class="d-titulo">' + esc(titulo) + "</span>" +
        (corpo ? '<span class="d-corpo">' + esc(corpo) + "</span>" : "") + "</div>");
    } else {
      blocos.push("<p>" + esc(l) + "</p>");
    }
  }
  return blocos.join("");
}
function chaveBusca(p) {
  const w = [];
  if (p.marca) w.push(p.marca);
  const m = String(p.nome || "").split(/\s+/);
  for (let i = 0; i < m.length && w.length < 4; i++) {
    const t = m[i].replace(/[^a-zA-Z0-9\-\.]/g, "");
    const menor = String(t).toLowerCase();
    if (!t) continue;
    if (/^(electric|e-?scooter|e-?bike|with|and|for|the|of|to|in|on|recommended|top|max|range|battery|motor|speed|tires|inch|folding|load|mileage|hi|cm)$/.test(menor)) {
      if (w.length === 0) continue;
      break;
    }
    w.push(t);
  }
  return w.join(" ").slice(0, 60);
}

const LOJAS_COMPARE = [
  { nome: "Amazon", url: "https://www.amazon.com/s?k=" },
  { nome: "Walmart", url: "https://www.walmart.com/search?q=" },
  { nome: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=" },
  { nome: "Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=" },
  { nome: "Target", url: "https://www.target.com/s?searchTerm=" },
  { nome: "AliExpress", url: "https://www.aliexpress.com/wholesale?SearchText=" }
];

const SCHEMA_DISP = {
  em_estoque: "https://schema.org/InStock",
  poucas_unidades: "https://schema.org/LimitedAvailability",
  esgotado: "https://schema.org/OutOfStock"
};

function slugify(str) {
  return String(str || "").toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function slugProduto(p) {
  const marca = slugify(p.marca || "");
  const stop = /^(electric|e|scooter|bike|with|and|for|the|of|to|in|on|recommended|top|max|range|battery|motor|speed|tires|inch|folding|load|mileage|dual|single|brushless|watt|ah|kmh|km|model|version|new|usa|plus|pro|black|color|option|v)$/;
  const palavras = String(p.nome || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const parts = [];
  let count = 0;
  palavras.forEach(w => {
    if (count >= 4) return;
    if (w === marca || stop.test(w)) return;
    parts.push(w);
    count++;
  });
  if (!parts.length) parts.push.apply(parts, palavras.slice(0, 3));
  const base = [marca].concat(parts).filter(Boolean).join("-") || slugify(p.id || "product");
  return base.slice(0, 64) || slugify(p.id || "product");
}
function urlProduto(p) {
  return "/products/" + (SLUG_FINAL[p.id] || slugProduto(p)) + "/";
}
var SLUG_FINAL = {};
function computarSlugs(produtos) {
  SLUG_FINAL = {};
  var cont = {};
  produtos.forEach(function (p) { var b = slugProduto(p); cont[b] = (cont[b] || 0) + 1; });
  var usados = {};
  produtos.forEach(function (p) {
    var b = slugProduto(p);
    var fin = b;
    if (cont[b] > 1) {
      var suf = String(p.product_id || p.id || "").replace(/[^a-zA-Z0-9]/g, "").slice(-4).toLowerCase();
      fin = b + "-" + suf;
      var i = 2;
      while (usados[fin]) fin = b + "-" + suf + "-" + (i++);
    }
    usados[fin] = true;
    SLUG_FINAL[p.id] = fin;
  });
}
function catPubl(t) {
  return { "scooters-eletricos": "electric-scooters", "bicicletas-eletricas": "electric-bikes" }[t] || slugify(t);
}
function pct_save(a, b) {
  return pctDesc(a, b) != null ? '<span class="pct">-' + pctDesc(a, b) + "%</span>" : "";
}

function cardHTML(p) {
  const esgotado = p.disponibilidade === "esgotado";
  const badge = pctDesc(p.preco, p.preco_anterior) != null ? '<span class="badge">-' + pctDesc(p.preco, p.preco_anterior) + "%</span>" : "";
  const img = imgProd(p);
  return '<article class="pcard">' +
    '<a class="media" href="' + urlProduto(p) + '">' + badge +
    (img ? '<img src="' + img + '" alt="' + esc(p.nome) + '" loading="lazy"/>' : "") +
    "</a>" +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="' + urlProduto(p) + '">' + esc(p.nome) + "</a>" +
    '<div class="rating">' + starsHTML(p.rating || 5) + ' <span class="reviews">' + (p.rating || 0).toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>" +
    '<div class="price">' +
    (p.preco_anterior ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (p.preco_anterior ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<a class="merchant" href="/store.html?loja=' + encodeURIComponent(p.merchant || "x") + '">' + esc(p.merchant_nome || p.merchant) + "</a>" +
    (esgotado
      ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
      : '<a class="btn-buy" href="' + urlProduto(p) + '">View deal</a>') +
    "</div></article>";
}

function compararHTML(p, fotos) {
  const q = encodeURIComponent(chaveBusca(p));
  const lojas = (p.lojas_compare && p.lojas_compare.length) ? p.lojas_compare : LOJAS_COMPARE;
  const img = fotos[0] || "";
  const precos = lojas.map(l => Number(l.preco)).filter(x => isFinite(x));
  const melhor = precos.length ? Math.min.apply(null, precos) : null;
  return '<div class="comparar">' + lojas.map(l => {
    const tem = l.preco != null && isFinite(Number(l.preco));
    let precoHTML = "";
    if (tem) {
      const n = Number(l.preco);
      precoHTML = '<small class="comparar-preco">' + fmt(n) + (n === melhor ? '<span class="comparar-best">Lowest</span>' : "") + "</small>";
    }
    return '<a class="comparar-loja" href="' + l.url + q + '" target="_blank" rel="noopener nofollow">' +
      (img ? '<img class="comparar-thumb" src="' + img + '" alt="" loading="lazy"/>' : "") +
      '<span class="comparar-loja-nome">' + esc(l.nome) + precoHTML + '<small class="comparar-cta">Check prices ↗</small></span></a>';
  }).join("") + "</div>";
}

/* ---------- JSON embed helpers ---------- */
function jsonEmbed(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
function jsonLd(obj) {
  return '<script type="application/ld+json">' + jsonEmbed(obj) + "</" + "script>";
}

/* ---------- Templates ---------- */
const HEAD_COMMON = (title, desc, canonical, ogImg) =>
  '<!DOCTYPE html>\n<html lang="en-US">\n<head>\n' +
  '<meta charset="UTF-8"/>\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' +
  "<title>" + esc(title) + "</title>\n" +
  '<meta name="description" content="' + esc(desc) + '"/>\n' +
  '<link rel="canonical" href="' + SITE_URL + canonical + '"/>\n' +
  '<meta property="og:type" content="website"/>\n' +
  '<meta property="og:title" content="' + esc(title) + '"/>\n' +
  '<meta property="og:description" content="' + esc(desc) + '"/>\n' +
  (ogImg ? '<meta property="og:image" content="' + esc(ogImg) + '"/>\n' : "") +
  '<link rel="icon" type="image/png" href="/img/favicon.png"/>\n' +
  '<base href="/"/>\n' +
  '<link rel="stylesheet" href="/css/style.css"/>\n' +
  "</head>\n";

const BODY_OPEN = '<body data-page="produto">\n  <div id="app-header"></div>\n';

const FOOT = [
  '<div id="app-footer"></div>',
  '<div class="modal-video" id="modal-video" hidden>',
  '  <div class="modal-video-overlay" id="modal-video-fechar" data-fechar></div>',
  '  <div class="modal-video-box" role="dialog" aria-modal="true" aria-label="Product video">',
  '    <button class="modal-video-close" id="modal-video-close" data-fechar aria-label="Close">×</button>',
  '    <div class="modal-video-frame" id="modal-video-frame"></div>',
  "  </div>",
  "</div>",
  '<script src="/js/config.js"></script>',
  '<script src="/js/app.js"></script>',
  "</body>\n</html>"
].join("\n");

function seedScript(p) {
  return '<script type="application/json" id="produto-seed">' + jsonEmbed(p) + "</" + "script>";
}

function schemaProduto(p, canonicalPage) {
  const img = imgProd(p);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nome,
    description: p.descricao,
    image: img || undefined,
    url: SITE_URL + canonicalPage,
    brand: { "@type": "Brand", name: p.marca },
    sku: p.product_id,
    offers: {
      "@type": "Offer",
      url: p.url_afiliado,
      priceCurrency: "USD",
      price: Number(p.preco).toFixed(2),
      itemCondition: "https://schema.org/NewCondition",
      availability: SCHEMA_DISP[p.disponibilidade] || "https://schema.org/Unavailable",
      seller: { "@type": "Organization", name: p.merchant_nome || p.merchant }
    }
  };
  if (p.rating != null && isFinite(Number(p.rating))) {
    schema.aggregateRating = { "@type": "AggregateRating", ratingValue: Number(p.rating).toFixed(1), reviewCount: Number(p.avaliacoes) || 0 };
  }
  if (p.faq && p.faq.length) {
    schema.faqPage = {
      "@type": "FAQPage",
      mainEntity: p.faq.map(f => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    };
  }
  return jsonLd(schema);
}

function pagProduto(p, contexto) {
  const total = contexto.produtos.length;
  const fotos = [];
  if (p.img && /^https?:\/\//i.test(String(p.img))) fotos.push(p.img);
  if (p.fotos && p.fotos.length) p.fotos.forEach(u => { if (u && /^https?:\/\//i.test(u) && fotos.indexOf(u) === -1) fotos.push(u); });
  const canonical = urlProduto(p);
  const title = p.nome + " | Compare Prices & Coupon | WattWheel";
  const metadata = (p.descricao || "").replace(/\s+/g, " ").slice(0, 150) + " Compare prices, ratings and specs, then check the price and buy directly at the retailer.";
  const descricaoHTMLout = descricaoHTML(p.descricao);
  const disp = { em_estoque: ["In stock", "stock"], poucas_unidades: ["Only a few left", "soon"], esgotado: ["Currently unavailable", "out"] }[p.disponibilidade] || ["In stock", "stock"];
  const pct = pctDesc(p.preco, p.preco_anterior);
  const esgotado = p.disponibilidade === "esgotado";
  const temCupom = p.cupom && !esgotado;

  const precoBloco =
    (p.preco_anterior
      ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" +
        '<div class="row"><span class="now">' + fmt(p.preco) + "</span>" +
        (pct != null ? '<span class="pct">-' + pct + "%</span>" : "") +
        '<span class="save">You save ' + fmt(p.preco_anterior - p.preco) + "</span></div>"
      : '<div class="row"><span class="now">' + fmt(p.preco) + "</span></div>") +
    '<div class="cash">Reference price from the retailer\'s listing — the final price is confirmed at checkout.</div>';

  const specsHTML = (p.specs || []).map(s =>
    "<tr><th>" + esc(s.rotulo) + "</th><td>" + esc(s.valor) + "</td></tr>").join("") ||
    "<tr><th>Condition</th><td>New</td></tr>";

  const reviews = (p.reviews && p.reviews.length) ? p.reviews : [];
  const reviewsHTML = reviews.map(r => {
    const avatar = r.foto
      ? '<span class="review-avatar foto"><img src="' + esc(r.foto) + '" alt="" loading="lazy"/></span>'
      : '<span class="review-avatar">' + esc(String(r.nome || "C").charAt(0).toUpperCase()) + "</span>";
    return '<div class="review-item"><div class="review-head">' + avatar +
      '<span class="review-nome">' + esc(r.nome) + "</span>" +
      '<span class="review-nota">' + starsHTML(r.nota != null ? r.nota : 5) + "</span></div>" +
      '<p class="review-texto">' + esc(r.texto) + "</p></div>";
  }).join("");

  const bannersHTML = (p.banners && p.banners.length)
    ? '<div class="pg-banner-stack">' + p.banners.map((u, i) =>
        '<div class="pg-banner-item"><img src="' + esc(u) + '" alt="Banner ' + (i + 1) + ' for ' + esc(p.nome) + '" loading="lazy"/></div>').join("") + "</div>"
    : "";

  const genericas = [
    { p: "Does WattWheel sell this item?", a: "No. WattWheel is an independent product discovery platform — the button takes you to the retailer, where your purchase is completed. WattWheel never sells, prices or processes payment." },
    { p: "Is the displayed price final?", a: "Prices shown are references collected from retailer listings and can change. Please confirm the price on the retailer's page before completing your order." },
    { p: "Who handles shipping and returns?", a: "Shipping, delivery dates and return policies are set by the retailer. Review those terms on the retailer's product page." }
  ];
  const faqHTML = (p.faq || []).concat(genericas).map(f =>
    '<div class="faq-item"><button class="faq-q" type="button">' + esc(f.p) + '<span class="chev">\u25BC</span></button><div class="faq-a">' + esc(f.a) + "</div></div>").join("");

  const similares = contexto.produtos.filter(x => x.id !== p.id && x.categoria === p.categoria).slice(0, 3);
  const relacionados = contexto.produtos.filter(x => x.id !== p.id)
    .sort((a, b) => (a.categoria === p.categoria ? 0 : 1) - (b.categoria === p.categoria ? 0 : 1) || (b.rating || 0) - (a.rating || 0))
    .slice(0, 4);

  const simCards = similares.length
    ? '<div class="grid-cards">' + similares.map(cardHTML).join("") + "</div>"
    : '<p class="visually-hidden">No similar products available.</p>';

  const relCards = relacionados.length
    ? '<div class="grid-cards" id="relacionados-grid">' + relacionados.map(cardHTML).join("") + "</div>"
    : "";

  const comparar = compararHTML(p, fotos);

  const html =
    HEAD_COMMON(title, metadata, canonical, fotos[0]) +
    BODY_OPEN +
    '<main class="container">' +
    '<nav class="crumb"><a href="/">Home</a><span class="sep">›</span>' +
    '<a href="/catalog.html?cat=' + esc(p.categoria) + '">' + esc(p.categoria_nome || p.categoria) + "</a>" +
    '<span class="sep">›</span><span>' + esc(p.marca) + "</span></nav>" +
    '<section class="detail-sec comparar-sec"><h2><span class="bar"></span> Compare prices at other stores</h2>' +
    comparar + "</section>" +
    '<div class="pg-layout">' +
    '<div class="pg-col-galeria">' +
    '<div class="gallery-img">' + (fotos[0] ? '<img id="foto-main" src="' + fotos[0] + '" alt="' + esc(p.nome) + '"/>' : "") + "</div>" +
    '<div class="thumbs" id="fotos-thumb">' +
    (fotos.length > 1 ? fotos.map((u, i) =>
      '<button data-v="' + i + '" class="' + (i === 0 ? "on" : "") + '"><img src="' + u + '" alt="View ' + (i + 1) + '"/></button>').join("") : "") +
    "</div>" +
    "</div>" +
    '<div class="pg-info">' +
    '<div class="pg-catscreen"><a class="chip cat" id="pg-categoria" href="/catalog.html?cat=' + esc(p.categoria) + '">' + esc(p.categoria_nome) + "</a></div>" +
    '<h1 class="pg-title" id="pg-titulo">' + esc(p.nome) + "</h1>" +
    '<div class="pg-meta">' +
    '<span class="pg-rating" id="pg-rating">' + starsHTML(p.rating || 5) + ' <strong>' + (p.rating || 0).toFixed(1) + "</strong> out of 5 <span class=\"count\">(" + num(p.avaliacoes) + " ratings)</span></span>" +
    '<span id="pg-merchant">Available at <span class="merchant-chip">' + esc(p.merchant_nome || p.merchant) + "</span></span>" +
    '<span class="ref" id="pg-marca">Brand: ' + esc(p.marca) + "</span>" +
    '<span class="ref" id="pg-produto-id">Partner SKU: ' + esc(p.product_id) + "</span>" +
    "</div>" +
    (p.descricao ? '<div class="pg-descricao" id="pg-descricao">' + descricaoHTMLout + "</div>" : "") +
    "</div>" +
    '<aside class="buybox-col">' +
    '<div class="buybox">' +
    '<div class="buybox-stock"><span class="chip ' + disp[1] + '" id="pg-disponibilidade"><span data-dot></span>' + disp[0] + "</span></div>" +
    '<div class="buybox-price"><div id="preco-bloco">' + precoBloco + "</div></div>" +
    '<div class="buybox-sec">' +
    '<button class="btn-buy-big" id="btn-comprar">' + (esgotado ? "Currently unavailable" : (temCupom ? "Reveal coupon" : "Check price at " + esc(p.merchant_nome))) + "</button>" +
    (p.video ? '<div class="video-row" id="video-row"><button class="btn-video" id="btn-video" type="button"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Watch video <span class="video-ext">▶</span></button></div>' : "") +
    (temCupom
      ? '<div class="coupon-box" id="cupom-box"><div class="coupon-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a2 2 0 0 1 0-4h20a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4H2a2 2 0 0 1 0-4 2 2 0 0 0 0-4z"/><path d="M13 5v14M16 12h.01M10 12h.01"/></svg> Your coupon is ready — <strong>copy it</strong> and apply at checkout</div>' +
        '<div class="coupon-row"><button class="coupon-code" id="cupom-codigo" type="button" data-codigo="' + esc(p.cupom) + '">' + esc(p.cupom) + "</button></div>" +
        '<p class="coupon-note" id="cupom-nota">Apply code at checkout on ' + esc(p.merchant_nome) + ".</p>" +
        '<button class="btn-buy-big" id="btn-comprar-cupom">Go to retailer with coupon ↗</button></div>'
      : "") +
    '<p class="redirect-note"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg> You\u2019ll be redirected to <span id="parceiro-nome">' + esc(p.merchant_nome) + "</span>, the retailer handling this product. WattWheel only curates and compares — we never sell, price or process your purchase.</p>" +
    (temCupom ? "" : '<button class="btn-partner" id="btn-parceiro">See product at retailer \u2197</button>') +
    (p.comissao
      ? '<div class="comissao-note" id="comissao-note"><strong>Transparency:</strong> WattWheel is an affiliate — we may earn a commission on qualifying purchases made through this link, at no additional cost to you.</div>'
      : "") +
    "</div>" +
    '<div class="trust-row"><div class="trust-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><span><strong>Secure checkout</strong>Handled entirely by the partner store.</span></div>' +
    '<div class="trust-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="15" height="11" rx="2"/><path d="M16 9h3l3 3v5h-6"/><circle cx="6.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg><span><strong>Shipping &amp; returns</strong>Terms set by the partner at checkout.</span></div>' +
    '<div class="trust-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6z"/><path d="m9 12 2 2 4-4"/></svg><span><strong>Price comparison</strong>No extra cost to you. Ever.</span></div></div>' +
    '<div class="card-warn"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><span><strong>Affiliate disclosure.</strong> WattWheel is an independent product discovery website. We don\u2019t sell or stock products — this item is sold by the retailer shown, and your purchase is completed on the retailer\u2019s site. As an affiliate, we may earn a commission on qualifying purchases, at no additional cost to you. <a href="/about.html#disclosure">Read our full disclosure</a>.</span></div>' +
    "</aside>" +
    "</div>" +
    (bannersHTML ? '<section class="section pg-banner-sec" id="pg-banner-sec"><div class="container" style="padding-inline:0"><div id="pg-banner-carousel">' + bannersHTML + "</div></div></section>" : "") +
    '<section class="detail-sec"><h2><span class="bar"></span> Specifications</h2>' +
    '<table class="specs" id="specs-tabela">' + specsHTML + "</table></section>" +
    '<section class="detail-sec" id="reviews-sec">' +
    '<h2><span class="bar"></span> Customer reviews</h2>' +
    '<div id="reviews-lista"><div class="reviews-summary"><span class="reviews-score">' + (p.rating || 0).toFixed(1) + "</span>" +
    '<span class="reviews-stars">' + starsHTML(p.rating || 5) + "</span>" +
    '<span class="reviews-count">' + num(p.avaliacoes) + " reviews</span></div>" +
    '<div class="reviews-lista">' + reviewsHTML + "</div></div></section>" +
    '<section class="detail-sec"><h2><span class="bar"></span> Compare similar products</h2>' + simCards + "</section>" +
    '<section class="detail-sec"><h2><span class="bar"></span> Frequently asked questions</h2><div id="faq-lista">' + faqHTML + "</div></section>" +
    (relCards ? '<section class="section"><div class="container" style="padding-inline:0"><div class="section-head"><h2>You may also like</h2><a class="link-all" href="/catalog.html">View all ›</a></div>' + relCards + "</div></section>" : "") +
    "</main>" +
    seedScript(p) +
    schemaProduto(p, canonical) +
    FOOT;
  return html;
}

function pagCategoria(slug, cat, produtos) {
  const publ = catPubl(slug);
  const canonical = "/" + publ + "/";
  const title = "Best " + cat.nome + " — Prices, Ratings & Coupons | WattWheel";
  const metadata = cat.descricao || "Electric " + (cat.nome || "") + " compared across partner stores — check prices, ratings and coupons, then buy directly at the retailer.";
  const cards = produtos.map(cardHTML).join("");
  const html =
    HEAD_COMMON(title, metadata, canonical, "") +
    '<body data-page="cat-static">\n  <div id="app-header"></div>\n' +
    '<main class="container">' +
    '<nav class="crumb"><a href="/">Home</a><span class="sep">›</span><span>' + esc(cat.nome) + "</span></nav>" +
    '<div class="page-head"><p class="kicker">' + esc(cat.nome) + "</p>" +
    '<h1>' + esc(cat.nome) + "</h1>" +
    '<p>' + esc(metadata) + "</p>" +
    '<p class="count" style="margin-top:10px">' + produtos.length + " product" + (produtos.length === 1 ? "" : "s") + "</p></div>" +
    '<div class="grid-cards">' + cards + "</div>" +
    "</main>" +
    '<div id="app-footer"></div>' +
    '<script src="/js/config.js"></script>' +
    '<script src="/js/app.js"></script>' +
    "</body>\n</html>";
  return html;
}

function sitemapXML(produtos, categorias) {
  const urls = [];
  urls.push({ loc: SITE_URL + "/", prio: 1.0, freq: "weekly" });
  urls.push({ loc: SITE_URL + "/catalog.html", prio: 0.8, freq: "daily" });
  urls.push({ loc: SITE_URL + "/about.html", prio: 0.3, freq: "monthly" });
  categorias.forEach(c => {
    if (c.produtos.length) urls.push({ loc: SITE_URL + "/" + catPubl(c.slug) + "/", prio: 0.7, freq: "daily" });
  });
  produtos.forEach(p => urls.push({ loc: SITE_URL + urlProduto(p), prio: 0.6, freq: "weekly" }));
  const hoje = new Date().toISOString().slice(0, 10);
  const body = urls.map(u =>
    "  <url>\n    <loc>" + u.loc + "</loc>\n    <lastmod>" + hoje + "</lastmod>\n" +
    '    <changefreq>' + u.freq + "</changefreq>\n    <priority>" + u.prio + "</priority>\n  </url>").join("\n");
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "\n</urlset>\n";
}

function robotsTxt() {
  return "User-agent: *\nAllow: /\nDisallow: /admin.html\nSitemap: " + SITE_URL + "/sitemap.xml\n";
}

/* ---------- Build ---------- */
const ROOT_COPY_EXCL = new Set([
  ".git", "node_modules", "public", "scripts", "tools", "produtos csv",
  "products", "electric-scooters", "electric-bikes", ".gitignore",
  "sitemap.xml", "robots.txt"
]);
function escreverArquivo(rel, conteudo) {
  [OUT, path.join(OUT, "public")].forEach(function (base) {
    const destino = path.join(base, rel);
    fs.mkdirSync(path.dirname(destino), { recursive: true });
    fs.writeFileSync(destino, conteudo, "utf8");
  });
  return path.join(OUT, rel);
}
function copiarManual(src, dest) {
  const st = fs.statSync(src);
  if (st.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function (nome) {
      copiarManual(path.join(src, nome), path.join(dest, nome));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}
function copiarAssetsPublic() {
  const pub = path.join(OUT, "public");
  fs.rmSync(pub, { recursive: true, force: true });
  fs.mkdirSync(pub, { recursive: true });
  fs.readdirSync(OUT).forEach(function (nome) {
    if (ROOT_COPY_EXCL.has(nome)) return;
    if (/\.bak/i.test(nome)) return;
    copiarManual(path.join(OUT, nome), path.join(pub, nome));
  });
}

async function main() {
  const { origem, produtos } = await carregarProdutos();
  console.log("[build] origem:", origem, "| produtos:", produtos.length);
  computarSlugs(produtos);
  copiarAssetsPublic();

  const categorias = {};
  produtos.forEach(p => {
    if (!p) return;
    const s = p.categoria || "acessorios";
    if (!categorias[s]) categorias[s] = { slug: s, produtos: [], cat: { slug: s, nome: p.categoria_nome || s, descricao: p.descricao_categoria || "" } };
    categorias[s].produtos.push(p);
  });
  const catArray = Object.keys(categorias).map(k => ({
    slug: k,
    nome: categorias[k].cat.nome,
    descricao: categorias[k].cat.descricao,
    produtos: categorias[k].produtos
  }));

  let n = 0;
  produtos.forEach(p => {
    if (!p || !p.nome) return;
    const slug = SLUG_FINAL[p.id] || slugProduto(p);
    escreverArquivo("products/" + slug + "/index.html", pagProduto(p, { produtos }));
    n++;
  });
  console.log("[build] páginas de produto geradas:", n);

  let nc = 0;
  catArray.forEach(c => {
    if (!c.produtos.length) return;
    escreverArquivo(catPubl(c.slug) + "/index.html", pagCategoria(c.slug, c, c.produtos));
    nc++;
  });
  console.log("[build] páginas de categoria geradas:", nc);

  escreverArquivo("sitemap.xml", sitemapXML(produtos, catArray));
  escreverArquivo("robots.txt", robotsTxt());
  console.log("[build] sitemap.xml + robots.txt atualizados");
  console.log("[build] saída: raiz (preview local) + public/ (deploy Vercel)");
  console.log("[build] done");
}

main().catch(e => { console.error(e); process.exit(1); });