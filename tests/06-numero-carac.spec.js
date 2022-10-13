import { describe, expect, it } from 'vitest'

import numeroDeCaracteres from '../src/06-numero-carac'

describe('Função de número de caracteres', () => {
  it('deve retornar o número de caracteres', () => {
    const resultado = numeroDeCaracteres('Paralelepípedo')

    expect(resultado).toBe(14)
  })
})
