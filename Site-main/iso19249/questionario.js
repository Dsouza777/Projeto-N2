const secoes = [
  { titulo: "1. Escopo", descricao: "Escopo da ISO 19249 (desenvolvimento seguro).", obrigatorio: true, camposExtras: ["Responsável"], sub: [] },
  { titulo: "4. Princípios de Segurança", descricao: "Princípios: mínimo privilégio, defesa em profundidade.", obrigatorio: true, camposExtras: ["Notas"], sub: [
      { titulo: "4.1 Mínimo Privilégio", descricao: "", obrigatorio: true },
      { titulo: "4.2 Separação de responsabilidades", descricao: "", obrigatorio: false }
    ]
  },
  { titulo: "5. Controles de Desenvolvimento", descricao: "Controle de entrada, validações, autenticação.", obrigatorio: true, camposExtras: ["Checklist"], sub: [] }
];

const STORAGE_KEY = 'iso19249_questionario';
// DOM refs
const indiceEl = document.getElementById("indiceNorma");
const tituloEl = document.getElementById("tituloSecao");
const conteudoEl = document.getElementById("conteudoSecao");
const secaoContainer = document.getElementById("secaoContainer"); // optional for animation
const btnSalvar = document.getElementById("btnSalvar");
const btnNext = document.getElementById("btnProximo");
const btnPrev = document.getElementById("btnAnterior");

if (!indiceEl || !tituloEl || !conteudoEl) {
  console.error("IDs esperados não encontrados: indiceNorma, tituloSecao, conteudoSecao");
}

// state
let _indexMap = [];           // maps list index -> {i, sub}
let current = null;           // {i, sub}
let savedState = loadAllSaved();
let autoSaveInterval = null;

// ---------- build index ----------
function buildIndex() {
  indiceEl.innerHTML = "";
  _indexMap = [];
  secoes.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "indice-item";
    li.textContent = s.titulo;
    li.dataset.i = i;
    li.dataset.sub = -1;
    li.addEventListener("click", onIndexClick);
    indiceEl.appendChild(li);
    _indexMap.push({ i, sub: null });

    if (Array.isArray(s.sub) && s.sub.length) {
      s.sub.forEach((subObj, si) => {
        const liSub = document.createElement("li");
        liSub.className = "indice-item subnivel";
        liSub.textContent = subObj.titulo;
        liSub.dataset.i = i;
        liSub.dataset.sub = si;
        liSub.addEventListener("click", onIndexClick);
        indiceEl.appendChild(liSub);
        _indexMap.push({ i, sub: si });
      });
    }
  });
}

// ---------- index click ----------
function onIndexClick(ev) {
  const i = Number(this.dataset.i);
  const sub = this.dataset.sub === "-1" ? null : Number(this.dataset.sub);
  selectSection(i, sub, this);
}

// ---------- select section ----------
function selectSection(i, sub = null, clickedLi = null) {
  // mark active
  document.querySelectorAll("#indiceNorma .indice-item").forEach(n => n.classList.remove("active"));
  if (clickedLi) clickedLi.classList.add("active");
  else {
    // compute item index and mark
    for (let idx = 0; idx < _indexMap.length; idx++) {
      const m = _indexMap[idx];
      if (m.i === i && m.sub === sub) {
        const nodes = document.querySelectorAll("#indiceNorma .indice-item");
        if (nodes[idx]) nodes[idx].classList.add("active");
        break;
      }
    }
  }

  current = { i, sub };
  renderCurrentSection();
  markCurrentForAutoSave();
}

// ---------- render section ----------
function renderCurrentSection() {
  const { i, sub } = current;
  const sec = secoes[i];
  const titulo = sub !== null ? (sec.sub[sub].titulo || sec.titulo) : sec.titulo;
  const descricao = sub !== null ? (sec.sub[sub].descricao || "") : (sec.descricao || "");

  tituloEl.textContent = titulo;

  // build extras inputs HTML
  let extrasHtml = "";
  if (Array.isArray(sec.camposExtras) && sec.camposExtras.length) {
    extrasHtml += `<div class="extras">`;
    sec.camposExtras.forEach((c, idx) => {
      extrasHtml += `<label>${c}</label><input class="campoExtra" data-idx="${idx}" placeholder="${c}">`;
    });
    extrasHtml += `</div>`;
  }

  // html: dropdown conformidade + obs container (hidden by default)
  conteudoEl.innerHTML = `
    ${ descricao ? `<p class="descricao">${descricao}</p>` : "" }

    <div class="form-row">
      <label>Conformidade</label>
      <select id="conformidadeSelect">
        <option value="SIM">SIM</option>
        <option value="SIM_OBS">SIM com observações</option>
        <option value="NAO">NÃO</option>
      </select>
    </div>

    <div id="obsContainer" style="display:none; margin-top:10px;">
      <label>Observações (exigir se não estiver em conformidade)</label>
      <textarea id="campoTexto" rows="5" placeholder="Descreva aqui..."></textarea>
    </div>

    <div style="margin-top:10px;">
      <label>Anexar arquivo (opcional)</label>
      <input type="file" id="campoArquivo">
    </div>

    ${extrasHtml}

    <div style="margin-top:8px;color:#94a3b8;font-size:13px"><em>Alterações são salvas automaticamente (localStorage).</em></div>
  `;

  // attach events for dropdown behavior
  const select = document.getElementById("conformidadeSelect");
  const obs = document.getElementById("obsContainer");

  select.addEventListener("change", () => {
    if (select.value === "SIM") obs.style.display = "none";
    else obs.style.display = "block";
  });

  // load saved values for this section
  loadSavedForCurrent();

  // apply animation
  if (secaoContainer) {
    secaoContainer.classList.remove("fade");
    void secaoContainer.offsetWidth;
    secaoContainer.classList.add("fade");
  }
}

