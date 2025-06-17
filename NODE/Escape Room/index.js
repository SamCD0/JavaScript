const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin, //O que ele digita
    output: process.stdout // o que ele ve
})
let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false
}

function menuPrincipal() {
    console.log("\nVocê está em uma sala trancada")
    console.log("Ao seu redor, você vê:")
    console.log("1. Um graampeador velho")
    console.log("2. Um monte de papéis amassados na mesa")
    console.log("3. Uma almofada fora do lugar")
    console.log("4. Tentar abrir a porta")

    rl.question("\nO que você deseja fazer?", (resposta) => {
        switch (resposta.trim()) {
            case "1":
                investigarGrampeador()
            break
             case "2":
                investigarPapeis()
            break
             case "3":
                investigarAlmofada()
            break
             case "4":
                investigarSaida()
            break
            default: console.log("escolha invalida")
            menuPrincipal
        }
    })
}
function investigarGrampeador(){
    if (resolvidos.grampeador){
        console.log("você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\n Dentro do grampeador tem um bilhete: 'Sou cheio de buracos, mas seguro a água. O que sou?'", (resposta) => {
        if(resposta.trim().toLowerCase() == "esponja") {
            console.log("Acertou! você desbolqueou a chave que estava no grampeador")
            resolvidos.grampeador = true
        } else{
            console.log("Resposta Errada. Tente novamente depois")
        }
         return menuPrincipal()
    })
}
function investigarPapeis() {
    if(resolvidos.papeis) {
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nUM dos papéis diz: 'Qual a palavra está sempre escrita errada no dicionario?'", resposta => {
        if(resposta.trim().toLowerCase() == "errada"){
            console.log("Acertou! Você encontrou a chave no meio dos papéis")
        } else {
            console.log("Errou! Não é isso")
        }
        return menuPrincipal()
    })
}
function investigarAlmofada() {
    if(resolvidos.almofada) {
        console.log("Você já resolveu esse desafio")
        return menuPrincipal()
    }
    rl.question("\nNa almofada , tem um enigma: 'Estou no comeco, no meio, mas nunca no fim. Quem sou eu?'", (resposta) => {
        if (resposta.trim().toLowerCase().includes("letra e")){
            console.log("Voce acertou")
        } else {
            console.log("Não é isso, PEnse um pouco mais")
        }
        return menuPrincipal()
    })
}
function investigarSaida() {
    if (resolvidos.grampeador && resolvidos.almofada && resolvidos.papeis) {
        console.log("A porta ainda esta fechada. Você não resolveu os enigmas")
        menuPrincipal()
    }
}
console.log("Bem vindo ao Escape Room")
menuPrincipal()