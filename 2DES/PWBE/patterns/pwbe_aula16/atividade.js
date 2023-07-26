class Veiculo {
    constructor(placa, modelo, marca, ano, diaria) {
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano;
        this.idade = this.getIdade()
        this.diaria = diaria
    }
    getIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano
    }
}

class Aluguel {
    constructor() {
        
    }
}

var veiculos = [
    new Veiculo('RGB-1234', 'Corolla', 'Toyota', 2010, 90.5),
];
