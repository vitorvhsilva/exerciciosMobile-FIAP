import { Veiculo } from "../interface/Veiculo";

export class FiltroVeiculo {
    filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
        veiculos.filter((v) => {
            v.ano == ano
        })
        return veiculos
    }

    filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
        veiculos.filter((v) => {
            v.marca == marca
        })
        return veiculos
    }
}