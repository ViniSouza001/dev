class Veiculo {
    placa;
    modelo;
    marca;
    ano;
    idade;
    diaria;
    constructor(placa, modelo, marca, ano, diaria, idade) {
        this.placa = placa,
        this.modelo = modelo,
        this.marca = marca,
        this.ano = ano,
        this.idade = this.getIdade(),
        this.diaria = diaria
    }
    getIdade() {
        const dataAtual = new Date().getFullYear();
        const idade = dataAtual - this.ano;
        return Number(idade)
        
    }
}

const veiculo1 = new Veiculo("PWBE15", "A3", "Audi", 2017, 200);
console.log(veiculo1);