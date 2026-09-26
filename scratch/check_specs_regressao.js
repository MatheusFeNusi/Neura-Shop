"use strict";
/* Regressao do bug: a regra antiga dropava "Reviews=0" porque "0" e
   substring de "36v10ah360wh". Estes produtos NAO podem perder Reviews. */
const path = require("path");
const R = require(path.join(__dirname, "..", "js", "review-data.js"));
const produtos = require(path.join(__dirname, "..", "products.json")).produtos;

let checados = 0, ruins = 0;
produtos.forEach(p => {
  const rf = R.fatos(p);
  const temReviewsZero = (p.specs || []).some(s => /^reviews?$/i.test(s.rotulo) && String(s.valor).trim() === "0");
  if (!temReviewsZero) return;
  checados++;
  const depois = R.specsVisiveis(p.specs, rf);
  const reviews = depois.find(s => /^reviews?$/i.test(s.rotulo));
  const ok = reviews && String(reviews.valor).trim() === "0";
  if (!ok) { ruins++; console.log("  ERRO " + (p.slug || p.nome) + ": Reviews nao sobreviveu"); }
  else console.log("  ok  Reviews=0 preservado (" + (p.slug || p.nome) + ")");
});
console.log("\nprodutos com Reviews=0: " + checados + " | perdidos: " + ruins);
console.log(ruins ? "\nFALHA" : "\nOK — a regressao do match por substring esta corrigida");
process.exit(ruins ? 1 : 0);
