var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cadastraObjetivoNaAPI, capturaObjetivosDaAPI } from '../api.js';
import { Objetivo } from './objetivo.js';
document.addEventListener('DOMContentLoaded', () => {
    const formularioObjetivos = document.querySelector('#objetivoForm');
    if (!formularioObjetivos)
        return;
    formularioObjetivos.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const titulo = document.querySelector('#tituloObjetivo').value;
        const categoria = document.querySelector('#categoriaObjetivo').value;
        const statusObj = document.querySelector('#statusObjetivo').value;
        const descricao = document.querySelector('#descricaoObjetivo').value;
        const inputImagem = document.querySelector('#imagemObjetivo');
        const arquivoImagem = inputImagem.files ? inputImagem.files[0] : null;
        if (titulo && categoria && statusObj && descricao && arquivoImagem) {
            const reader = new FileReader();
            reader.onload = () => __awaiter(void 0, void 0, void 0, function* () {
                const imagemUrl = reader.result;
                const elementosNovoObjetivo = {
                    titulo: titulo,
                    categoria: categoria,
                    statusObj: statusObj,
                    descricao: descricao,
                    imagem: imagemUrl,
                };
                const novoObjetivo = new Objetivo(elementosNovoObjetivo);
                criarObjetivoNaLista(novoObjetivo);
                yield cadastraObjetivoNaAPI(novoObjetivo.titulo, novoObjetivo.categoria, novoObjetivo.statusObj, novoObjetivo.descricao, novoObjetivo.imagem);
                formularioObjetivos.reset();
            });
            reader.readAsDataURL(arquivoImagem);
        }
        else {
            alert('Preencha todos os dados do formulário.');
        }
    }));
});
function criarObjetivoNaLista(objetivo) {
    const ul = document.querySelector('#objetivosItens');
    if (!ul)
        return;
    const li = document.createElement('li');
    li.classList.add('container__objetivo', Objetivo.mudarBackgroundColor(objetivo.statusObj));
    li.innerHTML = `
    <div class="objetivo__titulo">${objetivo.titulo}</div>
    <div class="objetivo__topicos">
      <div class="objetivo__topico">${objetivo.categoria}</div>
      <div class="objetivo__topico">${objetivo.statusObj}</div>
    </div>
    <div>${objetivo.descricao}</div>
    <img class="objetivo__imagem" src="${objetivo.imagem}" alt="${objetivo.titulo}">
  `;
    ul.appendChild(li);
}
export function listaObjetivos() {
    return __awaiter(this, void 0, void 0, function* () {
        const objetivosElm = document.querySelector('#objetivosItens');
        if (!objetivosElm)
            return;
        objetivosElm.innerHTML = '';
        const objetivos = yield capturaObjetivosDaAPI();
        objetivos.forEach((o) => {
            const objetivo = new Objetivo(o);
            criarObjetivoNaLista(objetivo);
        });
    });
}
