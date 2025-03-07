import { RelatorioVeiculos } from './utils/RelatorioVeiculos';
import { FiltroVeiculo } from './utils/FiltroVeiculos';
import { EstoqueVeiculos } from './classes/EstoqueVeiculos';
import { GerenciadorVeiculo } from './classes/GerenciadorVeiculo';
import { Carro } from './interface/Carro';
import { Moto } from './interface/Moto';
import { Veiculo } from './interface/Veiculo';
/*
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};
const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};
console.log("Carro:", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto:", minhaMoto);
console.log(minhaMoto.acelerar());

*/

// Exercicio 1 

/*
const bmwCarro: Carro = {
    marca: "BMW",
    modelo: "X1",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};


let gerenciadorCarro: GerenciadorVeiculo<Carro> = new GerenciadorVeiculo<Carro>()
let gerenciadorMoto: GerenciadorVeiculo<Moto> = new GerenciadorVeiculo<Moto>()
gerenciadorCarro.adicionar(bmwCarro)
console.log(gerenciadorCarro.listarVeiculos())
gerenciadorCarro.remover(bmwCarro)
console.log(gerenciadorCarro.listarVeiculos())
*/


// Exercicio 2

/*
let estoqueCarro: EstoqueVeiculos<Carro> = new EstoqueVeiculos<Carro>()

estoqueCarro.adicionarEstoque("BMW X1", 2)
estoqueCarro.adicionarEstoque("Hyundai HB20", 3)

console.log(estoqueCarro.consultarEstoque("BMW X1"))
*/

// Exercicio 3

/*
let filtroVeiculo: FiltroVeiculo = new FiltroVeiculo
const listaVeiculo: Veiculo[] = [
    {marca: "BMW", modelo: "X1", ano: 2020, acelerar: () => "Carro acelerando!"},
    {marca: "Hyundai", modelo: "XR500", ano: 2022, acelerar: () => "Moto acelerando!"},
]

console.log(filtroVeiculo.filtrarPorAno(listaVeiculo, 2020))
console.log(filtroVeiculo.filtrarPorMarca(listaVeiculo, "BMW"))
*/

let relatorioVeiculos: RelatorioVeiculos = new RelatorioVeiculos
const listaVeiculo: Veiculo[] = [
    {marca: "BMW", modelo: "X1", ano: 2020, acelerar: () => "Carro acelerando!"},
    {marca: "Hyundai", modelo: "XR500", ano: 2022, acelerar: () => "Moto acelerando!"},
]

console.log(relatorioVeiculos.gerarRelatorio(listaVeiculo))