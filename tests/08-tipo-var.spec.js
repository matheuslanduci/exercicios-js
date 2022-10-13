import { describe, expect, it } from 'vitest'

import tipoVariavel from '../src/08-tipo-var'

describe('Função de tipo de variável', () => {
  it('deve retornar "number" caso o parâmetro seja um número', () => {
    const resultado = tipoVariavel(1)

    expect(resultado).toBe('number')
  })

  it('deve retornar "string" caso o parâmetro seja uma string', () => {
    const resultado = tipoVariavel('1')

    expect(resultado).toBe('string')
  })

  it('deve retornar "boolean" caso o parâmetro seja um boolean', () => {
    const resultado = tipoVariavel(true)

    expect(resultado).toBe('boolean')
  })
})
