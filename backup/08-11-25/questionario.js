// ========================= questionario.js =========================

// Lê o parâmetro ISO da URL
const params = new URLSearchParams(window.location.search);
const iso = params.get("iso");

// Título e descrição
const tituloISO = document.getElementById("tituloISO");
const descricaoISO = document.getElementById("descricaoISO");

const infoISO = {
  "19249": {
    titulo: "Desenvolvimento Seguro — ISO 19249",
    desc: "Responda às questões sobre práticas seguras de desenvolvimento.",
    perguntas: [
      "Quais práticas de codificação segura você adota?",
      "Como você realiza testes de segurança em seus sistemas?",
      "Há políticas internas relacionadas à segurança no ciclo de vida do software?"
    ]
  },
  "27034": {
    titulo: "Gerenciamento de Segurança — ISO 27034",
    desc: "Responda às questões sobre gerenciamento de segurança de aplicativos.",
    perguntas: [
      "Como é feito o controle de acesso em suas aplicações?",
      "Você possui um processo formal de revisão de código seguro?",
      "Como as vulnerabilidades são tratadas após identificadas?"
    ]
  },
  "27001": {
    titulo: "Guia de Certificação — ISO 27001",
    desc: "Responda às questões relacionadas à certificação ISO 27001.",
    perguntas: [
      "Quais documentos e evidências já foram produzidos?",
      "Existe um responsável pela gestão da certificação?",
      "Como são mantidos os registros de auditoria interna?"
    ]
  }
};

// Aplica título e descrição
if (infoISO[iso]) {
  tituloISO.textContent = infoISO[iso].titulo;
  descricaoISO.textContent = infoISO[iso].desc;
  gerarPerguntas(infoISO[iso].perguntas);
} else {
  tituloISO.textContent = "Questionário ISO";
  descricaoISO.textContent = "Selecione uma norma válida.";
}

// ========================= Gera perguntas dinâmicas =========================
function gerarPerguntas(listaPerguntas) {
  const container = document.getElementById("perguntasContainer");
  container.innerHTML = "";

  listaPerguntas.forEach((texto, index) => {
    const div = document.createElement("div");
    div.classList.add("pergunta");

    div.innerHTML = `
      <label for="resposta${index}">${texto}</label>
      <textarea id="resposta${index}" rows="4" placeholder="Digite sua resposta..." required></textarea>

      <div class="subgrupo">
        <label for="arquivo${index}" class="upload-label">Anexar arquivo:</label>
        <input type="file" id="arquivo${index}" multiple>

        <div class="checkbox">
          <input type="checkbox" id="conformidade${index}">
          <label for="conformidade${index}">Conformidade</label>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// ========================= Envio do formulário =========================
document.getElementById("formQuestionario").addEventListener("submit", (e) => {
  e.preventDefault();

  const perguntas = infoISO[iso]?.perguntas || [];
  const respostas = [];

  perguntas.forEach((texto, i) => {
    const resposta = document.getElementById(`resposta${i}`).value.trim();
    const arquivos = Array.from(document.getElementById(`arquivo${i}`).files).map(f => f.name);
    const conforme = document.getElementById(`conformidade${i}`).checked;

    respostas.push({
      pergunta: texto,
      resposta: resposta,
      anexos: arquivos,
      conformidade: conforme
    });
  });

  const dados = {
    norma: iso,
    dataEnvio: new Date().toISOString(),
    respostas: respostas
  };

  // Exibe JSON no console
  console.log("Dados a enviar:", JSON.stringify(dados, null, 2));

  const resultado = document.getElementById("resultado");
  resultado.textContent = "Formulário salvo com sucesso (JSON gerado no console).";
  resultado.style.display = "block";

  e.target.reset();
});

// ========================= Voltar ao Painel =========================
document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
