"use strict";

var EDICOES_KEY = "nshop_edicoes";
var PG_POR_PAGINA = 50;
var EDICOES = {};
var paginaAtual = 0;
var listaFiltrada = [];
var idEmEdicao = null;

function carregarEdicoesArmazenadas() {
  try {
    EDICOES = JSON.parse(localStorage.getItem(EDICOES_KEY) || "{}") || {};
  } catch (e) {
    EDICOES = {};
  }
}

function gravarEdicoes() {
  try {
    localStorage.setItem(EDICOES_KEY, JSON.stringify(EDICOES));
  } catch (e) {
    toast("Não foi possível salvar no navegador.");
  }
}

function aplicarEdicoes(prod) {
  var ed = EDICOES[prod.id];
  if (!ed) return prod;
  var novo = {};
  for (var chave in prod) novo[chave] = prod[chave];
  for (var k in ed) novo[k] = ed[k];
  return novo;
}

function initAdmin() {
  carregarEdicoesArmazenadas();
  preencherFiltroCategorias();
  document.getElementById("busca").addEventListener("input", function () { paginaAtual = 0; renderAdmin(); });
  document.getElementById("filtro-disp").addEventListener("change", function () { paginaAtual = 0; renderAdmin(); });
  document.getElementById("filtro-cat").addEventListener("change", function () { paginaAtual = 0; renderAdmin(); });
  document.getElementById("btn-export").addEventListener("click", exportarJSON);
  document.getElementById("btn-reset").addEventListener("click", resetGeral);
  document.getElementById("btn-close").addEventListener("click", fecharModal);
  document.getElementById("btn-reverter").addEventListener("click", reverterProduto);
  document.getElementById("form-edicao").addEventListener("submit", salvarProduto);
  document.getElementById("admin-modal").addEventListener("click", function (e) {
    if (e.target === document.getElementById("admin-modal")) fecharModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !document.getElementById("admin-modal").hidden) fecharModal();
  });
  renderAdmin();
}

function preencherFiltroCategorias() {
  var sel = document.getElementById("filtro-cat");
  var cats = {};
  PRODUTOS.forEach(function (p) {
    if (p.categoria && !cats[p.categoria]) cats[p.categoria] = p.categoria_nome;
  });
  Object.keys(cats).sort().forEach(function (slug) {
    var op = document.createElement("option");
    op.value = slug;
    op.textContent = cats[slug];
    sel.appendChild(op);
  });
}

function filtrarProdutos() {
  var termo = document.getElementById("busca").value.trim().toLowerCase();
  var disp = document.getElementById("filtro-disp").value;
  var cat = document.getElementById("filtro-cat").value;
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
    total + " produto" + (total === 1 ? "" : "s") + " · pág " + (paginaAtual + 1) + "/" + totalPaginas;

  var list = document.getElementById("admin-list");
  if (!fatia.length) {
    list.innerHTML = '<div class="admin-empty">Nenhum produto encontrado.</div>';
  } else {
    list.innerHTML = fatia.map(function (p) {
      var q = aplicarEdicoes(p);
      var editado = EDICOES[p.id] ? '<span class="badge-ed">EDITADO</span>' : "";
      var sel = ehtoSelect(q.disponibilidade);
      return '<div class="admin-row" data-id="' + p.id + '">' +
        '<img class="admin-thumb" src="' + esc(imgProd(q, 0)) + '" alt="" loading="lazy"/>' +
        '<div class="admin-row-main">' +
        '<div class="admin-row-titulo">' + esc(q.nome) + " " + editado + "</div>" +
        '<div class="admin-row-meta">' + esc(q.marca || "—") + " · " + esc(q.categoria_nome || q.categoria || "—") +
        " · " + q.rating.toFixed(1) + "★ (" + num(q.avaliacoes) + ")</div>" +
        '<div class="admin-row-link">Link: <span class="link-val">' + esc(q.url_afiliado || "—") + "</span></div>" +
        "</div>" +
        '<div class="admin-row-preco">' + fmt(q.preco) + "</div>" +
        '<span class="admin-avail ' + q.disponibilidade + '">' + sel + "</span>" +
        (q.destaque ? '<span class="admin-feat">★</span>' : "") +
        '<button class="btn btn-light btn-edit" type="button" data-edit="' + p.id + '">Editar</button>' +
        "</div>";
    }).join("");
  }

  $$(".btn-edit", list).forEach(function (b) {
    b.addEventListener("click", function () { abrirModal(b.dataset.edit); });
  });

  var pager = document.getElementById("admin-pager");
  if (totalPaginas <= 1) {
    pager.innerHTML = "";
  } else {
    var botoes = [];
    if (paginaAtual > 0) botoes.push('<button class="btn btn-light" type="button" data-pg="' + (paginaAtual - 1) + '">‹ Anterior</button>');
    botoes.push('<span class="pager-info">Página ' + (paginaAtual + 1) + " de " + totalPaginas + "</span>");
    if (paginaAtual < totalPaginas - 1) botoes.push('<button class="btn btn-light" type="button" data-pg="' + (paginaAtual + 1) + '">Próxima ›</button>');
    pager.innerHTML = botoes.join("");
    $$("[data-pg]", pager).forEach(function (b) {
      b.addEventListener("click", function () { paginaAtual = Number(b.dataset.pg); renderAdmin(); });
    });
  }
}

