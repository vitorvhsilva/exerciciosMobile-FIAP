// Exercício 1


// Use if/else para verificar se um número é positivo, negativo ou zero.  

let num = 0

if (num < 0) {
    console.log("Esse número é negativo!")
} else if (num == 0) {
    console.log("Esse número é um zero!")
} else {
    console.log("Esse número é positivo!")
}

// Use um loop for para imprimir os números de 1 a 10.  

for (let i = 1; i <= 10; i++ ) {
    console.log(i)
}

// Use um loop while para calcular a soma dos números de 1 a 5.  

let soma = 0
let i = 1
while (i <= 5) {
    soma += i
    i++
}

// Exercício 2

/* 

Crie um sistema de menu usando switch-case:  
    Se o usuário digitar "A", exiba "Opção A selecionada".  
    Se digitar "B", exiba "Opção B selecionada".  
    Para outras entradas, exiba "Opção inválida".  
    Use um loop do-while para repetir o menu até o usuário digitar "S" (saída).

*/

let opcao

do {
    opcao = prompt("Usuário, selecione um opção: A - Opção A, B - Opção B, S - Saída")
    opcao.toLowerCase()
    
    switch (opcao) {
        case "a":
            console.log("Opção A selecionada")
            break
        case "b":
            console.log("Opção B selecionada")
            break
        case "s":
            console.log("Até a proxima!")
            break
        default:
            console.log("Opção invalida!")
            break
    }
} while (opcao != "s")