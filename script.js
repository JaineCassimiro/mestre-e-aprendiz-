
// Seleciona o card do formulário
let card = document.querySelector('.card');

// Seleciona os botões de login e cadastro
let loginButton = document.querySelector('.loginButton');
let cadastroButton = document.querySelector('.cadastroButton');

// Adiciona evento de clique para alternar entre login e cadastro
loginButton.onclick = () => {
    card.classList.remove('cadastroActive');
    card.classList.add('loginActive');
}

cadastroButton.onclick = () => {
    card.classList.remove('loginActive');
    card.classList.add('cadastroActive');
}

// Modal de login
let modal = document.querySelector('.login-modal');
let closeModal = document.querySelector('.close-modal');

// Abrir modal ao clicar no botão de login
loginButton.addEventListener("click", () => {
    modal.classList.add("show");
});

// Fechar modal ao clicar fora dele ou pressionar ESC
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

// Efeito de erro na senha
function checkPassword(event) {
    event.preventDefault();
    let input = document.getElementById("passwordInput").value;
    let message = document.getElementById("message");

    if (input === "mestre-supremo") {
        message.innerHTML = "🔓 Acesso concedido como Mestre Supremo! Redirecionando...";
        message.style.color = "#0f0";
        setTimeout(() => {
            window.location.href = "biblioteca.html";
        }, 2000);
    } else if (input === "aprendiz") {
        message.innerHTML = "🔓 Acesso concedido como Aprendiz! Mas os segredos continuam ocultos...";
        message.style.color = "#ffd700";
    } else {
        message.innerHTML = "❌ Acesso negado! O feitiço protege a entrada.";
        message.style.color = "red";
        let form = document.querySelector(".login-modal .form-container");
        form.classList.add("shake");

        setTimeout(() => {
            form.classList.remove("shake");
        }, 500);
    }
}
