class Usuario {
    constructor(u) {
        this.id = u.id
        this.nome = u.nome
        this.cpf = u.cpf
        this.email = u.email
        this.senha = u.senha
        this.nasto = u.nasto   
    }

    readAll() {
        return `
        SELECT u.*, t.telefone, e.cep, e.numero, e.complemento
        from users u
        join telefones t on t.user_id = u.id
        join enderecos e on e.user_id = u.id
        where u.id = ${id};
        `
    }

    alterar() {
        return `
            UPDATE users VALUES ('${cpf}', '${nome}', '${email}', '${senha}', '${nasto}') WHERE id = ${id}
        `
    }
}

module.exports = Usuario