let funcionario = {
    code: 10,
    name: 'John'
};

let employee: (code: number, name: string) => {
    code: 10,
    name: 'John'
}

interface Funcionario {
    code: number
    nome: string
}

let funcionario3: Funcionario = {
    code: 200,
    nome: 'John'
}