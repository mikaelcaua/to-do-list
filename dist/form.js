import { PRIORIDADES, CATEGORIAS } from './constantes/constantes.js';
export function criaOpcoesDoSelect(idSelecionado, opcoes) {
    if (!document)
        return;
    const selectCampo = document.getElementById(idSelecionado);
    if (!selectCampo || !selectCampo.checkValidity())
        return;
    const listaDeOpcoes = Object.values(opcoes);
    listaDeOpcoes.forEach((opcao) => {
        const elementoOpcao = document.createElement('option');
        elementoOpcao.innerText = opcao.texto;
        elementoOpcao.value = opcao.value;
        selectCampo.appendChild(elementoOpcao);
    });
}
export function limpaFormulario() {
    const titulo = document.querySelector('#titulo');
    const prioridade = document.querySelector('#prioridade');
    const descricao = document.querySelector('#descricao');
    const categoria = document.querySelector('#categoria');
    const data = document.querySelector('#data');
    if (titulo)
        titulo.value = '';
    if (prioridade)
        prioridade.value = PRIORIDADES.alta.value;
    if (descricao)
        descricao.value = '';
    if (categoria)
        categoria.value = CATEGORIAS.pessoal.value;
    if (data)
        data.value = '';
}
const botaoLimpar = document.querySelector('#botaoLimpar');
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', limpaFormulario);
}
