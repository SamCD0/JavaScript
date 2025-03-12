let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}
function mudarCor() {
    texto.style.color = "red"
    document.body.style.backgroundColor = "blue"
}

function trocarFundo() {
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "yellow"
}

function troca(){
    imagem.src = "CachorroFeio.jpg"
}
function destroca(){
    imagem.src = "CachorroVesgo.webp"
}
let mensagem = document.getElementById("mensagem")
function outroTexto() {
    mensagem.innerText = "Texto Alterado"
}
function voltaTexto(){
    mensagem.innerText = "Passe o mouse aqui"
}

function aparece() {
    let sumir = document.getElementById("sumir")
    if(sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function aleatorio() {
    let tamanho = document.getElementById("tamanho")
    let novoTamanho = Math.floor(Math.random()
* (40 - 10 + 1)) + 10 
tamanho.style.fontSize = novoTamanho + "px"
}