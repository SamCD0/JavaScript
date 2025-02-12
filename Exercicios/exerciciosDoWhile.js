num = 1
do {
    console.log(num)
    num++
} while (num <= 20)
console.log("-----------------------------")
let continuar 
do {
    continuar = prompt("Você deseja continuar. s/n")
    if ( continuar == "s") {
    console.log("continuando")
    }
} while (continuar == "s")
console.log("-----------------------------")
    let iniciar = 1
    let final = Number(prompt("Escolha um número"))
    do {
       console.log(iniciar)
       iniciar++
    } while (iniciar <= final)
console.log("-----------------------------")
let comeco = 1
let fim = 31
    do {
       console.log(comeco)
       comeco += 2  
    } while (comeco <= fim)
console.log("-----------------------------")

let generico = 1
    do{
        let num1 = Number(prompt("digite um numero"))
        if (num1 > 0){
            console.log("Positivo")
        }
        else if (num1 < 0)
            console.log("negativo")
        else{
            console.log("ZERO")
        }
        generico++
    } while (generico <= 5)
        console.log("-----------------------------")
        let pergunta
    do{
         pergunta = prompt("Deseja fazer uma conta? se sim clique s, caso não, aperte qualquer outra tecla")
        if (pergunta == "s") {
        let soma1 = Number(prompt("Primerio numero para soma"))
        let soma = Number(prompt("segundo numero para soma"))
        let resultado = soma + soma1
        }
        else {
            console.log("encerrando")
        }
    
    } while(pergunta == "s")