import { criaOpcoesDoSelect, limpaFormulario } from './form.js'
import { enviaTarefa, listaTarefas } from './tarefas.js'
import { PRIORIDADES, CATEGORIAS } from './constantes/constantes.js'
import { mudaParaLightMode, mudaParaDarkMode } from './menu.js'
import { listaObjetivos } from './modules/criarElementoObjetivo.js'

criaOpcoesDoSelect('prioridade', PRIORIDADES)
criaOpcoesDoSelect('categoria', CATEGORIAS)

listaTarefas()
listaObjetivos()

const formularioTarefas = document.querySelector('#formularioTarefas') as HTMLFormElement | null
formularioTarefas?.addEventListener('submit', (e) => enviaTarefa(e))

const botaoLimpar = document.querySelector('#botaoLimpar') as HTMLButtonElement | null
botaoLimpar?.addEventListener('click', limpaFormulario)

const botaoLightMode = document.querySelector('.botoes-mode--light') as HTMLButtonElement | null
botaoLightMode?.addEventListener('click', mudaParaLightMode)

const botaoDarkMode = document.querySelector('.botoes-mode--dark') as HTMLButtonElement | null
botaoDarkMode?.addEventListener('click', mudaParaDarkMode)

