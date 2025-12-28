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

    mensagem.className = "mensagem"

    if (
        nomeInput.value !== "" &&
        emailInput.value !== "" &&
        telefoneInput.value !== ""
    ) {
        mensagem.textContent = "✅ Prontinho! Você receberá as novidades por email."
        mensagem.classList.add("mensagem-sucesso")
    } else {
        mensagem.textContent = "❌ Por favor, preencha os campos nome e email!"
        mensagem.classList.add("mensagem-erro")
    }

    botaoEnviar.textContent = "Enviando..."
    botaoEnviar.disabled = true

    setTimeout(() => {
        botaoEnviar.textContent = "Enviar"
        botaoEnviar.disabled = false
    }, 2000)

    setTimeout(() => {
        mensagem.textContent = ""
        mensagem.className = "mensagem"
    }, 3000)


}


