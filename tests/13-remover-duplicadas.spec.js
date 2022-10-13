import { describe, expect, it } from 'vitest'

import removerDuplicadas from '../src/13-remover-duplicadas'

describe('Função de Remover Duplicadas', () => {
  it('deve remover duplicadas', () => {
    const resultado = removerDuplicadas([1, 2, 3, 3, 4, 5, 5, 5])

    expect(resultado).toEqual([1, 2, 3, 4, 5])
  })
})
