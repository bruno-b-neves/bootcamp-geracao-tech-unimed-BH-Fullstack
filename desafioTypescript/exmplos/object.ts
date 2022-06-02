/* interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
    profissao: Profissao;
}

interface Estudante extends Pessoa {
    materia: string[],
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedor,
    Pintor,
    TecnicoDeInfraEstrutura,
    Estagiario,
    Outro
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    nacionalidade: 'Brasileira',
    profissao: Profissao.TecnicoDeInfraEstrutura   
}

const andre: Pessoa = {
    nome: 'Andre',
    idade: 28,
    nacionalidade: 'Brasileiro',
    profissao: Profissao.Desenvolvedor
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 19,
    nacionalidade: 'Brasileira',
    profissao: Profissao.Estagiario
}

const paulo: Pessoa = {
    nome: 'Paulo',
    idade: 32,
    nacionalidade: 'Brasileiro',
    profissao: Profissao.Pintor
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 25,
    nacionalidade: 'Brasileira',
    profissao: Profissao.Outro,
    materia: ['Matemática Discreta', 'Programacao']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(jessica.materia) */