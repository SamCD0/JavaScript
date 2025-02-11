let contador = 1
while(contador <= 10) {
    console.log(contador)
    contador++
}
console.log("--------------")
let num = Number(prompt("Insira um numero e veja sua tabuada"))
let mult = 1
while(mult <= 10) {
    console.log(num * mult) 
    mult++
    
} 
console.log("------------------------------------")
let num1 = 10
while(num1 >= 1) {
    console.log(num1)
    num1--
}
console.log("------------------------------------")
let senha = prompt("Digite a palavra")
while (senha != "12345") {
    senha = prompt("tente novamente")
    if (senha == "12345") {
        console.log("Acertou")
    }
}
console.log("------------------------------------")
let num2 = 50
while(num2 <= 100) {
    console.log(num2) 
    num2++
}
console.log("------------------------------------")
let num3 = 0
while(num3 <= 100) {
    console.log(num3) 
    num3 += 5
}
console.log("------------------------------------")
let mensagem = "eu gosto de JavaScript"
let quantidade = 1
while (quantidade <= 5){
    console.log(mensagem)
    quantidade++
}
console.log("------------------------------------")
let nome = prompt("Digite Seu nome")
let vezes = Number(prompt("quantas vezes você quer que ele apareca"))
generico = 1
while (generico <= vezes){
    console.log(nome)
    generico++
}
