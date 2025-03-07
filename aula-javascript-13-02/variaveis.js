// Exercício 1

let nome = "Vitor Hugo da Silva";
let idade = 18;
let aprovado = true;
let notas = [10, 9.0, 9.5]
let usuario = {email: "vitor@gmail.com", senha: "vitor123"}
console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu resultado de aprovação é: ${aprovado}, devido eu ter tirado as seguintes notas: ${notas}. 
    \nCaso precise acessar o meu usuário no PC, meu e-mail é: ${usuario.email} e minha senha é: ${usuario.senha}`);

/* Null é quando você cria um variável com o valor "null" e ela só trocará o valor quando aplicar um valor válido a ela, já o undefined
é quando você define uma variável e não da um valor a ela.
*/

// Exercício 2

let valorNulo = null;  
let valorIndefinido;   

// Condicional para verificar se as variáveis são null ou undefined
if (valorNulo === null) {
    console.log("valorNulo é null");
} else if (valorNulo === undefined) {
    console.log("valorNulo é undefined");
}

if (valorIndefinido === undefined) {
    console.log("valorIndefinido é undefined");
} else if (valorIndefinido === null) {
    console.log("valorIndefinido é null");
}