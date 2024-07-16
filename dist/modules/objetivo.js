export class Objetivo {
    constructor({ titulo, categoria, statusObj, descricao, imagem }) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.statusObj = statusObj;
        this.descricao = descricao;
        this.imagem = imagem;
    }
    static mudarBackgroundColor(statusObj) {
        if (statusObj === 'Concluído') {
            return 'container__objetivo--concluido';
        }
        else if (statusObj === 'Andamento') {
            return 'container__objetivo--andamento';
        }
        else {
            return 'container__objetivo--iniciar';
        }
    }
}
