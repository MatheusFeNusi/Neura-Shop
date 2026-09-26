"use strict";
/* Nenhum bloco 【...】 pode desaparecer inteiro, e as palavras de recurso
   (freio, luz, suspensao, montagem, garantia...) tem de sobrar. */
const path = require("path");
const R = require(path.join(__dirname, "..", "js", "review-data.js"));
const produtos = require(path.join(__dirname, "..", "products.json")).produtos;

const RE_BLOCO = /^[\s\S]*?【([^】]+)】/;
const extras = s => (String(s).match(R.RE_EXTRAS_TEST || /\b(brakes?|disc|lights?|led|headlight|taillight|suspension|shock|assembly|assembled|tools?|warranty|guarantee|belt|rack|fender|display|throttle|pedals?|alarm|horn|usb|charger|waterproof|lock|removable|removal|support|instructions)\b/gi) || []).length;

let blocosAntes = 0, blocosDepois = 0, extrasAntes = 0, extrasDepois = 0, perdidos = [];

produtos.forEach(p => {
  const antes = String(p.descricao || "").split(/\n+/).filter(l => RE_BLOCO.test(l));
  const depois = R.htmlDescricao(p.descricao);
  const nDepois = (depois.match(/class="d-item"/g) || []).length;
  blocosAntes += antes.length; blocosDepois += nDepois;
  if (nDepois < antes.length) perdidos.push((p.slug || p.nome) + ": " + antes.length + " -> " + nDepois);
  extrasAntes += extras(p.descricao);
  extrasDepois += extras(depois.replace(/<[^>]+>/g, " "));
});

console.log("blocos 【】 antes: " + blocosAntes + " | depois: " + blocosDepois);
console.log("palavras de recurso antes: " + extrasAntes + " | depois: " + extrasDepois +
  " (" + (extrasDepois >= extrasAntes ? "integralmente preservadas" : "PERDIDOS " + (extrasAntes - extrasDepois) + "!") + ")");
if (perdidos.length) console.log("\nblocos removidos:\n  " + perdidos.join("\n  "));
else console.log("\nnenhum bloco foi apagado por inteiro");

const ok = !perdidos.length && extrasDepois >= extrasAntes;
console.log(ok ? "\nOK" : "\nFALHA");
process.exit(ok ? 0 : 1);
