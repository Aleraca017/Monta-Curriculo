async function buscaCep() {
    const cep = document.getElementById("cep").value.trim();

    // Validação básica do CEP
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        alert("Digite um CEP válido no formato 00000-000 ou 00000000.");
        return;
    }

    const url = `https://brasilapi.com.br/api/cep/v1/${cep.replace("-", "")}`;

    try {
        // Exibir mensagem de carregamento
        exibirMensagem("Buscando endereço...", "loading");

        const response = await fetch(url);

        if (response.ok) {
            const endereco = await response.json();
            document.getElementById("city").value = endereco.city+" - "+endereco.state || "";
            exibirMensagem("Endereço encontrado!", "success");
        } else if (response.status === 404) {
            exibirMensagem("CEP não encontrado.", "error");
        } else {
            throw new Error("Erro ao buscar CEP.");
        }
    } catch (error) {
        exibirMensagem("Erro de conexão com a API.", "error");
    }
}

function exibirMensagem(mensagem, tipo) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = mensagem;
    feedback.className = tipo; // Adicione classes 'loading', 'success', ou 'error' no CSS para estilizar
    setTimeout(() => {
        feedback.textContent = "";
    }, 3000);
}

window.onload = function () {
    const newcep = document.getElementById("cep");
    newcep.addEventListener("blur", buscaCep);
};
