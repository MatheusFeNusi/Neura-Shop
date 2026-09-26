"use strict";
/* Confere a ordem das secoes na pagina gerada e no product.html:
   imagem + buybox/cupom devem vir logo abaixo do titulo do review. */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

/* No SSG o h1 e o veredito ja vem impressos. No product.html eles sao
   injetados em runtime por renderReview() nos slots abaixo, entao o check
   usa o slot como posicao equivalente. */
function ordem(html, clientSide) {
  const marks = [
    ["H1 review", clientSide ? /id="review-hero"/ : /<h1[^>]*class="review-page-title"/],
    ["galeria (imagem)", /class="pg-col-galeria"/],
    ["buybox / cupom", /class="buybox"/],
    ["veredito", clientSide ? /id="review-verdict-slot"/ : /class="review-verdict"/],
    ["comparar lojas", /id="comparar-sec"|comparar-sec"><h2>/],
    ["key specs", /class="key-specs"/],
    ["specs tabela", /id="specs-tabela"/],
    ["reviews", /id="reviews-sec"/]
  ];
  return marks
    .map(([nome, re]) => {
      const m = re.exec(html);
      return { nome, pos: m ? m.index : Infinity };
    })
    .filter(o => o.pos !== Infinity);
}

/* No SSG o h1 e o veredito ja vem impressos. No product.html eles sao
   injetados em runtime por renderReview() nos slots abaixo, entao o check
   usa o slot como posicao equivalente. */
function marksFor(clientSide) {
  return [
    ["H1 review", clientSide ? /id="review-hero"/ : /<h1[^>]*class="review-page-title"/],
    ["galeria (imagem)", /class="pg-col-galeria"/],
    ["buybox / cupom", /class="buybox"/],
    ["veredito", clientSide ? /id="review-verdict-slot"/ : /class="review-verdict"/],
    ["comparar lojas", /id="comparar-sec"|comparar-sec"><h2>/],
    ["key specs", /class="key-specs"/],
    ["specs tabela", /id="specs-tabela"/],
    ["reviews", /id="reviews-sec"/]
  ];
}

function report(label, html, clientSide) {
  const o = ordem(html, clientSide);
  console.log("\n=== " + label + " ===");
  o.forEach((x, i) => console.log("  " + (i + 1) + ". " + x.nome + "  @" + x.pos));

  const pos = n => { const f = o.find(x => x.nome === n); return f ? f.pos : Infinity; };
  const img = pos("galeria (imagem)"), buy = pos("buybox / cupom"), h1 = pos("H1 review"),
        verd = pos("veredito"), key = pos("key specs");
  const erros = [];
  if (!(img > h1)) erros.push("galeria NAO esta abaixo do h1");
  if (!(buy > h1)) erros.push("buybox NAO esta abaixo do h1");
  if (!(img < verd)) erros.push("galeria NAO esta antes do veredito");
  if (!(buy < verd)) erros.push("buybox NAO esta antes do veredito");
  if (!(verd < key)) erros.push("veredito NAO esta antes das key specs");
  console.log(erros.length ? "  FALHAS: " + erros.join("; ") : "  OK — imagem e cupom logo abaixo do titulo");
  return erros.length;
}

let falhas = 0;
const sample = path.join(ROOT, "products", "wq-w4-wq-w4-36v-10ah", "index.html");
falhas += report("SSG " + path.basename(path.dirname(sample)), fs.readFileSync(sample, "utf8"));
falhas += report("product.html (client-side)", fs.readFileSync(path.join(ROOT, "product.html"), "utf8"), true);

console.log(falhas ? "\nFALHAS: " + falhas : "\nOK");
process.exit(falhas ? 1 : 0);
