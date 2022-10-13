import { describe, expect, it } from 'vitest'

import contemValor from '../src/14-contem-valor'

describe('Função de Contem Valor', () => {
  it('deve retornar true se o array contém o valor', () => {
    const resultado = contemValor(['Banana', 'Maçã', 'Pera'], 'Banana')

    expect(resultado).toBe(true)
  })

  it('deve retornar false se o array não contém o valor', () => {
    const resultado = contemValor(['Banana', 'Maçã', 'Pera'], 'Uva')

    expect(resultado).toBe(false)
  })
})
