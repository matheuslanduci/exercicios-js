import { describe, expect, it } from 'vitest'

import periodoDia from '../src/07-periodo-dia'

describe('Função de período do dia', () => {
  it('deve retornar "Manhã" caso o horário seja de manhã', () => {
    const resultado = periodoDia(9)

    expect(resultado).toBe('Manhã')
  })

  it('deve retornar "Tarde" caso o horário seja de tarde', () => {
    const resultado = periodoDia(13)

    expect(resultado).toBe('Tarde')
  })

  it('deve retornar "Noite" caso o horário seja de noite', () => {
    const resultado = periodoDia(21)

    expect(resultado).toBe('Noite')
  })

  it('deve retornar "Madrugada" caso o horário seja de madrugada', () => {
    const resultado = periodoDia(3)

    expect(resultado).toBe('Madrugada')
  })

  it('deve retornar "Horário inválido" caso o horário seja inválido', () => {
    const resultado = periodoDia(25)

    expect(resultado).toBe('Horário inválido')
  })
})
