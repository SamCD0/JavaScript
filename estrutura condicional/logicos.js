// Verifica se a pessoa pode votar
let idade = 20
let tituloEleitor = true
             
if (idade >= 18 && tituloEleitor == true) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}
// Verificar se o número está dentro do intervalo
let numero = 15
if(numero >= 10 && numero < 20) {
    console.log("O numero esta entre 10 e 20")
} else {
    console.log("O numero esta fora do intervalo")
}

//Compra com desconto
let valor = 150
let clientevip = false

if (valor >= 100 || clientevip == true) {
    console.log("Voce ganhou frete gratis")
} else {
    console.log("Tem que pagar o frete")
}
// Número no intervalo
let num = 10
if (num >= 5 || num <= 20) {
    console.log("Funcionou")
} else{
    console.log("Não funcionou")
}