import { PRIORIDADES, CATEGORIAS } from './constantes/constantes.js'
import { PrioridadeSelect, CategoriaSelect } from './types/constantesSelect.js'

 
export function criaOpcoesDoSelect(idSelecionado: string, opcoes: Record<string, PrioridadeSelect | CategoriaSelect>): void {
  if(!document) return
  const selectCampo = document.getElementById(idSelecionado) as HTMLSelectElement | null 
  if (!selectCampo || !selectCampo.checkValidity()) return 
  const listaDeOpcoes = Object.values(opcoes)
  listaDeOpcoes.forEach((opcao) => {
    const elementoOpcao = document.createElement('option')
    elementoOpcao.innerText = opcao.texto
    elementoOpcao.value = opcao.value
    selectCampo.appendChild(elementoOpcao)
  })
}

export function limpaFormulario(): void {

  const titulo = document.querySelector('#titulo') as HTMLInputElement | null
  const prioridade = document.querySelector('#prioridade') as HTMLSelectElement | null
  const descricao = document.querySelector('#descricao') as HTMLTextAreaElement | null
  const categoria = document.querySelector('#categoria') as HTMLSelectElement | null
  const data = document.querySelector('#data') as HTMLInputElement | null

  if (titulo) titulo.value = ''
  if (prioridade) prioridade.value = PRIORIDADES.alta.value
  if (descricao) descricao.value = ''
  if (categoria) categoria.value = CATEGORIAS.pessoal.value
  if (data) data.value = ''
}

const botaoLimpar = document.querySelector('#botaoLimpar')
if (botaoLimpar) {
  botaoLimpar.addEventListener('click', limpaFormulario)
}