import { print, pede_numero } from "../Ajuda/funções.js";

function main() {
    print(`
    ========================
    Multiplicação de Numeros
    ========================
    `);
    // Entrada
    const numero1 = pede_numero("Digite o primeiro numero: ");
    const numero2 = pede_numero("Digite o segundo numero: ");
    // Processamento
    const calculo = multiplicacao(numero1, numero2);

    // Saida
    const resposta = `
    ************************************
    ====================================

    O RESULTADO É: ${calculo}

    ====================================
    ************************************
    `;
    print(resposta);
}

function multiplicacao(numero1, numero2) {
    let resultado = 0;
    let contador = 0;

    // Trata o caso de um dos números ser zero
    if (numero1 === 0 || numero2 === 0) {
        return resultado;
    }

    // Trata o caso de ambos números serem positivos
    if (numero1 > 0 && numero2 > 0) {
        while (contador < numero2) {
            resultado += numero1;
            contador++;
        }
    } else {
        // Trata o caso de um dos números ser negativo
        if (numero1 < 0) {
            numero1 = -(numero1); // Transforma numero1 em positivo
        }
        else if (numero2 < 0) {
            numero2 = -(numero2); // Transforma numero2 em positivo
        }
        while (contador < numero2) {
            resultado += numero1;
            contador++;
        }
        resultado = -(resultado); // Inverte o sinal do resultado se um dos números for negativo
    }
    return resultado;
}

main();
