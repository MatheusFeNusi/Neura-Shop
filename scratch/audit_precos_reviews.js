"use strict";
const raw = require("../products.json");
const arr = Array.isArray(raw) ? raw : (raw.produtos || raw.items || []);

/* ---------- 1. precos de comparacao: sao reais ou fixos? ---------- */
const lojas = {};
arr.forEach(p => (p.lojas_compare || []).forEach(l => {
  (lojas[l.nome] = lojas[l.nome] || []).push(Number(l.preco));
}));
console.log("=== precos de comparacao por loja ===");
Object.entries(lojas).forEach(([k, v]) => {
  const uniq = new Set(v);
  console.log("  " + k.padEnd(12) + " n=" + String(v.length).padStart(3) +
    "  unicos=" + String(uniq.size).padStart(3) +
    "  min=" + Math.min(...v).toFixed(2) + "  max=" + Math.max(...v).toFixed(2));
});
const buscas = arr.filter(p => (p.lojas_compare || []).length && (p.lojas_compare || [])
  .every(l => l.url.includes("?")));
console.log("  produtos cujas URLs de comparacao sao buscas genericas (sem preco fixo no link): " + buscas.length);

/* ---------- 2. preco de referencia / desconto ---------- */
console.log("");
console.log("=== preco de referencia (preco_anterior) ===");
const des = arr.map(p => ({ sku: p.product_id, d: Number(p.fatos_desconto || 0), ant: p.preco_anterior, now: p.preco }))
  .filter(x => x.ant);
const ratios = des.map(x => Number(x.now) / Number(x.ant)).sort((a, b) => a - b);
console.log("  preco_anterior presente em " + des.length + "/" + arr.length + " produtos");
console.log("  ratio agora/antes: min " + ratios[0].toFixed(3) + "  max " + ratios[ratios.length - 1].toFixed(3));
const spec = arr.filter(p => (p.specs || []).some(s => /list price/i.test(s.rotulo)));
console.log("  produtos com spec 'List price' no feed: " + spec.length);
const inflados = arr.filter(p => Number(p.preco_anterior) > Number(p.preco) * 3);
console.log("  produtos com preco_anterior > 3x o preco atual (suspeito de inflacao): " + inflados.length);
inflados.slice(0, 6).forEach(p => console.log("      " + p.product_id + "  " + p.preco + " <- " + p.preco_anterior +
  "  (" + (p.nome || "").slice(0, 34) + ")"));

/* ---------- 3. nota e nº de avaliacoes ---------- */
console.log("");
console.log("=== nota / avaliacoes ===");
const notas = new Set(arr.map(p => p.rating));
console.log("  notas distintas no feed: " + [...notas].sort().join(", "));
const av = arr.map(p => p.avaliacoes).sort((a, b) => a - b);
console.log("  avaliacoes: min " + av[0] + "  max " + av[av.length - 1] + "  soma " + av.reduce((a, b) => a + b, 0));
const specRev = arr.map(p => {
  const s = (p.specs || []).find(x => /^reviews$/i.test(x.rotulo));
  return s ? Number(String(s.valor).replace(/[^\d]/g, "")) : null;
}).filter(x => x != null);
console.log("  spec 'Reviews' do feed: " + specRev.length + " valores, min " + Math.min(...specRev) + " max " + Math.max(...specRev));
const divergem = arr.filter(p => {
  const s = (p.specs || []).find(x => /^reviews$/i.test(x.rotulo));
  return s && Number(String(s.valor).replace(/[^\d]/g, "")) !== Number(p.avaliacoes);
});
console.log("  produtos onde 'Reviews' da spec != avaliacoes usada na pagina: " + divergem.length);

/* ---------- 4. a review aparece na pagina com qual rotulo? ---------- */
console.log("");
console.log("=== como a secao de reviews se apresenta ===");
console.log("  'Customer reviews' heading, com resumo " + arr[0].rating + "/5 e " + arr[0].avaliacoes + " reviews");
console.log("  os textos vem de p.reviews (2 por produto, nomes reaproveitados)");
