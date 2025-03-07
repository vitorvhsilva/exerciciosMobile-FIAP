export class GerenciadorVeiculo<T> {
    veiculos: T[] = []

    adicionar(veiculo: T) {
        this.veiculos.push(veiculo)
    }

    remover(veiculo: T) {
        const index = this.veiculos.indexOf(veiculo)
        this.veiculos.splice(index)
    } 

    listarVeiculos() {
        return this.veiculos
    }

}