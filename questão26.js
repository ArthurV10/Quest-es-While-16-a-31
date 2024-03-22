//Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
//em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
//a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
//· a média das idades das pessoas que responderam ótimo;
//· a quantidade de pessoas que respondeu regular;
//· o percentual de pessoas que respondeu bom entre os entrevistados.
import {print, pede_numero_positivo} from "../Ajuda/funções.js"

function main(){
    print(`
    ==============================
    Analisar Opiniões Sobre Filmes
    ==============================
    `)
    //Variavel
    let contador_idade_otimo = 0
    let contador_otimo = 0
    let contador_qtd_pessoas_regular = 0
    let total_pessoas = 0
    let contador_bom = 0
    //Entrada
    const numero1 = pede_numero_positivo("Digite o primeiro numero: ")
    const numero2 = pede_numero_positivo("Digite o segundo numero: ")

    //Verificar 
    //Processamento
    
    //Saida
    const resposta = `
    ************************************
    ====================================
    Media de Idade das pessoas que acharam bom:
    ${media_bom}
    Quantidade de pessoas que acharam regular:
    ${contador_qtd_pessoas_regular}
    Percentual de pessoas que acharam bom:
    ${percentual_bom}
    ====================================
    ************************************
    `
    print(resposta)
}
//Funçôes
NÃO TA PRONTOOOOOOOOOOOOOOOOOOOO
main()
