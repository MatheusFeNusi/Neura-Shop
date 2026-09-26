"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ReviewData = require(path.join(ROOT, "js", "review-data.js"));

const dir = path.join(ROOT, "products");
const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, "index.html")));

let erros = 0;
const titulos = new Set();
const descs = new Set();
const canonicals = new Set();
const vereditos = new Map();
const prosSets = new Set();
const consSets = new Set();
const dupTitulo = [];
const dupDesc = [];

slugs.forEach(s => {
  const f = path.join(dir, s, "index.html");
  const h = fs.readFileSync(f, "utf8");
  const rel = "products/" + s + "/index.html";

  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) { console.log("FAIL h1=" + h1, rel); erros++; }

  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (title) { if (titulos.has(title)) dupTitulo.push(rel); titulos.add(title); }
  if (title.length > 75) console.log("WARN title longo (" + title.length + ")", rel);

  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  if (desc) { if (descs.has(desc)) dupDesc.push(rel); descs.add(desc); }

  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  if (canon) { if (canonicals.has(canon)) { console.log("FAIL canonical duplicado", rel); erros++; } canonicals.add(canon); }

  if (!/class="review-verdict"/.test(h)) { console.log("FAIL sem review-verdict", rel); erros++; }
  if (!/class="review-pros-cons"/.test(h)) { console.log("FAIL sem pros/cons", rel); erros++; }
  if (!/class="review-rating-bars"/.test(h)) { console.log("FAIL sem barras", rel); erros++; }
  if (!/class="key-specs"/.test(h)) { console.log("FAIL sem key-specs", rel); erros++; }

  // JSON-LD
  const blocks = h.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || [];
  if (!blocks.length) { console.log("FAIL sem JSON-LD", rel); erros++; }
  blocks.forEach(b => {
    const s = b.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
    try {
      const o = JSON.parse(s);
      const tipos = o["@graph"] ? o["@graph"].map(x => x["@type"]).join(",") : o["@type"];
      if (!/Product/.test(tipos)) { console.log("FAIL sem Product no grafo", rel); erros++; }
    } catch (e) {
      console.log("FAIL JSON-LD invalido:", e.message, rel); erros++;
    }
  });

  // seed
  const seed = h.match(/<script type="application\/json" id="produto-seed">([\s\S]*?)<\/script>/);
  if (!seed) { console.log("FAIL sem seed", rel); erros++; return; }
  const p = JSON.parse(seed[1].replace(/\\u003c/g, "<"));
  const n = ReviewData.notas(p, JSON.parse(fs.readFileSync(path.join(ROOT, "products.json"), "utf8")).produtos);
  const v = ReviewData.veredito(n);
  vereditos.set(v.rotulo, (vereditos.get(v.rotulo) || 0) + 1);
  prosSets.add(ReviewData.pros(p).join("|"));
  consSets.add(ReviewData.cons(p).join("|"));

  // h1 contém o nome do produto?
  const h1txt = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "";
  if (h1txt.indexOf("review") === -1) { console.log("FAIL h1 sem 'review'", rel); erros++; }
});

console.log("\npáginas:", slugs.length);
console.log("títulos únicos:", titulos.size, "/", slugs.length, dupTitulo.length ? "DUP: " + dupTitulo.join(", ") : "");
console.log("meta descriptions únicas:", descs.size, "/", slugs.length, dupDesc.length ? "DUP: " + dupDesc.join(", ") : "");
console.log("canonicals únicos:", canonicals.size, "/", slugs.length);
console.log("vereditos:", [...vereditos.entries()].map(e => e[0] + "=" + e[1]).join(", "));
console.log("combinações de pros únicas:", prosSets.size);
console.log("combinações de cons únicas:", consSets.size);
console.log(erros ? "\nERROS: " + erros : "\nOK — nenhum erro");
