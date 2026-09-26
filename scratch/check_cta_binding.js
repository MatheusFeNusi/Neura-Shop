"use strict";
/* Teste FUNCIONAL do binding dos CTAs de cupom.
   O bloco e extraido de js/app.js de verdade (mesma tecnica do
   check_render_review) e executado contra um DOM minimo, com stubs de
   revelarCupom/irAoParceiro, para provar que:
     - o listener dispara a acao certa
     - o guard data-bound impede listener duplicado
     - o botao e reescrito corretamente conforme cupom/esgotado */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(ROOT, "js", "app.js"), "utf8");

const grab = re => {
  const m = app.match(re);
  if (!m) { console.log("FAIL: nao achei " + re); process.exit(1); }
  return m[0];
};
/* o bloco exato que inserimos em initProduto, ate antes de renderSimilares */
const bloco = (() => {
  const ini = app.indexOf("  /* ---------- CTAs de cupom repetidos");
  const fim = app.indexOf("\n  renderSimilares(", ini);
  if (ini < 0 || fim < 0) { console.log("FAIL: nao achei o bloco dos CTAs"); process.exit(1); }
  return app.slice(ini, fim);
})();

let falhas = [];
const ok = (cond, msg) => { if (!cond) falhas.push(msg); };

function cenario(nome, { cupom, esgotado, esperadoClasse, esperadoTexto, esperadoAcao }) {
  const acoes = [];
  /* texto inicial = o que o HTML estatico traz */
  const inicial = esgotado ? "Currently unavailable"
    : cupom ? "Reveal coupon code" : "Check price at retailer";
  const botoes = [0, 1, 2].map(() => ({
    _attrs: {}, _listeners: {},
    classList: {
      _s: new Set(["btn-buy-big", "js-reveal-cupom"]),
      add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); },
      contains(c) { return this._s.has(c); }
    },
    get className() { return [...this.classList._s].join(" "); },
    set className(v) { this.classList._s = new Set(String(v).split(/\s+/)); },
    getAttribute(k) { return this._attrs[k]; },
    setAttribute(k, v) { this._attrs[k] = v; },
    addEventListener(ev, fn) { (this._listeners[ev] = this._listeners[ev] || []).push(fn); },
    click() { (this._listeners.click || []).forEach(f => f()); },
    textContent: inicial, disabled: false
  }));
  const document = {
    querySelectorAll: sel => (sel === ".js-reveal-cupom, .js-ir-parceiro" ? botoes : [])
  };
  const p = { cupom: cupom, merchant_nome: "Loja Teste" };
  const esgotadoVar = !!esgotado;
  const revelarCupom = () => acoes.push("revelarCupom");
  const irAoParceiro = () => acoes.push("irAoParceiro");
  const esc = s => String(s == null ? "" : s);

  const fn = new Function("document", "p", "esgotado", "revelarCupom", "irAoParceiro", "esc", bloco);
  fn(document, p, esgotadoVar, revelarCupom, irAoParceiro, esc);

  botoes[0].click();

  const antes = falhas.length;
  ok(botoes.every(b => b.getAttribute("data-bound") === "1"),
    nome + ": nem todos os botoes receberam data-bound");
  ok(acoes.length === 1, nome + ": esperado 1 acao no clique, veio " + acoes.length);
  ok(acoes[0] === esperadoAcao, nome + ": esperava " + esperadoAcao + ", veio " + acoes[0]);
  ok(botoes[0].className.includes(esperadoClasse), nome + ": esperava ." + esperadoClasse + ", veio ." + botoes[0].className);
  ok(botoes[0].textContent === esperadoTexto, nome + ": texto do botao = " + JSON.stringify(botoes[0].textContent) + ", esperava " + JSON.stringify(esperadoTexto));
  console.log("  " + nome + " -> " + (falhas.length > antes ? "FALHOU" : "ok") + " (acao: " + acoes[0] + ", botao: " + JSON.stringify(botoes[0].textContent) + ")");
  return botoes;
}

console.log("=== binding dos CTAs de cupom ===");
cenario("com cupom", {
  cupom: "ABC123", esgotado: false,
  esperadoClasse: "js-reveal-cupom", esperadoTexto: "Reveal coupon code", esperadoAcao: "revelarCupom"
});
cenario("sem cupom", {
  cupom: null, esgotado: false,
  esperadoClasse: "js-ir-parceiro", esperadoTexto: "Check price at Loja Teste", esperadoAcao: "irAoParceiro"
});
cenario("esgotado", {
  cupom: "ABC123", esgotado: true,
  esperadoClasse: "btn-buy-big", esperadoTexto: "Currently unavailable", esperadoAcao: "irAoParceiro"
});

/* guard data-bound: rodar o bloco 2x nao pode duplicar listener */
{
  const acoes = [];
  const b = {
    _attrs: {}, _listeners: {},
    classList: { _s: new Set(["btn-buy-big", "js-reveal-cupom"]), add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); }, contains(c) { return this._s.has(c); } },
    get className() { return [...this.classList._s].join(" "); },
    set className(v) { this.classList._s = new Set(String(v).split(/\s+/)); },
    getAttribute(k) { return this._attrs[k]; }, setAttribute(k, v) { this._attrs[k] = v; },
    addEventListener(ev, fn) { (this._listeners[ev] = this._listeners[ev] || []).push(fn); },
    click() { (this._listeners.click || []).forEach(f => f()); },
    textContent: "Reveal coupon code", disabled: false
  };
  const document = { querySelectorAll: () => [b] };
  const fn = new Function("document", "p", "esgotado", "revelarCupom", "irAoParceiro", "esc", bloco);
  fn(document, { cupom: "X", merchant_nome: "L" }, false, () => acoes.push("r"), () => {}, s => String(s));
  fn(document, { cupom: "X", merchant_nome: "L" }, false, () => acoes.push("r"), () => {}, s => String(s));
  b.click();
  ok(acoes.length === 1, "data-bound: segundo run duplicou listener (" + acoes.length + " acoes)");
  console.log("  guard data-bound -> " + (acoes.length === 1 ? "ok" : "falhou") + " (" + acoes.length + " acao apos 2 binds)");
}

if (falhas.length) { console.log("\nFALHAS:"); falhas.forEach(f => console.log("  - " + f)); process.exit(1); }
console.log("\nOK — CTA de cupom dispara a acao certa e nao duplica listener");
