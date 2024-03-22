//Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
//escreva os N termos da PA. Ler o valor de N.

import {print, pede_numero_positivo, pede_numero} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================
    Calcular PA!
    ====================
    `)
    //Entrada
    let PA_Incial = pede_numero_positivo("Digite o primeiro termo da PA: ")
    const razão_PA = pede_numero("Digite a razão da PA: ")
    const N = pede_numero_positivo("Digite quantas vezes devem ser feita a PA após o primeiro termo('N'): ")

    //Processamento
    let contador = 0
    let resposta = `${PA_Incial}\n`
    while(contador < N){
        PA_Incial += razão_PA
        resposta += `${PA_Incial}\n`
        contador ++
    } 

    //Saida
    print(`
====================================
Os N da Pg são:
${resposta}
====================================`)
    print(`
    Encerrando Programa...
    `)
}
main()