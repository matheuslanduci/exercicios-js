import { describe, expect, it } from 'vitest'

import olaMundo from '../src/02-ola-mundo'

describe('Função de olaMundo', () => {
  it('deve retornar "Olá, João" para o nome "João"', () => {
    const resultado = olaMundo('João')

    expect(resultado).toBe('Olá, João')
  })

  it('deve retornar "Olá, Maria" para o nome "Maria"', () => {
    const resultado = olaMundo('Maria')

    expect(resultado).toBe('Olá, Maria')
  })
})
