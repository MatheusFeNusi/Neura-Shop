"use strict";

var PG_POR_PAGINA = 60;
var SUPA = window.SUPA_CONFIG || {};
var sessao = null;
var paginaAtual = 0;
var listaFiltrada = [];
var idEmEdicao = null;
var listaOriginal = [];
var buscarTimer = null;

/* ---------- Supabase helpers ---------- */
function supaURL(path) {
  return SUPA.url + path;
}
function supaHeaders(usarRole) {
  var h = { "Content-Type": "application/json", "apikey": SUPA.anon };
  var tok = SUPA.anon;
  if (sessao && sessao.access_token) tok = sessao.access_token;
  h["Authorization"] = "Bearer " + tok;
  return h;
}
function supaGet(path) {
  return fetch(supaURL(path), { headers: supaHeaders(false), body: undefined })
    .then(function (r) {
      if (!r.ok) throw new Error("supa " + r.status);
      return r.json();
    });
}
function supaPost(path, payload) {
  return fetch(supaURL(path), {
    method: "POST",
    headers: supaHeaders(false),
    body: JSON.stringify(payload)
  }).then(function (r) {
    if (!r.ok) throw new Error("supa " + r.status);
    return r.json();
  });
}
function supaPatch(id, dados) {
  return fetch(supaURL("/rest/v1/produtos?id=eq." + encodeURIComponent(id)), {
    method: "PATCH",
    headers: Object.assign(supaHeaders(false), { "Prefer": "return=minimal" }),
    body: JSON.stringify({ dados: dados })
  }).then(function (r) {
    if (!r.ok) throw new Error("supaPATCH " + r.status);
    return r;
  });
}
function supaDelete(id) {
  return fetch(supaURL("/rest/v1/produtos?id=eq." + encodeURIComponent(id)), {
    method: "DELETE",
    headers: Object.assign(supaHeaders(false), { "Prefer": "return=minimal" })
  }).then(function (r) {
    if (!r.ok) throw new Error("supaDELETE " + r.status);
    return r;
  });
}
function supaBulkUpsert(rows, onProgress) {
  var CHUNK = 120;
  var i = 0;
  function prox() {
    if (i >= rows.length) return Promise.resolve(rows.length);
    var chunk = rows.slice(i, i + CHUNK);
    i += CHUNK;
    return fetch(supaURL("/rest/v1/produtos?on_conflict=id"), {
      method: "POST",
      headers: Object.assign(supaHeaders(false), { "Prefer": "resolution=merge-duplicates" }),
      body: JSON.stringify(chunk)
    }).then(function (r) {
      if (!r.ok) throw new Error("supaUpsert " + r.status);
      if (onProgress) onProgress(i, rows.length);
      return prox();
    });
  }
  return prox();
}
function authLogin(email, pass) {
  return fetch(supaURL("/auth/v1/token?grant_type=password"), {
    method: "POST",
    headers: { "Content-Type": "application/json", "apikey": SUPA.anon },
    body: JSON.stringify({ email: email, password: pass })
  }).then(function (r) {
    if (!r.ok) {
      return r.json().then(function (b) {
        throw new Error((b && (b.msg || b.error_description)) || "Falha ao entrar.");
      });
    }
    return r.json();
  }).then(function (s) {
    sessao = s;
    try { localStorage.setItem("nshop_sessao", JSON.stringify(s)); } catch (e) {}
    return s;
  });
}
function authLogout() {
  sessao = null;
  try { localStorage.removeItem("nshop_sessao"); } catch (e) {}
  mostrarLogin();
}
function restaurarSessao() {
  try {
    var s = localStorage.getItem("nshop_sessao") || "";
    if (s) sessao = JSON.parse(s);
  } catch (e) { sessao = null; }
}

/* ---------- UI ---------- */
function mostrarLogin() {
  var ed = $("#editor-box");
  var lg = $("#login-box");
  if (ed) ed.hidden = true;
  if (lg) lg.hidden = false;
  var out = $("#btn-logout");
  if (out) out.style.display = "none";
}
function mostrarEditor() {
  var ed = $("#editor-box");
  var lg = $("#login-box");
  if (ed) ed.hidden = false;
  if (lg) lg.hidden = true;
  var out = $("#btn-logout");
  if (out) out.style.display = "";
  var lbl = $("#admin-email");
  if (lbl) lbl.textContent = (sessao && sessao.user && sessao.user.email) ? sessao.user.email : "";
}

