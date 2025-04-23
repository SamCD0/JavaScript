//Quando carregar paginar
window.onload = function() {
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if (textoSalvo){
        document.getElementById("anotacao").value = textoSalvo
    }
}

//Salvar ao clicar
function salvarAnotacao() {
    const conteudo = document.getElementById("anotacao").value
localStorage.setItem("minhaAnotacao", conteudo)
alert("Nota salva com sucesso")
}