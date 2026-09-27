"use strict";
/* ==========================================================================
   Paginas de cluster: keyword -> pagina -> produtos -> review -> cupom.

   Cada cluster e uma REGRA sobre o catalogo real, nao uma lista escrita a mao.
   Duas garantias:

   1. Regra que deixa menos de MIN_PRODUTOS produtos nao vira pagina. Uma pagina
      com 2 ou 3 itens e thin content: ela nao compete e ainda arrasta o
      cluster inteiro para baixo. O build so escreve o que passa do limite e
      registra no log o que ficou de fora.
   2. O texto de cada pagina (titulo, meta description, abertura) sai dos
      numeros do catalogo no momento do build. Se o inventario mudar, o texto
      muda junto -- nao existe frase de marketing desatualizada.

   Este arquivo roda so no build (o cliente nao precisa: a pagina e estatica
   como as paginas de categoria).
   ========================================================================== */
const RD = require("./review-data.js");

const MIN_PRODUTOS = 5;
const LIMITE_TABELA = 15;
const SCOOT = "scooters-eletricos";
const BIKE = "bicicletas-eletricas";

const f = p => RD.fatos(p);
const preco = p => Number(p.preco) || 0;
const comPreco = p => preco(p) > 0;
const desconto = p => { const d = f(p).desconto; return d == null ? -1 : d; };
const score = (p, todos) => { const n = RD.notas(p, todos || []); return n && n.score ? n.score : 0; };
const alcance = p => f(p).alcance || 0;
const carga = p => f(p).carga || 0;
const watt = p => f(p).watt || 0;

/* ---------- Definicoes ---------- */
const DEFINICOES = [
  {
    slug: "electric-bike-deals",
    familia: "deals",
    curto: "Electric bike deals",
    h1: "Electric Bike Deals: the Cheapest Verified Prices Right Now",
    criterio: "Every e-bike in our catalog that is below its previous price, biggest markdown first.",
    criterioCurto: "below its previous price",
    filtro: p => p.categoria === BIKE && comPreco(p) && desconto(p) > 0,
    ordem: (a, b) => desconto(b) - desconto(a) || preco(a) - preco(b),
    destaques: ["menor-preco", "bateria-por-dolar", "potencia"]
  },
  {
    slug: "electric-scooter-deals",
    familia: "deals",
    curto: "Electric scooter deals",
    h1: "Electric Scooter Deals: the Cheapest Verified Prices Right Now",
    criterio: "Every e-scooter in our catalog that is below its previous price, biggest markdown first.",
    criterioCurto: "below its previous price",
    filtro: p => p.categoria === SCOOT && comPreco(p) && desconto(p) > 0,
    ordem: (a, b) => desconto(b) - desconto(a) || preco(a) - preco(b),
    destaques: ["menor-preco", "bateria-por-dolar", "potencia"]
  },
  {
    slug: "best-electric-bikes-under-1000",
    familia: "preco",
    curto: "E-bikes under $1,000",
    h1: "Best Electric Bikes Under $1,000",
    criterio: "E-bikes currently priced under $1,000, ordered by our review score, not by brand.",
    criterioCurto: "priced under $1,000",
    filtro: p => p.categoria === BIKE && comPreco(p) && preco(p) < 1000,
    ordem: (a, b, ctx) => score(b, ctx) - score(a, ctx) || preco(a) - preco(b),
    destaques: ["bateria-por-dolar", "menor-preco", "autonomia"]
  },
  {
    slug: "best-electric-scooters-under-1000",
    familia: "preco",
    curto: "E-scooters under $1,000",
    h1: "Best Electric Scooters Under $1,000",
    criterio: "E-scooters currently priced under $1,000, ordered by our review score, not by brand.",
    criterioCurto: "priced under $1,000",
    filtro: p => p.categoria === SCOOT && comPreco(p) && preco(p) < 1000,
    ordem: (a, b, ctx) => score(b, ctx) - score(a, ctx) || preco(a) - preco(b),
    destaques: ["bateria-por-dolar", "menor-preco", "potencia"]
  },
  {
    slug: "best-long-range-electric-scooters",
    familia: "uso",
    curto: "Long-range e-scooters",
    h1: "Best Long-Range Electric Scooters",
    criterio: "E-scooters whose estimated real-world range reaches 70 km. The estimate comes from battery size, not from a manufacturer claim.",
    criterioCurto: "estimated range of 70 km or more",
    filtro: p => p.categoria === SCOOT && comPreco(p) && alcance(p) >= 70,
    ordem: (a, b) => alcance(b) - alcance(a) || preco(a) - preco(b),
    destaques: ["autonomia", "bateria-por-dolar", "potencia"]
  },
  {
    slug: "best-electric-scooters-for-heavy-adults",
    familia: "uso",
    curto: "E-scooters for heavy adults",
    h1: "Best Electric Scooters for Heavy Adults",
    criterio: "E-scooters listed for a load limit of 140 kg or more. Always check your own weight against the retailer's limit.",
    criterioCurto: "listed for 140 kg or more",
    filtro: p => p.categoria === SCOOT && comPreco(p) && carga(p) >= 140,
    ordem: (a, b) => carga(b) - carga(a) || preco(a) - preco(b),
    destaques: ["carga", "potencia", "bateria-por-dolar"]
  }
];

/* ---------- Consultas ---------- */
function porSlug(slug) { return DEFINICOES.find(c => c.slug === slug) || null; }
function url(c) { return "/" + c.slug + "/"; }

