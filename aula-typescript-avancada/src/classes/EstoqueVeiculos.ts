export class EstoqueVeiculos<T> {
    estoque: {modelo: string, quantidade: number}[] = []

    adicionarEstoque(modelo: string, quantidade: number) {
        this.estoque.push({modelo: modelo, quantidade: quantidade})
    }

    removerEstoque(modelo: string){
        const index = this.estoque.findIndex(e => e.modelo === modelo)
        this.estoque.splice(index, 1)
        
    }

    consultarEstoque(modelo: string) {
        const estoque = this.estoque.find(e => e.modelo === modelo)
        return estoque
    }
}