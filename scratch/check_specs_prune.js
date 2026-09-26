"use strict";
/* A poda da tabela so pode remover Voltage/Battery/Top speed/Size QUANDO o
   valor bater com o key-spec. Reviews/Rating/Price/Brand/Category/Condition/
   Availability nunca podem ser descartados. */
const path = require("path");
const R = require(path.join(__dirname, "..", "js", "review-data.js"));
const produtos = require(path.join(__dirname, "..", "products.json")).produtos;

const NUNCA_REMOVER = /^(reviews?|rating|price|list price|brand|category|condition|availability|warranty)$/i;
const removidos = {},keptNomes = {};
let falhas = 0, totalRemovidos = 0, comPoda = 0;

produtos.forEach(p => {
  const rf = R.fatos(p);
  const antes = p.specs || [];
  const depois = R.specsVisiveis(antes, rf);
  const idsDepois = depois.map(s => s.rotulo);
  const fora = antes.filter(s => !idsDepois.includes(s.rotulo));

  if (fora.length) { comPoda++; totalRemovidos += fora.length; }
  fora.forEach(s => { removidos[s.rotulo] = (removidos[s.rotulo] || 0) + 1; });
  depois.forEach(s => { keptNomes[s.rotulo] = (keptNomes[s.rotulo] || 0) + 1; });

  fora.forEach(s => {
    if (NUNCA_REMOVER.test(s.rotulo.trim())) {
      falhas++;
      console.log("  ERRO: descartou '" + s.rotulo + "=" + s.valor + "' (" + (p.slug || p.nome) + ")");
    }
  });
  /* se o rotulo sobreviveu em outro produto, tem de sobreviver aqui tambem */
});

console.log("=== o que foi descartado da tabela ===");
Object.keys(removidos).sort().forEach(k => console.log("  " + String(removidos[k]).padStart(3) + "x  " + k));
console.log("\n=== o que sobrou ===");
Object.keys(keptNomes).sort().forEach(k => console.log("  " + String(keptNomes[k]).padStart(3) + "x  " + k));
console.log("\nprodutos: " + produtos.length + " | linhas descartadas: " + totalRemovidos + " em " + comPoda + " produtos");
console.log(falhas ? "\nFALHAS: " + falhas : "\nOK — nenhuma linha de review/preço/condição foi descartada");
process.exit(falhas ? 1 : 0);
