var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cadastraTarefaNaAPI, capturaTarefasDaAPI, deletaTarefaNaAPI } from './api.js';
import { PRIORIDADES, CATEGORIAS } from './constantes/constantes.js';
export function enviaTarefa(e) {
    e.preventDefault();
    const titulo = document.querySelector('#titulo').value;
    const prioridade = document.querySelector('#prioridade').value;
    const descricao = document.querySelector('#descricao').value;
    const categoria = document.querySelector('#categoria').value;
    const data = document.querySelector('#data').value;
    const dataFormatada = new Date(data).toLocaleDateString('pt-br', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    cadastraTarefaNaAPI(titulo, prioridade, categoria, descricao, dataFormatada);
}
function criarTarefa(id, titulo, prioridade, categoria, descricao, data) {
    const tarefa = document.createElement('li');
    tarefa.classList.add('listaTarefa__tarefa');
    tarefa.id = id;
    console.log(data);
    const prioridadeCor = `tarefa__prioridade--${PRIORIDADES[prioridade].value}`;
    tarefa.innerHTML = `
   <div class="tarefa__info--column">
    <div class="tarefa__info--row">
      <div class="tarefa__prioridade ${prioridadeCor}">${PRIORIDADES[prioridade].texto}</div>
      <div class="tarefa__categoria">${CATEGORIAS[categoria].texto}</div>
      <div class="tarefa__data">${data}</div>
    </div>
    <div class="tarefa__info--row">
      <div class="tarefa__titulo">${titulo}</div>
      <div class="tarefa__descricao">${descricao}</div>
    </div>
  </div>
  <div class="tarefa__buttons">
    <button class="tarefa__delete" type="button">
      <svg width="32" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_128)">
          <path
            d="M3.34131 6.33332H16.6746"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.34131 9.66665V14.6666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6746 9.66665V14.6666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.17456 6.33332L5.00789 16.3333C5.00789 16.7753 5.18349 17.1993 5.49605 17.5118C5.80861 17.8244 6.23253 18 6.67456 18H13.3412C13.7833 18 14.2072 17.8244 14.5197 17.5118C14.8323 17.1993 15.0079 16.7753 15.0079 16.3333L15.8412 6.33332"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.50793 6.33332V3.83332C7.50793 3.6123 7.59573 3.40034 7.75201 3.24406C7.90829 3.08778 8.12025 2.99998 8.34127 2.99998H11.6746C11.8956 2.99998 12.1076 3.08778 12.2639 3.24406C12.4201 3.40034 12.5079 3.6123 12.5079 3.83332V6.33332"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_128">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.00793457 0.499985)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
  `;
    return tarefa;
}
export function listaTarefas() {
    return __awaiter(this, void 0, void 0, function* () {
        const listaDeTarefa = document.getElementById('listaTarefa');
        if (!listaDeTarefa) {
            return;
        }
        const tarefas = yield capturaTarefasDaAPI();
        tarefas.forEach((element) => {
            const elementoTarefa = criarTarefa(element.id, element.titulo, element.prioridade, element.categoria, element.descricao, element.data);
            listaDeTarefa.appendChild(elementoTarefa);
        });
        const botoesDeDeletar = document.querySelectorAll('.tarefa__delete');
        botoesDeDeletar.forEach((botao) => botao.addEventListener('click', (e) => {
            e.preventDefault();
            const elementoTarefa = botao.parentElement
                .parentElement;
            removeTarefa(elementoTarefa.id);
        }));
    });
}
export function removeTarefa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deletaTarefaNaAPI(id);
        const tarefaParaDeletar = document.getElementById(id);
        if (tarefaParaDeletar) {
            tarefaParaDeletar.remove();
        }
    });
}
