document.getElementById('formacao').addEventListener('change', function(){
    const catchcurso = document.getElementById('formacao').value;

    if(catchcurso === 'Ensino Fundamental' || catchcurso === 'Ensino Médio'){
        document.getElementById('fcurso').disabled = true;
        document.getElementById('escola').placeholder = 'Escola que está cursando ou concluiu';
    }else{
        document.getElementById('fcurso').disabled = false;
        document.getElementById('fcurso').placeholder = 'ADM, Contabilidade, Engenharia, Sistemas da informação';
        document.getElementById('escola').placeholder = 'Universidade/Escola que está cursando ou concluiu';
    }
})

document.getElementById("botao").addEventListener("click", function (e) {
    e.preventDefault();

    // Verificação dos campos obrigatórios
    const camposObrigatórios = [
        "#nome", "#estadoc", "#nacionalidade", "#nascimento",
        "#cep", "#city", "#tel", "#email",
        "#formacao", "#escola", "#anoc", "#linkedin"
    ];

    let camposInvalidos = camposObrigatórios.filter((campo) => {
        const elemento = document.querySelector(campo);
        return !elemento.value.trim();
    });

    if (camposInvalidos.length > 0) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Função para calcular a idade com base na data de nascimento
    const calcularIdade = (dataNascimento) => {
        const hoje = new Date();
        const [ano, mes, dia] = dataNascimento.split("-").map(Number);
        let idade = hoje.getFullYear() - ano;
        if (hoje.getMonth() < mes - 1 || (hoje.getMonth() === mes - 1 && hoje.getDate() < dia)) {
            idade--;
        }
        return idade;
    };

    // Dados pessoais
    const dadosPessoais = {
        nome: document.querySelector("#nome").value,
        civil: document.querySelector("#estadoc").value,
        nacionalidade: document.querySelector("#nacionalidade").value,
        idade: calcularIdade(document.querySelector("#nascimento").value),
        cidade: document.querySelector("#city").value,
        telefone: document.querySelector("#tel").value,
        email: document.querySelector("#email").value,
        linkedin: document.querySelector("#linkedin").value,
        github: document.querySelector("#github").value
    };

    // Nome completo para exibir no topo
    const nomeCompleto = dadosPessoais.nome;

    // Nome do LinkedIn com primeiro e segundo nome
    const nomesLinkedIn = dadosPessoais.nome.split(" ");
    const primeiroNome = nomesLinkedIn[0];
    const segundoNome = nomesLinkedIn.length > 1 ? nomesLinkedIn[1] : "";
    const nomeLinkedIn = primeiroNome + (segundoNome ? " " + segundoNome : "");

    // Formação
    const formacao = {
        grau: document.querySelector("#formacao").value,
        curso: document.querySelector('#fcurso').value,
        escola: document.querySelector("#escola").value,
        anoConclusao: document.querySelector("#anoc").value
    };

    // Cursos extracurriculares
    const cursos = [];
    for (let containerId of cursoIds) {
        const id = containerId.replace("c_curso", "");

        const formatarData = (data) => {
            if (!data) return "";
            const [ano, mes] = data.split("-");
            return `${mes}/${ano}`;
        };

        const cursoAtual = {
            nome: document.querySelector(`#n_curso${id}`)?.value || "",
            instituicao: document.querySelector(`#i_curso${id}`)?.value || "",
            duracao: `De: ${formatarData(document.querySelector(`#durde_curso${id}`)?.value)}, até: ${formatarData(document.querySelector(`#durate_curso${id}`)?.value)}`
        };
        cursos.push(cursoAtual);
    }

    // Habilidades
    const habilidades = document.querySelector("#habilidades").value.trim();

    // Objetivos
    const objetivo = document.querySelector("#objetivo").value.trim();

    // Experiências profissionais
    const experiencias = [];
    for (let containerId of experienciasIds) {
        const id = containerId.replace("c_xp", "");

        const empresa = document.querySelector(`#xp_empresa${id}`)?.value || "";
        const cargo = document.querySelector(`#xp_cargo${id}`)?.value || "";

        // Captura as datas e ajusta o formato para MM/YYYY
        const durDe = document.querySelector(`#xp_dur_de${id}`)?.value || "";
        const durAte = document.querySelector(`#xp_dur_ate${id}`)?.value || "";

        const formatarData = (data) => {
            if (!data) return "";
            const [ano, mes] = data.split("-");
            return `${mes}/${ano}`;
        };

        const emAtividade = document.querySelector(`#ematividade${id}`)?.checked || false;

        const duracao = emAtividade
            ? `<b>De: ${formatarData(durDe)}, até: em atividade</b>`
            : `De: ${formatarData(durDe)}, até: ${formatarData(durAte)}`;

        // Captura múltiplas atribuições
        const atribContainer = document.getElementById(`xp_atrib_container${id}`);
        const atribuicoes = Array.from(atribContainer.querySelectorAll(".xp-atrib-group"))
    .map((group) => {
        const titulo = group.querySelector(".xp-atrib-titulo")?.value.trim();
        const descricao = group.querySelector(".xp-atrib-desc")?.value.trim();
        return `<b>${titulo}:</b> ${descricao}`;
    })
    .filter((value) => value !== "");

        experiencias.push({
            empresa,
            cargo,
            duracao,
            emAtividade,
            atribuicoes
        });
    }

    // Observações
    const observacoes = document.querySelector("#obs").value.trim();

    // Renderizar Currículo
    const container = document.createElement("div");
    container.classList.add("curriculo");

    container.innerHTML = `
        <b>${nomeCompleto}</b><br>
        ${dadosPessoais.idade}, ${dadosPessoais.nacionalidade}, ${dadosPessoais.civil} <br>
        ${dadosPessoais.cidade}<br>
        <b>Cel:</b> ${dadosPessoais.telefone} | <b>e-mail:</b> <a href='mailto:${dadosPessoais.email}'>${dadosPessoais.email}</a> <br>
        <b>LinkedIn:</b> <a href="${dadosPessoais.linkedin}" target="_blank" rel="noopener noreferrer">${nomeLinkedIn}</a><br>
        ${dadosPessoais.github ? `<b>GitHub:</b> <a href="${dadosPessoais.github}" target="_blank">${nomeLinkedIn}</a><br><br>` : ""}

        <b>Objetivo</b>
        <hr/>
        ${objetivo}<br><br>

        <b>Formação Academica</b>
        <hr/>
        <b>Graduação:</b> ${formacao.grau} - ${formacao.curso ? `${formacao.curso}` : ""} - ${formacao.escola} <br>
        <b>Ano de Conclusão:</b> ${formacao.anoConclusao}<br>

        ${cursos.length > 0 ? "<h2>Cursos Extracurriculares</h2><hr/>" : ""}
        ${cursos.map((c) => `<p><b>Curso:</b> ${c.nome}<br><b>Instituição:</b> ${c.instituicao}<br><b>Duração:</b> ${c.duracao}</p>`).join("")}

        ${habilidades ? `<h2>Habilidades</h2><hr/><p>${habilidades}</p>` : ""}

        ${experiencias.length > 0 ? "<h2>Experiências Profissionais</h2><hr/>" : ""}
        ${experiencias
            .map(
                (e) => `<b> <ul><li id='empresa'>${e.empresa} - ${e.cargo}</b> | ${e.duracao}</li></ul>${
                    e.atribuicoes.length > 0
                        ? `<ul>${e.atribuicoes.map((atr) => `<li>${atr}</li>`).join("")}</ul>`
                        : ""
                }`
            )
            .join("")}

        ${observacoes ? `<h2>Observações</h2><hr/><p>${observacoes}</p>` : ""}
    `;

    const body = document.querySelector("body");
    body.innerHTML = ""; // Limpa o conteúdo atual
    body.appendChild(container);

    const head = document.querySelector("head");
    const css1 = document.getElementById("css1");
    const css2 = document.getElementById("css2");
    const css3 = document.getElementById("css3");
    const css4 = document.getElementById("css4");
    const css5 = document.getElementById("css5");

    head.removeChild(css1);
    head.removeChild(css2);
    head.removeChild(css3);
    head.removeChild(css4);
    head.removeChild(css5);
    head.innerHTML = '<link rel="stylesheet" href="static/css/curriculo.css">';

    // Configuração do HTML2PDF
    const opt = {
        margin: 8,
        filename: "curriculo.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().from(container).set(opt).save();

    // Botão de Imprimir
    const botaoImprimir = document.createElement("button");
    botaoImprimir.textContent = "Imprimir Currículo";
    botaoImprimir.classList.add("btn-print");
    botaoImprimir.addEventListener("click", function () {
        botaoImprimir.style = "display: none";
        html2pdf().from(container).set(opt).save();
        botaoImprimir.style = "display: block";
    });
    body.appendChild(botaoImprimir);
});
