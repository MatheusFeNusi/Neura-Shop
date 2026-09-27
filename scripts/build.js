/* ============================================================
   E-RIDE DEALS — SSG build (prerender all product/category pages)
   - Fetches products from Supabase (fallback: products.json)
   - Emits products/<slug>/index.html for every product
   - Emits <category>/index.html pages
   - Regenerates sitemap.xml + robots.txt
   Run: node scripts/build.js
   ============================================================ */

"use strict";

const fs = require("fs");
const path = require("path");
const ReviewData = require("../js/review-data.js");
const Clusters = require("../js/clusters.js");

const ROOT = path.join(__dirname, "..");
const OUT = ROOT;

const SITE_URL = process.env.SITE_URL || "https://neura-shop66.vercel.app";
const SITE_NAME = "E-Ride Deals";
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const BUILD_YEAR = new Date().getUTCFullYear();
const BUILD_MONTH = new Date().toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

/* ---------- Supabase config (read from js/config.js) ---------- */
function supaConfig() {
  try {
    const src = fs.readFileSync(path.join(ROOT, "js", "config.js"), "utf8");
    const u = (src.match(/url:\s*"([^"]+)"/) || [])[1];
    const a = (src.match(/anon:\s*"([^"]+)"/) || [])[1];
    return { url: u, anon: a };
  } catch (e) { return { url: null, anon: null }; }
}

/* O dado do produto vem do admin (coluna dados, JSONB) e alguns textos -
   principalmente o FAQ - ficaram gravados com o nome antigo do site. O build
   so consegue ler o Supabase com a anon key, entao em vez de reescrever 38
   linhas no banco ele troca o nome na copia gerada. Tocar no texto do produto
   no admin nao desfaz isso. */
const MARCA_LEGADA = "WattWheel";
function renomearMarcaLegada(valor) {
  if (typeof valor === "string") return valor.split(MARCA_LEGADA).join(SITE_NAME);
  if (Array.isArray(valor)) return valor.map(renomearMarcaLegada);
  if (valor && typeof valor === "object") {
    const out = {};
    for (const k of Object.keys(valor)) out[k] = renomearMarcaLegada(valor[k]);
    return out;
  }
  return valor;
}

/* Ordem de exibicao: segue products.json (mantem slugs/URLs) e acrescenta
   produtos novos do admin no final. */
function ordenarComoLocal(produtos, local) {
  const byId = {};
  produtos.forEach(p => { byId[p.id] = p; });
  const out = [];
  (local || []).forEach(p => { if (p && p.id && byId[p.id]) { out.push(byId[p.id]); delete byId[p.id]; } });
  Object.keys(byId).forEach(id => out.push(byId[id]));
  return out;
}

async function carregarProdutos() {
  const arquivo = path.join(ROOT, "products.json");
  const local = JSON.parse(fs.readFileSync(arquivo, "utf8"));
  const base = {
    marca: local.marca || SITE_NAME,
    categorias: local.categorias || [],
    produtos: local.produtos || []
  };
  const cfg = supaConfig();
  if (process.env.SEM_SUPABASE === "1") return { origem: "json", store: { marca: base.marca, categorias: base.categorias, produtos: renomearMarcaLegada(base.produtos) } };
  if (!cfg.url || !cfg.anon) {
    console.warn("[build] js/config.js sem url/anon do Supabase -> usando products.json");
    return { origem: "json", store: { marca: base.marca, categorias: base.categorias, produtos: renomearMarcaLegada(base.produtos) } };
  }
  try {
    const rows = await fetchPaginas(cfg);
    const vistos = {};
    const todos = [];
    rows.forEach(r => {
      const d = (r && r.dados) ? Object.assign({}, r.dados) : r;
      if (!d || !d.id) return;
      d.id = r.id || d.id;
      if (vistos[d.id]) return;
      vistos[d.id] = 1;
      todos.push(d);
    });
    if (!todos.length) throw new Error("admin sem produtos");
    const produtos = ordenarComoLocal(renomearMarcaLegada(todos), base.produtos);
    const store = { marca: base.marca, categorias: base.categorias, produtos };
    fs.writeFileSync(arquivo, JSON.stringify(store, null, 2), "utf8");
    console.log("[build] products.json sincronizado com o admin (" + produtos.length + " produtos)");
    return { origem: "supabase", store };
  } catch (e) {
    console.warn("[build] admin indisponivel (" + e.message + ") -> usando products.json");
    return { origem: "json", store: base };
  }
}

