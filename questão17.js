//Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
// que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
//baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM'). 

import { print, pede_numero_positivo, pergunta } from "../Ajuda/funções.js";

function main() {
    print(`
    ==========================================
    CONCURSO DE BELEZA!
    (Quando nome for 'FIM' o programa encerra)
    ==========================================
    `);

    let nome_da_modelo = (pergunta("Digite o nome da modelo: ").toUpperCase())
    let altura_modelo = pede_numero_positivo("Digite a altura da modelo: ")
    let peso_da_modelo = pede_numero_positivo("Digite o peso da modelo: ")

    let modelo_mais_alta = nome_da_modelo
    let altura_mais_alta = altura_modelo
    let modelo_mais_baixa = nome_da_modelo
    let altura_mais_baixa = altura_modelo
    let modelo_mais_pesada = nome_da_modelo
    let peso_mais_pesada = peso_da_modelo
    let modelo_mais_leve = nome_da_modelo
    let peso_mais_leve = peso_da_modelo

    while (nome_da_modelo !== 'FIM') {
        let resposta_parcial = `
        ************************************
        ====================================
        Nome = ${nome_da_modelo}
        Altura = ${altura_modelo}
        Peso = ${peso_da_modelo}
        ====================================
        ************************************
        `

        if (altura_modelo > altura_mais_alta) {
            modelo_mais_alta = nome_da_modelo
            altura_mais_alta = altura_modelo
        }

        if (altura_modelo < altura_mais_baixa) {
            modelo_mais_baixa = nome_da_modelo
            altura_mais_baixa = altura_modelo
        }

        if (peso_da_modelo > peso_mais_pesada) {
            modelo_mais_pesada = nome_da_modelo
            peso_mais_pesada = peso_da_modelo
        }

        if (peso_da_modelo < peso_mais_leve) {
            modelo_mais_leve = nome_da_modelo
            peso_mais_leve = peso_da_modelo
        }

        print(resposta_parcial);
        nome_da_modelo = (pergunta("Digite o nome da proxima modelo: ").toUpperCase())
            if (nome_da_modelo !== 'FIM') {
                altura_modelo = pede_numero_positivo("Digite a altura da modelo: ")
                peso_da_modelo = pede_numero_positivo("Digite o peso da modelo: ")
            }
    }

    const resposta_final = `
    =====================================================================
    Modelo mais alta: ${modelo_mais_alta} com ${altura_mais_alta} cm
    Modelo mais baixa: ${modelo_mais_baixa} com ${altura_mais_baixa} cm
    Modelo mais pesada: ${modelo_mais_pesada} com ${peso_mais_pesada} kg
    Modelo mais leve: ${modelo_mais_leve} com ${peso_mais_leve} kg
    =====================================================================`

    print(resposta_final)
}
main()

