/* interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
};

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {}
const brasileiro: Brasileiro = {

} */

/* 
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao')
    }
});

$('body').novaFuncao()
 */

//  Variaveis com readonly e private
/* interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
};

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K]
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
};

const cao = new MeuCachorro('Apolo', 14);
 */

// Conditionals from parameters com "?"
/* 
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
};

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // Redirecionar(usuario.cargo)
    }

    // Redirecionar para a área do usuário
};  */

// Conditionals from parameters
/* interface IUsuario {
    id: string;
    email: string;
};

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        // redirecionar para a área de Administração
    }

    // redirecionar para a área do usuário
};

//generic types
/* 
function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
};

adicionaApendiceALista([1, 2, 3], 'd');
 */


// tratando tags inputs
/* 
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
}); 
*/