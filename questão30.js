//Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
//nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
//número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).

//a. Até 10 unidades: valor total
//b. de 11 a 20 unidades: 10% de desconto
//c. de 21 a 50 unidades: 20% de desconto
//d. acima de 50 unidades: 25% de desconto

import { print, pede_numero_positivo, pergunta } from "../Ajuda/funções.js";

function main() {
    print(`
    ====================
    Analisar Preço
    ====================
    `);

    let nome_produto = pergunta("Digite o nome do Produto: ").toUpperCase();

    while (nome_produto !== "FIM") {
        //Entrada
        let preço = pede_numero_positivo("Digite o preço do produto: ");
        let quantidade = pede_numero_positivo("Digite quantos produtos são: ");
        
        //Processamento
        let valor_total_sem_desconto = multiplicar(quantidade, preço);
        let valor_com_desconto = valor_total_sem_desconto;
        let porcentagem_desconto = 0;

        if (quantidade > 50) {
            valor_com_desconto -= valor_total_sem_desconto * 0.25;
            porcentagem_desconto = 25;
        } else if (quantidade >= 21 && quantidade <= 50) {
            valor_com_desconto -= valor_total_sem_desconto * 0.2;
            porcentagem_desconto = 20;
        } else if (quantidade >= 11 && quantidade <= 20) {
            valor_com_desconto -= valor_total_sem_desconto * 0.1;
            porcentagem_desconto = 10;
        }
        //Saida
        const resposta = `
        ******************************************
        ==========================================
        Nome do Produto: ${nome_produto}
        Valor a ser pago (Desconto de ${porcentagem_desconto}%): R$ ${valor_com_desconto.toFixed(2)}
        ==========================================
        ******************************************
        `;
        print(resposta);

        nome_produto = pergunta("Digite o nome do Proximo Produto: ").toUpperCase();
    }

    print("Programa encerrado.");
}

//Função
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

main();
