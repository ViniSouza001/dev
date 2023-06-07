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
        SELECT * FROM telefones WHERE user_id = ${this.id};
        `
    }

    alterar() {
        return `
            UPDATE users VALUES ('${cpf}', '${nome}', '${email}', '${senha}', '${nasto}') WHERE id = ${id}
        `
    }
}

module.exports = Usuario