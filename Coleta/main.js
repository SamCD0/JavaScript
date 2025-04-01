//funções matematicas
let num = 4.7

//arredondar números
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
//numero Aleatório
console.log(Math.random())
console.log(Math.random()*10)

//Funções de String
let texto = "  Eu amo javascript  "
//Manipular String
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.trim())
//localizar texto
console.log(texto.charAt(5))
console.log(texto.includes("javascript"))
//trocartextos
console.log(texto.replace("amo", "adoro"))


//funções Númericas
let numero = "42.85"
console.log(parseInt(numero))
console.log(parseFloat(numero))
console.log(Number(numero).toFixed(1))