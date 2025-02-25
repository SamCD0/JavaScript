let saudacao = function(nome) {
    console.log("Olá", nome, "Como vai?")
}
saudacao( prompt("Qual seu nome"))
console.log("////////////")
let somaNum = function(a,b){
    let resultado = a + b
    return resultado
}
console.log(somaNum(a = Number(prompt("escolha um numero")),b = Number(prompt("escolha outro numero"))))
console.log("////////////")
let retangulo = function(altura,base){
    let resultado = altura * base
    return resultado
}
console.log(retangulo(altura = Number(prompt("Qual é a altura do retangulo")),base = Number(prompt("qual é a largura do retangulo"))))
console.log("////////////")
let dobro = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(numero = Number(prompt("escolha um numero e veja seu dobro"))))
console.log("////////////")
let quadrado = (numero) => {
    let resultado = numero * numero
    return resultado
}
console.log(quadrado(numero = Number(prompt("escolha um numero e veja seu quadrado"))))
console.log("////////////")
let maior = (idade) => {
    if (idade >= 18) {
        console.log("Maior de idade")
    } else console.log("Menor de idade")
}
console.log(maior(idade = Number(prompt("Quantos anos você tem?"))))
console.log("////////////")
let notas = (nota1,nota2,nota3) => {
    let soma = nota1 + nota2 + nota3
    let resultado = soma / 2
    return resultado
}
console.log(notas(nota1 = Number(prompt("Primeira nota"))), nota2 = Number(prompt("Segunda nota"))),nota3 = Number(prompt("terceira nota"))