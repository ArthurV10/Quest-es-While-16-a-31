//Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
//e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
//digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
//um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
//escreva em quantas tentativas o usuário acertou.
import {print, pede_numero_positivo, pede_numero} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================
    Acertar Numero aleatorio
    ====================
    `)
    //Entrada
    const intervalo_de_numeros = pede_numero_positivo("Digite o Intervalo de Numeros: ")
    const numero_aleatorio = Math.floor(Math.random() * intervalo_de_numeros) + 1
    let palpite = pede_numero("Digite um numero como palpite: ")

    //Processamento
    while(numero_aleatorio !== palpite){
        if(palpite > numero_aleatorio){
            print("MAIOR!")
        }
        else if(palpite < numero_aleatorio){
            print("MENOR!")
        }
        palpite = pede_numero("Digite um proximo numero como palpite: ")
    }
    
    //Saida
    const resposta = `
    ************************************
    ====================================
                !!ACERTOU!!
        O numero era ${numero_aleatorio}

    ====================================
    ************************************
    `
    print(resposta)
}
main()