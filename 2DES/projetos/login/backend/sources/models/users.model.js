class Usuario {
    constructor(u) {
        this.id = u.id
        this.nome = u.nome
        this.cpf = u.cpf
        this.email = u.email
        this.senha = u.senha
        this.nasto = u.nasto
        this.telefone = u.telefone
        this.cep = u.cep
        this.numero = u.numero
        this.complemento = u.complemento
    }

    readInfo() {
        return `
            SELECT id, nome,cpf, email, senha,nasto from users where email = '${this.email}' and senha = password('${this.senha}');
        `
    }

    readTel() {
        return `
            SELECT telefone FROM telefones WHERE user_id = ${this.id};
        `
    }

    readAddress() {
        return `
            SELECT cep, numero, complemento FROM enderecos WHERE user_id = ${this.id}
        `
    }

    alterarUser() {
        if(this.senha == undefined) {
            return `
                UPDATE users SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', nasto = '${this.nasto}' WHERE id = ${this.id};
            `
        } else {
            return `
                UPDATE users SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = password("${this.senha}") , nasto = '${this.nasto}' WHERE id = ${this.id};
            `
        }
    }

    alterarTelefone() {
        return `
            UPDATE telefones SET telefone = '${this.telefone}' where user_id = ${this.id};
        `
    }

    alterarEndereco() {
        if(this.complemento == undefined) {
            return `
                UPDATE enderecos SET cep = '${this.cep}', numero = '${this.numero}' where user_id = ${this.id}
            `
        } else {
            return `
                UPDATE enderecos SET cep = '${this.cep}', numero = '${this.numero}', complemento = "${this.complemento}" where user_id = ${this.id}
            `
        }
        
    }

    atualizarInfo() {
        return `
            SELECT * FROM users WHERE id = ${this.id};
        `
    }
}

module.exports = Usuario