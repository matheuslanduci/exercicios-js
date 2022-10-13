import { describe, expect, it, spyOn } from 'vitest'

import operacoes, { Calculadora } from '../src/20-operacoes'

describe('Função de operacoes', () => {
  it('deve retornar o resultado das operacoes', () => {
    const resultado = operacoes(2, 2)

    expect(resultado).toEqual({
      soma: 4,
      subtracao: 0,
      multiplicacao: 4,
      divisao: 1
    })
  })

  it('deve chamar as funções da calculadora', () => {
    const calculadora = new Calculadora()

    const soma = spyOn(calculadora, 'soma')
    const subtracao = spyOn(calculadora, 'subtracao')
    const multiplicacao = spyOn(calculadora, 'multiplicacao')
    const divisao = spyOn(calculadora, 'divisao')

    operacoes(2, 2)

    expect(soma).toHaveBeenCalledWith(2, 2)
    expect(subtracao).toHaveBeenCalledWith(2, 2)
    expect(multiplicacao).toHaveBeenCalledWith(2, 2)
    expect(divisao).toHaveBeenCalledWith(2, 2)
  })
})