/* Mantem o fallback embutido do app (file://) igual ao products.json */
function sincronizarFallback(store) {
  const alvo = path.join(ROOT, "js", "app.js");
  const src = fs.readFileSync(alvo, "utf8");
  const linha = "var STORE_FALLBACK = " + JSON.stringify(store) + ";";
  const re = /^var STORE_FALLBACK = .*;$/m;
  if (!re.test(src)) { console.warn("[build] STORE_FALLBACK nao encontrado em js/app.js"); return; }
  const novo = src.replace(re, linha);
  if (novo === src) { console.log("[build] fallback embutido ja estava atualizado"); return; }
  fs.writeFileSync(alvo, novo, "utf8");
  console.log("[build] fallback embutido de js/app.js atualizado");
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
function compararHTML(p, fotos) {
  const lojas = ReviewData.lojasCompare(p);
  const img = fotos[0] || "";
  const precos = lojas.map(l => Number(l.preco)).filter(x => isFinite(x));
  const melhor = precos.length ? Math.min.apply(null, precos) : null;
  /* "Lowest" so quando a loja e a unica mais barata: com as tres no mesmo
     preco de referencia, marcar todas deixa a tabela sem sentido. */
  const unico = melhor != null && precos.filter(x => x === melhor).length === 1;
  return '<div class="comparar">' + lojas.map(l => {
    const tem = l.preco != null && isFinite(Number(l.preco));
    let precoHTML = "";
    if (tem) {
      const n = Number(l.preco);
      precoHTML = '<small class="comparar-preco">' + fmt(n) + (unico && n === melhor ? '<span class="comparar-best">Lowest</span>' : "") + "</small>";
    }
    /* Sem link: o admin cadastra a URL de cada loja depois (ReviewData.url
       volta a ser usada no href quando isso existir). */
    return '<div class="comparar-loja">' +
      (img ? '<img class="comparar-thumb" src="' + img + '" alt="" loading="lazy"/>' : "") +
      '<span class="comparar-loja-nome">' + esc(l.nome) + precoHTML + '<small class="comparar-cta">Price reference</small></span></div>';
  }).join("") + "</div>";
}const SCHEMA_DISP = {
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

/* A nota do retailer e opcional no admin: sem nota nao mostra estrelas nem 0.0 */
function temNota(p) {
  const r = Number(p && p.rating);
  return isFinite(r) && r > 0;
}
function estrelasCard(p) {
  if (!temNota(p)) return "";
  return '<div class="rating">' + starsHTML(Number(p.rating)) + ' <span class="reviews">' + Number(p.rating).toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>";
}

function cardHTML(p) {
  const esgotado = p.disponibilidade === "esgotado";
  const badge = pctDesc(p.preco, p.preco_anterior) != null ? '<span class="badge">-' + pctDesc(p.preco, p.preco_anterior) + "%</span>" : "";
  const img = imgProd(p);
  return '<article class="pcard" data-pid="' + esc(p.id) + '">' +
    '<a class="media" href="' + urlProduto(p) + '">' + badge +
    (img ? '<img src="' + img + '" alt="' + esc(p.nome) + '" loading="lazy"/>' : "") +
    "</a>" +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="' + urlProduto(p) + '">' + esc(p.nome) + "</a>" +
    estrelasCard(p) +
    '<div class="price">' +
    (pctDesc(p.preco, p.preco_anterior) != null ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (pctDesc(p.preco, p.preco_anterior) != null ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<a class="merchant" href="/store.html?loja=' + encodeURIComponent(p.merchant || "x") + '">' + esc(p.merchant_nome || p.merchant) + "</a>" +
    (esgotado
      ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
      : '<a class="btn-buy" href="' + urlProduto(p) + '">View deal</a>') +
    "</div></article>";
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
  '<script src="/js/review-data.js"></script>',
  '<script src="/js/app.js"></script>',
  "</body>\n</html>"
].join("\n");

function seedScript(p) {
  return '<script type="application/json" id="produto-seed">' + jsonEmbed(p) + "</" + "script>";
}

function schemaProduto(p, canonicalPage, contexto) {
  const img = imgProd(p);
  const rn = ReviewData.notas(p, (contexto || {}).produtos);
  const reviews = (p.reviews && p.reviews.length) ? p.reviews : [];
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
  if (reviews.length) {
    schema.review = reviews.map(r => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.nome },
      reviewRating: { "@type": "Rating", ratingValue: Number(r.nota != null ? r.nota : 5).toFixed(1), bestRating: 5, worstRating: 1 },
      reviewBody: r.texto
    }));
  }
  if (p.faq && p.faq.length) {
    schema.faqPage = {
      "@type": "FAQPage",
      mainEntity: p.faq.map(f => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.a } }))
    };
  }
  const grafo = {
    "@context": "https://schema.org",
    "@graph": [
      schema,
      {
        "@type": "Article",
        "@id": SITE_URL + canonicalPage + "#review",
        headline: p.nome + " review: our verdict",
        description: (p.descricao || "").replace(/\s+/g, " ").slice(0, 200),
        url: SITE_URL + canonicalPage,
        image: img || undefined,
        datePublished: BUILD_DATE,
        dateModified: BUILD_DATE,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL + "/about.html" },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: { "@id": SITE_URL + canonicalPage },
        about: { "@type": "Product", name: p.nome }
      }
    ]
  };
  return jsonLd(grafo);
}

