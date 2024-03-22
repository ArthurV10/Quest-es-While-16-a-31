//Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
//em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
//a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
//· a média das idades das pessoas que responderam ótimo;
//· a quantidade de pessoas que respondeu regular;
//· o percentual de pessoas que respondeu bom entre os entrevistados.
import {print, pede_numero_positivo, pede_numero} from "../Ajuda/funções.js"

function main(){
    print(`
    ====================================
    Analisar Opiniões Sobre Filmes
    1 = Otimo
    2 = Bom
    3 = Regular
    4 = Pessimo
    (Idade '-1' para encerrar o programa)
    =====================================
    `)
    //Variavel
    let contador_idade_otimo = 0
    let contador_otimo = 0
    let contador_qtd_pessoas_regular = 0
    let total_pessoas = 0
    let contador_bom = 0
    //Entrada
    let opinião = verificar_opinião(pede_numero("Digite o numero que corresponde sua opinião: "))
    let idade = verificar_idade(pede_numero("Digite sua Idade: "))

    //Processamento
    while(idade !== -1){
        if(opinião === 1){
            contador_otimo++
            contador_idade_otimo += idade
            total_pessoas++
        }
        else if(opinião === 2){
            contador_bom++
            total_pessoas++
        }
        else if(opinião === 3){
            contador_qtd_pessoas_regular++
            total_pessoas++
        }
        else if(opinião === 4){
            total_pessoas++
        }
        opinião = verificar_opinião(pede_numero("Digite o numero que corresponde sua opinião: "))
        idade = verificar_idade(pede_numero("Digite sua Idade: "))
    }
    
    let media_idade_opinões_otimas = media(contador_idade_otimo, contador_otimo)
    let percentual_opinão_bom = porcentagem(contador_bom, total_pessoas)

    //Saida
    const resposta = `
    ************************************
    ====================================
    Media de Idade das pessoas que acharam otimo:
    ${media_idade_opinões_otimas}
    Quantidade de pessoas que acharam regular:
    ${contador_qtd_pessoas_regular}
    Percentual de pessoas que acharam bom:
    ${percentual_opinão_bom}%
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes
function verificar_idade(idade){
    while(idade < -1 && idade === 0){
        print("Idade Inexistente")
        idade = pede_numero("Digite uma idade valida: ")
    }
    return idade
}

function verificar_opinião(opinião){
    while(opinião !== 1 && opinião !== 2 && opinião !== 3 && opinião !== 4){
        print("Valor  invalido")
        opinião = pede_numero("Digite o valor entre as opções apresentadas: ")
    }
    return opinião
}

function media(numero1, numero2) {
    return numero2 !== 0 ? numero1 / numero2 : 0;
}

function porcentagem(parcela, total){
    return (parcela / total) * 100
}
main()
