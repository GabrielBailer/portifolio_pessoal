const formularioAzul = document.getElementById("formAzul");
const formularioVermelho = document.getElementById("formVermelho");
const divAzul = document.getElementById("divAzul");
const divVermelha = document.getElementById("divVermelha");
const centraliza = document.getElementById("secao");
const inputNomeAzul = document.getElementById("Nome-Azul");
const inputSenhaAzul = document.getElementById("Senha-Azul");
const inputNomeVermelho = document.getElementById("Nome-Vermelho");
const inputSenhaVermelho = document.getElementById("Senha-Vermelho");
const seletorJs = document.querySelectorAll(".seletorJs");
const secao = document.getElementById('secao');
let inputEmFoco = false;
// Parte da validação de formulário

function validarFormularios(nomeId, senhaId) {

    const nome = document.getElementById(nomeId).value;
    const senha = document.getElementById(senhaId).value;

    if (nome != "ObgPorAcessar") {
        alert("Então como estou treinando para fazer uma tela de login decente," +
            " por isso é nescessário que o nome seja o certo!");
        document.getElementById(nomeId).value = "ObgPorAcessar";
    } else if (senha != "12345") {
        alert("Então como estou treinando para fazer uma tela de login decente," +
            " por isso é nescessário que a senha seja a certa!");
        document.getElementById(senhaId).value = "12345";
    } else {
        window.location.href = "main.html";
    }

}
formularioAzul.addEventListener("submit", function (event) {
    event.preventDefault();
    validarFormularios("Nome-Azul", "Senha-Azul");
});
formularioVermelho.addEventListener("submit", function (event) {
    event.preventDefault();
    validarFormularios("Nome-Azul", "Senha-Azul");
})

// Parte que adiciona o evento de centralizar o formulário e ou desentralizar

function adiciona() {
    centraliza.classList.remove("agrupador");
    centraliza.classList.add("desagrupador");
}
function remove() {
    centraliza.classList.add("agrupador");
    centraliza.classList.remove("desagrupador");
}

function expDivAzul() {
    divAzul.classList.add("ativo");
    divVermelha.classList.add("inativo");
}

function expDivVermelha() {
    divVermelha.classList.add("ativo");
    divAzul.classList.add("inativo");
}

function dimDivAzul(){
    divAzul.classList.remove("ativo");
    divVermelha.classList.remove("inativo");
}

function dimDivVermelho(){
    divVermelha.classList.remove("ativo");
    divAzul.classList.remove("inativo");
}
function vermelho(){
if(!inputEmFoco){
    dimDivVermelho();
    remove();
}
}
function azul(){
if(!inputEmFoco){
    dimDivAzul();
    remove();
}
}

divVermelha.addEventListener("mouseover", function () {
    expDivVermelha();
    adiciona();
});
divAzul.addEventListener("mouseover", function () {
    expDivAzul();
    adiciona();
});
divVermelha.addEventListener("mouseout", function () {
    vermelho()
});
divAzul.addEventListener("mouseout", function () {
    azul();
});

inputNomeVermelho.addEventListener("focus", function(){
    inputEmFoco = true;
    expDivVermelha();
    adiciona();
    
});

inputNomeVermelho.addEventListener("blur", function(){
    inputEmFoco = false;
});

inputSenhaVermelho.addEventListener("focus", function () {
    inputEmFoco = true;
    expDivVermelha();
    adiciona();
});

inputSenhaVermelho.addEventListener("blur", function(){
    inputEmFoco = false;
});

inputNomeAzul.addEventListener("focus", function(){
    inputEmFoco = true;
    expDivAzul();
    adiciona();
});

inputNomeAzul.addEventListener("blur", function(){
    inputEmFoco = false;
});

inputSenhaAzul.addEventListener("focus", function(){
    inputEmFoco = true;
    expDivAzul();
    adiciona();
});

inputSenhaAzul.addEventListener("blur", function(){
    inputEmFoco = false;
});