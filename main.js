const botao = document.querySelector(".btn-contatos");
const elementoPlataformas = document.querySelector(".btn-contatos .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

