"use strict";
/* O admin precisa refletir o que a página de produto realmente mostra:
   1. admin.html carrega o ReviewData (a página deriva H1 e selo, não digita)
   2. o modal tem o bloco de prévia com H1, título SEO e selo
   3. a prévia usa as MESMAS funções da página, sem reimplementar
   4. os listeners são ligados uma vez só (abrirModal roda por produto)
   5. nomes de avaliador repetidos entre produtos são sinalizados
   6. o CSS dos blocos existe
   7. nenhum mojibake remanescente no admin (o arquivo foi gravado como cp1252) */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const ler = p => fs.readFileSync(path.join(ROOT, p), "utf8");

let falhas = [];
const err = m => falhas.push(m);

const html = ler("admin.html");
const js = ler("js/admin.js");
const css = ler("css/admin.css");

/* ---------- 1 ---------- */
if (!/js\/review-data\.js/.test(html)) err("admin.html nao carrega js/review-data.js");
if (!/js\/review-data\.js[\s\S]*js\/admin\.js/.test(html))
  err("review-data.js precisa vir antes de admin.js");
if (!/window\.ReviewData/.test(js)) err("admin.js nao usa window.ReviewData");

/* ---------- 2 ---------- */
["previa-h1", "previa-seo", "previa-selo", "previa-nota", "previa-bloco"].forEach(id => {
  if (!html.includes('id="' + id + '"')) err("admin.html sem #" + id);
});

/* ---------- 3 ---------- */
["h1", "titulo", "premio", "baseUnica", "nomeCurto"].forEach(fn => {
  if (!new RegExp("R\\." + fn + "\\(").test(js)) err("admin.js nao deriva com R." + fn + "()");
});
/* a página e o admin têm que chamar a mesma função, não duas cópias da regra.
   A página entra pelo wrapper HTML e o admin pelo dados, ambos sobre premio(). */
const build = ler("scripts/build.js");
if (!/ReviewData\.h1\(p, contexto\.produtos\)/.test(build)) err("build.js nao usa ReviewData.h1(p, contexto.produtos)");
if (!/ReviewData\.htmlPremio\(p, contexto\.produtos\)/.test(build)) err("build.js nao usa ReviewData.htmlPremio(p, contexto.produtos)");
if (!/function htmlPremio[\s\S]{0,200}premio\(p, todos\)/.test(ler("js/review-data.js")))
  err("htmlPremio nao envolve premio(): o admin e a pagina divergiriam");

/* ---------- 4 ---------- */
if (!/dataset\.previaLigada/.test(js)) err("ligarPrevia sem guarda: abrirModal por produto duplicaria listener");
const chamadas = (js.match(/ligarPrevia\(\);/g) || []).length;
if (chamadas !== 1) err("ligarPrevia chamada " + chamadas + "x, deveria ser 1x por abertura do modal");

/* ---------- 5 ---------- */
if (!/avisarReviewersRepetidos/.test(js)) err("admin.js nao sinaliza avaliador repetido");
if (!/campo-nome/.test(js)) err("admin.js nao le o campo de nome do avaliador");
if (!/FTC/.test(js)) err("o aviso de avaliador repetido deveria citar a FTC");

/* ---------- 6 ---------- */
[".previa-head", ".previa-row", ".previa-valor", ".previa-nota", ".previa-alerta", ".previa-dup"]
  .forEach(s => { if (!css.includes(s)) err("css/admin.css sem " + s); });

/* ---------- 7 ---------- */
/* o console do PowerShell mostra UTF-8 como cp1252 e parece mojibake; aqui
   comparamos bytes, então U+FFFD e as sequencias|latin1| indicate corrupcao */
[html, js].forEach((src, i) => {
  const nome = i === 0 ? "admin.html" : "js/admin.js";
  if (/Ã|Â|â€|â˜/.test(src)) err(nome + " ainda tem mojibake (UTF-8 lido como cp1252)");
  if (src.includes("�")) err(nome + " tem U+FFFD: encoding perdido, precisa corrigir a mao");
});

/* ---------- funcional: a derivação não pode estourar no admin ---------- */
const R = require(path.join(ROOT, "js", "review-data.js"));
const raw = JSON.parse(ler("products.json"));
const prods = Array.isArray(raw) ? raw : (raw.produtos || raw.items || []);
prods.forEach(p => {
  try {
    R.h1(p, prods); R.titulo(p, prods); R.premio(p, prods); R.baseUnica(p, prods);
  } catch (e) {
    err("derivacao estourou em " + p.product_id + ": " + e.message);
  }
});

/* o detector de repeticao precisa pegar o caso real do feed */
const cont = {};
prods.forEach(p => (p.reviews || []).forEach(r => {
  const k = String(r.nome || "").trim().toLowerCase();
  if (k) cont[k] = (cont[k] || 0) + 1;
}));
const repetidos = Object.entries(cont).filter(([, n]) => n > 1);
if (!repetidos.length) err("esperava nomes repetidos no feed para validar o detector");
else console.log("nomes repetidos que o detector precisa pegar: " + repetidos.length +
  " (" + repetidos.map(([k, n]) => k + " x" + n).join(", ") + ")");

console.log("produtos verificados: " + prods.length);
if (falhas.length) {
  console.log("\nFALHAS (" + falhas.length + "):");
  falhas.slice(0, 20).forEach(f => console.log("  - " + f));
  process.exit(1);
}
console.log("OK — admin carrega o ReviewData, deriva H1/selo com as mesmas funcoes da pagina, liga listener uma vez e sinaliza avaliador repetido");
