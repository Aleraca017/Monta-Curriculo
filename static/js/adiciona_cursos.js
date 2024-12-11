let cursoIds = []; // Rastreia os IDs dos cursos
let curso = 0;

function criarElemento(tipo, atributos = {}, texto = "") {
    const elemento = document.createElement(tipo);
    Object.keys(atributos).forEach((attr) => {
        elemento[attr] = atributos[attr];
    });
    if (texto) elemento.textContent = texto;
    return elemento;
}

function btn_plus1() {
    curso++; // Incrementa o contador global de cursos
    const c_curso = criarElemento("div", { id: `c_curso${curso}`, className: "curso-container" });

    // Adiciona o ID do curso ao array
    cursoIds.push(c_curso.id);  // Aqui você garante que o ID seja registrado

    const name_curso_l = criarElemento("label", { htmlFor: `n_curso${curso}` }, "Curso: ");
    const name_curso = criarElemento("input", { id: `n_curso${curso}`, type: "text", className: "curso-input" });

    const inst_curso_l = criarElemento("label", { htmlFor: `i_curso${curso}` }, "Instituição: ");
    const inst_curso = criarElemento("input", { id: `i_curso${curso}`, type: "text", className: "curso-input" });

    const durde_curso_l = criarElemento("label", { htmlFor: `durde_curso${curso}` }, "Duração De: ");
    const durde_curso = criarElemento("input", { id: `durde_curso${curso}`, type: "month", className: "curso-input" });

    const durate_curso_l = criarElemento("label", { htmlFor: `durate_curso${curso}` }, "Até: ");
    const durate_curso = criarElemento("input", { id: `durate_curso${curso}`, type: "month", className: "curso-input" });

    const btn_del = criarElemento(
        "button",
        {
            type: "button",
            className: "btn-delete",
        },
        "Excluir Curso"
    );

    // Adiciona o evento de exclusão ao botão
    btn_del.addEventListener("click", () => removerCurso(c_curso.id));

    // Monta o container do curso
    c_curso.append(
        name_curso_l, name_curso,
        inst_curso_l, inst_curso,
        durde_curso_l, durde_curso,
        durate_curso_l, durate_curso,
        btn_del
    );

    // Adiciona o container ao DOM
    document.getElementById("cursos_extras").appendChild(c_curso);
}


function removerCurso(id) {
    const cursoElement = document.getElementById(id); // Localiza o container pelo ID
    if (cursoElement) {
        cursoElement.remove(); // Remove o container do DOM

        // Remove o ID do curso do array cursoIds
        const index = cursoIds.indexOf(id);
        if (index !== -1) {
            cursoIds.splice(index, 1); // Remove o ID do array
        }
    }
}
