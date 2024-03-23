//Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
//numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
//   de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).
import { print, pede_numero_positivo, pergunta } from "../Ajuda/funções.js"

function main() {
    print(`
    ================================
    Converter para Numeração Romana
    ================================
    `)

    //Entrada
    let numero = pede_numero_positivo("Digite um Numero de até 3 dígitos: ")
    let continuar = "S"
    if (numero < 1 || numero > 999) {
        print("Número fora do intervalo permitido.")
        return
    }

    //Processamento
    while(continuar === "S"){
    let unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    let dezenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    let centenas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]

    let centena = Math.floor(numero / 100)
    let dezena = Math.floor((numero % 100) / 10)
    let unidade = numero % 10
    
    let romano = centenas[centena] + dezenas[dezena] + unidades[unidade]
    
    print(`
    ----------------------RESPOSTA-----------------------
    =====================================================
    O número ${numero} em numeração romana é ${romano}
    =====================================================
    `)
    
    continuar = verificar_resposta(pergunta("Deseja Continuar?(S/N): ").toUpperCase())
    if(continuar === "S"){
        numero = pede_numero_positivo("Digite o Proximo Numero:")
    }
    
    }
    print("Encerrando Programa...")
}

//Funções
function verificar_resposta(resposta){
    while(resposta !== "S" && resposta !== "N"){
        resposta = pergunta(`
        Digitação Invalida!
        Digite a uma resposta valida('S' ou 'N'): `).toUpperCase()
    }
    return resposta
}
main();
