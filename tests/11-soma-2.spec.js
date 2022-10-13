import { describe, expect, it } from 'vitest'

import soma from '../src/11-soma-2'

describe('Função de Soma', () => {
  it('deve retornar a soma de diversos números', () => {
    const resultado = soma([1, 2, 3, 4, 5])

    expect(resultado).toBe(15)
  })
})
