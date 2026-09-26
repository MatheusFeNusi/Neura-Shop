"use strict";
const path = require("path");
const ROOT = path.join(__dirname, "..");
const R = require(path.join(ROOT, "js", "review-data.js"));
const d = require(path.join(ROOT, "products.json"));

const classes = new Set();
const ids = new Set();
const tags = new Set();

d.produtos.forEach(p => {
  const html = [
    R.htmlScoreBanner(p, d.produtos), R.htmlSelos(p), R.htmlVeredito(p, d.produtos),
    R.htmlProsCons(p, d.produtos), R.htmlBarras(p, d.produtos), R.htmlRessalvas(p)
  ].join("\n");
  (html.match(/class="[^"]+"/g) || []).forEach(m => m.slice(7, -1).split(/\s+/).forEach(c => classes.add(c)));
  (html.match(/id="[^"]+"/g) || []).forEach(m => ids.add(m.slice(4, -1)));
  (html.match(/<([a-z0-9]+)[\s>]/gi) || []).forEach(m => tags.add(m.slice(1).toLowerCase()));
});

const css = require("fs").readFileSync(path.join(ROOT, "css", "style.css"), "utf8");
const faltando = [...classes].filter(c => css.indexOf("." + c) === -1).sort();
const varFaltando = [...css.matchAll(/var\((--[a-z0-9-]+)\)/gi)]
  .map(m => m[1])
  .filter((v, i, a) => a.indexOf(v) === i)
  .filter(v => css.indexOf(v + ":") === -1);

console.log("ids emitidos:", [...ids].sort().join(", "));
console.log("\nclasses SEM estilo no css (" + faltando.length + "):");
faltando.forEach(c => console.log("  ." + c));
console.log("\nvars --x usadas mas NAO definidas (" + varFaltando.length + "):");
varFaltando.forEach(v => console.log("  " + v));
