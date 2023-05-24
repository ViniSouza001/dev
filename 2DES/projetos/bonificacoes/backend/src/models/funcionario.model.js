class Funcionario {
    constructor(i) {
        this.matricula = i.matricula;
        this.nome_completo = i.nome_completo;
        this.data_admissao = i.data_admissao;
        this.salario = i.salario;
        this.data_pagamento = i.data_pagamento;
        this.desempenho = i.desempenho;
    }

    create() {
        return `INSERT INTO funcionario VALUES('${this.matricula}', '${this.nome_completo}', '${this.data_admissao}', 

        ${this.salario} , '${this.data_pagamento}', ${this.desempenho}, NULL)`;


    }

    read() {
        if(this.matricula == undefined)

            return 'SELECT * FROM funcionario';
        else 
            return `SELECT * FROM funcionario WHERE matricula = '${this.matricula}';`;
    }

    update() {
        return `UPDATE funcionario SET nome_completo = '${this.nome_completo}', data_admissao = '${this.data_admissao}', 
        salario = ${this.salario}, data_pagamento = '${this.data_pagamento}', desempenho = ${this.desempenho} WHERE matricula = '${this.matricula}'`;
    }

    delete() {
        return `DELETE FROM funcionario WHERE matricula = '${this.matricula}'`;
    }

}

module.exports = Funcionario;