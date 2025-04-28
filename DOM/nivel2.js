
const caixa = document.getElementById("caixa");
const botao2 = document.querySelector("button");
const botao = document.getElementById("botao2");


const clique = document.querySelector("button")
clique.addEventListener("click", function () {

    clique.textContent = 'Clicado!';
})



botao.addEventListener("click", function () {
    caixa.innerHTML = "<strong>Conteúdo em negrito</strong>";
})




  