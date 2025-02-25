// Jogo Pedra, Papel e Tesoura    
let placarJogador = 0
let placarPc = 0

//Variável para  armazenar rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

//Laço de repetição fará as rodadas
for (let i = 0; i < rodadas; i++) {



    const escolhaJogador = prompt("Escolha Pedra, Papel, ou Tesoura:")
    // Solicita que o usuário informe qual ele quer
    const escolhaPC = ["Pedra", "Papel", "Tesoura"]
    [Math.floor(Math.random() * 3)]
    // Gera uma escolha aleatoria para o computador
    // Criamos um array com as opcões e usamos o random para escolher uma de forma aleatoria

    alert(`você escolheu ${escolhaJogador}`)
    alert(`O computador escolheu ${escolhaPC}`)
    // Compara se a nossa escolha foi igual a do computador
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "Pedra" && escolhaPC == "Tesoura") {
        alert("você venceu")
        placarJogador++
    } else if (escolhaJogador == "Tesoura" && escolhaPC == "Papel") {
        alert("você venceu")
        placarJogador++
    } else if (escolhaJogador == "Papel" && escolhaPC == "Pedra") {
        alert("você venceu")
        placarJogador++
    } else {
        alert("você perdeu")
        placarPc++
    }
    //Exibe o placar no console
    console.log("Placar Jogador: ", placarJogador)
    console.log("Placar Computador: ", placarPc)
}
    //Placar final
    alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x 
        ${placarPc} Computador`)
