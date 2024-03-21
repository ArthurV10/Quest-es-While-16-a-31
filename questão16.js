//Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
//Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
//algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.

import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ==================================
    Analise de dias para quitar Divida
    ==================================
    `)
    //Entrada
    const valor_emprestimo = pede_numero_positivo("Digite o valor do emprestimo: ")
    const pagamento = pede_numero_positivo("Digite o valor do pagamento por dia util: ")
    let porcentagem_juros = pede_numero_positivo("Digite a porcentagem: ")
    porcentagem_juros = (porcentagem_juros / 100)
    let quantidade_de_dias = valor_quitado_emprestimo(valor_emprestimo, pagamento, porcentagem_juros)

    //Saida
    const resposta = `
    ************************************
    ====================================
    Quantidade de dias nescesarias será:
    ${quantidade_de_dias} dia/s
    ====================================
    ************************************
    `
    print(resposta)
}

//Funçôes
function valor_quitado_emprestimo(valor_emprestimo, pagamento_por_dia, porcentagem_juros){
    let dias = 0
    let dias_uteis = 0
    //Aplicar juros todos os dias, enquanto pagamento é feito apenas em dias úteis
    while(valor_emprestimo > 0){
        valor_emprestimo += (valor_emprestimo * porcentagem_juros)

        if(dias % 7 < 5){
            valor_emprestimo -= (pagamento_por_dia)
            dias_uteis++
        }
        dias++
    }
    return dias_uteis
}
main()
