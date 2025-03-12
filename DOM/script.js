let titulo = document.getElementById("titulo")
// document = HTML
// logo, quando fizemos isso guardams o que estava no html em uma variavel no JS
console.log(titulo.innerText)

// ------------------------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
//Desse jeito trocamos o texto em uma tag
texto.style.color = "blue"

//Usando o style podemos mexer no css
//-------------------------------------------
let botao = document.getElementById("botao")
// Quadno clica algo acontece
botao.addEventListener("click", function() {
    alert("botão clicado")
})
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function() {
    duplo.style.backgroundColor = "red"
})
//Só quando clica duas vezes
//---------------------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function() {
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "Passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
})