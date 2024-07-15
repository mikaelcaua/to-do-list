var __await = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export async function capturaTarefasDaAPI() {
    return __await (this, void 0, void 0, function* () {
        const resposta = yield fetch('http://localhost:3000/tasks');
        const dadosConvertidos = yield resposta.json();
        return dadosConvertidos;
    });
}
export async function cadastraTarefaNaAPI(titulo, prioridade, descricao) {
    return __await(this, void 0, void 0, function* () {
        const resposta = yield fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                titulo: titulo,
                prioridade: prioridade,
                descricao: descricao,
            }),
        });
        const respostaConvertida = yield resposta.json();
        return respostaConvertida;
    });
}
export function deletaTarefaNaAPI(id) {
    return __await (this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
        });
    });
}