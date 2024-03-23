//Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
//quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
//investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
//deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
//por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
//Saldo do investimento após 1 ano: 1268.25
//Deseja processar mais um ano (S/N) ?

import { print, pede_numero_positivo, pergunta } from "../Ajuda/funções.js";

function main() {
    print(`
    ====================
    CALCULAR RETORNO
    DO INVESTIMENTO!
    ====================
    `);

    let continuar = "S";
    let saldo_inicial = 0;
    let meses = 0;
    while (continuar.toUpperCase() === "S") {
        // Entrada
        const investido_por_mes = pede_numero_positivo("Digite quanto será investido por mês: ");
        const taxa_juros_mensal = pede_numero_positivo("Digite a taxa de juros mensal (em %): ");

        // Processamento
        while (meses % 12 !== 0) {
            saldo_inicial += investido_por_mes;
            saldo_inicial += saldo_inicial * (taxa_juros_mensal / 100);
            meses++;
        }

        // Saída
        const resposta = `
    ************************************
    ====================================
    O Saldo do investimento após 1 ano é: R$ ${saldo_inicial.toFixed(2)}
    ====================================
    ************************************
    `;
        print(resposta);

        continuar = pergunta("Deseja processar mais um ano (S/N) ? ");
    }

    print("Programa encerrado.");
}

main();

