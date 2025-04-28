const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const paragrafo = document.getElementById("paragrafo");
const formulario = document.getElementById("formulario");
const nomeInput = document.getElementById("nome");
const saudacao = document.getElementById("saudacao");


botao1.addEventListener("click", function () {
    paragrafo.classList.add("estilo-aplicado");
});


botao2.addEventListener("click", function () {
    paragrafo.classList.remove("estilo-aplicado");
});


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = nomeInput.value;
    saudacao.textContent = `Olá, ${nome}`
    nomeInput.value = '';
});



