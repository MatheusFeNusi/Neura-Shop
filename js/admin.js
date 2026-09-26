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
    headers: Object.assign(supaHeaders(false), { "Prefer": "return=representation" }),
    body: JSON.stringify({ dados: dados })
  }).then(function (r) {
    if (!r.ok) throw new Error("supaPATCH " + r.status);
    return r.json().then(function (linhas) {
      if (!linhas || !linhas.length) {
        throw new Error("RLS bloqueou a escrita (0 linhas). Habilite as policies de UPDATE/INSERT para 'authenticated' na tabela produtos.");
      }
      return linhas;
    });
  });
}
function supaDelete(id) {
  return fetch(supaURL("/rest/v1/produtos?id=eq." + encodeURIComponent(id)), {
    method: "DELETE",
    headers: Object.assign(supaHeaders(false), { "Prefer": "return=representation" })
  }).then(function (r) {
    if (!r.ok) throw new Error("supaDELETE " + r.status);
    return r.json().then(function (linhas) {
      if (!linhas || !linhas.length) {
        throw new Error("RLS bloqueou a exclusao (0 linhas). Habilite a policy de DELETE para 'authenticated' na tabela produtos.");
      }
      return linhas;
    });
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
      if (!r.ok) {
        return r.json().then(function (b) {
          var m = (b && b.message) || "";
          if (/row-level security|row level security/i.test(m)) {
            throw new Error("RLS bloqueou o INSERT. Rode tools/fix-rls-produtos.sql no SQL Editor do Supabase.");
          }
          throw new Error("supaUpsert " + r.status);
        });
      }
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
        var rawMsg = (b && (b.msg || b.error_description || b.message || b.error)) || "Falha ao entrar.";
        if (/invalid.*credential/i.test(rawMsg)) {
          rawMsg = "E-mail ou senha incorretos (ou usuário não criado no Supabase).";
        } else if (/email not confirmed/i.test(rawMsg)) {
          rawMsg = "E-mail pendente de confirmação no Supabase.";
        }
        throw new Error(rawMsg);
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
  var loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      aoEntrar();
    });
  }
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
  var addLojas = document.querySelector(".btn-add[data-alvo='edit-lojas']");
  if (addLojas) addLojas.addEventListener("click", function () {
    var lista = document.getElementById("edit-lojas");
    var linha = criarLinhaLoja();
    lista.appendChild(linha);
    linha.querySelector(".campo-nome").focus();
  });
  var addImagens = document.querySelector(".btn-add[data-alvo='edit-imagens']");
  if (addImagens) addImagens.addEventListener("click", function () {
    var lista = document.getElementById("edit-imagens");
    var linha = criarLinhaImg();
    lista.appendChild(linha);
    linha.querySelector("input").focus();
  });
  var addBanners = document.querySelector(".btn-add[data-alvo='edit-banners']");
  if (addBanners) addBanners.addEventListener("click", function () {
    var lista = document.getElementById("edit-banners");
    var linha = criarLinhaBanner();
    lista.appendChild(linha);
    linha.querySelector("input").focus();
  });
  var addReviews = document.querySelector(".btn-add[data-alvo='edit-reviews']");
  if (addReviews) addReviews.addEventListener("click", function () {
    var lista = document.getElementById("edit-reviews");
    var linha = criarLinhaReview();
    lista.appendChild(linha);
    linha.querySelector(".campo-nome").focus();
  });
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
  if (sessao && sessao.access_token) {
    mostrarEditor();
  } else {
    mostrarLogin();
  }
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
    '<a class="btn btn-light btn-ver" href="product.html?id=' + encodeURIComponent(p.id) + '" target="_blank" rel="noopener">Ver</a>' +
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