function initAdmin() {
  restaurarSessao();
  document.getElementById("btn-login").addEventListener("click", aoEntrar);
  document.getElementById("login-pass").addEventListener("keydown", function (e) { if (e.key === "Enter") aoEntrar(); });
  document.getElementById("btn-logout").addEventListener("click", authLogout);
  document.getElementById("btn-close-modal").addEventListener("click", fecharModal);
  document.getElementById("btn-salvar").addEventListener("click", salvarEdicao);
  document.getElementById("btn-reverter").addEventListener("click", reverterProduto);
  document.getElementById("btn-reset").addEventListener("click", resetTotal);
  document.getElementById("btn-export").addEventListener("click", exportarJSON);
  document.getElementById("btn-export-csv").addEventListener("click", exportarCSV);
  document.getElementById("modal").addEventListener("click", function (e) { if (e.target === document.getElementById("modal")) fecharModal(); });
  var f = document.getElementById("form-edicao");
  f.addEventListener("submit", function (e) { e.preventDefault(); salvarEdicao(); });
  var busca = document.getElementById("busca");
  busca.addEventListener("input", function () {
    clearTimeout(buscarTimer);
    buscarTimer = setTimeout(function () { paginaAtual = 0; renderAdmin(); }, 250);
  });
  document.getElementById("filtro-disp").addEventListener("change", function () { paginaAtual = 0; renderAdmin(); });
  var selCat = document.getElementById("filtro-cat");
  if (selCat) {
    CATEGORIAS.forEach(function (c) {
      var op = document.createElement("option");
      op.value = c.slug; op.textContent = c.nome;
      selCat.appendChild(op);
    });
    selCat.addEventListener("change", function () { paginaAtual = 0; renderAdmin(); });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fecharModal();
  });
  mostrarEditor();
  listaOriginal = PRODUTOS.map(function (p) {
    return { id: p.id, dados: JSON.parse(JSON.stringify(p)) };
  });
  renderAdmin();
}

function aoEntrar() {
  var email = document.getElementById("login-email").value.trim();
  var pass = document.getElementById("login-pass").value;
  var err = $("#login-err");
  var btn = $("#btn-login");
  if (!email || !pass) {
    if (err) err.textContent = "Informe e-mail e senha.";
    return;
  }
  btn.disabled = true;
  if (err) err.textContent = "Entrandoâ€¦";
  authLogin(email, pass).then(function () {
    if (err) err.textContent = "";
    btn.disabled = false;
    mostrarEditor();
    toast("Bem-vindo, " + (sessao.user && sessao.user.email ? sessao.user.email : "") + ".");
  }).catch(function (e) {
    if (err) err.textContent = e.message;
    btn.disabled = false;
  });
}

function filtrarProdutos() {
  var termo = document.getElementById("busca").value.trim().toLowerCase();
  var disp = document.getElementById("filtro-disp").value;
  var cat = document.getElementById("filtro-cat") ? document.getElementById("filtro-cat").value : "";
  return PRODUTOS.filter(function (p) {
    if (cat && p.categoria !== cat) return false;
    if (disp && p.disponibilidade !== disp) return false;
    if (termo) {
      var alvo = (p.nome + " " + (p.marca || "") + " " + (p.id || "")).toLowerCase();
      if (alvo.indexOf(termo) === -1) return false;
    }
    return true;
  });
}

function renderAdmin() {
  listaFiltrada = filtrarProdutos();
  var total = listaFiltrada.length;
  var totalPaginas = Math.max(1, Math.ceil(total / PG_POR_PAGINA));
  if (paginaAtual >= totalPaginas) paginaAtual = totalPaginas - 1;
  var inicio = paginaAtual * PG_POR_PAGINA;
  var fatia = listaFiltrada.slice(inicio, inicio + PG_POR_PAGINA);

  document.getElementById("admin-count").textContent =
    total + " produtos Â· pÃ¡g " + (paginaAtual + 1) + "/" + totalPaginas;

  var list = document.getElementById("admin-list");
  if (!fatia.length) {
    list.innerHTML = '<div class="admin-empty">Nenhum produto.</div>';
  } else {
    list.innerHTML = fatia.map(linhaProduto).join("");
  }
  $$(".btn-edit", list).forEach(function (b) {
    b.addEventListener("click", function () { abrirModal(b.dataset.edit); });
  });
  $$(".btn-del", list).forEach(function (b) {
    b.addEventListener("click", function () { excluirProduto(b.dataset.del); });
  });

  var pager = document.getElementById("admin-pager");
  if (totalPaginas <= 1) {
    pager.innerHTML = "";
  } else {
    var botoes = [];
    if (paginaAtual > 0) botoes.push('<button class="btn btn-light" type="button" data-pg="' + (paginaAtual - 1) + '">â€¹ Anterior</button>');
    botoes.push('<span class="pager-info">' + (paginaAtual + 1) + " / " + totalPaginas + "</span>");
    if (paginaAtual < totalPaginas - 1) botoes.push('<button class="btn btn-light" type="button" data-pg="' + (paginaAtual + 1) + '">PrÃ³xima â€º</button>');
    pager.innerHTML = botoes.join("");
    $$("[data-pg]", pager).forEach(function (b) {
      b.addEventListener("click", function () { paginaAtual = Number(b.dataset.pg); renderAdmin(); });
    });
  }
}

