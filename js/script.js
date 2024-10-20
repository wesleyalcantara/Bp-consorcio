document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const feedback = document.querySelector(".mensagem-feedback");

    // Usar aria-live para acessibilidade
    feedback.setAttribute("aria-live", "polite");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validação dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        if (nome === "" || email === "" || telefone === "") {
            feedback.textContent = "Por favor, preencha todos os campos.";
            feedback.style.color = "red";
            return;
        }

        // Exibir feedback de sucesso com animação
        feedback.textContent = "Formulário enviado com sucesso! Em breve um dos nossos consultores entrará em contato.";
        feedback.style.color = "green";
        
        // Animação simples (fade-in) no feedback visual
        feedback.style.opacity = "0";
        setTimeout(() => {
            feedback.style.opacity = "1";
            feedback.style.transition = "opacity 1s ease-in";
        }, 100);

        // Aqui você pode adicionar a lógica para enviar os dados ao servidor ou armazená-los no banco de dados
    });
});
