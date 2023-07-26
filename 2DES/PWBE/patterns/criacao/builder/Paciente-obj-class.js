// criar um objeto javascript diretamente
/* const objeto = {};

// adicionar atributos no objeto
objeto.nome = "Márcia";
objeto.idade = 19;
objeto.peso = 66.5;
objeto.altura = 1.58;

// criar um método imc (indice de massa corpórea)
objeto.getImc = function() {
    return Number((this.peso / (this.altura ** 2)).toFixed(2));
};

// Incorporar o resultado do método a um atributo (variável)
objeto.imc = objeto.getImc();

// mostrar o objeto com o método incorporado
console.log(objeto); */
// criar um objeto javascript a partir de uma classe
class Paciente {
    // atributos
    nome;
    idade;
    peso;
    altura;
    imc = this.getImc();

    // método
    getImc (){
        return Number((this.peso / this.altura ** 2).toFixed(2));
    }
}

const paciente1 = new Paciente();

paciente1.nome = "Alfredo";
paciente1.idade = 35;
paciente1.peso = 80;
paciente1.altura = 1.75;
console.log(paciente1);
paciente1.imc = paciente1.getImc();
console.log(paciente1);
