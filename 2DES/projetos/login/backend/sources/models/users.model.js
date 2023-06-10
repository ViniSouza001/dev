class Usuario {
    constructor(u) {
        this.id = u.id
        this.nome = u.nome
        this.cpf = u.cpf
        this.email = u.email
        this.senha = u.senha
        this.nasto = u.nasto   
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

    alterar() {
        return `
            UPDATE users SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = password('${this.senha}'), nasto = '${this.nasto}' WHERE id = ${this.id};
        `
    }
}

module.exports = Usuario