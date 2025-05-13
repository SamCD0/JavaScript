const perguntas = [
    {
        pergunta: "Qual é a raiz quadrada de 64",
        opcoes: ["6", "8", "4", "32"],
        correta: 1
    },
    {
        pergunta: "Quanto é 20% de 25?",
        opcoes: ["5", "4", "10", "3"],
        correta: 0
    },
    {
        pergunta: "150 X 40",
        opcoes: ["4500", "6200","6500", "6000"],
        correta: 3
    },
    {
        pergunta: "1 + 1 - 1 X 0",
        opcoes: ["1", "2", "3", "0"],
        correta: 1
    },
    {
        pergunta: "A + 5 = 12;A = ",
        opcoes: ["7", "8", "6", "5"],
        correta: 0
    },
    {
        pergunta: "Quanto vale PI",
        opcoes: ["2", "3", "3,14", "3,27"],
        correta: 2
    },
    {
        pergunta: "Quantos segundos tem em um mês",
        opcoes: ["2.592,000", "3.436,080,000", "98,654", "512,053"],
        correta: 0
    },
    {
        pergunta: "Quem inventou o teorema de pitágoras",
        opcoes: ["Eu", "Pitágoras", "Pele", "babilônios "],
        correta: 3
    },
    {
        pergunta: "3 + 3!",
        opcoes: ["9", "6", "3", "1 "],
        correta: 0
    },
    {
        pergunta: "10 + 9",
        opcoes: ["21", "19", "17", "190"],
        correta: 1
    },

    
]
let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta(){
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", ()=>selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

function selecionarOpcao(indice){
    opcaoSelecionada = indice
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i)=>{
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false
}
function mostrarPontuacao(){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

botaoProxima.addEventListener("click", ()=>{
    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    }else{
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual< perguntas.length){
        mostrarPergunta()
    }else{
        mostrarPontuacao()
    }
})

botaoReiniciar.addEventListener("click", ()=>{
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
mostrarPergunta()