function criarLinhaLoja(l) {
  var div = document.createElement("div");
  div.className = "edit-linha dp-loja";
  var nome = document.createElement("input");
  nome.type = "text"; nome.className = "campo-nome"; nome.placeholder = "Loja (ex: Amazon)";
  nome.value = l && l.nome ? l.nome : "";
  var url = document.createElement("input");
  url.type = "text"; url.className = "campo-url"; url.placeholder = "URL de busca (ex: https://www.amazon.com/s?k=)";
  url.value = l && l.url ? l.url : "";
  var preco = document.createElement("input");
  preco.type = "number"; preco.inputMode = "decimal"; preco.className = "campo-preco"; preco.placeholder = "US$";
  preco.value = l && l.preco != null ? l.preco : "";
  preco.min = "0";
  var rm = document.createElement("button");
  rm.type = "button"; rm.className = "edit-rm"; rm.textContent = "×"; rm.title = "Remover loja";
  rm.addEventListener("click", function () { div.parentNode.removeChild(div); });
  div.appendChild(nome); div.appendChild(url); div.appendChild(preco); div.appendChild(rm);
  return div;
}
function criarLinhaImg(url) {
  var div = document.createElement("div");
  div.className = "edit-linha dp-img";
  var input = document.createElement("input");
  input.type = "text"; input.className = "campo-url"; input.placeholder = "https://imagem.jpg";
  input.value = url || "";
  var rm = document.createElement("button");
  rm.type = "button"; rm.className = "edit-rm"; rm.textContent = "×"; rm.title = "Remover imagem";
  rm.addEventListener("click", function () { div.parentNode.removeChild(div); });
  div.appendChild(input); div.appendChild(rm);
  return div;
}
function criarLinhaBanner(url) {
  var div = document.createElement("div");
  div.className = "edit-linha dp-img";
  var input = document.createElement("input");
  input.type = "text"; input.className = "campo-url"; input.placeholder = "https://banner.jpg";
  input.value = url || "";
  var rm = document.createElement("button");
  rm.type = "button"; rm.className = "edit-rm"; rm.textContent = "×"; rm.title = "Remover banner";
  rm.addEventListener("click", function () { div.parentNode.removeChild(div); });
  div.appendChild(input); div.appendChild(rm);
  return div;
}
function criarLinhaReview(r) {
  var div = document.createElement("div");
  div.className = "edit-linha dp-review";
  var foto = document.createElement("input");
  foto.type = "text"; foto.className = "campo-img"; foto.placeholder = "Foto (URL)";
  foto.value = r && r.foto ? r.foto : "";
  var nome = document.createElement("input");
  nome.type = "text"; nome.className = "campo-nome"; nome.placeholder = "Nome do cliente";
  nome.value = r && r.nome ? r.nome : "";
  var nota = document.createElement("input");
  nota.type = "number"; nota.inputMode = "decimal"; nota.min = "0"; nota.max = "5"; nota.step = "0.5";
  nota.className = "campo-preco"; nota.placeholder = "Nota"; nota.title = "Nota de 1 a 5";
  nota.value = r && r.nota != null ? r.nota : "";
  var texto = document.createElement("input");
  texto.type = "text"; texto.className = "campo-url"; texto.placeholder = "Texto do comentário";
  texto.value = r && r.texto ? r.texto : "";
  var rm = document.createElement("button");
  rm.type = "button"; rm.className = "edit-rm"; rm.textContent = "×"; rm.title = "Remover avaliação";
  rm.addEventListener("click", function () { div.parentNode.removeChild(div); });
  div.appendChild(foto); div.appendChild(nome); div.appendChild(nota); div.appendChild(texto); div.appendChild(rm);
  return div;
}
function montarEditLojas(lojas) {
  var lista = document.getElementById("edit-lojas");
  lista.innerHTML = "";
  (lojas || []).forEach(function (l) { lista.appendChild(criarLinhaLoja(l)); });
  if (!lista.children.length) lista.appendChild(criarLinhaLoja());
}
function montarEditImagens(fotos, imgPrincipal) {
  var lista = document.getElementById("edit-imagens");
  lista.innerHTML = "";
  (fotos || []).forEach(function (f) {
    if (f && f !== (imgPrincipal || "")) lista.appendChild(criarLinhaImg(f));
  });
  if (!lista.children.length) lista.appendChild(criarLinhaImg());
}
function montarEditBanners(banners) {
  var lista = document.getElementById("edit-banners");
  lista.innerHTML = "";
  (banners || []).forEach(function (b) { lista.appendChild(criarLinhaBanner(b)); });
  if (!lista.children.length) lista.appendChild(criarLinhaBanner());
}
function montarEditReviews(reviews) {
  var lista = document.getElementById("edit-reviews");
  lista.innerHTML = "";
  (reviews || []).forEach(function (r) { lista.appendChild(criarLinhaReview(r)); });
  if (!lista.children.length) lista.appendChild(criarLinhaReview());
}
function lerEditLojas() {
  var lista = document.getElementById("edit-lojas");
  var out = [];
  Array.prototype.forEach.call(lista.children, function (linha) {
    var nome = (linha.querySelector(".campo-nome").value || "").trim();
    var url = (linha.querySelector(".campo-url").value || "").trim();
    if (!nome || !url) return;
    var loja = { nome: nome, url: url };
    var preco = linha.querySelector(".campo-preco").value;
    if (preco !== "" && preco != null && isFinite(Number(preco))) loja.preco = Number(preco);
    out.push(loja);
  });
  return out;
}
function lerEditImagens() {
  var lista = document.getElementById("edit-imagens");
  var principal = (document.getElementById("form-edicao").img.value || "").trim();
  var out = [];
  Array.prototype.forEach.call(lista.children, function (linha) {
    var v = (linha.querySelector("input").value || "").trim();
    if (v && v !== principal) out.push(v);
  });
  return out;
}
function lerEditBanners() {
  var lista = document.getElementById("edit-banners");
  var out = [];
  Array.prototype.forEach.call(lista.children, function (linha) {
    var v = (linha.querySelector("input").value || "").trim();
    if (v) out.push(v);
  });
  return out;
}
function lerEditReviews() {
  var lista = document.getElementById("edit-reviews");
  var out = [];
  Array.prototype.forEach.call(lista.children, function (linha) {
    var foto = (linha.querySelector(".campo-img").value || "").trim();
    var nome = (linha.querySelector(".campo-nome").value || "").trim();
    var texto = (linha.querySelector(".campo-url").value || "").trim();
    var notaEl = linha.querySelector(".campo-preco");
    if (!nome || !texto) return;
    var nota = Number(notaEl.value);
    if (!notaEl.value || !isFinite(nota)) nota = 5;
    nota = Math.max(0, Math.min(5, nota));
    var r = { nome: nome, nota: nota, texto: texto };
    if (foto) r.foto = foto;
    out.push(r);
  });
  return out;
}

