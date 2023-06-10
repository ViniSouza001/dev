const usuario = JSON.parse(window.localStorage.getItem('usuario'));
const body = document.querySelector('body');

body.addEventListener('load', carregar())
function carregar(){
    const { id, cpf, nome, email, nasto } = usuario[0]
    const main = document.querySelector('main');
    const lista = document.createElement('ul');
    const nascimentoFormatado = nasto.slice(0, 10);

    // chama a função que retorna um fetch dos telefones do usuário
    lista.innerHTML = `
    <li>ID: ${id}</li>
    <li>CPF: ${addInput(cpf)}</li>
    <li>Nome: ${addInput(nome)}</li>
    <li>E-mail: ${addInput(email)}</li>
    <li>Nascimento: ${addInputData(nascimentoFormatado)}</li>
    `
    // irá procurar os telefones do usuário e adicionar na lista
    fetchTelefones(id) // chama a função
    .then(listaTelefones => { // retorna uma Promisse
        // formata os telefones com vírgula e espaço (', ')
        const telefonesFormatados = formataTelefone(listaTelefones);
        lista.innerHTML += `
            <li>Telefones: ${addInput(telefonesFormatados)}</li>
        `
    })
    
    // irá procurar e listar o(s) endereco(s) do usuário (cep, numero, e complemento)
    fetchEnderecos(id)
    .then(enderecos => {
        const { cep, numero, complemento } = enderecos[0]
        lista.innerHTML += `
            <li>CEP: ${addInput(cep)}</li>
            <li>Número: ${addInput(numero)}</li>
            <li>${validaComplemento(complemento)}</li>
        `
    })
        main.appendChild(lista);
};

function formataTelefone(telefones) {
    // caso o usuário tenha mais de um telefone, irá ser formatado com ponto e vírgula
    return telefones.join(', ')
}

function validaComplemento(argumento) {
    response = ''
    argumento == null 
    ? response = `Complemento: ${addInput('Sem complemento')}`
    : response = `Complemento: ${addInput(argumento)}`
    return response
    
}

function exit() {
    localStorage.removeItem('usuario');
    const stateObj = {tela:'Login'};
    const title= 'Login';
    const url = './login.html';
    history.replaceState(stateObj, title, url);
    location.reload();
}

function addInputData(value) {
    var input = `<input class="inputs" type="date" value="${value}" />`
    return input
}

function addInput(value) {
    return `<input class="inputs" type="text" value="${value}" />`
}


// alterar informações do perfil
function alterar() {

}