function pagProduto(p, contexto) {
  const total = contexto.produtos.length;
  const fotos = [];
  if (p.img && /^https?:\/\//i.test(String(p.img))) fotos.push(p.img);
  if (p.fotos && p.fotos.length) p.fotos.forEach(u => { if (u && /^https?:\/\//i.test(u) && fotos.indexOf(u) === -1) fotos.push(u); });
  const canonical = urlProduto(p);
  const rev = ReviewData.notas(p, contexto.produtos);
  const rf = rev.fatos;
  const verdict = ReviewData.veredito(rev);
  const title = ReviewData.titulo(p, contexto.produtos) + " | " + SITE_NAME;
  const metadata = esc(
    "We scored the " + (p.nome || "").split(/\s+(?=[A-Z])/)[0] + " " + (rf.isBike ? "e-bike" : "e-scooter") +
    ": " + rev.score.toFixed(1) + "/10. " + ReviewData.pros(p, contexto.produtos)[0] +
    " Check the specs, the buyer ratings and the best price we found."
  );
  const disp = { em_estoque: ["In stock", "stock"], poucas_unidades: ["Only a few left", "soon"], esgotado: ["Currently unavailable", "out"] }[p.disponibilidade] || ["In stock", "stock"];
  const pct = pctDesc(p.preco, p.preco_anterior);
  const esgotado = p.disponibilidade === "esgotado";
  const temCupom = p.cupom && !esgotado;

  const precoBloco =
    (pct != null
      ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" +
        '<div class="row"><span class="now">' + fmt(p.preco) + "</span>" +
        '<span class="pct">-' + pct + "%</span>" +
        '<span class="save">You save ' + fmt(p.preco_anterior - p.preco) + "</span></div>"
      : '<div class="row"><span class="now">' + fmt(p.preco) + "</span></div>") +
    '<div class="cash">Reference price from the retailer\'s listing — the final price is confirmed at checkout.</div>';

  const keySpecItems = [
    rf.watt != null ? [rf.isBike ? "Motor" : "Peak motor", rf.watt + "W"] : null,
    rf.wh != null ? ["Battery", rf.volt + "V " + rf.ah + "Ah · " + num(rf.wh) + "Wh"] : null,
    rf.alcance != null ? ["Est. range", "~" + rf.alcance + " km"] : null,
    rf.vel != null ? ["Top speed", rf.vel + " km/h"] : null,
    rf.pneu != null ? [rf.isBike ? "Wheel size" : "Tire size", rf.pneu + "″"] : null,
    rf.carga != null ? ["Max load", rf.carga + " kg"] : null
  ].filter(Boolean);

  /* Tabela sem repetir o que os key-specs ja mostram */
  const specsHTML = ReviewData.specsVisiveis(p.specs, rf).map(s =>
    "<tr><th>" + esc(s.rotulo) + "</th><td>" + esc(s.valor) + "</td></tr>").join("") ||
    "<tr><th>Condition</th><td>New</td></tr>";
  const keySpecsHTML = keySpecItems.map(it =>
    '<div class="key-spec"><span class="key-spec-label">' + esc(it[0]) + '</span><span class="key-spec-value">' + esc(it[1]) + "</span></div>").join("");

  const reviews = (p.reviews && p.reviews.length) ? p.reviews : [];
  const reviewsHTML = reviews.map(r => {
    const avatar = r.foto
      ? '<span class="review-avatar foto"><img src="' + esc(r.foto) + '" alt="" loading="lazy"/></span>'
      : '<span class="review-avatar">' + esc(String(r.nome || "C").charAt(0).toUpperCase()) + "</span>";
    return '<div class="review-item"><div class="review-head">' + avatar +
      '<span class="review-nome">' + esc(r.nome) + "</span>" +
      (r.nota != null && Number(r.nota) > 0 ? '<span class="review-nota">' + starsHTML(Number(r.nota)) + "</span>" : "") + "</div>" +
      '<p class="review-texto">' + esc(r.texto) + "</p></div>";
  }).join("");

  const bannersHTML = (p.banners && p.banners.length)
    ? '<div class="pg-banner-stack">' + p.banners.map((u, i) =>
        '<div class="pg-banner-item"><img src="' + esc(u) + '" alt="Banner ' + (i + 1) + ' for ' + esc(p.nome) + '" loading="lazy"/></div>').join("") + "</div>"
    : "";

  const faqHTML = ReviewData.faq().map(f =>
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
    '<main class="container review-page">' +
    '<nav class="crumb"><a href="/">Home</a><span class="sep">›</span>' +
    '<a href="/catalog.html?cat=' + esc(p.categoria) + '">' + esc(p.categoria_nome || p.categoria) + "</a>" +
    '<span class="sep">›</span><span>' + esc(p.marca) + " Review</span></nav>" +

    /* ---------- Comparacao de precos: topo da pagina, acima do hero ---------- */
    '<section class="detail-sec comparar-sec"><h2><span class="bar"></span> Compare prices at other stores</h2>' +
    /* O id deixa o renderComparar() do js/app.js reescrever esse bloco com o
       preco do admin: sem ele, a tabela de lojas ficava no valor do build. */
    '<div id="comparar-tabela">' + comparar + "</div></section>" +

    /* ---------- Review hero ---------- */
    '<header class="review-hero-head">' +
    '  <div class="review-badge-tag">' +
    '    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
    '    REVIEWED &amp; SCORED' +
    '  </div>' +
    '  <h1 class="review-page-title" id="review-title">' + esc(ReviewData.h1(p, contexto.produtos)) + "</h1>" +
    ReviewData.specline(p) +
    '  <div class="review-author-meta">' +
    '    <span class="author-item"><strong>Reviewed by</strong> ' + SITE_NAME + " editorial</span>" +
    '    <span class="sep">&bull;</span>' +
    '    <span class="author-item"><strong>Updated</strong> ' + esc(BUILD_MONTH) + "</span>" +
    '    <span class="sep">&bull;</span>' +
    '    <span class="author-item"><strong>Verdict</strong> <span class="verdict-pill ' + verdict.classe + '">' + esc(verdict.rotulo.toUpperCase()) + "</span></span>" +
    "  </div>" +
    ReviewData.htmlMetodologia() +
    '  <div class="review-score-banner">' +
    ReviewData.htmlScoreBanner(p, contexto.produtos) +
    ReviewData.htmlPremio(p, contexto.produtos) +
    ReviewData.htmlSelos(p) +
    "  </div>" +
    ReviewData.htmlBottomLine(p, contexto.produtos) +
    "</header>" +

    /* ---------- Imagem + botão de revelar cupom, logo abaixo do título ---------- */
    '<div class="pg-layout">' +
    '<div class="pg-col-galeria">' +
    '<div class="gallery-img">' + (fotos[0] ? '<img id="foto-main" src="' + fotos[0] + '" alt="' + esc(p.nome) + '"/>' : "") + "</div>" +
    '<div class="thumbs" id="fotos-thumb">' +
    (fotos.length > 1 ? fotos.map((u, i) =>
      '<button data-v="' + i + '" class="' + (i === 0 ? "on" : "") + '"><img src="' + u + '" alt="View ' + (i + 1) + '"/></button>').join("") : "") +
    "</div>" +
    "</div>" +
    '<div class="pg-info">' +
    '<div class="pg-catscreen"><a class="chip cat" id="pg-categoria" href="/catalog.html?cat=' + esc(p.categoria) + '">' + esc(p.categoria_nome) + '</a><span class="review-badge-inline">FULL REVIEW</span></div>' +
    '<h2 class="review-subtitle">What the listing actually tells you</h2>' +
    '<div class="pg-meta">' +
    (temNota(p) ? '<span class="pg-rating" id="pg-rating">' + starsHTML(Number(p.rating)) + ' <strong>' + Number(p.rating).toFixed(1) + "</strong> out of 5 <span class=\"count\">(" + num(p.avaliacoes) + " ratings)</span></span>" : "") +
    '<span id="pg-merchant">Available at <span class="merchant-chip">' + esc(p.merchant_nome || p.merchant) + "</span></span>" +
    '<span class="ref" id="pg-marca">Brand: ' + esc(p.marca) + "</span>" +
    '<span class="ref" id="pg-produto-id">Partner SKU: ' + esc(p.product_id) + "</span>" +
    "</div>" +
    (p.descricao ? '<div class="pg-descricao" id="pg-descricao">' + ReviewData.htmlDescricao(p.descricao) + "</div>" : "") +
    "</div>" +
    '<aside class="buybox-col">' +
    '<div class="buybox">' +
    '<div class="buybox-stock"><span class="chip ' + disp[1] + '" id="pg-disponibilidade"><span data-dot></span>' + disp[0] + "</span></div>" +
    '<div class="buybox-price"><div id="preco-bloco">' + precoBloco + "</div></div>" +
    '<div class="buybox-sec">' +
    '<button class="btn-buy-big" id="btn-comprar">' + (esgotado ? "Currently unavailable" : (temCupom ? "GET COUPON CODE" : "Check price at " + esc(p.merchant_nome))) + "</button>" +
    (ReviewData.videoBusca(p) ? '<div class="video-row" id="video-row"><button class="btn-video" id="btn-video" type="button"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> <span class="video-label">' + esc(ReviewData.videoRotulo(p)) + '</span> <span class="video-ext">↗</span></button></div>' : "") +
    (temCupom
      ? '<div class="coupon-box" id="cupom-box"><div class="coupon-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a2 2 0 0 1 0-4h20a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4H2a2 2 0 0 1 0-4 2 2 0 0 0 0-4z"/><path d="M13 5v14M16 12h.01M10 12h.01"/></svg> Your coupon is ready — <strong>copy it</strong> and apply at checkout</div>' +
        '<p class="coupon-compare">We <strong>compare prices at other stores</strong> before you buy — this code is the best price we found at ' + esc(p.merchant_nome) + ".</p>" +
        '<div class="coupon-row"><button class="coupon-code" id="cupom-codigo" type="button" data-codigo="' + esc(p.cupom) + '">' + esc(p.cupom) + "</button></div>" +
        '<p class="coupon-note" id="cupom-nota">Apply code at checkout on ' + esc(p.merchant_nome) + ".</p>" +
        '<button class="btn-buy-big" id="btn-comprar-cupom">Go to retailer with coupon ↗</button></div>'
      : "") +
    '<p class="redirect-note"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><span>You\u2019ll be redirected to <strong id="parceiro-nome">' + esc(p.merchant_nome) + "</strong>, where this product is listed, sold and shipped.</span></p>" +
    (temCupom ? "" : '<button class="btn-partner" id="btn-parceiro">See product at retailer \u2197</button>') +
    "</div>" +
    '<div class="trust-row"><div class="trust-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><span><strong>Secure checkout</strong>Handled entirely by the partner store.</span></div>' +
    '<div class="trust-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="15" height="11" rx="2"/><path d="M16 9h3l3 3v5h-6"/><circle cx="6.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg><span><strong>Shipping &amp; returns</strong>Terms set by the partner at checkout.</span></div>' +
    '<div class="trust-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6z"/><path d="m9 12 2 2 4-4"/></svg><span><strong>Price comparison</strong>No extra cost to you. Ever.</span></div></div>' +
    '<div class="card-warn"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><span><strong>Affiliate disclosure.</strong> E-Ride Deals is an independent product discovery website. We don\u2019t sell or stock products — this item is sold by the retailer shown, and your purchase is completed on the retailer\u2019s site. As an affiliate, we may earn a commission on qualifying purchases, at no additional cost to you. <a href="/about.html#disclosure">Read our full disclosure</a>.</span></div>' +
    "</aside>" +
    "</div>" +

    /* ---------- Veredito + pros/cons + barras + CTA de cupom ---------- */
    ReviewData.htmlVeredito(p, contexto.produtos) +
    /* O slot e reescrito pelo app.js quando a pagina troca de produto sem
       recarregar; no build ele ja vem preenchido com o produto certo. */
    '<div id="para-quem-slot">' + ReviewData.htmlParaQuem(p, contexto.produtos) + "</div>" +
    ReviewData.htmlCtaCupom(p, { esgotado: esgotado }) +

    (bannersHTML ? '<section class="section pg-banner-sec" id="pg-banner-sec"><div class="container" style="padding-inline:0"><div id="pg-banner-carousel">' + bannersHTML + "</div></div></section>" : "") +
    '<section class="detail-sec"><h2><span class="bar"></span> Specifications</h2>' +
    (keySpecsHTML ? '<div class="key-specs">' + keySpecsHTML + "</div>" : "") +
    '<table class="specs" id="specs-tabela">' + specsHTML + "</table></section>" +
    ReviewData.htmlCtaCupom(p, { esgotado: esgotado }) +
    '<section class="detail-sec" id="reviews-sec">' +
    '<h2><span class="bar"></span> Customer reviews</h2>' +
    '<div id="reviews-lista"><div class="reviews-summary">' +
    (temNota(p) ? '<span class="reviews-score">' + Number(p.rating).toFixed(1) + "</span>" +
      '<span class="reviews-stars">' + starsHTML(Number(p.rating)) + "</span>" : "") +
    '<span class="reviews-count">' + num(p.avaliacoes) + " reviews</span></div>" +
    '<div class="reviews-lista">' + reviewsHTML + "</div></div></section>" +
    ReviewData.htmlCtaCupom(p, { esgotado: esgotado }) +
    '<div id="alt-slot">' + ReviewData.htmlAlternativas(p, contexto.produtos, { urlOf: urlProduto }) + "</div>" +
    clustersDoProdutoHTML(p, contexto.produtos) +
    '<section class="detail-sec"><h2><span class="bar"></span> Compare similar products</h2>' + simCards + "</section>" +
    '<section class="detail-sec"><h2><span class="bar"></span> Frequently asked questions about the coupon and shipping</h2><div id="faq-lista">' + faqHTML + "</div></section>" +
    (relCards ? '<section class="section"><div class="container" style="padding-inline:0"><div class="section-head"><h2>You may also like</h2><a class="link-all" href="/catalog.html">View all ›</a></div>' + relCards + "</div></section>" : "") +
    "</main>" +
    seedScript(p) +
    schemaProduto(p, canonical, contexto) +
    FOOT;
  return html;
}

/* ---------- Paginas de cluster (keyword -> pagina -> produtos -> review) ----------
   O texto (titulo, meta, abertura) sai dos numeros do catalogo: se o
   inventario mudar, o texto muda junto. */

/* A review volta para as listas: e o caminho que faz a pagina de cluster
   existir para o Google sem depender so do sitemap. */
function clustersDoProdutoHTML(p, todos) {
  const meus = Clusters.clustersDoProduto(p, todos).filter(x => x.n >= Clusters.MIN_PRODUTOS);
  if (!meus.length) return "";
  return '<section class="detail-sec" id="pg-clusters"><h2><span class="bar"></span> Compare it against</h2>' +
    '<p class="pq-nota" style="margin-top:0">This model is on ' + meus.length +
    (meus.length === 1 ? " list" : " lists") + " of ours, next to the alternatives in each one.</p>" +
    '<ul class="link-list">' + meus.map(x =>
      '<li><a href="' + Clusters.url(x.c) + '">' + esc(x.c.curto) + "</a><span>" + x.n + " products</span></li>"
    ).join("") + "</ul></section>";
}
function schemaCluster(c, ps, todos, canonicalPage) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.h1,
    description: Clusters.meta(c, todos),
    url: SITE_URL + canonicalPage,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ps.length,
      itemListElement: ps.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: SITE_URL + urlProduto(p),
        name: p.nome
      }))
    }
  }) + jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Best lists", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 3, name: c.curto, item: SITE_URL + canonicalPage }
    ]
  });
}