function lista(c, todos) {
  const ctx = todos || [];
  return (ctx || [])
    .filter(p => p && p.nome && c.filtro(p))
    .sort((a, b) => c.ordem(a, b, ctx) || String(a.nome).localeCompare(String(b.nome)));
}

/* O que o build vai escrever, e o que ficou de fora por falta de produtos. */
function publicaveis(todos) {
  const ok = [], fora = [];
  DEFINICOES.forEach(c => {
    const ps = lista(c, todos);
    if (ps.length >= MIN_PRODUTOS) ok.push({ cluster: c, produtos: ps });
    else fora.push({ cluster: c, n: ps.length });
  });
  return { ok, fora };
}

/* Um produto pode estar em varios clusters: e isso que liga a review ao
   primeiro nivel do funil sem depender de adivinhacao. */
function clustersDoProduto(p, todos) {
  if (!p) return [];
  return DEFINICOES.filter(c => c.filtro(p)).map(c => ({ c, n: lista(c, todos).length }));
}

/* ---------- Numeros que escrevem o texto da pagina ---------- */
function precos(ps) { return ps.map(preco).filter(v => v > 0).sort((a, b) => a - b); }
function mediana(v) { return v.length ? v[Math.floor(v.length / 2)] : 0; }
function usd(v) { return "$" + Number(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function resumo(c, todos) {
  const ps = lista(c, todos);
  const v = precos(ps);
  const n = ps.length;
  const min = v[0], max = v[n ? v.length - 1 : 0], med = mediana(v);
  return {
    n: n,
    min: min, max: max, mediana: med,
    de: usd(min), para: usd(max), medianaTxt: usd(med),
    marcos: ps.filter(p => desconto(p) > 0).length,
    alcanceMax: ps.reduce((m, p) => Math.max(m, alcance(p)), 0),
    cargaMax: ps.reduce((m, p) => Math.max(m, carga(p)), 0),
    wattMax: ps.reduce((m, p) => Math.max(m, watt(p)), 0)
  };
}

/* Meta description com numeros reais: e o unico texto que o buscador ve sem
   abrir a pagina, entao tem que valer a leitura. */
function meta(c, todos) {
  const r = resumo(c, todos);
  if (!r.n) return "";
  const faixa = r.min === r.max ? "priced at " + r.de : "from " + r.de + " to " + r.para;
  if (c.familia === "deals") {
    return r.n + " electric " + (c.familia === "deals" ? "" : "") + (c.slug.indexOf("scooter") >= 0 ? "scooter" : "bike") +
      " deals " + faixa + ", biggest markdown first, with battery, motor and estimated range side by side.";
  }
  return r.n + " " + (c.slug.indexOf("scooter") >= 0 ? "e-scooters" : "e-bikes") + " " + faixa +
    ", compared on battery, motor, estimated range and load limit. " +
    (r.marcos > 1 ? r.marcos + " of them are below their previous price." : "");
}

/* ---------- Destaques: o "pra quem e cada um" em 3 cartoes ---------- */
/* Cada destaque e um calculo sobre os dados publicados, nao uma opiniao.
   A ordem das metricas e do cluster: na pagina de carga o limite de peso vem
   primeiro, na de autonomia a autonomia vem primeiro. */
const METRICAS = {
  "menor-preco": { rotulo: "Lowest price", medir: p => preco(p), menor: true, txt: p => usd(preco(p)) },
  "bateria-por-dolar": { rotulo: "Most battery per dollar", medir: p => (f(p).wh || 0) / preco(p), txt: p => (f(p).wh || 0) + " Wh for " + usd(preco(p)) },
  "autonomia": { rotulo: "Longest estimated range", medir: p => alcance(p), txt: p => "~" + alcance(p) + " km estimated" },
  "potencia": { rotulo: "Most powerful motor", medir: p => Math.max(watt(p), f(p).pico || 0), txt: p => RD.motorTxt(f(p)) },
  "carga": { rotulo: "Highest load limit", medir: p => carga(p), txt: p => carga(p) + " kg listed" }
};

function destaques(c, todos) {
  const ps = lista(c, todos).filter(p => preco(p) > 0);
  if (!ps.length) return [];
  const usados = new Set();
  const out = [];
  (c.destaques || []).forEach(chave => {
    if (out.length >= 3) return;
    const m = METRICAS[chave];
    if (!m) return;
    const ordenados = ps.slice()
      .filter(p => m.medir(p) > 0)
      .sort((a, b) => m.menor ? m.medir(a) - m.medir(b) : m.medir(b) - m.medir(a));
    /* Se o melhor da metrica ja virou destaque, usa o segundo melhor. */
    const p = ordenados.find(x => !usados.has(x.id));
    if (!p) return;
    usados.add(p.id);
    out.push({ rotulo: m.rotulo, p: p, txt: m.txt(p) });
  });
  return out;
}

module.exports = {
  MIN_PRODUTOS: MIN_PRODUTOS,
  LIMITE_TABELA: LIMITE_TABELA,
  DEFINICOES: DEFINICOES,
  porSlug: porSlug,
  url: url,
  lista: lista,
  publicaveis: publicaveis,
  clustersDoProduto: clustersDoProduto,
  resumo: resumo,
  meta: meta,
  destaques: destaques,
  preco: preco,
  desconto: desconto
};
