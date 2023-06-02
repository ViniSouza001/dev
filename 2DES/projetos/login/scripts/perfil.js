const usuario = JSON.parse(window.localStorage.getItem('usuario'));
console.log(usuario);
const body = document.querySelector('body');
const telefones = usuario.telefones.map(element => element)
const listaTelefones = telefones.join(', ')
body.addEventListener('load', carregar())
function carregar(){
    const main = document.querySelector('main');
    const lista = document.createElement('ul');
    lista.innerHTML = `
        <li>ID: ${usuario.id}</li>
        <li>CPF: ${usuario.cpf}</li>
        <li>Nome: ${usuario.nome}</li>
        <li>E-mail: ${usuario.email}</li>
        <li>Nascimento: ${usuario.nasto}</li>
        <li>CEP: ${usuario.endereco.cep}, N° ${usuario.endereco.numero}${validaComplemento(usuario.endereco.complemento)}</li>
        <li>Telefones: ${listaTelefones}</li>
    `
    main.appendChild(lista);
};

function validaComplemento(argumento) {
    console.log('validaComplemento')
    if(argumento == null) {
        return ', sem complemento';
    } else {
        return `, Complemento: ${argumento}`
    }
}

function exit() {
    localStorage.removeItem('usuario');
    const stateObj = {tela:'Login'};
    const title= 'Login';
    const url = './login.html';
    history.replaceState(stateObj, title, url);
    location.reload();
}