/* Os tres destaques viram cartoes: e a resposta curta para "qual eu pego". */
function destaquesHTML(c, todos) {
  const ds = Clusters.destaques(c, todos);
  if (!ds.length) return "";
  return '<section class="detail-sec" id="destaques"><h2><span class="bar"></span> Where to start</h2>' +
    '<div class="pq-cols">' + ds.map(d =>
      '<div class="pq-col pq-bom"><h3>' + esc(d.rotulo) + "</h3>" +
      '<a class="pq-pick" href="' + urlProduto(d.p) + '">' + esc(ReviewData.nomeCurto(d.p)) + "</a>" +
      '<p class="pq-pick-val">' + esc(d.txt) + "</p></div>"
    ).join("") + "</div></section>";
}

/* O que esta lista NAO cobre: honesto e derivado dos dados, e o unico jeito de
   uma pagina de cluster nao virar propaganda. */
function ressalvasHTML(c, ps, todos) {
  const r = Clusters.resumo(c, todos);
  const linhas = [];
  const semAltura = ps.filter(p => !ReviewData.fatos(p).carga).length;
  const semAutonomia = ps.filter(p => !ReviewData.fatos(p).alcance).length;
  if (c.familia === "deals") {
    linhas.push("A markdown is not a guarantee: these are the prices our catalog shows today, and retailers change them without notice. Check the price on the store page before you buy.");
  }
  if (c.familia === "preco") {
    linhas.push("Prices move. This page was built from prices published on " + BUILD_DATE + "; a model that crosses the line will move to the other list on the next update.");
  }
  if (c.familia === "uso") {
    linhas.push("We list what the listing states. Your own weight, terrain and riding style decide whether that number works for you.");
  }
  linhas.push("Estimated range is calculated from battery size, not copied from a manufacturer claim. Real range depends on weight, speed, terrain and temperature.");
  if (semAltura) linhas.push(semAltura + " of the " + ps.length + " listings do not publish a load limit at all.");
  if (semAutonomia) linhas.push(semAutonomia + " of the " + ps.length + " listings do not publish enough battery data to estimate range.");
  linhas.push("We have not test-ridden these models. Every figure here comes from the published specification and the current price.");
  return '<section class="detail-sec" id="ressalvas"><h2><span class="bar"></span> What this list does not tell you</h2>' +
    '<ul class="pq-list">' + linhas.map(l => "<li>" + esc(l) + "</li>").join("") + "</ul></section>";
}