function linhaProduto(p) {
  return '<div class="admin-row" data-id="' + esc(p.id) + '">' +
    '<img class="admin-thumb" src="' + esc(imgProd(p, 0)) + '" alt="" loading="lazy"/>' +
    '<div class="admin-row-main">' +
    '<div class="admin-row-titulo">' + esc(p.nome) + "</div>" +
    '<div class="admin-row-meta">' + esc(p.marca || "â€”") + " Â· " + esc(p.categoria_nome || p.categoria || "â€”") +
    " Â· " + num(p.rating) + "â˜… (" + num(p.avaliacoes) + ")</div>" +
    '<div class="admin-row-link">Link: <span class="link-val">' + esc(p.url_afiliado || "â€”") + "</span></div>" +
    "</div>" +
    '<div class="admin-row-preco">' + fmt(p.preco) + "</div>" +
    '<span class="admin-avail ' + esc(p.disponibilidade) + '">' + chipDispTexto(p.disponibilidade) + "</span>" +
    '<div class="admin-acoes">' +
    '<button class="btn btn-light btn-edit" type="button" data-edit="' + esc(p.id) + '">Editar</button>' +
    '<button class="btn btn-del" type="button" data-del="' + esc(p.id) + '">Excluir</button>' +
    "</div>" +
    "</div>";
}
function chipDispTexto(v) {
  if (v === "poucas_unidades") return "Poucas unidades";
  if (v === "esgotado") return "Esgotado";
  return "Em estoque";
}

function abrirModal(id) {
  idEmEdicao = id;
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) { toast("Produto nÃ£o encontrado."); return; }
  var f = document.getElementById("form-edicao");
  f.nome.value = p.nome || "";
  f.url_afiliado.value = p.url_afiliado || "";
  f.img.value = p.img || "";
  f.imagens.value = (p.fotos && p.fotos.length) ? p.fotos.join("\n") : "";
  f.preco.value = p.preco != null ? p.preco : "";
  f.preco_anterior.value = p.preco_anterior != null ? p.preco_anterior : "";
  f.rating.value = p.rating != null ? p.rating : "";
  f.avaliacoes.value = p.avaliacoes != null ? p.avaliacoes : "";
  f.disponibilidade.value = p.disponibilidade === "poucas_unidades" ? "poucas_unidades" : p.disponibilidade === "esgotado" ? "esgotado" : "em_estoque";
  f.cupom.value = p.cupom || p.cupom_texto || "";
  f.cupom_descricao.value = p.cupom_descricao || "";
  f.marca.value = p.marca || "";
  f.categoria.value = p.categoria || "";
  f.destaque.checked = !!p.destaque;
  f.descricao.value = p.descricao || "";
  document.getElementById("modal-titulo").textContent = "Editar Â· " + id;
  document.getElementById("modal").hidden = false;
  document.body.classList.add("modal-open");
}
function fecharModal() {
  document.getElementById("modal").hidden = true;
  document.body.classList.remove("modal-open");
  idEmEdicao = null;
}

