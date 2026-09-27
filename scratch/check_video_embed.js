"use strict";
/* Regressao do bug "A conexao com www.youtube.com foi recusada".

   Os 38 produtos apontam para URLs de BUSCA do YouTube (/results?search_query=),
   que nao tem video ID. A versao antiga de videoEmbedURL() devolvia a URL crua
   quando nao achava ID, e o modal a colocava em iframe: o YouTube responde
   X-Frame-Options e o navegador recusa o enquadramento.

   Este check trava:
     1. videoEmbed() so devolve URL com ID de video (nunca a original)
     2. URL de busca/canal nao vira embed
     3. sem embed, o botao abre em nova aba em vez de abrir o modal
     4. o rotulo distingue "Watch video" de "Search this product on YouTube"
     5. SSG e client-side usam os mesmos rotulos
     6. nenhuma pagina gerada iframe de YouTube
     7. o client reescreve o rotulo por seletor, nao por posicao de text node */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const ler = p => fs.readFileSync(path.join(ROOT, p), "utf8");

let falhas = [];
const err = m => falhas.push(m);

const R = require(path.join(ROOT, "js", "review-data.js"));
const app = ler("js/app.js");
const build = ler("scripts/build.js");
const shell = ler("product.html");

/* ---------- 1 ---------- */
const COM_ID = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://youtu.be/dQw4w9WgXcQ",
  "https://www.youtube.com/shorts/abc123XYZ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ"
];
COM_ID.forEach(u => {
  const e = R.videoEmbed(u);
  if (!/^https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]+\?rel=0&autoplay=1$/.test(e))
    err("videoEmbed falhou em " + u + " -> " + JSON.stringify(e));
});

/* ---------- 2 ---------- */
const SEM_ID = [
  "https://www.youtube.com/results?search_query=ENGWE+Y400",
  "https://www.youtube.com/@canal",
  "https://www.youtube.com/",
  "https://vimeo.com/123456",
  ""
];
SEM_ID.forEach(u => {
  const e = R.videoEmbed(u);
  if (e !== "") err("videoEmbed inventou embed para " + JSON.stringify(u) + " -> " + JSON.stringify(e));
  if (e && e === String(u).trim()) err("videoEmbed devolveu a URL original, que volta a ser enquadrada");
});

/* ---------- 3 ---------- */
if (!/if \(!embed\) \{ window\.open\(p\.video, "_blank", "noopener"\); return; \}/.test(app))
  err("renderVideo nao abre em nova aba quando nao ha video ID");
if (!/function videoEmbedURL\(url\) \{[\s\S]{0,120}return ReviewData\.videoEmbed\(url\)/.test(app))
  err("videoEmbedURL nao delega ao ReviewData (a copia local e o que divergiu)");
if (/return raw;/.test(app.split("function renderVideo")[0].split("function videoEmbedURL")[1] || ""))
  err("videoEmbedURL ainda tem o return raw, que devolvia a busca para o iframe");

/* ---------- 4 ---------- */
const comEmbed = { video: COM_ID[0] };
const semEmbed = { video: SEM_ID[0] };
if (R.videoRotulo(comEmbed) !== "Watch video")
  err("rotulo com video ID deveria ser 'Watch video', veio " + R.videoRotulo(comEmbed));
if (!/Search/.test(R.videoRotulo(semEmbed)))
  err("rotulo sem video ID deveria anunciar busca, veio " + R.videoRotulo(semEmbed));
if (R.videoRotulo({}) !== "Watch video") err("rotulo sem video deveria ter um padrao");

/* ---------- 5 ---------- */
if (!/ReviewData\.videoRotulo\(p\)/.test(build)) err("build.js nao usa ReviewData.videoRotulo(p)");
if (!/ReviewData\.videoEmbed\(p\.video\)/.test(build)) err("build.js nao decide o seta pelo videoEmbed");
if (!/class="video-label"/.test(shell)) err("product.html sem <span class=\"video-label\">: o client nao consegue reescrever o rotulo");
if (!/class="video-label"/.test(build)) err("build.js sem <span class=\"video-label\">");
if (!/\.video-label/.test(ler("css/style.css")) && !/\.btn-video/.test(ler("css/style.css")))
  err("css/style.css sem regra para .btn-video");

/* ---------- 6 ---------- */
const dir = path.join(ROOT, "products");
const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, "index.html")));
if (!slugs.length) err("nenhuma pagina gerada em products/");

let iframes = 0, comBusca = 0, comVideo = 0;
slugs.forEach(s => {
  const h = fs.readFileSync(path.join(dir, s, "index.html"), "utf8");
  iframes += (h.match(/<iframe src="https:\/\/www\.youtube\.com/g) || []).length;
  if (h.includes('class="video-label">Search this product on YouTube</span> <span class="video-ext">↗')) comBusca++;
  if (h.includes('class="video-label">Watch video</span> <span class="video-ext">▶')) comVideo++;
});
if (iframes) err(iframes + " iframe(s) de YouTube no HTML estatico: URL sem video ID nao e embeddable");

/* o rotulo estatico tem de bater com o que o client vai escrever */
const raw = JSON.parse(ler("products.json"));
const prods = Array.isArray(raw) ? raw : (raw.produtos || raw.items || []);
const esperadoBusca = prods.filter(p => p.video && !R.videoEmbed(p.video)).length;
const esperadoVideo = prods.filter(p => p.video && R.videoEmbed(p.video)).length;
if (comBusca !== esperadoBusca)
  err("paginas com rotulo de busca: " + comBusca + ", esperado " + esperadoBusca);
if (comVideo !== esperadoVideo)
  err("paginas com 'Watch video': " + comVideo + ", esperado " + esperadoVideo);

/* ---------- 7 ---------- */
if (/childNodes\[2\]/.test(app))
  err("renderVideo ainda edita a text node por indice: quebra se o botao for reformatado");
if (!/btn\.querySelector\("\.video-label"\)/.test(app))
  err("renderVideo nao reescreve o rotulo por seletor");

if (falhas.length) {
  console.log("\nFALHAS (" + falhas.length + "):");
  falhas.slice(0, 20).forEach(f => console.log("  - " + f));
  process.exit(1);
}
console.log("paginas verificadas: " + slugs.length);
console.log("OK — URL de busca nunca e enquadrada, sem video ID o botao abre em nova aba e SSG/client usam o mesmo rotulo");
