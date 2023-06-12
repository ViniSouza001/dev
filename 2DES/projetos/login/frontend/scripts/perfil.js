const usuario = JSON.parse(window.localStorage.getItem('usuario'))
const body = document.querySelector('body')
const main = document.querySelector('main');
const lista = document.createElement('ul');


var idUser = 0;

body.addEventListener('load', carregar())
function carregar(){
    const { id, cpf, nome, email, nasto } = usuario[0]
    const nascimentoFormatado = nasto.slice(0, 10);

    // guardar id para alterações depois
    idUser = id

    // chama a função que retorna um fetch dos telefones do usuário
    lista.innerHTML = `
    <li>ID: ${id}</li>
    <li>CPF: ${addInput(cpf, 'cpf')}</li>
    <li>Nome: ${addInput(nome, 'nome')}</li>
    <li>E-mail: ${addInput(email, 'email')}</li>
    <li>Nascimento: ${addInputData(nascimentoFormatado, 'nasto')}</li>
    `
    // irá procurar os telefones do usuário e adicionar na lista
    fetchTelefones(id) // chama a função
    .then(listaTelefones => { // retorna uma Promisse
        // formata os telefones com vírgula e espaço (', ')
        const telefonesFormatados = formataTelefone(listaTelefones);
        lista.innerHTML += `
            <li>Telefones: ${addInput(telefonesFormatados, 'telefones')}</li>
        `
    })
    
    // irá procurar e listar o(s) endereco(s) do usuário (cep, numero, e complemento)
    fetchEnderecos(id)
    .then(enderecos => {
        const { cep, numero, complemento } = enderecos[0]
        lista.innerHTML += `
            <li>CEP: ${addInput(cep, 'cep')}</li>
            <li>Número: ${addInput(numero, 'numero')}</li>
            <li>${validaComplemento(complemento, 'complemento')}</li>
        `
    })
        
        verificarSenha()
};


function formataTelefone(telefones) {
    // caso o usuário tenha mais de um telefone, irá ser formatado com ponto e vírgula
    return telefones.join(', ')
}

// '${complemento}' ou 'sem complemento'
function validaComplemento(argumento) {
    response = ''
    argumento == null 
    ? response = `Complemento: ${addInput('Sem complemento')}`
    : response = `Complemento: ${addInput(argumento, 'complemento')}`
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

function addInputData(value, nome) {
    var input = `<input onfocus="inputFocus(this)" id='${nome}' class="inputs" type="date" value="${value}" />`
    return input
}

function addInput(value, nome) {
    return `<input onfocus="inputFocus(this)" onblur="inputNoFocus(this)" id="${nome}" class="inputs" type="text" value="${value}" />`
}

function addInputPassword(nome) {
    return `<input id="${nome}" class="inputs" type="password" />`
}

// inputs
var inpCpf = document.querySelector('#cpf')
var inpNome = document.querySelector('#nome')
var inpEmail = document.querySelector('#email')
var inpNasto = document.querySelector('#nasto')

// alterar informações do perfil
function alterar() {
    var inpCpf = document.querySelector('#cpf')
    var inpNome = document.querySelector('#nome')
    var inpEmail = document.querySelector('#email')
    var inpNasto = document.querySelector('#nasto')
    const data = {
        'id': idUser,
        'cpf': inpCpf.value,
        'nome': inpNome.value,
        'email': inpEmail.value,
        'nasto': inpNasto.value,
    }

    const info = {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
    }

    fetch('http://localhost:3000/alterar', info)
    .then(response => {return response.json()})
    .then(retorno => {
        alterarTelefone()
    })
}

function atualizar() {
    localStorage.removeItem('usuario');
    fetch(`http://localhost:3000/atualizar/${idUser}`, {method: 'GET'})
    .then(response => {return response.json()})
    .then(informations => {
        localStorage.setItem('usuario', JSON.stringify(informations))
        console.log(informations);
        location.reload()
    })
}

function inputFocus() {
    const button = document.querySelector('button')
    button.disabled = true
    button.className = 'disabled'
}

function inputNoFocus() {
    setTimeout(() => {
        const button = document.querySelector('button')
        button.disabled = false
        button.classList.remove('disabled')
    }, 1000);
}

function verificarSenha() {
    lista.innerHTML += `
        <li>Senha: ${addInputPassword('senha')}</li>
        <li>Confirmar senha: ${addInputPassword('confirma')}</li>
    
    `
    main.appendChild(lista)
}