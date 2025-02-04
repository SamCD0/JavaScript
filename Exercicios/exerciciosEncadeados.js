let Idade = Number(prompt("Qual sua idade:"))
if(Idade <= 12) {
    console.log("Criança")
} else if (Idade <= 17) {
    console.log("Adolescente")
} else if (Idade <= 59){
    console.log("Adulto")
} else {
    console.log("idoso")
}
console.log("--------------")
let temperatura= Number(prompt("Qual a temperatura"))
if(temperatura < 10) {
    console.log("Muito frio")
} else if (temperatura < 20) {
    console.log("frio")
} else if (temperatura < 30){
    console.log("Agradavel")
} else {
    console.log("Muito Quente")
}
console.log("--------------")
let Estudo = String(prompt("Quando é o seu turno de estudo(M, V, N):"))
if(Estudo == "M") {
    console.log("Bom dia!")
} else if (Estudo == "V") {
    console.log("Boa tarde!")
} else if (Estudo == "N"){
    console.log("Boa noite!")
} else {
    console.log("Turno invalido")
}
console.log("--------------")
let valor = Number(prompt("Qual o valor da compra?"))
if (valor <= 100) {
    console.log("Ganhou 5% de desconto")
} else if (valor <= 200) {
    console.log("ganhou 10% de desconto")
} else if (valor > 200) {
    console.log("ganhou 15% de desconto")
}
console.log("--------------")
let Nota= Number(prompt("Qual a Sua Nota"))
if(Nota >= 90) {
    console.log("A")
} else if (Nota >= 80) {
    console.log("B")
} else if (Nota >= 70){
    console.log("C")
} else if (Nota >= 60){
    console.log("D")
} else {
    console.log("F")
}
console.log("--------------")
let Dia= Number(prompt("Qual a Sua Nota"))
if(Dia == 1) {
    console.log("Domingo")
} else if (Dia == 2) {
    console.log("Segunda")
} else if (Dia == 3){
    console.log("Terça")
} else if (Dia == 4){
    console.log("Quarta")
} else if (Dia == 5){
     console.log("Quinta")
} else if (Dia == 6){
     console.log("Sexta") 
 } else if (Dia == 7){
    console.log("Sábado")
 } else {
    console.log("Fake")
 }
 console.log("--------------")
 let Distancia = Number(prompt("Qual sua idade:"))
if(Distancia <= 400) {
    console.log("Pista curta")
} else if (Distancia <= 800) {
    console.log("Pista média")
} else if (Idade <= 1500){
    console.log("Pista longa")
} else {
    console.log("Pista Muito longa")
}
console.log("--------------")
let Ponto = Number(prompt("Qual sua idade:"))
if(Ponto <= 1000) {
    console.log("Iniciante")
} else if (Ponto <= 5000) {
    console.log("Intermediario")
} else if (Ponto <= 10000){
    console.log("Avançado")
} else {
    console.log("Mestre")
}