function ehtoSelect(v) {
  if (v === "poucas_unidades") return "Poucas unidades";
  if (v === "esgotado") return "Esgotado";
  return "Em estoque";
}

function abrirModal(id) {
  idEmEdicao = id;
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) return;
  var q = aplicarEdicoes(p);
  var f = document.getElementById("form-edicao");
  f.nome.value = q.nome || "";
  f.url_afiliado.value = q.url_afiliado || "";
  f.img.value = q.img || "";
  f.preco.value = q.preco;
  f.preco_anterior.value = q.preco_anterior != null ? q.preco_anterior : "";
  f.rating.value = q.rating;
  f.avaliacoes.value = q.avaliacoes;
  f.disponibilidade.value = q.disponibilidade === "poucas_unidades" ? "poucas_unidades" : q.disponibilidade === "esgotado" ? "esgotado" : "em_estoque";
  f.marca.value = q.marca || "";
  f.categoria.value = q.categoria || "";
  f.destaque.checked = !!q.destaque;
  f.descricao.value = q.descricao || "";
  document.getElementById("modal-titulo").textContent = "Editar · " + id;
  atualizarMarcadorDirty();
  document.getElementById("admin-modal").hidden = false;
  setTimeout(function () { f.nome.focus(); }, 30);
}

function fecharModal() {
  document.getElementById("admin-modal").hidden = true;
  idEmEdicao = null;
}

function salvarProduto() {
  if (!idEmEdicao) return;
  var f = document.getElementById("form-edicao");
  var ed = {
    nome: String(f.nome.value || "").trim(),
    url_afiliado: String(f.url_afiliado.value || "").trim(),
    img: String(f.img.value || "").trim(),
    preco: Number(f.preco.value),
    preco_anterior: f.preco_anterior.value === "" ? null : Number(f.preco_anterior.value),
    rating: Number(f.rating.value),
    avaliacoes: Number(f.avaliacoes.value),
    disponibilidade: f.disponibilidade.value,
    marca: String(f.marca.value || "").trim(),
    categoria: String(f.categoria.value || "").trim(),
    destaque: f.destaque.checked,
    descricao: String(f.descricao.value || "").trim()
  };
  EDICOES[idEmEdicao] = ed;
  gravarEdicoes();
  fecharModal();
  renderAdmin();
  toast("Produto " + idEmEdicao + " salvo.");
}

function reverterProduto() {
  if (!idEmEdicao) return;
  delete EDICOES[idEmEdicao];
  gravarEdicoes();
  fecharModal();
  renderAdmin();
  toast("Alterações revertidas para o original.");
}

function atualizarMarcadorDirty() {
  var el = document.getElementById("admin-dirty");
  el.textContent = EDICOES[idEmEdicao] ? "Há alterações salvas para este produto." : "Sem alterações salvas.";
}

function resetGeral() {
  if (!confirm("Apagar TODAS as edições salvas no navegador?")) return;
  EDICOES = {};
  gravarEdicoes();
  renderAdmin();
  toast("Todas as edições foram apagadas.");
}

function exportarJSON() {
  var base = {
    marca: DADOS.marca,
    categorias: DADOS.categorias,
    produtos: PRODUTOS.map(aplicarEdicoes)
  };
  var json = JSON.stringify(base);
  var ba = document.createElement("a");
  ba.href = URL.createObjectURL(new Blob([json], { type: "application/json" }));
  ba.download = "products.json";
  document.body.appendChild(ba);
  ba.click();
  ba.remove();
  toast("products.json baixado — faça upload/commit do arquivo para publicar.");
}