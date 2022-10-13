import { describe, expect, it } from 'vitest'

import contemValor2 from '../src/19-contem-valor-2'

describe('Função de contém valor', () => {
  it('deve retornar true se o array contém o valor', () => {
    const resultado = contemValor2(
      [
        { nome: 'Banana', quantidade: 0, preco: 1.99 },
        { nome: 'Maçã', quantidade: 10, preco: 2.99 },
        { nome: 'Pera', quantidade: 30, preco: 3.99 }
      ],
      'Banana'
    )

    expect(resultado).toBe(true)
  })

  it('deve retornar false se o array não contém o valor', () => {
    const resultado = contemValor2(
      [
        { nome: 'Banana', quantidade: 0, preco: 1.99 },
        { nome: 'Maçã', quantidade: 10, preco: 2.99 },
        { nome: 'Pera', quantidade: 30, preco: 3.99 }
      ],
      'Uva'
    )

    expect(resultado).toBe(false)
  })
})