function abrirModal(id) {
  idEmEdicao = id;
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) { toast("Produto nÃ£o encontrado."); return; }
  var f = document.getElementById("form-edicao");
  f.nome.value = p.nome || "";
  f.url_afiliado.value = p.url_afiliado || "";
  f.img.value = p.img || "";
  var imgPrincipal = p.img || "";
  montarEditImagens(p.fotos, imgPrincipal);
  montarEditBanners(p.banners);
  f.video.value = p.video || "";
  f.preco.value = p.preco != null ? p.preco : "";
  f.preco_anterior.value = p.preco_anterior != null ? p.preco_anterior : "";
  f.rating.value = p.rating != null ? p.rating : "";
  f.avaliacoes.value = p.avaliacoes != null ? p.avaliacoes : "";
  f.disponibilidade.value = p.disponibilidade === "poucas_unidades" ? "poucas_unidades" : p.disponibilidade === "esgotado" ? "esgotado" : "em_estoque";
  f.cupom.value = p.cupom || p.cupom_texto || "";
  f.cupom_descricao.value = p.cupom_descricao || "";
  montarEditLojas(p.lojas_compare);
  f.marca.value = p.marca || "";
  f.categoria.value = p.categoria || "";
  f.destaque.checked = !!p.destaque;
  f.descricao.value = p.descricao || "";
  montarEditReviews(p.reviews);
  document.getElementById("modal-titulo").textContent = "Editar Â· " + id;
  var linkVer = document.getElementById("btn-ver-modal");
  if (linkVer) linkVer.href = "product.html?id=" + encodeURIComponent(id);
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
      fotos: lerEditImagens(),
      preco: Number(f.preco.value),
      preco_anterior: f.preco_anterior.value === "" ? null : Number(f.preco_anterior.value),
      rating: Number(f.rating.value),
      avaliacoes: Number(f.avaliacoes.value),
      disponibilidade: f.disponibilidade.value,
      cupom: f.cupom.value.trim() || null,
      cupom_descricao: f.cupom_descricao.value.trim() || "",
      lojas_compare: lerEditLojas(),
marca: f.marca.value.trim() || p.marca,
      categoria: f.categoria.value.trim() || p.categoria,
      categoria_nome: p.categoria_nome,
      destaque: f.destaque.checked,
      descricao: f.descricao.value.trim() || p.descricao,
      banners: lerEditBanners(),
      video: f.video.value.trim() || null,
      reviews: lerEditReviews(),
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
    "disponibilidade", "cupom", "cupom_descricao", "lojas_compare", "destaque", "url_afiliado", "img", "descricao"
  ];
  var linhas = [];
  linhas.push(colunas.map(csvEscape).join(";"));
  PRODUTOS.forEach(function (p) {
    var valores = colunas.map(function (c) {
      var v = p[c];
      if (c === "lojas_compare" && Array.isArray(v)) v = v.map(function (l) { return (l.nome || "") + "|" + (l.url || "") + (l.preco != null ? "|" + l.preco : ""); }).join("; ");
      else if (Array.isArray(v)) v = v.join("; ");
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