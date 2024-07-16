import { Objetivo } from './modules/objetivo.js'
import { TarefaDaLista } from './types/tarefaDaLista.js'

export async function capturaTarefasDaAPI(): Promise<TarefaDaLista[]> {
  const resposta = await fetch('http://localhost:3000/tarefasApi')
  const dadosConvertidos: TarefaDaLista[] = await resposta.json()

  return dadosConvertidos
}

export async function cadastraTarefaNaAPI(titulo: string, prioridade: string,categoria:string, descricao: string,data:string) {
  const resposta = await fetch('http://localhost:3000/tarefasApi', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      titulo: titulo,
      prioridade: prioridade,
      categoria:categoria,
      descricao: descricao,
      data:data
    }),
  })

  const respostaConvertida: TarefaDaLista = await resposta.json()

  return respostaConvertida
}

export async function deletaTarefaNaAPI(id: string): Promise<void> {
  await fetch(`http://localhost:3000/tarefasApi/${id}`, {
    method: 'DELETE',
  })
}











export async function cadastraObjetivoNaAPI(titulo: string,categoria:string, statusObj:string,descricao: string,imagem:string) {
  const resposta = await fetch('http://localhost:3000/objetivosApi', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      titulo: titulo,
      statusObj: statusObj,
      categoria:categoria,
      descricao: descricao,
      imagem:imagem
    }),
  })

  const respostaConvertida: TarefaDaLista = await resposta.json()

  return respostaConvertida
}

export async function capturaObjetivosDaAPI(): Promise<Objetivo[]> {
  const resposta = await fetch('http://localhost:3000/objetivosApi')
  const dadosConvertidos: Objetivo[] = await resposta.json()

  return dadosConvertidos
}

