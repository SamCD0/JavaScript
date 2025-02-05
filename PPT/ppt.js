// Jogo Pedra, Papel e Tesoura         
const escolhaJogador = prompt("Escolha Pedra, Papel, ou Tesoura:")
// Solicita que o usuário informe qual ele quer
const escolhaPC = ["Pedra", "Papel", "Tesoura"]
[Math.floor(Math.random() * 3)]                                 
// Gera uma escolha aleatoria para o computador
// Criamos um array com as opcões e usamos o random para escolher uma de forma aleatoria
                                                                  
alert(`você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)
// Compara se a nossa escolha foi igual a do computador
if (escolhaJogador == escolhaPC){
    alert("Empate")
} else if (escolhaJogador == "Pedra" && escolhaPC == "Tesoura") {
    alert("você venceu")
} else if (escolhaJogador == "Tesoura" && escolhaPC == "Papel") {
    alert("você venceu")
} else if (escolhaJogador == "Papel" && escolhaPC == "Pedra") {
    alert("você venceu")
} else {
    alert("você perdeu")
}