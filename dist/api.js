var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function capturaTarefasDaAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = yield fetch('http://localhost:3000/tarefasApi');
        const dadosConvertidos = yield resposta.json();
        return dadosConvertidos;
    });
}
export function cadastraTarefaNaAPI(titulo, prioridade, categoria, descricao, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = yield fetch('http://localhost:3000/tarefasApi', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                titulo: titulo,
                prioridade: prioridade,
                categoria: categoria,
                descricao: descricao,
                data: data
            }),
        });
        const respostaConvertida = yield resposta.json();
        return respostaConvertida;
    });
}
export function deletaTarefaNaAPI(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/tarefasApi/${id}`, {
            method: 'DELETE',
        });
    });
}
export function cadastraObjetivoNaAPI(titulo, categoria, statusObj, descricao, imagem) {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = yield fetch('http://localhost:3000/objetivosApi', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                titulo: titulo,
                statusObj: statusObj,
                categoria: categoria,
                descricao: descricao,
                imagem: imagem
            }),
        });
        const respostaConvertida = yield resposta.json();
        return respostaConvertida;
    });
}
export function capturaObjetivosDaAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = yield fetch('http://localhost:3000/objetivosApi');
        const dadosConvertidos = yield resposta.json();
        return dadosConvertidos;
    });
}
