let nomeInput = document.getElementById("nome-usuario")
let emailInput = document.getElementById("email-usuario")
let telefoneInput = document.getElementById("telefone-usuario")
let botaoEnviar = document.getElementById("botaoEnviar")
let mensagem = document.getElementById("mensagemFormulario")


botaoEnviar.addEventListener(
    "click", validaFormulario
)

function validaFormulario(event) {
    event.preventDefault()

    if (
        nomeInput.value != "" &&
        emailInput.value != "" &&
        telefoneInput.value != "") {
        mensagem.textContent = "✅ Prontinho! Você receberá as novidades por email."
    } else {
        mensagem.textContent = "❌ Por favor, preencha os campos nome e email!"
    }

    botaoEnviar.textContent = "Enviando..."
    botaoEnviar.disabled = true

    setTimeout(() => {
        botaoEnviar.textContent = "Enviar"
        botaoEnviar.disabled = false
    }, 2000)

    setTimeout(() => {
        mensagem.textContent = ""
    }, 3000)


}


