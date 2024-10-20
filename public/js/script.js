import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC-o23t9SasKTsIe2pYzzkkQ5cf9m_bI2o",
    authDomain: "bp-consorcio.firebaseapp.com",
    projectId: "bp-consorcio",
    storageBucket: "bp-consorcio.appspot.com",
    messagingSenderId: "528675178490",
    appId: "1:528675178490:web:1e9509de65958851154643",
    measurementId: "G-XE3JKW5TGQ"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Inicializa o Firestore

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");
    const feedback = document.querySelector(".mensagem-feedback");
    feedback.setAttribute("aria-live", "polite");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Capturando os dados do formulário
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        // Validação dos campos
        if (nome === "" || email === "" || telefone === "") {
            feedback.textContent = "Por favor, preencha todos os campos.";
            feedback.style.color = "red";
            return;
        }

        console.log("Enviando dados:", { nome, email, telefone });

        // Adicionando os dados ao Firestore
        try {
            await addDoc(collection(db, "leads"), {
                nome: nome,
                email: email,
                telefone: telefone,
                timestamp: serverTimestamp()  // Adiciona a data/hora do envio
            });

            feedback.textContent = "Formulário enviado com sucesso! Em breve um dos nossos consultores entrará em contato.";
            feedback.style.color = "green";
            form.reset();
        } catch (error) {
            feedback.textContent = "Erro ao enviar o formulário. Tente novamente.";
            feedback.style.color = "red";
            console.error("Erro ao adicionar documento: ", error.message || error);
        }
    });
});
