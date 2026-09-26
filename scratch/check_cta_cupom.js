"use strict";
/* Requisitos:
   1. "Compare prices at other stores" como secao INTEIRA no topo da review
   2. a frase tambem dentro da caixa de cupom (DSA)
   3. 3 botoes de revelar cupom (veredito, specs, reviews) + 1 no buybox
   4. algum titulo (H2) citando o cupom
   5. paridade SSG x product.html */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

const dir = path.join(ROOT, "products");
const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, "index.html")));
const shell = fs.readFileSync(path.join(ROOT, "product.html"), "utf8");

let falhas = [];
const err = m => falhas.push(m);
const janelaCupom = h => {
  const i = h.indexOf('class="coupon-box"');
  return i < 0 ? "" : h.slice(i, i + 1200);
};

/* ---------- 1-4: nas paginas SSG ---------- */
slugs.forEach(s => {
  const html = fs.readFileSync(path.join(dir, s, "index.html"), "utf8");
  const tag = s;

  /* 1: comparacao-sec no topo, acima do hero, e antes do veredito e do resto */
  const iHead = html.indexOf('class="review-hero-head"');
  const iGal = html.indexOf('class="pg-layout"');
  const iCmp = html.indexOf('class="detail-sec comparar-sec"');
  const iVer = html.indexOf("review-verdict");
  const iSpec = html.indexOf('id="specs-tabela"');
  const iRev = html.indexOf('id="reviews-sec"');
  const iFaq = html.indexOf('id="faq-lista"');
  if (iCmp < 0) err(tag + ": secao de comparacao ausente");
  else {
    if (iHead < 0) err(tag + ": header da review ausente");
    else if (!(iCmp < iHead && iHead < iGal))
      err(tag + ": comparacao deveria ficar no topo, acima do hero e antes da imagem");
    if (iCmp > iVer) err(tag + ": comparacao ainda aparece DEPOIS do veredito");
    if (iCmp > iSpec) err(tag + ": comparacao ainda aparece DEPOIS das specs");
    if (iCmp > iRev) err(tag + ": comparacao ainda aparece DEPOIS das reviews");
    if (iCmp > iFaq) err(tag + ": comparacao ainda aparece DEPOIS do FAQ");
  }

  /* 2: a frase dentro da caixa de cupom */
  const box = janelaCupom(html);
  if (!/compare prices at other stores/i.test(box)) err(tag + ": a frase DSA nao esta na caixa de cupom");

  /* 3: 3 CTAs de cupom + o do buybox */
  const ctas = (html.match(/class="cta-cupom"/g) || []).length;
  if (ctas !== 3) err(tag + ": esperado 3 CTA de cupom, veio " + ctas);
  if (!/id="btn-comprar"/.test(html)) err(tag + ": botao do buybox ausente");
  /* posicao: um CTA depois de cada uma das 3 secoes */
  const apos = (marcador) => {
    const a = html.indexOf(marcador);
    if (a < 0) return -1;
    return html.indexOf('class="cta-cupom"', a);
  };
  ["review-verdict", 'id="specs-tabela"', 'id="reviews-sec"'].forEach(mk => {
    const pos = apos(mk);
    if (pos < 0) err(tag + ": nenhum CTA depois de " + mk);
  });

  /* 4: H2 citando cupom */
  const h2s = (html.match(/<h2[^>]*>[\s\S]*?<\/h2>/g) || []).map(h => h.replace(/<[^>]+>/g, " "));
  if (!h2s.some(h => /coupon/i.test(h))) err(tag + ": nenhum H2 cita o cupom");
});

/* ---------- 5: paridade com o shell client-side ---------- */
const shellHead = shell.indexOf('class="review-hero-head"');
const shellGal = shell.indexOf('class="pg-layout"');
const shellCmp = shell.indexOf('id="comparar-sec"');
const shellVer = shell.indexOf('id="review-verdict-slot"');
if (shellCmp < 0) err("product.html: secao de comparacao ausente");
else {
  if (shellVer < 0) err("product.html: slot do veredito ausente");
  else if (shellCmp > shellVer) err("product.html: comparacao ainda depois do veredito");
  if (!(shellCmp < shellHead && shellHead < shellGal))
    err("product.html: comparacao deveria ficar no topo, acima do hero e antes da imagem");
}
const shellCtas = (shell.match(/class="cta-cupom"/g) || []).length;
if (shellCtas !== 3) err("product.html: esperado 3 CTA de cupom, veio " + shellCtas);
if (!/compare prices at other stores/i.test(janelaCupom(shell)))
  err("product.html: a frase DSA nao esta na caixa de cupom");
if (!(shell.match(/<h2[^>]*>[\s\S]*?<\/h2>/g) || []).some(h => /coupon/i.test(h.replace(/<[^>]+>/g, " "))))
  err("product.html: nenhum H2 cita o cupom");

/* ---------- CSS ---------- */
const css = fs.readFileSync(path.join(ROOT, "css", "style.css"), "utf8");
[".cta-cupom", ".cta-cupom-note", ".coupon-compare"].forEach(sel => {
  if (!css.includes(sel + " ") && !css.includes(sel + "{") && !css.includes(sel + "\n"))
    err("css: sem estilo para " + sel);
});
/* classes usadas no JS precisam existir no CSS */
[".js-reveal-cupom", ".js-ir-parceiro"].forEach(sel => {
  if (css.includes(sel)) err("css: " + sel + " nao deveria precisar de estilo (so hook de JS) e nao tem");
});

console.log("paginas SSG verificadas: " + slugs.length);
if (falhas.length) {
  console.log("\nFALHAS (" + falhas.length + "):");
  falhas.slice(0, 20).forEach(f => console.log("  - " + f));
  if (falhas.length > 20) console.log("  ... +" + (falhas.length - 20) + " mais");
  process.exit(1);
}
console.log("OK — comparacao no topo, frase na caixa de cupom, 3 CTAs e H2 do cupom, com paridade SSG/client");
