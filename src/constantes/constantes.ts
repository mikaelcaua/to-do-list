import { PrioridadeSelect, CategoriaSelect } from '../types/constantesSelect.js'

export const PRIORIDADES: Record<string, PrioridadeSelect> = {
  alta: {
    texto: 'Alta',
    value: 'alta',
  },
  medio: {
    texto: 'Médio',
    value: 'medio',
  },
  baixa: {
    texto: 'Baixa',
    value: 'baixa',
  },
}

export const CATEGORIAS: Record<string, CategoriaSelect> = {
  pessoal: {
    texto: 'Pessoal',
    value: 'pessoal',
  },
  familia: {
    texto: 'Família',
    value: 'familia',
  },
  saude: {
    texto: 'Saúde',
    value: 'saude',
  },
  estudos: {
    texto: 'Estudos',
    value: 'estudos',
  },
  carreira: {
    texto: 'Carreira',
    value: 'carreira',
  },
  trabalho: {
    texto: 'Trabalho',
    value: 'trabalho',
  },
}