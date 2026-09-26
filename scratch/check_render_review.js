"use strict";
/* Executa a renderReview REAL extraida de js/app.js contra um DOM minimo.
   Objetivo: pegar ReferenceError/erro de digitacao no caminho client-side,
   que o build SSG nao cobre. */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

const app = fs.readFileSync(path.join(ROOT, "js", "app.js"), "utf8");
const ReviewData = require(path.join(ROOT, "js", "review-data.js"));
const PRODUTOS = require(path.join(ROOT, "products.json")).produtos;

const grab = re => { const m = app.match(re); if (!m) { console.log("FAIL: nao achei " + re); process.exit(1); } return m[0]; };
const src = grab(/function setMetaDescricao\(p, rev\) \{[\s\S]*?\n\}/) + "\n" +
            grab(/function renderReview\(p\) \{[\s\S]*?\n\}/);

const nos = {};
const mk = () => ({ innerHTML: "", textContent: "", content: "", appendChild() {} });
const head = { appendChild() {} };
const document = {
  getElementById: id => (nos[id] = nos[id] || mk()),
  querySelector: () => null,
  createElement: () => mk(),
  head
};
const sandbox = {
  ReviewData, PRODUTOS, document, console,
  window: { ReviewData },
  location: { origin: "https://wattwheel.test" },
  esc: s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])),
  fmt: n => "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 }),
  $: sel => document.getElementById(sel.replace("#", ""))
};

let falhas = 0;
PRODUTOS.forEach(p => {
  Object.keys(nos).forEach(k => delete nos[k]);
  try {
    const fn = new Function("ReviewData", "PRODUTOS", "document", "window", "location", "esc", "fmt", "$", src + "\nreturn renderReview;");
    fn(ReviewData, PRODUTOS, document, sandbox.window, sandbox.location, sandbox.esc, sandbox.fmt, sandbox.$)(p);
  } catch (e) {
    console.log("FAIL renderReview em", p.id, "->", e.message);
    falhas++;
    return;
  }
  const hero = nos["review-hero"];
  const slot = nos["review-verdict-slot"];
  const key = nos["key-specs"];
  if (!hero || !/review-page-title/.test(hero.innerHTML)) { console.log("FAIL hero vazio/incompleto", p.id); falhas++; }
  if (!slot || !/review-verdict/.test(slot.innerHTML)) { console.log("FAIL veredito vazio", p.id); falhas++; }
  if (!key || !/key-spec/.test(key.innerHTML)) { console.log("FAIL key-specs vazio", p.id); falhas++; }
  if (!/review:/.test(document.title)) { console.log("FAIL title nao é de review", p.id); falhas++; }
  const md = nos[""] && nos[""].content;
});

console.log("\nprodutos testados:", PRODUTOS.length);
console.log(falhas ? "FALHAS: " + falhas : "OK — renderReview roda em todos os produtos sem erro");
process.exit(falhas ? 1 : 0);
