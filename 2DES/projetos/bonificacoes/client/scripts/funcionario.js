const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

api.get('/funcionarios')
.then(resp => {
    formatarTabela(resp.data)
});

form.addEventListener('submit', e => {
    e.preventDefault();

});

const tbody = document.querySelector('tbody');

function formatarTabela(info) {
    const { matricula, nome_completo, data_admissao, salario, data_pagamento, desempenho, bonificacao } = info
    for(element of info) {
        let coluna = document.createElement('tr');
        coluna.innerHTML = `
        <td>${element.matricula}</td>
        <td>${element.nome_completo}</td>
        <td>${element.salario}</td>
        <td>${formatarData(element.data_pagamento)}</td>
        <td>${element.bonificacao}</td>
        <td onclick="deletar(${element.matricula})">[ - ]</td>
        `
        tbody.appendChild(coluna);
    }
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
    fetch(`http://localhost:8081/funcionario/excluir/${matricula}`)
    .then(resp => {
        return;
    })
}