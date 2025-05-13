const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhaTeclado1")
const linhaTeclado2 = document.querySelector("#linhaTeclado2")
const linhaTeclado3 = document.querySelector("#linhaTeclado3")
 
//definindo as letras de cada linha
const teclasLinha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const teclasLinha2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "L"]
const teclasLinha3 = ["Z", "X", "C", "V", "B", "N", "M"]
 
//Define o número de tentativas (linhas) e o tamanho das palavras(colunas)
const linhas = 6
const colunas = 5
 
//Variavel que guarda onde o jogador esta
let linhaAtual = 0
let colunaAtual = 0
 
//Define as palavras que poder ser
const palavrasSecretas = ["SENAI", "AGORA", "SORTE", "LETRA", "GANSO"]
let mapaPalavra = {}
let palavraSecreta = palavrasSecretas[Math.floor(Math.random()*palavrasSecretas.length)]
 for(let i = 0; i < palavraSecreta.length; i += 1){
    mapaPalavra[palavraSecreta[i]] = i
 }


 //Matrizes onde as tentativas serão armazenadas
 const palpites = []

 for(let l=0; l < linhas; l+=1) {
    palpites[1] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id", "linha" + l)
    linhasLetras.setAttribute("class", "linhas-letras")

    for(let c = 0; c < colunas; c+=1) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id", "linha" + l + "coluna" + c)
        colunaLetra.setAttribute("class", l === 0 ? "coluna-letra digitando":"coluna")
        linhasLetras.append(colunaLetra)
        palpites[l][c] = ""
    }
    //adicionando a linha criada ao site
    letras.append(linhasLetras)
 }
 //Verifica se a palavra digitada está correta
 function VerificarPalpite() {
    //Junta as letras digitadas
    const palpite = palpites[linhaAtual].join("")
    if(palpite.length !== colunas) {
        if(palpite.length !== colunas) {
            return //Se o palpite for incompleto ele não verifica
        }
    }
        //Pega a linha atual que estamos
        const colunaAtuais = document.querySelectorAll(".digitando")
        for(let i = 0; i < colunas; i += 1) {
            const letra = palpite[i]
                                              
            if(mapaPalavra[letra] == undefined) {
                colunaAtuais[i].classList.add("errada")
            }else if(mapaPalavra[letra] == i) {
                colunaAtuais[i].classList.add("certa")
            } else {
                colunaAtuais[i].classList.add("deslocada")
            }
        }
        if(palpite == palavraSecreta) {
            window.alert("Acertou! Parabéns")//Se acertar a palavra
        } else if(linhaAtual == linhas - 1) {
            //se errar a palavra e acabar as tentativas
            window.alert
        } else {
            //Se errar a palavra mais ainda tiver tentativas
            moverParaProximaLinha()
        }
    }
    //move para a proxima linha
    function moverParaProximaLinha(){
        const colunaDigitando = document.querySelectorAll(".digitando")
        colunaDigitando.forEach(col => {
            col.classList.remove("digitando")
        })
        linhaAtual += 1 //Avança para a proxima linha
        colunaAtual = 0 //Reinicia a posição da coluna
        //Adiciona a classe digitando na proxima linha
        const novaLinha = document.querySelector("#linha"+linhaAtual)
        const novaColunas = novaLinha.querySelectorAll(".coluna-letra")
        novaColunas.forEach(col1 => {
            col1.classList.add("digitando")
        })
    }
    //função que insere uma litra no palpite ao clicar na tela
    function clicarTecla(tecla){
        if (colunaAtual == colunas) {
            return//Limita o numero de linhas por letra
        }
         const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
        letraAtual.textContent = tecla //mostra a letra clicada
        palpites[linhaAtual][colunaAtual] = tecla //Salva a tecla escolhida
        colunaAtual +=1 //vai para o proximo espaço
    }
    function criarLinhaTeclado(teclas, container) {
        teclas.forEach(tecla => {
            const botao = document.createElement("button")
            botao.textContent = tecla
            botao.setAttribute("id", tecla)
            //Ao clicar adiciona a letra
            botao.addEventListener("click", () => clicarTecla(tecla))
            container.append(botao) //adiciona o botao
        })
    }
    //crie as três linhas do teclado 
    criarLinhaTeclado(teclasLinha1, linhaTeclado1)
    criarLinhaTeclado(teclasLinha2, linhaTeclado2)
    criarLinhaTeclado(teclasLinha3, linhaTeclado3)

    //função para apagar a última letra digitada
    function apagarLetra(){
        if(colunaAtual == 0){
            //Se tiver no primeiro bloquinho da linha não vai apagar nada
            return
        }
        colunaAtual -= 1
        palpites[linhaAtual][colunaAtual] = "" //remove a letra
        const letra = document.querySelector("#linha"+linhaAtual+"coluna"+colunaAtual)
        letra.textContent = ""
    }
    // Cria o botão de apagar "<"
    const botaoApagar = document.createElement("button")
    botaoApagar.textContent = "<"
    botaoApagar.addEventListener("click", apagarLetra) //quando clica apaga
    linhaBackspaceEnter.append(botaoApagar) //adiciona na tela
    //cria o botão enter
    const botaoEnter = document.createElement("button")
    botaoEnter.textContent = "enter"
    botaoEnter.addEventListener("click", VerificarPalpite) //Quando clica verifica
    linhaBackspaceEnter.append(botaoEnter)//adiciona a tela
          
    //permite digitação pelo teclado fisico
    document.onkeydown = function(evt) {
        evt = evt || window.event
        if(evt.key == "Enter") {
            VerificarPalpite()
        } else if (evt.key == "backspace"){
            apagarLetra()
        } else {
            clicarTecla
        }
    }