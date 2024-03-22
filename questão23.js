//Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
//escreva os N termos da PG. Ler o valor de N.

import {print, pede_numero_positivo, pede_numero} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================
    Calcular PG!
    ====================
    `)
    //Entrada
    let Pg_Incial = pede_numero_positivo("Digite o primeiro termo da PG: ")
    const razão_PG = pede_numero("Digite a razão da Pg: ")
    const N = pede_numero_positivo("Digite quantas vezes devem ser feita a Pg após o primeiro termo('N'): ")

    //Processamento
    let contador = 0
    let resposta = `${Pg_Incial}\n`
    while(contador < N){
        Pg_Incial *= razão_PG
        resposta += `${Pg_Incial}\n`
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