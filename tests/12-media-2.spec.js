import { describe, expect, it } from 'vitest'

import media from '../src/12-media-2'

describe('Função de Média', () => {
  it('deve retornar a média de diversos números', () => {
    const resultado = media([1, 2, 3, 4, 5])

    expect(resultado).toBe(3)
  })
})
