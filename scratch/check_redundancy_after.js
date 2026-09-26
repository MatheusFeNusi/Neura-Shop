"use strict";
/* Mede a redundancia no HTML JA GERADO (nao no dado cru), e confirma que
   nada informativo foi perdido na poda. */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

const dir = path.join(ROOT, "products");
const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, "index.html")));

const visivel = html => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/\s+/g, " ");

let totalAntes = 0, totalAgora = 0;
const contagem = { retailer: [], disclosure: [], faq: [] };
let specsRows = 0, specRowsEsperado = 0;
let descComSpec = 0, descBlocos = 0;

slugs.forEach(s => {
  const html = fs.readFileSync(path.join(dir, s, "index.html"), "utf8");
  const t = visivel(html);

  totalAgora += t.length;
  contagem.retailer.push((t.match(/retailer/gi) || []).length);
  contagem.disclosure.push((t.match(/we may earn a commission|never sell|don\u2019t sell|don't sell/gi) || []).length);

  const faq = (html.match(/id="faq-lista">([\s\S]*?)<\/section>/) || ["", ""])[1];
  const nFaq = (faq.match(/class="faq-q"/g) || []).length;
  contagem.faq.push(nFaq);

  const tab = (html.match(/<table class="specs"[^>]*>([\s\S]*?)<\/table>/) || ["", ""])[1];
  specsRows += (tab.match(/<tr>/g) || []).length;

  const desc = (html.match(/id="pg-descricao">([\s\S]*?)<\/div>\s*<\/div>/) || ["", ""])[1];
  const dt = visivel(desc || "");
  descBlocos += (desc.match(/class="d-item"/g) || []).length;
  descComSpec += (dt.match(/\b\d+(?:\.\d+)?\s?(?:V|Ah|W|km\/h|kmh|km|kg|inch)\b/gi) || []).length;
});

const media = a => (a.reduce((x, y) => x + y, 0) / a.length).toFixed(1);
const max = a => Math.max(...a);

console.log("=== mediado nas " + slugs.length + " paginas geradas ===");
console.log("  'retailer' por pagina        media " + media(contagem.retailer) + "  (max " + max(contagem.retailer) + ")");
console.log("  frases de disclosure/pagina  media " + media(contagem.disclosure) + "  (max " + max(contagem.disclosure) + ")");
console.log("  perguntas de FAQ por pagina  media " + media(contagem.faq) + "  (max " + max(contagem.faq) + ")");
console.log("  linhas de specs por pagina   media " + (specsRows / slugs.length).toFixed(1));
console.log("  blocos de descricao/pagina   media " + (descBlocos / slugs.length).toFixed(1));
console.log("  specs citada na descricao   media " + (descComSpec / slugs.length).toFixed(1));
console.log("\n  texto visivel total: " + totalAgora + " chars (" + Math.round(totalAgora / slugs.length) + " por pagina)");

/* invariants: o que NAO pode ter sumido */
let semCardWarn = 0, semDisclosureFull = 0, faqVazia = 0, specsVazia = 0, descVazia = 0;
slugs.forEach(s => {
  const html = fs.readFileSync(path.join(dir, s, "index.html"), "utf8");
  if (!/class="card-warn"/.test(html)) semCardWarn++;
  if (!/Read our full disclosure/.test(html)) semDisclosureFull++;
  if (!/id="faq-lista">\s*<div class="faq-item"/.test(html)) faqVazia++;
  if (!/<table class="specs"[^>]*>\s*<tr>/.test(html)) specsVazia++;
  if (!/id="pg-descricao"><div class="d-item"/.test(html)) descVazia++;
});
console.log("\n=== o que tem que continuar existindo ===");
console.log("  paginas sem card-warn:            " + semCardWarn + "  (esperado 0)");
console.log("  paginas sem 'Read our disclosure': " + semDisclosureFull + "  (esperado 0)");
console.log("  paginas com FAQ vazia:            " + faqVazia + "  (esperado 0)");
console.log("  paginas com specs vazia:          " + specsVazia + "  (esperado 0)");
console.log("  paginas com descricao vazia:      " + descVazia + "  (esperado 0)");
const bad = semCardWarn + semDisclosureFull + faqVazia + specsVazia + descVazia;
console.log(bad ? "\nFALHAS: " + bad : "\nOK — disclosure canonico preservado e nenhum bloco ficou vazio");
process.exit(bad ? 1 : 0);
