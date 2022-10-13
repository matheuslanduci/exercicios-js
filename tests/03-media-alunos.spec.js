import { describe, expect, it } from 'vitest'

import mediaDeNotas from '../src/03-media-alunos'

describe('Função de média de alunos', () => {
  it('deve retornar a média de notas de um aluno', () => {
    const resultado = mediaDeNotas(10, 8, 9)

    expect(resultado).toBe(9)
  })
})
