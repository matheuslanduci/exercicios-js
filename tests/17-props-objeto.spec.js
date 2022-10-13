import { describe, expect, it } from 'vitest'

import propsObjeto from '../src/17-props-objetos'

describe('Função de Pegar as Props de um Objeto', () => {
  it('deve retornar as props de um objeto', () => {
    const resultado = propsObjeto({ nome: 'João', idade: 20 })

    expect(resultado).toEqual(['nome', 'idade'])
  })

  it('deve retornar um array vazio se o objeto não tiver props', () => {
    const resultado = propsObjeto({})

    expect(resultado).toEqual([])
  })
})