function pagCluster(c, todos) {
  const ps = Clusters.lista(c, todos);
  const r = Clusters.resumo(c, todos);
  const canonical = Clusters.url(c);
  const titulo = c.h1 + " (" + BUILD_YEAR + ") | " + SITE_NAME;
  const metaDesc = Clusters.meta(c, todos);
  const table = ps.slice(0, Clusters.LIMITE_TABELA);
  const resto = ps.length - table.length;
  const cards = ps.map(cardHTML).join("");
  const html =
    HEAD_COMMON(titulo, metaDesc, canonical, "") +
    '<body data-page="cluster">\n  <div id="app-header"></div>\n' +
    '<main class="container review-page">' +
    '<nav class="crumb"><a href="/">Home</a><span class="sep">›</span>' +
    '<a href="/catalog.html">Best lists</a><span class="sep">›</span>' +
    "<span>" + esc(c.curto) + "</span></nav>" +

    '<header class="review-hero-head">' +
    '  <div class="review-badge-tag">CURATED FROM OUR CATALOG</div>' +
    '  <h1 class="review-page-title">' + esc(c.h1) + "</h1>" +
    '  <p class="lead">' + esc(aberturaCluster(c, r)) + "</p>" +
    '  <p class="review-author-meta"><span class="author-item"><strong>' + ps.length + " products</strong></span>" +
    '<span class="sep">&bull;</span><span class="author-item"><strong>Prices checked</strong> ' + esc(BUILD_MONTH) + "</span>" +
    (r.marcos > 1 ? '<span class="sep">&bull;</span><span class="author-item"><strong>' + r.marcos + " below list price</strong></span>" : "") +
    "</p></header>" +

    destaquesHTML(c, todos) +

    '<section class="detail-sec" id="comparacao"><h2><span class="bar"></span> Detailed comparison</h2>' +
    ReviewData.htmlComparativo(table, { urlOf: urlProduto }) +
    (resto > 0 ? '<p class="pq-nota">Showing ' + table.length + " of " + ps.length + " products in the table. Every one of them is in the list below.</p>" : "") +
    '<p class="pq-nota">Bold marks the best value in each column. Price: lowest wins. Everything else: highest wins.</p>' +
    "</section>" +

    '<section class="detail-sec" id="selecao"><h2><span class="bar"></span> The full list</h2>' +
    '<div class="grid-cards">' + cards + "</div></section>" +

    '<section class="detail-sec" id="como-escolhemos"><h2><span class="bar"></span> How this list was built</h2>' +
    "<p>" + esc(c.criterio) + "</p>" +
    "<p>Every product links to its own review, with the verdict, the specification table and the coupon step at the retailer. " +
    "Scores and verdicts come from the published specification and the current price &mdash; we have not test-ridden these models.</p>" +
    ReviewData.htmlMetodologia() +
    "</section>" +

    ressalvasHTML(c, ps, todos) +

    '<section class="detail-sec" id="outras-listas"><h2><span class="bar"></span> Other lists</h2>' +
    '<ul class="link-list">' + Clusters.DEFINICOES
      .filter(o => o.slug !== c.slug && Clusters.lista(o, todos).length >= Clusters.MIN_PRODUTOS)
      .map(o => '<li><a href="' + Clusters.url(o) + '">' + esc(o.curto) + "</a></li>").join("") +
    "</ul></section>" +

    schemaCluster(c, ps, todos, canonical) +
    "</main>\n" +
    FOOT;
  return html;
}

