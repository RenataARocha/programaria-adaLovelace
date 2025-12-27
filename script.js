let nomeInput = document.getElementById("nome-usuario")
let emailInput = document.getElementById("email-usuario")
let telefoneInput = document.getElementById("telefone-usuario")
let botaoEnviar = document.getElementById("botaoEnviar")



botaoEnviar.addEventListener(
    "click", validaFormulario
)

function validaFormulario() {
    if (
        nomeInput.value != "" &&
        emailInput.value != "" &&
        telefoneInput.value != "") {
        alert("Prontinho! Você receberá as novidades por email.");
    } else {
        alert("Por favor, preencha os campos nome e email!");
    }
}


