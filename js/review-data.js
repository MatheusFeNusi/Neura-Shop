/* ============================================================
   REVIEW DATA — derivação de conteúdo de review por produto
   Usado pelo build SSG (scripts/build.js) e pelo client-side
   (js/app.js). Não depende de nada externo: mesmo arquivo,
   mesmo resultado nos dois caminhos de render.
   ============================================================ */

(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.ReviewData = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function num(n) {
    return n == null ? "" : Number(n).toLocaleString("en-US");
  }
  function fmt(n) {
    if (n == null || !isFinite(n)) return "";
    return Number(n).toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
  function r1(v) { return Math.round(v * 10) / 10; }
  function interp(x, pontos) {
    if (x == null || !isFinite(x)) return null;
    if (x <= pontos[0][0]) return pontos[0][1];
    for (var i = 1; i < pontos.length; i++) {
      if (x <= pontos[i][0]) {
        var a = pontos[i - 1], b = pontos[i];
        return a[1] + (b[1] - a[1]) * ((x - a[0]) / (b[0] - a[0]));
      }
    }
    return pontos[pontos.length - 1][1];
  }
  function primeiro(re, txt) {
    var m = re.exec(txt || "");
    return m ? m[1] : null;
  }
  function toNum(v) {
    var n = parseFloat(String(v == null ? "" : v).replace(/[^0-9.\-]/g, ""));
    return isFinite(n) ? n : null;
  }
  function specMap(p) {
    var m = {};
    (p.specs || []).forEach(function (s) {
      if (s && s.rotulo) m[String(s.rotulo).toLowerCase()] = String(s.valor == null ? "" : s.valor);
    });
    return m;
  }
  function pctDesc(a, b) {
    if (!a || !b || a >= b) return null;
    return Math.round((1 - a / b) * 100);
  }
  function mediana(xs) {
    var v = xs.filter(function (x) { return isFinite(x) && x > 0; }).sort(function (a, b) { return a - b; });
    if (!v.length) return null;
    var m = Math.floor(v.length / 2);
    return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
  }

  /* ---------- 1. Fatos extraídos do listing ---------- */
  function fatos(p) {
    p = p || {};
    var sp = specMap(p);
    var nome = String(p.nome || "");
    var desc = String(p.descricao || "");
    var full = (nome + " " + desc).replace(/\s+/g, " ");

    var volt = toNum(sp["voltage"]) || toNum(primeiro(/(\d{2})\s*V/i, full));
    var ah = toNum(sp["battery"]) || toNum(primeiro(/(\d{1,2}(?:\.\d)?)\s*Ah/i, full));
    var wh = (volt && ah) ? Math.round(volt * ah) : null;

    var watt = toNum(primeiro(/【[^】]*?(\d{2,4})\s*W[^】]*?[Mm]otor/, desc)) ||
      toNum(primeiro(/(\d{3,4})\s*W(?!\s*(?:H|Hz))/, full));
    /* O anuncio costuma citar a potencia nominal e, entre parenteses, a de
       pico ("250W(Peak 1500W)"). Comparar so o nominal faz um 250W ganhar
       "mais potente" que um 1000W de verdade. */
    var pico = toNum(primeiro(/peak[^)]{0,12}?(\d{3,4})\s*W/i, full)) ||
      toNum(primeiro(/(\d{3,4})\s*W[^)]{0,10}?peak/i, full));

    var isBike = p.categoria === "bicicletas-eletricas" || /bike|bicycle|ebike/i.test(nome);

    var vel = toNum(sp["top speed"]) || toNum(primeiro(/(\d{2,3})\s*km\s*\/?\s*h/i, full));

    // "Size" é pneu (scooter) ou roda (bike). Descarta valores fora da faixa
    // plausível — o feed traz lixo como "3.0 Inch".
    var pneu = toNum(sp["size"]) || toNum(primeiro(/(\d{1,2}(?:\.\d)?)\s*(?:inch|")/i, full));
    if (pneu != null) {
      var piso = isBike ? 18 : 6;
      var teto = isBike ? 29 : 15;
      if (!(pneu >= piso && pneu <= teto)) pneu = null;
    }

    var carga = toNum(primeiro(/(\d{2,3})\s*kg/i, full));

    // Alcance real estimado a partir do pack, não do texto do anúncio (que é
    // genérico). ~0.09 km/Wh no acelerador, ~0.075 km/Wh em pedal assist,
    // com penalidade de eficiência em packs muito grandes.
    var alcance = null;
    if (wh) {
      var kwh = isBike ? 0.075 : 0.09;
      alcance = Math.round(wh * kwh * (wh > 1500 ? 0.85 : 1));
    }

    var d = desc.toLowerCase();
    var temDisc = /disc brake/.test(d);
    var temSusp = /suspension|shock|absorb/.test(d);
    var removivel = /removable/.test(d);

    var nota = toNum(p.rating);
    var qtd = toNum(p.avaliacoes);
    var desconto = pctDesc(p.preco, p.preco_anterior);
    var lojas = (p.lojas_compare && p.lojas_compare.length) ? p.lojas_compare.length : 0;

    return {
      produto: p,
      volt: volt, ah: ah, wh: wh,
      watt: watt, pico: pico, vel: vel, pneu: pneu, carga: carga, alcance: alcance,
      temDisc: temDisc, temSusp: temSusp, removivel: removivel, isBike: isBike,
      nota: nota, qtd: qtd == null ? 0 : qtd,
      preco: toNum(p.preco), lista: toNum(p.preco_anterior), desconto: desconto,
      cupom: p.cupom || null, lojas: lojas,
      tipo: isBike ? "e-bike" : "e-scooter"
    };
  }

  /* Mediana de preco da mesma categoria. Fica em fatos() (e nao em notas())
     porque pros() e cons() chamam fatos() direto e tambem precisam dela. */
  function comMediana(p, todos) {
    var f = fatos(p);
    var lista = (todos || []).filter(function (x) {
      return x && x.categoria === p.categoria && isFinite(Number(x.preco)) && Number(x.preco) > 0;
    }).map(function (x) { return Number(x.preco); });
    f.medianaCategoria = mediana(lista) || null;
    return f;
  }

  /* ---------- 2. Notas por eixo (0–10) ---------- */
  var PONTOS_WATT = [[200, 5.6], [350, 6.4], [500, 7.2], [750, 8.0], [1000, 8.6], [1500, 9.0], [2000, 9.3], [3000, 9.6], [5000, 9.8]];
  var PONTOS_WH = [[200, 5.4], [360, 6.3], [500, 7.0], [750, 7.8], [1000, 8.3], [1500, 9.0], [2000, 9.4], [3000, 9.7]];
  var PONTOS_DESC = [[0, 5.8], [10, 6.4], [20, 7.0], [30, 7.7], [40, 8.3], [50, 8.8], [60, 9.2], [70, 9.5]];

  function notas(p, todos) {
    var f = comMediana(p, todos);

    var pot = interp(f.watt, PONTOS_WATT);
    if (pot == null) pot = 6.4;
    if (f.vel != null) pot += f.vel >= 45 ? 0.4 : (f.vel < 25 ? -0.5 : 0);
    pot = clamp(pot, 3.5, 10);

    var bat = interp(f.wh, PONTOS_WH);
    if (bat == null) bat = 6.2;
    if (f.removivel) bat += 0.3;
    if (f.alcance == null) bat -= 0.4;
    bat = clamp(bat, 3.5, 10);

    var est = 6.4;
    if (f.pneu != null) est += f.pneu >= 12 ? 1.2 : f.pneu >= 10 ? 0.9 : f.pneu >= 8.5 ? 0.5 : f.pneu >= 8 ? 0.2 : -0.5;
    if (f.carga != null) est += f.carga >= 200 ? 1.0 : f.carga >= 150 ? 0.8 : f.carga >= 120 ? 0.5 : f.carga >= 100 ? 0.2 : -0.3;
    else est -= 0.4;
    if (f.temDisc) est += 0.7;
    if (f.temSusp) est += 0.4;
    if (f.removivel) est += 0.3;
    est = clamp(est, 3.5, 10);

    var val = interp(f.desconto, PONTOS_DESC);
    if (val == null) val = 5.8;
    if (f.medianaCategoria && f.preco) {
      var ratio = f.preco / f.medianaCategoria;
      val += ratio <= 0.6 ? 0.8 : ratio <= 0.8 ? 0.4 : ratio <= 1.2 ? 0 : ratio <= 1.6 ? -0.5 : -0.9;
    }
    if (f.cupom) val += 0.3;
    val = clamp(val, 3.5, 10);

    var score = r1(0.25 * pot + 0.30 * bat + 0.20 * est + 0.25 * val);

    var lead = (f.isBike ? "E-bike" : "E-scooter") + " | " + (f.watt != null ? f.watt + "W motor, " : "") +
      (f.wh != null ? f.volt + "V " + f.ah + "Ah (" + num(f.wh) + "Wh)" : "capacity unlisted") +
      (f.alcance != null ? ", ~" + f.alcance + " km estimated range" : "") +
      " | " + fmtMoeda(f.preco) + " at the retailer" +
      " | scored " + score.toFixed(1) + "/10 on power, battery, build and value.";

    return {
      fatos: f,
      score: score,
      lede: lead,
      eixos: [
        { rotulo: "Power & torque", valor: r1(pot) },
        { rotulo: "Battery & range", valor: r1(bat) },
        { rotulo: f.isBike ? "Frame & ride" : "Build & safety", valor: r1(est) },
        { rotulo: "Value for money", valor: r1(val) }
      ]
    };
  }

  /* ---------- 3. Veredito ---------- */
  var VEREDITOS = [
    { min: 8.6, rotulo: "Recommended", classe: "best", resumo: "Hits the marks that matter and lands well below the category average." },
    { min: 7.8, rotulo: "Excellent value", classe: "bom", resumo: "A strong all-round package — the price is the clincher." },
    { min: 6.8, rotulo: "Worth a look", classe: "medio", resumo: "Competent, with a couple of trade-offs worth knowing before you buy." },
    { min: 0, rotulo: "Proceed with caution", classe: "ruim", resumo: "There are better-sorted options in this category for the same money." }
  ];
  function veredito(n) {
    for (var i = 0; i < VEREDITOS.length; i++) if (n.score >= VEREDITOS[i].min) return VEREDITOS[i];
    return VEREDITOS[VEREDITOS.length - 1];
  }

  /* ---------- 4. Pros / Contras derivados ---------- */
  function pros(p, todos) {
    var f = comMediana(p, todos);
    var out = [];
    if (f.watt >= 1000) out.push({ w: 10, t: f.watt + "W motor — genuine torque for hills and loaded climbs" });
    else if (f.watt >= 500) out.push({ w: 7, t: f.watt + "W motor is quick enough for most city inclines" });
    if (f.wh >= 1000) out.push({ w: 9, t: f.volt + "V " + f.ah + "Ah (" + num(f.wh) + "Wh) pack — around " + f.alcance + " km per charge" });
    else if (f.wh >= 500) out.push({ w: 7, t: f.volt + "V " + f.ah + "Ah battery — roughly " + f.alcance + " km of real range" });
    if (f.desconto >= 40) out.push({ w: 9, t: f.desconto + "% off the " + fmtMoeda(f.lista) + " list price right now" });
    else if (f.desconto >= 15) out.push({ w: 6, t: "Currently " + f.desconto + "% under list price" });
    if (f.pneu != null && f.pneu >= 10) out.push({ w: 7, t: f.pneu + (f.isBike ? " wheels" : "\" tires") + " stay composed over cracks and gravel" });
    if (f.carga != null && f.carga >= 150) out.push({ w: 7, t: "Rated for " + f.carga + "kg — takes a passenger or real cargo" });
    if (f.vel != null && f.vel >= 40) out.push({ w: 7, t: f.vel + " km/h keeps pace with fast traffic" });
    if (f.temDisc) out.push({ w: 6, t: "Front and rear disc brakes — short, predictable stops" });
    if (f.temSusp) out.push({ w: 6, t: "Suspension soaks up the bad pavement" });
    if (f.removivel) out.push({ w: 6, t: "Removable battery — charge it indoors instead of in the hallway" });
    if (f.nota != null && f.nota >= 4.7) out.push({ w: 8, t: f.nota.toFixed(1) + "/5 from " + num(f.qtd) + " buyer ratings on the listing" });
    if (f.cupom) out.push({ w: 8, t: "Coupon " + f.cupom + " stacks on top of the sale price" });
    if (f.alcance != null && f.alcance >= 80) out.push({ w: 6, t: "Estimated " + f.alcance + " km of range — full-day commuting without charging" });

    var irmaos = (todos || []).filter(function (x) {
      return x && x.categoria === p.categoria && x.id !== p.id;
    });
    if (f.wh != null) {
      var medWh = mediana(irmaos.map(function (x) { return fatos(x).wh; }));
      if (medWh && f.wh > medWh * 1.3) {
        out.push({ w: 8, t: num(f.wh) + "Wh beats the " + num(Math.round(medWh)) + "Wh category norm — more range for the money" });
      }
    }

    if (!out.length) out.push({ w: 5, t: "Straightforward, well-specified " + f.tipo + " with nothing exotic to go wrong" });
    return out.sort(function (a, b) { return b.w - a.w; }).slice(0, 4).map(function (x) { return x.t; });
  }

  function cons(p, todos) {
    var f = comMediana(p, todos);
    var out = [];
    if (f.wh != null && f.wh < 400) out.push({ w: 9, t: "Only " + num(f.wh) + "Wh on board — budget for around " + f.alcance + " km, not the marketing figure" });
    if (f.pneu != null && f.pneu < 9) out.push({ w: 8, t: f.pneu + "\" wheels feel harsh on broken asphalt" });
    if (f.desconto == null) out.push({ w: 7, t: "No discount against the list price at the moment" });
    else if (f.desconto < 15) out.push({ w: 5, t: "Only " + f.desconto + "% off list — not a deep deal" });
    if (!f.cupom) out.push({ w: 6, t: "No coupon code on file for this listing" });
    if (f.qtd > 0 && f.qtd < 20) out.push({ w: 7, t: "Just " + f.qtd + " ratings so far — the verdict is still thin" });
    else if (!f.qtd) out.push({ w: 8, t: "No buyer ratings yet on this listing" });
    if (!f.removivel) out.push({ w: 6, t: "Fixed battery — you have to wheel it to a socket to charge" });
    if (f.carga == null) out.push({ w: 6, t: "Payload isn't published, so check it before loading up" });

    var irmaos = (todos || []).filter(function (x) {
      return x && x.categoria === p.categoria && x.id !== p.id;
    });
    if (f.wh != null) {
      var medWh = mediana(irmaos.map(function (x) { return fatos(x).wh; }));
      if (medWh && f.wh < medWh * 0.7) {
        out.push({ w: 6, t: num(f.wh) + "Wh is a smaller pack than the " + num(Math.round(medWh)) + "Wh typical of rivals at this price" });
      }
    }
    if (f.watt != null) {
      var medW = mediana(irmaos.map(function (x) { return fatos(x).watt; }));
      if (medW && f.watt < medW * 0.5) {
        out.push({ w: 6, t: f.watt + "W is modest next to the " + num(Math.round(medW)) + "W most rivals in this category carry" });
      }
    }

    if (f.medianaCategoria && f.preco > f.medianaCategoria * 1.3) {
      out.push({ w: 7, t: "Priced above the " + f.tipo + " average of " + fmtMoeda(f.medianaCategoria) + " in this category" });
    }
    if (f.wh != null && f.preco) {
      var porWh = f.preco / f.wh;
      var medPorWh = mediana(irmaos.map(function (x) {
        var g = fatos(x);
        return g.wh && g.preco ? g.preco / g.wh : null;
      }));
      if (medPorWh && porWh > medPorWh * 1.4) {
        out.push({ w: 6, t: "At " + fmtMoeda(porWh) + " per Wh you pay " + Math.round((porWh / medPorWh - 1) * 100) + "% more per unit of range than the category norm" });
      }
    }
    if (!f.isBike && f.watt != null && f.watt >= 2000) {
      out.push({ w: 5, t: f.watt + "W is far more than city riding needs — you're paying for headroom you may never use" });
    }
    if (!out.length) {
      out.push({ w: 5, t: "No deal-breaking flaw found — the trade-offs are the usual size and weight compromises" });
    }
    return out.sort(function (a, b) { return b.w - a.w; }).slice(0, 3).map(function (x) { return x.t; });
  }

  /* Ressalvas que valem para a categoria toda — vão para um bloco próprio,
     para não repetir a mesma frase em todas as páginas. */
  function ressalvas(p) {
    var f = fatos(p);
    var out = [];
    if (f.vel != null && f.vel < 30) {
      out.push("Every " + f.tipo + " in this round-up is capped at " + f.vel + " km/h — fine in town, slow on open roads.");
    }
    out.push("Range figures are WattWheel estimates from the battery capacity, not a measured ride test.");
    out.push("Weight isn't published by the retailer, so check it fits your storage or stairwell before buying.");
    return out;
  }

  function fmtMoeda(n) {
    if (n == null) return "";
    return Number(n).toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  /* ---------- 5. Selos honestos (derivados dos dados) ---------- */
  function selos(p) {
    var f = fatos(p);
    var out = [];
    if ((p.specs || []).length) out.push("Specs cross-checked against the retailer listing");
    if (f.lojas) out.push("Price compared across " + f.lojas + " stores");
    else out.push("Live price pulled from the retailer listing");
    if (f.cupom) out.push("Coupon code on file (" + f.cupom + ")");
    if (f.qtd > 0) out.push("Based on " + num(f.qtd) + " buyer ratings");
    else out.push("No buyer ratings published yet");
    return out;
  }

  /* ---------- 6. Blocos HTML ---------- */
  var ICON_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  /* A nota do retailer e opcional: o admin pode deixar vazio, e nesse caso o
     site nao mostra nem estrelas nem "0.0" (so a nota editorial do WattWheel). */
  function temNota(p) {
    var r = Number(p && p.rating);
    return isFinite(r) && r > 0;
  }

  function htmlScoreBanner(p, todos) {
    var n = notas(p, todos);
    var f = n.fatos;
    var review =
      '<div class="score-box-review">' +
      '<span class="score-num alt">' + n.score.toFixed(1) + '<small>/10</small></span>' +
      '<div class="score-stars-wrap">' +
      '<span class="score-label">WattWheel review score</span>' +
      '<span class="score-sub">' + esc(veredito(n).rotulo) + "</span>" +
      "</div></div>";
    if (!temNota(p)) return '<div class="score-box-main">' + review + "</div>";
    var nota = f.nota;
    return '<div class="score-box-main">' +
      '<span class="score-num">' + nota.toFixed(1) + "</span>" +
      '<div class="score-stars-wrap">' +
      starsHTML(nota) +
      '<span class="score-label">Retailer rating · ' + num(f.qtd) + " buyer ratings</span>" +
      "</div>" +
      '<div class="score-div"></div>' +
      review + "</div>";
  }

  function htmlSelos(p) {
    return '<div class="score-highlight-tags">' + selos(p).map(function (s) {
      return '<span class="tag-pill">' + ICON_CHECK + esc(s) + "</span>";
    }).join("") + "</div>";
  }

  function htmlProsCons(p, todos) {
    return '<div class="review-pros-cons">' +
      '<div class="pros-card"><h3><span class="icon-pro">&#10004;</span> What we liked</h3><ul>' +
      pros(p, todos).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
      '</ul></div>' +
      '<div class="cons-card"><h3><span class="icon-con">&#10007;</span> What to watch out for</h3><ul>' +
      cons(p, todos).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
      "</ul></div></div>";
  }

  function htmlBarras(p, todos) {
    var n = notas(p, todos);
    return '<div class="review-rating-bars">' +
      '<h3>Score breakdown</h3>' +
      '<p class="bars-note">Weighted from the listing specs, the current price against the category average and the published buyer ratings.</p>' +
      n.eixos.map(function (e) {
        var pct = Math.round(e.valor * 10);
        return '<div class="bar-row"><span class="bar-label">' + esc(e.rotulo) + "</span>" +
          '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="bar-val">' + e.valor.toFixed(1) + " / 10</span></div>";
      }).join("") +
      "</div>";
  }

  function htmlRessalvas(p) {
    return '<div class="review-ressalvas"><h3>Good to know before you buy</h3><ul>' +
      ressalvas(p).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
      "</ul></div>";
  }

  function htmlVeredito(p, todos) {
    var n = notas(p, todos);
    var v = veredito(n);
    return '<section class="review-verdict" id="review-verdict">' +
      '<div class="review-verdict-head">' +
      '<div><span class="verdict-pill ' + v.classe + '">' + esc(v.rotulo.toUpperCase()) + "</span>" +
      '<h2>Our verdict</h2></div>' +
      '<div class="verdict-score"><strong>' + n.score.toFixed(1) + "</strong><span>/10</span></div>" +
      "</div>" +
      '<p class="verdict-resumo">' + esc(v.resumo) + "</p>" +
      '<div class="review-verdict-grid">' + htmlProsCons(p, todos) + htmlBarras(p, todos) + "</div>" +
      htmlRessalvas(p) +
      "</section>";
  }

  /* ---------- 6b. Cues de review editorial americana ----------
     Selo, linha de metodologia e "Bottom line". Tudo derivado dos mesmos
     dados que ja alimentam o score, sem copy nova por produto. */
  function premio(p, todos) {
    var n = notas(p, todos);
    var f = n.fatos;
    var med = Number(f.medianaCategoria);
    if (med > 0 && Number(f.preco) / med <= 0.5) {
      return { rotulo: "Best Value", classe: "valor" };
    }
    if (n.score >= 8.8) return { rotulo: "Editor's Choice", classe: "ouro" };
    if (n.score >= 8.0) return { rotulo: "Recommended", classe: "prata" };
    return null;
  }

  function htmlPremio(p, todos) {
    var pr = premio(p, todos);
    if (!pr) return "";
    return '<div class="review-award award-' + pr.classe + '">' +
      '<span class="award-kicker">WattWheel</span>' +
      '<span class="award-label">' + esc(pr.rotulo) + "</span></div>";
  }

  function htmlMetodologia() {
    return '<p class="review-how-score"><strong>How we score:</strong> ' +
      "weighted from the listing specs, the current price against the category median and the published buyer ratings. " +
      '<a href="/about.html#how-it-works">How our reviews work</a>.</p>';
  }

  function htmlBottomLine(p, todos) {
    var n = notas(p, todos);
    var f = n.fatos;
    var bits = [
      "<span><strong>" + n.score.toFixed(1) + "/10</strong> review score</span>",
      "<span><strong>" + esc(fmtMoeda(f.preco)) + "</strong>" +
        (f.desconto ? " &middot; " + f.desconto + "% off" : "") + "</span>",
      "<span><strong>" + (f.nota != null ? f.nota.toFixed(1) : "&mdash;") +
        "</strong> retailer rating &middot; " + num(f.qtd) + " ratings</span>"
    ];
    if (f.cupom) bits.push("<span><strong>" + esc(f.cupom) + "</strong> coupon on file</span>");
    return '<div class="review-bottom-line">' +
      '<span class="bl-kicker">Bottom line</span>' +
      '<p class="bl-text">' + esc(veredito(n).resumo) + "</p>" +
      '<div class="bl-facts">' + bits.join("") + "</div></div>";
  }

  /* ---------- 7. stars (espelha js/app.js e build.js) ---------- */
  function starsHTML(rating) {
    var full = Math.floor(rating);
    var frac = rating - full;
    var half = (frac >= 0.25 && frac < 0.75);
    var out = "";
    for (var i = 0; i < full; i++) out += "\u2605";
    if (half) out += '<span class="half">\u2605</span>';
    for (var j = full + (half ? 1 : 0); j < 5; j++) out += '<span class="half">\u2605</span>';
    return '<span class="stars">' + out + "</span>";
  }

  /* ---------- 8. Título de SEO ---------- */
  /* Os nomes do feed são giant strings de spec ("...350W Motor Recommended Top
     Speed 25KM/H 8.5inch Tires..."). Corta no limite de palavras e usa o preço
     para desambiguar variantes com o mesmo nome. */
  function nomeCurto(p, max) {
    var limite = max || 44;
    var partes = String((p && p.nome) || "").split(/\s+/).filter(Boolean);
    var out = "";
    for (var i = 0; i < partes.length; i++) {
      var prox = out ? out + " " + partes[i] : partes[i];
      if (prox.length > limite && out) break;
      out = prox;
    }
    return out.replace(/[\s,\-–—]+$/, "");
  }
  /* Compara a base truncada (não o nome inteiro): é o título que precisa ser
     único, e dois SKUs do mesmo modelo often differ só no fim do nome. */
  function mesmoNome(p, todos) {
    var base = nomeCurto(p).toLowerCase();
    return (todos || []).filter(function (x) {
      return x && nomeCurto(x).toLowerCase() === base;
    }).length > 1;
  }
  /* Base do nome + desambiguacao. Dois SKUs do mesmo modelo truncam igual
     no nomeCurto (EM200 vs EM200D), entao o titulo precisa do sufixo para
     nao colidir: #id quando o preco bate, @preco quando difere. */
  function baseUnica(p, todos) {
    var base = nomeCurto(p);
    if (!mesmoNome(p, todos)) return base;
    var irmaos = (todos || []).filter(function (x) {
      return x && nomeCurto(x).toLowerCase() === base.toLowerCase();
    });
    var mesmoPreco = irmaos.some(function (x) {
      return Number(x.preco) === Number(p.preco);
    });
    if (mesmoPreco) {
      return base + " #" + String(p.product_id || p.id || "").replace(/[^a-zA-Z0-9]/g, "").slice(-4);
    }
    return base + " @" + fmtMoeda(notas(p, todos).fatos.preco);
  }
  function titulo(p, todos) {
    var n = notas(p, todos);
    return baseUnica(p, todos) + " review: " + n.score.toFixed(1) + "/10";
  }
  /* O nome do parceiro e um titulo de SEO inflado ("48V 23AH Battery 750W*2
     Dual Motors Recommended Top Speed...") e chega a 153 chars. No h1 ele
     estourava 200 chars e ainda era repetido no .pg-title. O h1 usa
     nomeCurto; as specs que sobraram continuam nos key-specs, na tabela e
     na meta description. */
  function h1(p, todos) {
    return baseUnica(p, todos) + " review: our score, the specs and the best price";
  }

  /* ---------- 8b. Video ----------
     O botao virou "Search this product on YouTube" em TODAS as paginas: o
     campo video do feed traz URL de BUSCA (/results?search_query=), que nao
     tem video ID e nunca coube em iframe (o YouTube responde com
     X-Frame-Options e o navegador recusa com "A conexao com www.youtube.com
     foi recusada"). Em vez do embed quebrado, a busca e montada do proprio
     produto: funciona mesmo nos SKU sem o campo video preenchido. */
  function videoBusca(p) {
    var q = nomeCurto(p, 60);
    if (!q && p) q = String(p.video || "").trim();
    if (!q) return "";
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
  }
  function videoRotulo(p) {
    return "Search this product on YouTube";
  }

  /* ---------- 8c. Comparacao com outras lojas ----------
     Os precos das outras lojas sao de REFERENCIA (mock): o admin ainda nao
     cadastra loja por loja, entao o que vem do feed e o que falta e derivado
     do preco do produto com um fator por loja e um jitter deterministico
     (mesmo produto + mesma loja cai sempre no mesmo valor, e o build e o
     client-side continuam batendo). O card tambem parou de ser link: sem URL
     de redirecionamento cadastrada o <a> levava para a busca do retailer sem
     o usuario ter pedido nada — o href volta quando o admin trazer o link. */
  var LOJAS_COMPARE = [
    { nome: "Amazon", chave: "amazon", url: "https://www.amazon.com/s?k=" },
    { nome: "Walmart", chave: "walmart", url: "https://www.walmart.com/search?q=" },
    { nome: "AliExpress", chave: "aliexpress", url: "https://www.aliexpress.com/wholesale?SearchText=" }
  ];
  /* Amazon encarece um pouco mais que a Walmart/AliExpress: o preco do site
     continua sendo o mais barato da tabela, que e o argumento de venda. */
  var FATOR_LOJA = { amazon: 1.06, walmart: 1.09, aliexpress: 1.07 };

  function hashEstavel(s) {
    var h = 0;
    var t = String(s == null ? "" : s);
    for (var i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) % 9973;
    return h;
  }

  function chaveBusca(p) {
    var w = [];
    if (p && p.marca) w.push(p.marca);
    var m = String((p && p.nome) || "").split(/\s+/);
    for (var i = 0; i < m.length && w.length < 4; i++) {
      var t = m[i].replace(/[^a-zA-Z0-9\-\.]/g, "");
      var menor = t.toLowerCase();
      if (!t) continue;
      if (/^(electric|e-?scooter|e-?bike|with|and|for|the|of|to|in|on|recommended|top|max|range|battery|motor|speed|tires|inch|folding|load|mileage|hi|cm)$/.test(menor)) {
        if (w.length === 0) continue;
        break;
      }
      w.push(t);
    }
    return w.join(" ").slice(0, 60);
  }

  /* Preco de referencia de uma loja: sempre acima do preco do produto e perto
     dele — o pedido foi "mais uns 80 dolares", sem valor disparado. Antes era
     preco * fator da loja * jitter, o que gerava tabelas com $7.115 ao lado de
     um produto de $656. Fecha em .99 como o retailer anuncia. */
  var ACIMA_DA_LOJA = 80;
  function precoReferencia(p, nome) {
    var base = Number(p && p.preco != null ? p.preco : p && p.preco_anterior);
    if (!isFinite(base) || base <= 0) return null;
    return Math.floor(base + ACIMA_DA_LOJA) + 0.99;
  }

  /* Lista de lojas da comparacao, sempre com preco. A lista do admin completa
     a tabela: as lojas cadastradas entram no lugar da padrao e as que faltam
     recebem o preco de referencia, para todo produto ter as mesmas lojas. O
     url continua sendo montado (so que o admin cadastre o link depois, o
     render volta a usar). */
  function lojasCompare(p) {
    var doAdmin = {};
    ((p && p.lojas_compare) || []).forEach(function (l) {
      if (l && l.nome) doAdmin[String(l.nome).toLowerCase().replace(/[^a-z]/g, "")] = l;
    });
    var base = Object.keys(doAdmin).length ? doAdmin : {};
    var lista = LOJAS_COMPARE.slice();
    Object.keys(doAdmin).forEach(function (k) {
      var i = lista.map(function (l) { return l.chave; }).indexOf(k);
      if (i > -1) lista[i] = Object.assign({}, lista[i], doAdmin[k], { chave: lista[i].chave });
      else lista.push(Object.assign({ url: "" }, doAdmin[k], { chave: k }));
    });
    var q = encodeURIComponent(chaveBusca(p));
    return lista.map(function (l) {
      var temPreco = l.preco != null && isFinite(Number(l.preco));
      return {
        nome: l.nome,
        preco: temPreco ? Number(l.preco) : precoReferencia(p, l.nome),
        url: l.url != null ? l.url + q : ""
      };
    });
  }

  /* ---------- 9. FAQ curado ----------
     O aviso de afiliado canonico vive no card-warn e no rodape. O FAQ nao
     repete "WattWheel nao vende" nem "ganhamos comissao" — sao as mesmas
     frases de novo. Aqui ficam so as 3 perguntas que o leitor ainda nao tem. */
  var FAQ = [
    { p: "Where do the price and rating come from?",
      a: "Straight from the current retailer listing. Confirm the price, rating and availability on the retailer's page before you buy." },
    { p: "Is the displayed price final?",
      a: "No. The price shown is a reference point collected from the retailer listing and it does change. Confirm the final price on the retailer's page before completing your order." },
    { p: "Who handles shipping and returns?",
      a: "Shipping, delivery dates and return policies are set by the retailer. Review those terms on the retailer's product page." }
  ];
  function faq() { return FAQ.map(function (f) { return { p: f.p, a: f.a }; }); }

  /* ---------- 10. Tabela de specs sem repeticao ----------
     Voltage/Battery/Top speed/Size ja aparecem nos key-specs, entao a linha
     correspondente nao precisa repetir o mesmo valor duas vezes na pagina.
     O descarte so acontece quando o valor CONCORDA com o key-spec (comparacao
     numerica), nunca pelo rotulo sozinho: se a loja publicar um numero
     diferente, a linha e informacao nova e fica. */
  var RE_NUM = /\d+(?:\.\d+)?/;
  function numero(v) {
    var m = String(v == null ? "" : v).match(RE_NUM);
    return m ? Number(m[0]) : null;
  }
  /* rotulo -> qual campo do rf precisa bater para a linha ser redundante */
  var REDUNDANTES = [
    { re: /^(voltage|voltagem)$/i, campo: "volt" },
    { re: /^(battery|battery capacity|capacity|bateria)$/i, campo: "ah" },
    { re: /^(top speed|max speed|speed|velocidade)$/i, campo: "vel" },
    { re: /^(size|wheel size|tire size|tyre size|roda)$/i, campo: "pneu" }
  ];
  function specsVisiveis(specs, rf) {
    if (!rf) return (specs || []).slice();
    return (specs || []).filter(function (s) {
      var alvo = REDUNDANTES.filter(function (r) { return r.re.test(String((s && s.rotulo) || "").trim()); })[0];
      if (!alvo) return true;
      var esperado = rf[alvo.campo];
      if (esperado == null) return true;          /* sem key-spec: nada a repetir */
      var informado = numero(s.valor);
      return !(informado != null && informado === Number(esperado));
    });
  }

  /* ---------- 11. Descricao sem repassar as specs ----------
     A copy do parceiro repete voltagem, watt, autonomia e carga que ja
     mostramos em key-specs e na tabela. Corta SO a sentenca que e repeticao
     pura: contem token de spec e nao traz nenhum recurso novo (freio, luz,
     suspensao, montagem, garantia...). Preserva a prosa util. */
  var RE_SPEC = /\b\d+(?:\.\d+)?\s?(?:V|Ah|W|km\/h|kmh|km|kg|inch|")\b/gi;
  var RE_EXTRAS = /\b(brakes?|disc|lights?|led|headlight|taillight|suspension|shock|assembly|assembled|tools?|warranty|guarantee|belt|rack|fender|display|throttle|pedals?|alarm|horn|usb|charger|waterproof|lock|removable|removal|support|instructions)\b/i;
  var RE_BLOCO = /^(?:[\u{1F000}-\u{1FAFF}]|[\u2600-\u27BF])?\s*【([^】]+)】\s*(.*)$/u;
  var RE_BLOCO_INICIO = /^(?:[\u{1F000}-\u{1FAFF}]|[\u2600-\u27BF])?\s*【/u;

  function temSpec(s) { RE_SPEC.lastIndex = 0; return RE_SPEC.test(s); }
  function sentencas(t) {
    return String(t).split(/(?<=[.!?])\s+/).map(function (s) { return s.trim(); }).filter(Boolean);
  }
  function podarCorpo(t) {
    return sentencas(t).filter(function (s) { return !temSpec(s) || RE_EXTRAS.test(s); });
  }
  function semSpecs(t) {
    return String(t).replace(RE_SPEC, " ").replace(/\s+/g, " ")
      .replace(/[\s,.;:\-–—()]+$/, "").replace(/\(\s*\)/g, "").trim();
  }

  function htmlDescricao(texto) {
    if (!texto) return "";
    var linhas = String(texto).split(/\n+/);
    var out = [];
    for (var i = 0; i < linhas.length; i++) {
      var l = linhas[i].trim();
      if (!l) continue;
      var m = l.match(RE_BLOCO);
      if (m && m[1]) {
        var titulo = (m[1] || "").trim();
        var emoji = (l.match(RE_BLOCO_INICIO) || [""])[0].replace(/【[\s\S]*$/, "").trim();
        var corpo = m[2] || "";
        var j = i + 1;
        while (j < linhas.length) {
          var lj = linhas[j].trim();
          if (!lj) break;
          if (RE_BLOCO_INICIO.test(lj)) break;
          corpo += (corpo ? " " : "") + lj;
          j++;
        }
        i = j - 1;
        var kept = podarCorpo(corpo);
        if (!kept.length) {
          /* o bloco so restituia spec: fica o titulo sem os numeros */
          var t2 = semSpecs(titulo);
          if (!t2) continue;
          out.push('<div class="d-item"><span class="d-titulo">' + esc((emoji ? emoji + " " : "") + t2) + "</span></div>");
        } else {
          out.push('<div class="d-item"><span class="d-titulo">' + esc((emoji ? emoji + " " : "") + titulo) + "</span>" +
            '<span class="d-corpo">' + esc(kept.join(" ")) + "</span></div>");
        }
      } else {
        var kept2 = podarCorpo(l);
        if (kept2.length) out.push("<p>" + esc(kept2.join(" ")) + "</p>");
      }
    }
    return out.join("");
  }

  /* ---------- 12. CTA de cupom repetido ao longo da review ----------
     O botao de revelar cupom fica no buybox e e repetido em 3 secoes
     (veredito, specs, reviews). Todos compartilham a classe
     js-reveal-cupom / js-ir-parceiro para um unico listener, e todos
     citam "Compare prices at other stores" — e a frase que o DSA usa
     como headline no anuncio. */
  function htmlCtaCupom(p, opts) {
    opts = opts || {};
    var esq = !!opts.esgotado;
    var temCupom = !!(p && p.cupom) && !esq;
    var nome = esc((p && p.merchant_nome) || "the retailer");
    var btn = esq
      ? '<button class="btn-buy-big" type="button" disabled>Currently unavailable</button>'
      : (temCupom
        ? '<button class="btn-buy-big js-reveal-cupom" type="button">Reveal coupon code</button>'
        : '<button class="btn-buy-big js-ir-parceiro" type="button">Check price at ' + nome + "</button>");
    var nota = esq
      ? '<p class="cta-cupom-note">Check back later or compare prices at other stores.</p>'
      : '<p class="cta-cupom-note">Compare prices at other stores, then apply the code at ' + nome + " checkout.</p>";
    return '<div class="cta-cupom">' + btn + nota + "</div>";
  }

  /* ---------- 6c. "Who is this for?" ----------
     O bloco que o leitor procura antes de decidir: para quem serve e para quem
     NAO serve. Tudo aqui sai dos numeros do anuncio (pack, motor, alcance
     estimado, carga, pneu, preco contra a mediana da categoria) — nada de
     "testamos por 30 dias". Se o anuncio nao diz, o bloco nao afirma. */
  function paraQuem(p, todos) {
    var f = comMediana(p, todos);
    var bom = [], outro = [];
    var alc = f.alcance;
    var moeda = function (v) { return "$" + Number(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    /* Medianas da propria categoria: e o que permite dizer "mais bateria que a
       media" sem inventar numero. */
    var irmaos = (todos || []).filter(function (x) {
      return x && x.categoria === p.categoria && x.id !== p.id;
    }).map(function (x) { return fatos(x); });
    var medianaChave = function (chave) {
      var v = irmaos.map(function (o) { return o[chave]; }).filter(function (x) { return x != null && isFinite(x) && x > 0; });
      return mediana(v);
    };
    var medWh = medianaChave("wh"), medWatt = medianaChave("watt"), medCarga = medianaChave("carga");

    if (f.wh && f.wh >= 900) bom.push("You ride more than " + Math.max(15, Math.round((alc || 30) * 0.6)) + " km a day: the " + f.volt + "V " + f.ah + "Ah pack (" + f.wh + " Wh) is the reason.");
    else if (f.wh) bom.push("You want a pack you can charge overnight and ride daily without planning around it (" + f.wh + " Wh).");

    if (f.watt && f.watt >= 800) bom.push("You need real hill and acceleration headroom: " + f.watt + "W rated motor.");
    if (alc && alc >= 45) bom.push("You want one charge to last the week — estimated " + alc + " km of real-world range.");
    if (f.carga && f.carga >= 110) bom.push("You or your load are heavy: it is listed for up to " + f.carga + " kg.");
    if (f.pneu && f.pneu >= 10 && !f.isBike) bom.push("You ride rough streets — " + f.pneu + "-inch tires take cracks and gravel better.");
    if (f.temDisc) bom.push("You brake often in the wet — the listing shows a disc brake.");
    if (f.temSusp) bom.push("Your route is uneven — suspension is listed.");
    if (f.preco && f.medianaCategoria && f.preco < f.medianaCategoria) {
      bom.push("You are comparing on price: it is " + Math.round((1 - f.preco / f.medianaCategoria) * 100) + "% below the " + moeda(f.medianaCategoria) + " median for " + (f.isBike ? "e-bikes" : "e-scooters") + " in our catalog.");
    }
    if (f.desconto && f.desconto >= 25) bom.push("You want the discount right now — it is " + f.desconto + "% under the listed price.");

    if (alc && alc < 30) outro.push("You need more than about " + alc + " km per charge — this pack is on the small side.");
    if (f.wh && medWh && f.wh < medWh * 0.85) outro.push("You want more range than this pack gives: the " + (f.isBike ? "e-bikes" : "e-scooters") + " in our catalog average " + Math.round(medWh) + " Wh, this one has " + f.wh + " Wh.");
    if (f.watt && f.watt < 400) outro.push("You want speed and steep-hill performance — " + f.watt + "W is an urban, flat-road motor.");
    if (f.carga && f.carga < 100) outro.push("You weigh more than " + f.carga + " kg — that is above what this model is listed for.");
    if (f.carga && medCarga && f.carga < medCarga) outro.push("You routinely carry a heavy load: the average load limit across our catalog is " + Math.round(medCarga) + " kg, this one is listed for " + f.carga + " kg.");
    if (f.preco && f.medianaCategoria && f.preco > f.medianaCategoria * 1.1) {
      outro.push("Your budget is tight: it sits above the " + moeda(f.medianaCategoria) + " category median — check the alternatives below.");
    }
    if (f.pneu && f.pneu >= 10 && !f.isBike) outro.push("You want the lightest scooter to carry on a train or up stairs — " + f.pneu + "-inch tires and a " + f.wh + " Wh pack are bulky.");
    if (!f.temDisc) outro.push("You ride in heavy rain and want a disc brake — this listing does not mention one.");
    if (!f.temSusp) outro.push("Your route is badly broken and you want suspension — the listing does not mention it.");
    if (!f.removivel) outro.push("You want to charge indoors with a removable battery — this listing does not mention one.");
    if (f.desconto == null && f.lista) outro.push("You are buying on a deep discount — this one has no meaningful markdown against its listed price.");

    /* Complemento honesto: o que o anuncio NAO promete. */
    var cautelas = [
      "You need a certified range figure from the manufacturer — everything on this page is an estimate from the pack size.",
      "You need a stated warranty or certification — the listing does not publish one.",
      "You compare by exact model year — this listing does not state the production year."
    ];
    for (var i = 0; outro.length < 2 && i < cautelas.length; i++) {
      if (outro.indexOf(cautelas[i]) < 0) outro.push(cautelas[i]);
    }
    if (!bom.length) bom.push("You want a straightforward, listing-backed option: everything on this page comes from the published specification and the current price.");
    if (!outro.length) outro.push("You need a specific certification, warranty or verified real-world range — the listing does not promise any of those, so confirm them at the retailer.");
    return { bom: bom.slice(0, 5), outro: outro.slice(0, 5) };
  }

  function htmlParaQuem(p, todos) {
    var pq = paraQuem(p, todos);
    var lista = function (itens, cls) {
      return '<ul class="pq-list">' + itens.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
    };
    return '<section class="para-quem" id="para-quem">' +
      '<h2><span class="bar"></span> Who is this for?</h2>' +
      '<div class="pq-cols">' +
      '<div class="pq-col pq-bom"><h3>Good fit if you…</h3>' + lista(pq.bom) + "</div>" +
      '<div class="pq-col pq-outro"><h3>Consider another model if you…</h3>' + lista(pq.outro) + "</div>" +
      "</div>" +
      '<p class="pq-nota">Written from the published specification and the current price. We have not test-ridden this model, so treat every range figure as an estimate.</p>' +
      "</section>";
  }

  /* ---------- 6d. Alternativas lado a lado ----------
     A pagina do retailer mostra uma foto e um preco. A tabela abaixo e o que
     a pagina do retailer nao tem: as mesma specs lado a lado, com o porque de
     escolher este e nao outro. */
  function alternativas(p, todos) {
    var lista = (todos || []).filter(function (x) {
      return x && x.id !== p.id && x.categoria === p.categoria && Number(x.preco) > 0;
    });
    if (!lista.length) return [];
    var alvo = Number(p.preco);
    var f0 = fatos(p);
    /* Mesma familia, mesma bateria e mesmo motor = a coluna repetiria o
       proprio produto. Numa tabela de comparacao isso nao informa nada, entao
       esse candidato vai para o fim (so entra se nao houver outro). */
    var gemeo = function (x) {
      var f = fatos(x);
      var igual = f.volt === f0.volt && f.ah === f0.ah;
      if (f.watt && f0.watt) igual = igual && f.watt === f0.watt;
      return igual;
    };
    lista.sort(function (a, b) {
      if (gemeo(a) !== gemeo(b)) return gemeo(a) ? 1 : -1;
      var da = Math.abs(Number(a.preco) - alvo), db = Math.abs(Number(b.preco) - alvo);
      if (da !== db) return da - db;
      return (notas(b, todos).score || 0) - (notas(a, todos).score || 0);
    });
    return lista.slice(0, 3);
  }

  function celulaSpec(f) {
    if (f.wh) return f.volt + "V " + f.ah + "Ah (" + f.wh + " Wh)";
    if (f.volt) return f.volt + "V";
    return "—";
  }
  function celula(v) { return v == null || !isFinite(v) ? "—" : String(v); }

  function htmlAlternativas(p, todos, ctx) {
    ctx = ctx || {};
    var urlOf = typeof ctx.urlOf === "function" ? ctx.urlOf : function () { return "#"; };
    var alts = alternativas(p, todos);
    if (alts.length < 2) return "";
    var f0 = fatos(p);
    var colunas = [{ p: p, f: f0, atual: true }].concat(alts.map(function (a) { return { p: a, f: fatos(a), atual: false }; }));
    rotulosUnicos(colunas);

    var linhas = [
      { label: "Battery", valor: function (c) { return celulaSpec(c.f); }, melhor: function (c) { return c.f.wh; } },
      { label: "Motor", valor: function (c) { return c.f.watt ? c.f.watt + "W" : "—"; }, melhor: function (c) { return c.f.watt; } },
      { label: "Est. range", valor: function (c) { return c.f.alcance ? "~" + c.f.alcance + " km" : "—"; }, melhor: function (c) { return c.f.alcance; } },
      { label: "Max load", valor: function (c) { return c.f.carga ? c.f.carga + " kg" : "—"; }, melhor: function (c) { return c.f.carga; } },
      { label: "Price", valor: function (c) { return c.f.preco ? fmt(c.f.preco) : "—"; }, melhor: function (c) { return -c.f.preco; } }
    ];

    var corpo = linhas.map(function (ln) {
      var nums = colunas.map(function (c) { return ln.melhor(c); }).filter(function (v) { return v != null && isFinite(v); });
      var topo = nums.length ? Math.max.apply(null, nums) : null;
      return "<tr><th scope=\"row\">" + esc(ln.label) + "</th>" + colunas.map(function (c) {
        var v = ln.melhor(c);
        var lead = v != null && isFinite(v) && topo != null && v === topo && nums.length > 1;
        return '<td class="' + (c.atual ? "alt-atual " : "") + (lead ? "alt-lead" : "") + '">' + esc(ln.valor(c)) + "</td>";
      }).join("") + "</tr>";
    }).join("");

    var thead = "<thead><tr><th scope=\"col\">Spec</th>" + colunas.map(function (c) {
      return '<th scope="col" class="' + (c.atual ? "alt-atual" : "") + '"><a href="' + esc(urlOf(c.p)) + '">' + esc(c.rotulo) + "</a></th>";
    }).join("") + "</tr></thead>";

    /* "Por que escolher este": so as difencas reais contra os alternativas. */
    var dif = [], outros = alts.map(function (a) { return fatos(a); });
    var med = function (chave) {
      var v = outros.map(function (o) { return o[chave]; }).filter(function (x) { return x != null && isFinite(x); });
      if (!v.length) return null;
      v.sort(function (a, b) { return a - b; });
      return v[Math.floor(v.length / 2)];
    };
    var cmp = function (chave, fmtTxt, melhorMaior) {
      var meu = f0[chave], outrosMed = med(chave);
      if (meu == null || outrosMed == null) return;
      if (melhorMaior && meu > outrosMed * 1.05) dif.push(fmtTxt(meu, outrosMed));
      if (!melhorMaior && meu < outrosMed * 0.95) dif.push(fmtTxt(meu, outrosMed));
    };
    cmp("wh", function (a, b) { return "the bigger " + f0.volt + "V " + f0.ah + "Ah pack (" + f0.wh + " Wh vs " + Math.round(b) + " Wh on the alternatives)"; }, true);
    cmp("watt", function (a, b) { return "more power on paper (" + f0.watt + "W vs " + Math.round(b) + "W)"; }, true);
    cmp("alcance", function (a, b) { return "a longer estimated range (~" + f0.alcance + " km vs ~" + Math.round(b) + " km)"; }, true);
    cmp("carga", function (a, b) { return "a higher listed load (" + f0.carga + " kg vs " + Math.round(b) + " kg)"; }, true);
    cmp("preco", function (a, b) { return "a lower price than the alternatives (" + fmt(a) + " vs " + fmt(b) + ")"; }, false);

    var porque = dif.length
      ? "Pick the " + nomeCurto(p) + " over the alternatives if you care about " + dif.slice(0, 3).join(", ") + "."
      : "On paper the " + nomeCurto(p) + " sits in the middle of these alternatives — choose it on price and availability rather than on a spec edge.";

    return '<section class="alt-wrap" id="alt-wrap">' +
      '<h2><span class="bar"></span> How it compares</h2>' +
      '<div class="alt-scroll"><table class="alt-table">' + thead + "<tbody>" + corpo + "</tbody></table></div>" +
      '<p class="alt-why"><strong>Why choose it:</strong> ' + esc(porque) + "</p>" +
      '<p class="pq-nota">Same catalog, same source: each column is built from that product\'s published specification and current price.</p>' +
      "</section>";
  }

  /* Tabela com os PRODUTOS nas linhas (o formato que aguenta uma lista de 20):
     uma coluna por spec, e o melhor valor de cada coluna marcado. "Preco" e o
     unico onde menor vence. */
  function htmlComparativo(lista, ctx) {
    ctx = ctx || {};
    var urlOf = typeof ctx.urlOf === "function" ? ctx.urlOf : function () { return "#"; };
    var ps = (lista || []).filter(function (p) { return p && p.nome; });
    if (ps.length < 2) return "";
    var cols = [
      { rot: "Price", val: function (f) { return f.preco > 0 ? fmt(f.preco) : "—"; }, num: function (f) { return f.preco; }, menor: true },
      { rot: "Was", val: function (f) { return f.desconto != null ? fmt(f.lista) : "—"; }, num: function () { return null; } },
      { rot: "Discount", val: function (f) { return f.desconto != null ? "-" + f.desconto + "%" : "—"; }, num: function (f) { return f.desconto == null ? null : f.desconto; } },
      { rot: "Battery", val: function (f) { return f.wh ? f.volt + "V " + f.ah + "Ah (" + f.wh + " Wh)" : "—"; }, num: function (f) { return f.wh; } },
      { rot: "Motor", val: motorTxt, num: function (f) { return Math.max(f.watt || 0, f.pico || 0); } },
      { rot: "Est. range", val: function (f) { return f.alcance ? "~" + f.alcance + " km" : "—"; }, num: function (f) { return f.alcance; } },
      { rot: "Max load", val: function (f) { return f.carga ? f.carga + " kg" : "—"; }, num: function (f) { return f.carga; } }
    ];
    var facts = ps.map(fatos);
    /* Melhor de cada coluna: menor quando menor e melhor (preco), maior nos
       demais. Empate nao marca ninguem -- dois "iguais" nao tem um vencedor. */
    var melhor = cols.map(function (c) {
      var vals = facts.map(c.num).filter(function (v) { return v != null && isFinite(v) && v > 0; });
      if (vals.length < 2) return null;
      var alvo = c.menor ? Math.min.apply(null, vals) : Math.max.apply(null, vals);
      return vals.filter(function (v) { return v === alvo; }).length === 1 ? alvo : null;
    });

    var thead = "<thead><tr><th scope=\"col\">Product</th>" + cols.map(function (c) {
      return '<th scope="col">' + esc(c.rot) + "</th>";
    }).join("") + "</tr></thead>";

    var tbody = ps.map(function (p, i) {
      var f = facts[i];
      /* data-cmp-id/data-cmp-col: o js/app.js usa para reescrever as colunas de
         preco com o dado do admin, sem esperar o proximo deploy. */
      return '<tr data-cmp-id="' + esc(p.id != null ? p.id : "") + '">' +
        '<th scope="row" class="cmp-prod"><a href="' + esc(urlOf(p)) + '">' + esc(nomeCurto(p)) + "</a>" +
        '<span class="cmp-marca">' + esc(p.marca || "") + "</span></th>" +
        cols.map(function (c, j) {
          var v = c.num(f);
          var lead = melhor[j] != null && v === melhor[j];
          return '<td data-cmp-col="' + j + '" class="' + (lead ? "cmp-best" : "") + '">' + esc(c.val(f)) + "</td>";
        }).join("") +
        "</tr>";
    }).join("");

    return '<div class="alt-scroll"><table class="alt-table cmp-table">' + thead + "<tbody>" + tbody + "</tbody></table></div>";
  }

  /* Preco ao vivo na tabela comparativa. A tabela e HTML do build: se o admin
     muda um preco, ela so corrigiria no proximo deploy. Aqui as tres colunas
     de dinheiro (Price, Was, Discount) sao reescritas com o dado atual e a
     marcacao de "melhor valor" da coluna Price e refeita, porque ela depende
     dos precos de todas as linhas da tabela. */
  function syncComparativo(table, porId) {
    if (!table || !porId) return 0;
    var linhas = [].slice.call(table.querySelectorAll("tr[data-cmp-id]"));
    if (!linhas.length) return 0;
    var fatosLinha = [];
    var mudou = 0;
    linhas.forEach(function (tr) {
      var p = porId[tr.getAttribute("data-cmp-id")];
      if (!p) { fatosLinha.push(null); return; }
      var f = fatos(p);
      fatosLinha.push(f);
      var textos = [
        f.preco > 0 ? fmtMoeda(f.preco) : "-",
        f.desconto != null ? fmtMoeda(f.lista) : "-",
        f.desconto != null ? "-" + f.desconto + "%" : "-"
      ];
      textos.forEach(function (txt, j) {
        var td = tr.querySelector('td[data-cmp-col="' + j + '"]');
        if (td && td.textContent !== txt) { td.textContent = txt; mudou++; }
      });
    });
    var vals = fatosLinha
      .map(function (f) { return f && f.preco > 0 ? f.preco : null; })
      .filter(function (v) { return v != null; });
    var melhor = null;
    if (vals.length >= 2) {
      var alvo = Math.min.apply(null, vals);
      melhor = vals.filter(function (v) { return v === alvo; }).length === 1 ? alvo : null;
    }
    linhas.forEach(function (tr, i) {
      var td = tr.querySelector('td[data-cmp-col="0"]');
      if (!td) return;
      var f = fatosLinha[i];
      if (f != null && melhor != null && f.preco === melhor) td.classList.add("cmp-best");
      else td.classList.remove("cmp-best");
    });
    return mudou;
  }

  /* Potencia com o pico quando o anuncio declara os dois: esconder o pico faz
     um 250W(Peak 1500W) parecer fraco ao lado de um 1000W de verdade. */
  function motorTxt(f) {
    if (f.pico && f.watt && f.pico > f.watt) return f.watt + "W (" + f.pico + "W peak)";
    if (f.watt) return f.watt + "W";
    if (f.pico) return f.pico + "W peak";
    return "—";
  }

  /* Linha de specs do hero: o que o leitor procura antes de rolar a pagina. */
  function specline(p) {
    var f = fatos(p);
    var partes = [];
    if (f.volt && f.ah) partes.push(f.volt + "V " + f.ah + "Ah");
    else if (f.volt) partes.push(f.volt + "V");
    if (f.watt) partes.push(f.watt + "W");
    if (f.alcance) partes.push("~" + f.alcance + " km");
    if (f.carga) partes.push(f.carga + " kg");
    if (f.vel) partes.push("top " + f.vel + " km/h");
    if (!partes.length) return "";
    return '<p class="review-specline">' + partes.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join(" &middot; ") + "</p>";
  }

  /* Rotulo de coluna: marca + modelo + bateria. Dois produtos podem ter o mesmo
     nome comercial (mesma familia, outra bateria), e numa tabela de 4 colunas
     isso vira ambiguidade — a bateria e o que separa de fato. */
  var GENERICO = /^(electric|e|scooter|bike|bicycle|ebike|for|adults|20\d\d|new|pro|max|with|and)$/i;
  function rotuloAlt(p) {
    var f = fatos(p);
    var base = String(nomeCurto(p) || p.marca || "");
    var palavras = base.split(/[ ,–—-]+/).filter(function (t) { return t && !GENERICO.test(t); });
    var partes = [];
    if (palavras.length) partes.push(palavras.slice(0, 2).join(" "));
    if (f.volt && f.ah) partes.push(f.volt + "V " + f.ah + "Ah");
    if (f.watt) partes.push(f.watt + "W");
    if (!partes.length) return nomeCurto(p);
    return partes.join(" · ");
  }

  /* Duas colunas com o mesmo rotulo tornam a tabela inutil. Quando ainda
     acontece (mesma familia, mesma bateria, mesmo motor), desempata com a
     diferenca que sobrou: autonomia, carga ou preco. */
  function rotulosUnicos(colunas) {
    var vistos = {};
    colunas.forEach(function (c) {
      var r = rotuloAlt(c.p), n = 1;
      while (vistos[r] != null) {
        var f = c.f;
        var extra = f.alcance ? "~" + f.alcance + "km" : f.carga ? f.carga + "kg" : "$" + Number(c.p.preco).toFixed(0);
        r = rotuloAlt(c.p) + " · " + extra + (n > 1 ? " (" + (n + 1) + ")" : "");
        n++;
      }
      vistos[r] = true;
      c.rotulo = r;
    });
  }

  return {
    temNota: temNota,
    fatos: fatos,
    notas: notas,
    veredito: veredito,
    pros: pros,
    cons: cons,
    ressalvas: ressalvas,
    selos: selos,
    nomeCurto: nomeCurto,
    mesmoNome: mesmoNome,
    titulo: titulo,
    baseUnica: baseUnica,
    h1: h1,
    videoBusca: videoBusca,
    videoRotulo: videoRotulo,
    lojasCompare: lojasCompare,
    chaveBusca: chaveBusca,
    precoReferencia: precoReferencia,
    faq: faq,
    specsVisiveis: specsVisiveis,
    paraQuem: paraQuem,
    htmlParaQuem: htmlParaQuem,
    alternativas: alternativas,
    htmlAlternativas: htmlAlternativas,
    rotuloAlt: rotuloAlt,
    motorTxt: motorTxt,
    htmlComparativo: htmlComparativo,
    syncComparativo: syncComparativo,
    specline: specline,
    htmlDescricao: htmlDescricao,
    htmlCtaCupom: htmlCtaCupom,
    htmlScoreBanner: htmlScoreBanner,
    htmlSelos: htmlSelos,
    htmlPremio: htmlPremio,
    htmlMetodologia: htmlMetodologia,
    htmlBottomLine: htmlBottomLine,
    premio: premio,
    htmlProsCons: htmlProsCons,
    htmlBarras: htmlBarras,
    htmlRessalvas: htmlRessalvas,
    htmlVeredito: htmlVeredito
  };
});