/* Abertura com os numeros do catalogo: e o que o leitor ve antes da tabela. */
function aberturaCluster(c, r) {
  const faixa = r.min === r.max ? "currently priced at " + r.de : "currently priced from " + r.de + " to " + r.para;
  const quem = c.slug.indexOf("scooter") >= 0 ? "e-scooters" : "e-bikes";
  if (c.familia === "deals") {
    return r.n + " " + quem + " " + faixa + ", biggest markdown first. Each one links to its own review, with the full specification and how to get the price at the retailer.";
  }
  if (c.familia === "preco") {
    return r.n + " " + quem + " " + faixa + ", ordered by our review score. Side-by-side battery, motor, estimated range and load limit below, then the reasoning behind each verdict.";
  }
  return r.n + " " + quem + " " + faixa + " that meet one condition: " + c.criterioCurto + ". Side-by-side comparison below, plus what each listing does not tell you.";
}

function pagCategoria(slug, cat, produtos) {
  const publ = catPubl(slug);
  const canonical = "/" + publ + "/";
  const ehBike = /bike|biciclet/i.test(cat.nome || slug);
  const quem = ehBike ? "e-bikes" : "e-scooters";
  const comPreco = produtos.filter(p => Number(p.preco) > 0);
  const vs = comPreco.map(p => Number(p.preco)).sort((a, b) => a - b);
  const min = vs[0], max = vs[vs.length - 1], med = vs[Math.floor(vs.length / 2)];
  const comWas = produtos.filter(p => pctDesc(p.preco, p.preco_anterior) != null).length;
  const titulo = "Best " + cat.nome + " — Prices, Ratings & Coupons | E-Ride Deals";
  const metadata = cat.descricao || "Electric " + (cat.nome || "") + " compared across partner stores — check prices, ratings and coupons, then buy directly at the retailer.";
  const cards = produtos.map(cardHTML).join("");
  const tabela = ReviewData.htmlComparativo(comPreco.slice(0, Clusters.LIMITE_TABELA), { urlOf: urlProduto });
  const listas = Clusters.DEFINICOES
    .filter(o => Clusters.lista(o, produtos).length >= Clusters.MIN_PRODUTOS && o.slug.indexOf(ehBike ? "bike" : "scooter") >= 0);
  const html =
    HEAD_COMMON(titulo, metadata, canonical, "") +
    '<body data-page="cat-static">\n  <div id="app-header"></div>\n' +
    '<main class="container">' +
    '<nav class="crumb"><a href="/">Home</a><span class="sep">›</span><span>' + esc(cat.nome) + "</span></nav>" +
    '<div class="page-head"><p class="kicker">' + esc(cat.nome) + "</p>" +
    '<h1>' + esc(cat.nome) + "</h1>" +
    "<p>" + esc(metadata) + "</p>" +
    '<p class="count" style="margin-top:10px" data-cat-slug="' + esc(cat.slug || "") + '">' + produtos.length + " products · " +
    "from <span data-preco-resumo=\"min\">" + fmt(min) + "</span> to <span data-preco-resumo=\"max\">" + fmt(max) +
    "</span> (median <span data-preco-resumo=\"med\">" + fmt(med) + "</span>)" +
    (comWas ? " · " + comWas + " below list price" : "") + " · prices checked " + esc(BUILD_MONTH) + "</p></div>" +

    (listas.length ? '<section class="detail-sec" id="sub-listas"><h2><span class="bar"></span> Narrow it down</h2>' +
      '<ul class="link-list">' + listas.map(o =>
        '<li><a href="' + Clusters.url(o) + '">' + esc(o.curto) + "</a><span>" + Clusters.lista(o, produtos).length + " products</span></li>"
      ).join("") + "</ul></section>" : "") +

    (tabela ? '<section class="detail-sec" id="comparacao"><h2><span class="bar"></span> Side by side</h2>' + tabela +
      '<p class="pq-nota">Bold marks the best value in each column. Price: lowest wins. Everything else: highest wins.</p></section>' : "") +

    '<div class="grid-cards">' + cards + "</div>" +
    "</main>" +
    '<div id="app-footer"></div>' +
    '<script src="/js/config.js"></script>' +
    '<script src="/js/review-data.js"></script>' +
    '<script src="/js/app.js"></script>' +
    "</body>\n</html>";
  return html;
}

