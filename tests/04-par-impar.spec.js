import { describe, expect, it } from 'vitest'

import parOuImpar from '../src/04-par-impar'

describe('Função de par ou impar', () => {
  it('deve retornar par para um número par', () => {
    const resultado = parOuImpar(12)

    expect(resultado).toBe('par')
  })

  it('deve retornar ímpar para um número impar', () => {
    const resultado = parOuImpar(31)

    expect(resultado).toBe('ímpar')
  })
})
