let contador = 0
//inicia a contagem em zero
while(contador <= 5) {
//continua a ação enquanto verdadeira
    console.log(contador) // mostra num atual
    contador++
}
////////////////////////
console.log("------------------------------------")
let controle = 5
while (controle >= 0) {
    console.log(controle)
    controle--
}
///////////////
console.log("------------------------------------")
let numero = 3
let multiplicador = 1
while (multiplicador <=4) {
    let resultado = numero * multiplicador
    console.log(resultado)
    multiplicador += 1 //outra opção  para o ++
}
///////////////
console.log("------------------------------------")
let palavra = prompt("Digite a palavra")
while (palavra != "oi") {
    palavra = prompt("tente novamente")
    if (palavra == "oi") {
        console.log("Acertou")
    }
}