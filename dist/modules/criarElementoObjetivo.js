import { Objetivo } from './objetivo.js';
document.addEventListener('DOMContentLoaded', () => {
    const formularioObjetivos = document.querySelector('#objetivoForm');
    if (!formularioObjetivos)
        return;
    formularioObjetivos.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.querySelector('#tituloObjetivo').value;
        const categoria = document.querySelector('#categoriaObjetivo').value;
        const statusObj = document.querySelector('#statusObjetivo').value;
        const descricao = document.querySelector('#descricaoObjetivo').value;
        const inputImagem = document.querySelector('#imagemObjetivo');
        const arquivoImagem = inputImagem.files ? inputImagem.files[0] : null;
        if (titulo && categoria && statusObj && descricao && arquivoImagem) {
            const reader = new FileReader();
            reader.onload = () => {
                const imagemUrl = reader.result;
                const elementosNovoObjetivo = {
                    titulo: titulo,
                    categoria: categoria,
                    statusObj: statusObj,
                    descricao: descricao,
                    imagem: imagemUrl,
                };
                const novoObjetivo = new Objetivo(elementosNovoObjetivo);
                criarObjetivo(novoObjetivo);
            };
            reader.readAsDataURL(arquivoImagem);
        }
        else {
            alert('Preencha todos os dados do formulário.');
        }
    });
    function criarObjetivo(novoObjetivo) {
        const ul = document.querySelector('#objetivosItens');
        if (!ul)
            return;
        const li = document.createElement('li');
        li.classList.add('container__objetivo', novoObjetivo.mudarBackgroundColor());
        li.innerHTML = `
      <div class="objetivo__titulo">${novoObjetivo.titulo}</div>
      <div class="objetivo__topicos">
        <div class="objetivo__topico">${novoObjetivo.categoria}</div>
        <div class="objetivo__topico">${novoObjetivo.statusObj}</div>
      </div>
      <div>${novoObjetivo.descricao}</div>
      <img class="objetivo__imagem" src="${novoObjetivo.imagem}" alt="${novoObjetivo.titulo}">
    `;
        ul.appendChild(li);
    }
});