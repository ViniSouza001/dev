api.get('/funcionarios')
.then(resp => {
    formatarTabela(resp.data)
});

const adicionarFuncionario = document.querySelector('.adicionar')
const janelaMensagem = document.querySelector('.window')
const inputs = document.querySelectorAll('input')
const cadastro = document.querySelector('.cadastro')
const span = document.querySelector('span')
const tbody = document.querySelector('tbody');
const form = document.querySelector('form')
const lista = document.querySelector('.lista')
const totalPagamentos = document.querySelector('#totalPagamentos')

form.addEventListener('submit', e => {
    e.preventDefault();
});



function formatarTabela(info) {
    const { matricula, nome_completo, data_admissao, salario, data_pagamento, desempenho, bonificacao } = info
    console.log(info)
    for(element of info) {
        let coluna = document.createElement('tr');
        coluna.innerHTML = `
        <td>${element.matricula}</td>
        <td>${element.nome_completo}</td>
        <td>${element.salario}</td>
        <td>${formatarData(element.data_pagamento)}</td>
        <td>${element.bonificacao}</td>
        <td onclick="deletar(${element.matricula})"><img id="delete" class="imgs" src="./assets/delete.png"/></td>
        `
        tbody.appendChild(coluna);
    }
}

function mostrarFormulario() {
    cadastro.classList.toggle('hidden')
    span.classList.toggle('hidden')
    lista.classList.toggle('hidden')
}

function formatarData(data) {
    const formato = new Date(data);
    const dataFormatada = formato.toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, '/');
    return dataFormatada;
}

function adicionar() {
    let control = 0;
    inputs.forEach(input => {
        if(input.value.length == 0) {
            control = 1;
        }
    });
    if(control == 1) {
        alert('Por favor, preencher todas as informações');
    } else {
        let body = {
            'matricula': form.matricula.value,
            'nome_completo': form.nome.value,
            'admissao': form.admissao.value,
            'salario': form.salario.value,
            'data_pagamento': form.pagamento.value,
            'desempenho': form.desempenho.value
        }
        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:3000/funcionario/cadastrar', data)
        .then(response => { 
            if(response.status == 200) {
                location.reload();
            } 
        })
    }
}

function deletar(matricula) {
    var matriculaString = matricula + ''
    if(matriculaString.length === 1) {
        matriculaFormatada = '000' + matricula
        console.log('length é igual a 3')
    }
    else if(matriculaString.length === 2) {
        matriculaFormatada = '00' + matricula
        console.log('length é igual a 2')
    }
    else {
        matriculaFormatada = '0' + matricula
        console.log('length é igual a 1')
    }
    console.log({matriculaFormatada})
    fetch(`http://localhost:3000/funcionario/excluir/${matriculaFormatada}`, {method: 'DELETE'})
    .then(resp => {resp.json()})
    .then(callback => {
        if(callback === undefined) {
            window.location.reload()
        } else {
            alert('Funcionário não foi encontrado')
        }
    })
}
