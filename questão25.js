//Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
//cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
//estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
//quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
//mostrando ao final, o número de cada canal e sua respectiva audiência.

import { pede_numero_positivo_com_zero, print } from "../Ajuda/funções.js";

function main() {
    print(`
    Pesquisa Sobre Canais de Televisão
    =========================================
    10 = Canal 10
    7 = Canal 7
    5 = Canal 5
    4 = Canal 4
    2 = Canal 2
    0 = Encerrar Programa
    =========================================
    `);

    let pedir_canal = pede_numero_positivo_com_zero("Digite o numero que representa a opção que desejar: ");

    let contador_de_pessoas = 0;
    let canal_10 = 0;
    let canal_7 = 0;
    let canal_5 = 0;
    let canal_4 = 0;
    let canal_2 = 0;
    pedir_canal = verificar_canal(pedir_canal)

    while (pedir_canal !== 0) {
        if (pedir_canal === 10) {
            canal_10++;
            contador_de_pessoas++;
        } else if (pedir_canal === 7) {
            canal_7++;
            contador_de_pessoas++;
        } else if (pedir_canal === 5) {
            canal_5++;
            contador_de_pessoas++;
        } else if (pedir_canal === 4) {
            canal_4++;
            contador_de_pessoas++;
        } else if (pedir_canal === 2) {
            canal_2++;
            contador_de_pessoas++;
        }
        pedir_canal = pede_numero_positivo_com_zero("Digite o numero que representa sua opção: ");
        pedir_canal = verificar_canal(pedir_canal);
    }

    canal_10 = transformar_porcentagem(canal_10, contador_de_pessoas);
    canal_7 = transformar_porcentagem(canal_7, contador_de_pessoas);
    canal_5 = transformar_porcentagem(canal_5, contador_de_pessoas);
    canal_4 = transformar_porcentagem(canal_4, contador_de_pessoas);
    canal_2 = transformar_porcentagem(canal_2, contador_de_pessoas);

    print(`
    Resultado Pesquisa de Audiencia
    ================================
    Total de pessoas: ${contador_de_pessoas}
    Canal 10: ${canal_10.toFixed(2)}%
    Canal 7: ${canal_7.toFixed(2)}%
    Canal 5: ${canal_5.toFixed(2)}%
    Canal 4: ${canal_4.toFixed(2)}%
    Canal 2: ${canal_2.toFixed(2)}%
    ================================
    `);
}

function verificar_canal(canal) {
    let resposta = canal;
    while (resposta !== 10 && resposta  !== 7 && resposta  !== 5 && resposta  !== 4 && resposta  !== 2 && resposta  !== 0) {
        print("Digitação Inválida");
        resposta = pede_numero_positivo_com_zero("Digite o numero do canal novamente: ");
    }
    return resposta;
}

function transformar_porcentagem(numero, dados_totais) {
    let resposta = (numero / dados_totais) * 100;
    return resposta;
}
main();

