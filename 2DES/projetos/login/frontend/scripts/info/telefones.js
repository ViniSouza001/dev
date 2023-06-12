// irá buscar todos os telefones do usuário

async function fetchTelefones(id) {
    try {
        const resp = await fetch(`http://localhost:3000/telefones/${id}`, { method: 'GET' });
        const telefones = await resp.json();
        var telefone = [];
        telefones.forEach(element => {
            telefone.push(element.telefone);
        });
        var listaTelefones = telefone.splice(', ');
        return listaTelefones;
    } catch (error) {
        console.log(error);
    }
}

// alterar telefone
function alterarTelefone() {
    var inpTelefones = document.querySelector('#telefones')
    const data = {
        'id': idUser,
        'telefone': inpTelefones.value
    }

    const info = {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
    }

    fetch('http://localhost:3000/telefone/alterar', info)
    .then(response => {return response.json()})
    .then(retorno => {
        alterarEndereco()
    })
}