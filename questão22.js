//Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
//de divisão (/ e %) sejam utilizados.

import { print, pede_numero } from "../Ajuda/funções.js"

function main() {
    print(`
    ===========================
    Quociente e Resto da Divisão
    ===========================
    `)
    
    // Entrada
    const dividendo = pede_numero("Digite o dividendo: ")
    const divisor = pede_numero("Digite o divisor: ")

    // Processamento
    const resultado = divisao(dividendo, divisor)

    // Saída
    const resposta = `
    ************************************
    ====================================

    QUOCIENTE: ${resultado[0]}
    RESTO: ${resultado[1]}

    ====================================
    ************************************
    `
    print(resposta)
}

function sinal(numero) {
    return numero >= 0 ? 1 : -1
}

function retornar_para_original(numero) {
    return numero >= 0 ? numero : -numero
}

function divisao(dividendo, divisor) {
    let quociente = 0
    let resto = 0
    let sinal_dividendo = sinal(dividendo)
    let sinal_divisor = sinal(divisor)

    let sinal_quociente = sinal_dividendo * sinal_divisor

    dividendo = retornar_para_original(dividendo)
    divisor = retornar_para_original(divisor)

    while (dividendo >= divisor) {
        dividendo -= divisor
        quociente++
    }
    resto = dividendo

    quociente *= sinal_quociente
    resto *= sinal_dividendo

    return [quociente, resto]
}
main()
