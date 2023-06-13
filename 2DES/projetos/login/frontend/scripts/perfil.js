const usuario = JSON.parse(window.localStorage.getItem('usuario'))
const body = document.querySelector('body')
const form = document.querySelector('form');
const lista = document.createElement('ul');
const janela = document.querySelector('.window')
const mensagem = document.querySelector('#mensagem')

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
            <li>Senha: ${addInputPassword('senha')}</li>
            <li>Confirmar senha: ${addInputPassword('confirma')}</li>
            `
        })
        form.appendChild(lista)
};


function formataTelefone(telefones) {
    // caso o usuário tenha mais de um telefone, irá ser formatado com ponto e vírgula
    return telefones.join(', ')
}

// '${complemento}' ou 'sem complemento'
function validaComplemento(argumento) {
    response = ''
    argumento == null 
    ? response = `Complemento: ${addInput('Sem complemento', "complemento")}`
    : response = `Complemento: ${addInput(argumento, "complemento")}`
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
    var input = `<input onfocus="inputFocus()" onblur="inputNoFocus()" id='${nome}' class="inputs" type="date" value="${value}" />`
    return input
}

function addInput(value, nome) {
    return `<input onfocus="inputFocus()" onblur="inputNoFocus()" id="${nome}" class="inputs" type="text" value="${value}" autocomplete="username" />`
}

function addInputPassword(nome) {
    return `<input id="${nome}" onfocus="inputFocus()" onblur="inputNoFocus()" class="inputs" type="password" autocomplete="new-password"/>`
}


// alterar informações do perfil
function alterar() {

    let confirmSenha = verificarSenha()
    /*
     * índices
     * confirmSenha === 0: senhas inválidas (diferentes)
     * confirmSenha === 1: senhas aceitas (alterar)
     * confirmSenha === 2: senhas vazias (continuam as mesmas)
     * confirmSenha === 3: senhas não podem conter espaço
     */

    if(confirmSenha === 2) {
        var inpCpf = document.querySelector('#cpf')
        var inpNome = document.querySelector('#nome')
        var inpEmail = document.querySelector('#email')
        var inpNasto = document.querySelector('#nasto')
        const data = {
            'id': idUser,
            'cpf': inpCpf.value,
            'nome': inpNome.value,
            'email': inpEmail.value,
            'nasto': inpNasto.value
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
    } else if (confirmSenha === 1) {
        var inpCpf = document.querySelector('#cpf')
        var inpNome = document.querySelector('#nome')
        var inpEmail = document.querySelector('#email')
        var inpNasto = document.querySelector('#nasto')
        let inpSenha = document.querySelector('#senha')
        const data = {
            'id': idUser,
            'cpf': inpCpf.value,
            'nome': inpNome.value,
            'email': inpEmail.value,
            'nasto': inpNasto.value,
            'senha': inpSenha.value
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
    } else if (confirmSenha === 3){
        toggleWindow('A senha não pode conter espaços em branco!')
    }
    else {
        toggleWindow('Suas senhas não coincidem :(')
    }
}

// se a senha e a verificação são iguais
function verificarSenha() {
    let senha = document.querySelector('#senha').value
    console.log(senha);
    let confirmSenha = document.querySelector('#confirma').value
    let teste = 'aoba'
    /*
     * índice
     * return 0: senhas inválidas (diferentes)
     * return 1: senhas aceitas (alterar)
     * return 2: inputs vazios (senhas continuam as mesmas)
     * return 3: senhas não podem conter espaço
     */

    if(senha.length == 0 || confirmSenha.length == 0) return 2

    // se as senhas forem diferentes
    if(senha != confirmSenha) return 0
    
    // permite que a senha tenha letras (maiúsculas e minusculas), números e caracteres especiais
    const regex = /^(?=.*[a-zA-Z\d@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if(!regex.test(senha)) return 0

    if(senha.includes(' ') || confirmSenha.includes(' ')) {
        return 3;
    }

    return 1
}

function atualizar() {
    localStorage.removeItem('usuario');
    fetch(`http://localhost:3000/atualizar/${idUser}`, {method: 'GET'})
    .then(response => {return response.json()})
    .then(informations => {
        localStorage.setItem('usuario', JSON.stringify(informations))
        const stateObj = {tela: 'Perfil'}
            const title = "Perfil"
            const url = './perfil.html'
            history.replaceState(stateObj, title, url)
            location.reload()
    })
}

function inputFocus() {
    const button = document.querySelector('button')
    button.disabled = true
    button.className = 'disabled'
}

function inputNoFocus() {
    // setTimeout(() => {
        
    // }, 500);
    const button = document.querySelector('button')
        button.disabled = false
        button.classList.remove('disabled')
}

// abrir e fechar janela de mensagem
function toggleWindow(texto) {
    // var close = document.querySelector('#close')
    janela.classList.toggle('hidden')
    // close.classList.toggle('hidden')
    janela.classList.toggle('animacao')
    mensagem.textContent = texto
    setTimeout(() => {
        atualizar()
    }, 1700);
}