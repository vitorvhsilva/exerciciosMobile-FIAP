/*

Exercício 1:  
    Crie uma função tradicional converterParaMaiusculas que recebe uma string e retorna ela em maiúsculas.  
    Reescreva-a como arrow function.  
    Declare uma variável mensagem dentro da função e tente acessá-la fora. Explique o erro em comentários.  

*/

const converterParaMaiusculas = (texto) => {
    let mensagem = "Mensagem dentro da função"
    return texto.toUpperCase()
}

/* 
O código console.log(mensagem) seguir da o erro:
    Uncaught ReferenceError: mensagem is not defined
        at <anonymous>:7:13

Porque a variável mensagem foi criada dentro do escopo da função, se tornando uma variável LOCAL, ou seja,
só é possível acessar o valor dessa variável se você utiliza-lá dentro da função

Agora, se a varíavel tivesse sido criado fora da função, seria possível acessar ela de qualquer lugar, pois 
seria uma variável GLOBAL
*/

/*

Exercício 2:  
    Crie uma função processarDados que aceita um callback como parâmetro (ex: imprime "Processo concluído").  
    Implemente uma função assíncrona buscarUsuario que retorna um objeto { nome: "Fulano", id: 1 } após 1 segundo. Use .then() para exibir o resultado.  
*/

function processarDados(callback) {
    console.log("Processando dados...")
    
    callback().then(usuario => {
        console.log(`O usuário com ID ${usuario.id} é ${usuario.nome}.`)
    })
}

const buscarUsuario = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "Fulano", id: 1 })
        }, 1000)
    })
}

processarDados(buscarUsuario)