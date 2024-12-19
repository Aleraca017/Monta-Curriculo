let experienciasIds = [];
let idxp = 0;

function criarElemento(tipo, atributos = {}, texto = "") {
    const elemento = document.createElement(tipo);
    Object.keys(atributos).forEach((attr) => {
        elemento[attr] = atributos[attr];
    });
    if (texto) elemento.textContent = texto;
    return elemento;
}


function adxp() {
    idxp++; // Incrementa o contador global de experiências
    const idExperiencia = `c_xp${idxp}`;
    const c_xp = criarElemento("div", { id: idExperiencia, className: "xp-container" });

    experienciasIds.push(idExperiencia); // Adiciona o ID ao array

    const e_xp_l = criarElemento("label", { htmlFor: `xp_empresa${idxp}` }, "Empresa:");
    const e_xp = criarElemento("input", { id: `xp_empresa${idxp}`, type: "text", className: "xp-input" });

    const ca_xp_l = criarElemento("label", { htmlFor: `xp_cargo${idxp}` }, "Cargo:");
    const ca_xp = criarElemento("input", { id: `xp_cargo${idxp}`, type: "text", className: "xp-input" });

    // Criar o container para "De" e "Até"
    const duracaoAtividadeContainer = criarElemento("div", { className: "duracao-atividade-container" });

    // Criar a div para "De"
    const durde_xp_l = criarElemento("label", { htmlFor: `xp_dur_de${idxp}` }, "De:");
    const durde_xp = criarElemento("input", { id: `xp_dur_de${idxp}`, type: "month", className: "xp-input" });

    // Criar a div para "Até"
    const durate_xp_l = criarElemento("label", { htmlFor: `xp_dur_ate${idxp}` }, "Até:");
    const durate_xp = criarElemento("input", { id: `xp_dur_ate${idxp}`, type: "month", className: "xp-input" });

    // Adicionar "De" e "Até" ao container de duração
    duracaoAtividadeContainer.append(durde_xp_l, durde_xp, durate_xp_l, durate_xp);

    // Criar a div para "Em atividade"
    const emAtividadeContainer = criarElemento("div", { className: "em-atividade-container" });
    const emAtividade_l = criarElemento("label", { htmlFor: `ematividade${idxp}` }, "Em atividade:");
    const emAtividade = criarElemento("input", { id: `ematividade${idxp}`, type: "checkbox", className: "xp-checkbox" });
    emAtividadeContainer.append(emAtividade_l, emAtividade);

    // Container para múltiplas atribuições
    const atribContainer = criarElemento("div", { id: `xp_atrib_container${idxp}`, className: "xp-atrib-container" });

    const atrib_l = criarElemento("label", {}, "");
    const btn_add_atrib = criarElemento(
        "button",
        { type: "button", className: "btn-add-atrib" },
        "Adicionar Atribuições"
    );

    btn_add_atrib.addEventListener("click", () => adicionarAtribuicao(idxp));

    atribContainer.appendChild(atrib_l);
    atribContainer.appendChild(btn_add_atrib);

    const btn_del = criarElemento(
        "input",
        { type: "button", className: "btn-delete", value: "Excluir Experiencia" },
        "Excluir Experiência"
    );

    btn_del.addEventListener("click", () => removerExperiencia(idExperiencia));

    c_xp.append(
        e_xp_l, e_xp,
        ca_xp_l, ca_xp,
        duracaoAtividadeContainer, // Adiciona o container de "De" e "Até"
        emAtividadeContainer, // Adiciona o container de "Em atividade"
        atribContainer,
        btn_del
    );

    document.getElementById("experiencias_profissionais").appendChild(c_xp);
}


function adicionarAtribuicao(idx) {
    const atribContainer = document.getElementById(`xp_atrib_container${idx}`);
    const atribIndex = atribContainer.querySelectorAll(".xp-atrib-group").length; // Obtém a quantidade de atribuições

    const atribGroup = criarElemento("div", { className: "xp-atrib-group" });

    const atribTitulo = criarElemento("input", {
        id: `xp_atrib_titulo${idx}_${atribIndex}`,
        type: "text",
        className: "xp-atrib-titulo",
        placeholder: "Título da atribuição"
    });

    const atribDescricao = criarElemento("textarea", {
        id: `xp_atrib_desc${idx}_${atribIndex}`,
        className: "xp-atrib-desc",
        rows: 3,
        placeholder: "Descrição da atribuição"
    });

    atribGroup.appendChild(atribTitulo);
    atribGroup.appendChild(atribDescricao);

    atribContainer.insertBefore(atribGroup, atribContainer.lastChild); // Adiciona antes do botão
}


function removerExperiencia(id) {
    const experiencia = document.getElementById(id); // Localiza o container pelo ID
    if (experiencia) {
        experiencia.remove(); // Remove o container do DOM

        // Remove o ID do array de experiências
        experienciasIds = experienciasIds.filter((expId) => expId !== id);
    }
}
