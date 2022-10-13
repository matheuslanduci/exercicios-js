import { describe, expect, it } from 'vitest'

import getNome from '../src/16-get-nome'

describe('Função de Pegar o Nome', () => {
  it('deve retornar o nome do usuário', () => {
    const resultado = getNome({ nome: 'João' })

    expect(resultado).toBe('João')
  })

  it('deve retornar "Não existe uma propriedade nome neste objeto" se não houver uma propriedade nome no objeto', () => {
    const resultado = getNome({})

    expect(resultado).toBe('Não existe uma propriedade nome neste objeto')
  })
})
