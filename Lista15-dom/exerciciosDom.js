function aparece() {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
        texto.innerText = "opa, ele voltou"
    } else {
        sumir.style.display = "none"
        texto.innerText = "opa, cade o cachorro?"
    }
}
let txt = document.getElementById("txt")
let butao = document.getElementById("butao")
let butao2 = document.getElementById("butao2")
  butao2.style.display = "none"
function mudarCor() {
    txt.style.color = "white"
    document.body.style.backgroundColor = "darkgrey"
    txt.innerText = "o tema esta escuro"
    butao2.style.display = "block"
    butao.style.display = "none"
}

function nome() {
    document.body.style.backgroundColor = "white"
    txt.innerText = "o tema esta claro"
    butao2.style.display = "none"
    butao.style.display = "block"
    txt.style.color = "black"
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("completar").addEventListener("click", function () {
        let nome =  prompt("qual o seu nome?")
        let idade = prompt("qual a sua idade?")
        let cidade = prompt("de onde vc é?")
        let escola = prompt("onde vc estuda?")
        let curso = prompt("qual o seu curso?")

        let texto = `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}, estudo no ${escola} e faço o curso de ${curso}.`;
        document.getElementById("texto").textContent = texto;
    });
});

let colors = ["blue", "green", "yellow"];
let clickCount = 0;

document.getElementById("brasil").addEventListener("click", function() {
    clickCount++;
    testo.style.color = colors[clickCount % colors.length];
    
    if (clickCount === 13) {
        let img = document.createElement("img");
        img.src = "img/lula.jpg";
        document.body.appendChild(img);
    }
});

function notf(){
    document.getElementById("alerta")
    alert("pare de clicar no botao")
}

function gift(){
    let image = document.getElementById("img1")
    image.src="presente.gif"
    setTimeout(function(){
        image.src="monei.jpg"
    }, 4850)
}
function gift1(){
    let image = document.getElementById("img2")
    image.src="presente.gif"
    setTimeout(function(){
        image.src="Carro.jpg"
    }, 4850)
}
function gift2(){
    let image = document.getElementById("img3")
    image.src="presente.gif"
    setTimeout(function(){
        image.src="FELIZ.jpg"
    }, 4850)
}
function A() {
    let novoTamanho = Math.floor(Math.random()
* (400 - 10 + 1)) + 10 
fist.style.width = novoTamanho + "px"
fist.style.height = novoTamanho + "px"
}


//8
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
div1.style.backgroundColor ="red"
function sema(){
    if(div1.style.backgroundColor == "red"){
        div1.style.backgroundColor = "black"
        div2.style.backgroundColor = "yellow"
        div3.style.backgroundColor = "black"
        alert("ATENÇÃO")
    }else if(div2.style.backgroundColor == "yellow"){
        div1.style.backgroundColor = "black"
        div2.style.backgroundColor = "black"
        div3.style.backgroundColor = "green"
        alert("Pode-ir")
    }else{
        div1.style.backgroundColor = "red"
        div2.style.backgroundColor = "black"
        div3.style.backgroundColor = "black"
        alert("PARE")
    }
}

let id1 = document.getElementById("id1")
function pass1(){
    id1.src ="20091623.jpg"
}

function passe1(){
      id1.src="Captura de tela 2025-03-11 154137.png"
}

let id3 = document.getElementById("id3")
function pass3(){
    id3.src ="Autoc2.jpg"
}

function passe3(){
      id3.src="comedia.png"
}

let id2 = document.getElementById("id2")
function pass2(){
    id2.src ="mad.jpg"
}

function passe2(){
      id2.src="Captura de tela 2025-03-11 154237.png"
}