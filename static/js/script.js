document.getElementById("botao").addEventListener("click", function (e) {
    e.preventDefault();

    // Verificação dos campos obrigatórios
    const camposObrigatorios = [
        "#nome", "#estadoc", "#nacionalidade", "#nascimento",
        "#rua", "#bairro", "#cep", "#city", "#tel", "#email",
        "#formacao", "#escola", "#anoc"
    ];

    let camposInvalidos = camposObrigatorios.filter((campo) => {
        const elemento = document.querySelector(campo);
        return !elemento.value.trim();
    });

    if (camposInvalidos.length > 0) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Dados pessoais
    const dadosPessoais = {
        nome: document.querySelector("#nome").value,
        civil: document.querySelector("#estadoc").value,
        nacionalidade: document.querySelector("#nacionalidade").value,
        nascimento: document.querySelector("#nascimento").value.split("-").reverse().join("/"),
        endereco: `${document.querySelector("#rua").value}, ${document.querySelector("#bairro").value}, CEP ${document.querySelector("#cep").value}`,
        cidade: document.querySelector("#city").value,
        telefone: document.querySelector("#tel").value,
        email: document.querySelector("#email").value,
    };

    // Formação
    const formacao = {
        grau: document.querySelector("#formacao").value,
        escola: document.querySelector("#escola").value,
        anoConclusao: document.querySelector("#anoc").value,
    };

    // Cursos extracurriculares
    const cursos = [];
    for (let containerId of cursoIds) {
        const id = containerId.replace("c_curso", ""); // Extrai o número do ID do container

        const formatarData = (data) => {
            if (!data) return "";
            const [ano, mes] = data.split("-");
            return `${mes}/${ano}`;
        };

        const cursoAtual = {
            nome: document.querySelector(`#n_curso${id}`)?.value || "",
            instituicao: document.querySelector(`#i_curso${id}`)?.value || "",
            duracao: `De: ${formatarData(document.querySelector(`#durde_curso${id}`)?.value)}, até: ${formatarData(document.querySelector(`#durate_curso${id}`)?.value)}`,
        };
        cursos.push(cursoAtual);
    }




    // Habilidades
    const habilidades = document.querySelector("#habilidades").value.trim();

    // Experiência Profissional
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
            ? `De: ${formatarData(durDe)}, até: em atividade`
            : `De: ${formatarData(durDe)}, até: ${formatarData(durAte)}`;

        experiencias.push({
            empresa,
            cargo,
            duracao,
            emAtividade,
        });
    }



    // Observações
    const observacoes = document.querySelector("#obs").value.trim();

    // Renderizar Currículo
    const container = document.createElement("div");
    container.classList.add("curriculo");

    container.innerHTML = `
        <h1>${dadosPessoais.nome}</h1>
        <h2>Dados Pessoais</h2>
        <hr/>
        <b>Estado Civil:</b> ${dadosPessoais.civil}<br>
        <b>Nacionalidade:</b> ${dadosPessoais.nacionalidade}<br>
        <b>Data de Nascimento:</b> ${dadosPessoais.nascimento}<br>
        <b>Endereço:</b> ${dadosPessoais.endereco}<br>
        <b>Cidade:</b> ${dadosPessoais.cidade}<br>
        <b>Telefone:</b> ${dadosPessoais.telefone}<br>
        <b>Email:</b> ${dadosPessoais.email}<br>

        <h2>Formação</h2>
        <hr/>
        <b>${formacao.grau}</b><br>
        <b>Escola:</b> ${formacao.escola}<br>
        <b>Ano de Conclusão:</b> ${formacao.anoConclusao}<br>

        ${cursos.length > 0 ? "<h2>Cursos Extracurriculares</h2><hr/>" : ""}
        ${cursos.map(c => `<p><b>Curso:</b> ${c.nome}<br> <b>Instituição:</b> ${c.instituicao}<br> <b>Duração:</b> ${c.duracao}</p>`).join("")}

        ${habilidades ? `<h2>Habilidades</h2><hr/><p>${habilidades}</p>` : ""}

        ${experiencias.length > 0 ? "<h2>Experiências Profissionais</h2> <hr/>" : ""}
        ${experiencias.map(e => `<p><b>Empresa:</b> ${e.empresa}<br> <b>Cargo:</b> ${e.cargo} <br> <b>Duração:</b> ${e.duracao}<br></p>`).join("")}

        ${observacoes ? `<h2>Observações</h2> <hr/><p>${observacoes}</p>` : ""}
    `;

    const body = document.querySelector("body");
    body.innerHTML = ""; // Limpa o conteúdo atual
    body.appendChild(container);

    const head = document.querySelector('head');
    const css1 = document.getElementById('css1');
    const css2 = document.getElementById('css2');
    const css3 = document.getElementById('css3');
    const css4 = document.getElementById('css4');
    const css5 = document.getElementById('css5');

    head.removeChild(css1);
    head.removeChild(css2);
    head.removeChild(css3);
    head.removeChild(css4);
    head.removeChild(css5);

    // Botão de Imprimir
    const botaoImprimir = document.createElement("button");
    botaoImprimir.textContent = "Imprimir Currículo";
    botaoImprimir.classList.add("btn-print");
    botaoImprimir.addEventListener("click", function () {
        botaoImprimir.style = 'display: none'
        window.print();
        botaoImprimir.style = 'display: block'
    });
    body.appendChild(botaoImprimir);
});
