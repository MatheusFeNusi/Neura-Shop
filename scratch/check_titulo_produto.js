"use strict";
/* O nome do parceiro e um titulo de SEO inflado (ate 153 chars). Regra:
   - h1 usa ReviewData.nomeCurto (curto), nunca p.nome
   - o <p class="pg-title"> que repetia o nome logo abaixo do h1 nao existe
   - nenhum outro no-app.js escreve #pg-titulo (ele foi removido do DOM) */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const R = require(path.join(ROOT, "js", "review-data.js"));
const produtos = require(path.join(ROOT, "products.json")).produtos;

const dir = path.join(ROOT, "products");
const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, "index.html")));
const shell = fs.readFileSync(path.join(ROOT, "product.html"), "utf8");
const appSrc = fs.readFileSync(path.join(ROOT, "js", "app.js"), "utf8");

let falhas = [];
const err = m => falhas.push(m);

/* h1 tem que ser unico e curto em todos os produtos */
const h1s = new Set();
let maxLen = 0, maisLongo = "";
produtos.forEach(p => {
  const h = R.h1(p, produtos);
  h1s.add(h);
  if (h.length > maxLen) { maxLen = h.length; maisLongo = p.nome; }
  if (h.includes(p.nome) && p.nome.length > 60) err("h1 ainda usa o nome completo de " + p.nome);
  if (!h.startsWith(R.baseUnica(p, produtos))) err("h1 nao comeca com baseUnica: " + h.slice(0, 60));
});
if (h1s.size !== produtos.length) err("h1 duplicado: " + h1s.size + " unicos para " + produtos.length + " produtos");
if (maxLen > 120) err("h1 ainda longo demais (" + maxLen + " chars): " + maisLongo);

/* nas paginas geradas */
slugs.forEach(s => {
  const html = fs.readFileSync(path.join(dir, s, "index.html"), "utf8");
  if (/id="pg-titulo"/.test(html)) err(s + ": #pg-titulo ainda no HTML");
  if (/class="pg-title"/.test(html)) err(s + ": .pg-title ainda no HTML");
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || ["", ""])[1].replace(/<[^>]+>/g, "");
  if (h1.length > 120) err(s + ": h1 com " + h1.length + " chars");
  if (/Recommended Top Speed/i.test(h1)) err(s + ": h1 ainda com 'Recommended Top Speed'");
});

/* shell client-side */
if (/id="pg-titulo"/.test(shell)) err("product.html: #pg-titulo ainda no shell");
if (/class="pg-title"/.test(shell)) err("product.html: .pg-title ainda no shell");

/* app.js nao pode tocar num id removido (querySelector devolve null -> TypeError) */
if (/pg-titulo/.test(appSrc)) err("app.js ainda referencia #pg-titulo, que nao existe mais");

/* o nome completo ainda deve estar onde faz sentido: alt e JSON-LD */
const amostra = fs.readFileSync(path.join(dir, slugs[0], "index.html"), "utf8");
if (!/alt="[^"]{40,}"/.test(amostra)) err("alt da imagem perdeu o nome do produto");
if (!/"@type":"Product","name":"/.test(amostra)) err("JSON-LD Product perdeu o name");

/* CSS morto */
const css = fs.readFileSync(path.join(ROOT, "css", "style.css"), "utf8");
if (/\.pg-title/.test(css)) err("css: .pg-title continua definido sem nenhum elemento");

const maisLongoP = produtos.find(p => R.h1(p, produtos).length === maxLen);
console.log("produtos: " + produtos.length + " | h1 unicos: " + h1s.size + " | h1 mais longo: " + maxLen + " chars");
console.log("  maior h1: " + R.h1(maisLongoP, produtos));
if (falhas.length) {
  console.log("\nFALHAS (" + falhas.length + "):");
  falhas.slice(0, 15).forEach(f => console.log("  - " + f));
  process.exit(1);
}
console.log("OK — h1 curto e unico, .pg-title removido, nome completo preservado no alt e no JSON-LD");
