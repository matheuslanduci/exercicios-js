import { describe, expect, it } from 'vitest'

import conversorRomano from '../src/21-conversor-romano'

describe('Função de conversor para número romano', () => {
  it('deve retornar I para 1', () => {
    const resultado = conversorRomano(1)

    expect(resultado).toBe('I')
  })

  it('deve retornar V para 5', () => {
    const resultado = conversorRomano(5)

    expect(resultado).toBe('V')
  })

  it('deve retornar X para 10', () => {
    const resultado = conversorRomano(10)

    expect(resultado).toBe('X')
  })

  it('deve retornar L para 50', () => {
    const resultado = conversorRomano(50)

    expect(resultado).toBe('L')
  })

  it('deve retornar C para 100', () => {
    const resultado = conversorRomano(100)

    expect(resultado).toBe('C')
  })

  it('deve retornar D para 500', () => {
    const resultado = conversorRomano(500)

    expect(resultado).toBe('D')
  })

  it('deve retornar M para 1000', () => {
    const resultado = conversorRomano(1000)

    expect(resultado).toBe('M')
  })

  it('deve retornar XCIX para 99', () => {
    const resultado = conversorRomano(99)

    expect(resultado).toBe('XCIX')
  })

  it('deve retornar CMXCIX para 999', () => {
    const resultado = conversorRomano(999)

    expect(resultado).toBe('CMXCIX')
  })

  it('deve retornar MCMXCIX para 1999', () => {
    const resultado = conversorRomano(1999)

    expect(resultado).toBe('MCMXCIX')
  })

  it('deve retornar MMXVIII para 2018', () => {
    const resultado = conversorRomano(2018)

    expect(resultado).toBe('MMXVIII')
  })

  it('deve retornar MMMCMXCIX para 3999', () => {
    const resultado = conversorRomano(3999)

    expect(resultado).toBe('MMMCMXCIX')
  })

  it('deve retornar "Não é possível converter" para 4000', () => {
    const resultado = conversorRomano(4000)

    expect(resultado).toBe('Não é possível converter')
  })
})
