import { describe, expect, it } from 'vitest'

import objetosComplexos from '../src/18-objetos-complexos'

describe('Função de objetos complexos', () => {
  it('deve retornar "meow"', () => {
    const resultado = objetosComplexos()

    expect(resultado).toBe('meow')
  })
})
