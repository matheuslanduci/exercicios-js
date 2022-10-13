import { describe, expect, it } from 'vitest'

import uppercase from '../src/09-uppercase'

describe('Função de uppercase', () => {
  it('deve retornar "ABC" para "abc"', () => {
    const resultado = uppercase('abc')

    expect(resultado).toBe('ABC')
  })

  it('deve retornar "PARALELEPÍPEDO" para "pArALeLepÍpEdo"', () => {
    const resultado = uppercase('pArALeLepÍpEdo')

    expect(resultado).toBe('PARALELEPÍPEDO')
  })

  it('deve retornar "Não é possível converter" para variáveis que não sejam strings', () => {
    const resultado = uppercase(1)

    expect(resultado).toBe('Não é possível converter')
  })
})
