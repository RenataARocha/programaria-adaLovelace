document.getElementById("botaoEnviar").addEventListener(
    "click", validaFormulario
)

function validaFormulario() {
    if (document.getElementById("nome-usuario").value != "" &&
        document.getElementById("email-usuario").value != "" &&
        document.getElementById("telefone-usuario").value != "") {
        alert("Prontinho! Você receberá as novidades por email.");
    } else {
        alert("Por favor, preencha os campos nome e email!");
    }
}