// ---------- persistence (localStorage) ----------
function loadAllSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("Erro parsing storage:", e);
    return {};
  }
}

function loadSavedForCurrent() {
  const key = getCurrentKey();
  const data = savedState[key];
  if (!data) return;
  const txt = document.getElementById("campoTexto");
  if (txt && data.texto) txt.value = data.texto;
  const extras = document.querySelectorAll(".campoExtra");
  if (extras && data.extras) extras.forEach((el, idx) => el.value = data.extras[idx] || "");
  const select = document.getElementById("conformidadeSelect");
  if (select && data.conformidade) select.value = data.conformidade;
  // show obs if necessary
  const obs = document.getElementById("obsContainer");
  if (obs && select) obs.style.display = (select.value === "SIM") ? "none" : "block";
  // file cannot be repopulated due to browser security
}

function saveCurrentSection() {
  if (!current) return;
  const key = getCurrentKey();
  const textoEl = document.getElementById("campoTexto");
  const texto = textoEl ? textoEl.value.trim() : "";
  const extrasEls = document.querySelectorAll(".campoExtra");
  const extras = extrasEls ? Array.from(extrasEls).map(e => e.value) : [];
  const select = document.getElementById("conformidadeSelect");
  const conformidade = select ? select.value : "SIM";
  const fileInput = document.getElementById("campoArquivo");
  const arquivoName = (fileInput && fileInput.files && fileInput.files[0]) ? fileInput.files[0].name : null;

  // validation: if required and conformidade != SIM, obs must be present
  const sec = secoes[current.i];
  const isSub = current.sub !== null;
  const obrig = isSub ? (sec.sub[current.sub] && sec.sub[current.sub].obrigatorio) : sec.obrigatorio;
  if (obrig && conformidade !== "SIM" && texto === "") {
    // still allow save as draft but warn the user
    // For stricter validation you could block and show message
    console.warn("Seção obrigatória com conformidade != SIM salva sem observações (é recomendável preencher).");
  }

  savedState[key] = {
    texto,
    extras,
    conformidade,
    arquivo: arquivoName,
    updatedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
  } catch (e) {
    console.error("Erro ao salvar no localStorage:", e);
  }
}

// helper key
function getCurrentKey() {
  return current.sub !== null ? `${current.i}_${current.sub}` : `${current.i}`;
}

// ---------- autosave ----------
function setupAutoSave() {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => {
    if (current) saveCurrentSection();
  }, 5000);
}

// ---------- buttons ----------
function setupButtons() {
  if (btnSalvar) {
    btnSalvar.addEventListener("click", () => {
      if (!current) return alert("Nenhuma seção selecionada.");
      saveCurrentSection();
      alert("Seção salva.");
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const idx = findCurrentListIndex();
      if (idx >= 0 && idx < _indexMap.length - 1) selectByListIndex(idx + 1);
    });
  }
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      const idx = findCurrentListIndex();
      if (idx > 0) selectByListIndex(idx - 1);
    });
  }
}

// ---------- helpers for list <-> mapping ----------
function findCurrentListIndex() {
  if (!current) return -1;
  for (let k = 0; k < _indexMap.length; k++) {
    const m = _indexMap[k];
    if (m.i === current.i && m.sub === current.sub) return k;
  }
  return -1;
}

function selectByListIndex(listIdx) {
  const mapping = _indexMap[listIdx];
  if (!mapping) return;
  const nodes = document.querySelectorAll("#indiceNorma .indice-item");
  if (nodes[listIdx]) nodes[listIdx].click();
}

// ---------- init ----------
function init() {
  savedState = loadAllSaved();
  buildIndex();
  // select first item if exists
  if (_indexMap.length) {
    // click first element in the list
    const firstNode = document.querySelectorAll("#indiceNorma .indice-item")[0];
    if (firstNode) firstNode.click();
  }
  setupButtons();
  setupAutoSave();
  console.log("ISO 27001 questionnaire initialized. STORAGE_KEY:", STORAGE_KEY);
}

// expose mark for autosave when needed (internal)
function markCurrentForAutoSave() {
  window._currentSection = current;
}

// build _indexMap after buildIndex runs, but buildIndex populates _indexMap so it's fine
// Also populate _indexMap according to buildIndex implementation:
(function patchIndexMapAfterBuild() {
  const originalBuild = buildIndex;
  buildIndex = function() {
    originalBuild();
    // rebuild _indexMap correctly (already done inside buildIndex), so no-op
  };
})();
document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// run
init();