function salvarEdicao() {
  if (!idEmEdicao) return;
  var p = PRODUTOS.find(function (x) { return x.id === idEmEdicao; });
  if (!p) return;
  var f = document.getElementById("form-edicao");
  var novo = {
    nome: f.nome.value.trim() || p.nome,
    url_afiliado: f.url_afiliado.value.trim(),
    img: f.img.value.trim(),
    fotos: (f.imagens.value || "")
      .split("\n").map(function (s) { return s.trim(); })
      .filter(function (s, i, arr) { return s && !(s === f.img.value.trim() && i === arr.indexOf(s)); }),
    preco: Number(f.preco.value),
    preco_anterior: f.preco_anterior.value === "" ? null : Number(f.preco_anterior.value),
    rating: Number(f.rating.value),
    avaliacoes: Number(f.avaliacoes.value),
    disponibilidade: f.disponibilidade.value,
    cupom: f.cupom.value.trim() || null,
    cupom_descricao: f.cupom_descricao.value.trim() || "",
    marca: f.marca.value.trim() || p.marca,
    categoria: f.categoria.value.trim() || p.categoria,
    categoria_nome: p.categoria_nome,
    destaque: f.destaque.checked,
    descricao: f.descricao.value.trim() || p.descricao,
    product_id: p.product_id,
    merchant: p.merchant,
    merchant_nome: p.merchant_nome,
    comissao: p.comissao,
    icone: p.icone,
    specs: p.specs,
    faq: p.faq
  };
  if (p.id) novo.id = p.id;
  var btn = document.getElementById("btn-salvar");
  btn.disabled = true;
  supaPatch(idEmEdicao, novo).then(function () {
    for (var chave in novo) p[chave] = novo[chave];
    btn.disabled = false;
    fecharModal();
    renderAdmin();
    toast("Produto " + idEmEdicao + " salvo no banco.");
  }).catch(function (e) {
    btn.disabled = false;
    toast("Falha ao salvar: " + e.message);
  });
}

function reverterProduto() {
  if (!idEmEdicao) return;
  var original = listaOriginal.find(function (x) { return x.id === idEmEdicao; });
  if (original) {
    supaPatch(idEmEdicao, original.dados || original).then(function () {
      var p = PRODUTOS.find(function (x) { return x.id === idEmEdicao; });
      if (p && original.dados) for (var chave in original.dados) p[chave] = original.dados[chave];
      if (p && original.nome) { p.nome = original.nome; p.img = original.img; p.url_afiliado = original.url_afiliado; }
      fecharModal();
      renderAdmin();
      toast("Produto revertido ao estado original do banco.");
    }).catch(function (e) { toast("Falha ao reverter: " + e.message); });
  } else {
    toast("Registro original nÃ£o encontrado.");
    fecharModal();
  }
}

function excluirProduto(id) {
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) return;
  var nome = p.nome || id;
  if (!confirm("Excluir \"" + nome + "\" (" + id + ")?\n\nO produto serÃ¡ removido do banco e deixarÃ¡ de aparecer no site. Esta aÃ§Ã£o nÃ£o pode ser desfeita.")) return;
  supaDelete(id).then(function () {
    PRODUTOS = PRODUTOS.filter(function (x) { return x.id !== id; });
    listaOriginal = listaOriginal.filter(function (x) { return x.id !== id; });
    renderAdmin();
    toast("Produto " + id + " excluÃ­do do banco.");
  }).catch(function (e) {
    toast("Falha ao excluir: " + e.message);
  });
}

function resetTotal() {
  if (!confirm("Reenviar TODOS os " + PRODUTOS.length + " produtos atuais para o banco?")) return;
  var btn = document.getElementById("btn-reset");
  btn.disabled = true;
  supaBulkUpsert(PRODUTOS.map(function (p) { return { id: p.id, dados: p }; }))
    .then(function (n) {
      btn.disabled = false;
      toast(n + " produtos sincronizados no banco.");
    })
    .catch(function (e) {
      btn.disabled = false;
      toast("Falha: " + e.message);
    });
}

function exportarJSON() {
  var base = { marca: "WattWheel", categorias: CATEGORIAS, produtos: PRODUTOS };
  var blob = new Blob([JSON.stringify(base)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "products.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast("products.json gerado a partir do banco.");
}

function csvEscape(v) {
  if (v == null) return "";
  var s = String(v);
  if (/[",\n\r;]/.test(s)) {
    s = s.replace(/"/g, '""');
    return '"' + s + '"';
  }
  return s;
}

function exportarCSV() {
  var colunas = [
    "id", "nome", "marca", "categoria", "categoria_nome",
    "preco", "preco_anterior", "rating", "avaliacoes",
    "disponibilidade", "cupom", "cupom_descricao", "destaque", "url_afiliado", "img", "descricao"
  ];
  var linhas = [];
  linhas.push(colunas.map(csvEscape).join(";"));
  PRODUTOS.forEach(function (p) {
    var valores = colunas.map(function (c) {
      var v = p[c];
      if (Array.isArray(v)) v = v.join("; ");
      if (typeof v === "boolean") v = v ? "sim" : "nao";
      return csvEscape(v);
    });
    linhas.push(valores.join(";"));
  });
  var csv = "\ufeff" + linhas.join("\r\n");
  var blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "produtos.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast(PRODUTOS.length + " produtos exportados em CSV.");
}