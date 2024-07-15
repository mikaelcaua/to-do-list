// os types permitem tipar de forma personalizada e sua estrutura é semelhante a de um objeto
export type PrioridadeSelect = {
  texto: string
  value: 'alta' | 'medio' | 'baixa'
}

export type CategoriaSelect = {
  texto: string
  value: 'pessoal' | 'familia' | 'saude' | 'estudos' | 'carreira' | 'trabalho'
}