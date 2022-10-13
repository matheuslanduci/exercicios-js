import { describe, expect, it } from 'vitest'

import soma from '../src/01-soma'

describe('Função de soma', () => {
  it('deve retornar o resultado da soma de dois números', () => {
    const resultado = soma(16, 4)

    expect(resultado).toBe(20)
  })
})
