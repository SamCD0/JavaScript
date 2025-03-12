let texto = document.getElementById("texto")
texto.innerText = "LISTA"
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    texto.style.color = "red"
})

botaodois.addEventListener("click", function(){
    botaodois.style.color = "red"
})


let texto2 = document.getElementById("texto2")
texto2.innerText = "AAAAAAAAAAAAAAA"
let passe = document.getElementById("passe")
passe.addEventListener("dblclick", function(){
    texto2.style.fontSize = "250px"
})

let botao52 = document.getElementById("botao52")
botao52.addEventListener("mouseover", function(){
    botao52.style.backgroundColor = "red"
})


botao52.addEventListener("mouseout", function(){
    botao52.style.backgroundColor = ""
})
let imagem = document.getElementById("imagem")
ima.addEventListener ("click", function() {
    imagem.style.width = "300px"
    imagem.style.height = "300px"

})
let otraimagem = document.getElementById("otraimagem")
arredonde.addEventListener ("click", function() {
    otraimagem.style.borderRadius = "50%"
})