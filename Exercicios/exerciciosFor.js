for(let num = 1; num <= 30; num ++) {
    console.log(num)
}
console.log("///////////////")
for(let numMenos = 30; numMenos >= 1; numMenos --) {
    console.log(numMenos)
}
console.log("///////////////")
for(let generico = 1; generico <= 5; generico ++ ) {
    let leitor = Number(prompt("Escolha um numero"))
    console.log(leitor)
    if (leitor >= 50)

    console.log("Acima da Média")
  else
  console.log("Abaixo da média")
}
console.log("///////////////")
let numero = 1
for (let tabuada = Number(prompt("Escolha um numero para ver sua tabuada")); numero <= 10; numero++) {
    let = resul = tabuada * numero
    console.log(resul)
}
console.log("///////////////")
let m = 0
for (let patinhos = Number(prompt("Quantos patinhos")); patinhos >= 0; patinhos--) {
    console.log( patinhos, 'patinhos foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá, mas só', patinhos-1, 'patinhos voltaram de lá' )
   }
 console.log("A mamãe patinha foi procurar Além das montanhas Na beira do mar A mamãe gritou: Quá, quá, quá, quá E os patinhos voltaram de lá.")
 console.log("///////////////")
 
 for (let gene = 1; gene <= 10; gene++){
    let idade = Number(prompt("informe a idade"))
    if (idade >= 18)
        console.log(idade, "Maior de idade")
    else console.log(idade, "Menor de idade")
 }
 console.log("///////////////")
 
 for (num1 = 1; num1 <= 5; num1++){
    let votacao = Number(prompt("Informe seu voto"))
        if (votacao == 2){
            console.log("Candidato1")
        } else if (votacao == 1){
            console.log("Candidato2")
        } else if (votacao == 3){
            console.log("Candidato3")
        } else if (votacao == 4){
            console.log("Candidato4")
        } else if (votacao == 5){
            console.log("VotoNulo")
        } else if (votacao == 6){
            console.log("VotoBranco")
        } else {
            console.log("Invalido")
        }
 }