"use strict";
/* Cues de review editorial americana, sem mexer no layout:
   1. --font corrigido para a fonte que o HTML realmente carrega (Inter)
   2. serifa editorial no h1 e nos titulos de secao da review
   3. selo editorial (Best Value / Editor's Choice / Recommended) so quando
      os dados justificam
   4. linha "How we score" sob a byline
   5. "Bottom line" com score, preco, nota e cupom
   6. paridade SSG x client-side */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const R = require(path.join(ROOT, "js", "review-data.js"));

const raw = JSON.parse(fs.readFileSync(path.join(ROOT, "products.json"), "utf8"));
const produtos = Array.isArray(raw) ? raw : (raw.produtos || raw.items || []);

const dir = path.join(ROOT, "products");
const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, "index.html")));

let falhas = [];
const err = m => falhas.push(m);

/* ---------- 1-2: CSS ---------- */
const css = fs.readFileSync(path.join(ROOT, "css", "style.css"), "utf8");
if (!/--font:\s*"Inter"/.test(css)) err("css: --font nao aponta para Inter (a fonte que o HTML carrega)");
if (!/--font-serif:/.test(css)) err("css: --font-serif nao definido");
if (/:root[\s\S]*?--font:[^;]*IBM Plex/.test(css)) err("css: --font ainda pede IBM Plex Sans, que nunca e carregado");
[".review-page-title", ".review-verdict-head h2", ".detail-sec > h2"].forEach(sel => {
  const i = css.indexOf(sel + " {");
  if (i < 0) return err("css: sem regra para " + sel);
  if (!/font-family:\s*var\(--font-serif\)/.test(css.slice(i, i + 220)))
    err("css: " + sel + " nao usa a serifa editorial");
});

/* ---------- 3-5: regras do selo ---------- */
const comSelo = produtos.filter(p => R.premio(p, produtos));
const contagem = {};
comSelo.forEach(p => { const r = R.premio(p, produtos).rotulo; contagem[r] = (contagem[r] || 0) + 1; });
if (comSelo.length === produtos.length) err("todo mundo ganhou selo: o selo tem de ser merecido");
if (comSelo.length === 0) err("nenhum produto ganhou selo");

/* Best Value so com preco bem abaixo da mediana da categoria */
produtos.forEach(p => {
  const pr = R.premio(p, produtos);
  if (!pr || pr.rotulo !== "Best Value") return;
  const med = Number(R.notas(p, produtos).fatos.medianaCategoria);
  if (!(med > 0) || Number(R.fatos(p).preco) / med > 0.5)
    err(p.nome.slice(0, 40) + ": Best Value sem preco abaixo de 50% da mediana");
});

/* ---------- 3-5: nas paginas SSG ---------- */
slugs.forEach(s => {
  const html = fs.readFileSync(path.join(dir, s, "index.html"), "utf8");

  if (!/class="review-how-score"/.test(html)) err(s + ": linha 'How we score' ausente");
  else if (!/How our reviews work/.test(html)) err(s + ": linha 'How we score' sem link para a metodologia");
  if (!/href="\/about\.html#how-it-works"/.test(html))
    err(s + ": link da metodologia aponta para um destino que nao existe em about.html");

  if (!/class="review-bottom-line"/.test(html)) err(s + ": 'Bottom line' ausente");
  const bl = (() => {
    const i = html.indexOf('class="review-bottom-line"');
    return i < 0 ? "" : html.slice(i, i + 900);
  })();
  if (bl && !/\/10<\/strong> review score/.test(bl)) err(s + ": 'Bottom line' sem o review score");
  if (bl && !/retailer rating/.test(bl)) err(s + ": 'Bottom line' sem a nota do retailer");

  const awards = html.match(/<div class="review-award award-[a-z]+">/g) || [];
  if (awards.length > 1) err(s + ": mais de um selo editorial");
  if (awards.length === 1 && !/class="award-label">[^<]+</.test(html)) err(s + ": selo sem rotulo");
  /* selo e terceiro bloco do banner, entre o score e as tags */
  if (awards.length) {
    const iBan = html.indexOf("review-score-banner");
    const iScore = html.indexOf("score-box-main", iBan);
    const iAward = html.indexOf("review-award", iBan);
    const iTags = html.indexOf("score-highlight-tags", iBan);
    if (!(iScore < iAward && iAward < iTags)) err(s + ": selo fora de ordem dentro do score banner");
  }

  /* a hierarquia editorial nao pode invadir o conteudo */
  if (!/class="review-page-title"[^>]*>/.test(html)) err(s + ": h1 da review ausente");
});

/* ---------- 6: paridade com o shell client-side ---------- */
const shell = fs.readFileSync(path.join(ROOT, "product.html"), "utf8");
const app = fs.readFileSync(path.join(ROOT, "js", "app.js"), "utf8");
const build = fs.readFileSync(path.join(ROOT, "scripts", "build.js"), "utf8");
[app, build].forEach((src, i) => {
  const nome = i === 0 ? "app.js" : "build.js";
  ["htmlMetodologia", "htmlPremio", "htmlBottomLine"].forEach(fn => {
    if (!src.includes("ReviewData." + fn + "(")) err(nome + ": nao chama ReviewData." + fn);
  });
  const ordem = ["htmlMetodologia", "htmlPremio", "htmlBottomLine"].map(fn => src.indexOf("ReviewData." + fn + "("));
  if (!(ordem[0] < ordem[1] && ordem[1] < ordem[2])) err(nome + ": ordem divergente dos blocos do hero");
});
if (shell.includes("review-award") || shell.includes("review-bottom-line"))
  err("product.html: o shell nao deve duplicar o hero, que e renderizado por renderReview");

/* ---------- classes usadas existem no CSS ---------- */
[".review-how-score", ".review-award", ".award-label", ".review-bottom-line", ".bl-facts"].forEach(sel => {
  if (!css.includes(sel + " ") && !css.includes(sel + "{") && !css.includes(sel + "\n"))
    err("css: sem estilo para " + sel);
});

console.log("paginas SSG verificadas: " + slugs.length + " | produtos: " + produtos.length);
console.log("selos: " + JSON.stringify(contagem) + " | sem selo: " + (produtos.length - comSelo.length));
if (falhas.length) {
  console.log("\nFALHAS (" + falhas.length + "):");
  falhas.slice(0, 20).forEach(f => console.log("  - " + f));
  if (falhas.length > 20) console.log("  ... +" + (falhas.length - 20) + " mais");
  process.exit(1);
}
console.log("OK — fonte corrigida, serifa editorial, selo merecido, 'How we score' e 'Bottom line' com paridade SSG/client");