function sitemapXML(produtos, categorias, clusters) {
  const urls = [];
  urls.push({ loc: SITE_URL + "/", prio: 1.0, freq: "weekly" });
  urls.push({ loc: SITE_URL + "/catalog.html", prio: 0.8, freq: "daily" });
  urls.push({ loc: SITE_URL + "/about.html", prio: 0.3, freq: "monthly" });
  categorias.forEach(c => {
    if (c.produtos.length) urls.push({ loc: SITE_URL + "/" + catPubl(c.slug) + "/", prio: 0.7, freq: "daily" });
  });
  /* Os clusters ficam acima das categorias: sao a entrada das buscas de
     intencao ("best ...", "deals") e cada um leva a varias reviews. */
  (clusters || []).forEach(c => urls.push({ loc: SITE_URL + "/" + c.slug + "/", prio: 0.8, freq: "daily" }));
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
  "sitemap.xml", "robots.txt",
  /* As pastas de cluster sao geradas aqui: nao podem ser copiadas para
     public/ pelo espelho de assets (o public e reescrito do zero). */
  ...Clusters.DEFINICOES.map(c => c.slug)
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
/* Slugs sao derivados do nome: quando o admin renomeia o produto a pasta antiga
   fica orfa no repo (e no git). Remove as paginas que nao existem mais. */
function podarPaginasProdutos(produtos) {
  const atuais = new Set();
  produtos.forEach(p => { if (p && p.nome) atuais.add(SLUG_FINAL[p.id] || slugProduto(p)); });
  const dir = path.join(OUT, "products");
  const removidos = [];
  if (!fs.existsSync(dir)) return removidos;
  fs.readdirSync(dir).forEach(slug => {
    if (atuais.has(slug)) return;
    if (!fs.existsSync(path.join(dir, slug, "index.html"))) return;
    fs.rmSync(path.join(dir, slug), { recursive: true, force: true });
    removidos.push(slug);
  });
  return removidos;
}

/* Mesmo cuidado das paginas de produto: se um cluster cai abaixo do minimo (ou
   a regra muda), a pasta antiga fica orfa no repo e no deploy. */
function podarPaginasCluster(slugsAtuais) {
  const atuais = new Set(slugsAtuais);
  const removidos = [];
  Clusters.DEFINICOES.forEach(c => {
    if (atuais.has(c.slug)) return;
    const dir = path.join(OUT, c.slug);
    if (fs.existsSync(path.join(dir, "index.html"))) {
      fs.rmSync(dir, { recursive: true, force: true });
      removidos.push(c.slug);
    }
  });
  return removidos;
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
  const { origem, store } = await carregarProdutos();
  const produtos = store.produtos;
  console.log("[build] origem:", origem, "| produtos:", produtos.length);
  computarSlugs(produtos);
  sincronizarFallback(store);
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
  /* Todo produto do admin tem de ter a URL /products/<slug>/. Sem pagina o
     link do admin cairia em product.html?id= e o visitante veria a versao
     dinamica, sem o HTML do build. */
  const semPagina = produtos.filter(p => p && p.nome && !fs.existsSync(path.join(OUT, "products", SLUG_FINAL[p.id] || slugProduto(p), "index.html")));
  if (semPagina.length) {
    console.error("[build] ATENÇÃO: " + semPagina.length + " produto(s) sem página estática (remova do admin ou corrija o nome): " +
      semPagina.map(p => p.id).join(", "));
  }
  const orfas = podarPaginasProdutos(produtos);
  if (orfas.length) console.log("[build] páginas orfãs removidas (slug mudou no admin):", orfas.join(", "));

  let nc = 0;
  catArray.forEach(c => {
    if (!c.produtos.length) return;
    escreverArquivo(catPubl(c.slug) + "/index.html", pagCategoria(c.slug, c, c.produtos));
    nc++;
  });
  console.log("[build] páginas de categoria geradas:", nc);

  /* Clusters: so entra o que passa do minimo de produtos. O que fica de fora
     aparece no log com o numero -- assim da para ver a regra apertando sem
     precisar abrir o codigo. */
  const cl = Clusters.publicaveis(produtos);
  cl.fora.forEach(x => console.log("[build] cluster ignorado (" + x.n + " < " + Clusters.MIN_PRODUTOS + " produtos): /" + x.cluster.slug + "/"));
  cl.ok.forEach(x => {
    escreverArquivo(x.cluster.slug + "/index.html", pagCluster(x.cluster, produtos));
  });
  console.log("[build] páginas de cluster geradas:", cl.ok.length, "->", cl.ok.map(x => "/" + x.cluster.slug + "/").join(" "));
  const podsProntos = podarPaginasCluster(cl.ok.map(x => x.cluster.slug));
  if (podsProntos.length) console.log("[build] clusters orfãos removidos:", podsProntos.join(", "));

  escreverArquivo("sitemap.xml", sitemapXML(produtos, catArray, cl.ok.map(x => x.cluster)));
  escreverArquivo("robots.txt", robotsTxt());
  console.log("[build] sitemap.xml + robots.txt atualizados");
  console.log("[build] saída: raiz (preview local) + public/ (deploy Vercel)");
  console.log("[build] done");
}

main().catch(e => { console.error(e); process.exit(1); });