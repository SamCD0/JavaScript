function mostrarNome() {
    let nome = document.getElementById("nome").value
    let mensagem = document.getElementById("mensagem")
    mensagem.innerText = "oi," + nome
}

function mostrarIdade() {
    let idade = parseInt(document.getElementById("idade").value)
    let resultado = document.getElementById("resultado")
    resultado.innerText = "Você tem " + idade + "anos"
}

function mostrarComentario(){
    let comentario = document.getElementById("comentario").value
    let comentarioExibido = document.getElementById("comentarioExibido")
    comentarioExibido.innerText = "comentario: " + comentario
}

function atualizarTexto() {
    let texto = document.getElementById("campoTexto").value
    let digitado = document.getElementById("textoDigitado")
    digitado.innerText = "Você digitou: " + texto
}