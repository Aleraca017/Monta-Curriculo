// Inicializando o Firebase (lembre-se de substituir com suas credenciais do Firebase)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Substitua com suas credenciais do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCakkz4JvZ_mOdVA9eaJdhT5r9wV2VMv7U",
    authDomain: "monta-curriculo.firebaseapp.com",
    projectId: "monta-curriculo",
    storageBucket: "monta-curriculo.firebasestorage.app",
    messagingSenderId: "74951063324",
    appId: "1:74951063324:web:4479156fac92a0280d2cd9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para salvar os dados do currículo
async function salvarCurriculo(dados) {
    try {
        // Usando o email como identificador único
        const userDoc = doc(db, "curriculos", dados.email);
        await setDoc(userDoc, dados);
        alert("Currículo salvo com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar currículo: ", error);
        alert("Ocorreu um erro ao salvar o currículo.");
    }
}

// Função para carregar os dados do currículo usando o prompt de email
async function carregarCurriculoComPrompt() {
    const email = prompt("Digite o seu email para carregar o currículo:");

    if (email) {
        try {
            const userDoc = doc(db, "curriculos", email);
            const docSnap = await getDoc(userDoc);

            if (docSnap.exists()) {
                const dados = docSnap.data();
                // Preencher os campos com os dados
                document.querySelector("#nome").value = dados.nome || "";
                document.querySelector("#estadoc").value = dados.estadoCivil || "";
                document.querySelector("#nacionalidade").value = dados.nacionalidade || "";
                document.querySelector("#nascimento").value = dados.nascimento || "";
                document.querySelector("#tel").value = dados.telefone || "";
                document.querySelector("#cep").value = dados.cep || "";
                document.querySelector("#email").value = dados.email || "";
                document.querySelector("#formacao").value = dados.grauFormacao || "";
                document.querySelector("#escola").value = dados.escolaFormacao || "";
                document.querySelector("#anoc").value = dados.anoConclusao || "";
                document.querySelector("#habilidades").value = dados.habilidades || "";
                document.querySelector("#obs").value = dados.observacoes || "";
            } else {
                alert("Currículo não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao carregar currículo: ", error);
            alert("Ocorreu um erro ao carregar o currículo.");
        }
    } else {
        alert("Por favor, insira um email válido.");
    }
}

// Alterando o evento de carregamento do currículo para chamar a função com prompt
document.getElementById("carregarCurriculo").addEventListener("click", carregarCurriculoComPrompt);


// Adicionar evento para salvar os dados ao clicar no botão de envio
document.getElementById("salvarCurriculo").addEventListener("click", function (e) {
    e.preventDefault();

    // Coletar os dados do formulário
    const dadosCurriculo = {
        nome: document.querySelector("#nome").value.trim(),
        estadoCivil: document.querySelector("#estadoc").value.trim(),
        nacionalidade: document.querySelector("#nacionalidade").value.trim(),
        nascimento: document.querySelector("#nascimento").value.trim(),
        telefone: document.querySelector("#tel").value.trim(),
        cep: document.querySelector("#cep").value.trim(),
        email: document.querySelector("#email").value.trim(),
        grauFormacao: document.querySelector("#formacao").value.trim(),
        escolaFormacao: document.querySelector("#escola").value.trim(),
        anoConclusao: document.querySelector("#anoc").value.trim(),
        habilidades: document.querySelector("#habilidades").value.trim(),
        observacoes: document.querySelector("#obs").value.trim(),
    };

    if (dadosCurriculo.email) {
        salvarCurriculo(dadosCurriculo);
    } else {
        alert("Por favor, insira um email válido.");
    }
});
