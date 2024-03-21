//Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
//crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
//crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
//necessários, para que a população da cidade A ultrapasse a população da cidade B.

import {print, pede_numero_positivo, pede_numero_positivo_com_zero} from "../Ajuda/funções.js"

function main(){
    print(`
    ==========================
    ULTRAPASSAGEM POPULACIONAL
    ==========================
    `)
    //Entrada
    let CidadeA = pede_numero_positivo("Digite a quantidade de habitantes da cidade A: ")
    let taxa_crescimento_cidadeA = pede_numero_positivo_com_zero("Digite a taxa de crescimento da cidade A: ")
    let CidadeB = pede_numero_positivo("Digite a quantidade de habitantes da cidade B: ")
    let taxa_crescimento_cidadeB = pede_numero_positivo_com_zero("Digite a taxa de crescimento da cidade B: ")

    //Processamento
    let anos = 0
    while(CidadeA < CidadeB){
        CidadeA *= (taxa_crescimento_cidadeA / 100)
        CidadeB *= (taxa_crescimento_cidadeB / 100)
        anos ++
    }

    //Saida
    const resposta = `
    *************|RESPOSTA|*************
    ====================================
    A cidade A vai demorar ${anos === 1 ? `${anos} ano` : `${anos} anos`} para
    ultrapassar a cidade B
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes

main()