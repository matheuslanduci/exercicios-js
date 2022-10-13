import { describe, expect, it } from 'vitest'

import ordemAlfabetica from '../src/10-ordem-alfabetica'

describe('Função de Ordem Alfabética', () => {
  it('deve retornar "abc" para "abc"', () => {
    const resultado = ordemAlfabetica('abc')

    expect(resultado).toBe('abc')
  })

  it('deve retornar "abc" para "cba"', () => {
    const resultado = ordemAlfabetica('cba')

    expect(resultado).toBe('abc')
  })

  it('deve retornar "abc" para "bca"', () => {
    const resultado = ordemAlfabetica('bca')

    expect(resultado).toBe('abc')
  })

  it('deve retornar "Não é possível converter" para variáveis que não sejam strings', () => {
    const resultado = ordemAlfabetica(1)

    expect(resultado).toBe('Não é possível converter')
  })
})
