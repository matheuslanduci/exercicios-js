import { describe, expect, it } from 'vitest'

import qualMaior from '../src/05-qual-maior'

describe('Função de qual número é maior', () => {
  it('deve retornar qual número é maior', () => {
    const resultado = qualMaior(12, 31)

    expect(resultado).toBe(31)
  })

  it('deve retornar que os números são iguais', () => {
    const resultado = qualMaior(12, 12)

    expect(resultado).toBe('Os números são iguais')
  })
})
