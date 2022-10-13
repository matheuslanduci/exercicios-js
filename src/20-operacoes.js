/**
 * Neste exercício você deve implementar uma função que irá receber
 * dois parâmetros (inteiros) e devolver o resultado de todas as
 * operações da calculadora.
 *
 * Exemplo:
 * operacoesCalculadora(1, 2) -> {
 *   soma: 3,
 *   subtracao: -1,
 *   multiplicacao: 2,
 *   divisao: 0.5
 * }
 */

/* Não modifique a linha abaixo */
export class Calculadora {
  soma(a, b) {
    return a + b
  }

  subtracao(a, b) {
    return a - b
  }

  multiplicacao(a, b) {
    return a * b
  }

  divisao(a, b) {
    return a / b
  }
}

function operacoesCalculadora() {
  // Implemente sua solução aqui :)
}

/* Não modifique a linha abaixo */
module.exports = operacoesCalculadora
