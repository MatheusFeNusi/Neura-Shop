"use strict";
/* Guard de compliance: o feed trazia 5 nomes de review reutilizados em 15-16
   produtos cada, com texto byte-identico e nota fixa por nome. Isso e
   testimonial fabricado e cai na FTC 16 CFR Part 465. Este script falha se
   isso voltar a aparecer. */
const raw = require("../products.json");
const arr = Array.isArray(raw) ? raw : (raw.produtos || raw.items || []);

let falhas = [];
const err = m => falhas.push(m);

const porNome = {};
arr.forEach(p => (p.reviews || []).forEach(r => {
  const k = String(r.nome || "").trim().toLowerCase();
  (porNome[k] = porNome[k] || []).push({
    sku: p.product_id,
    prod: String(p.nome).slice(0, 40),
    nota: r.nota,
    txt: String(r.texto || "").slice(0, 55)
  });
}));

const dup = Object.entries(porNome).filter(([, v]) => v.length > 1);
console.log("produtos: " + arr.length);
console.log("nomes de review distintos: " + Object.keys(porNome).length);
console.log("nomes REPETIDOS em mais de um produto: " + dup.length);
console.log("");
dup.forEach(([k, v]) => {
  console.log("  " + k + "  x" + v.length);
  v.forEach(x => console.log("      " + x.sku + "  nota " + x.nota + "  | " + x.prod));
});

const total = arr.reduce((a, p) => a + (p.reviews || []).length, 0);
console.log("");
console.log("total de reviews no feed: " + total);

// textos repetidos entre produtos
const porTexto = {};
arr.forEach(p => (p.reviews || []).forEach(r => {
  const k = String(r.texto || "").trim().toLowerCase();
  (porTexto[k] = porTexto[k] || []).push(p.product_id);
}));
const dupT = Object.entries(porTexto).filter(([, v]) => v.length > 1);
console.log("textos de review repetidos: " + dupT.length);
dupT.slice(0, 6).forEach(([k, v]) => console.log("   x" + v.length + "  " + v.join(", ")));

/* ---------- guard ---------- */
dup.forEach(([k, v]) => {
  err("reviewer \"" + k + "\" reaparece em " + v.length + " produtos: " +
    v.map(x => x.sku).join(", "));
});
dupT.forEach(([, v]) => {
  err("texto de review byte-identico em " + v.length + " produtos: " + v.join(", "));
});
const notasPorNome = {};
arr.forEach(p => (p.reviews || []).forEach(r => {
  const k = String(r.nome || "").trim().toLowerCase();
  (notasPorNome[k] = notasPorNome[k] || new Set()).add(Number(r.nota));
}));
Object.entries(notasPorNome).forEach(([k, s]) => {
  if (s.size > 1) err("reviewer \"" + k + "\" tem notas diferentes (" + [...s].join(", ") + "), quebra o padrao fixo");
});

if (falhas.length) {
  console.log("");
  console.log("FALHAS (" + falhas.length + "):");
  falhas.slice(0, 12).forEach(f => console.log("  - " + f));
  if (falhas.length > 12) console.log("  ... +" + (falhas.length - 12) + " mais");
  process.exit(1);
}
console.log("OK — nenhum reviewer reaproveitado e nenhum texto repetido entre produtos");
