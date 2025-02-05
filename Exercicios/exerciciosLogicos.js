let idade = Number(prompt("Quantos anos voce tem"))
let carteira = true

if (carteira == true && idade >= 18) {
    console.log("Voce pode dirigir")
} else {
    console.log("Voce não pode dirigir")
}
console.log("--------------------------")
let anos = Number(prompt("A quantos anos voce trabalha nessa empresa?"))
 projetos = Number(prompt("Quantos projetos voce realizados?"))
    if (anos >= 5 || projetos > 10) {
        console.log("Voce é elegivel a promoção")
} else {
        console.log("Voce não é elegivel a promoção")
        }
console.log("--------------------------")
let Idade = (prompt("Quantos anos voce tem?"))
    if (Idade >= 18 && Idade <= 30) {
        console.log("voce pode entrar no evento")
    } else {
        console.log("voce nao pode entrar no evento")
    }
console.log("--------------------------")
let IDADE = Number(prompt("Qual a sua idade?"))
let  experiencia = true
    if (IDADE > 21 && experiencia == true) {
        console.log("Voce foi aceito para a vaga")
    } else {
        console.log("Voce não foi aceito para  vaga")
}
console.log("--------------------------")
let usuario = prompt("Nome de usuario")
let senha = prompt("senha")
if (usuario == "admin" && senha == 1234) {
    console.log("login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}
console.log("--------------------------")
let num = Number(prompt("escolha um numero"))
    if (num >= 10 && num <= 20) {
        console.log("O número está dentro do intervalo entre 10 e 20")
    } else if (num >= 30 && num <= 50){
        console.log("O número está dentro do intervalo entre 30 e 50")
    }   else {
        console.log("ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
    }
console.log("--------------------------")
    let numero = (prompt("Escolha um numero"))
    if (numero < 10 || numero > 100 && numero == 50) {
        console.log("O numero é aceito")
    } else {
        console.log("O numero não é aceito")
    }