let dia = Number(prompt("Insira um numero de 1 a 7"))
switch (dia){
    case 1:
     console.log("Domingo")
        break
        case 2: 
        console.log("Segunda")
        break
        case 3:
     console.log("Terça")
        break
        case 4: 
        console.log("Quarta")
        break
        case 5:
     console.log("Quinta")
        break
        case 6: 
        console.log("Sexta")
        break
        case 7:
     console.log("Sábado")
        break
        default: 
        console.log("Número inválido. Insira um valor entre 1 e 7.")
     }
     console.log("--------------------------")
     let idade = Number(prompt("Insira um numero para representar sua idade, entre 5-infantilA, 10-InfantilB, 15-JuvenilA, 20-JuvenilB e 30-adulto."))
     switch (idade){
         case 5:
          console.log("infantilA")
             break
             case 10: 
             console.log("infantilb")
             break
             case 15:
          console.log("JuvenilA")
             break
             case 20: 
             console.log("Juvenilb")
             break
             case 30:
          console.log("adulto")
             break
             default: 
             console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30")
          }
          console.log("--------------------------")
          let turno = (prompt("Insira uma letra para representar seu turno. M, V, N"))
          switch (turno){
              case "M":
               console.log("Bom dia")
                  break
                  case "V": 
                  console.log("Boa Tarde")
                  break
                  case "N":
               console.log("Boa noite")
                  break
                  default: 
                  console.log("Turno inválido. Insira M, V ou N.")
               }
               console.log("--------------------------")
               let numero = Number(prompt("Escolha um numero de 1 a 5 e receba uma mensagem diferente"))
               switch (numero){
                   case 1:
                    console.log("Bom dia")
                       break
                       case 2: 
                       console.log("Boa Tarde")
                       break
                       case 3:
                    console.log("Boa Madrugada")
                       break
                       case 4:
                    console.log("Bom noite")
                       break
                       case 5: 
                       console.log("Me empresta a conta vitor")
                       break
                       default: 
                       console.log("Número fora do intervalo. Insira um valor entre 1 e 5")
                    }
                    console.log("--------------------------")
                    let estacao = Number(prompt("Insira um numero de 1 a 4 para escolher uma estação"))
                    switch (estacao){
                        case 1:
                         console.log("Primavera")
                            break
                            case 2: 
                            console.log("Verão")
                            break
                            case 3:
                         console.log("Outono")
                            break
                            case 4:
                         console.log("Inverno")
                            break
                            default: 
                            console.log("Estação inválida. Insira um número de 1 a 4")
                         }