var table = document.querySelector('table');
var tbody = document.querySelector('tbody');

function listar() {
    fetch('http://localhost:3000/atendimentos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => {return response.json()})
    .then(data =>{
        data.forEach(content => {
            let linha = document.createElement('tr'); linha.classList.add('linha')
            let id = document.createElement('td');
            let paciente = document.createElement('td');
            let medico = document.createElement('td');
            let data = document.createElement('td');
            let nav = document.createElement('td'); nav.classList.add('nav');

            id.innerHTML = content.id;
            paciente.innerHTML = content.paciente_nome;
            medico.innerHTML = content.medico_nome;
            data.innerHTML = formatarData(content.data);
            adicionarInfo(nav, content.id);
            
            linha.appendChild(id);
            linha.appendChild(paciente);
            linha.appendChild(medico);
            linha.appendChild(data);
            linha.appendChild(nav);
            
            tbody.appendChild(linha);
        })
    })
}

function formatarData(data) {
    let date = new Date(data);
    let opcoes = {day: '2-digit', month: '2-digit', year: 'numeric'};
    let formato = new Intl.DateTimeFormat('pt-BR', opcoes);
    let dataFormatada = formato.format(date);
    return dataFormatada;
}

function adicionarInfo(nav, id) {
    let options = document.querySelector('#options');
    let container = document.createElement('div');
    let clone = options.cloneNode(true);
    let img = document.createElement('img'); img.classList.add('points');
    img.src = 'https://static.thenounproject.com/png/2854151-200.png';
    img.width = 20;

    img.addEventListener('click', function() {
        clone.classList.toggle('appear');
        clone.querySelector("#alterar").addEventListener('click', () => {
            
            alterarAtendimento(id);
        });
        clone.querySelector('#remover').addEventListener('click', () => {
            excluirAtendimento(id);
        });
    });
    container.appendChild(img);

    container.appendChild(clone);
    return nav.appendChild(container);
}

// function alterarAtendimento(id) {
//     fetch(`http://localhost:3000/atendimento/:${id}`)
// }