//aula 19/02

/*


Exercício 1 - Tipagem e Arrays
Crie um array de números e imprima a soma dos valores.


let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);


Exercício 2 - Função Tipada
Crie uma função que recebe um nome e retorna uma mensagem personalizada.


function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));


Exercício 3 - Classe e Instância
Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.


class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

*/

//aula 20/02

/* Exercício 1
Crie uma interface chamada Carro, que contenha as seguintes propriedades:
marca (string)
modelo (string)
ano (number)
motor (opcional, string)
Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
*/
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "BMW",
    modelo: "X5",
    ano: 2020
}

/*
Exercício 2
Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
Depois, implemente essa função e teste com diferentes valores.
*/

interface Multiplicacao {
    (a: number, b: number) : number;
}

const multiplicar: Multiplicacao = (a, b) => a * b
console.log(multiplicar(10, 2))
console.log(multiplicar(5, 5))

/* 
Exercício 3
Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
Teste a função com um array de números e um array de strings.
*/

function inverterArray<T>(lista: T[]): T[] {
    return lista.reverse()
}

let lista1: number[] = [1, 2, 3]
let lista2: string[] = ["a", "b", "c"]

console.log(inverterArray<number>(lista1))
console.log(inverterArray<string>(lista2))


/*
Exercício 4
Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
*/

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

type Usuario = {
    nome: string;
    email: string;
}

const usuarios: Usuario[] = [] 

const repositorioUsuarios: Repositorio<Usuario> = {
    salvar: (dado: Usuario) => {
        usuarios.push(dado)
    },
    obterTodos: () => {
        return usuarios
    }
}

repositorioUsuarios.salvar({ nome: 'Alice', email: 'alice@example.com' });
repositorioUsuarios.salvar({ nome: 'Bob', email: 'bob@example.com' });

const todosUsuarios = repositorioUsuarios.obterTodos();
console.log(todosUsuarios);

/*
Exercício 5
Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.
*/

type RespostaServidor = string | boolean

function processarResposta(response: RespostaServidor) {
    if (typeof response === "string") {
        console.log("A resposta foi uma string")
    }
    if (typeof response === "boolean") {
        console.log("A resposta foi uma boolean")
    }
}

/*
Exercício 6
Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.
*/
type Estudante = {
    nome: string;
    curso: string;
}

type Trabalhador = {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: 'Vitor Hugo',
    curso: 'ADS',
    empresa: 'Itaú',
    cargo: 'Estagiário',
};

console.log(estudanteTrabalhador)