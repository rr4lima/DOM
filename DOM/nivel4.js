const botao = document.getElementById("botão")
const texto = document.querySelector("h3")
let contador = 0;
const div = document.querySelector("div")
div.style.backgroundColor = "blue";
const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const mensagemErro = document.getElementById('mensagemErro');


botao.addEventListener("click", function () {
    contador++;
    texto.textContent = "Contador: " + contador;
});

div.onmouseover = function () {
    div.style.backgroundColor = "red";
};

div.onmouseout = function () {
    div.style.backgroundColor = "blue";
}

formulario.addEventListener("click", function () {

    if (emailInput.value.trim() === '') {

        mensagemErro.textContent = 'O campo de email é obrigatório.';

    } else {

        mensagemErro.textContent = '';
    }
});

// formulario.addEventListener('submit', function(event) {
//     // Limpa erro anterior
//     mensagemErro.style.display = '';

// //     if (emailInput.value.trim() === '') {
// //       event.preventDefault(); // Impede envio
// //       mensagemErro.style.display = "O campo de Email é obrigatório";
// //     }
// //   });