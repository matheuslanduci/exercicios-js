import { describe, expect, it } from 'vitest'

import removerValor from '../src/15-remover-valor'

describe('Função de Remover Valor', () => {
  it('deve remover valor do array', () => {
    const resultado = removerValor([1, 2, 3], 2)

    expect(resultado).toEqual([1, 3])
  })
})
