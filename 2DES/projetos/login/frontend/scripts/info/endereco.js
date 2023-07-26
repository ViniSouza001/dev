// irá buscar todos os endereços do usuário
async function fetchEnderecos(id) {
    const response = await fetch(`http://localhost:3000/enderecos/${id}`, { method: 'GET' });
    const enderecos = await response.json();
    return enderecos;
}

function alterarEndereco() {
    var inpCep = document.querySelector('#cep')
    var inpNumero = document.querySelector('#numero')
    var inpComplemento = document.querySelector('#complemento')
    const data = {
        'id': idUser,
        'cep': inpCep.value,
        'numero': inpNumero.value,
        'complemento': inpComplemento.value
    }

    const info = {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
    }

    fetch('http://localhost:3000/endereco/alterar', info)
    .then(response => {return response.json()})
    .then(retorno => {
        toggleWindow('Informações salvas com sucesso :)')
    })
    .catch(err => {console.log(err)})
}