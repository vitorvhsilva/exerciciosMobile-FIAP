import { Veiculo } from './../interface/Veiculo';
export class RelatorioVeiculos {
    gerarRelatorio(veiculos: Veiculo[]): string {
        let relatorio: string = ""
        veiculos.forEach(v => {
            relatorio += `Veiculo{Marca=${v.marca}, Modelo=${v.modelo}, Ano=${v.ano}}\n`
        });

        return relatorio
    }
}