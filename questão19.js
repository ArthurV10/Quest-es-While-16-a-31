//Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
//peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
//boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)
import {print, pede_numero_positivo, pede_numero_positivo_com_zero} from "../Ajuda/funções.js"

function main(){
    print(`
    ============================
    Pesagem Frigorifico
    (Quando ID for igual a '0'
    o codigo encerra)
    =============================
    `)
    //Entrada
    let identificação = pede_numero_positivo_com_zero("Digite o numero da identificação: ")
    let peso = pede_numero_positivo("Digite o peso do Animal: ")
    let boi_mais_gordo = peso
    let boi_mais_magro = peso

    //Processamento
    while(identificação !== 0){
        const resposta_parcial = `
    *****************************************
    =========================================
    Codigo de Identificação: ${identificação}
    Peso do Boi: ${peso}
    =========================================
    *****************************************
    `
    print(resposta_parcial)
    
    identificação = pede_numero_positivo_com_zero("Digite o numero da identificação: ")
        if(identificação !== 0){
            peso = pede_numero_positivo("Digite o peso do Animal: ")
        }
    if(peso > boi_mais_gordo){
        boi_mais_gordo = peso
    }
    else if(peso < boi_mais_magro){
        boi_mais_magro = peso
    }
    }
    
    //Saida
    const resposta_final = `
    =================================
    Peso do Boi mais Pesado: ${boi_mais_gordo} kg
    Peso do Boi masi Leve: ${boi_mais_magro} kg
    =================================`
    print(resposta_final)
}
main()