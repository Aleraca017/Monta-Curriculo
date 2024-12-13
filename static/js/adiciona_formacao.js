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

    experienciasIds.push(`c_xp${idxp}`); // Adiciona o ID ao array

    const e_xp_l = criarElemento("label", { htmlFor: `xp_empresa${idxp}` }, "Empresa:");
    const e_xp = criarElemento("input", { id: `xp_empresa${idxp}`, type: "text", className: "xp-input" });

    const ca_xp_l = criarElemento("label", { htmlFor: `xp_cargo${idxp}` }, "Cargo:");
    const ca_xp = criarElemento("input", { id: `xp_cargo${idxp}`, type: "text", className: "xp-input" });

    const durde_xp_l = criarElemento("label", { htmlFor: `xp_dur_de${idxp}` }, "Duração - De:");
    const durde_xp = criarElemento("input", { id: `xp_dur_de${idxp}`, type: "month", className: "xp-input" });

    const durate_xp_l = criarElemento("label", { htmlFor: `xp_dur_ate${idxp}` }, "Até:");
    const durate_xp = criarElemento("input", { id: `xp_dur_ate${idxp}`, type: "month", className: "xp-input" });

    const emAtividade_l = criarElemento("label", { htmlFor: `ematividade${idxp}` }, "Em atividade:");
    const emAtividade = criarElemento("input", { id: `ematividade${idxp}`, type: "checkbox", className: "xp-checkbox" });

    const btn_del = criarElemento(
        "button",
        { type: "button", className: "btn-delete" },
        "Excluir Experiência"
    );

    btn_del.addEventListener("click", () => removerExperiencia(`c_xp${idxp}`));

    c_xp.append(
        e_xp_l, e_xp,
        ca_xp_l, ca_xp,
        durde_xp_l, durde_xp,
        durate_xp_l, durate_xp,
        emAtividade_l, emAtividade,
        btn_del
    );

    document.getElementById("experiencias_profissionais").appendChild(c_xp);
}

function removerExperiencia(id) {
    const experiencia = document.getElementById(id); // Localiza o container pelo ID
    if (experiencia) {
        experiencia.remove(); // Remove o container do DOM
    }
}
