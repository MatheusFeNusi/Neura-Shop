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
      watt: watt, vel: vel, pneu: pneu, carga: carga, alcance: alcance,
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

  function htmlScoreBanner(p, todos) {
    var n = notas(p, todos);
    var f = n.fatos;
    var nota = f.nota != null ? f.nota : 0;
    return '<div class="score-box-main">' +
      '<span class="score-num">' + nota.toFixed(1) + "</span>" +
      '<div class="score-stars-wrap">' +
      starsHTML(nota || 5) +
      '<span class="score-label">Retailer rating · ' + num(f.qtd) + " buyer ratings</span>" +
      "</div>" +
      '<div class="score-div"></div>' +
      '<div class="score-box-review">' +
      '<span class="score-num alt">' + n.score.toFixed(1) + '<small>/10</small></span>' +
      '<div class="score-stars-wrap">' +
      '<span class="score-label">WattWheel review score</span>' +
      '<span class="score-sub">' + esc(veredito(n).rotulo) + "</span>" +
      "</div></div></div>";
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
  function titulo(p, todos) {
    var n = notas(p, todos);
    var base = nomeCurto(p);
    if (mesmoNome(p, todos)) {
      var irmaos = (todos || []).filter(function (x) {
        return x && nomeCurto(x).toLowerCase() === base.toLowerCase();
      });
      var mesmoPreco = irmaos.some(function (x) {
        return Number(x.preco) === Number(p.preco);
      });
      if (mesmoPreco) {
        base += " #" + String(p.product_id || p.id || "").replace(/[^a-zA-Z0-9]/g, "").slice(-4);
      } else {
        base += " @" + fmtMoeda(n.fatos.preco);
      }
    }
    return base + " review: " + n.score.toFixed(1) + "/10";
  }
  function h1(p) {
    return p.nome + " review: our score, the specs and the best price";
  }

  return {
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
    h1: h1,
    htmlScoreBanner: htmlScoreBanner,
    htmlSelos: htmlSelos,
    htmlProsCons: htmlProsCons,
    htmlBarras: htmlBarras,
    htmlRessalvas: htmlRessalvas,
    htmlVeredito: htmlVeredito
  };
});
