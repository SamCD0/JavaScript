function mudarCorTexto() {
    document.getElementById("textoAlterado").style.color = "red";
}

function mudarCorBotao() {
    document.getElementById("botaoAlterado").style.backgroundColor = "blue";
}

function aumentarFonte() {
    document.getElementById("textoMaior").style.fontSize = "24px";
}

function hoverBloco() {
    document.getElementById("blocoAlterado").style.backgroundColor = "blue";
}

function sairBloco() {
    document.getElementById("blocoAlterado").style.backgroundColor = "white";
}

function aumentarImagem() {
    let img = document.getElementById("imagemAlterada");
    img.style.width = "200px";
    img.style.height = "200px";
}

function arredondarImagem() {
    document.getElementById("imagemRedondaAlterada").style.borderRadius = "50%";
}

function alterarParagrafo1() {
    let p = document.getElementById("paragrafoAlterado1");
    p.style.backgroundColor = "yellow";
    p.style.color = "blue";
}

function alterarParagrafo2() {
    let p = document.getElementById("paragrafoAlterado2");
    p.style.backgroundColor = "green";
    p.style.color = "white";
    p.style.fontSize = "20px";
}

function alterarParagrafo3() {
    let p = document.getElementById("paragrafoAlterado3");
    p.style.backgroundColor = "purple";
    p.style.color = "white";
    p.style.fontSize = "20px";
    p.style.borderRadius = "10px";
}