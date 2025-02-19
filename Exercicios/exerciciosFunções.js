function JavaScript() {
    console.log("Eu gosto de JavaScript")
}
JavaScript()
console.log("/////////////////////")
function contarAteCinco () {
    for(let a = 1; a <= 5; a++) {
        console.log(a)
    }
}
contarAteCinco ()
console.log("/////////////////////")
function saudação() {
    let nome = prompt("Qual seu nome?")
        console.log("Olá", nome, "! Seja bem vindo")
}
saudação()
console.log("/////////////////////")
function multiplicarDoisNumeros(a,b) {
    let resultado = a * b
    return resultado
}
console.log(multiplicarDoisNumeros(5,3))
console.log("/////////////////////")
function verificarIdade (c){
    if (c >= 18)
        console.log("Maior de idade")
    else console.log("Menor de idade")
}
console.log("/////////////////////")
function somar(a,b){
    let resultado = a + b
    return resultado
}
console.log(somar(a = Number(prompt("escolha um numero")),b = Number(prompt("escolha outro numero"))))
console.log("/////////////////////")
function calcularAreaRetangulo(largura,altura){
        let resultado = largura * altura
        return resultado
}
console.log(calcularAreaRetangulo(largura = Number(prompt("Qual a largura do retangulo?")),altura = Number(prompt("Qual a altura do retangulo"))))
console.log("/////////////////////")
function compararIdade(idadeA,idadeB){
    if (idadeA > idadeB)
        console.log("idade 1 é maior")
    else if (idadeA < idadeB){
        console.log("idade 2 é maior")
} else 
    console.log("idade iguais")
}console.log(compararIdade(idadeA = Number(prompt("Qual a Primeira idade?")),idadeB = Number(prompt("Qual a Segunda idade?"))))