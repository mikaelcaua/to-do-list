
import { cadastraObjetivoNaAPI, capturaObjetivosDaAPI } from '../api.js'
import { ConstructorObjetivo } from '../types/constructorObjetivo.js'
import { Objetivo } from './objetivo.js'

document.addEventListener('DOMContentLoaded', () => {
  const formularioObjetivos = document.querySelector('#objetivoForm') as HTMLFormElement | null
  if (!formularioObjetivos) return

  formularioObjetivos.addEventListener('submit', async (e: Event) => {
    e.preventDefault()

    const titulo = (document.querySelector('#tituloObjetivo') as HTMLInputElement).value
    const categoria = (document.querySelector('#categoriaObjetivo') as HTMLSelectElement).value
    const statusObj = (document.querySelector('#statusObjetivo') as HTMLSelectElement).value
    const descricao = (document.querySelector('#descricaoObjetivo') as HTMLTextAreaElement).value
    const inputImagem = document.querySelector('#imagemObjetivo') as HTMLInputElement
    const arquivoImagem = inputImagem.files ? inputImagem.files[0] : null

    if (titulo && categoria && statusObj && descricao && arquivoImagem) {
      const reader = new FileReader()
      reader.onload = async () => {
        const imagemUrl = reader.result as string

        const elementosNovoObjetivo: ConstructorObjetivo = {
          titulo: titulo,
          categoria: categoria,
          statusObj: statusObj,
          descricao: descricao,
          imagem: imagemUrl,
        }

        const novoObjetivo = new Objetivo(elementosNovoObjetivo)
        
        criarObjetivoNaLista(novoObjetivo)
        
        await cadastraObjetivoNaAPI(novoObjetivo.titulo, novoObjetivo.categoria, novoObjetivo.statusObj, novoObjetivo.descricao, novoObjetivo.imagem)
        
        formularioObjetivos.reset()
      }

      reader.readAsDataURL(arquivoImagem)
    } else {
      alert('Preencha todos os dados do formulário.')
    }
  })
})

function criarObjetivoNaLista(objetivo: Objetivo): void {
  const ul = document.querySelector('#objetivosItens') as HTMLUListElement | null
  if (!ul) return

  const li = document.createElement('li')
  li.classList.add('container__objetivo', Objetivo.mudarBackgroundColor(objetivo.statusObj))

  li.innerHTML = `
    <div class="objetivo__titulo">${objetivo.titulo}</div>
    <div class="objetivo__topicos">
      <div class="objetivo__topico">${objetivo.categoria}</div>
      <div class="objetivo__topico">${objetivo.statusObj}</div>
    </div>
    <div>${objetivo.descricao}</div>
    <img class="objetivo__imagem" src="${objetivo.imagem}" alt="${objetivo.titulo}">
  `
  
  ul.appendChild(li)
}

export async function listaObjetivos() {
  const objetivosElm = document.querySelector('#objetivosItens') as HTMLUListElement | null
  if (!objetivosElm) return

  objetivosElm.innerHTML = ''
  const objetivos = await capturaObjetivosDaAPI()
  objetivos.forEach((o: ConstructorObjetivo) => {
    const objetivo = new Objetivo(o)
    criarObjetivoNaLista(objetivo)
  })
}

