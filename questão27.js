//Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
    //2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
    //· Média de idade das mulheres;
    //· Média de idade dos homens;
    //· O percentual de homens solteiros;
    //· O percentual de mulheres solteiras;
    // · A quantidade de mulheres divorciadas acima de 30 anos.
import {pede_numero, pede_numero_positivo, pergunta} from "../Ajuda/funções.js"

function main(){
    print(`
    ==================
    Analise dos Dados
    ==================
    `)
    //ENTRADA
    let numero_de_pessoas = pede_numero_positivo("Digite a quantidade de pessoas na pesquisa: ")
    print(`
    PREENCHA OS DADOS DA PESQUISA!
    (PESSOA POR PESSOA)
    `)
    let sexo = verificar_sexo(pede_numero_positivo(`
    ============================
    Opções de Sexo
    1 = Masculino
    2= Feminino
    ============================
    `))

    let idade = pede_numero_positivo("Digite a idade:")

    let estado_civil = verificar_estado_civil(pede_numero_positivo(`
    ==============================
    Opções de Estado Civil
    1 = Casado
    2 = Solteiro
    3 = Divorciado
    4 = Viuvo
    ==============================`))

    //PROCESSAMENTO
    let contador = 0
    let quantidade_mulheres = 0
    let quantidade_homens = 0
    let idade_homens = 0
    let idade_mulheres = 0
    let qtd_mulheres_solteiras = 0
    let mulheres_divorciadas_30mais = 0

    while(numero_de_pessoas > contador){
        if(sexo === 1){
            quantidade_homens++
            contador ++
            idade_homens += idade
        }
        else if(sexo === 2){
            quantidade_mulheres++
            contador++
            idade_mulheres += idade
        
            if(estado_civil === 2){
                qtd_mulheres_solteiras ++
            }
            else if(estado_civil === 3 && idade > 30){
            mulheres_divorciadas_30mais ++
            }
        }
        sexo = pede_numero_positivo("Digite o sexo da proxima pessoa: ")
        idade = pede_numero_positivo("Digite a idade da proxima pessoa:")
    }

    let media_idade_mulheres = media(idade_mulheres, quantidade_mulheres)
    let media_idade_homens = media(idade_homens, quantidade_homens)
    let porcentagem_mulher_solteira = virar_porcentagem(qtd_mulheres_solteiras, quantidade_mulheres)

    //SAIDA
    const resposta = `
    --------------------------------------------------------------------------------
    ================================================================================
    Media de idade das mulheres: ${media_idade_mulheres.toFixed(0)}
    Media de idade dos homens: ${media_idade_homens.toFixed(0)}
    Percentual Mulheres Solteiras: ${porcentagem_mulher_solteira.toFixed(2)}%
    Quantidade de Mulheres Divorciadas(Maior que 30): ${mulheres_divorciadas_30mais}
    ================================================================================
    --------------------------------------------------------------------------------
    `
    print(resposta)
}

function media(numero1, numero2){
    return (numero1 / numero2)
}

function virar_porcentagem(parcial, total){
    return (parcial / total) * 100
}

function verificar_sexo(sexo){
    while (sexo > 2){
        print(`
        DIGITAÇÃO INVALIDA!
        `)
        sexo = pede_numero_positivo("Digite um dos numeros das Opções apresentadas: ")
    }
    return sexo
}

function verificar_estado_civil(estado_civil){
    while (estado_civil > 4){
        print(`
        DIGITAÇÃO INVALIDA!
        `)
        estado_civil = pede_numero_positivo("Digite um dos numeros das Opções apresentadas: ")
    }
    return estado_civil
}
main()