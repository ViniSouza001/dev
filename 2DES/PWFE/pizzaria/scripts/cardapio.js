const body = document.querySelector('body');
const main = document.querySelector('main');
const pedidos = [];
let pizzaPosition = 0;

adicionarCard();
function adicionarCard() {
    cardapio.forEach((element, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h1 onclick="displays(), showInformations(${index})" >${element.nome}</h1>
        <div class="info">
            <p>${element.descricao}</p>
            <footer>
                <h3>R$ ${element.preco}</h3>
            </footer>
            `
        main.appendChild(card);
    })
}

function displays() {
    const window = document.querySelector('.window');
    window.classList.toggle('hidden');
    body.classList.toggle('notOverflow');
    const span = document.querySelector('#black');
    span.classList.toggle('hidden');
}

function showInformations(posicao) {
    const window = document.querySelector('.window');
    const existingInfo = document.querySelector('.informacoes');

    // Remover informações existentes, se houver
    if (existingInfo != null) {
        window.removeChild(existingInfo);
    }

    // adicionar a classe para a próxima verificação de se ela existir
    let informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');

    // adicionar as informações da pizza clicada
    informacoes.innerHTML = `
        <p>ID: ${cardapio[posicao].id}</p>
        <p>Nome: ${cardapio[posicao].nome}</p>
        <p>Descrição: ${cardapio[posicao].descricao}</p>
        <p>R$ ${cardapio[posicao].preco}</p>
    `;
    informacoes.classList.add('informacoes');
    pizzaPosition = posicao;
    window.appendChild(informacoes);
}

function addCart() {
    const dataAtual = new Date();

    const pedido = {
        pizza: cardapio[pizzaPosition],
        dataHora: dataAtual
    }
    pedidos.push(pedido);
    console.log(pedidos);
}

function menuLateral() {
    var menuLateral = document.querySelector('#menuLateral');
    // Menu alternar entre esconder e aparecer
    if (menuLateral.classList.contains('aparecer')) {
        menuLateral.classList.remove('aparecer');
    } else {
        menuLateral.classList.add('aparecer');
    }

    const listaPedidos = document.querySelector('#listaPedidos');
    let listaHTML = ''; // String para armazenar os itens do pedido

    pedidos.forEach(item => {
        listaHTML += `
            <li>
            <p>ID: ${item.pizza.id}</p>
            <p>Pizza: ${item.pizza.nome}</p>
            </li>
            <hr>
        `;
    });
    let btnAdicionar = document.createElement('button');
    btnAdicionar.classList.add('btnPedidos');
    btnAdicionar.textContent = 'Adicionar aos pedidos'
    btnAdicionar.addEventListener('click', adicionarPedidos)
    
    listaPedidos.innerHTML = listaHTML; // Atribui a string com os itens do pedido a listaPedidos.innerHTML
    listaPedidos.appendChild(btnAdicionar);
}

function adicionarPedidos() {
    alert('Adicionado ao carrinho com sucesso');
    localStorage.clear;
    localStorage.setItem('Itens', JSON.stringify(pedidos));
}