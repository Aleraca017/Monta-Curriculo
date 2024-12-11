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
    const c_xp = criarElemento("div", { id: `c_xp${idxp}`, className: "xp-container" });

    const e_xp_l = criarElemento("label", { htmlFor: `exp${idxp}` }, "Empresa:");
    const e_xp = criarElemento("input", { id: `exp${idxp}`, type: "text", className: "xp-input" });

    const ca_xp_l = criarElemento("label", { htmlFor: `caxp${idxp}` }, "Cargo:");
    const ca_xp = criarElemento("input", { id: `caxp${idxp}`, type: "text", className: "xp-input" });

    const durde_xp_l = criarElemento("label", { htmlFor: `durdexp${idxp}` }, "Duração - De:");
    const durde_xp = criarElemento("input", { id: `durdexp${idxp}`, type: "month", className: "xp-input" });

    const durate_xp_l = criarElemento("label", { htmlFor: `duratexp${idxp}` }, "Até:");
    const durate_xp = criarElemento("input", { id: `duratexp${idxp}`, type: "month", className: "xp-input" });

    const emAtividade_l = criarElemento("label", { htmlFor: `ematividade${idxp}` }, "Em atividade:");
    const emAtividade = criarElemento("input", { id: `ematividade${idxp}`, type: "checkbox", className: "xp-checkbox" });

    const btn_del = criarElemento(
        "button",
        {
            type: "button",
            className: "btn-delete",
        },
        "Excluir Experiência"
    );

    // Adiciona o evento de exclusão ao botão
    btn_del.addEventListener("click", () => removerExperiencia(c_xp.id));

    // Monta o container da experiência
    c_xp.append(
        e_xp_l, e_xp,
        ca_xp_l, ca_xp,
        durde_xp_l, durde_xp,
        durate_xp_l, durate_xp,
        emAtividade_l, emAtividade,
        btn_del
    );

    // Adiciona o container ao DOM
    document.getElementById("experiencias_profissionais").appendChild(c_xp);
}

function removerExperiencia(id) {
    const experiencia = document.getElementById(id); // Localiza o container pelo ID
    if (experiencia) {
        experiencia.remove(); // Remove o container do DOM
    }
}
