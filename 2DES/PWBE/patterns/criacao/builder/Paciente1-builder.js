// criar uma classe paciente com o método construtor
class Paciente {
    // atributos
    nome;
    idade;
    peso;
    altura;
    imc;
    constructor(nome, idade, peso, altura) { // parametros
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.imc = Number((peso / (altura ** 2)).toFixed(2));
    }

}
// construir o Objeto paciente1 utilizando a classe Paciente com o construtor
const paciente1 = new Paciente('Jorgina', 74, 48, 1.59);
console.log(paciente1);