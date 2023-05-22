const body = document.querySelector('body');
const main = document.querySelector('main');

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
    window.appendChild(informacoes);
}

function addCart() {
    alert('carrinho')
}